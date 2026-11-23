import { siteOrigin } from '#lib/site.ts';
import { tools } from '#lib/tools.ts';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
  if (!siteOrigin) return new Response(null, { status: 204 });

  const paths = ['/', '/apps/', ...tools.map(({ slug }) => `/${slug}/`)];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, siteOrigin).href}</loc></url>`);

  return new Response(
    ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...urls, '</urlset>'].join('\n'),
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
