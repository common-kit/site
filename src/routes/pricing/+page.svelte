<script lang="ts">
  import { Bot, Check, CreditCard, Gauge, ReceiptText, Users } from '@lucide/svelte';
  import Kit from '#lib/Kit.svelte';
  import Seo from '#lib/Seo.svelte';
  import { pricing, type Billing } from '#lib/pricing.ts';

  let billing = $state<Billing>('monthly');

  const { oneApp, everything, peoplePerBusiness, trialDays, referralShare } = pricing;
  const per = $derived(billing === 'monthly' ? 'a month' : 'a year');

  const examples = [
    { who: 'A bakery that only needs Common SEO', math: 'One app', total: oneApp.monthly },
    { who: 'The same bakery, adding Common Contacts', math: `Two apps would be $${oneApp.monthly * 2}, so it’s Everything`, total: everything.monthly },
    {
      who: 'An agency with eight client businesses, three of them on every app',
      math: `5 × $${oneApp.monthly} + 3 × $${everything.monthly}, on one bill`,
      total: 5 * oneApp.monthly + 3 * everything.monthly
    }
  ];

  const faqs = [
    {
      q: 'What counts as a person?',
      a: `Anyone you add to a business. Up to ${peoplePerBusiness} people per business are included. The owners and admins who manage all your businesses don’t count toward any of them.`
    },
    {
      q: `What if we have more than ${peoplePerBusiness} people?`,
      a: 'Then you’re bigger than the businesses we built these prices for. Get in touch and we’ll agree on a price that fits.'
    },
    {
      q: 'Why don’t you charge per person?',
      a: 'Adding a teammate costs us next to nothing, so we don’t charge for it. Invite the people who should see it.'
    },
    {
      q: 'What happens when the included AI and search data run out?',
      a: 'You connect your own account with the data provider and keep going, at their price. We never add usage charges to your bill.'
    },
    {
      q: 'Can I use it from my own AI assistant?',
      a: 'Yes. Every app works with AI assistants, and connecting one never costs extra or counts as a person.'
    },
    {
      q: 'Do agencies pay a different price?',
      a: `No. Every business is priced the same, whoever pays for it. When a business you bring in starts paying, you get ${referralShare}% of its bill for its first year as credit on your own bill.`
    },
    {
      q: 'Will my price go up when you add apps?',
      a: 'No. New apps are added to Everything at no extra cost.'
    },
    {
      q: 'Can I run it myself for free?',
      a: 'Yes. Every app is open source and complete. Run it on your own server with your own accounts for data and AI. You pay for the hosted version only if you’d rather not run it.'
    }
  ];
</script>

<Seo
  title="Pricing · Common Kit"
  description={`One app for $${oneApp.monthly} a month, or every app for $${everything.monthly}, per business. Or run it yourself for free.`}
  path="/pricing/"
  shareTitle="Common Kit pricing: one app, or all of them"
/>

