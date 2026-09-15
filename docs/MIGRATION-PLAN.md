# Migration plan: demodernenomaden.nl → mickyvanzadelhoff.com

**Status (2026-09-15, session 6):** Phases 0–5 (pre-launch part) and 7 (illustrated headers for all 174 articles) done. Phase 6 in progress: the site runs on the Node adapter with real 301s (on the branch, waiting for Micky to merge), the old domain is in Cloudflare with the redirect rule deployed and the nameservers switched at Cloud86 (propagating). Next: verify the redirect chain once DNS has propagated, Search Console change of address, cancel Cloud86 hosting.
**Next:** Phase 6 (Railway server with real 301s, launch checklist). After launch: Phase 5 batches.
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

### Phase 5 — Content triage and refresh  ◐ pre-launch part done
**Markup repair (all 174 articles, 2026-09-14):** `scripts/fix-article-markup.py` fixed the WordPress/Elementor conversion damage: 1,064 headings unwrapped from bold, stray H1s merged, levels normalised, 19 empty headings merged or removed, 107 FAQ-toggle anchor links unwrapped, leaked bol.com widget script and form/popup remnants removed, the repeated book and workshop promo blocks replaced by one styled box each (`.cta-box`), the meme-coin promo flagged, 122 image alt texts added. Left as is on purpose: 196 bold-only lines (emphasis, not headings), duplicated affiliate call-to-action lines.
**Refreshed to 2026 (6 AI articles):** ai-tools-lijst (rebuilt as 50 tools by category; duplicates and 13 wrong links removed), chat-gpt-ai-voor-ondernemers (15 uses, tips, risks), sora-open-ai (Sora 2, availability, alternatives), longshot-ai-review-nederlands, copymatic-review, ai-crypto-kunstmatige-intelligentie (15 projects, presale coins and meme promo dropped, no price claims). Every uncertain fact carries a `<!-- TODO: verify -->` comment; Micky reviews those before launch.
**Fact check with web search (2026-09-15):** web search works from the sandbox (direct fetching of many sites still does not). Verified and applied: OpenAI discontinued Sora (app/web 26 April 2026, API 24 September 2026; Sora 2 never launched in the EU), so `sora-open-ai` is rewritten around the shutdown and Sora is replaced by Kling in the tools list; Ocean Protocol left the ASI alliance (Oct 2025) and Bittensor's first halving happened (Dec 2025), both in the crypto article; Copymatic pricing (free 1,500 words, from ~$9/month) in the review; LongShot AI shut down mid-2025 (longshot.ai now only shows the notice), so its review is rewritten as a "what happened and what I use now" page, Frase takes its place at #7 in the tools list and the dead `/go/longshot` links in four articles are replaced by a link to that review; NotebookLM was renamed Gemini Notebook (July 2026); Texta pivoted to AI-search-visibility (GEO) tracking, Copy.ai to a "GTM AI" platform and CopyMonkey to Amazon listings, all three entries rewritten; Podcastle is now Async (Jan 2026); Arc is in maintenance mode, Dia is its successor, Atlassian owns the company; Texts.com merged into Beeper; Midjourney video since June 2025; Replit Agent. All `TODO: verify` comments in the six AI articles are resolved except the crypto price disclaimer, which stays by design.
**Tool screenshots (done 2026-09-15):** every one of the 50 tools in `ai-tools-lijst` has a homepage screenshot under its heading: 45 fresh captures in `public/images/tools/` (headless Chromium through the proxy, 1200 px webp, 1.9 MB in total) and 5 fallbacks from the old article where the site blocks headless browsers (Perplexity, ChatGPT images, Adobe Firefly, Looka, Ocoya). Re-capture: `scratchpad/shot-tools.mjs` + `insert-tool-images.py` (not committed; the insert step is idempotent).
**After launch:** the remaining articles per `docs/content-inventory.md`, batches of 10–15: ondernemen → online-geld-verdienen → digitalenomaden → review → web3. Claude drafts, Micky reviews, push.

### Phase 6 — Launch and redirects  🔄
The new site was already live on mickyvanzadelhoff.com (Railway behind Cloudflare) when this phase started, so "launch" means moving the old domain, not the new one.

