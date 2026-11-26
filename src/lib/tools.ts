export const toolGroups = [
  { id: 'get-found', name: 'Get found', description: 'Help people discover your business and give them a way to reach you.' },
  { id: 'work-with-customers', name: 'Work with customers', description: 'Keep conversations, appointments, and follow-ups straight.' },
  { id: 'sell-and-fulfill', name: 'Sell and fulfill', description: 'Send estimates, sell online, and know what’s on the shelf.' }
] as const;

export const tools = [
  {
    slug: 'growth',
    name: 'Common Growth',
    group: 'get-found',
    color: 'peach',
    summary: 'See how your business is doing, why it changed, and the few things to do next to grow.',
    description: 'One place to see how people find your business, with a short list of what to do next and a check on whether it worked.',
    alternatives: ['Semrush', 'Ahrefs', 'Triple Whale'],
    comparison: 'For knowing what to work on next, ranked by what it’s worth to your business.',
    plans: [
      { title: 'See it all in one place', text: 'Search, AI answers like ChatGPT, website visits, ads, and sales together, in plain English.' },
      { title: 'Get the 10 things to do now', text: 'A ranked list, each with why it matters, what it could earn, and how much work it is.' },
      { title: 'Hand off the work', text: 'Each item comes as a brief that you, a helper, or your own AI assistant can carry out, on any website.' },
      { title: 'See what it earned', text: 'Once a change is live, find out what it moved, so the next list is even better.' }
    ],
    // Screens from the app, showing an invented sample shop (Fernwick Coffee), never a real business.
    screens: [
      { src: '/screens/growth-projects.webp', alt: 'Common Growth’s Projects page: a ranked list of seven things to do, each with its impact, estimate and effort', caption: 'The things to do now, ranked by what each could bring in and how much work it is.' },
      { src: '/screens/growth-project.webp', alt: 'One project in Common Growth: why it’s worth doing, the estimate, and a brief with steps to hand off', caption: 'Each one comes with the evidence and a brief you can hand to a helper or your own AI assistant.' },
      { src: '/screens/growth-ai-answers.webp', alt: 'Common Growth’s AI answers page: how often ChatGPT, Gemini, Perplexity and Google’s AI Overviews mention the shop', caption: 'Whether ChatGPT, Gemini and others recommend you, and who they name instead.' }
    ]
  },
  {
    slug: 'analytics',
    name: 'Common Analytics',
    group: 'get-found',
    color: 'blue',
    summary: 'See how many people visit, where they come from, and which pages they look at.',
    description: 'Website analytics for answering the questions a small business owner actually asks.',
    alternatives: ['Google Analytics', 'Plausible'],
    comparison: 'For everyday traffic and referral reporting.',
    plans: [
      { title: 'See where visits come from', text: 'Understand how search, social, and links from other sites bring people to your business.' },
      { title: 'Find the pages people use', text: 'See which pages get attention and how visits change over time.' }
    ]
  },
  {
    slug: 'contacts',
    name: 'Common Contacts',
    group: 'work-with-customers',
    color: 'green',
    summary: 'Keep customer details, conversation notes, and reminders to follow up in one place.',
    description: 'An open-source CRM for keeping up with the people your business depends on.',
    alternatives: ['Attio', 'Twenty'],
    comparison: 'For managing contacts and keeping track of relationships.',
    plans: [
      { title: 'Keep the conversation together', text: 'Bring people, companies, notes, and follow-ups into one place.' },
      { title: 'Spend less time entering data', text: 'Connect email and calendars to build useful contact records from conversations you’re already having.' }
    ]
  },
  {
    slug: 'storefront',
    name: 'Common Storefront',
    group: 'sell-and-fulfill',
    color: 'yellow',
    summary: 'Put your products online, take orders, and see what’s ready to ship.',
    description: 'A straightforward online shop for people who make things, sell things, and do most of the work themselves.',
    alternatives: ['Shopify', 'Big Cartel', 'WooCommerce'],
    comparison: 'For an online shop with a small catalog.',
    plans: [
      { title: 'Put your products online', text: 'Create a storefront shoppers can browse on their phone or desktop, with room for photos, prices, and the details they need.' },
      { title: 'Keep up with orders', text: 'See what sold and which orders are ready to fulfill.' }
    ]
  },
  {
    slug: 'forms',
    name: 'Common Forms',
    group: 'get-found',
    color: 'green',
    summary: 'Add a contact or quote-request form to your site and collect replies in a submissions inbox.',
    description: 'Make it easy for customers to ask a question or tell you what they need, right on your website.',
    alternatives: ['Tally', 'OpnForm'],
    comparison: 'For website contact forms and new customer inquiries.',
    plans: [
      { title: 'Publish a form anywhere', text: 'Make a contact or quote-request form, share a link, or embed it on the website you already have.' },
      { title: 'See what needs a reply', text: 'Get an email when a request comes in, review it in the submissions inbox, and send it to Common Contacts if you use both apps.' }
    ]
  },
  {
    slug: 'inbox',
    name: 'Common Inbox',
    group: 'work-with-customers',
    color: 'blue',
    summary: 'Share a hello@ inbox, assign replies, and leave notes only your team can see.',
    description: 'A shared email inbox for the two or three people who answer customers.',
    alternatives: ['Missive', 'Front', 'Help Scout', 'Chatwoot'],
    comparison: 'For teams sharing a customer email address.',
    plans: [
      { title: 'See who’s handling each message', text: 'Assign a conversation to a teammate and see who already replied.' },
      { title: 'Share context privately', text: 'Leave a note in the conversation so the next person has what they need to help.' }
    ]
  },
  {
    slug: 'booking',
    name: 'Common Booking',
    group: 'work-with-customers',
    color: 'peach',
    summary: 'Let customers pick a service and an available time, with reminders and easy rescheduling.',
    description: 'A service booking page for solo operators and small teams that spend their days with customers.',
    alternatives: ['Calendly', 'Square Appointments', 'Easy!Appointments'],
    comparison: 'For basic appointment scheduling and reminders.',
    plans: [
      { title: 'Let customers book themselves', text: 'List your services and hours on a booking page customers can open from your website or a direct link.' },
      { title: 'Keep your calendar in sync', text: 'Use your calendar to show available times and give customers a way to reschedule from their confirmation.' }
    ]
  },
  {
    slug: 'quotes',
    name: 'Common Quotes',
    group: 'sell-and-fulfill',
    color: 'peach',
    summary: 'Send a branded estimate customers can accept online and see which quotes need a follow-up.',
    description: 'Send clear estimates and keep track of what customers have agreed to.',
    alternatives: ['Joist', 'Jobber', 'Invoice Ninja'],
    comparison: 'For creating, sending, and accepting estimates.',
    plans: [
      { title: 'Put the scope and price in writing', text: 'Build an estimate with your logo and itemized costs, then send the customer a link.' },
      { title: 'Keep pending work in view', text: 'See which quotes are waiting on a decision, revise the details when the job changes, and record acceptance online.' }
    ]
  },
  {
    slug: 'stock',
    name: 'Common Stock',
    group: 'sell-and-fulfill',
    color: 'green',
    summary: 'Count what’s on hand, record what came in or went out, and spot items that are running low.',
    description: 'A simple inventory tracker for makers and small shops that keep stock in one place.',
    alternatives: ['Sortly', 'Zoho Inventory', 'InvenTree'],
    comparison: 'For basic stock counts and low-stock tracking.',
    plans: [
      { title: 'Know what you have', text: 'Open your inventory on a phone or computer to see current quantities and record new stock or sales.' },
      { title: 'Know what to reorder', text: 'Set a low-stock level for each item and see what needs replenishing in one list.' }
    ]
  }
] as const;

export type Tool = (typeof tools)[number];
