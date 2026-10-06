import type { APIRoute } from 'astro';
import process from 'node:process';
import nodemailer from 'nodemailer';
import { SITE } from '../../config/site';
import { VARIANTS, isVoor, type Voor } from '../../lib/intake';

export const prerender = false;

// Handles the three site forms (src/components/IntakeForm.astro, field tables in src/lib/intake.ts): sends
// one mail to Micky and answers JSON `{ ok, status }` when the form was sent with fetch
// (Accept: application/json), or a 303 back to the page with ?status=sent|invalid|config|failed when
// it was posted without JavaScript.
//
// Variables are read from process.env at request time; import.meta.env is frozen at build time and
// would bake the values (or their absence) into the bundle. Railway blocks outbound SMTP on the Free,
// Trial and Hobby plans, so the mail goes through Postmark's HTTPS API (Micky's account, the one that
// also serves EasyReimburse; sender signatures and verified domains are account-wide):
//   POSTMARK_SERVER_TOKEN    server API token (Postmark → Servers → the server → API Tokens)
//   INTAKE_FROM              required: "Naam <adres>" on a sender signature or domain verified in
//                            that account (easyreimburse.ai today, mickyvanzadelhoff.com once its
//                            DKIM and Return-Path records are added)
//   INTAKE_TO                recipient (default: the site e-mail)
//   POSTMARK_MESSAGE_STREAM  optional, default "outbound" (the transactional stream)
// The Postmark test token POSTMARK_API_TEST makes the route report success without sending a mail.
// SMTP is used only when POSTMARK_SERVER_TOKEN is absent and only works on Railway Pro or another host:
//   SMTP_USER, SMTP_PASS, optional SMTP_HOST (default smtp.gmail.com) and SMTP_PORT (default 465).

type Status = 'sent' | 'invalid' | 'config' | 'failed';
const HTTP: Record<Status, number> = { sent: 200, invalid: 400, config: 500, failed: 500 };

const env = (key: string) => (process.env[key] || '').trim();
const clean = (v: FormDataEntryValue | null, max: number) => (typeof v === 'string' ? v.replace(/\r/g, '').trim().slice(0, max) : '');

// Relative Location on purpose: behind Railway/Cloudflare the request URL the server sees is not
// always the public origin, and browsers resolve a relative redirect against the page they posted from.
function answer(request: Request, status: Status, voor: Voor) {
  if ((request.headers.get('accept') || '').includes('application/json')) {
    return Response.json({ ok: status === 'sent', status }, { status: HTTP[status] });
  }
  const { back, hash = '' } = VARIANTS[voor];
  return new Response(null, { status: 303, headers: { Location: `${back}?status=${status}${hash}` } });
}

type Mail = { from: string; to: string; replyTo: string; replyToName: string; subject: string; text: string };

async function sendViaPostmark(token: string, m: Mail) {
  const res = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-Postmark-Server-Token': token },
    body: JSON.stringify({
      From: m.from,
      To: m.to,
      ReplyTo: m.replyTo,
      Subject: m.subject,
      TextBody: m.text,
      MessageStream: env('POSTMARK_MESSAGE_STREAM') || 'outbound',
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`Postmark answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
}

async function sendViaSmtp(m: Mail) {
  const port = Number(env('SMTP_PORT') || 465);
  const transport = nodemailer.createTransport({
    host: env('SMTP_HOST') || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: { user: env('SMTP_USER'), pass: env('SMTP_PASS') },
    // Fail within seconds instead of nodemailer's two-minute default when the port is blocked.
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 30_000,
  });
  await transport.sendMail({ from: m.from, to: m.to, replyTo: `"${m.replyToName}" <${m.replyTo}>`, subject: m.subject, text: m.text });
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return answer(request, 'invalid', 'automatisering');
  }

  const voorRaw = clean(form.get('voor'), 20);
  const voor: Voor = isVoor(voorRaw) ? voorRaw : 'automatisering';
  if (!isVoor(voorRaw)) return answer(request, 'invalid', voor);
  const variant = VARIANTS[voor];

  // Honeypot: real visitors never fill this hidden field.
  if (clean(form.get('website'), 10)) return answer(request, 'sent', voor);

  const v = Object.fromEntries(variant.fields.map((f) => [f.name, clean(form.get(f.name), f.max)])) as Record<string, string>;
  const bron = clean(form.get('bron'), 40); // 'chatgpt' or 'google-ads' when the visitor came from an ad (Tracking.astro)
  const valid =
    variant.fields.every((f) => (!f.required || v[f.name]) && (f.type !== 'choice' || !v[f.name] || (f.options ?? []).includes(v[f.name]))) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email);
  if (!valid) return answer(request, 'invalid', voor);

  const postmarkToken = env('POSTMARK_SERVER_TOKEN');
  const smtpReady = Boolean(env('SMTP_USER') && env('SMTP_PASS'));
  if (!postmarkToken && !smtpReady) {
    console.error('[intake] no mail service configured (set POSTMARK_SERVER_TOKEN and INTAKE_FROM, or SMTP_USER and SMTP_PASS); submission from', v.email);
    return answer(request, 'config', voor);
  }
  if (postmarkToken && !env('INTAKE_FROM')) {
    console.error('[intake] INTAKE_FROM is not set; Postmark needs a sender on a verified domain or sender signature; submission from', v.email);
    return answer(request, 'config', voor);
  }

  const width = Math.max(...variant.fields.map((f) => f.mailLabel.length)) + 1;
  const rows = variant.fields.flatMap((f) =>
    f.type === 'textarea' ? [``, `${f.mailLabel}:`, v[f.name], ``] : [`${(f.mailLabel + ':').padEnd(width)} ${v[f.name] || 'niet ingevuld'}`],
  );
  const text = [
    variant.intro,
    ``,
    ...rows,
    ``,
    `${variant.outro} Reply gaat naar ${v.email}${v.phone ? `, telefoon ${v.phone}` : ''}.`,
    ...(bron ? [``, `Bron: ${({ chatgpt: 'ChatGPT Ads', 'google-ads': 'Google Ads' } as Record<string, string>)[bron] ?? bron}`] : []),
  ].join('\n').replace(/\n{3,}/g, '\n\n');

  const mail: Mail = {
    from: env('INTAKE_FROM') || `"Intake formulier" <${env('SMTP_USER')}>`,
    to: env('INTAKE_TO') || SITE.email,
    replyTo: v.email,
    replyToName: v.name.replace(/["<>\n]/g, ''),
    subject: variant.subject(v),
    text,
  };

  try {
    if (postmarkToken) await sendViaPostmark(postmarkToken, mail);
    else await sendViaSmtp(mail);
  } catch (err) {
    console.error(`[intake] send via ${postmarkToken ? 'Postmark' : 'SMTP'} failed:`, err instanceof Error ? err.message : err);
    return answer(request, 'failed', voor);
  }
  return answer(request, 'sent', voor);
};

export const GET: APIRoute = ({ request }) => Response.redirect(new URL('/intake/', request.url), 302);
