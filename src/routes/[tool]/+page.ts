import { error } from '@sveltejs/kit';
import { tools } from '$lib/tools';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => tools.map(({ slug }) => ({ tool: slug }));

export const load: PageLoad = ({ params }) => {
  const tool = tools.find(({ slug }) => slug === params.tool);
  if (!tool) error(404, 'App not found');

  return { tool, otherTools: tools.filter(({ slug, group }) => slug !== tool.slug && group === tool.group) };
};
