// Shared by the intake form (src/pages/intake.astro) and its API route (src/pages/api/intake.ts).
// A proposed moment is a date plus a start time on the half hour between 09:00 and 18:00.

const SLOT_START = 9 * 60;
const SLOT_END = 18 * 60;
const SLOT_STEP = 30;

const pad = (n: number) => String(n).padStart(2, '0');

export const SLOT_TIMES: string[] = [];
for (let m = SLOT_START; m <= SLOT_END; m += SLOT_STEP) SLOT_TIMES.push(`${pad(Math.floor(m / 60))}:${pad(m % 60)}`);

export const isSlotDate = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(`${v}T12:00:00Z`));
export const isSlotTime = (v: string) => SLOT_TIMES.includes(v);

// "dinsdag 22 september 2026 om 10:30". The date is formatted at noon UTC so no server time zone can
// shift the day; the time is the visitor's own choice in Dutch wall-clock time and is not converted.
export const formatSlot = (date: string, time: string) => {
  if (!isSlotDate(date)) return `${date} ${time}`;
  const day = new Intl.DateTimeFormat('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
  return `${day} om ${time}`;
};