1. ✅ **Node adapter (2026-09-15, on the branch).** `output: 'server'` + `@astrojs/node` standalone; every page has `export const prerender = true`, so the build is still static HTML (189 sitemap URLs, unchanged) and only the 513 redirects are on-demand routes, answered with real 301s. Verified locally: old article/category/page/feed URLs → 301 to the new path, `/go/*` → 301 to the affiliate target, unknown URLs → the new `404.astro`. Internal targets get a relative `Location` (the browser resolves it against https://mickyvanzadelhoff.com), `/go/` targets an absolute one; GET answers 301, other methods 308 (Astro's default). `npm run start` = `HOST=0.0.0.0 node ./dist/server/entry.mjs`; `railway.json` sets build/start commands and a `/` healthcheck so a broken deploy never replaces a working one. The host-based middleware from the original plan is dropped (D21): Cloudflare redirects the old domain before it reaches Railway.
2. ✅ **Old domain in Cloudflare (Micky, 2026-09-15).** Zone demodernenomaden.nl added on the free plan; root A record `192.0.2.1` proxied (the imported `www` CNAME to the root is proxied too); Redirect Rule "All incoming requests" → dynamic `concat("https://mickyvanzadelhoff.com", http.request.uri.path)`, 301, preserve query string. Nameservers changed at Cloud86 (Domeinen → Mijn domeinen → Nameservers beheren). Mailboxes on the old domain are unused (Micky), so the MX/mail records were left to die.
3. ✅ **Verified 2026-09-15 12:40 UTC:** public resolvers return the Cloudflare nameservers for demodernenomaden.nl; `demodernenomaden.nl/ondernemen/ai-tools-lijst/` → 301 → `mickyvanzadelhoff.com/ondernemen/ai-tools-lijst/` → 301 → `/blog/ondernemen/ai-tools-lijst/` (200), www works the same. Small follow-up: the second hop (Astro's redirect table) drops the query string, so `?utm_…` tags on old links are lost; add a middleware that re-appends `Astro.url.search` to the Location if that ever matters. Still to do: spot-check 20 old URLs from the export (`/go/`, categories, `/feed/`, an upload PDF).
4. ✅ **Merged and deployed** (Micky, 2026-09-15): homepage 200, old URLs answer 301, `/dit-bestaat-niet/` shows the 404 page.
5. ⏳ **www of the new domain:** in the Cloudflare zone of mickyvanzadelhoff.com add A `www` → `192.0.2.1` proxied plus a Redirect Rule www → root, path preserved (currently `www.mickyvanzadelhoff.com` does not resolve).
6. ⏳ **Google Search Console:** add demodernenomaden.nl as a domain property (TXT record in Cloudflare), "Change of address" to the mickyvanzadelhoff.com property, submit `/sitemap-index.xml` on the new property.
7. ⏳ **Cloud86:** cancel the WordPress hosting package but keep the domain registration (check with Cloud86 that the two are separate). Keep the domain and the Cloudflare rule for at least 12 months.
8. ⏳ **Post-launch:** watch Search Console coverage and 404 reports weekly for 8 weeks; Lighthouse mobile pass; canonical/OG spot-check.

### Phase 7 — Illustrated header images  ✅ (2026-09-15, on the branch)
Micky wants one illustrated header per article in the style of the reference he sent (flat, layered picture-book landscape: rolling hills, big soft sun with sky bands, long clouds, silhouetted trees, grainy texture, small coral flowers), translated into the brand colours (D2, D15).

- **Pipeline:** `scripts/generate-headers.mjs` calls Recraft V3 on fal.ai (`fal-ai/recraft/v3/text-to-image`, $0.04 per image, ~$7 for all 174 articles). One shared style prompt + colour prompt, the palette passed as Recraft's `colors` hint, one scene per article from `src/data/header-motifs.json` (category default when no motif is written). Output 1600×900 webp in `public/images/headers/`, `--apply` rewrites `featuredImage`. Needs `FAL_KEY` (environment or git-ignored `.env`).
- **Palette for the landscapes:** ink #17112E (foreground silhouettes), deep violet #4C1D95, violet #6D28D9, lavender #A78BFA, lilac #DDD6FE, ground #F5F3FF (sky, clouds), lime #D4F75B and pale lime #EEF9B8 (sunlit slopes), peach #FFC9B8 (sun glow), coral #FF5C5C (tiny flower accents only).
- **Rounds with Micky (D22):** round 1 compared `grain` and `2d_art_poster`; Micky chose the flat poster style and asked for the object to be the centerpiece so headers stay distinguishable. Round 2 moved the scene to the front of the prompt. Round 3 tested clusters with overlapping topics and gave the 36 coin articles name-based scenes (polka-dot coin, unicorn, umbrella, telescope, water drop...). Style is prompt-based; no artist's work was uploaded as a style reference.
- **Full run (done):** 174 images with 4 parallel workers, reviewed on contact sheets, 22 re-rolled for blue or teal skies or a missed object, 5 of those again, 1 a third time. Total 224 generations incl. samples, about $9. All 174 articles now point at `/images/headers/<slug>.webp` (1400×788 webp, 20 MB in total); the old migrated featured images stay in the repo untouched. Known model quirks: glass, water and "cloud" in a scene pull the sky to blue or teal; a "stack of coins" becomes a brick tower. Re-roll one article: `node scripts/generate-headers.mjs --only <slug> --force` (edit its scene in the motif map first), then `--apply-only`.

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
| D16 | EasyReimburse one-liner | Resolved from Micky's reference pack (PDF, 2026-09-14): AI travel reimbursement for Erasmus+ projects, weeks to minutes, Micky is founder. Applied on About and the build-week page. |
| D17 | Build-week programme | Claude drafted a 5-day programme; Micky adjusts later. EasyReimburse is the example result. |
| D18 | Co-trainer | Only Micky. |
| D19 | Analytics, address | Google Analytics, Measurement ID G-S08XB20E5W (default in `src/config/site.ts`, overridable with `PUBLIC_GA_MEASUREMENT_ID`). No address on the contact page. |
| D20 | Dead affiliate tools | Claude's call, 2026-09-15, for Micky to confirm: when a tool behind a `/go/` link no longer exists (LongShot), the link is replaced by a link to the review that explains the shutdown, the review URL is kept for its Google ranking, and a living tool takes the slot in the tools list. The `/go/longshot` redirect itself stays in `redirects.json`. |
| D21 | Old-domain redirect | Cloudflare does it, not Railway: demodernenomaden.nl is a Cloudflare zone with a placeholder `192.0.2.1` A record and one Redirect Rule to the same path on mickyvanzadelhoff.com (301, query preserved). Chosen because Cloud86 DNS cannot point a bare domain at Railway, Micky already had Cloudflare for the new domain, and it keeps working even if the Railway service is down. The Node server on Railway only turns the redirect table into 301s. Micky executed it on 2026-09-15. |
| D22 | Header-image style | Recraft `digital_illustration/2d_art_poster`, object as the centerpiece, landscape as backdrop, brand palette with lilac/lavender/peach tints, coral as accent (Micky, 2026-09-15, after three sample rounds). |
| — | Strategy | Migrate 1:1 first, refresh after launch. |
| — | How Micky answers | In chat, not on the board, so the answers are searchable in the conversation. |
| — | Workation page | Retired by Claude (cancelled 2023 event); old URL → workations article. |

Article-level decisions (21 rows changed by Micky) are in `docs/content-inventory.md`.

## 7. References

The Claude Code environment's network policy blocks `auxility.ca`, `easyreimburse.ai`, `elements.envato.com` and `illustrators.com`. Micky supplied a reference pack (PDF with full-page screenshots and written descriptions of auxility.ca and easyreimburse.ai) in chat on 2026-09-14; the facts are summarised in CLAUDE.md. Design refinements taken from it: dark bands with lime accents, glossy floating shapes, a lime spotlight in the hero, a stats strip, one repeated call to action.

Google Analytics Measurement ID received (G-S08XB20E5W) and wired.

## 6. Working agreement

- One phase step per session, pushed to the working branch, with this file updated.
- Claude never fabricates facts; unknowns get `<!-- TODO -->` comments in the content.
- Micky reviews: design (Phase 2), the description list (Phase 3), each refresh batch (Phase 5), the redirect map (Phase 6).
- Build must pass before every push (`npm run build`).
