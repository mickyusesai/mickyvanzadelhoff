/**
 * ChatGPT Ads measurement (handoff 2026-09-29, section 5). Micky pastes the pixel snippet from OpenAI
 * Ads Manager here; the site's own tracking (src/components/Tracking.astro) then reports conversions.
 *
 *   snippet  the exact <script> tag(s) from Ads Manager, loaded on every page; '' = nothing loads
 *   bridge   JavaScript that defines window.__adsTrack(name, params) using the pixel's own API, so the
 *            site can report the events below without knowing the vendor call; '' = only GA4 receives them
 *   events   the event names Ads Manager expects (Micky supplies the exact names)
 */
export const ADS_PIXEL = {
  snippet: '',
  bridge: '',
  events: {
    contact: 'contact', // click on a WhatsApp or mail link (param kanaal = whatsapp | mail)
    lead: 'lead',       // intake form sent (/intake/?status=sent), fired once
  },
} as const;
