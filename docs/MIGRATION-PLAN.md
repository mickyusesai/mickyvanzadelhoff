# Migration plan: demodernenomaden.nl → mickyvanzadelhoff.com

**Status:** Phase 0 (audit) done on 2026-09-14. Waiting on Micky's decisions (Phase 1).
**Source of truth for this project.** Every session starts by reading this file and `docs/content-inventory.md`.
Update the status lines and the decision log at the end of each session.

---

## 1. What we found in the audit

The earlier attempt did more than expected. The content is in the repo; the site around it is not.

| Item | State |
|---|---|
| Astro 5 + Tailwind + sitemap + i18n scaffold | Present, `astro build` passes |
| Articles migrated to `src/content/articles/` | 176 files, 318k words, clean Markdown (no raw HTML) |
| Pages migrated to `src/content/pages/` | 63 files (about 20 are real pages, the rest are old funnel/thank-you pages) |
| Images in `public/images/migrated/` | 1,350 webp + 10 pdf + 1 zip/xlsx/mp4, 152 MB |
| Real copy for the new focus | AI workshop page, About, Book, Contact exist in `src/content/pages/` |
| Site pages / layouts / design | **Missing.** Only an empty homepage with an `<h1>`. No article routes, no blog, no header/footer |
| Article `description` frontmatter | **Empty on all 176** (WordPress excerpts were empty). SEO rule broken |
| Internal links | **164 articles** still link to `https://demodernenomaden.nl/...` (257 unique targets) |
| Affiliate `/go/` links | **129 unique** redirect slugs, ~900 occurrences, all pointing at `demodernenomaden.nl/go/...`. The redirect targets live in a WordPress plugin and were NOT migrated |
| Broken image references | 23 missing files across 15 articles (minor) |
| Empty `featuredImage` | 2 articles |
| Business details in copy | Old: mick@demodernenomaden.nl, Rotterdam / Venray addresses, KVK, WhatsApp |
| English content | None |
| Railway deploy | No `start` script, Dockerfile or `railway.json` in the repo. Needs a server setup (see Phase 6) |
| Completeness vs live site | **Not verified.** The session sandbox cannot reach demodernenomaden.nl. Micky must confirm the live post count (WP admin → Posts → "Published") or provide a WordPress export XML |

### Content shape (176 articles)

| Category | Count | Character |
|---|---|---|
| web3 | 56 | Crypto guides + **35 thin "X kopen met iDEAL en Bancontact" posts** (Jan 2024, ~600 words each, heavy affiliate) |
| tips | 34 | Personal stories, timeless, the heart of the "warm, personal" brand |
| ondernemen | 26 | Business/marketing guides, incl. the AI articles (ai-tools-lijst, chat-gpt-ai-voor-ondernemers, sora) |
| digitalenomaden | 25 | Nomad guides + 9 "wonen en werken in [stad]" city guides from 2018 |
| online-geld-verdienen | 20 | Evergreen money guides, mostly dated 2018, updated to 2023 |
| review | 15 | Tool and course reviews, several of Dutch crypto/affiliate personalities |

77 titles contain a year (2023/2024/2025). Proposed action per article: see `docs/content-inventory.md`.

---

## 2. Strategy recommendation: migrate first, refresh after

Do **not** refresh 176 articles before launch. Two reasons:

1. **SEO diagnostics.** A domain move and a mass content rewrite at the same time makes it impossible to tell what caused a ranking change. Google's own guidance for site moves is: same content, new URLs, 1:1 redirects. Rewrite afterwards, on the new domain, in batches.
2. **Time to launch.** Refreshing 318k words is months of work. The AI-workshop business needs the new site now.

So the order is:

1. Build the new design and the new AI-workshop pages (the new focus).
2. Migrate content 1:1 with technical clean-up only (links, descriptions, images).
3. Prune the clearly dead content at launch (with 301s), refresh only the ~6 AI articles pre-launch.
4. Launch with a full redirect map from the old domain.
5. Refresh the remaining articles in batches of 10–15, most valuable first.

