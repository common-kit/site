<script lang="ts">
  import { CodeXml, Layers, Sparkle } from '@lucide/svelte';
  import Kit from '$lib/Kit.svelte';
  import ToolIcon from '$lib/ToolIcon.svelte';
  import { tools } from '$lib/tools';
</script>

<svelte:head>
  <title>Common Kit · Open-source apps for small businesses</title>
  <meta name="description" content="Common Kit is a collection of open-source small business apps for search, website analytics, contacts, and selling online." />
  <meta property="og:title" content="Common Kit · Open-source apps for small businesses" />
  <meta property="og:description" content="Open-source tools to get found, understand your website, keep up with customers, and sell online." />
</svelte:head>

<main id="main">
  <section class="hero wrap" aria-labelledby="hero-title">
    <div class="hero-copy">
      <h1 id="hero-title">Small business.<br /><span>Common Kit.</span></h1>
      <p>Open-source apps for running your own business without a stack of subscriptions.</p>
      <a class="button" href="/apps/">Explore the apps</a>
    </div>

    <div class="hero-art">
      <div class="hero-backdrop"></div>
      <Sparkle class="sparkle sparkle-top" size={39} strokeWidth={1.5} aria-hidden="true" />
      <Sparkle class="sparkle sparkle-right" size={27} strokeWidth={1.5} aria-hidden="true" />
      <div class="hero-fox">
        <Kit pose="receipt" alt="Kit the fox, in a work apron, holding up a receipt" eager />
      </div>
    </div>
  </section>

  <section id="tools" class="tools-section" aria-labelledby="tools-title">
    <div class="wrap">
      <div class="section-heading">
        <h2 id="tools-title">What’s in the kit</h2>
        <p>Start with the part of your workday that needs the most help. The apps are in development.</p>
      </div>

      <div class="tool-grid">
        {#each tools.slice(0, 4) as tool (tool.slug)}
          <a class="tool-card tone-{tool.color}" href="/{tool.slug}/">
            <span class="tool-icon"><ToolIcon slug={tool.slug} /></span>
            <h3>{tool.name}</h3>
            <p>{tool.summary}</p>
            <span class="tool-link" aria-hidden="true">Explore app</span>
          </a>
        {/each}
      </div>
      <a class="catalog-link" href="/apps/">See all {tools.length} apps</a>
    </div>
  </section>

  <section id="approach" class="approach-section wrap" aria-labelledby="approach-title">
    <div class="approach-art">
      <Kit pose="ready" alt="Kit standing with paws on hips, ready to help" />
    </div>
    <div class="approach-copy">
      <h2 id="approach-title">Built for the people<br class="wide-break" /> who do it all.</h2>
      <p>When you’re also the person who packs the orders and updates the website, your software should make the day easier.</p>
      <ul>
        <li><Layers size={23} aria-hidden="true" /><span><strong>Pick the apps you need.</strong> Each is designed to stand on its own.</span></li>
        <li><CodeXml size={23} aria-hidden="true" /><span><strong>Open by design.</strong> Open source gives you the freedom to inspect the code, adapt it, and run it yourself.</span></li>
      </ul>
    </div>
  </section>
</main>
