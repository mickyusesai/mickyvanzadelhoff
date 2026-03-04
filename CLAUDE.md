# mickyvanzadelhoff.com — Project Brief for Claude Code

## Who is Micky van Zadelhoff
Personal brand site for **Micky van Zadelhoff** (note: Micky, not Mick).
Micky is a digital nomad, entrepreneur, author, AI trainer, and Erasmus+ coordinator.
His key expertises and products are:
- **AI & ChatGPT Workshops** for businesses (Dutch market, B2B)
- **EasyReimburse** — a SaaS web app he built (needs its own page + external link to the app)
- **Erasmus+ Coordinator** — international education coordination work
- **Digital Nomad Book** ("Verhalen en lessen uit een vrij leven") — free book, lead magnet
- **De Moderne Nomaden** — his original content blog (demodernenomaden.nl), being migrated here

The tone of the site is: **warm, personal, storytelling-driven**. Micky shares real experiences,
not corporate speak. The design should feel like a person, not a brand agency.

---

## Tech Stack
- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Content:** Markdown (.md) files with frontmatter in /src/content/
- **Deployment:** Railway — auto-deploys on every push to main branch on GitHub
- **Domain:** mickyvanzadelhoff.com
- **Repo:** GitHub (push directly to main, no pull request merging required)

Never suggest Netlify, Vercel, or other platforms. Railway is the deploy target, always.

---

## Language
**Fully bilingual: Dutch (NL) and English (EN).**

- Default language: Dutch (primary audience is Dutch)
- All pages must have both a Dutch and English version
- Use Astro's built-in i18n routing: `/nl/[slug]` and `/en/[slug]`
- Navigation, meta tags, and SEO must work correctly in both languages
- Blog articles from De Moderne Nomaden are Dutch — do not auto-translate them,
  leave English versions as TODO unless Micky provides translations
- Professional pages (AI Workshop, EasyReimburse, Erasmus+) should be available in both languages
- Hreflang tags required on all pages: `<link rel="alternate" hreflang="nl">` etc.

---

## Site Structure & Pages

### Primary pages (personal brand first):
1. **Homepage** (`/`) — Hero with Micky's photo, short intro, highlight the 3 expertises,
   recent blog posts secondary. This is a personal brand site, not a blog homepage.
2. **About** (`/about` / `/over`) — Micky's personal story, digital nomad journey,
   press mentions (NRC, Nu.nl, Vice, AD, FunX, Flow magazine)
3. **AI Workshop** (`/ai-workshop`) — Landing page for the ChatGPT/AI workshops for businesses
4. **EasyReimburse** (`/easyreimburse`) — Product page for the SaaS app, with link to the app
5. **Erasmus+** (`/erasmus`) — Page about his Erasmus+ coordination work
6. **Book** (`/boek` / `/book`) — Landing page for the free digital nomad book
7. **Blog** (`/blog`) — Article listing, secondary in navigation
8. **Contact** (`/contact`) — Contact form

### Blog / content:
- Individual articles: `/blog/[category]/[slug]/`
- This matches the original WordPress structure: `/%category%/%postname%/`
- Category pages: `/blog/[category]/`
- Categories from old site: ondernemen, digitalenomaden, online-geld-verdienen, web3, tips, review

---

## Content Migration — WordPress Source

The full content of demodernenomaden.nl is migrated into this repo
using the migration script at `/scripts/migrate-wordpress.js`.

### What was migrated:
- All articles → `/src/content/articles/` (as .md files with frontmatter)
- All pages → `/src/content/pages/` (About, book page, contact info, etc.)
- All media → `/public/images/migrated/` (optimized to .webp, max 1200px wide)

### Migration script behavior:
The script at `/scripts/migrate-wordpress.js` does the following:
1. Fetches all posts from `https://demodernenomaden.nl/wp-json/wp/v2/posts`
   (paginates automatically through all pages until complete)
2. Converts each post to a .md file with correct frontmatter
3. Fetches all media from `/wp-json/wp/v2/media` and downloads every image
   to `/public/images/migrated/`
4. Rewrites all `wp-content/uploads` URLs inside article content to local
   `/images/migrated/` paths
5. Fetches all pages from `/wp-json/wp/v2/pages` and saves to `/src/content/pages/`
6. Runs a second pass to optimize all downloaded images to .webp format,
   max 1200px wide (using sharp)
7. Logs progress throughout so you can see what's happening

To re-run the migration: `node scripts/migrate-wordpress.js`

### Image organization after migration:
```
/public/images/migrated/     <- all article and page images (auto-populated by script)
/public/images/press/        <- press logos (NRC, Nu.nl, Vice, AD, FunX, Flow)
                                manually moved from migrated folder
/public/images/micky/        <- Micky's headshots and personal photos
                                manually moved from migrated folder
```