---

## 3. Phases

### Phase 0 — Audit and plan  ✅ done 2026-09-14
Inventory, plan, decision list. This document.

### Phase 1 — Decisions and inputs from Micky  ⏳ current
See section 4. Nothing in Phase 2+ is blocked on *all* of them, but the workshop list and the design direction unblock the most.

### Phase 2 — Design
1. Claude proposes 2–3 visual directions on a design canvas (homepage + article page + workshop page).
2. Micky picks one, gives feedback.
3. Build the design system: `Layout.astro`, header, footer, typography, colours, components (hero, press strip, CTA block, article card, workshop card).
4. Build page shells: homepage, blog index, category page, article page, generic content page. NL + EN.

Output: a site that renders all 176 articles in the new design at `/nl/blog/[category]/[slug]/`.

### Phase 3 — Content plumbing (no decisions needed, can run in parallel with Phase 2)
1. Content collections schema (`src/content.config.ts`) for articles, pages, workshops.
2. Rewrite all internal `demodernenomaden.nl/[category]/[slug]/` links to `/nl/blog/[category]/[slug]/`. Page links to their new locations.
3. Generate a `description` for every article from its first paragraph (Micky reviews the list in one pass).
4. Fix the 23 missing images, 2 missing featured images.
5. Affiliate links: keep `/go/[slug]` as a local redirect route on the new site, fed by a `src/data/go-links.json` map. Needs the export from WordPress (Phase 1).
6. Replace old contact details (email, address, KVK) with the new ones everywhere.
7. Ad-slot placeholders in article layout.
8. Move Micky's photos to `public/images/micky/`, press logos to `public/images/press/`.

### Phase 4 — New pages (the new focus)
1. `/ai-workshops/` hub + one page per workshop at `/ai-workshops/[slug]/`. Built from `src/content/workshops/*.md` so adding a workshop = adding a file.
2. About (from `over-mij.md`, updated), Book, Contact (form → which backend? see decisions), EasyReimburse, Erasmus+.
3. English versions of the professional pages (NL first, EN stubs until Micky supplies copy).
4. Homepage: Micky + AI workshops first, blog secondary.

### Phase 5 — Content triage and refresh
1. Apply Micky's decisions from the inventory: delete/merge with 301s, noindex where chosen.
2. Pre-launch: refresh the 6 `refresh-priority` AI articles to 2026.
3. Post-launch batches (10–15 articles each), in this order: ondernemen → online-geld-verdienen → digitalenomaden → review → web3. Each batch: Claude drafts the refresh following the rules in CLAUDE.md, Micky reviews, push.

### Phase 6 — Launch and redirects
1. Server: add `@astrojs/node` (standalone) or a small Node/Caddy server so Railway has a `start` command **and** so requests arriving with host `demodernenomaden.nl` get a 301 to the mapped URL on mickyvanzadelhoff.com. This lets Micky cancel WordPress hosting.
2. Redirect map (all 301):
   - `/[category]/[slug]/` → `/nl/blog/[category]/[slug]/` (176 articles)
   - `/[category]/` → `/nl/blog/[category]/` (6 categories)
   - `/[page-slug]/` → new page or nearest equivalent (63 pages, mapped individually; funnel pages → homepage or book page)
   - `/go/[slug]` → affiliate target (129 slugs)
   - `/wp-content/uploads/YYYY/MM/file.ext` → `/images/migrated/file.webp` (image search traffic)
   - `/feed/`, `/sitemap.xml`, `/sitemap_index.xml` → new equivalents
   - Deleted/merged articles → the article that replaces them
