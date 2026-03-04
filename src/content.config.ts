import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum([
      'ondernemen',
      'digitalenomaden',
      'online-geld-verdienen',
      'web3',
      'tips',
      'review',
    ]),
    slug: z.string().optional(),
    lang: z.enum(['nl', 'en']),
    draft: z.boolean().default(false),
    featuredImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    slug: z.string().optional(),
    lang: z.enum(['nl', 'en']),
  }),
});

export const collections = { articles, pages };
