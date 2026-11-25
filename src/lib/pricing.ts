// Planned prices for the hosted version (specs/platform/hosted.md §1.1). The numbers are still
// proposed, so the pages that show them say so.
export const pricing = {
  oneApp: { monthly: 15, yearly: 150, includedUsage: 5 },
  everything: { monthly: 29, yearly: 290, includedUsage: 10 },
  peoplePerBusiness: 10,
  trialDays: 14,
  referralShare: 20
} as const;

export type Billing = 'monthly' | 'yearly';

// The leading paid tool in each category, at the plan a small business would usually start on.
// List prices on monthly billing in US dollars, checked November 2026. Update `comparisonChecked` when you recheck them.
export const comparisonChecked = 'November 2026';

export type Competitor = {
  app: string; // a slug in tools.ts
  category: string;
  product: string;
  plan: string;
  monthly: number;
  perPerson: boolean;
  source: string;
};

export const competitors: Competitor[] = [
  { app: 'seo', category: 'Search and SEO', product: 'Semrush', plan: 'Pro', monthly: 139.95, perPerson: false, source: 'https://www.semrush.com/pricing/seo-ai-search/' },
  { app: 'contacts', category: 'Customer list (CRM)', product: 'HubSpot', plan: 'Starter', monthly: 20, perPerson: true, source: 'https://www.hubspot.com/pricing/crm' },
  { app: 'storefront', category: 'Online store', product: 'Shopify', plan: 'Basic', monthly: 39, perPerson: false, source: 'https://www.shopify.com/pricing' },
  { app: 'forms', category: 'Forms', product: 'Typeform', plan: 'Basic', monthly: 39, perPerson: false, source: 'https://www.typeform.com/pricing/' },
  { app: 'inbox', category: 'Shared inbox', product: 'Help Scout', plan: 'Standard', monthly: 30, perPerson: true, source: 'https://www.helpscout.com/pricing/' },
  { app: 'booking', category: 'Booking', product: 'Calendly', plan: 'Standard', monthly: 12, perPerson: true, source: 'https://calendly.com/pricing' },
  { app: 'quotes', category: 'Quotes', product: 'PandaDoc', plan: 'Starter', monthly: 35, perPerson: true, source: 'https://www.pandadoc.com/pricing/' },
  { app: 'stock', category: 'Inventory', product: 'Sortly', plan: 'Advanced', monthly: 49, perPerson: false, source: 'https://www.sortly.com/pricing/' }
];

/** What Common Kit costs a business per month for this many apps. */
export function ourMonthly(appCount: number): number {
  if (appCount === 0) return 0;
  return appCount === 1 ? pricing.oneApp.monthly : pricing.everything.monthly;
}
