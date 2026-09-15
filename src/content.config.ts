import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = ['ondernemen', 'digitalenomaden', 'online-geld-verdienen', 'web3', 'tips', 'review'] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(CATEGORIES),
    slug: z.string(),
    lang: z.literal('nl').default('nl'),
    draft: z.boolean().default(false),
    featuredImage: z.string().default(''),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170).optional(),
    date: z.coerce.date().optional(),
    slug: z.string(),
    lang: z.literal('nl').default('nl'),
  }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshops' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string().max(170),
    slug: z.string(),
    href: z.string().optional(),   // custom page instead of /ai-workshops/[slug]/ (e.g. /automatisering/)
    order: z.number().default(0),
    duration: z.string(),
    location: z.string(),
    participants: z.string(),
    price: z.string(),
    priceNote: z.string().default('excl. btw'),
    outcomes: z.array(z.string()).default([]),
    featuredImage: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, pages, workshops };
