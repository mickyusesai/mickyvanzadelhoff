/**
 * ChatGPT Ads measurement pixel (handoff 2026-09-29, section 5; pixel supplied by Micky on 2026-09-29).
 * Docs: https://developers.openai.com/ads/measurement-pixel
 *
 *   snippet  the loader from OpenAI Ads Manager, on every page. `debug: true` logs every call to the browser
 *            console; switch it on while testing in Ads Manager, keep it off for visitors.
 *   bridge   defines window.__adsTrack(name, data), which src/components/Tracking.astro calls with the
 *            site's own event names below. Mapping to the pixel:
 *              lead    -> standard event "lead_created" (type customer_action), with an event_id
 *              contact -> custom event "contact_whatsapp", "contact_mail", "contact_telefoon" or "contact_agenda" (from data.kanaal)
 *            Ads Manager must have conversion settings for these names (lead_created is standard; the two
 *            contact events are created as custom events with exactly these custom_event_names).
 */
export const ADS_PIXEL = {
  snippet: `<script>!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"Nf6PMLFHN3Y4UScd7STZvm",debug:false});</script>`,
  bridge: `window.__adsTrack = function (name, data) {
    if (typeof window.oaiq !== 'function') return;
    if (name === 'lead') {
      window.oaiq('measure', 'lead_created', { type: 'customer_action' }, { event_id: 'lead-' + Date.now() });
    } else if (name === 'contact') {
      var k = data && data.kanaal;
      var kanaal = k === 'mail' || k === 'telefoon' || k === 'agenda' ? k : 'whatsapp';
      window.oaiq('measure', 'custom', { type: 'custom' }, { custom_event_name: 'contact_' + kanaal });
    }
  };`,
  events: {
    contact: 'contact', // click on a WhatsApp, mail, phone or agenda link (param kanaal = whatsapp | mail | telefoon | agenda)
    lead: 'lead',       // intake or date form sent (param voor = automatisering | introductie), once per session per form
  },
} as const;