Do not use any external `demodernenomaden.nl` image URLs anywhere in the codebase.
Always use local `/images/` paths.

### Using migrated content:
When building any page, always check `/src/content/pages/` first —
the real About page text, book description, and other copy is already there.
Do not write placeholder copy if the real content exists in these files.
The press mentions on the About page and homepage use logos from `/public/images/press/`.
Micky's photo on the homepage hero comes from `/public/images/micky/`.

---

## Frontmatter Schema for Articles
```
---
title: ""
description: ""        # Required for SEO, max 155 chars
date: YYYY-MM-DD
updated: YYYY-MM-DD    # Optional, for refreshed articles
category: ""           # ondernemen | digitalenomaden | online-geld-verdienen | web3 | tips | review
slug: ""               # Must match original WordPress postname exactly
lang: "nl"             # nl | en
draft: false
featuredImage: ""      # path to image in /public/images/
---
```

---

## SEO Rules — Never Break These
- Every page must have a unique `<title>` and `<meta name="description">`
- Sitemap must auto-generate at `/sitemap.xml` (use @astrojs/sitemap integration)
- Canonical tags on every page
- Open Graph tags (og:title, og:description, og:image) on every page
- No article goes live with `draft: false` unless it has a description
- `robots.txt` must be present
- When migrating articles, slugs must match the original WordPress slugs exactly
- Hreflang tags for bilingual pages

### Redirect strategy:
When demodernenomaden.nl eventually points to this site, the old URL structure
`demodernenomaden.nl/[category]/[postname]/` maps to
`mickyvanzadelhoff.com/blog/[category]/[postname]/`
This single prefix change (`/blog/` added) must be handled in Astro's redirect config.

---

## Monetization (handle with care)
- Display ads may be present in blog articles — leave placeholder `<div class="ad-slot">`
- Affiliate links in articles are intentional — do not remove them
- AI Workshop page should have a clear CTA and contact/booking flow
- Book page should have email capture (see TODO below)
- Crypto articles especially: flag any price data or outdated exchange info with
  an HTML comment `<!-- TODO: verify this data is still current -->`

---

## Design Guidelines
- **Vibe:** Warm, personal, storytelling. Think travel-meets-entrepreneur.
  NOT corporate, NOT techy dark theme, NOT generic AI aesthetic.
- **Typography:** Generous sizing, readable. Good for long-form Dutch text.
- **Color palette:** Warm neutrals + one accent color. Avoid cold blues/greys.
- **Mobile-first** — majority of blog traffic is mobile
- **No heavy animations** — content loads fast, feels clean
- **Micky's photo** should be prominent on homepage and about page
- Press logos (NRC, Nu.nl, Vice, etc.) used as social proof on homepage and about page

---

## Content Refresh Instructions (for bulk article updates)
When refreshing De Moderne Nomaden articles for this site:
1. Keep Micky's personal voice — first person, direct, Dutch
2. Update outdated statistics, tool names, prices
3. Improve H2/H3 structure for readability
4. Add a short intro paragraph summarizing what the reader will learn
5. Check and update any affiliate links or tool recommendations
6. Do NOT fabricate facts — flag uncertain information with an HTML comment instead
7. Crypto articles especially: flag price data and outdated exchange info for manual review
8. Never auto-translate Dutch articles to English — leave as Dutch, mark EN version as TODO

---

## Development Workflow
- Push directly to main — Railway auto-deploys, no PR merging needed
- Claude Code is connected directly to the GitHub repository
- Test locally with `astro dev` before pushing
- Always run `astro build` and check for errors before pushing to main
- Keep the repo clean: `/dist` and `/node_modules` in `.gitignore`
- Migration script output (images etc.) IS committed to the repo — it's the source of truth

---

## TODOs — Ask Micky Before Building These
- **Email tool:** Which service for newsletter/email capture?
  (Mailchimp / ConvertKit / Brevo / other) — needed for book landing page and newsletter
- **Headshot:** Does Micky have a high-quality photo for the homepage hero?
  Should be in `/public/images/micky/` before building the homepage.
- **EasyReimburse URL:** What is the actual URL of the EasyReimburse app to link to?
- **AI Workshop details:** What information, pricing, and CTA goes on the workshop page?
- **Logo:** Is there a logo for mickyvanzadelhoff.com, or use name as wordmark for now?
- **English content:** Professional pages (AI Workshop, EasyReimburse, Erasmus+) need
  English copy written by Micky — build Dutch versions first, leave EN as TODO stubs.
