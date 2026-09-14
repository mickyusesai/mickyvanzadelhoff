import { getCollection, type CollectionEntry } from 'astro:content';
import { HIDDEN_FROM_LISTINGS } from '../config/site';

export type Article = CollectionEntry<'articles'>;

const byDateDesc = (a: Article, b: Article) =>
  (b.data.updated ?? b.data.date).getTime() - (a.data.updated ?? a.data.date).getTime();

/** Every non-draft article, newest first. */
export async function getPublishedArticles(): Promise<Article[]> {
  const all = await getCollection('articles', ({ data }) => !data.draft);
  return all.sort(byDateDesc);
}

/** Articles that may appear on the homepage and the blog overview (decision D3 hides web3). */
export async function getListedArticles(): Promise<Article[]> {
  return (await getPublishedArticles()).filter((a) => !HIDDEN_FROM_LISTINGS.includes(a.data.category));
}

export const articlePath = (a: Article) => `/blog/${a.data.category}/${a.data.slug}/`;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
