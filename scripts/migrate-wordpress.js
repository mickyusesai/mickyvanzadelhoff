import fs from 'node:fs/promises';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';
import sharp from 'sharp';

const WP_BASE = 'https://demodernenomaden.nl';
const WP_API = `${WP_BASE}/wp-json/wp/v2`;

const ARTICLES_DIR = path.resolve('src/content/articles');
const PAGES_DIR = path.resolve('src/content/pages');
const IMAGES_DIR = path.resolve('public/images/migrated');

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

/**
 * Paginate through a WP REST API collection endpoint.
 * Returns all items across all pages.
 */
async function fetchAllPaginated(endpoint) {
  const items = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = `${endpoint}?per_page=100&page=${page}`;
    console.log(`  Fetching ${url}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);

    totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);
    const data = await res.json();
    items.push(...data);
    page++;
  }

  return items;
}

// ─── Image downloading ───────────────────────────────────────────────────────

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ⚠ Could not download image: ${url} (${res.status})`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(destPath, buffer);
    return true;
  } catch (err) {
    console.warn(`  ⚠ Error downloading ${url}: ${err.message}`);
    return false;
  }
}

function imageFilename(url) {
  const parsed = new URL(url);
  const basename = path.basename(parsed.pathname);
  // Strip extension, we will convert to .webp later
  return basename;
}

// ─── Fetch & save all media ──────────────────────────────────────────────────

async function migrateMedia() {
  console.log('\n📷 Fetching all media…');
  const media = await fetchAllPaginated(`${WP_API}/media`);
  console.log(`  Found ${media.length} media items`);

  await ensureDir(IMAGES_DIR);

  for (const item of media) {
    const sourceUrl = item.source_url;
    if (!sourceUrl) continue;

    const filename = imageFilename(sourceUrl);
    const destPath = path.join(IMAGES_DIR, filename);

    // Skip if already downloaded
    try {
      await fs.access(destPath);
      console.log(`  ✓ Already exists: ${filename}`);
      continue;
    } catch {
      // File doesn't exist, proceed to download
    }

    console.log(`  ↓ Downloading: ${filename}`);
    await downloadImage(sourceUrl, destPath);
  }
}

// ─── Convert images to .webp ────────────────────────────────────────────────

