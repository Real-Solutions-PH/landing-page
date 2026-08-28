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
  /** Single category the /blog filter tabs group on */
  topic: string;
  /** Short labels rendered on the card, mirroring the portfolio cards */
  tags: string[];
  /** One line the reader leaves with — the card's stat row */
  takeaway: string;
  /** Key into ACCENT_CLASSES, used to tint the takeaway icon */
  accentColor: string;
  /** Public-relative path to the 1200x630 cover, e.g. /blog/cover-x.png */
  coverImage: string;
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
    topic: "Pricing",
    tags: ["Pricing", "AI MVP", "Scoping"],
    takeaway:
      "Real pricing floors, and the five things that move them",
    accentColor: "sky",
    coverImage: "/blog/cover-ai-mvp-cost.png",
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
    topic: "Delivery",
    tags: ["Delivery", "Remote Teams", "Verification"],
    takeaway:
      "How to verify engineering work you can't watch happen",
    accentColor: "blue",
    coverImage: "/blog/cover-offshore-verification.png",
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
    topic: "Production AI",
    tags: ["Production AI", "Reliability", "Architecture"],
    takeaway:
      "What separates a demo from a system that survives users",
    accentColor: "emerald",
    coverImage: "/blog/cover-production-ai.png",
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
    slug: "proving-tenant-isolation-postgres-rls",
    title: "How to Actually Prove Postgres Row-Level Security Works",
    metaTitle: "Postgres RLS Tenant Isolation: Proving It, Not Asserting It",
    description:
      "A per-transaction session variable, a nullif bleed-guard, and a database role that can't bypass its own policy — how Postgres row-level security becomes isolation you can prove, not just configure and hope.",
    keywords: [
      "Postgres RLS tenant isolation",
      "multi-tenant RAG platform",
      "row-level security multi-tenant",
      "tenant isolation testing",
      "Postgres bleed-guard",
    ],
    date: "2026-06-16",
    dateLabel: "June 16, 2026",
    excerpt:
      "A tenant_id filter is a convention every engineer has to remember, forever. Here's how a session variable, a bleed-guard, and a positive-control test turn isolation into something the database enforces instead.",
    readMinutes: 9,
    topic: "Security",
    tags: ["Security", "Postgres", "Multi-Tenancy"],
    takeaway:
      "Isolation the database enforces, not a filter you remember",
    accentColor: "purple",
    coverImage: "/blog/cover-tenant-isolation.png",
    body: [
      {
        type: "p",
        text: "A multi-tenant system usually starts with a WHERE clause. Every query filters on tenant_id, every engineer knows to add it, and for a while that's enough. Then the codebase grows past the size where one person reviews every query, a new endpoint ships without the filter, and the failure mode isn't a crash — it's tenant A quietly reading tenant B's rows through an endpoint that returns 200 OK. That's the specific risk that turns a demo into a liability the moment a multi-tenant RAG platform starts serving more than one paying customer, and it's why isolation has to live below the application code a future engineer might get wrong.",
      },
      {
        type: "h2",
        text: "An application-layer filter is a convention, not a control",
      },
      {
        type: "p",
        text: "The tenant_id = ? clause is enforced by discipline: every developer, on every query, forever, including the query someone writes late at night to unblock a demo. Discipline doesn't scale, and a missing filter doesn't show up in a diff review as an obvious gap — it shows up as a row that shouldn't be there. Moving isolation into the database means a query that forgets the filter can't return the wrong tenant's data, because the database itself won't hand over rows the current session isn't allowed to see, regardless of what the application code asked for.",
      },
      {
        type: "h2",
        text: "A policy keyed to a session variable, not a login",
      },
      {
        type: "p",
        text: "Postgres row-level security policies filter rows against a plain SQL predicate, evaluated on every SELECT, UPDATE, and DELETE, no matter which query path reaches the table. Rather than tie a policy to which database login is connected — impractical when every tenant shares the same connection pool — the predicate reads a session-scoped setting, issued once at the start of each transaction from a value already authenticated upstream: SET LOCAL app.tenant_id to the current tenant's id. The policy itself is just a comparison against that setting, evaluated transparently on every row, whether the query above it remembered to filter or not.",
      },
      {
        type: "h2",
        text: "The bleed-guard: an unset session variable must fail closed",
      },
      {
        type: "p",
        text: "SET LOCAL is what makes this safe under connection pooling: it's scoped to the transaction and reverts automatically the moment that transaction ends, so a pooled connection handed to the next tenant's request starts with no inherited value rather than whatever the previous tenant set. But \"no inherited value\" has to resolve to something specific inside the policy, and this is where an isolation design either fails safe or fails open. Reading the setting with its missing-value flag set returns NULL when it was truly never touched in the session, but some connection-bootstrapping paths instead leave it as an empty string, and a policy that doesn't handle that case might error out — or coerce into something that matches an unintended row. Wrapping the read in nullif against an empty string collapses both the NULL case and the empty-string case to the same NULL, and a comparison against NULL is never true under ordinary SQL three-valued logic. The policy excludes every row. A request that forgot to set the tenant context doesn't get a stranger's document back — it gets nothing, which is a bug the first QA pass will catch, not a breach a customer reports.",
      },
      {
        type: "h2",
        text: "The role has to be unable to cheat",
      },
      {
        type: "p",
        text: "None of the policy logic matters if the role running the query owns the table or carries the bypass-RLS attribute — Postgres exempts both from row-level security entirely, on every query, silently. The application's database role is created explicitly as LOGIN NOBYPASSRLS, and migrations run under a separate owning role the application never authenticates as. That split means a future engineer adding a fast path, a reporting query, or an admin script under the application's own credentials can't accidentally reach across tenants no matter what the query says, because the role itself has no bypass to fall back on.",
      },
      {
        type: "h2",
        text: "An empty result is not proof — a positive control is",
      },
      {
        type: "p",
        text: "Here's the trap: an isolation test that only checks \"tenant A can't see tenant B's row\" will happily pass against a completely broken table — a typo'd table name, a query that returns zero rows for every tenant, a join that silently drops everything. Zero rows looks identical whether isolation is working or the query is simply wrong. The fix is to seed known data for two tenants and assert both directions in the same test: under tenant A's session context, tenant A's own row comes back — exactly the row expected, proving the query mechanism actually works — and tenant B's row count is zero. Only the pair together rules out the false pass; the negative assertion alone proves nothing you can act on.",
      },
      {
        type: "h2",
        text: "What this buys a multi-tenant RAG platform specifically",
      },
      {
        type: "p",
        text: "The stakes are sharper in retrieval than in a typical CRUD table, because a leak in a RAG system doesn't surface as a wrong number on a dashboard — it surfaces as one tenant's private document appearing, verbatim, in another tenant's answer. Chunk and embedding tables carry the same policy and the same bleed-guard as every other tenant-scoped table, so a retrieval query that omits a filter — easy to do when a query is assembled dynamically from a vector similarity search plus metadata conditions — still can't return another tenant's chunks. The database enforces the boundary the retrieval code is supposed to respect, instead of trusting that every code path remembered to.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Doesn't row-level security slow down every query?",
            a: "The policy is a plain, indexable predicate the query planner evaluates alongside the rest of the WHERE clause, not a separate pass over the data — with tenant_id indexed, the cost is the same as adding one more condition an application-layer filter would have added anyway. What changes is who can forget to apply it.",
          },
          {
            q: "What if a query genuinely needs to read across tenants, for an internal admin view?",
            a: "That's a separate, explicitly provisioned role with its own narrow policy — created and reviewed as its own decision, never the same role the tenant-facing application authenticates as.",
          },
          {
            q: "Is this specific to Postgres?",
            a: "The mechanism — a session-scoped setting, a bleed-guard, a non-bypassing role — is Postgres row-level security specifically. The underlying principle isn't: isolation enforced at the data layer and proven by a positive control applies to any database offering a comparable row-security feature.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "AI Software Development service", href: "/services/ai-software-development" },
          { label: "Custom Platforms service", href: "/services/custom-software" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "grounding-guards-llm-refuse-invent-numbers",
    title: "Why \"Don't Make Up Numbers\" Doesn't Work as an LLM Instruction",
    metaTitle: "LLM Grounding Guard: How to Stop a Model From Inventing Numbers",
    description:
      "A system prompt telling a model not to hallucinate is not a control. Here's how a grounding guard actually rejects ungrounded numbers, unit by unit, and why the CI check has to share code with the runtime guard.",
    keywords: [
      "LLM grounding guard",
      "LLM security audit",
      "AI hallucination prevention",
      "grounded LLM output",
      "LLM output validation",
    ],
    date: "2026-06-23",
    dateLabel: "June 23, 2026",
    excerpt:
      "A model that's told not to invent numbers can ignore that instruction silently. Here's how a grounding guard checks every number against what the system actually computed, and rejects the rest.",
    readMinutes: 8,
    topic: "Grounding",
    tags: ["Grounding", "LLM Output", "Evals"],
    takeaway:
      "Every number checked against what the engine actually computed",
    accentColor: "amber",
    coverImage: "/blog/cover-grounding-guard.png",
    body: [
      {
        type: "p",
        text: "Tell a model \"only state numbers you're certain about\" and it will comply exactly as well as it complies with every other instruction embedded in a prompt: most of the time, until the one time it doesn't, with no way to tell which response that was without checking. An instruction is a request the model can silently ignore. A grounding guard is code the model's output has to pass through regardless of what the model decided to do, and that difference is the entire reason one of them is a security property and the other is a hope.",
      },
      {
        type: "h2",
        text: "The failure mode isn't obviously wrong",
      },
      {
        type: "p",
        text: "The dangerous hallucination isn't the model claiming something absurd — that gets caught immediately. It's the model narrating a real, structured result and getting one figure inside it wrong: a percentage off by a plausible margin, a count close enough to the right one that nobody double-checks it, a total that reads exactly like something the system would say if it were true. Fluent, structured, contextually appropriate, and unverified — that's the output a grounding guard exists to catch, because it's the one a human reviewer is least likely to.",
      },
      {
        type: "h2",
        text: "What a grounding guard actually validates",
      },
      {
        type: "p",
        text: "Before generation, the deterministic engine — the part of the system that actually queried the database, ran the calculation, or fetched the record — produces its own fact set: every number and named quantity it can stand behind, computed the ordinary way, with no model involved. After the model drafts its response, the guard extracts every numeric claim in that draft and checks each one against the fact set the engine actually produced for this exact request. A number that matches passes through. A number that doesn't — one the model introduced, rounded past an acceptable tolerance, or attached to the wrong quantity — fails, and the response doesn't ship as drafted.",
      },
      {
        type: "h2",
        text: "Why a percentage and a raw count can't share a bucket",
      },
      {
        type: "p",
        text: "The naive version of this check flattens every numeric token into one pool and asks \"does this number appear anywhere in the facts.\" That's how a hallucinated percentage slips through. Take a concrete case: the deterministic engine computed a raw count — say, twelve — somewhere in the response, the model wrote \"12%\" instead of plain \"12,\" and a check that isn't unit-aware sees the digits match and calls it grounded, when the engine never computed that quantity as a percentage of anything at all. Every extracted claim has to carry its unit — percentage, currency, plain count, ratio — and get checked only against the subset of the fact set computed in that same unit. A raw count of twelve and a percentage of twelve are different claims about the world, and treating them as interchangeable because they share a digit is exactly the gap a careless implementation leaves open.",
      },
      {
        type: "h2",
        text: "The fallback is deterministic copy, not a second roll of the dice",
      },
      {
        type: "p",
        text: "When a claim fails the check, re-prompting the model and hoping for a better answer just spends latency on the same failure mode — nothing about a second generation makes the model more likely to know a number it didn't know the first time. The guard instead substitutes deterministic fallback copy: a template sentence built directly from the fact set the engine already computed, with no model-generated text anywhere near the numeric claim. The user still gets an accurate answer; it's assembled by code that can't hallucinate instead of prose that might.",
      },
      {
        type: "h2",
        text: "Keeping the CI check honest",
      },
      {
        type: "p",
        text: "A grounding guard is only as good as the assumption that the thing verifying it in CI actually matches the thing running in production, and that assumption breaks quietly the moment someone patches the runtime extraction logic — to handle a new currency format, say — and forgets a CI fixture test was its own hand-rolled copy of the same regex. The fix is to make that impossible rather than disciplined: the CI evaluation suite imports the exact extraction and matching functions the runtime guard calls, and runs them against a fixture set of adversarial model outputs — plausible wrong numbers, right numbers in the wrong unit, rounding at the edge of tolerance — on every change to either. There's no second implementation to drift out of sync with the first, because there's only one implementation.",
      },
      {
        type: "h2",
        text: "What this means for an LLM security audit",
      },
      {
        type: "p",
        text: "An auditor asking \"how do you know the model didn't make that up\" wants a mechanism, not an assurance. The answer is the extraction and matching code itself, the fact set it checked against for a specific logged request, and the CI fixtures proving the check catches the failure modes it claims to catch — evidence that exists independently of anyone's confidence in the model, because none of it relies on the model at all.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Can't you just fine-tune the model to stop hallucinating numbers?",
            a: "Fine-tuning can reduce how often it happens; it can't make the guarantee absolute, because the model is still generating text probabilistically rather than looking up a fact. A grounding guard checks the output regardless of how well-trained the model is, which is what turns \"less often\" into \"never ships to the user.\"",
          },
          {
            q: "Does this slow down every response?",
            a: "The check runs against a small, already-computed fact set for that request, not a live database query, so it adds a bounded validation pass rather than another model call — a fraction of the cost of the generation step it's checking.",
          },
          {
            q: "What happens to the rest of the response when one number fails?",
            a: "It's a design choice made per system: some guards reject the whole response and re-render it from deterministic copy, others replace only the failing claim in place. Either way, nothing ungrounded reaches the user — the difference is how much of the model's original phrasing survives around it.",
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
    slug: "server-side-citations-never-parse-model-prose",
    title: "Why Citations Have to Come From Retrieval, Never From the Model's Own Text",
    metaTitle: "Server-Side Citations for RAG: Never Parse Model Prose",
    description:
      "Asking a model to cite its own sources and parsing that text is trusting the same fallible process twice. How server-side citations, page-bounded chunking, and fuzzy offset matching fix it.",
    keywords: [
      "RAG citations",
      "production RAG system",
      "RAG hallucination",
      "citation grounding",
      "retrieval augmented generation",
    ],
    date: "2026-06-30",
    dateLabel: "June 30, 2026",
    excerpt:
      "Parsing citations out of a model's own prose trusts the same fallible process twice. Here's why citations have to be built from what retrieval actually returned, not from what the model claims it used.",
    readMinutes: 8,
    topic: "Retrieval",
    tags: ["RAG", "Citations", "Retrieval"],
    takeaway:
      "Citations built from retrieval, never parsed from model prose",
    accentColor: "green",
    coverImage: "/blog/cover-server-side-citations.png",
    body: [
      {
        type: "p",
        text: "The easy way to add citations to a RAG system is to ask the model to append them — \"cite the document and page you used\" — and parse that text afterward into clickable links. It's also the wrong way, because it makes the citation exactly as trustworthy as the prose it's attached to. A model that can misstate a fact can misstate which document it came from, on which page, with the same fluent confidence either way, and a citation nobody can verify is worse than no citation, because it looks like proof.",
      },
      {
        type: "h2",
        text: "The source of truth exists before the model ever runs",
      },
      {
        type: "p",
        text: "By the time generation starts, the retrieval step has already returned an exact list of what the model is working from: specific chunk records, each carrying a chunk id, a document id, a tenant id, a page number, and a character span, selected before a single output token exists. That list is the only trustworthy account of what was actually available to answer from, because it was produced by a deterministic lookup, not a language model narrating its own process. Citations get built from that list, filtered to the current tenant, and rendered independently of whatever the model's prose does or doesn't mention — a response with no citation markers in its text still shows the right sources, because the sources were never derived from the text in the first place.",
      },
      {
        type: "h2",
        text: "Why this closes an isolation gap, not just an accuracy one",
      },
      {
        type: "p",
        text: "Parsing citations out of model prose creates a second path into an isolation problem the data layer was supposed to have already closed. A document engineered to include a plausible-looking reference to some other identifier — planted specifically to be echoed back — can get repeated by the model verbatim, and a system that trusts that echoed text at citation-render time might resolve it into a link without re-checking who's allowed to see it, because the decision came from the model's output instead of the system's own retrieval record. When citations are built exclusively from the chunk list retrieval already fetched and already scoped to the current tenant, there's no second decision point for a poisoned document to hijack — the model's prose is never consulted to decide what gets linked.",
      },
      {
        type: "h2",
        text: "Chunking has to respect page boundaries, or the citation contract breaks",
      },
      {
        type: "p",
        text: "A citation that resolves to \"page 4\" only means something if every chunk maps to exactly one page. Chunk a document by fixed character count without regard to page breaks, and a single chunk can straddle pages 4 and 5 — at which point \"the answer came from this chunk\" no longer has one correct page number to show the reader, only a range to guess between. Chunking within page boundaries — never letting a chunk span two pages, splitting on the page break even when it produces an uneven chunk — keeps the page-and-span pair unambiguous by construction. It's a constraint applied once at index time, and it's what makes every later citation resolvable to a single, exact location instead of something a rendering layer has to reconcile after the fact.",
      },
      {
        type: "h2",
        text: "Offsets drift, so citations match fuzzily, not exactly",
      },
      {
        type: "p",
        text: "Extraction pipelines rarely produce character offsets that line up perfectly with the document as a person actually sees it rendered. Ligatures collapse into single characters, hyphenated line breaks get rejoined or split differently than the source, and OCR introduces small character-level noise — all of which shift a chunk's stored span by a handful of characters relative to where that text visually sits on the page. Treat a stored offset as exact and a citation link will occasionally land one line above or below the sentence it's supposed to highlight. The fix is to re-anchor at click time with approximate string matching — searching for the stored text near the stored offset rather than trusting the offset outright — so a citation lands on the actual sentence even when the extraction pipeline's numbering has drifted slightly from the rendered page.",
      },
      {
        type: "h2",
        text: "What this adds up to in a production RAG system",
      },
      {
        type: "p",
        text: "None of these are exotic techniques — a chunk list from retrieval, a page-respecting index, a fuzzy re-anchor at render time. What they add up to is a citation a user can click and verify against the actual source, every time, instead of a citation that's right until the one time the model's version of events and the system's don't agree, and nothing downstream catches the difference because nothing downstream ever checked.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Does asking the model to include citation markers still serve any purpose?",
            a: "It can help the model stay on-topic and reference the right chunk in its own reasoning, but the markers themselves never build the final citation link — that always comes from the retrieval-time chunk list, so a marker the model gets wrong or omits doesn't change what the user sees cited.",
          },
          {
            q: "What happens if the model's answer doesn't match any retrieved chunk at all?",
            a: "That's a signal the response isn't grounded in retrieval, and it's handled the same way an ungrounded number is: surfaced as a low-confidence or fallback response rather than shown with citations that don't correspond to anything actually retrieved.",
          },
          {
            q: "Is page-bounded chunking worse for retrieval quality than fixed-size chunking?",
            a: "It constrains chunk boundaries, not chunk content — target chunk size within a page stays a free choice, a chunk just never crosses into the next one. The retrieval-quality trade-off is negligible next to what it buys: every chunk id maps to exactly one page, permanently.",
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
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "shipping-production-ai-in-four-weeks",
    title: "What Actually Happens in a Four-Week AI Build",
    metaTitle: "AI MVP in Four Weeks: What Actually Ships, Week by Week",
    description:
      "Three build weeks, one UAT week, and a hard rule about what a tight timeline is and isn't allowed to cut. What actually happens inside a four-week production AI delivery.",
    keywords: [
      "AI MVP development agency",
      "AI engineering pod",
      "AI MVP timeline",
      "AI product delivery process",
      "fixed-scope AI build",
    ],
    date: "2026-07-07",
    dateLabel: "July 7, 2026",
    excerpt:
      "Three weeks of build, one week testing against real users, and a hard line on what a tight deadline is and isn't allowed to cut. Here's what actually happens inside a four-week AI build.",
    readMinutes: 8,
    topic: "Delivery",
    tags: ["Delivery", "Process", "AI MVP"],
    takeaway:
      "Three weeks building, one week against real users",
    accentColor: "orange",
    coverImage: "/blog/cover-four-week-build.png",
    body: [
      {
        type: "p",
        text: "Four weeks is not a marketing number picked because it sounds fast — it's a scope constraint, applied deliberately, before a single line of the build exists. Fix the timeline first and every scoping conversation after that has to answer one real question: what is the one capability that actually fits in three build weeks and a week of testing against real users? That constraint does more to keep a project honest than any amount of planning against an open-ended one, because there's nowhere to hide an unresolved scope disagreement when the calendar won't move.",
      },
      {
        type: "h2",
        text: "Week one: the decisions that are expensive to reverse later",
      },
      {
        type: "p",
        text: "The first week is where the decisions that are cheap to change now and expensive to change in week three get made and written down — the data model, which parts of the system are deterministic logic versus a model call, where the isolation boundary sits if more than one tenant will ever use this. None of that is glamorous, and none of it is visible in a demo, which is exactly why it's tempting to defer. Deferring it is how a build looks fine in week two and then spends week three unwinding a decision that should have taken an afternoon in week one.",
      },
      {
        type: "h2",
        text: "Weeks two and three: one capability, shipped completely",
      },
      {
        type: "p",
        text: "The build weeks are scoped to one core AI capability, built end to end, rather than five features each half-working — a retrieval pipeline that actually cites its sources correctly beats five integrations that each technically respond. The grounding guard and the tenant-isolation policy go in during these weeks, not after, because retrofitting either one onto a system that's already \"working\" means rebuilding around code that was written assuming neither existed. AI-assisted development is what makes three weeks enough time for this: the architects use it to move through implementation at the pace the timeline demands, while still writing the numbered ADR for every point where the build deviates from the agreed scope and the positive-control test for every isolation policy before it ships — the leverage buys speed on the typing, not a shortcut on the record of what got decided or the proof that it works.",
      },
      {
        type: "h2",
        text: "Week four: user acceptance testing against real users, not assumptions",
      },
      {
        type: "p",
        text: "The fourth week hands the system to actual users, not to the team's own sense of whether it's ready. Fixes from that week get folded in before handover, which is the point of holding a week for it rather than shipping straight from the last build day: assumptions about how a real user will actually use the thing are exactly the assumptions a team building it can't see past on its own.",
      },
      {
        type: "h2",
        text: "What a tight deadline is allowed to cut",
      },
      {
        type: "p",
        text: "When something threatens to blow the four-week timeline, the answer isn't quiet unpaid overtime and it isn't a silent under-delivery discovered at handover — it's a scoping decision, recorded as a numbered ADR the moment it's made, naming exactly what's being cut and why, agreed before the deadline arrives rather than explained after it's missed. A secondary feature, a nice-to-have integration, a wider set of edge cases than the core capability strictly needs — all fair things to trim under a fixed timeline, as long as cutting them is a decision on the record, not a surprise.",
      },
      {
        type: "h2",
        text: "What it's never allowed to cut",
      },
      {
        type: "p",
        text: "Some things don't flex regardless of how the week is going, because removing them changes what's being delivered from a production system into a demo wearing production's clothes. The two architects who scoped the engagement do the actual design and review themselves, start to finish — the work doesn't quietly move to whoever has spare capacity when the schedule tightens. The grounding guard and the isolation tests ship with the core capability, not after it, because a version without them isn't a smaller version of the same system, it's a different, unproven one. And the security review before handover happens regardless of how much slack the timeline has left, because the point of four weeks was never to be fast instead of careful — it was to be both, which is the only version of \"fast\" worth having for a system a real user is going to depend on.",
      },
      {
        type: "h2",
        text: "Why this holds whether you're the client or the agency reselling the work",
      },
      {
        type: "p",
        text: "The same structure holds for a founder shipping their first AI feature and for an agency that sold an AI capability to a client and needs a senior pod to actually build it without their own name taking the risk. Either way, the deliverable is the same: a working system, the ADRs behind every deviation from what was scoped, the isolation and grounding guarantees built in from the first commit, and a named team that's reachable after launch — not a black box that either works or doesn't, with no way to ask why.",
      },
      {
        type: "faq",
        items: [
          {
            q: "What happens if the scope turns out to be too big for four weeks once you're in it?",
            a: "That gets caught in week one, not week three, because the architecture decisions made in week one expose scope problems early. If it still needs trimming mid-build, it's a recorded scope decision made with the client, not a quiet under-delivery discovered at handover.",
          },
          {
            q: "Is four weeks realistic for every kind of AI system?",
            a: "It's scoped to one core AI capability — a working retrieval system, an agent handling one job end to end. A multi-tenant platform with several tenant-facing roles and a wider integration surface is a different engagement on a longer timeline, not a compressed version of the same four weeks.",
          },
          {
            q: "What do we actually own at the end of four weeks?",
            a: "The source code, the infrastructure it runs on, and the ADR trail explaining every decision — no dependency on the team that built it to keep it running, and no black box you're trusting instead of auditing.",
          },
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "AI MVP Development service", href: "/services/ai-mvp-development" },
          { label: "AI Software Development service", href: "/services/ai-software-development" },
          { label: "How we work", href: "/how-we-work" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
