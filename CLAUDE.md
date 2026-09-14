# mickyvanzadelhoff.com — Project Brief for Claude Code

> **Start here every session:** read `docs/MIGRATION-PLAN.md` (phases, status, decisions) and
> `docs/content-inventory.md` (per-article action list). Update the plan's status and decision log
> before ending a session.

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
- **Domain:** mickyvanzadelhoff.com (Dutch only)
- **Business details:** see `src/config/site.ts` (name Micky van Zadelhoff, email mickyvz@live.nl,
  WhatsApp +31681081589, KVK 62568299, no BTW number shown). Never use the old
  @demodernenomaden.nl addresses.
- **Repo:** GitHub (push directly to main, no pull request merging required)

Never suggest Netlify, Vercel, or other platforms. Railway is the deploy target, always.

---

## Language
**Dutch only** (decision D12, 2026-09-14). No English pages, no i18n routing, no hreflang.
URLs have no language prefix: `/blog/[category]/[slug]/`, `/over/`, `/boek/`, `/ai-workshops/`.

---

## Site Structure & Pages

### Primary pages (AI workshops first, personal brand second):
1. **Homepage** (`/`) — Micky's photo, the two AI workshops, press logos, free book, recent posts.
2. **AI-workshops** (`/ai-workshops/`) — Hub. One page per workshop at `/ai-workshops/[slug]/`,
   built from `src/content/workshops/*.md`: `ai-introductie` (3 h, €1.500) and
   `bouwen-met-claude-code` (5 days, max 3 people, €7.500). Adding a workshop = adding a file.
3. **About** (`/over/`) — Personal story, press mentions. Also the only place Erasmus+ (one
   paragraph) and EasyReimburse (built with AI, link to https://easyreimburse.ai/) are mentioned.
   No separate EasyReimburse or Erasmus+ pages (decisions D9, D10).
4. **Book** (`/boek/`) — Free book, **direct PDF download** at `/downloads/Digital-Nomad-Boek.pdf`.
   No email capture (D6).
5. **Blog** (`/blog/`) — Secondary in navigation. Category `web3` is kept online but hidden from
   the homepage and blog overview (D3); see `HIDDEN_FROM_LISTINGS` in `src/config/site.ts`.
6. **Contact** (`/contact/`) — WhatsApp + mail buttons, no form backend (D7).
7. **Privacy** (`/privacy/`).

### Blog / content:
- Individual articles: `/blog/[category]/[slug]/`
- This matches the original WordPress structure: `/%category%/%postname%/`
- Category pages: `/blog/[category]/`
- Categories from old site: ondernemen, digitalenomaden, online-geld-verdienen, web3, tips, review
- Affiliate links: `/go/[slug]` (relative), resolved through `src/data/redirects.json`, which is
  generated from `src/data/wordpress-redirects.csv` by `scripts/cleanup-content.py`.
- Old URLs of every kind (articles, categories, pages, uploads, legacy redirects) are answered by
  `redirects` in `astro.config.mjs`, fed by the same JSON. Do not hand-edit the JSON; edit the script.
- Article markup conventions after `scripts/fix-article-markup.py`: body headings start at H2, no bold
  inside headings, in-article promo boxes are `<aside class="cta-box cta-box--book|--workshop not-prose">`,
  YouTube embeds are `<div class="video not-prose"><iframe …></div>`. Uncertain facts in refreshed
  articles carry `<!-- TODO: verify … -->` comments for Micky to check.

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
`mickyvanzadelhoff.com/blog/[category]/[postname]/`. This is already in `redirects`
(static meta-refresh now, real 301s once the Node adapter is added at launch, Phase 6).

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
- **Direction (Micky, D2 + D15):** "Electric playground": light violet-tinted ground, ink
  `#17112E`, violet accent `#6D28D9`, lime highlighter `#D4F75B`, coral `#FF5C5C` sparingly,
  sticker-style cards (2px ink border, hard offset shadow, 20px radius). Display face Unbounded,
  body Manrope (self-hosted via @fontsource-variable). Executed with the feel of auxility.ca:
  high-tech, clean, **plenty of motion** (scroll reveals, marquee, hover lifts, drifting blobs),
  all transform/opacity only, and every animation disabled under `prefers-reduced-motion`.
  Featured images later as custom illustrations in brand colours (Lydia Hill "Personal Sunset").
  Still personal and human, NOT corporate, NOT a generic AI aesthetic.
- Tokens live in `tailwind.config.mjs`; global styles and motion in `src/styles/global.css`.
- **Typography:** Generous sizing, readable. Good for long-form Dutch text.
- **Mobile-first** — majority of blog traffic is mobile
- **Fast:** motion must not cost content speed. No animation libraries; CSS + one small
  IntersectionObserver script.
- **Analytics:** Google Analytics via `PUBLIC_GA_MEASUREMENT_ID` (env var on Railway). The
  snippet only renders when the variable is set.
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

## Reference facts (from Micky's reference pack, docs/reference/ is not committed; see plan §7)
- **EasyReimburse** (easyreimburse.ai): AI travel reimbursement for Erasmus+ youth mobility
  projects. "Travel Reimbursements From Weeks to Minutes." Participants upload tickets via a
  magic link, AI extracts routes/dates/amounts, a second AI reviews, one-click audit PDF for the
  national agency, official EU exchange rates, EU data residency. About 90% less time. Founder:
  Micky (with Elaine de Zanger). Free tier, then €129 per project. Use these facts, nothing more.
- **auxility.ca** (design reference): near-black ground, neon lime accent, violet section,
  huge clean grotesque headlines, glossy floating 3D shapes, pinned horizontal scroll sections,
  one repeated CTA. We borrow the feel (dark bands, orbs, clean type, motion), not its identity
  (no angle-bracket nav, no horizontal pinning).

## Open questions for Micky (everything else is decided, see docs/MIGRATION-PLAN.md §5)
- **Logo:** none known; the name is used as a wordmark.
- Micky prefers to answer questions **in chat**, so answers stay searchable.
- **Headshot:** a newer high-quality photo is welcome; the current default is
  `/images/micky/mick-van-zadelhoff-de-moderne-nomaden.webp`.