async function optimizeImages() {
  console.log('\n🖼  Optimizing images to .webp (max 1200px wide)…');

  const files = await fs.readdir(IMAGES_DIR);
  const imageFiles = files.filter((f) =>
    /\.(jpe?g|png|gif|bmp|tiff?)$/i.test(f)
  );

  console.log(`  Found ${imageFiles.length} images to optimize`);

  for (const file of imageFiles) {
    const srcPath = path.join(IMAGES_DIR, file);
    const webpName = file.replace(/\.[^.]+$/, '.webp');
    const destPath = path.join(IMAGES_DIR, webpName);

    try {
      await sharp(srcPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(destPath);

      // Remove original after successful conversion
      if (srcPath !== destPath) {
        await fs.unlink(srcPath);
      }
      console.log(`  ✓ ${file} → ${webpName}`);
    } catch (err) {
      console.warn(`  ⚠ Could not optimize ${file}: ${err.message}`);
    }
  }
}

// ─── Rewrite image URLs in content ──────────────────────────────────────────

function rewriteImageUrls(content) {
  // Replace wp-content/uploads URLs with local paths
  // Also update extensions to .webp
  return content.replace(
    /https?:\/\/demodernenomaden\.nl\/wp-content\/uploads\/[^\s"')]+/g,
    (match) => {
      const filename = path.basename(new URL(match).pathname);
      const webpFilename = filename.replace(/\.[^.]+$/, '.webp');
      return `/images/migrated/${webpFilename}`;
    }
  );
}

// ─── Extract category slug from WP post ─────────────────────────────────────

const CATEGORY_CACHE = new Map();

async function getCategorySlug(categoryId) {
  if (CATEGORY_CACHE.has(categoryId)) return CATEGORY_CACHE.get(categoryId);

  try {
    const cat = await fetchJSON(`${WP_API}/categories/${categoryId}`);
    CATEGORY_CACHE.set(categoryId, cat.slug);
    return cat.slug;
  } catch {
    return 'uncategorized';
  }
}

// ─── Decode HTML entities ───────────────────────────────────────────────────

function decodeEntities(text) {
  const dom = new JSDOM(`<body>${text}</body>`);
  return dom.window.document.body.textContent || text;
}

// ─── Migrate posts ──────────────────────────────────────────────────────────

async function migratePosts() {
  console.log('\n📝 Fetching all posts…');
  const posts = await fetchAllPaginated(`${WP_API}/posts`);
  console.log(`  Found ${posts.length} posts`);

  await ensureDir(ARTICLES_DIR);

  for (const post of posts) {
    const title = decodeEntities(post.title.rendered);
    const slug = post.slug;
    const date = post.date.split('T')[0];
    const modified = post.modified.split('T')[0];

    // Get category
    const categoryIds = post.categories || [];
    const category = categoryIds.length > 0
      ? await getCategorySlug(categoryIds[0])
      : 'uncategorized';

    // Convert HTML content to Markdown
    let htmlContent = post.content.rendered;
    let markdown = turndown.turndown(htmlContent);

    // Rewrite image URLs
    markdown = rewriteImageUrls(markdown);

    // Get excerpt for description (strip HTML, limit to 155 chars)
    const rawExcerpt = decodeEntities(
      post.excerpt.rendered.replace(/<[^>]+>/g, '').trim()
    );
    const description = rawExcerpt.length > 155
      ? rawExcerpt.slice(0, 152) + '…'
      : rawExcerpt;

    // Get featured image path
    let featuredImage = '';
    if (post.featured_media && post.featured_media > 0) {
      try {
        const media = await fetchJSON(`${WP_API}/media/${post.featured_media}`);
        const filename = path.basename(new URL(media.source_url).pathname);
        const webpFilename = filename.replace(/\.[^.]+$/, '.webp');
        featuredImage = `/images/migrated/${webpFilename}`;
      } catch {
        // No featured image available
      }
    }

    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `description: "${description.replace(/"/g, '\\"')}"`,
      `date: ${date}`,
      `updated: ${modified}`,
      `category: "${category}"`,
      `slug: "${slug}"`,
      `lang: "nl"`,
      `draft: false`,
      `featuredImage: "${featuredImage}"`,
      '---',
    ].join('\n');

    const fileContent = `${frontmatter}\n\n${markdown}\n`;
    const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
    await fs.writeFile(filePath, fileContent, 'utf-8');
    console.log(`  ✓ ${slug}`);
  }
}

// ─── Migrate pages ──────────────────────────────────────────────────────────

async function migratePages() {
  console.log('\n📄 Fetching all pages…');
  const pages = await fetchAllPaginated(`${WP_API}/pages`);
  console.log(`  Found ${pages.length} pages`);

  await ensureDir(PAGES_DIR);

  for (const page of pages) {
    const title = decodeEntities(page.title.rendered);
    const slug = page.slug;
    const date = page.date.split('T')[0];

    // Convert HTML content to Markdown
    let htmlContent = page.content.rendered;
    let markdown = turndown.turndown(htmlContent);

    // Rewrite image URLs
    markdown = rewriteImageUrls(markdown);

    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: ${date}`,
      `slug: "${slug}"`,
      `lang: "nl"`,
      '---',
    ].join('\n');

    const fileContent = `${frontmatter}\n\n${markdown}\n`;
    const filePath = path.join(PAGES_DIR, `${slug}.md`);
    await fs.writeFile(filePath, fileContent, 'utf-8');
    console.log(`  ✓ ${slug}`);
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 Starting WordPress migration from demodernenomaden.nl\n');

  // Step 1: Fetch and save all posts
  await migratePosts();

  // Step 2: Fetch and download all media
  await migrateMedia();

  // Step 3: Fetch and save all pages
  await migratePages();

  // Step 4: Optimize images to .webp
  await optimizeImages();

  console.log('\n✅ Migration complete!');
}

main().catch((err) => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
