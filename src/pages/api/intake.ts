import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { SITE } from '../../config/site';

export const prerender = false;

// Handles the "Plan een gratis intake" form (src/pages/intake.astro). Sends one mail to Micky
// through SMTP and redirects back to the form with a status flag. Configuration on Railway:
//   SMTP_HOST (default smtp.gmail.com), SMTP_PORT (default 465), SMTP_USER, SMTP_PASS,
//   INTAKE_TO (default: the site e-mail). With Gmail, SMTP_PASS is an app password.

const FIELDS = ['name', 'company', 'email', 'phone', 'automate', 'timesink', 'slot1', 'slot2'] as const;
type Field = (typeof FIELDS)[number];

const clean = (v: FormDataEntryValue | null, max = 4000) => (typeof v === 'string' ? v.replace(/\r/g, '').trim().slice(0, max) : '');

const fmtSlot = (v: string) => {
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return v;
  return new Intl.DateTimeFormat('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Amsterdam' }).format(d);
};

// Relative Location on purpose: behind Railway/Cloudflare the request URL the server sees is not
// always the public origin, and browsers resolve a relative redirect against the page they posted from.
const back = (_request: Request, status: string) =>
  new Response(null, { status: 303, headers: { Location: `/intake/?status=${status}` } });

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return back(request, 'invalid');
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(form.get('website'))) return back(request, 'sent');

  const v = Object.fromEntries(FIELDS.map((f) => [f, clean(form.get(f), f === 'automate' || f === 'timesink' ? 4000 : 200)])) as Record<Field, string>;
  const missing = FIELDS.filter((f) => !v[f]);
  if (missing.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) return back(request, 'invalid');

  const host = import.meta.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(import.meta.env.SMTP_PORT || 465);
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  const to = import.meta.env.INTAKE_TO || SITE.email;
  if (!user || !pass) {
    console.error('[intake] SMTP_USER / SMTP_PASS not configured; submission from', v.email);
    return back(request, 'config');
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
    `1. ${fmtSlot(v.slot1)}`,
    `2. ${fmtSlot(v.slot2)}`,
    ``,
    `Beantwoord deze mail om het moment te bevestigen (reply gaat naar ${v.email}).`,
  ].join('\n');

  try {
    const transport = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    await transport.sendMail({
      from: `"Intake formulier" <${user}>`,
      to,
      replyTo: `"${v.name.replace(/"/g, '')}" <${v.email}>`,
      subject: `Intake-aanvraag: ${v.company} (${v.name})`,
      text,
    });
  } catch (err) {
    console.error('[intake] send failed', err);
    return back(request, 'failed');
  }
  return back(request, 'sent');
};

export const GET: APIRoute = ({ request }) => Response.redirect(new URL('/intake/', request.url), 302);
