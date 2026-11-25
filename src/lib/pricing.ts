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
