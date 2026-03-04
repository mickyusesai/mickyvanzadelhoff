export type Locale = 'nl' | 'en';

export const navigation: Record<Locale, { label: string; href: string }[]> = {
  nl: [
    { label: 'Home', href: '/nl/' },
    { label: 'Over Micky', href: '/nl/over/' },
    { label: 'AI Workshop', href: '/nl/ai-workshop/' },
    { label: 'EasyReimburse', href: '/nl/easyreimburse/' },
    { label: 'Erasmus+', href: '/nl/erasmus/' },
    { label: 'Boek', href: '/nl/boek/' },
    { label: 'Blog', href: '/nl/blog/' },
    { label: 'Contact', href: '/nl/contact/' },
  ],
  en: [
    { label: 'Home', href: '/en/' },
    { label: 'About Micky', href: '/en/about/' },
    { label: 'AI Workshop', href: '/en/ai-workshop/' },
    { label: 'EasyReimburse', href: '/en/easyreimburse/' },
    { label: 'Erasmus+', href: '/en/erasmus/' },
    { label: 'Book', href: '/en/book/' },
    { label: 'Blog', href: '/en/blog/' },
    { label: 'Contact', href: '/en/contact/' },
  ],
};

export const ui: Record<Locale, Record<string, string>> = {
  nl: {
    'hero.greeting': 'Hoi, ik ben Micky',
    'hero.subtitle': 'Digital nomad, ondernemer, auteur & AI-trainer',
    'hero.cta': 'Meer over mij',
    'expertise.title': 'Waar ik mee bezig ben',
    'expertise.ai.title': 'AI & ChatGPT Workshops',
    'expertise.ai.description': 'Praktische workshops voor bedrijven die AI willen inzetten. Van beginner tot gevorderd.',
    'expertise.ai.cta': 'Bekijk workshops',
    'expertise.easyreimburse.title': 'EasyReimburse',
    'expertise.easyreimburse.description': 'Een SaaS-app die ik heb gebouwd om declaraties makkelijker te maken.',
    'expertise.easyreimburse.cta': 'Ontdek EasyReimburse',
    'expertise.erasmus.title': 'Erasmus+ Coordinator',
    'expertise.erasmus.description': 'Internationale educatieprojecten coördineren via het Erasmus+ programma.',
    'expertise.erasmus.cta': 'Lees meer',
    'press.title': 'Bekend van',
    'blog.title': 'Laatste artikelen',
    'blog.readmore': 'Lees verder',
    'blog.viewall': 'Alle artikelen bekijken',
    'footer.tagline': 'Digital nomad, ondernemer & AI-trainer',
    'lang.switch': 'English',
  },
  en: {
    'hero.greeting': 'Hi, I\'m Micky',
    'hero.subtitle': 'Digital nomad, entrepreneur, author & AI trainer',
    'hero.cta': 'More about me',
    'expertise.title': 'What I do',
    'expertise.ai.title': 'AI & ChatGPT Workshops',
    'expertise.ai.description': 'Hands-on workshops for businesses ready to leverage AI. From beginner to advanced.',
    'expertise.ai.cta': 'View workshops',
    'expertise.easyreimburse.title': 'EasyReimburse',
    'expertise.easyreimburse.description': 'A SaaS app I built to make expense reimbursements easier.',
    'expertise.easyreimburse.cta': 'Discover EasyReimburse',
    'expertise.erasmus.title': 'Erasmus+ Coordinator',
    'expertise.erasmus.description': 'Coordinating international education projects through the Erasmus+ programme.',
    'expertise.erasmus.cta': 'Learn more',
    'press.title': 'As seen in',
    'blog.title': 'Latest articles',
    'blog.readmore': 'Read more',
    'blog.viewall': 'View all articles',
    'footer.tagline': 'Digital nomad, entrepreneur & AI trainer',
    'lang.switch': 'Nederlands',
  },
};

export function t(lang: Locale, key: string): string {
  return ui[lang][key] ?? key;
}

export function getAlternatePath(currentPath: string, lang: Locale): string {
  const otherLang: Locale = lang === 'nl' ? 'en' : 'nl';
  return currentPath.replace(`/${lang}/`, `/${otherLang}/`);
}
