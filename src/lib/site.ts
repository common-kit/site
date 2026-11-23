function getSiteOrigin(value: string | undefined): string | undefined {
  if (!value) return;

  const url = URL.parse(value);
  if (
    !url || url.protocol !== 'https:' || url.pathname !== '/' ||
    url.username || url.password || url.search || url.hash
  ) {
    throw new Error('VITE_SITE_URL must be a public HTTPS origin, such as https://example.com');
  }

  return url.origin;
}

export const siteOrigin = getSiteOrigin(import.meta.env.VITE_SITE_URL);
