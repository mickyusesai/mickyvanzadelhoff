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

**Positioning (Micky's briefing, 2026-09-15, decision D23):** the audience is the MKB director who is
weighing an AI workshop; the wanted action is a WhatsApp or mail. Proof comes first, the nomad past is
context only. The proof numbers live in `FACTS` in `src/config/site.ts` and must be used from there:
142 AI-workshops since 2024, 2000+ participants, 53 countries, 40+ organisations on EasyReimburse,
170+ articles; clients Technogym Benelux, Mooijer Volendam, Holstein Flowers (`CLIENTS`); press in
`PRESS`. Never write "42 landen", "1000+ mensen" or "luchtkasteelarchitect" again. EasyApplications is
not mentioned anywhere.

The tone of the site is: **warm, personal, storytelling-driven**. Micky shares real experiences,
not corporate speak. The design should feel like a person, not a brand agency.

---

## Tech Stack
- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Content:** Markdown (.md) files with frontmatter in /src/content/
- **Deployment:** Railway — auto-deploys on every push to main branch on GitHub. The site is
  built with `output: 'server'` + `@astrojs/node` (standalone) but every page is prerendered, so
  it is static HTML served by a small Node server (`npm run start`, see `railway.json`). The
  server exists only so the `redirects` table answers real 301s.
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
Navigation is AI-workshops · Over Micky · Blog · Contact (the book is in the footer only, D23); the
header button says "Stuur een WhatsApp".
1. **Homepage** (`/`) — Micky's photo, the two AI workshops, client logos ("Gaf workshops bij"),
   stat bar, "Ik bouw wat ik anderen leer bouwen" with a workshop photo, free book, recent posts.
2. **AI-workshops** (`/ai-workshops/`) — Hub with two cards from `src/content/workshops/*.md`:
   `ai-introductie` (3 h, €1.500, rendered at `/ai-workshops/ai-introductie/`) and `automatisering`
   (the card for the custom service; its `href` points to `/automatisering/`, so no page is built
   under `/ai-workshops/`). Adding a workshop = adding a file; an entry with `href` is card-only.
3. **AI-automatisering** (`/automatisering/`) — Custom service page built in `automatisering.astro`
   from Micky's briefing 2 (2026-09-15, decision D26): he works alongside a department and automates
   what costs too much time, with two of the customer's own people; €150 per hour excl. btw, offerte
   after a free intake (a mail link), one year of service included. Sells the outcome, not the tool.
   Inline SVG hero, eight areas with spot illustrations (`auto-*`), five-step timeline, FAQ. The old
   `/ai-workshops/bouwen-met-claude-code/` answers 301 (added in `scripts/cleanup-content.py`).
   Never write "€7.500", "5 dagen" or "bouwweek" again.
4. **About** (`/over/`) — Built directly in `over.astro` from the briefing: hero with workshop photo,
   stat bar, client logos, "nat turflijstje" story, EasyReimburse, the "AI werkt niet bestaat niet"
   stance with the big quote, "Waar ik vandaan kom" with a compact press row, coffee CTA. The old
   `src/content/pages/over-mij.md` is no longer rendered. No separate EasyReimburse or Erasmus+
   pages (decisions D9, D10).
5. **Book** (`/boek/`) — Free book, **direct PDF download** at `/downloads/Digital-Nomad-Boek.pdf`.
   No email capture (D6).
6. **Blog** (`/blog/`) — Secondary in navigation. Category `web3` is kept online but hidden from
   the homepage and blog overview (D3); see `HIDDEN_FROM_LISTINGS` in `src/config/site.ts`.
7. **Contact** (`/contact/`) — WhatsApp + mail buttons, no form backend (D7).
   **Intake form** (`/intake/`, D27, D30) is the one exception: "Plan een gratis intake" posts to the
   on-demand route `src/pages/api/intake.ts`, which mails Micky and redirects back with `?status=`.
   Railway blocks outbound SMTP on the Free, Trial and Hobby plans, so the mail goes through Resend's
   HTTPS API: env on Railway `RESEND_API_KEY`, optional `INTAKE_TO` (default the site e-mail) and
   `INTAKE_FROM` (default `Intake formulier <onboarding@resend.dev>`, which Resend only delivers to the
   address the Resend account was created with; verify mickyvanzadelhoff.com in Resend to send from the
   domain to any address). Variables are read from `process.env` at request time, never through
   `import.meta.env`, which is frozen at build time. SMTP (`SMTP_USER`/`SMTP_PASS`, a Gmail app
   password; Outlook personal accounts no longer accept SMTP passwords) stays as a fallback that only
   works on Railway Pro or another host. Fields: name, company, e-mail, phone, what to automate, what
   costs time, two proposed moments as a day plus a start time on the half hour between 09:00 and 18:00
   (`src/lib/intake-slots.ts`; 45 min, Google Meet); Micky confirms within a day.
8. **Privacy** (`/privacy/`).

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
  YouTube embeds are `<div class="video not-prose"><iframe …></div>`. Markdown tables are wrapped in
  `<div class="table-wrap">` at build time (`src/lib/rehype-table-wrap.mjs`) so they scroll on phones.
  Raw HTML plus inline `<script>` is allowed in an article for live widgets; the crypto guide has three
  patterns with CSS in `global.css`: `.live-stats` (CoinGecko figures fetched client-side, with
  server-rendered fallback numbers), `.embed` (lazy-loaded TradingView advanced chart; the fixed-height `.embed__frame` must wrap the `tradingview-widget-container`, because the widget script overwrites the container height with 100%) and `.timeline`.
  Uncertain facts in refreshed articles carry `<!-- TODO: verify … -->` comments for Micky to check;
  since 2026-09-16 the rule is to remove what cannot be verified instead of flagging it.

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
`mickyvanzadelhoff.com/blog/[category]/[postname]/`. This is in `redirects` and served
as real 301s by the Node server. The old domain itself lives in Cloudflare (nameservers moved from
Cloud86 on 2026-09-15) with a placeholder A record and one Redirect Rule that sends every request
to the same path on mickyvanzadelhoff.com (decision D21); no host check in the app.

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
- **Header images:** generated per article with `scripts/generate-headers.mjs` (Recraft V3 on fal.ai,
  needs `FAL_KEY`), scenes in `src/data/header-motifs.json`, output in `public/images/headers/`.
  Style and palette are defined in the script; see plan Phase 7.
- **Spot illustrations / icons** for the main pages: `scripts/generate-spots.mjs`, prompts in
  `src/data/spot-illustrations.json`, output in `public/images/spots/`, referenced through
  `src/lib/spots.ts`. See plan Phase 8 for what worked and what did not.
- **Photos:** `public/images/micky/workshop-technogym.webp` is the workshop photo used on the homepage
  and /over/ (a 1200px copy of the migrated Technogym photo; the sharp original is a 21 MB PNG in Micky's
  Drive folder "Claude", too big for the Drive tool; ask for a JPG). Micky has an IT background: never
  write "geen programmeerachtergrond" again; the line is "IT-achtergrond, met AI een toverstaf".
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
- **Headshot:** the homepage hero uses `/images/micky/micky-van-zadelhoff-portret.webp` (2025, square crop
  of the photo Micky shared on 2026-09-15; the original is `IMG_1680.JPG` in his Drive folder "Claude").
  The blog author box uses the same file; the old `mick-van-zadelhoff-de-moderne-nomaden.webp` stays in the repo unused.
