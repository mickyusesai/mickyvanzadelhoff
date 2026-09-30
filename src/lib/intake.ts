// Shared by the intake form component (src/components/IntakeForm.astro) and its API route
// (src/pages/api/intake.ts): one field table per variant, so the markup, the validation and the mail
// to Micky can never drift apart. `voor` is the hidden field that names the variant.
//
//   automatisering  "Plan een gratis intake" on /intake/ (decision D37: no time pickers and no Google
//                   appointment page; the visitor writes when it suits them and Micky proposes a moment)
//   introductie     "Datum prikken" in the spec block of /ai-workshops/ai-introductie/ (D38)

export type Voor = 'automatisering' | 'introductie';

export type Field = {
  name: string;
  label: string;
  /** Label in the mail to Micky. */
  mailLabel: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  required: boolean;
  max: number;
  autocomplete?: string;
  placeholder?: string;
  inputmode?: 'numeric';
  rows?: number;
  /** Full width in the two-column layout of the intake page. */
  wide?: boolean;
};

export type Variant = {
  /** Page the no-JS path redirects back to (relative on purpose, see the API route). */
  back: string;
  /** Subject line and first line of the mail to Micky. */
  subject: (v: Record<string, string>) => string;
  intro: string;
  outro: string;
  fields: readonly Field[];
};

export const VARIANTS: Record<Voor, Variant> = {
  automatisering: {
    back: '/intake/',
    subject: (v) => `Intake-aanvraag: ${v.company} (${v.name})`,
    intro: 'Nieuwe intake-aanvraag via mickyvanzadelhoff.com/intake/',
    outro: 'Beantwoord deze mail met een voorstel voor een moment (30 min, Google Meet of telefoon).',
    fields: [
      { name: 'name', label: 'Je naam', mailLabel: 'Naam', type: 'text', required: true, max: 200, autocomplete: 'name' },
      { name: 'company', label: 'Bedrijf', mailLabel: 'Bedrijf', type: 'text', required: true, max: 200, autocomplete: 'organization' },
      { name: 'email', label: 'E-mail', mailLabel: 'E-mail', type: 'email', required: true, max: 200, autocomplete: 'email' },
      { name: 'phone', label: 'Telefoon (optioneel)', mailLabel: 'Telefoon', type: 'tel', required: false, max: 60, autocomplete: 'tel' },
      { name: 'timesink', label: 'Wat kost nu te veel tijd?', mailLabel: 'Wat kost nu te veel tijd', type: 'textarea', required: true, max: 4000, rows: 3, placeholder: 'Bijvoorbeeld: elke maandag exports uit drie systemen aan elkaar plakken.' },
      { name: 'when', label: 'Wanneer komt jou het beste uit?', mailLabel: 'Wanneer komt het uit', type: 'text', required: false, max: 200, autocomplete: 'off', placeholder: 'Bijvoorbeeld: dinsdagochtend', wide: true },
    ],
  },
  introductie: {
    back: '/ai-workshops/ai-introductie/',
    subject: (v) => `Datumaanvraag AI Introductie: ${v.company} (${v.name})`,
    intro: 'Nieuwe datumaanvraag voor de AI Introductie via mickyvanzadelhoff.com/ai-workshops/ai-introductie/',
    outro: 'Beantwoord deze mail met een datumvoorstel.',
    fields: [
      { name: 'name', label: 'Je naam', mailLabel: 'Naam', type: 'text', required: true, max: 200, autocomplete: 'name' },
      { name: 'company', label: 'Bedrijf', mailLabel: 'Bedrijf', type: 'text', required: true, max: 200, autocomplete: 'organization' },
      { name: 'email', label: 'E-mail', mailLabel: 'E-mail', type: 'email', required: true, max: 200, autocomplete: 'email' },
      { name: 'people', label: 'Hoeveel mensen ongeveer?', mailLabel: 'Aantal mensen', type: 'text', required: false, max: 20, autocomplete: 'off', inputmode: 'numeric', placeholder: '12' },
      { name: 'when', label: 'Wanneer ongeveer?', mailLabel: 'Wanneer', type: 'text', required: false, max: 200, autocomplete: 'off', placeholder: 'Bijvoorbeeld: half november, een ochtend' },
    ],
  },
};

export const isVoor = (v: string): v is Voor => Object.prototype.hasOwnProperty.call(VARIANTS, v);
