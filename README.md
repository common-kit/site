# Common Kit site

The public marketing site for the Common Kit collection. It uses SvelteKit and prerenders the homepage, app catalog, and individual app pages.

```sh
npm ci
npm run dev
```

Use `npm run check` for Svelte and TypeScript diagnostics. Run `npm run build` to generate the static site in `dist/`, or `npm run preview` to preview that build locally.

Edit the app descriptions and planned features in `src/lib/tools.ts`. The web-optimized mascot artwork is in `src/lib/assets/kit-poses.webp`.
