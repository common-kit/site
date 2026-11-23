<script lang="ts">
  import { Check } from '@lucide/svelte';
  import Kit from '$lib/Kit.svelte';
  import ToolIcon from '$lib/ToolIcon.svelte';
  import { toolGroups, tools } from '$lib/tools';

  const groups = toolGroups.map((group) => ({
    ...group,
    tools: tools.filter((tool) => tool.group === group.id)
  }));
</script>

<svelte:head>
  <title>Open-source apps for small businesses · Common Kit</title>
  <meta name="description" content="Explore nine open-source apps in development for small businesses. See what each app is designed to do and which tools it could replace." />
  <meta property="og:title" content="Explore the Common Kit apps" />
  <meta property="og:description" content="Open-source alternatives for SEO, analytics, forms, CRM, email, booking, estimates, inventory, and online stores." />
</svelte:head>

<main id="main">
  <section class="catalog-hero wrap" aria-labelledby="catalog-title">
    <div>
      <h1 id="catalog-title">Good tools for<br /> <span>small business.</span></h1>
      <p>Open-source apps for the person who runs the shop, answers the email, and updates the website. Pick the tools you need and run them on your own terms.</p>
      <p class="catalog-status">The apps are in development. Here’s what we’re building and where each could replace a tool you use today.</p>
    </div>
    <div class="catalog-art"><Kit pose="thinking" alt="Kit the fox going over a clipboard" eager /></div>
  </section>

  <nav class="catalog-nav" aria-label="Browse apps by task">
    <div class="wrap catalog-nav-inner">
      {#each groups as group (group.id)}
        <a href="#{group.id}">{group.name}</a>
      {/each}
    </div>
  </nav>

  <div class="wrap catalog">
    {#each groups as group (group.id)}
      <section class="catalog-group" id={group.id} aria-labelledby="{group.id}-title">
        <div class="group-heading">
          <h2 id="{group.id}-title">{group.name}</h2>
          <p>{group.description}</p>
        </div>
        <div class="catalog-grid">
          {#each group.tools as tool (tool.slug)}
            <article class="catalog-card tone-{tool.color}">
              <div class="catalog-card-copy">
                <span class="tool-icon"><ToolIcon slug={tool.slug} /></span>
                <h3><a class="app-name" href="/{tool.slug}/">{tool.name}</a></h3>
                <p>{tool.summary}</p>
              </div>
              <div class="comparison">
                <p class="comparison-label"><Check size={17} strokeWidth={2.15} aria-hidden="true" /> Alternatives to</p>
                <ul aria-label="Comparable tools">
                  {#each tool.alternatives as alternative (alternative)}
                    <li>{alternative}</li>
                  {/each}
                </ul>
                <p class="comparison-scope">{tool.comparison}</p>
              </div>
            </article>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</main>

<style>
  .catalog-hero {
    display: grid;
    grid-template-columns: 1fr .71fr;
    align-items: center;
    gap: 2rem;
    padding-block: clamp(2rem, 5vw, 4.25rem);
  }

  h1 {
    color: var(--ink);
    font-size: clamp(3.65rem, 7.3vw, 6.5rem);
    font-weight: 800;
    letter-spacing: -.075em;
    line-height: .95;
  }

  h1 span { color: var(--accent); }

  .catalog-hero p {
    max-width: 36rem;
    margin-top: 1.3rem;
    font-size: clamp(1.1rem, 1.65vw, 1.28rem);
  }

  .catalog-hero .catalog-status {
    margin-top: .85rem;
    font-size: 1rem;
  }

  .catalog-art {
    width: min(100%, 24rem);
    justify-self: center;
    background: #f6e2ca;
    border: 1px solid #ecd3b6;
    border-radius: 47% 47% 1.35rem 1.35rem;
    padding: .9rem 1.25rem .45rem;
    isolation: isolate;
  }

  .catalog-nav { background: #f5ecde; border-block: 1px solid var(--line); }
  .catalog-nav-inner { display: flex; gap: .6rem; flex-wrap: wrap; padding-block: .75rem; }

  .catalog-nav a {
    border: 1px solid #d8cabb;
    border-radius: .45rem;
    padding: .53rem .8rem;
    background: var(--page);
  }

  .catalog-nav a:hover { background: #fbe2d6; }

  .catalog { padding-block: .65rem 4rem; }

  .catalog-group {
    padding-block: 2.7rem;
    scroll-margin-top: 1rem;
    border-bottom: 1px solid var(--line);
  }

  .catalog-group:last-child { padding-bottom: 0; border-bottom: 0; }

  .group-heading { margin-bottom: 1.25rem; }
  .group-heading h2 { font-size: clamp(2.25rem, 4.5vw, 3.45rem); }
  .group-heading p { margin-top: .42rem; font-size: 1.07rem; }

  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .catalog-card {
    display: grid;
    grid-template-rows: 1fr auto;
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: .9rem;
    background: #fffcf6;
  }

  .catalog-card-copy, .comparison { padding: 1.18rem; }
  .catalog-card-copy h3 { margin-top: .82rem; }
  .catalog-card-copy p { margin-top: .55rem; }
  .app-name { text-decoration: underline transparent; text-underline-offset: .15em; }
  .app-name:hover, .app-name:focus-visible { text-decoration-color: currentColor; }
  .comparison { background: var(--tone); border-top: 1px solid var(--line); }
  .comparison-label {
    display: flex;
    align-items: center;
    gap: .4rem;
    color: var(--ink);
    font-size: .93rem;
    font-weight: 750;
  }

  .comparison ul {
    display: flex;
    flex-wrap: wrap;
    gap: .35rem;
    list-style: none;
    padding: 0;
    margin: .64rem 0 .55rem;
  }

  .comparison li {
    padding: .25rem .47rem;
    border: 1px solid #34273826;
    border-radius: .35rem;
    background: #ffffff85;
    font-size: .89rem;
    font-weight: 650;
  }

  .comparison-scope { font-size: .95rem; }

  @media (max-width: 64rem) {
    .catalog-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 44rem) {
    .catalog-hero { grid-template-columns: 1fr; gap: 1.15rem; }
    h1 { font-size: clamp(2.95rem, 9.7vw, 4.75rem); }
    .catalog-art { width: min(100%, 14rem); }
    .catalog-group { padding-block: 2rem; }
  }

  @media (max-width: 36rem) {
    .catalog-grid { grid-template-columns: 1fr; }
  }
</style>
