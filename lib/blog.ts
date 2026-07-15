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
    // Slug preserved for URL/search-authority continuity — legacy identifier, not a
    // market signal. Content below targets an international AI-buyer audience only.
    slug: "custom-software-development-cost-philippines", // positioning-guard:allow-ph
    title: "What an AI MVP Actually Costs in 2026",
    metaTitle: "What an AI MVP Costs in 2026 — Real Pricing Anchors",
    description:
      "A transparent breakdown of what it costs to ship a production AI MVP in 2026 — real 'from' pricing anchors, what drives the number up or down, and why the cheapest quote is rarely the cheapest outcome.",
    keywords: [
      "AI MVP cost",
      "how much does an AI MVP cost",
      "cost to build an AI agent",
      "AI software development pricing",
      "RAG system development cost",
    ],
    date: "2026-05-12",
    dateLabel: "May 12, 2026",
    excerpt:
      "Real 'from' pricing for a production AI MVP in 2026 — feature add-ons, full builds, and multi-tenant platforms — plus what actually moves the number.",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "Ask three AI vendors what an MVP costs and you'll get three different numbers, usually with more hedging than math behind them. Some of that variance is real — a single AI feature bolted onto an existing product and a multi-tenant platform with provable data isolation are not the same job. Here's what the number actually depends on, with real anchors instead of vague ranges.",
      },
      {
        type: "h2",
        text: "The short answer",
      },
      {
        type: "p",
        text: "A single AI feature added to a product you already run starts from $5,000 and ships in 2–4 weeks. A complete AI MVP — model integration, retrieval, a working front end, a user in front of it — starts from $5,000 and ships in 4 weeks. A multi-tenant platform built to survive a compliance review starts from $13,000 and takes 6–10 weeks. These are floors, not averages: the figure moves up from there depending on scope, never down.",
      },
      {
        type: "h2",
        text: "Typical price tiers",
      },
      {
        type: "ul",
        items: [
          "Website or portal, no AI in scope: from $3,000, 1–3 weeks — a marketing site or a client-facing portal.",
          "Integration, connecting an AI system to what you already run: from $3,500, 2–4 weeks.",
          "AI feature add-on: from $5,000, 2–4 weeks — one model-backed feature shipped into an existing product.",
          "AI MVP build: from $5,000, 4 weeks — a new AI product end to end: retrieval, model integration, a usable interface.",
          "Custom platform: from $13,000, 6–10 weeks — multi-tenant, with the isolation and audit guarantees a regulated buyer will actually ask for.",
        ],
      },
      {
        type: "h2",
        text: "What actually drives the cost",
      },
      {
        type: "p",
        text: "Five things move the price more than anything else: how much of your data is clean enough to retrieve against, how many existing systems the AI layer needs to read from or write to, whether you need provable tenant isolation and an audit trail — a regulated buyer's requirement, not a nice-to-have — how much of the surrounding product (auth, billing, admin) already exists versus needs building, and how much ongoing change you expect after launch. A single feature reading from data you already have is fast and cheap. A platform that has to prove to an auditor that one tenant can never see another's data is a different job.",
      },
      {
        type: "h2",
        text: "Why the cheapest quote usually costs more",
      },
      {
        type: "p",
        text: "The lowest quote in your inbox is usually missing something, not doing the same work for less. A cut-rate AI build commonly skips the parts that make output trustworthy: no check that the model's numbers are actually grounded in your data, no server-side citation construction, no isolation tests. That gap doesn't show up in the demo — it shows up the first time the model invents a figure in front of a customer, or an auditor asks how a decision was made and nobody can answer. Fixing that after launch costs more than building it correctly the first time.",
      },
      {
        type: "h2",
        text: "How we keep the estimate honest",
      },
      {
        type: "p",
        text: "Two senior architects scope and review every engagement personally — there is no bench of juniors the estimate is quietly built on. AI-assisted development is part of how we move at this speed, and every deviation from the agreed scope still becomes a numbered ADR citing exactly what changed and why, so the speed doesn't come at the cost of a record you can audit. You own your code and your data on delivery, so there's no lock-in inflating the real cost later.",
      },
      {
        type: "faq",
        items: [
          {
            q: "What's the cheapest AI feature you can ship?",
            a: "A single model-backed feature added to a product you already run starts from $5,000 and takes 2–4 weeks. If your use case doesn't need a custom build, we'll tell you plainly on a scoping call — sometimes an off-the-shelf tool genuinely serves you better.",
          },
          {
            q: "Why do AI project quotes vary so much between vendors?",
            a: "Mostly because they're not quoting the same scope. Model and infrastructure costs are a small part of it — the real variables are how much data-readiness work is needed, how many systems the AI layer touches, and whether the build includes provable isolation and an audit trail or just a working demo.",
          },
          {
            q: "How do I get an exact quote?",
            a: "Book a call. We scope your actual use case, tell you honestly whether it's worth building, and return a fixed estimate tied to real requirements — not a placeholder range.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "AI Software Development service", href: "/services/ai-software-development" },
          { label: "AI MVP Development service", href: "/services/ai-mvp-development" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    // Slug preserved for URL/search-authority continuity — legacy identifier, not a
    // market signal. Content below targets an international AI-buyer audience only.
    slug: "offshore-vs-local-software-development-philippines", // positioning-guard:allow-ph
    title: "Offshore vs Local AI Engineering: What Actually Matters",
    metaTitle: "Offshore vs Local AI Engineering: What Actually Matters",
    description:
      "Remote, in-house, or a managed AI engineering partner — a practical comparison on seniority, timezone overlap, and how to verify quality when you can't watch the team work.",
    keywords: [
      "offshore AI engineering",
      "remote AI development team",
      "hire AI engineers remotely",
      "managed AI development partner",
      "AI engineering pod for hire",
    ],
    date: "2026-05-26",
    dateLabel: "May 26, 2026",
    excerpt:
      "Remote engineering is normal now. The question isn't where your AI team sits — it's how you verify the work when you can't watch it happen.",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Remote AI engineering is the default now, not the exception. The real decision was never really about geography — it's about which model of engagement puts the risk in the right place, and how you verify quality in a team you can't watch over someone's shoulder. Here's how the options actually compare.",
      },
      {
        type: "h2",
        text: "The three models",
      },
      {
        type: "ul",
        items: [
          "In-house hire: full day-to-day control, slowest to start, most expensive per unit of shipped work, and hard to scale down once the project ends.",
          "Staff augmentation or freelancers: the cheapest hourly rate, but you carry the architecture, project management, and quality risk yourself.",
          "Managed AI engineering partner: a senior team owns delivery end to end — architecture through deployment. Higher than a raw hourly rate, far lower total cost when something needs to actually work.",
        ],
      },
      {
        type: "h2",
        text: "Timezone overlap matters more than the map",
      },
      {
        type: "p",
        text: "The question worth asking isn't which country your engineering partner is in — it's whether their working hours overlap enough with yours for live architecture reviews and a fast response when something breaks. A team with strong overlap and asynchronous, written handoffs between sessions can outperform a team down the street that's hard to reach and doesn't write anything down.",
      },
      {
        type: "h2",
        text: "Why seniority matters more than distance",
      },
      {
        type: "p",
        text: "The single biggest predictor of quality in an AI system is who is actually designing and reviewing it. A cut-rate engagement, wherever it's based, is often staffed by people learning on your codebase with no one senior checking their work. Two architects reviewing every architectural decision catches drift before it ships — that has nothing to do with location and everything to do with who's in the room.",
      },
      {
        type: "h2",
        text: "The discipline artifacts that let you verify quality remotely",
      },
      {
        type: "p",
        text: "You can't watch a remote team code, so the honest answer is you verify through what they produce, not through proximity. A numbered ADR for every deviation from spec, citing the exact clause it departs from and who signed off. A grounding guard that rejects any model output citing a number the underlying system didn't actually produce. Isolation tests that carry positive controls, so an empty result can't be mistaken for a broken query that happens to return nothing. A security review across every surface before handover. Those are the receipts a remote team can hand you that a local team asking for trust cannot.",
      },
      {
        type: "h2",
        text: "When to choose each",
      },
      {
        type: "ul",
        items: [
          "Choose an in-house hire if you need day-to-day availability and already have the technical leadership to direct the work.",
          "Choose staff augmentation or a freelancer for a small, well-defined, low-risk task.",
          "Choose a managed partner when the system matters to the business and you want one team accountable for the result, verifiable through what they hand over rather than where they sit.",
        ],
      },
      {
        type: "h2",
        text: "The managed-partner middle ground",
      },
      {
        type: "p",
        text: "We sit between hiring in-house and rolling the dice on a freelancer marketplace: two senior architects use AI leverage to move fast, with every deviation from spec still recorded as a numbered ADR and every build covered by a security review before handover. You get a system built the same way whether or not anyone's watching, and you own the code and the data at the end of it.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is offshore AI engineering reliable?",
            a: "It depends far more on seniority and process than on location. A senior-led team that hands you ADRs, isolation tests, and a security review is more verifiable than a local team that asks you to take its word for it.",
          },
          {
            q: "How do you prove the work is good without being in the room?",
            a: "Through artifacts, not proximity: a grounding guard on model output, isolation tests with positive controls, and a numbered ADR trail for every deviation from spec. All of it is checkable after the fact.",
          },
          {
            q: "Do you work across time zones?",
            a: "Yes. We keep hours that overlap with EU and US working days for live reviews, and hand off asynchronously through written ADRs so nothing depends on someone being awake at the same time.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "How we work", href: "/how-we-work" },
          { label: "AI Software Development service", href: "/services/ai-software-development" },
          { label: "See our work", href: "/work" },
          { label: "Get in touch", href: "/contact" },
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
    // Slug preserved for URL/search-authority continuity — legacy identifier, not a
    // market signal. Content below targets an international AI-buyer audience only.
    slug: "ai-for-business-philippines", // positioning-guard:allow-ph
    title: "AI That Survives Contact With Production",
    metaTitle: "AI That Survives Contact With Production",
    description:
      "Why most AI demos fall apart in production, and the engineering practice — grounding, isolation, audit trails — that makes the difference between a demo and a system you can trust.",
    keywords: [
      "AI in production",
      "why AI demos fail in production",
      "production-ready AI system",
      "grounded AI output",
      "AI system security review",
    ],
    date: "2026-06-05",
    dateLabel: "June 5, 2026",
    excerpt:
      "Most AI demos fall apart the week they meet real users. Here's the engineering practice that makes the difference between a demo and a system that survives production.",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Every AI vendor has a demo that looks impressive in a sales call. Far fewer have a system that survives real users, real data, and a compliance review. The gap between the two isn't a bigger model — it's engineering discipline that most AI vendors skip because it doesn't show up in a demo.",
      },
      {
        type: "h2",
        text: "Why demos break in production",
      },
      {
        type: "p",
        text: "A demo only has to work once, in front of an audience that isn't trying to break it. Production is different: the model gets asked something it should refuse to guess at, a document from one customer ends up next to another's, and eventually someone with compliance authority asks how a decision was actually made. Most AI builds have no answer to any of that, because nobody built one.",
      },
      {
        type: "h2",
        text: "Grounding: refusing to invent numbers",
      },
      {
        type: "p",
        text: "The fix isn't a better prompt — it's a guard between the model and the user. Any number, percentage, or stated fact in the output is checked against what the underlying system actually produced; anything that doesn't match is rejected and replaced with deterministic fallback copy instead of a guess. The check that verifies this runs in CI against the same primitives as the runtime guard, so the two can't quietly drift apart.",
      },
      {
        type: "h2",
        text: "Isolation: proving one tenant can't see another's data",
      },
      {
        type: "p",
        text: "\"We tested it and it works\" isn't proof; a UI check that hides another tenant's data is not the same as data that can't be reached. Real isolation lives at the database layer — Postgres row-level security enforced through a per-transaction session variable, with a bleed-guard so an unset variable reads back as NULL and matches no rows: the failure mode is an empty result, never someone else's data. The application role can't bypass that policy and doesn't own the tables. Every isolation test carries a positive control, so an empty result can't quietly pass as a working query that happens to return nothing.",
      },
      {
        type: "h2",
        text: "Why \"it worked in the demo\" isn't proof",
      },
      {
        type: "p",
        text: "The same discipline extends past grounding and isolation. When the system doesn't know something, it should say so — an honest \"we don't know,\" not a confident guess, and estimates that don't move on data the system was never given. And every departure from the original plan gets written down: a numbered ADR citing the exact clause it deviates from and who approved it, so \"why does it work this way\" has an answer six months later.",
      },
      {
        type: "h2",
        text: "How to ship AI that survives contact with production",
      },
      {
        type: "p",
        text: "Start with the one or two use cases that have a real, nameable payoff — not AI for its own sake. Prototype quickly so you're reacting to something concrete instead of a spec. Build the smallest version that actually delivers the guarantees above, not the biggest version that fits the budget. Two senior architects use AI leverage to move at this pace, with a security review across every surface before handover and the ADR trail behind every decision — which is what makes the speed something you can audit rather than something you have to take on faith.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Do I need a data science team to use AI in production?",
            a: "No. Most production AI work today is engineering — grounding, isolation, integration with the systems you already run — not research. The test is simple: can you name the specific cost or hour this saves? If not, it's not ready to build yet.",
          },
          {
            q: "How do you stop the model from making things up?",
            a: "A grounding guard sits between the model and the user and checks every number or stated fact against what the underlying system actually produced. Anything ungrounded is rejected and replaced with deterministic copy, so the model refuses to answer rather than inventing one.",
          },
          {
            q: "Can AI be added to a product we already run?",
            a: "Yes — most AI work is embedding a model-backed feature into something that already exists, not building a new product from scratch. The better your existing data and systems are connected, the faster and safer that is to do.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "AI Software Development service", href: "/services/ai-software-development" },
          { label: "AI MVP Development service", href: "/services/ai-mvp-development" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Get in touch", href: "/contact" },
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
