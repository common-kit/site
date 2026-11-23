# Common Kit site

The public marketing site for the Common Kit collection. It uses SvelteKit and prerenders the homepage, app catalog, and individual app pages.

Use Node 22.17 or later on the 22.x line, or Node 24 or later. The project has been verified with Node 22.18 and Node 24.21.

```sh
npm ci
npm run dev
```

Run `npm run check` for Svelte and TypeScript diagnostics. Run `npm run build` to build the site in `dist/` and `npm run preview` to preview that output locally.

## Production build

Set `VITE_SITE_URL` to the public HTTPS origin when building for deployment. For example:

```sh
VITE_SITE_URL=https://example.com npm run build
```

The origin controls canonical URLs, Open Graph asset URLs, and the sitemap. Local builds without it omit public URLs. Serve `dist/` at the domain root and configure the host to serve `dist/404.html` with HTTP status `404` for unmatched paths.

Edit the app descriptions and planned features in `src/lib/tools.ts`. The web-optimized mascot artwork is in `src/lib/assets/kit-poses.webp`.
