export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  /** Short brand name used in nav/cards */
  name: string;
  /** Page H1 — keyword-led */
  h1: string;
  /** <title> */
  metaTitle: string;
  /** meta description (150-160 chars) */
  metaDescription: string;
  keywords: string[];
  /** One-line value prop shown under the H1 */
  tagline: string;
  /** Opening paragraphs (unique, indexable copy) */
  intro: string[];
  /** The operational pain this service removes */
  problem: string;
  /** What the client gets — concrete capabilities */
  features: string[];
  /** Tangible deliverables handed over */
  deliverables: string[];
  /** Who this is the right fit for */
  whoFor: string[];
  /** Indicative investment, surfaced for buyers + AI extraction. USD "from" anchors only — no upper bound, no PHP (spec C8/C11). */
  pricing: { label: string; from: string; timeline: string }[];
  faqs: ServiceFaq[];
  /** Project ids from lib/projects.ts to feature as proof */
  relatedProjectIds: string[];
};

export const services: Service[] = [
  {
    slug: "ai-software-development",
    name: "AI Agents & RAG",
    h1: "AI Agent & RAG Development",
    metaTitle: "AI Agent & RAG Development Company | Real Solutions",
    metaDescription:
      "We build production RAG systems and LLM agents with grounded output, server-side citations, and provable tenant isolation. Shipped in weeks, not quarters.",
    keywords: [
      "RAG development company",
      "AI agent development",
      "LangGraph developers for hire",
      "build AI agent MVP",
      "production RAG system",
      "LLM application development",
      "retrieval augmented generation agency",
    ],
    tagline:
      "Retrieval and agents that ship to production — with output your compliance team can audit.",
    intro: [
      "Most AI demos fall apart the week they meet real users. The model invents a number nobody can trace, a citation points at a document that says something else, and the thing that impressed everyone in the pitch becomes a liability the moment it's answering customers.",
      "We build the other kind. Our retrieval systems construct citations server-side from the chunks actually retrieved — never parsed from the model's prose — so a poisoned document cannot exfiltrate data across tenants. Our narration layers run behind a grounding guard that rejects any output citing a number the deterministic engine did not produce, falling back to deterministic copy instead of guessing.",
      "That discipline is why we can move fast. Senior architects using AI leverage, with the guardrails written first: every deviation from spec recorded as a numbered ADR, isolation proven by positive-control tests rather than asserted in a README.",
    ],
    problem:
      "Teams ship an LLM prototype that works in the demo and cannot survive an audit. There's no way to prove the model didn't invent a figure, no way to prove one customer's data can't reach another, and no record of why any of it was built the way it was.",
    features: [
      "Hybrid retrieval — dense vectors and full-text, fused with reciprocal rank fusion in a single query",
      "Server-side citations built from retrieved chunk ids, never parsed from model output",
      "Grounding guard that rejects ungrounded numbers and falls back to deterministic copy",
      "Provider-agnostic model layer — swap providers with an env var, no code change",
      "Tenant isolation enforced at the data layer with Postgres RLS, not UI checks",
      "Agent orchestration with checkpointed state, so a failed turn resumes rather than restarts",
    ],
    deliverables: [
      "Working RAG or agent system deployed to your infrastructure",
      "Numbered ADRs recording every architectural decision and deviation",
      "Isolation test suite with positive controls",
      "Security review across every surface before handover",
      "Runbook and 30-day warranty",
    ],
    whoFor: [
      "Founders who need an AI MVP in front of users in weeks",
      "Teams whose AI output will be read by regulators, auditors, or customers under contract",
      "Companies who tried an LLM prototype and hit the grounding or isolation wall",
    ],
    pricing: [
      { label: "AI Feature Add-on", from: "$5,000", timeline: "2–4 weeks" },
      { label: "AI MVP Build", from: "$5,000", timeline: "4 weeks" },
      { label: "Custom Platform", from: "$13,000", timeline: "6–10 weeks" },
    ],
    faqs: [
      {
        question: "How do you stop the model from making things up?",
        answer:
          "A grounding guard sits between the model and the user. Every number, percentage, and rule state in the output is checked against the facts the deterministic engine actually produced; anything ungrounded is rejected and replaced with deterministic copy. The CI check imports the same primitives as the runtime guard, so the two cannot drift apart.",
      },
      {
        question: "Can you prove one tenant can't see another's data?",
        answer:
          "Yes, at the data layer. Isolation is enforced by Postgres row-level security using a per-transaction session variable with a bleed-guard: an unset variable reads back as NULL and matches no rows, so the failure mode is an empty result, never another tenant's data. The application role cannot bypass RLS and does not own the tables. Every isolation test carries a positive control, so an empty result can't be a broken query passing silently.",
      },
      {
        question: "How fast can you actually ship?",
        answer:
          "Three to four weeks for a working system in front of users, four to ten for a multi-tenant platform. Two senior architects with AI leverage — our value is the architecture decisions, code review, integration, and deployment, which is also why the guardrails go in first rather than last.",
      },
      {
        question: "Which model providers do you support?",
        answer:
          "Every model call goes through one provider-agnostic layer, so switching providers is an environment variable, not a refactor. That matters when a compliance requirement forces a specific region or vendor after the build has started.",
      },
    ],
    relatedProjectIds: ["aura", "artemis"],
  },
  {
    slug: "system-integration",
    name: "System Integration",
    h1: "AI Systems Integration Services",
    metaTitle: "AI Systems Integration Company | Real Solutions",
    metaDescription:
      "We wire LLM agents and RAG pipelines into your existing APIs, databases, and internal tools — with tenant isolation and grounding guards on every write path.",
    keywords: [
      "AI systems integration company",
      "integrate LLM into existing software",
      "AI middleware development",
      "connect AI agents to internal APIs",
      "legacy system AI integration",
      "enterprise AI integration services",
      "GDPR compliant AI vendor",
    ],
    tagline:
      "Wire AI agents and RAG pipelines into the systems you already run — auditable data flows, not a bolt-on chatbot.",
    intro: [
      "Most AI features never make it past the demo because they were never wired into anything. A support agent that can't read the actual ticket, an assistant that can't write back to the CRM, an automation somebody has to re-trigger by hand because it can't reach the system it's supposed to update — the model works, and the integration doesn't exist.",
      "We build the connective layer: LLM agents and RAG pipelines that read and write through the APIs, webhooks, and databases your team already runs. Tenant isolation is enforced at the data layer, not asserted in a README, and every write path sits behind the same grounding guard we use everywhere else, so an agent can't act on a number it invented.",
      "That integration work moves fast because it's disciplined, not because it's rushed: senior architects with AI leverage, every deviation from the integration spec recorded as a numbered ADR, so what got built and why is never a mystery six months later.",
    ],
    problem:
      "AI pilots that stall at proof-of-concept because nobody connected them to the systems of record — the CRM, the ticketing queue, the internal API — the business actually runs on. The model works in isolation and does nothing in production.",
    features: [
      "Read/write integration with your CRM, ticketing, ERP, or internal APIs — not a read-only chatbot",
      "Tenant isolation enforced at the data layer with Postgres RLS, not app-layer checks",
      "Grounding guard on every write path — an agent can't act on a number it invented",
      "Works with modern REST/GraphQL APIs and legacy systems without a modern API surface",
      "Webhook and event-driven triggers so agents react to your systems in real time",
      "Provider-agnostic model layer — swap providers without touching the integration code",
    ],
    deliverables: [
      "Integration architecture and data-flow map covering every system touched",
      "Production integration layer deployed to your infrastructure",
      "Numbered ADRs recording every architectural decision and deviation",
      "Isolation and security review before handover",
      "Runbook, monitoring, and 30-day warranty",
    ],
    whoFor: [
      "Teams with an AI pilot that never got wired into the CRM, ticketing, or internal APIs it needs to act on",
      "Companies running LLM agents that need to read and write against systems of record, not just chat",
      "Regulated teams needing agent write-paths a compliance review can trace",
    ],
    pricing: [
      { label: "AI Integration — Single System", from: "$3,500", timeline: "2–4 weeks" },
      { label: "AI Integration — Multi-System", from: "$7,000", timeline: "4–8 weeks" },
      { label: "Enterprise Integration Suite", from: "$16,000", timeline: "8–12 weeks" },
    ],
    faqs: [
      {
        question: "How much does it cost to integrate AI into our existing systems?",
        answer:
          "A single-system integration — wiring one agent or RAG pipeline into one system of record — starts at $3,500 and runs 2–4 weeks. Multi-system integrations connecting three or more start at $7,000 (4–8 weeks), and enterprise suites connecting six or more start at $16,000 (8–12 weeks). Final cost depends on how many systems are touched and whether each exposes a usable API.",
      },
      {
        question: "Can you integrate with a system that doesn't have a modern API?",
        answer:
          "Often, yes. We integrate through REST and GraphQL APIs where they exist, and fall back to database-level integration, file-based sync, or a middleware layer for legacy systems that don't expose one. The isolation and grounding guarantees apply regardless of which integration path a given system requires.",
      },
      {
        question: "Will the AI be able to write back to our systems, or just read from them?",
        answer:
          "Both, when the use case calls for it. Every write path sits behind the same grounding guard used across all our engineering: an agent cannot act on a number the deterministic layer didn't produce. Read-only integrations are simpler and ship faster; write-capable ones get the full security review before going live.",
      },
      {
        question: "How do you handle authentication and access control across our tools?",
        answer:
          "We integrate with your existing identity provider and enforce tenant isolation at the data layer with Postgres row-level security, not with checks in the UI. The integration layer only holds credentials scoped to what it needs, and every access path is covered in the security review before handover.",
      },
      {
        question: "How is this different from a POS or payroll integration?",
        answer:
          "It's a different problem. We're not syncing point-of-sale or payroll data between two systems of record — we're wiring an AI agent or RAG pipeline into the APIs, databases, and internal tools your team already runs, so it can act inside your actual infrastructure instead of sitting beside it as a separate tool.",
      },
    ],
    relatedProjectIds: ["artemis", "stocksense", "osms"],
  },
  {
    slug: "custom-software",
    name: "Custom Platforms",
    h1: "Multi-Tenant Platform Development",
    metaTitle: "Multi-Tenant Platform Development | Real Solutions",
    metaDescription:
      "We engineer multi-tenant platforms with tenant isolation enforced at the database layer via Postgres RLS — not an app-layer check away from a data breach.",
    keywords: [
      "multi-tenant SaaS development",
      "custom platform development company",
      "multi-tenant architecture development",
      "B2B SaaS development agency",
      "Postgres RLS tenant isolation",
      "custom software development company",
      "SaaS platform engineering",
    ],
    tagline:
      "Multi-tenant platforms engineered so one customer's data structurally cannot reach another's — not a permissions check away from a breach.",
    intro: [
      "Off-the-shelf SaaS tools force your product to fit someone else's schema, and most custom multi-tenant builds fake isolation with an application-level `WHERE tenant_id = ?` clause — one missed filter away from one customer reading another's data.",
      "We build the platform underneath differently. Tenant isolation is enforced at the database layer with Postgres row-level security and a per-transaction session variable carrying a bleed-guard: an unset variable reads back NULL and matches no rows, so a bug in application code fails to an empty result, never to another tenant's data. The database role the application runs as cannot bypass RLS and does not own the tables it queries.",
      "You own the code and the schema outright — no vendor lock-in, no dependency on us to keep running. Two senior architects with AI leverage do the build, prototype-first so you see and approve the data model before core engineering starts, and every departure from the agreed spec is a numbered ADR, not a Slack message nobody can find later.",
    ],
    problem:
      "Multi-tenant products where isolation is a permissions check instead of a database guarantee — one bug, one missed filter, and a customer sees another customer's data. Teams find out this is how their platform was built only when a security review asks for proof, and there isn't any.",
    features: [
      "Tenant isolation enforced with Postgres row-level security at the data layer, not app-layer checks",
      "Bleed-guard on every isolation policy — a failure returns empty, never another tenant's row",
      "Isolation test suite with positive controls, so an empty result can't hide a broken query",
      "You own the code, schema, and infrastructure — no vendor lock-in",
      "Cloud-deployed with CI/CD, automated testing, and staged environments",
      "Interactive prototype of the data model and core flows before full engineering begins",
    ],
    deliverables: [
      "Data model and tenant-isolation architecture, reviewed before build",
      "Production-grade platform with automated test coverage",
      "Isolation test suite with positive controls",
      "Numbered ADRs recording every architectural decision and deviation",
      "Source code, schema ownership, and documentation",
      "Managed support and roadmap advisory",
    ],
    whoFor: [
      "Founders building a multi-tenant SaaS product who need isolation they can prove, not just claim",
      "Enterprise teams whose compliance review will ask for evidence, not an assurance",
      "Companies that outgrew an off-the-shelf tool and need a platform shaped around their own model",
    ],
    pricing: [
      { label: "Platform Starter", from: "$6,000", timeline: "3–5 weeks" },
      { label: "Multi-Tenant Platform MVP", from: "$13,000", timeline: "6–10 weeks" },
      { label: "Enterprise Platform", from: "$36,000", timeline: "10–16 weeks" },
    ],
    faqs: [
      {
        question: "How much does custom platform development cost?",
        answer:
          "A platform starter — a single-tenant tool or a narrow-scope build — starts at $6,000 and runs 3–5 weeks. A multi-tenant platform MVP starts at $13,000 (6–10 weeks), and an enterprise-grade platform starts at $36,000 (10–16 weeks). Final cost depends on the number of tenant-facing roles, integrations, and compliance requirements.",
      },
      {
        question: "How do you prove tenant isolation actually works, not just claim it?",
        answer:
          "Every isolation policy is covered by a test that includes a positive control — a case engineered to fail if the policy isn't actually enforced. That's how an empty query result gets ruled out as a false pass. The isolation logic itself lives in Postgres row-level security policies, not in application code that a future change could quietly break.",
      },
      {
        question: "Do we own the code and the database?",
        answer:
          "Yes, outright. You get the source code, the schema, and the infrastructure configuration — no vendor lock-in, and no dependency on us to keep the platform running.",
      },
      {
        question: "What do you build before writing production code?",
        answer:
          "A live, interactive prototype of the core data model and primary user flows, which you use and react to before any core engineering begins. This is where multi-tenant boundaries and role permissions get argued out, while changing them is still cheap.",
      },
      {
        question: "Can this scale to meet enterprise compliance requirements?",
        answer:
          "Yes. Row-level security enforced at the data layer, positive-control isolation tests, a numbered ADR for every deviation from spec, and a security review before handover are the same practices we'd bring to a regulated engagement — they're not an upgrade tier, they're how the platform gets built from the first migration.",
      },
    ],
    relatedProjectIds: ["stocksense", "osms", "food-costing-system"],
  },
  {
    slug: "web-mobile-apps",
    name: "Web & Mobile",
    h1: "Web & Mobile App Development for AI Products",
    metaTitle: "Web & Mobile Development for AI Products | Real Solutions",
    metaDescription:
      "Front-ends and apps built for what's running behind them — streamed tokens and citations rendered live, one React Native codebase for iOS and Android.",
    keywords: [
      "web app development for AI products",
      "React Native app development company",
      "Next.js development agency",
      "AI product front-end development",
      "AG-UI protocol developers",
      "mobile app development for startups",
      "conversion-focused web app development",
    ],
    tagline:
      "Front-ends and apps built to sit over an AI backend — streamed tokens, tool calls, and citations rendered the moment the agent produces them.",
    intro: [
      "Most AI products ship a capable backend behind a front-end that was never built for one — a spinner where a streamed token should render, a chat window that drops the citation the backend already computed, a mobile app that polls for an update instead of subscribing to a running agent.",
      "We build the interface layer to match what's underneath: token and tool-call streaming rendered as it arrives, citations and confidence surfaced inline rather than buried in prose, and one React Native codebase for iOS and Android when the product needs to run on a phone, with offline support for teams that can't assume a connection. On the web, that means conversion-focused sites and dashboards with sub-second loads and clean semantic markup — the front door to the product, built with the same care as the backend behind it.",
      "Everything ships on the same prototype-first, AI-accelerated process we use across the company: you see and approve a working version before full engineering starts, and the two architects who scope it are the same two who build and review it.",
    ],
    problem:
      "Interfaces that weren't built for what's running behind them — no streaming, no inline citations, mobile apps that poll instead of subscribing to a live agent. The backend is production-grade and the front-end undersells it.",
    features: [
      "Streaming token and tool-call rendering, not a spinner until the response completes",
      "Citations and confidence rendered inline, sourced from the same data the backend cites",
      "One React Native codebase for iOS and Android",
      "Offline-first mobile with real-time sync once connectivity returns",
      "Sub-second web load times and clean semantic markup for SEO and crawlability",
      "Analytics and event tracking wired in from day one, not bolted on after launch",
    ],
    deliverables: [
      "Interactive prototype of the core screens before full engineering",
      "Production web app or website, deployed with CI/CD",
      "Cross-platform mobile app (iOS + Android) where the product needs one",
      "Analytics, SEO, and performance setup",
      "App store submission support and documentation",
    ],
    whoFor: [
      "AI products whose front-end can't keep up with a streaming backend",
      "Startups needing an iOS and Android app from one codebase on one budget",
      "Teams whose mobile users need the app to work without a reliable connection",
    ],
    pricing: [
      { label: "Website / Marketing Site", from: "$3,000", timeline: "1–3 weeks" },
      { label: "Web App / SaaS Front-End", from: "$12,000", timeline: "6–10 weeks" },
      { label: "Cross-Platform Mobile App", from: "$13,000", timeline: "6–14 weeks" },
    ],
    faqs: [
      {
        question: "How much does it cost to build a web app or mobile app front-end?",
        answer:
          "A marketing site or website starts at $3,000 and runs 1–3 weeks. A web app or SaaS front-end starts at $12,000 (6–10 weeks), and a cross-platform mobile app starts at $13,000 (6–14 weeks). Pricing depends on the number of screens, integrations, and whether the backend already exists.",
      },
      {
        question: "Do you build separate apps for iOS and Android?",
        answer:
          "No — we build from a single React Native codebase that runs on both iOS and Android. That cuts cost and timeline while still supporting offline mode, push notifications, and real-time sync.",
      },
      {
        question: "Can the front-end handle a streaming AI backend?",
        answer:
          "Yes — that's the specific problem this service solves. Tokens and tool calls render as the agent produces them, citations are surfaced inline rather than parsed out of prose after the fact, and the UI reflects the backend's actual state instead of polling for it.",
      },
      {
        question: "Will the app work without an internet connection?",
        answer:
          "Where the use case calls for it, yes. We build offline-first on mobile — local state persists and syncs in real time once connectivity returns, so field or low-connectivity users aren't blocked by a dropped signal.",
      },
      {
        question: "Will the website actually rank on Google?",
        answer:
          "We build for performance and SEO from the start — fast load times, clean semantic markup, structured data, and analytics wired in from launch. Ranking also depends on content and domain authority over time, which we can advise on, but the technical foundation is not the bottleneck.",
      },
    ],
    relatedProjectIds: ["evolve-talents", "hydroguide", "aura"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
