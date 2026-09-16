/**
 * Site-wide constants. Business details follow decision D8 in docs/MIGRATION-PLAN.md; the
 * proof facts below come from Micky's repositioning briefing (2026-09-15, decision D23).
 */
export const SITE = {
  name: 'Micky van Zadelhoff',
  url: 'https://mickyvanzadelhoff.com',
  tagline: 'AI-workshops en automatisering voor bedrijven',
  email: 'mickyvz@live.nl',
  whatsapp: '+31681081589',
  whatsappUrl: 'https://wa.me/31681081589',
  kvk: '62568299',
  linkedin: 'https://www.linkedin.com/in/mick-van-zadelhoff-1ab40726/',
  /** Default social-share image (OG). */
  ogImage: '/images/micky/workshop-technogym.webp',
  /** Google Analytics 4 Measurement ID (public by nature). Override with PUBLIC_GA_MEASUREMENT_ID on Railway. */
  gaMeasurementId: 'G-S08XB20E5W',
} as const;

/** The numbers that must be identical everywhere on the site. Change them here only. */
export const FACTS = {
  workshops: '142',
  workshopsSince: '2024',
  participants: '2000+',
  countries: '53',
  easyReimburseOrgs: '40+',
  articles: '170+',
  schoolCountries: 'vijftien',
} as const;

/** The four proof numbers, in display order. */
export const STATS = [
  { value: FACTS.workshops, label: `AI-workshops sinds ${FACTS.workshopsSince}`, icon: 'stat-workshops' },
  { value: FACTS.participants, label: 'deelnemers getraind', icon: 'stat-deelnemers' },
  { value: FACTS.countries, label: 'landen gewerkt en gereisd', icon: 'stat-landen' },
  { value: FACTS.easyReimburseOrgs, label: 'organisaties gebruiken EasyReimburse', icon: 'stat-easyreimburse' },
] as const;

/** Companies Micky gave workshops at. `logo` is an SVG under /images/clients/; without one the name is shown as a wordmark.
 *  `mark: true` means the SVG is only the emblem, so the name is shown next to it. */
export const CLIENTS = [
  { name: 'Technogym Benelux', logo: '/images/clients/technogym.svg', url: 'https://www.technogym.com/' },
  { name: 'Mooijer Volendam', logo: '/images/clients/mooijer-volendam.svg', url: 'https://www.mooijer.nl/' },
  { name: 'Holstein Flowers', logo: '/images/clients/holstein-flowers.svg', mark: true, url: 'https://www.holsteinflowers.nl/' },
] as const;

/** Press mentions, compact: logo (or wordmark) with a link to the article. */
export const PRESS = [
  { name: 'NRC', logo: '/images/press/nrc-handelsblad.webp', url: 'https://www.nrc.nl/nieuws/2020/07/22/wat-doet-de-coronacrisis-met-de-digitale-nomade-a4006732' },
  { name: 'Frankwatching', logo: '', url: 'https://www.frankwatching.com/archive/2022/03/07/nfts-branding-bedrijven/' },
  { name: 'Vice', logo: '/images/press/Vice_Logo.webp', url: 'https://www.vice.com/nl/article/v7ekx8/stoppen-met-studie-slim' },
  { name: 'Algemeen Dagblad', logo: '/images/press/algemeen-dagblad.webp', url: 'https://www.ad.nl/dordrecht/als-moderne-nomaden-naar-india-het-avontuur-begint-daar-waar-je-niet-weet-waar-het-eindigt~ab2e26bf/' },
  { name: 'Nu.nl', logo: '/images/press/Nu-nl-logo-1.webp', url: 'https://www.nu.nl/geldzaken/6148047/geld-verdienen-zonder-ervoor-te-werken-zo-doe-je-dat.html' },
  { name: 'FunX', logo: '/images/press/funx-logo.webp', url: 'https://www.funx.nl/fragmenten/tannaz/f9ea03c1-e754-46c7-bc5f-8040d939aa33/2021-09-14-stoppen-met-zijn-opleiding-is-de-beste-keuze-die-mick-ooit-heeft-gemaakt' },
  { name: 'NPO Radio 1', logo: '/images/press/npo-radio1.webp', url: 'https://www.nporadio1.nl/' },
  { name: 'Flow Magazine', logo: '/images/press/flow-logo.webp', url: 'https://www.flowmagazine.nl/doen/deze-nederlandse-jongens-fietsen-van-nederland-naar-india.html' },
  { name: 'Klein Wonen Magazine', logo: '/images/press/klein-wonen-magazine.webp', url: 'https://www.kleinwonenmagazine.nl/winkel/magazine/editie-6/' },
] as const;

/** Categories kept online but left out of the homepage and the blog overview (decision D3). */
export const HIDDEN_FROM_LISTINGS: readonly string[] = ['web3'];

export const CATEGORY_LABELS: Record<string, string> = {
  ondernemen: 'Ondernemen',
  digitalenomaden: 'Digital nomads',
  'online-geld-verdienen': 'Online geld verdienen',
  web3: 'Crypto & web3',
  tips: 'Persoonlijk',
  review: 'Reviews',
};

/** Main navigation. The book is deliberately not in it (briefing §6): it lives in the footer and on /over/. */
export const NAV = [
  { href: '/ai-workshops/', label: 'AI-workshops' },
  { href: '/over/', label: 'Over Micky' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
] as const;
