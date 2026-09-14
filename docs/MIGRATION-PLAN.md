# Migration plan: demodernenomaden.nl → mickyvanzadelhoff.com

**Status (2026-09-14, end of session 3):** Phases 0–4 done. The "Electric playground" design is applied to every page (D15).
**Next:** Phase 5 pre-launch part (refresh the 6 AI articles), then Phase 6 (Railway server, real 301s, launch). Still needed from Micky: the Google Analytics Measurement ID and the EasyReimburse text (see §7).
**Source of truth for this project.** Every session starts by reading this file and `docs/content-inventory.md`.
Update the status lines and the decision log at the end of each session.

---

## 1. What we found in the audit (session 1)

| Item | State then | State now |
|---|---|---|
| Astro 5 + Tailwind + sitemap scaffold | Present, build passed | Dutch-only, `@tailwindcss/typography` and `@astrojs/rss` added |
| Articles in `src/content/articles/` | 176 files, all descriptions empty, 164 linking to the old domain | 174 files (2 deleted), every description filled, 0 old-domain links |
| Pages in `src/content/pages/` | 63 files, ~40 old funnel pages | 3 kept (About, Book, Privacy); Contact and the workshop are real routes |
| Images | 1,350 webp in one folder | Press logos in `/images/press/`, Micky in `/images/micky/`, documents in `/downloads/` |
| Affiliate `/go/` links | 129 slugs, targets unknown | Export received (D4), 163 targets in `src/data/wordpress-redirects.csv`, served via `/go/<slug>` |
| Site pages | Only an empty homepage | Homepage, blog, 6 category pages, 174 articles, workshops hub + 2 workshops, About, Book, Contact, Privacy, RSS |
| Redirects | none | 513 old URLs answered (`src/data/redirects.json`) |
| Completeness | unverified | Confirmed by Micky: 176 posts, 63 pages (D5) |

## 2. Strategy: migrate first, refresh after (agreed)

Launch the new design with the migrated articles cleaned up technically and a full redirect map. Refresh articles in batches on the new domain afterwards. Only the six AI articles get refreshed before launch.

---

## 3. Phases

### Phase 0 — Audit and plan  ✅ 2026-09-14
### Phase 1 — Decisions  ✅ 2026-09-14
All 14 decisions answered or defaulted; see the decision log in section 5.

