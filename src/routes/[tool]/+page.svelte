<script lang="ts">
  import Kit from '#lib/Kit.svelte';
  import Seo from '#lib/Seo.svelte';
  import ToolIcon from '#lib/ToolIcon.svelte';
  import { pricing } from '#lib/pricing.ts';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<Seo title={`${data.tool.name} · Common Kit`} description={data.tool.description} path={`/${data.tool.slug}/`} />

<main id="main">
  <section class="wrap detail-hero">
    <div class="detail-copy">
      <a class="back-link" href="/apps/">All apps</a>
      <h1>{data.tool.name}</h1>
      <p>{data.tool.description}</p>
      <span class="development-label">In development</span>
    </div>
    <div class="detail-art tone-{data.tool.color}">
      <span class="tool-icon"><ToolIcon slug={data.tool.slug} /></span>
      <div class="detail-fox"><Kit pose="thinking" alt="Kit the fox checking a clipboard" eager /></div>
    </div>
  </section>

  <section class="detail-plans" aria-labelledby="plans-title">
    <div class="wrap">
      <h2 id="plans-title">What we’re building</h2>
      <div class="plan-grid">
        {#each data.tool.plans as plan (plan.title)}
          <article>
            <h3>{plan.title}</h3>
            <p>{plan.text}</p>
          </article>
        {/each}
      </div>
      <div class="detail-comparison">
        <h3>Alternatives to</h3>
        <p>{data.tool.alternatives.join(", ")}. {data.tool.comparison}</p>
      </div>
    </div>
  </section>

  {#if 'screens' in data.tool}
    <section class="wrap detail-screens" aria-labelledby="screens-title">
      <h2 id="screens-title">See it</h2>
      <p>Screens from the app, with an example shop.</p>
      <div class="screen-list">
        {#each data.tool.screens as screen (screen.src)}
          <figure>
            <!-- Small on a phone: a tap opens the full-size screen. -->
            <a href={screen.src}><img src={screen.src} alt={screen.alt} width="1800" height="1125" loading="lazy" decoding="async" /></a>
            <figcaption>{screen.caption}</figcaption>
          </figure>
        {/each}
      </div>
    </section>
  {/if}

  <section class="wrap app-pricing" aria-labelledby="pricing-title">
    <div class="app-pricing-heading">
      <h2 id="pricing-title">What it costs</h2>
      <p>Planned prices for when it’s ready, per business.</p>
    </div>
    <ul class="app-price-options">
      <li><strong>${pricing.oneApp.monthly}</strong><span>a month for {data.tool.name} on its own</span></li>
      <li><strong>${pricing.everything.monthly}</strong><span>a month with every app included</span></li>
      <li><strong>$0</strong><span>to run it yourself, open source</span></li>
    </ul>
    <a class="catalog-link" href="/pricing/">See how pricing works</a>
  </section>

  <section class="wrap related" aria-labelledby="related-title">
    <h2 id="related-title">More from the kit</h2>
    <ul>
      {#each data.otherTools as tool (tool.slug)}
        <li><a href="/{tool.slug}/"><span class="tool-icon tone-{tool.color}"><ToolIcon slug={tool.slug} size={21} /></span>{tool.name}</a></li>
      {/each}
    </ul>
  </section>
</main>
