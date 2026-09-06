import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteConfig } from '../data/siteConfig';

export async function GET(context: APIContext) {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const sortedNotes = notes.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site || siteConfig.siteUrl,
    items: sortedNotes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.publishedAt,
      description: note.data.description,
      link: `/notes/${note.slug || note.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
