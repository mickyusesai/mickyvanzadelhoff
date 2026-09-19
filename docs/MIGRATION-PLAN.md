# Migration plan: demodernenomaden.nl → mickyvanzadelhoff.com

**Status (2026-09-19, session 8):** Phases 0–5 (pre-launch part), 6 (launch: real 301s merged and deployed, old domain redirecting via Cloudflare, verified), 7 (illustrated headers) and 8 (repositioning + spot illustrations) done. Phase 5 post-launch batch 1 (five affiliate articles) refreshed and fact-checked (55 of 58 notes resolved by Claude, 3 partner-link tasks left) and batch 2 (ten ondernemen articles) refreshed on 2026-09-16; briefing 2 applied (`/automatisering/` with spot illustrations, `/intake/` form, D26/D27); the crypto guide deepened with live widgets on 2026-09-17 (D29) and its Bitcoin chart fixed the same day (the TradingView script overwrites its container height, so the fixed-height frame now wraps the container); the intake mail moved from SMTP to Postmark's HTTPS API because Railway blocks SMTP on the Hobby plan (D30); everything is merged (PR #16) and Micky confirmed on 2026-09-19 that the intake form delivers. Open on Micky's side: Phase 6 steps 5–8 (www record, Search Console change of address, cancel Cloud86 hosting, post-launch monitoring), the Technogym workshop original for /over/ and the homepage 'Ik bouw' block (the 21 MB PNG in the Drive folder 'Claude' is over the 10 MB Drive-tool limit; share it as 'anyone with the link' or add a JPG), rotate the fal.ai key. The homepage hero and the blog author box now use `micky-van-zadelhoff-portret.webp`, a square crop of `IMG_1680.JPG` from that folder (2026-09-15).
**Next:** Micky decides on the two dead Possibol links in the bol.com article and shares the Technogym original as a JPG; then Phase 5 batch 3 (remaining ondernemen + online-geld-verdienen).
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
**Post-launch batch 1, affiliate articles (2026-09-15):** Micky asked for the five articles that carry most of the affiliate income first: `finst-crypto-exchange`, `bitvavo-review-crypto`, `madelon-vos-review-bitcoin-crypto-traden`, `handelen-in-crypto-valuta` and `webinar-software-review`. Each was rewritten from a fact sheet that a research agent verified against the vendor sites (fee pages, help centres, API, Trustpilot, KvK) and news sources on 2026-09-15; every affiliate `/go/` link was kept, Micky's first-person voice and structure preserved, and everything that could not be verified or changes often (prices, staking rates, promos, market data) carries a `<!-- TODO: verify -->` comment. Headline changes: Finst and Bitvavo both hold a MiCA licence from the AFM (Finst 24 Jul 2025, Bitvavo 27 Jun 2025); Bitvavo's DCG episode is closed (money back Dec 2024), its CEO left in July 2025, staking became Earn (Flex/Fixed) with much lower Flex rates, minimum trade is €5 and the 204-coin FAQ list became 21 names; the crypto guide lost its 'bullish record market' framing and $TRUMP hype (now −97%), got the correct satoshi definition, the December 2024 $100k date, the October 2025 ATH, box 3 2026 figures, MiCA, the halving and the 2025–26 hacks, and describes `/go/get-crypto-masterclass` honestly as the free Bitcoin training of Alles Over Crypto (paid product now Money Mastery); Madelon Vos got the 2026 line-up and prices (Academy €899/€799, MoneyTalks €39,95 with the €1 trial auto-renew warning, BBB €1.999/€1.399), a criticism section (FTM/STAP 2023, finfluencer coverage 2025) and Trustpilot instead of 'no negative reviews'; the 'Crypto Diamonds' pitch, the English channel and the present-tense hogeschool job were dropped. The webinar comparison re-priced all 13 tools from their pricing pages (WebinarKit's one-time $597 is gone, WebinarNinja is now ProProfs and per-attendee, Livestorm is per-credit, GetResponse webinars only in Creator) and added Contrast, Teams, Zoom and StreamYard.
**Partner links that need Micky (found while checking targets, not changed):** `/go/get-webinarjam` and `/go/get-everwebinar` (mickyvz.krtra.com) land on a Kartra 'error/referrer' page; `/go/get-webinarninja` (webinarninja.com/1402.html) returns a server error since the ProProfs takeover; `/go/getresponse` points at a Dutch feature page that now redirects to the getresponse.com homepage; `/go/webinarkit` still works but its ThriveCart URL is named after the vanished one-time offer; `/go/gotomeeting` and `/go/bitvavo` return 403 to bots and need a browser check. Also to check in the affiliate dashboards: which welcome bonus the Finst and Bitvavo links carry right now (both rotate).
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

### Phase 8 — Repositioning for the MKB director + spot illustrations  ✅ (2026-09-15, on the branch)
Micky's briefing (`website-herpositionering-briefing.md`, written in another Claude session) applied in full except §8 (English version: the site is Dutch-only, D12): new /over/, homepage proof-first, workshops hub with proof strip and "Waarom ik", workshop detail pages with programme, requirements, FAQ (introductie) and bar-app opening, examples, who attends, what you keep (bouwweek), contact page with three reasons and proof strip, book out of the menu with a context line and a workshop CTA, header button "Stuur een WhatsApp", new footer line, all facts from `FACTS`. "42 landen", "1000+" and "luchtkasteelarchitect" are gone from the codebase (articles untouched).

- **Logos:** Technogym and Mooijer Volendam as SVG from their sites; Holstein Flowers as a wordmark (no logo file found on their site; Micky can drop an SVG in `public/images/clients/` and add the path in `CLIENTS`). Press: NPO Radio 1 and Klein Wonen Magazine cropped from the old "bekend van" image; Frankwatching as a wordmark (site blocks the sandbox).
- **Photos:** the three photos Micky sent arrived inline only, so `workshop-technogym.webp` is the migrated 1200px Technogym photo. To do for Micky: add the sharp original of that photo plus the hoodie portrait and the two-person photo (crop Micky on the right) to `public/images/micky/` and tell Claude; the hero photo on the homepage is still the old portrait.
- **Spot illustrations:** `scripts/generate-spots.mjs` + `src/data/spot-illustrations.json`. Recraft in the header style refuses to isolate an object: every icon came back as a full scene with foliage, even with explicit negatives, colour hints without green, and vector substyles. Tested alternatives: Recraft vector substyles (real SVG output, but still with plants around the object), colour hints without green, FLUX dev and FLUX Pro (cleanly isolated on white, but soft and glossy, not the bold flat look of the headers). Decision D24: keep Recraft's mini scenes and frame them as small stickers (`.spot` in `global.css`), so icons, workshop cards, stats and contact reasons all belong to the same family as the article headers.  ✅ (2026-09-15, on the branch)
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
| D23 | Repositioning | Micky's briefing of 2026-09-15 is the source of truth for copy and structure of the main pages: proof first, nomad past as context, WhatsApp as the wanted action, book out of the menu. §8 (English) not applied (D12). |
| D24 | Spot illustrations | Mini scenes in the header style, framed as small stickers, instead of isolated icons (Recraft cannot isolate, FLUX loses the style). About 25 test images, $1.20. |
| D25 | Affiliate-article refresh rules | Claude's call, 2026-09-15, for Micky to confirm: a dead or broken `/go/` link stays in the article with a `<!-- TODO -->` naming the fix (Micky owns the affiliate accounts); a vanished offer (WebinarKit one-time price) is said to be gone rather than silently removed; a partner's product is described as it is today (the Alles Over Crypto link is a free Bitcoin training, not a '100x coin' reveal) and volatile numbers (prices, staking rates, market data) always carry a TODO. Category `web3` articles keep their affiliate links but lose bullish framing. |
| D26 | Automatisering page | Micky's briefing 2 (2026-09-15) applied: `/ai-workshops/bouwen-met-claude-code/` (5 days, €7.500) is replaced by the service page `/automatisering/` (meedraaien, €150 p/u excl. btw, offerte after a free intake, one year of service), the second card on the hub and the homepage now reads "AI-automatisering op maat · vanaf €150 p/u", old URL 301s. Claude's calls, for Micky to confirm: the menu stays flat (the hub lists both services; no dropdown), "Plan een gratis intake" is a mail link with a prefilled subject until there is an agenda link, the illustrations are inline SVG in the site's own tokens rather than the briefing's hex values, and §5 (English version) is not applied (D12, Dutch only). Open per the briefing: a customer case with numbers, a standard line for what the year of service covers, a minimum project size. |
| D27 | Intake form, wording, batch 2 | Micky, 2026-09-16: (1) `/intake/` form for the free intake, mailed to Micky via SMTP (nodemailer, env vars on Railway), no calendar integration, he confirms within a day; (2) he has an IT background: "geen programmeerachtergrond" removed everywhere, replaced by "IT-achtergrond, met AI een toverstaf"; (3) the About page no longer shows the three nomad articles, only a book block; (4) the 58 review notes were fact-checked by Claude instead of Micky (55 resolved, 3 partner-link tasks remain) and unverifiable facts are removed rather than flagged from now on; (5) batch 2 = ten ondernemen articles, refreshed the same day; (6) Holstein Flowers logo supplied by Micky. |
| D28 | Dead affiliate programmes | Micky, 2026-09-16: the WebinarJam, EverWebinar, WebinarNinja and GetResponse affiliate links are dropped; the tools stay in the comparison with plain vendor links, and the old `/go/` URLs redirect to the vendors' homepages (`GO_OVERRIDES` in `scripts/cleanup-content.py`). Dead Fiverr gigs keep their `/go/` link but land on the Fiverr homepage with his affiliate tracking. The intake form sends via Gmail (app password) because Outlook personal accounts no longer accept SMTP passwords. |
| D29 | Live widgets in articles | Micky, 2026-09-17, for the crypto guide: a price screenshot becomes a live TradingView chart (BTC/EUR on Kraken, lazy-loaded), market figures come from CoinGecko client-side with server-rendered fallbacks, the old crypto-evolution image becomes an HTML timeline (9 stages up to AI-crypto, stablecoins, tokenisatie and MiCA), decorative images become generated scenes (`public/images/spots/crypto-*.webp`), and the staking screenshot becomes a table checked on the vendor page the same day. Tables are wrapped for horizontal scrolling on phones (rehype plugin). Same treatment is available for other articles on request. |
| D30 | Intake mail via HTTPS API, half-hour slots | Claude, 2026-09-17, after Micky reported that the form hung and then failed: Railway blocks outbound SMTP on the Free, Trial and Hobby plans (only Pro allows it), so the Gmail SMTP route could never connect and ran into nodemailer's two-minute timeout. The route now sends through an HTTPS API, reads its variables from `process.env` at request time (`import.meta.env` had frozen them at build time), and keeps SMTP only as a fallback with 15-second timeouts. Claude first wired Resend (Railway's recommendation); Micky then chose Postmark, the paid account he already uses for EasyReimburse, so the route uses Postmark's single-email endpoint (`POSTMARK_SERVER_TOKEN`, `INTAKE_FROM` on a verified domain, optional `INTAKE_TO` and `POSTMARK_MESSAGE_STREAM`). Micky's SMTP variables can stay but are unused. Micky set the Postmark variables and confirmed the form works on 2026-09-19. On Micky's ask the moment pickers are now a day plus a start time on the half hour between 09:00 and 18:00 (`src/lib/intake-slots.ts`); the server validates both and formats the date without any time-zone shift. |
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