### Phase 2 — Design  ✅ 2026-09-14
Three directions on the design canvas (https://claude.ai/artifact/JDpUUxqd3TryhYXcxxUQYV); Micky chose A "Electric playground" with the feel of auxility.ca (D15). Applied: tokens in `tailwind.config.mjs`, `src/styles/global.css` (fonts, sticker components, motion), `Layout`, `Header` (with mobile menu), `Footer`, `ArticleCard`, `WorkshopCard`, `PressStrip` (marquee), `Blobs`, all pages. Motion: hero word reveal, drifting shapes, scroll reveals, marquee, hover lifts, reading progress bar, article table of contents.
Open: featured images stay the old green icon images until illustrations exist (D2 "later"); once auxility.ca is reachable, compare and refine the motion.

### Phase 3 — Content plumbing  ✅ 2026-09-14
Done by `scripts/cleanup-content.py` (re-runnable): link rewrite (1,771 links), unlinking of retired pages (24), descriptions (178 generated from first paragraphs, 2 written by hand), image fixes (6 variants restored, 11 missing images replaced by a `<!-- TODO -->`), contact details, `/go/` routing, redirect table. Content collections schema in `src/content.config.ts`; site constants in `src/config/site.ts`.

**Micky still reviews:** the generated descriptions (one pass over `grep '^description:' src/content/articles/*.md`), and the 11 `TODO: image missing` comments.

### Phase 4 — New pages  ◐ mostly done
- `/ai-workshops/` hub + `/ai-workshops/ai-introductie/` + `/ai-workshops/bouwen-met-claude-code/` from `src/content/workshops/*.md` (D1). Two `<!-- TODO Micky -->` notes inside: co-trainer Bob, and the day-by-day programme of the build week.
- `/over/` (About, with Erasmus+ paragraph per D10 and EasyReimburse mention per D9), `/boek/` (direct PDF download per D6), `/contact/` (WhatsApp + mail per D7), `/privacy/`.
- Homepage: Micky + workshops first, book, blog secondary. web3 hidden from listings (D3).
- Still open: the EasyReimburse one-liner (TODO on the About page), the analytics tool on the privacy page, whether to show a business address.

### Phase 5 — Content triage and refresh  ⏳ after launch, except the 6 AI articles
Actions per article in `docs/content-inventory.md`. Batches of 10–15: ondernemen → online-geld-verdienen → digitalenomaden → review → web3. Claude drafts, Micky reviews, push.

### Phase 6 — Launch and redirects  ⏳
1. Add `@astrojs/node` (standalone) so Railway has a start command and `redirects` become real 301s instead of meta-refresh pages. Add a middleware: any request with host `demodernenomaden.nl` or `www.demodernenomaden.nl` gets a 301 to the same path on `mickyvanzadelhoff.com`, which then resolves through the redirect table. That lets Micky cancel WordPress hosting.
2. Pre-launch checklist: build green, spot-check 20 old URLs from the export against the redirect table, sitemap complete, robots.txt, canonical/OG on every page, Lighthouse mobile.
3. Launch: DNS for both domains → Railway. Google Search Console: both properties, "Change of Address", new sitemap.
4. Post-launch: watch coverage and 404 reports weekly for 8 weeks. Keep the old domain and its redirects for at least 12 months.

---

## 4. URL map (new site)

| Old (demodernenomaden.nl) | New (mickyvanzadelhoff.com) |
|---|---|
| `/[category]/[slug]/` | `/blog/[category]/[slug]/` |
| `/[category]/`, `/category/[category]/` | `/blog/[category]/` |
| `/go/[slug]` | `/go/[slug]` → affiliate target |
| `/over-mij/` | `/over/` |
| `/digital-nomad-boek/`, `/verhalen-en-lessen-…/` | `/boek/` |
| `/workshop-ai-chatgpt-bedrijven/` | `/ai-workshops/ai-introductie/` |
| `/contact/` | `/contact/` |
| `/privacybeleid/` | `/privacy/` |
| `/workation/` | `/blog/ondernemen/workations-ondernemersreizen/` |
| retired funnel pages | `/` (or a better target listed in `scripts/cleanup-content.py`) |
| `/wp-content/uploads/…pdf`, `/e-book/…` | `/downloads/…` |
| `/feed/` | `/rss.xml` |
| legacy WordPress redirects (105) | followed through the chain to the new URL |

---

## 5. Decision log

| # | Decision | Answer (Micky, 2026-09-14) |
|---|---|---|
| D1 | Workshops | Two: **AI Introductie** (update of the existing 3-hour workshop, clearly an introduction, price up to €1.500) and **Bouwen met Claude Code** (5 days, max 3 people, build an automation for administration/customer service/marketing that the team can maintain itself, €7.500). No others for now. |
| D2 | Design | Likes the colours of the "iTalk event conference" Elementor kit. Modern tech vibe but playful, like NFT sites. Featured images later as illustrations in brand colours (Lydia Hill "Personal Sunset" style). |
| D3 | Crypto content | Keep all 56 online, but not visible from the homepage. Implemented as: category `web3` excluded from homepage and blog overview, still indexable and reachable via `/blog/web3/`. |
| D4 | Affiliate links | Full Redirection-plugin export received and stored in `src/data/wordpress-redirects.csv`. |
| D5 | Live counts | 176 articles and 63 pages confirmed. |
| D6 | Email tool | None. The book is a direct download. |
| D7 | Contact form | Default: WhatsApp + mail buttons. |
| D8 | Business details | Name: Micky van Zadelhoff. KVK unchanged (62568299). No BTW number shown. Email mickyvz@live.nl. (Address not given, not shown.) |
| D9 | EasyReimburse | Not in the menu. Mentioned on About as something built with AI that saves an industry hours. https://easyreimburse.ai/ |
| D10 | Erasmus+ | Not a page. One paragraph on About: organiser/facilitator of European Erasmus+ projects about AI education; last project in Lithuania, 30 teachers, one week developing modules on AI risks and benefits. |
| D11 | Headshot | Default: `mick-van-zadelhoff-de-moderne-nomaden.webp`. |
| D12 | English | **No English at all.** Site is Dutch-only; i18n removed. |
| D13 | Funnel pages | Retired, and links to them removed from articles (24 unlinked). |
| D14 | Launch timing | No deadline. |
| D15 | Design direction | **A · Electric playground** colours, executed with the feel of auxility.ca: high-tech, clean, plenty of motion. (Claude's sandbox cannot open auxility.ca; see §7.) |
| D16 | EasyReimburse one-liner | Micky pointed at easyreimburse.ai; blocked from the sandbox (§7). Generic line stays until the site is reachable or Micky pastes the text. |
| D17 | Build-week programme | Claude drafted a 5-day programme; Micky adjusts later. EasyReimburse is the example result. |
| D18 | Co-trainer | Only Micky. |
| D19 | Analytics, address | Google Analytics (Measurement ID still needed: set `PUBLIC_GA_MEASUREMENT_ID` on Railway). No address on the contact page. |
| — | Strategy | Migrate 1:1 first, refresh after launch. |
| — | How Micky answers | In chat, not on the board, so the answers are searchable in the conversation. |
| — | Workation page | Retired by Claude (cancelled 2023 event); old URL → workations article. |

Article-level decisions (21 rows changed by Micky) are in `docs/content-inventory.md`.

## 7. Blocked references (needs a change on Micky's side)

The Claude Code environment's network policy blocks `auxility.ca`, `easyreimburse.ai`, `elements.envato.com` and `illustrators.com`. Two ways to fix:
1. In the environment settings on claude.ai/code, allow these domains (or full internet access). See https://code.claude.com/docs/en/claude-code-on-the-web. A new session then can fetch them.
2. Paste the text of easyreimburse.ai and a few notes on auxility.ca (colours, fonts, which movements) in chat.

## 6. Working agreement

- One phase step per session, pushed to the working branch, with this file updated.
- Claude never fabricates facts; unknowns get `<!-- TODO -->` comments in the content.
- Micky reviews: design (Phase 2), the description list (Phase 3), each refresh batch (Phase 5), the redirect map (Phase 6).
- Build must pass before every push (`npm run build`).