3. Pre-launch checklist: build passes, every old URL in the map returns 301 to a 200, sitemap complete, robots.txt, canonical/hreflang/OG on every page, Lighthouse mobile check.
4. Launch: DNS for both domains → Railway. Google Search Console: verify both properties, submit "Change of Address" from demodernenomaden.nl to mickyvanzadelhoff.com, submit new sitemap.
5. Post-launch: watch Search Console coverage and 404 reports weekly for 8 weeks. Keep the old domain and its redirects for at least 12 months.

---

## 4. Decisions needed from Micky

Answer these in the decision dashboard (artifact) or directly in this file. Unanswered = Claude proceeds with the default in *italics*.

| # | Decision | Why it matters | Default if unanswered |
|---|---|---|---|
| D1 | **Which AI workshops?** Name, audience, duration, format (in-company / open / online), price, what the participant walks away with. One line per workshop is enough | Defines the site structure and the homepage | *One workshop: the existing "ChatGPT en AI workshop voor bedrijven" (3 hours, €950)* |
| D2 | **Design direction.** Claude proposes 3 on a canvas; Micky picks. Any sites you love? Colours you hate? | Everything visual | *Warm neutrals, one accent, humanist type per CLAUDE.md* |
| D3 | **Crypto content.** 56 web3 articles: keep and refresh, keep but noindex, or delete with 301s? The 35 "X kopen met iDEAL" posts specifically | Half the crypto traffic and most affiliate income sit here, but it clashes with an AI-trainer brand | *Keep the guides, merge the 35 coin posts into one* |
| D4 | **Affiliate links.** Export the `/go/` redirect list from WordPress (Pretty Links / ThirstyAffiliates / Redirection plugin → export CSV). Or drop affiliates entirely | 900 links in the articles break without it | *Keep, route through `/go/[slug]` on the new site* |
| D5 | **Live post count.** WP admin → Posts → number next to "Published". Also Pages. Or send a WordPress export XML (Tools → Export) | Confirms the 176/63 migration is complete | *Assume complete* |
| D6 | **Email tool** for book download + newsletter (Mailchimp / ConvertKit / Brevo / MailerLite / other) | Book page and any capture form | *Placeholder form, no backend* |
| D7 | **Contact form backend** (Formspree, Netlify-style form is not available on Railway, a simple email API, or just mailto/WhatsApp) | Contact page and workshop booking CTA | *WhatsApp + mailto buttons* |
| D8 | **Business details.** Company name still "De Moderne Nomaden"? Address, KVK, BTW, email (mick@demodernenomaden.nl stays?), WhatsApp number | Footer, contact, workshop page, legal | *Keep existing, flagged with TODO* |
| D9 | **EasyReimburse.** App URL, one-paragraph pitch, screenshot | Product page | *Stub page* |
| D10 | **Erasmus+.** What do you do exactly, for whom, any organisations to name | Page content | *Stub page from the 2 existing articles* |
| D11 | **Headshot.** A high-quality recent photo for the homepage hero | Homepage | *Use `mick-van-zadelhoff-de-moderne-nomaden.webp` from the migrated set* |
| D12 | **English scope.** Which pages get real English: only the professional pages, or also About/Book? | Translation work | *Professional pages + About, blog stays NL* |
| D13 | **Old funnel pages** (startersgids, masterclass, vbnb, case-study, bedankt pages…): all retire with 301 to homepage/book? | 40+ pages | *Retire all except About, Book, Contact, Workshop, Privacy, Workation* |
| D14 | **Launch timing.** Old site keeps running until the new one is complete, then switch. Any deadline? | Planning | *No deadline* |

---

## 5. Working agreement

- One phase step per session, pushed to the working branch, with this file updated.
- Claude never fabricates facts in refreshed articles; unknowns get `<!-- TODO -->` comments.
- Micky reviews: design (Phase 2), the description list (Phase 3), each refresh batch (Phase 5), the redirect map (Phase 6).
- Build must pass before every push (`npm run build`).

## 6. Decision log

| Date | Decision | By |
|---|---|---|
| 2026-09-14 | Strategy: migrate 1:1 first, refresh after launch (section 2) | Claude, proposed |
