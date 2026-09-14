import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config/site';
import { articlePath, getPublishedArticles } from '../lib/articles';

export async function GET(context: APIContext) {
  const articles = await getPublishedArticles();
  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: context.site!,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.updated ?? a.data.date,
      link: articlePath(a),
      categories: [a.data.category],
    })),
    customData: '<language>nl-nl</language>',
  });
}
