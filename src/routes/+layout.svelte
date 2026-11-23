<script lang="ts">
  import '@fontsource-variable/bricolage-grotesque';
  import '@fontsource-variable/dm-sans';
  import { page } from '$app/state';
  import { PackageOpen } from '@lucide/svelte';
  import '../app.css';

  let { children } = $props();
</script>

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header">
  <div class="wrap header-inner">
    <a class="wordmark" href="/" aria-label="Common Kit home">
      <span class="brand-mark"><PackageOpen size={22} strokeWidth={2} aria-hidden="true" /></span>
      Common Kit<span class="brand-period" aria-hidden="true">.</span>
    </a>
    <nav aria-label="Main navigation">
      <a href="/apps/" aria-current={page.url.pathname === '/apps/' ? 'page' : undefined}>The apps</a>
      <a href="/#approach">Why Common Kit</a>
    </nav>
  </div>
</header>

{@render children()}

<footer class="site-footer">
  <div class="wrap footer-inner">
    <a class="wordmark" href="/" aria-label="Common Kit home">
      <span class="brand-mark"><PackageOpen size={20} strokeWidth={2} aria-hidden="true" /></span>
      Common Kit<span class="brand-period" aria-hidden="true">.</span>
    </a>
    <nav aria-label="Footer navigation">
      <a href="/apps/" aria-current={page.url.pathname === '/apps/' ? 'page' : undefined}>The apps</a>
      <a href="/#approach">Why Common Kit</a>
    </nav>
  </div>
</footer>
