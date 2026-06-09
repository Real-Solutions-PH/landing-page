export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "links"; heading?: string; items: { label: string; href: string }[] };

export type Post = {
  slug: string;
  title: string;
  /** <title> + og:title (can differ from on-page H1) */
  metaTitle: string;
  description: string;
  keywords: string[];
  /** ISO date */
  date: string;
  /** Human-readable date */
  dateLabel: string;
  /** Short card excerpt */
  excerpt: string;
  readMinutes: number;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "custom-software-development-cost-philippines",
    title:
      "How Much Does Custom Software Development Cost in the Philippines?",
    metaTitle:
      "Custom Software Development Cost in the Philippines (2026 Guide)",
    description:
      "A transparent 2026 breakdown of custom software development costs in the Philippines — from simple business tools to advanced platforms, with real price ranges and what drives them.",
    keywords: [
      "custom software development cost Philippines",
      "software development price Philippines",
      "how much does software cost Philippines",
      "app development cost Philippines",
      "MVP cost Philippines",
    ],
    date: "2026-05-12",
    dateLabel: "May 12, 2026",
    excerpt:
      "Real price ranges for custom software in the Philippines in 2026 — simple tools, MVPs, and platforms — plus the factors that actually move the number.",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "If you've asked three software companies in the Philippines how much a custom system costs, you've probably gotten three wildly different answers — and a lot of \"it depends.\" It does depend, but not on anything mysterious. This guide gives you real 2026 price ranges and explains exactly what moves the number, so you can budget with confidence.",
      },
      {
        type: "h2",
        text: "The short answer",
      },
      {
        type: "p",
        text: "In 2026, custom software development in the Philippines typically ranges from around ₱63,000 for a simple internal business tool to ₱1,050,000+ for an advanced, multi-module business platform. For international clients, the same work runs roughly $6,000 to $75,000+. Most growing SMEs land in the middle: a focused MVP between ₱154,000 and ₱455,000.",
      },
      {
        type: "h2",
        text: "Typical price tiers",
      },
      {
        type: "ul",
        items: [
          "Simple business tool: ₱63,000–₱154,000 ($6,000–$13,000), 3–5 weeks — one workflow, a few user roles, basic reporting.",
          "Custom software MVP: ₱154,000–₱455,000 ($13,000–$36,000), 6–10 weeks — a real product with multiple modules and integrations.",
          "Advanced business platform: ₱455,000–₱1,050,000+ ($36,000–$75,000+), 10–16 weeks — complex logic, many roles, heavy integration.",
          "System integration (connecting existing tools): from ₱42,000 for 1–2 systems up to ₱455,000 for 6+ systems.",
        ],
      },
      {
        type: "h2",
        text: "What actually drives the cost",
      },
      {
        type: "p",
        text: "Five things move the price more than anything else: the number of distinct workflows and user roles, how many external systems you need to integrate, the volume and quality of your existing data, whether you need a mobile app (and on which platforms), and how much ongoing change you expect after launch. A single-workflow tool with no integrations is cheap and fast. A platform that has to sync with your POS, accounting, and CRM in real time is not.",
      },
      {
        type: "h2",
        text: "Why cheap-by-default usually costs more",
      },
      {
        type: "p",
        text: "Research on SME outsourcing found that roughly half of outsourced projects either fail outright or fail to meet expectations — often because the buyer optimized for the lowest sticker price and got burned. The cheapest quote frequently hides junior developers, no testing, and no maintenance plan, which means you pay twice: once to build, once to rebuild. The goal isn't the lowest price; it's the lowest total cost of ownership.",
      },
      {
        type: "h2",
        text: "How Real Solutions PH keeps cost down without cutting corners",
      },
      {
        type: "p",
        text: "We deliver fast and affordably by running an optimized delivery system, not by hiring juniors. Senior engineers are amplified by AI tooling and reusable internal frameworks, and a paid Discovery Audit plus an interactive prototype removes misalignment before it becomes expensive rework. You also own your code and data, so there's no vendor lock-in inflating your long-term cost.",
      },
      {
        type: "faq",
        items: [
          {
            q: "What is the cheapest custom software you can build?",
            a: "A simple single-workflow business tool starts at around ₱63,000 (about $6,000) and takes 3–5 weeks. Below that, you're usually better served by configuring an off-the-shelf tool — which we'll tell you honestly during a Discovery Audit.",
          },
          {
            q: "Why is custom software cheaper in the Philippines than the US or Australia?",
            a: "Lower operating costs let Philippine teams charge significantly less for the same engineering quality. At Real Solutions PH, an AI-accelerated delivery system widens that gap further while keeping work senior-led.",
          },
          {
            q: "How do I get an exact quote?",
            a: "Book a Discovery Audit. In 3–7 days you receive a workflow audit, a solution roadmap, and a fixed project estimate based on your actual scope.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Custom Software Development service", href: "/services/custom-software" },
          { label: "System Integration service", href: "/services/system-integration" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Book a Discovery Audit", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "offshore-vs-local-software-development-philippines",
    title:
      "Offshore vs Local Software Development in the Philippines: How to Choose",
    metaTitle:
      "Offshore vs Local Software Development Philippines | Cost & Quality",
    description:
      "Comparing offshore, local, and managed software development in the Philippines — on cost, quality, communication, and risk — so you choose the right model for your project.",
    keywords: [
      "offshore software development Philippines",
      "hire Filipino developers",
      "local vs offshore developers",
      "software outsourcing Philippines",
      "Philippine software company",
    ],
    date: "2026-05-26",
    dateLabel: "May 26, 2026",
    excerpt:
      "Offshore, local, or a managed partner? A practical comparison on cost, quality, and risk to help you pick the right software development model.",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "The Philippines is one of the world's most popular destinations for software outsourcing — strong English, deep technical talent, and favorable rates. But \"hiring in the Philippines\" can mean very different things, and the model you choose has a bigger impact on outcome than the country does. Here's how the main options compare.",
      },
      {
        type: "h2",
        text: "The three models",
      },
      {
        type: "ul",
        items: [
          "Offshore staff augmentation: you rent individual developers, usually managed by you. Cheapest hourly rate, but you carry the project management, architecture, and quality risk.",
          "Freelancers / cheapest bidders: lowest sticker price, highest variance. Great for tiny tasks, risky for anything your business depends on.",
          "Managed software partner: a senior-led team owns delivery end-to-end — discovery, architecture, build, and maintenance. Higher than raw offshore hourly rates, but far lower total cost of ownership.",
        ],
      },
      {
        type: "h2",
        text: "Cost: sticker price vs total cost",
      },
      {
        type: "p",
        text: "Raw offshore developers look cheapest on an hourly basis. But that price excludes the work someone still has to do: scoping, architecture, code review, testing, project management, and fixing what breaks. When projects fail — and industry research suggests around half of outsourced SME projects do — the savings evaporate. A managed partner folds all of that into one accountable price.",
      },
      {
        type: "h2",
        text: "Quality and seniority",
      },
      {
        type: "p",
        text: "The single biggest predictor of software quality is who is actually writing it. Cheap engagements are often staffed by juniors learning on your budget. At Real Solutions PH, every build is led by head-of-engineering and lead-engineer level talent from startups, using proper engineering practices — architecture review, CI/CD, automated testing, and cloud deployment.",
      },
      {
        type: "h2",
        text: "When to choose each",
      },
      {
        type: "ul",
        items: [
          "Choose staff augmentation if you already have strong in-house technical leadership and just need more hands.",
          "Choose a freelancer for a small, well-defined, low-risk task.",
          "Choose a managed partner when the software matters to your business and you want one team accountable for the result — from idea to maintenance.",
        ],
      },
      {
        type: "h2",
        text: "The managed-partner middle ground",
      },
      {
        type: "p",
        text: "Real Solutions PH sits between DIY tools, traditional agencies, and building your own team. You get a tailored system, production-grade engineering, competitive pricing from an AI-accelerated delivery model, and a partner that stays to maintain and grow what it builds — without the overhead of hiring and managing an in-house team.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is offshore software development in the Philippines reliable?",
            a: "It can be excellent — the Philippines has world-class engineers. Reliability depends far more on the engagement model and team seniority than on location. A senior-led, managed model is the most reliable.",
          },
          {
            q: "How much can I save working with a Philippine software company?",
            a: "Compared to US or Australian agencies, Philippine teams typically cost a fraction for equivalent quality. Real Solutions PH widens that gap with an AI-accelerated delivery system while keeping work senior-led.",
          },
          {
            q: "Do you work with international clients?",
            a: "Yes. We serve both Philippine SMEs and international clients, with one co-founder focused specifically on international cloud and AI engineering engagements.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "How we work", href: "/how-we-work" },
          { label: "Our services", href: "/services" },
          { label: "See our work", href: "/work" },
          { label: "Book a Discovery Audit", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "business-process-automation-philippines-sme",
    title:
      "Business Process Automation for Philippine SMEs: Where to Start",
    metaTitle:
      "Business Process Automation for Philippine SMEs (2026 Guide)",
    description:
      "The manual tasks quietly costing your team hours every week — and a practical, low-risk way for Philippine SMEs to start automating business processes in 2026.",
    keywords: [
      "business process automation Philippines",
      "business automation software Philippines",
      "workflow automation small business",
      "automate business processes Philippines",
      "SME automation Philippines",
    ],
    date: "2026-06-02",
    dateLabel: "June 2, 2026",
    excerpt:
      "The repetitive work quietly draining your team's hours — and a practical, low-risk way for Philippine SMEs to start automating it.",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Every growing business runs on a hidden pile of manual work: copying orders into a spreadsheet, sending the same follow-up messages, compiling the same weekly report, chasing approvals over chat. None of it is hard. All of it eats hours, invites mistakes, and doesn't scale. Business process automation is about handing that repetitive work to software so your team can spend its time on the things that actually need a human.",
      },
      {
        type: "h2",
        text: "What business process automation really is",
      },
      {
        type: "p",
        text: "Automation isn't about replacing people or buying one giant platform. It's about finding the repeatable, rules-based steps in how your business runs and letting software do them reliably. A new order automatically creates an invoice and a delivery task. A paid invoice updates your books. A submitted form routes to the right person for approval. Small automations, compounding across a whole team, free up serious time.",
      },
      {
        type: "h2",
        text: "Where Philippine SMEs lose the most time",
      },
      {
        type: "ul",
        items: [
          "Re-typing data between apps that don't talk to each other.",
          "Manual reporting — exporting and stitching spreadsheets every week.",
          "Repetitive customer messages: confirmations, reminders, and follow-ups.",
          "Approval chains that live in group chats and get forgotten.",
          "Inventory and reorder tracking done by hand.",
        ],
      },
      {
        type: "h2",
        text: "How to start without betting the business",
      },
      {
        type: "p",
        text: "The right way to begin is small and measurable. Pick one painful, high-frequency process — not ten. Map exactly how it works today, automate that single workflow, and measure the hours saved. Once it's proven, expand. This keeps risk low and builds trust with the team, who see the benefit before anything bigger changes.",
      },
      {
        type: "ul",
        items: [
          "List your most repetitive weekly tasks and roughly how long each takes.",
          "Pick the one that's frequent, rules-based, and error-prone.",
          "Automate just that, then measure the time saved over a few weeks.",
          "Reinvest the saved hours — and the proof — into the next workflow.",
        ],
      },
      {
        type: "h2",
        text: "What it costs — and what it returns",
      },
      {
        type: "p",
        text: "Automation is one of the highest-ROI software investments an SME can make, because the cost is largely one-time while the time savings recur every week. Many automations are built as part of a system integration (from around ₱42,000) or a small custom tool. The honest first step is a Discovery Audit (₱10,000–₱22,000, or $700–$1,200 internationally), where we map your workflows and tell you which automations will actually pay for themselves — and which aren't worth it yet.",
      },
      {
        type: "faq",
        items: [
          {
            q: "What's the difference between automation and integration?",
            a: "Integration connects your systems so data flows between them; automation adds the rules and actions on top — what should happen automatically when that data changes. They're closely related and often delivered together.",
          },
          {
            q: "Do I need to replace my current tools to automate?",
            a: "Usually not. Most automation is built around the tools you already use, connecting and extending them rather than replacing them.",
          },
          {
            q: "What's a realistic first automation?",
            a: "Something frequent and rules-based — automatic order-to-invoice, weekly report generation, or customer follow-up messages. We help you pick the one with the best payoff in a Discovery Audit.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Custom Software Development service", href: "/services/custom-software" },
          { label: "System Integration service", href: "/services/system-integration" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Book a Discovery Audit", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "ai-for-business-philippines",
    title:
      "AI for Philippine Businesses: Practical Uses That Actually Pay Off",
    metaTitle:
      "AI for Business in the Philippines: Practical Uses (2026)",
    description:
      "Beyond the hype — concrete, ROI-positive ways Philippine SMEs are using AI in 2026, and how to add it to the systems you already run.",
    keywords: [
      "AI integration Philippines",
      "AI for business Philippines",
      "AI automation Philippines",
      "AI software development Philippines",
      "AI for small business Philippines",
    ],
    date: "2026-06-05",
    dateLabel: "June 5, 2026",
    excerpt:
      "Beyond the hype: concrete, ROI-positive ways Philippine SMEs are using AI in 2026 — and how to add it to the systems you already run.",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "AI is having a moment, and most of the advice about it is either breathless hype or vague fear. For a business owner the real question is simpler: where can AI save money or make money right now, without a science project? In 2026, the answer for most Philippine SMEs isn't a flashy chatbot on the homepage — it's quietly embedding AI into the workflows you already run.",
      },
      {
        type: "h2",
        text: "Where AI earns its keep for SMEs",
      },
      {
        type: "ul",
        items: [
          "Document and data handling: pulling figures off invoices, receipts, and forms automatically instead of typing them.",
          "Internal knowledge assistants: a chat tool that answers staff questions from your own SOPs, manuals, and product data.",
          "Customer support triage: drafting replies and routing enquiries so your team handles the exceptions, not every message.",
          "Summarising and reporting: turning long threads, tickets, or sales data into a clear weekly summary.",
        ],
      },
      {
        type: "h2",
        text: "What to ignore (for now)",
      },
      {
        type: "p",
        text: "Plenty of AI ideas look impressive in a demo and disappoint in production. Fully autonomous systems making high-stakes decisions, AI that needs perfectly clean data you don't have, and 'AI for AI's sake' features that don't map to a real cost or revenue lever — these usually aren't worth it yet. The test is simple: can you name the hour saved or the peso earned? If not, wait.",
      },
      {
        type: "h2",
        text: "AI works best on top of connected systems",
      },
      {
        type: "p",
        text: "AI is only as good as the data it can reach. A model that can't see your orders, inventory, or customer history can't do much for your business. That's why AI integration and system integration go hand in hand — once your systems are connected, adding an AI layer that reads and acts on that data becomes far more powerful and far cheaper.",
      },
      {
        type: "h2",
        text: "How to add AI without a research budget",
      },
      {
        type: "p",
        text: "The practical path mirrors any good software project: start with a paid Discovery Audit to find the one or two AI use-cases with real payoff, prototype quickly so you can react to something concrete, then build the smallest version that delivers value — and only expand once it's proven. At Real Solutions PH, AI is delivered like any other production system: senior-led, integrated with your existing tools, and owned by you.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is AI worth it for a small business in the Philippines?",
            a: "Yes, when it's pointed at a specific, repetitive, costly task — document handling, support triage, internal Q&A. It's not worth it as a vague 'add AI' initiative with no clear payoff.",
          },
          {
            q: "Do I need a lot of data to use AI?",
            a: "Less than people assume. Many high-value uses — reading documents, answering questions from your own manuals, drafting replies — work with the data you already have, especially once your systems are connected.",
          },
          {
            q: "Can you add AI to my existing software?",
            a: "Yes. Most of our AI work is embedded into clients' existing tools and workflows rather than built as a separate product. Connected systems make this faster and cheaper.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "AI Software Development service", href: "/services/ai-software-development" },
          { label: "System Integration service", href: "/services/system-integration" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Book a Discovery Audit", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "system-integration-small-business-philippines",
    title:
      "System Integration for Small Businesses in the Philippines: Connect Your POS, Inventory & Accounting",
    metaTitle:
      "System Integration in the Philippines: Connect POS, Inventory & Accounting",
    description:
      "How system integration connects the POS, inventory, CRM, and accounting tools you already use — what it costs in the Philippines, and how it's built.",
    keywords: [
      "system integration Philippines",
      "system integration company Philippines",
      "connect POS and accounting Philippines",
      "POS integration Philippines",
      "business systems integration small business Philippines",
    ],
    date: "2026-06-09",
    dateLabel: "June 9, 2026",
    excerpt:
      "Your POS, inventory, and accounting don't talk to each other — so someone re-types everything. Here's what system integration costs and how it works.",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "Most growing businesses don't have a software problem — they have a disconnection problem. Your POS knows what sold, your inventory sheet knows what's in stock, your accounting software knows what was paid, and none of them talk to each other. So someone re-types the same numbers three times, reports are always a day behind, and nobody fully trusts the data. System integration fixes exactly this.",
      },
      {
        type: "h2",
        text: "What system integration actually means",
      },
      {
        type: "p",
        text: "System integration connects the tools you already use so data flows between them automatically. Instead of replacing your POS, inventory, CRM, HR, and accounting with one giant platform, integration wires them together — a sale in your POS updates stock, posts to accounting, and shows up on a single dashboard without anyone copying a cell. You keep the tools your team already knows; they just stop working in isolation.",
      },
      {
        type: "h2",
        text: "Signs your business needs integration",
      },
      {
        type: "ul",
        items: [
          "Your staff re-enter the same data into two or more systems every day.",
          "Your stock levels, sales, and cash position never quite agree.",
          "Reporting means exporting spreadsheets from several apps and stitching them by hand.",
          "You've outgrown manual processes, but an all-in-one ERP feels too expensive and disruptive.",
          "You're making decisions on numbers that are days old.",
        ],
      },
      {
        type: "h2",
        text: "What system integration costs in the Philippines",
      },
      {
        type: "p",
        text: "Integration is usually far cheaper than custom-building or replacing systems, because you're connecting things that already work. At Real Solutions PH, integration projects start from around ₱42,000 for connecting one or two systems (for example, POS + accounting) and scale to ₱455,000+ for an advanced suite linking six or more. International rates run roughly $3,500 to $32,000+. Most integration MVPs ship in two to twelve weeks, depending on how many systems are involved and how clean the data is.",
      },
      {
        type: "h2",
        text: "How an integration is actually built",
      },
      {
        type: "ul",
        items: [
          "APIs and webhooks: when a system exposes a modern API, we connect directly so changes sync in real time.",
          "Middleware: when systems don't speak the same language, a lightweight service in between translates and routes the data.",
          "Automation rules: the logic that decides what happens when — a paid invoice triggers a stock adjustment; a low stock level triggers a reorder alert.",
          "A single dashboard: one place to see sales, stock, and cash, instead of five browser tabs.",
        ],
      },
      {
        type: "h2",
        text: "Connect first, replace only if you must",
      },
      {
        type: "p",
        text: "The most common — and most expensive — mistake is ripping out working tools to chase a single all-in-one platform. That means migration risk, retraining, and a big bill, often to solve a problem that integration would have solved for a fraction of the cost. We start by mapping your current stack in a Discovery Audit, then connect what works and only rebuild what genuinely holds you back.",
      },
      {
        type: "faq",
        items: [
          {
            q: "What systems can you integrate?",
            a: "Common ones include POS, inventory, e-commerce (Shopify, Lazada), accounting (Xero, QuickBooks), CRM, and HR/payroll. If a system has an API — and most modern ones do — it can usually be integrated. If it doesn't, we can often still connect it through middleware or scheduled syncs.",
          },
          {
            q: "Is integration cheaper than building new software?",
            a: "Almost always. You're reusing tools you already pay for and only building the connections between them. That's why integration projects start at around ₱42,000, well below a full custom build.",
          },
          {
            q: "How long does a system integration take?",
            a: "Most integrations ship in two to twelve weeks. A simple two-system connection is on the short end; a multi-system suite with messy historical data takes longer. A Discovery Audit gives you a firm timeline before any build begins.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "System Integration service", href: "/services/system-integration" },
          { label: "What custom software costs in the Philippines", href: "/blog/custom-software-development-cost-philippines" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Book a Discovery Audit", href: "/contact" },
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
