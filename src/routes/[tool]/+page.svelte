<script lang="ts">
  import Kit from '$lib/Kit.svelte';
  import ToolIcon from '$lib/ToolIcon.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.tool.name} · Common Kit</title>
  <meta name="description" content={data.tool.description} />
</svelte:head>

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

  <section class="wrap related" aria-labelledby="related-title">
    <h2 id="related-title">More from the kit</h2>
    <ul>
      {#each data.otherTools as tool (tool.slug)}
        <li><a href="/{tool.slug}/"><span class="tool-icon tone-{tool.color}"><ToolIcon slug={tool.slug} size={21} /></span>{tool.name}</a></li>
      {/each}
    </ul>
  </section>
</main>
