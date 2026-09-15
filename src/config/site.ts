/**
 * Site-wide constants. Business details follow decision D8 in docs/MIGRATION-PLAN.md.
 */
export const SITE = {
  name: 'Micky van Zadelhoff',
  url: 'https://mickyvanzadelhoff.com',
  tagline: 'AI-workshops, verhalen en lessen uit een vrij leven',
  email: 'mickyvz@live.nl',
  whatsapp: '+31681081589',
  whatsappUrl: 'https://wa.me/31681081589',
  kvk: '62568299',
  linkedin: 'https://www.linkedin.com/in/mick-van-zadelhoff-1ab40726/',
  /** Default social-share image (OG). TODO: replace with a branded image once the design is done. */
  ogImage: '/images/micky/mick-van-zadelhoff-de-moderne-nomaden.webp',
  /** Google Analytics 4 Measurement ID (public by nature). Override with PUBLIC_GA_MEASUREMENT_ID on Railway. */
  gaMeasurementId: 'G-S08XB20E5W',
} as const;

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

export const NAV = [
  { href: '/ai-workshops/', label: 'AI-workshops' },
  { href: '/over/', label: 'Over Micky' },
  { href: '/boek/', label: 'Gratis boek' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
] as const;
