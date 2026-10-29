import process from 'node:process';
import { SITE } from '../config/site';

// reCAPTCHA v3 check for the site forms (Micky, 2026-10-29, decision D44). The browser gets a token from
// Google (src/components/IntakeForm.astro, site key SITE.recaptchaSiteKey) and sends it as `recaptcha`;
// this asks Google whether it is genuine. Variables are read from process.env at request time:
//   RECAPTCHA_SECRET_KEY   the secret key from the reCAPTCHA admin console (Railway → Variables)
//   RECAPTCHA_MIN_SCORE    optional, default 0.5: v3 scores run from 0.0 (bot) to 1.0 (human)
// Without a secret the check is skipped, so the forms keep working until the key is set. A value that
// cannot be a secret key (wrong shape, or the site key pasted by mistake), a secret Google rejects, a
// timeout or an outage also lets the form through (logged), because losing a real lead is worse than
// one spam mail. Note: Google answers a wrong but well-formed secret with "invalid-input-response",
// exactly like a forged token, so that case does block; check the Railway logs after setting the key.
// Only a token Google rejects, a low score or a missing token (with the secret set) blocks the form.

export type CaptchaResult =
  | { verdict: 'pass'; score?: number; note?: string }
  | { verdict: 'skip'; note: string }
  | { verdict: 'block'; note: string };

const env = (key: string) => (process.env[key] || '').trim();

export async function verifyRecaptcha(token: string, ip: string, expectedAction: string): Promise<CaptchaResult> {
  const secret = env('RECAPTCHA_SECRET_KEY');
  if (!secret) return { verdict: 'skip', note: 'RECAPTCHA_SECRET_KEY not set' };
  if (secret === SITE.recaptchaSiteKey || !/^[0-9A-Za-z_-]{30,60}$/.test(secret)) {
    console.error('[recaptcha] RECAPTCHA_SECRET_KEY does not look like a secret key (is it the site key?), letting the form through');
    return { verdict: 'skip', note: 'secret key malformed' };
  }
  if (!token) return { verdict: 'block', note: 'no token (JavaScript off, or reCAPTCHA did not load)' };

  let data: { success?: boolean; score?: number; action?: string; hostname?: string; 'error-codes'?: string[] };
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(8_000),
    });
    data = await res.json();
  } catch (err) {
    console.error('[recaptcha] verify request failed, letting the form through:', err instanceof Error ? err.message : err);
    return { verdict: 'pass', note: 'verify unreachable' };
  }

  const codes = data['error-codes'] ?? [];
  if (codes.some((c) => c === 'invalid-input-secret' || c === 'missing-input-secret')) {
    console.error('[recaptcha] the secret key is not accepted by Google, letting the form through. Check RECAPTCHA_SECRET_KEY:', codes.join(', '));
    return { verdict: 'pass', note: 'secret rejected by Google' };
  }
  if (!data.success) return { verdict: 'block', note: `token rejected: ${codes.join(', ') || 'no reason given'}` };

  const minScore = Number(env('RECAPTCHA_MIN_SCORE') || 0.5);
  if (typeof data.score === 'number' && data.score < minScore) return { verdict: 'block', note: `score ${data.score} below ${minScore}` };
  if (data.action && data.action !== expectedAction) return { verdict: 'block', note: `action ${data.action}, expected ${expectedAction}` };
  return { verdict: 'pass', score: data.score };
}

/** The visitor's IP behind Cloudflare and Railway, for Google's check (optional there). */
export function clientIp(request: Request): string {
  return (request.headers.get('cf-connecting-ip') || (request.headers.get('x-forwarded-for') || '').split(',')[0] || '').trim();
}
