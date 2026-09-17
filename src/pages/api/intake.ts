import type { APIRoute } from 'astro';
import process from 'node:process';
import nodemailer from 'nodemailer';
import { SITE } from '../../config/site';
import { formatSlot, isSlotDate, isSlotTime } from '../../lib/intake-slots';

export const prerender = false;

// Handles the "Plan een gratis intake" form (src/pages/intake.astro): sends one mail to Micky and
// redirects back to the form with ?status=sent|invalid|config|failed.
//
// Variables are read from process.env at request time; import.meta.env is frozen at build time and
// would bake the values (or their absence) into the bundle. Railway blocks outbound SMTP on the Free,
// Trial and Hobby plans, so the mail goes through an HTTPS API:
//   RESEND_API_KEY  key from resend.com (free tier is enough)
//   INTAKE_TO       recipient (default: the site e-mail)
//   INTAKE_FROM     sender as "Naam <adres>" (default: Intake formulier <onboarding@resend.dev>; Resend
//                   delivers that sender only to the address the Resend account was created with, a
//                   verified domain allows any sender on that domain)
// SMTP is used only when RESEND_API_KEY is absent and only works on Railway Pro or another host:
//   SMTP_USER, SMTP_PASS, optional SMTP_HOST (default smtp.gmail.com) and SMTP_PORT (default 465).

const FIELDS = ['name', 'company', 'email', 'phone', 'automate', 'timesink', 'slot1_date', 'slot1_time', 'slot2_date', 'slot2_time'] as const;
type Field = (typeof FIELDS)[number];
const LONG: readonly Field[] = ['automate', 'timesink'];

const env = (key: string) => (process.env[key] || '').trim();
const clean = (v: FormDataEntryValue | null, max: number) => (typeof v === 'string' ? v.replace(/\r/g, '').trim().slice(0, max) : '');

// Relative Location on purpose: behind Railway/Cloudflare the request URL the server sees is not
// always the public origin, and browsers resolve a relative redirect against the page they posted from.
const back = (status: string) => new Response(null, { status: 303, headers: { Location: `/intake/?status=${status}` } });

type Mail = { from: string; to: string; replyTo: string; replyToName: string; subject: string; text: string };

async function sendViaResend(key: string, m: Mail) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: m.from, to: [m.to], reply_to: m.replyTo, subject: m.subject, text: m.text }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`Resend answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
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
    return back('invalid');
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(form.get('website'), 10)) return back('sent');

  const v = Object.fromEntries(FIELDS.map((f) => [f, clean(form.get(f), LONG.includes(f) ? 4000 : 200)])) as Record<Field, string>;
  const today = new Date().toISOString().slice(0, 10);
  const valid =
    FIELDS.every((f) => v[f]) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email) &&
    [v.slot1_date, v.slot2_date].every((d) => isSlotDate(d) && d >= today) &&
    [v.slot1_time, v.slot2_time].every(isSlotTime);
  if (!valid) return back('invalid');

  const resendKey = env('RESEND_API_KEY');
  const smtpReady = Boolean(env('SMTP_USER') && env('SMTP_PASS'));
  if (!resendKey && !smtpReady) {
    console.error('[intake] no mail service configured (set RESEND_API_KEY, or SMTP_USER and SMTP_PASS); submission from', v.email);
    return back('config');
  }

  const text = [
    `Nieuwe intake-aanvraag via mickyvanzadelhoff.com/intake/`,
    ``,
    `Naam:        ${v.name}`,
    `Bedrijf:     ${v.company}`,
    `E-mail:      ${v.email}`,
    `Telefoon:    ${v.phone}`,
    ``,
    `Wat hopen ze te automatiseren:`,
    v.automate,
    ``,
    `Waar gaat nu te veel tijd in zitten:`,
    v.timesink,
    ``,
    `Voorgestelde momenten (45 min, Google Meet):`,
    `1. ${formatSlot(v.slot1_date, v.slot1_time)}`,
    `2. ${formatSlot(v.slot2_date, v.slot2_time)}`,
    ``,
    `Beantwoord deze mail om het moment te bevestigen (reply gaat naar ${v.email}).`,
  ].join('\n');

  const mail: Mail = {
    from: env('INTAKE_FROM') || (resendKey ? 'Intake formulier <onboarding@resend.dev>' : `"Intake formulier" <${env('SMTP_USER')}>`),
    to: env('INTAKE_TO') || SITE.email,
    replyTo: v.email,
    replyToName: v.name.replace(/["<>\n]/g, ''),
    subject: `Intake-aanvraag: ${v.company} (${v.name})`,
    text,
  };

  try {
    if (resendKey) await sendViaResend(resendKey, mail);
    else await sendViaSmtp(mail);
  } catch (err) {
    console.error(`[intake] send via ${resendKey ? 'Resend' : 'SMTP'} failed:`, err instanceof Error ? err.message : err);
    return back('failed');
  }
  return back('sent');
};

export const GET: APIRoute = ({ request }) => Response.redirect(new URL('/intake/', request.url), 302);
