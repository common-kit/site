<script lang="ts">
  import poses from './assets/kit-poses.webp';

  let { pose, alt, eager = false }: {
    pose: 'ready' | 'receipt' | 'thinking';
    alt: string;
    eager?: boolean;
  } = $props();

  const positions = { ready: '0%', receipt: '-100%', thinking: '-200%' };
</script>

<div class="pose" style:--offset={positions[pose]}>
  <img src={poses} {alt} width="2172" height="724" loading={eager ? 'eager' : 'lazy'} fetchpriority={eager ? 'high' : 'auto'} />
</div>

<style>
  .pose {
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;
    mix-blend-mode: multiply;
  }

  img {
    position: absolute;
    display: block;
    inset: 0 auto auto var(--offset);
    width: 300%;
    height: 100%;
    max-width: none;
  }
</style>
