// Shared by the intake form component (src/components/IntakeForm.astro) and its API route
// (src/pages/api/intake.ts): one field table per variant, so the markup, the validation and the mail
// to Micky can never drift apart. `voor` is the hidden field that names the variant.
//
//   automatisering  "Plan een gratis intake" on /intake/ (decision D37: no time pickers and no Google
//                   appointment page; the visitor writes when it suits them and Micky proposes a moment)
//   introductie     "Bel me terug" under the article on /ai-workshops/ai-introductie/ (D38): the visitor says
//                   roughly when they want the workshop and Micky calls to settle date, group and content
//   contact         general contact form on /contact/ (D41), with a choice of subject

export type Voor = 'automatisering' | 'introductie' | 'contact';

export type Field = {
  name: string;
  label: string;
  /** Label in the mail to Micky. */
  mailLabel: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'choice';
  required: boolean;
  max: number;
  autocomplete?: string;
  placeholder?: string;
  inputmode?: 'numeric';
  rows?: number;
  /** Full width in the two-column layout of the intake page. */
  wide?: boolean;
  /** For type 'choice': the options, shown as radio buttons; the submitted value must be one of them. */
  options?: readonly string[];
};

export type Variant = {
  /** Page the no-JS path redirects back to (relative on purpose, see the API route), plus an anchor. */
  back: string;
  hash?: string;
  /** Submit button, privacy line under it, and the subject of the mailto fallback in the error block. */
  button: string;
  privacy: string;
  mailto: string;
  /** Subject line and first line of the mail to Micky. */
  subject: (v: Record<string, string>) => string;
  intro: string;
  outro: string;
  fields: readonly Field[];
};

export const VARIANTS: Record<Voor, Variant> = {
  automatisering: {
    back: '/intake/',
    button: 'Verstuur',
    privacy: 'Je gegevens gebruik ik alleen om dit gesprek in te plannen.',
    mailto: 'Gratis intake AI-automatisering',
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
    hash: '#bel-me',
    button: 'Bel me terug',
    privacy: 'Je gegevens gebruik ik alleen om je terug te bellen.',
    mailto: 'AI Introductie voor mijn team',
    subject: (v) => `Workshopaanvraag AI Introductie: ${v.company} (${v.name})`,
    intro: 'Nieuwe aanvraag voor de AI Introductie via mickyvanzadelhoff.com/ai-workshops/ai-introductie/',
    outro: 'Bel om datum, groep en inhoud af te stemmen.',
    fields: [
      { name: 'name', label: 'Je naam', mailLabel: 'Naam', type: 'text', required: true, max: 200, autocomplete: 'name' },
      { name: 'company', label: 'Bedrijf', mailLabel: 'Bedrijf', type: 'text', required: true, max: 200, autocomplete: 'organization' },
      { name: 'phone', label: 'Telefoon', mailLabel: 'Telefoon', type: 'tel', required: true, max: 60, autocomplete: 'tel' },
      { name: 'email', label: 'E-mail', mailLabel: 'E-mail', type: 'email', required: true, max: 200, autocomplete: 'email' },
      { name: 'people', label: 'Hoeveel mensen ongeveer?', mailLabel: 'Aantal mensen', type: 'text', required: false, max: 20, autocomplete: 'off', inputmode: 'numeric', placeholder: '12' },
      { name: 'when', label: 'Wanneer ongeveer?', mailLabel: 'Wanneer', type: 'text', required: false, max: 200, autocomplete: 'off', placeholder: 'Bijvoorbeeld: half november, een ochtend', wide: true },
    ],
  },
  contact: {
    back: '/contact/',
    hash: '#formulier',
    button: 'Verstuur',
    privacy: 'Je gegevens gebruik ik alleen om je te antwoorden.',
    mailto: 'Vraag via mickyvanzadelhoff.com',
    subject: (v) => `Contactformulier (${v.topic}): ${v.name}${v.company ? ` (${v.company})` : ''}`,
    intro: 'Nieuw bericht via het contactformulier op mickyvanzadelhoff.com/contact/',
    outro: 'Beantwoord deze mail of bel terug als er een nummer bij staat.',
    fields: [
      { name: 'topic', label: 'Waar gaat het over?', mailLabel: 'Onderwerp', type: 'choice', required: true, max: 40, options: ['AI-workshop', 'AI-automatisering', 'Iets anders'], wide: true },
      { name: 'name', label: 'Je naam', mailLabel: 'Naam', type: 'text', required: true, max: 200, autocomplete: 'name' },
      { name: 'company', label: 'Bedrijf (optioneel)', mailLabel: 'Bedrijf', type: 'text', required: false, max: 200, autocomplete: 'organization' },
      { name: 'email', label: 'E-mail', mailLabel: 'E-mail', type: 'email', required: true, max: 200, autocomplete: 'email' },
      { name: 'phone', label: 'Telefoon (optioneel, dan bel ik je)', mailLabel: 'Telefoon', type: 'tel', required: false, max: 60, autocomplete: 'tel' },
      { name: 'message', label: 'Je vraag of bericht', mailLabel: 'Bericht', type: 'textarea', required: true, max: 4000, rows: 4, placeholder: 'Bijvoorbeeld: we zijn met vijftien mensen en willen in november een workshop.' },
    ],
  },
};

export const isVoor = (v: string): v is Voor => Object.prototype.hasOwnProperty.call(VARIANTS, v);
