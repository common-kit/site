<script lang="ts">
  import { competitors, comparisonChecked, ourMonthly, pricing } from './pricing';

  let people = $state(3);
  let chosen = $state<string[]>(competitors.map(({ app }) => app));

  const money = (n: number) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: n % 1 ? 2 : 0, minimumFractionDigits: n % 1 ? 2 : 0 });

  const rows = $derived(competitors.map((c) => ({ ...c, cost: c.perPerson ? c.monthly * people : c.monthly })));
  const theirs = $derived(rows.filter(({ app }) => chosen.includes(app)).reduce((sum, { cost }) => sum + cost, 0));
  const ours = $derived(ourMonthly(chosen.length));
  const saved = $derived(Math.max(0, theirs - ours));
</script>

<div class="calculator">
  <div class="calc-inputs">
    <label class="people">
      <span>People on your team <strong>{people}</strong></span>
      <input type="range" min="1" max={pricing.peoplePerBusiness} bind:value={people} />
    </label>

    <fieldset>
      <legend>The tools you pay for today</legend>
      <ul>
        {#each rows as row (row.app)}
          <li>
            <label>
              <input type="checkbox" value={row.app} bind:group={chosen} />
              <span class="tool-name"><span><strong>{row.product}</strong> {row.plan}</span><small>{row.category}</small></span>
              <span class="tool-cost">{money(row.cost)}<small>{row.perPerson ? `${money(row.monthly)} × ${people}` : 'a month'}</small></span>
            </label>
          </li>
        {/each}
      </ul>
    </fieldset>
  </div>

  <div class="calc-result" aria-live="polite">
    <p class="result-label">Those tools, every month</p>
    <p class="result-theirs">{money(theirs)}</p>
    <p class="result-label">Common Kit, every month</p>
    <p class="result-ours">{money(ours)}</p>
    <div class="result-saved">
      <p>You’d keep</p>
      <p class="saved-year">{money(Math.round(saved * 12))} <span>a year</span></p>
    </div>
  </div>
</div>

<p class="calc-notes">
  List prices on monthly billing, checked {comparisonChecked}, for the plan a small business usually starts on.
  Prices from each product’s pricing page:
  {#each competitors as c, i (c.app)}<a href={c.source} rel="noopener">{c.product}</a>{i < competitors.length - 1 ? ', ' : '.'}{/each}
  Our apps are in development and don’t do everything these products do. Google Analytics is free, so it isn’t counted.
</p>

<style>
  .calculator {
    display: grid;
    grid-template-columns: 1fr minmax(16rem, .5fr);
    gap: 1rem;
    margin-top: 1.4rem;
    align-items: start;
  }

  .calc-inputs, .calc-result { border: 1px solid var(--line); border-radius: .9rem; background: #fffcf6; }
  .calc-inputs { padding: 1.25rem; }

  .people { display: grid; gap: .55rem; font-weight: 700; color: var(--ink); }
  .people strong { font-family: var(--display); font-size: 1.4rem; margin-left: .4rem; }
  .people input { width: 100%; accent-color: var(--accent); }

  fieldset { border: 0; padding: 0; margin: 1.3rem 0 0; }
  legend { padding: 0; font-weight: 700; color: var(--ink); }
  fieldset ul { list-style: none; padding: 0; margin: .6rem 0 0; border-top: 1px solid var(--line); }
  fieldset li { border-bottom: 1px solid var(--line); }

  fieldset label {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: .75rem;
    padding-block: .65rem;
    cursor: pointer;
  }

  fieldset input { width: 1.1rem; height: 1.1rem; accent-color: var(--accent); }
  .tool-name, .tool-cost { display: grid; color: var(--ink); line-height: 1.3; }
  .tool-cost { text-align: right; font-weight: 750; }
  .tool-name small, .tool-cost small { color: var(--muted); font-weight: 500; font-size: .85rem; }
  label:has(input:not(:checked)) .tool-name, label:has(input:not(:checked)) .tool-cost { opacity: .45; }

  .calc-result { position: sticky; top: 1rem; padding: 1.35rem; border: 2px solid var(--ink); box-shadow: 4px 5px 0 #e5a479; }
  .result-label { font-weight: 700; font-size: .95rem; }
  .result-theirs, .result-ours { font-family: var(--display); letter-spacing: -.06em; line-height: 1; margin: .3rem 0 1rem; }
  .result-theirs { font-size: 2.6rem; color: var(--muted); text-decoration: line-through; text-decoration-thickness: 3px; }
  .result-ours { font-size: 2.6rem; color: var(--ink); }
  .result-saved { padding-top: 1rem; border-top: 1px solid var(--line); }
  .result-saved p { color: var(--ink); font-weight: 700; }
  .saved-year { font-family: var(--display); font-size: 3.1rem; letter-spacing: -.06em; line-height: 1.05; color: var(--accent) !important; }
  .saved-year span { font-family: 'DM Sans Variable', sans-serif; font-size: 1rem; letter-spacing: 0; color: var(--muted); }

  .calc-notes { margin-top: 1rem; font-size: .88rem; max-width: 60rem; }
  .calc-notes a { text-underline-offset: .15em; }

  @media (max-width: 52rem) {
    .calculator { grid-template-columns: 1fr; }
    .calc-result { position: static; }
  }
</style>