<main id="main">
  <section class="pricing-hero wrap" aria-labelledby="pricing-title">
    <div>
      <span class="development-label">Planned prices · The apps are in development</span>
      <h1 id="pricing-title">One app, or<br /> <span>all of them.</span></h1>
      <p>Pay for the one app you need, or get every app for one price. Each business you run is priced on its own.</p>
      <p class="rule">${oneApp.monthly} per app, never more than ${everything.monthly} per business.</p>
    </div>
    <div class="pricing-art"><Kit pose="receipt" alt="Kit the fox holding up a receipt" eager /></div>
  </section>

  <section class="plans-section" aria-labelledby="plans-title">
    <div class="wrap">
      <div class="plans-heading">
        <h2 id="plans-title">Pick how you want to run it</h2>
        <div class="billing-toggle" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={billing === 'monthly'} onclick={() => (billing = 'monthly')}>Monthly</button>
          <button type="button" aria-pressed={billing === 'yearly'} onclick={() => (billing = 'yearly')}>Yearly <small>2 months free</small></button>
        </div>
      </div>

      <div class="plans">
        <article class="plan">
          <h3>Run it yourself</h3>
          <p class="plan-for">For people happy to set up a server.</p>
          <p class="price"><strong>$0</strong> <span>forever</span></p>
          <ul>
            <li><Check size={18} aria-hidden="true" />Every app, open source</li>
            <li><Check size={18} aria-hidden="true" />No limits on people or businesses</li>
            <li><Check size={18} aria-hidden="true" />Your own accounts for data and AI</li>
            <li><Check size={18} aria-hidden="true" />You handle setup and updates</li>
          </ul>
          <a class="plan-link" href="/apps/">Browse the apps</a>
        </article>

        <article class="plan">
          <h3>One app</h3>
          <p class="plan-for">For the one tool you need most.</p>
          <p class="price"><strong>${billing === 'monthly' ? oneApp.monthly : oneApp.yearly}</strong> <span>{per}, per business</span></p>
          <ul>
            <li><Check size={18} aria-hidden="true" />Any one app, hosted for you</li>
            <li><Check size={18} aria-hidden="true" />Up to {peoplePerBusiness} people</li>
            <li><Check size={18} aria-hidden="true" />${oneApp.includedUsage} a month of AI and search data included</li>
            <li><Check size={18} aria-hidden="true" />Nothing to install or update</li>
          </ul>
          <p class="plan-note">Add a second app and you move to Everything.</p>
        </article>

        <article class="plan plan-featured">
          <span class="plan-badge">Best value from two apps</span>
          <h3>Everything</h3>
          <p class="plan-for">Every app, working together.</p>
          <p class="price"><strong>${billing === 'monthly' ? everything.monthly : everything.yearly}</strong> <span>{per}, per business</span></p>
          <ul>
            <li><Check size={18} aria-hidden="true" />Every app, including new ones</li>
            <li><Check size={18} aria-hidden="true" />Up to {peoplePerBusiness} people</li>
            <li><Check size={18} aria-hidden="true" />${everything.includedUsage} a month of AI and search data included</li>
            <li><Check size={18} aria-hidden="true" />One login and one bill</li>
          </ul>
          <p class="plan-note">New apps join at no extra cost.</p>
        </article>
      </div>
      <p class="trial-line">Every hosted plan starts with a {trialDays}-day free trial. No card needed.</p>
    </div>
  </section>

  <section class="wrap examples" aria-labelledby="examples-title">
    <h2 id="examples-title">How it adds up</h2>
    <p class="section-intro">Monthly prices. Each business is priced on its own, and you never pay more than ${everything.monthly} for one.</p>
    <ul>
      {#each examples as example (example.who)}
        <li>
          <div>
            <h3>{example.who}</h3>
            <p>{example.math}</p>
          </div>
          <p class="example-total"><strong>${example.total}</strong> a month</p>
        </li>
      {/each}
    </ul>
  </section>

  <section class="included-section" aria-labelledby="included-title">
    <div class="wrap">
      <h2 id="included-title">Included with every hosted plan</h2>
      <div class="included-grid">
        <article><Users size={24} aria-hidden="true" /><h3>Your team</h3><p>Up to {peoplePerBusiness} people per business. Owners and admins who manage every business don’t count.</p></article>
        <article><Bot size={24} aria-hidden="true" /><h3>Your AI assistant</h3><p>Connect the assistant you already use. It never costs extra or counts as a person.</p></article>
        <article><Gauge size={24} aria-hidden="true" /><h3>AI and search data</h3><p>A monthly amount is included. After that, connect your own account and keep going. We never bill for extra usage.</p></article>
        <article><CreditCard size={24} aria-hidden="true" /><h3>No card to start</h3><p>Try every app free for {trialDays} days. Cancel any time, and your reports stay readable.</p></article>
        <article><ReceiptText size={24} aria-hidden="true" /><h3>One bill</h3><p>Every business you run, on one bill. Agencies and their clients pay the same price.</p></article>
      </div>
    </div>
  </section>

  <section class="wrap faq" aria-labelledby="faq-title">
    <h2 id="faq-title">Questions</h2>
    <div class="faq-list">
      {#each faqs as faq (faq.q)}
        <details>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      {/each}
    </div>
  </section>
</main>

<style>
  .pricing-hero {
    display: grid;
    grid-template-columns: 1fr .62fr;
    align-items: center;
    gap: 2rem;
    padding-block: clamp(2rem, 5vw, 4rem);
  }

  .pricing-hero .development-label { margin-top: 0; font-size: .92rem; }

  h1 {
    margin-top: 1.1rem;
    color: var(--ink);
    font-size: clamp(3.4rem, 7vw, 6.2rem);
    font-weight: 800;
    letter-spacing: -.075em;
    line-height: .95;
  }

  h1 span { color: var(--accent); }

  .pricing-hero p { max-width: 34rem; margin-top: 1.2rem; font-size: clamp(1.1rem, 1.65vw, 1.26rem); }

  .pricing-hero .rule {
    display: inline-block;
    margin-top: 1.1rem;
    padding: .55rem .85rem;
    border: 1px solid #ecd3b6;
    border-radius: .5rem;
    background: #f9dfb6;
    color: var(--ink);
    font-weight: 750;
    font-size: 1.05rem;
  }

  .pricing-art {
    width: min(100%, 22rem);
    justify-self: center;
    background: #f6e2ca;
    border: 1px solid #ecd3b6;
    border-radius: 47% 47% 1.35rem 1.35rem;
    padding: .9rem 1.25rem .45rem;
    overflow: hidden;
  }

  .plans-section { background: #f5ecde; border-block: 1px solid var(--line); padding-block: 2.8rem 3rem; }

  .plans-heading { display: flex; align-items: end; justify-content: space-between; gap: 1rem 2rem; flex-wrap: wrap; }
  .plans-heading h2 { font-size: clamp(2.1rem, 4vw, 3rem); }

  .billing-toggle {
    display: inline-flex;
    padding: .25rem;
    border: 1px solid #d8cabb;
    border-radius: .6rem;
    background: var(--page);
  }

  .billing-toggle button {
    font: inherit;
    font-weight: 700;
    color: var(--ink);
    padding: .5rem .9rem;
    border: 0;
    border-radius: .42rem;
    background: transparent;
    cursor: pointer;
  }

  .billing-toggle button small { font-weight: 650; color: var(--accent); margin-left: .25rem; }
  .billing-toggle button[aria-pressed='true'] { background: var(--ink); color: #fff9ed; }
  .billing-toggle button[aria-pressed='true'] small { color: #f4c4ae; }

  .plans { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin-top: 1.4rem; align-items: stretch; }

  .plan {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.35rem;
    border: 1px solid var(--line);
    border-radius: .9rem;
    background: #fffcf6;
  }

  .plan-featured { border: 2px solid var(--ink); box-shadow: 4px 5px 0 #e5a479; }

  .plan-badge {
    position: absolute;
    top: -.8rem;
    left: 1.2rem;
    padding: .22rem .6rem;
    border-radius: .35rem;
    background: var(--accent);
    color: #fff9ed;
    font-size: .82rem;
    font-weight: 750;
  }

  .plan-for { margin-top: .45rem; }

  .price { display: flex; align-items: baseline; gap: .45rem; margin-top: 1.1rem; color: var(--ink); }
  .price strong { font-family: var(--display); font-size: 3.2rem; letter-spacing: -.06em; line-height: 1; }
  .price span { color: var(--muted); }

  .plan ul { list-style: none; padding: 0; margin: 1.2rem 0 0; display: grid; gap: .6rem; }
  .plan li { display: flex; gap: .5rem; align-items: flex-start; line-height: 1.45; }
  .plan li :global(svg) { flex: none; margin-top: .15rem; color: var(--accent); }

  .plan-note, .plan-link { margin-top: auto; padding-top: 1.2rem; font-size: .95rem; }
  .plan-link { font-weight: 750; text-underline-offset: .22em; }

  .trial-line { margin-top: 1.3rem; color: var(--ink); font-weight: 700; }

  .examples { padding-block: 3.2rem; }
  .examples h2, .included-section h2, .faq h2 { font-size: clamp(2.1rem, 4vw, 3rem); }
  .section-intro { margin-top: .5rem; font-size: 1.05rem; }
  .examples ul { list-style: none; padding: 0; margin: 1.3rem 0 0; border-top: 1px solid var(--line); }

  .examples li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem 2rem;
    padding-block: 1.05rem;
    border-bottom: 1px solid var(--line);
  }

  .examples h3 { font-size: 1.2rem; letter-spacing: -.03em; }
  .examples li p { margin-top: .25rem; }
  .examples .example-total { margin: 0; white-space: nowrap; }
  .example-total strong { font-family: var(--display); font-size: 2rem; color: var(--ink); letter-spacing: -.05em; }

  .included-section { background: #f5ecde; border-block: 1px solid var(--line); padding-block: 2.8rem 3.2rem; }
  .included-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1rem; margin-top: 1.3rem; }
  .included-grid article { padding: 1.15rem; border: 1px solid var(--line); border-radius: .7rem; background: var(--page); }
  .included-grid :global(svg) { color: var(--accent); }
  .included-grid h3 { margin-top: .7rem; font-size: 1.2rem; letter-spacing: -.03em; }
  .included-grid p { margin-top: .45rem; font-size: .95rem; }

  .faq { padding-block: 3.2rem 4rem; }
  .faq-list { margin-top: 1.2rem; border-top: 1px solid var(--line); max-width: 52rem; }
  .faq details { border-bottom: 1px solid var(--line); }
  .faq summary { cursor: pointer; padding-block: 1rem; font-weight: 750; font-size: 1.08rem; color: var(--ink); }
  .faq details p { padding-bottom: 1.1rem; max-width: 44rem; }

  @media (max-width: 64rem) {
    .included-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  @media (max-width: 56rem) {
    .plans { grid-template-columns: 1fr; max-width: 30rem; }
    .plan-featured { order: -1; margin-top: .6rem; }
  }

  @media (max-width: 44rem) {
    .pricing-hero { grid-template-columns: 1fr; gap: 1rem; }
    .pricing-art { width: min(100%, 13rem); }
    .included-grid { grid-template-columns: 1fr 1fr; }
    .examples li { flex-direction: column; align-items: flex-start; }
  }

  @media (max-width: 27rem) {
    .included-grid { grid-template-columns: 1fr; }
  }
</style>
