<script lang="ts">
  import poses from './assets/kit-poses.webp';
  import { siteOrigin } from './site';

  let {
    title, description, path, shareTitle = title, shareDescription = description
  }: {
    title: string;
    description: string;
    path: string;
    shareTitle?: string;
    shareDescription?: string;
  } = $props();

  const canonical = $derived(siteOrigin ? new URL(path, siteOrigin).href : undefined);
  const shareImage = siteOrigin ? new URL(poses, siteOrigin).href : undefined;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Common Kit" />
  <meta property="og:title" content={shareTitle} />
  <meta property="og:description" content={shareDescription} />
  {#if canonical && shareImage}
    <link rel="canonical" href={canonical} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={shareImage} />
    <meta property="og:image:alt" content="Kit the fox in three poses, wearing a work apron" />
  {/if}
</svelte:head>
