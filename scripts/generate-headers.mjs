#!/usr/bin/env node
/**
 * Illustrated header images for articles, generated with Recraft V3 on fal.ai.
 *
 * Style: flat, layered "picture-book landscape" (rolling hills, big soft sun, long clouds,
 * silhouetted trees, grainy texture) in the Electric playground palette. One shared style block,
 * one scene ("motif") per article from src/data/header-motifs.json, category default otherwise.
 *
 * Usage (needs FAL_KEY in the environment or in .env, which is git-ignored):
 *   node scripts/generate-headers.mjs --dry-run --sample ai-tools-lijst          prints prompts, no API call
 *   node scripts/generate-headers.mjs --sample a,b --styles grain,2d_art_poster --out /tmp/headers
 *   node scripts/generate-headers.mjs --all [--force] [--apply]                 every article (skips existing)
 *   node scripts/generate-headers.mjs --only a,b --apply                        specific articles, into the repo
 * --apply rewrites `featuredImage` in the article frontmatter to /images/headers/<slug>.webp.
 * Cost: $0.04 per image (Recraft V3 on fal, digital_illustration styles).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ARTICLES = path.join(ROOT, 'src/content/articles');
const OUT_DIR = path.join(ROOT, 'public/images/headers');
const MOTIFS = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/header-motifs.json'), 'utf8'));
const ENDPOINT = 'https://fal.run/fal-ai/recraft/v3/text-to-image';
const DEFAULT_STYLE = 'digital_illustration/2d_art_poster'; // Micky's pick, round 1 (D22)
const SIZE = { width: 1820, height: 1024 }; // Recraft's 16:9 size; resized to 1600x900 on save

// Electric playground palette plus the tints needed for a landscape (see CLAUDE.md, design).
export const PALETTE = {
  ink: '#17112E',
  deepViolet: '#4C1D95',
  violet: '#6D28D9',
  lavender: '#A78BFA',
  lilac: '#DDD6FE',
  ground: '#F5F3FF',
  lime: '#D4F75B',
  paleLime: '#EEF9B8',
  peach: '#FFC9B8',
  coral: '#FF5C5C',
};

// The scene comes first because Recraft weights the start of the prompt most; the landscape is
// only the backdrop, so every header is recognisable by its own object (Micky, round 1).
export const BACKDROP_PROMPT =
  'Backdrop: a simple flat landscape of rolling hills made of rounded overlapping shapes, a peach sun low behind the hills, ' +
  'a few long clouds, one or two dark silhouetted trees at the edges, tall grass blades along the bottom.';

export const STYLE_PROMPT =
  'Flat poster illustration with a subtle grain texture, bold simple shapes, minimal detail, no outlines, light and airy overall, ' +
  'daytime with a light pastel sky (never a dark, black, blue or teal sky). No text, no letters, no logos, no faces.';

export const COLOUR_PROMPT =
  'Colours, strictly: pale lilac sky and clouds, lavender and electric violet hills with deep violet shadows, ' +
  'lime and pale lime sunlit slopes, a peach sun, near-black indigo silhouettes, and coral only for one small accent on the centerpiece.';

const CATEGORY_MOTIF = {
  ondernemen: 'a big open laptop standing on the nearest hilltop',
  digitalenomaden: 'a traveller with a large backpack, seen from behind, walking a winding path over the hills',
  'online-geld-verdienen': 'a small tree whose round leaves are coins, standing alone on the nearest hill',
  web3: 'a large faceted crystal floating above the nearest hill',
  tips: 'a wooden signpost with three arms standing at a fork in a winding path',
  review: 'a large magnifying glass standing upright on the nearest hilltop',
};

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };
const list = (s) => (s ? s.split(',').map((x) => x.trim()).filter(Boolean) : []);

function loadEnv() {
  const p = path.join(ROOT, '.env');
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"#]*)"?\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

function readArticles() {
  return fs.readdirSync(ARTICLES).filter((f) => f.endsWith('.md')).map((f) => {
    const raw = fs.readFileSync(path.join(ARTICLES, f), 'utf8');
    const fm = raw.split('---')[1] || '';
    const get = (k) => (fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm')) || [])[1] || '';
    return { file: path.join(ARTICLES, f), slug: get('slug') || f.replace(/\.md$/, ''), title: get('title'), category: get('category'), draft: get('draft') === 'true', featuredImage: get('featuredImage') };
  });
}

export function buildPrompt(article) {
  const motif = MOTIFS[article.slug] || CATEGORY_MOTIF[article.category] || CATEGORY_MOTIF.tips;
  return `Centerpiece: ${motif}, drawn large in the middle of the frame, filling about half of the image height, clearly the main subject. ${BACKDROP_PROMPT} ${STYLE_PROMPT} ${COLOUR_PROMPT}`;
}

const hexToRgb = (h) => ({ r: parseInt(h.slice(1, 3), 16), g: parseInt(h.slice(3, 5), 16), b: parseInt(h.slice(5, 7), 16) });

async function generate(prompt, style) {
  const key = process.env.FAL_KEY;
  if (!key) throw new Error('FAL_KEY is not set (environment or .env)');
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Key ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, style, image_size: SIZE, colors: Object.values(PALETTE).map(hexToRgb) }),
    signal: AbortSignal.timeout(180_000),
  });
  if (!res.ok) throw new Error(`fal ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const url = data.images?.[0]?.url;
  if (!url) throw new Error(`no image in response: ${JSON.stringify(data).slice(0, 300)}`);
  const img = await fetch(url, { signal: AbortSignal.timeout(120_000) });
  if (!img.ok) throw new Error(`download ${img.status}`);
  return Buffer.from(await img.arrayBuffer());
}

async function save(buffer, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(buffer).resize(1600, 900, { fit: 'cover' }).webp({ quality: 82 }).toFile(dest);
}

function applyFrontmatter(article, publicPath) {
  const raw = fs.readFileSync(article.file, 'utf8');
  const updated = raw.replace(/^featuredImage:.*$/m, `featuredImage: "${publicPath}"`);
  if (updated === raw) throw new Error(`no featuredImage line in ${article.file}`);
  fs.writeFileSync(article.file, updated);
}

async function main() {
  loadEnv();
  const all = readArticles().filter((a) => !a.draft);
  const styles = list(opt('styles')).map((s) => (s.includes('/') ? s : `digital_illustration/${s}`));
  if (!styles.length) styles.push(DEFAULT_STYLE);
  const sample = list(opt('sample'));
  const only = list(opt('only'));
  let targets = all;
  if (sample.length) targets = all.filter((a) => sample.includes(a.slug));
  else if (only.length) targets = all.filter((a) => only.includes(a.slug));
  else if (!flag('all')) { console.error('Pass --sample, --only or --all (see header of this file).'); process.exit(1); }
  const outDir = opt('out') || (sample.length ? path.join(ROOT, 'scratch-headers') : OUT_DIR);
  const missing = targets.filter((a) => !MOTIFS[a.slug]);
  if (missing.length) console.log(`${missing.length} of ${targets.length} articles use the category default motif.`);

  const jobs = [];
  for (const a of targets) for (const style of styles) {
    const name = sample.length || styles.length > 1 ? `${a.slug}--${style.split('/').pop()}.webp` : `${a.slug}.webp`;
    const dest = path.join(outDir, name);
    if (!flag('force') && !sample.length && fs.existsSync(dest)) continue;
    jobs.push({ a, style, dest });
  }
  console.log(`${jobs.length} image(s) to generate, about $${(jobs.length * 0.04).toFixed(2)}${flag('dry-run') ? ' (dry run)' : ''}`);
  for (const { a, style, dest } of jobs) {
    const prompt = buildPrompt(a);
    if (flag('dry-run')) { console.log(`\n[${a.slug}] ${style}\n${prompt}`); continue; }
    process.stdout.write(`${a.slug} (${style.split('/').pop()}) … `);
    try {
      const buf = await generate(prompt, style);
      await save(buf, dest);
      console.log(`ok → ${path.relative(ROOT, dest)}`);
      if (flag('apply') && !sample.length) applyFrontmatter(a, `/images/headers/${path.basename(dest)}`);
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
