<script lang="ts">
  import { CalendarDays, ChartNoAxesColumnIncreasing, ClipboardList, ContactRound, FileText, Inbox, Package, Search, Store } from '@lucide/svelte';
  import type { Tool } from './tools';

  let { slug, size = 27 }: { slug: Tool['slug']; size?: number } = $props();
  const icons = {
    seo: Search,
    analytics: ChartNoAxesColumnIncreasing,
    contacts: ContactRound,
    storefront: Store,
    forms: ClipboardList,
    inbox: Inbox,
    booking: CalendarDays,
    quotes: FileText,
    stock: Package
  };
  const Icon = $derived(icons[slug]);
</script>

<Icon {size} strokeWidth={1.8} aria-hidden="true" />
