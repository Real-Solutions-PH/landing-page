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
    metaTitle: "AI Agent & RAG Development Company",
    metaDescription:
      "We build production RAG systems and LLM agents with grounded output, server-side citations, and provable tenant isolation. Shipped in weeks, not quarters.",
    keywords: [
      "RAG development company",
      "AI agent development",
      "LangGraph developers for hire",
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
    relatedProjectIds: ["aura", "bath-and-bark"],
  },
  {
    slug: "system-integration",
    name: "System Integration",
    h1: "AI Systems Integration Services",
    metaTitle: "AI Systems Integration Company",
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
    metaTitle: "Multi-Tenant Platform Development",
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
    metaTitle: "Web & Mobile Development for AI Products",
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
  {
    slug: "voice-ai",
    name: "Voice AI",
    h1: "Voice AI Agent Development",
    metaTitle: "Voice AI Development Company",
    metaDescription:
      "We build voice AI agents with real barge-in, one agent core across chat and calls, and cost caps built in from day one — not a demo that stalls on interruption.",
    keywords: [
      "voice AI development",
      "Pipecat voice agent",
      "conversational AI agency",
      "voice agent development company",
      "real-time voice AI development",
      "low-latency voice agent development",
      "AI phone agent development",
    ],
    tagline:
      "Voice agents that handle interruption like a human would — barge-in, backchannel audio, and one agent core across every channel.",
    intro: [
      "Most voice AI demos work in a quiet room with one polite caller. The moment a real user interrupts mid-sentence, asks a follow-up before the agent finishes talking, or moves from a chat thread to an actual phone call, the illusion breaks — the agent talks over them, stalls mid-answer while retrieval runs, or starts over as if the conversation never happened.",
      "We build AI-assisted, voice-enabled knowledge assistants and retrieval systems. Streaming STT and TTS run with real barge-in: the moment a caller speaks, in-flight speech and generation cancel against a ~100ms target, instead of finishing the current sentence first. On turns that need retrieval, backchannel audio masks the gap so the agent sounds like it's listening rather than stalling. And it's the same agent regardless of channel — one core carries the retrieval, persona, guardrails, and memory across text, voice-note, and live-call transports; only the transport and turn-taking logic change underneath it.",
      "Transport is a swappable seam, not a foundation poured in concrete: we start on WebSocket, which needs no media server, and WebRTC is a bounded swap when browser-based calling is needed later — a transport change, not a rewrite of the agent underneath it. Cost is architected in from the start, not bolted on after a spend spike — per-tenant concurrent-call caps, a hard spend cap, a kill switch, and session timeouts, the same discipline we apply to every other engineering guarantee.",
    ],
    problem:
      "Voice AI pilots that work in a demo and break on a real call — talking over an interrupting caller, stalling mid-answer while retrieval runs, or losing the thread the moment a conversation moves from chat to a live call.",
    features: [
      "Streaming STT/TTS with real barge-in — in-flight speech and generation cancel against a ~100ms target the moment the caller speaks",
      "Backchannel audio masks retrieval latency on grounded turns, so the agent sounds like it's listening, not stalling",
      "One agent core across text, voice-note, and live-call transports — the same retrieval, persona, guardrails, and memory; only transport and turn-taking differ",
      "Transport built as a swappable seam — WebSocket first with no media server required, WebRTC a bounded swap when browser calling is needed",
      "Cost architected in from day one — per-tenant concurrent-call caps, a spend cap, a kill switch, and session timeouts",
      "Provider-agnostic model and STT/TTS layer — swap vendors without rewriting the pipeline",
    ],
    deliverables: [
      "Working voice agent deployed to your infrastructure",
      "Cost controls configured — concurrency caps, spend cap, kill switch, session timeouts",
      "Numbered ADRs recording every architectural decision and deviation",
      "Security review across every surface before handover",
      "Runbook and 30-day warranty",
    ],
    whoFor: [
      "Founders who need a voice agent that survives a real caller interrupting it, not a chatbot with text-to-speech bolted on",
      "Teams with an existing text agent who need the same retrieval, guardrails, and memory on a live phone call",
      "Companies whose voice pilot broke on interruption handling or ran up cost nobody had capped",
    ],
    pricing: [
      { label: "AI MVP Build", from: "$5,000", timeline: "4 weeks" },
      { label: "Custom Platform", from: "$13,000", timeline: "6–10 weeks" },
    ],
    faqs: [
      {
        question: "How is this different from a chatbot with text-to-speech added on?",
        answer:
          "It's a different architecture, not a different skin. One agent core carries the retrieval, persona, guardrails, and memory across text, voice-note, and live-call transports — the same agent whether a user is typing or calling. Only the transport and turn-taking logic change underneath it.",
      },
      {
        question: "What happens when the caller talks over the agent?",
        answer:
          "The in-flight speech and generation cancel — that's real barge-in, working against a ~100ms design target, not a fixed pause the caller has to wait out. On turns that need retrieval, backchannel audio covers the gap so the pause doesn't read as the agent going silent.",
      },
      {
        question: "Do we need WebRTC or a media server to get started?",
        answer:
          "No. We start on WebSocket, which needs no media server. WebRTC is a bounded swap if you later need in-browser calling — a transport change, not a rebuild of the agent underneath it.",
      },
      {
        question: "How do you stop a busy day from blowing through our budget?",
        answer:
          "Cost is architected in, not monitored after the fact: per-tenant concurrent-call caps, a hard spend cap, a kill switch, and session timeouts are configured before launch, not added after an invoice surprises you.",
      },
      {
        question: "How fast can you ship a voice agent?",
        answer:
          "An AI MVP Build starts at $5,000 and runs four weeks for a working voice agent in front of users. A custom, multi-tenant voice platform starts at $13,000 and runs six to ten weeks.",
      },
    ],
    relatedProjectIds: ["aura"],
  },
  {
    slug: "data-pipelines",
    name: "Data Pipelines",
    h1: "Data Pipeline Development for AI Systems",
    metaTitle: "Data Pipeline Development Company",
    metaDescription:
      "We build lineage-carrying data pipelines with deterministic rules first, LLMs only where needed, and blue/green deploys — every row traceable to its source.",
    keywords: [
      "data pipeline development",
      "Dagster consulting",
      "ETL pipeline agency",
      "data engineering for AI",
      "data lineage engineering",
      "AI data pipeline development company",
      "ETL development company",
    ],
    tagline:
      "Pipelines where every row traces back to its source feed, run, and timestamp — and every deploy is validated before it goes live.",
    intro: [
      "Most \"AI data pipeline\" work is a script that ran fine in a demo and breaks the first time an upstream source changes shape — and when a downstream number looks wrong, there's no way to trace it back to the row, the feed, or the run that produced it.",
      "We build ingestion with full lineage instead: every canonical row carries its source feed, source document id, run id, and the timestamp it was ingested, so any output can be traced back through every transform to the row that produced it. Deterministic rules run first — most of the pipeline is plain logic, not a model call — and an LLM is invoked only where deterministic rules genuinely can't reach. That model call never sits in the live request path; it runs during scheduled ingestion, where a slow or wrong call can't take down a user-facing request.",
      "Every model call sits behind read-through caching keyed to the prompt version, so changing a prompt busts the cache instead of silently serving stale output, and every call is cost-logged rather than estimated after the invoice arrives. Records are soft-deleted, never hard-deleted, and a new pipeline version ships through a blue/green swap that only cuts over once its output validates against the version it's replacing.",
    ],
    problem:
      "Data pipelines that break the moment an upstream source changes shape, run a model call inside the live request path where a slow response becomes a user-facing outage, and produce numbers nobody can trace back to the row, feed, or run that made them.",
    features: [
      "Scheduled ingestion with full lineage — every canonical row carries its source feed, source document id, run id, and ingest timestamp",
      "Deterministic rules first — most of the pipeline runs as plain logic; an LLM is invoked only where deterministic rules can't reach",
      "LLM calls never sit in the live request path — inference runs during scheduled ingestion, not at serve time",
      "Read-through caching keyed to prompt version, so a prompt change busts the cache instead of silently serving stale output",
      "Cost logged per model call, not estimated after the invoice arrives",
      "Soft-delete only, and every pipeline version ships through a blue/green swap validated against the prior version before cutover",
    ],
    deliverables: [
      "Production ingestion pipeline deployed to your infrastructure",
      "Lineage-carrying schema — every row traceable to source feed, document id, run id, and ingest time",
      "Numbered ADRs recording every architectural decision and deviation",
      "Cost and cache-hit logging per model call",
      "Runbook and 30-day warranty",
    ],
    whoFor: [
      "Teams whose pipeline breaks every time an upstream source changes shape",
      "Companies that can't trace a downstream number back to the row that produced it",
      "Teams running model calls inside a live request path that need it moved to scheduled ingestion instead",
    ],
    pricing: [{ label: "Custom Platform", from: "$13,000", timeline: "6–10 weeks" }],
    faqs: [
      {
        question: "How do you keep the pipeline from breaking every time a source changes?",
        answer:
          "Deterministic rules handle normalization first, so most of the pipeline doesn't depend on a model call at all; an LLM only runs where deterministic logic genuinely can't reach. Combined with full lineage — every row carries its source feed, document id, run id, and ingest time — a break is traceable to the exact row and run that caused it, not a mystery you re-derive from scratch.",
      },
      {
        question: "Where does the LLM actually run?",
        answer:
          "During scheduled ingestion, never in a live request path. That means a slow or wrong model call can't turn into a user-facing outage — it's isolated to a batch run that either produces a valid output or gets caught before it reaches anything downstream.",
      },
      {
        question: "How do you control the cost of model calls in the pipeline?",
        answer:
          "Read-through caching sits in front of every call, keyed to the prompt version, so a prompt edit busts the cache instead of silently serving stale output. Every call is cost-logged as it happens, not reconstructed from an invoice at the end of the month.",
      },
      {
        question: "What happens when you deploy a new version of the pipeline?",
        answer:
          "It ships through a blue/green swap: the new version runs alongside the old, its output is validated against the prior version, and traffic only cuts over once that validation passes. Nothing goes live on the strength of it working in a staging environment alone.",
      },
      {
        question: "Do you ever hard-delete data?",
        answer:
          "No — soft-delete only. A row can be marked removed, but the history stays, which matters the day a downstream consumer needs to know what changed and when, not just what the current state is.",
      },
    ],
    relatedProjectIds: ["stocksense", "food-costing-system"],
  },
  {
    slug: "ai-mvp-development",
    name: "AI MVP Development",
    h1: "AI MVP Development in 4 Weeks",
    metaTitle: "AI MVP Development Agency",
    metaDescription:
      "Ship a production AI MVP in 4 weeks — 3 build weeks, 1 UAT week, hypercare and warranty included. From $5,000. Two senior architects, not a bench of juniors.",
    keywords: [
      "AI MVP development agency",
      "build AI agent MVP",
      "AI prototype development",
      "MVP development company",
      "AI MVP development company",
      "startup AI development agency",
      "AI agent MVP for startups",
    ],
    tagline:
      "A working AI system in front of real users in four weeks — not a slide deck, and not a bench of juniors between you and the person who wrote the code.",
    intro: [
      "Most \"AI MVP\" offers are a pitch deck with a demo bolted on, or a project manager relaying your spec to a bench of engineers a senior only glances at before delivery. A pre-seed or seed founder needs neither. They need something real users can touch, on a timeline that fits a runway, built by people who'll still be reachable the week after it ships.",
      "We ship in four weeks: three weeks of build, one week of user acceptance testing against your actual users, not our assumptions about them. The two senior architects who scope the engagement are the same two who build it, review it, and stay on through a hypercare period after launch, backed by a 30-day warranty on the work.",
      "Four weeks is realistic because we build with AI leverage — the same tools and speed we use across every engagement — but leverage without discipline is exactly how a fast build fails a technical diligence call six months later. Every deviation from the agreed scope is a numbered ADR, and the grounding and tenant-isolation guarantees we build everywhere else go in from the first commit, not after your first enterprise prospect asks for a security review.",
    ],
    problem:
      "Pre-seed and seed founders who need a real AI system in front of users before their next investor conversation or customer pilot — not a demo that impresses in a meeting and stalls the moment an actual user touches it.",
    features: [
      "Four weeks from kickoff to a working AI system in front of real users — three build weeks, one UAT week",
      "One core AI capability scoped and shipped completely, not five features shipped halfway",
      "Grounding guard and tenant isolation built in from the first commit, not retrofitted before a customer's security review",
      "Two senior architects scope, build, and review the engagement — no bench of juniors between you and the code",
      "Hypercare support immediately after launch, plus a 30-day warranty on the delivered work",
      "Numbered ADRs for every deviation from the agreed scope, so what changed and why is never a Slack thread you have to dig up later",
    ],
    deliverables: [
      "Working AI system deployed and in front of real users, not a local demo",
      "A UAT week run against your actual users, with fixes folded in before handover",
      "Source code and infrastructure you own outright",
      "Numbered ADRs and a runbook for what you're inheriting",
      "Hypercare support window plus a 30-day warranty after launch",
    ],
    whoFor: [
      "Pre-seed to seed founders who need a production AI system before their next round, not a slide",
      "Non-technical or solo-technical founders who need two senior architects, not a project manager relaying to a team of juniors",
      "Teams that tried a no-code AI tool or an agency demo and hit a wall the moment real users showed up",
    ],
    pricing: [{ label: "AI MVP Build", from: "$5,000", timeline: "4 weeks" }],
    faqs: [
      {
        question: "What exactly do we get in four weeks?",
        answer:
          "A working AI system in front of real users, not a demo. The engagement runs three build weeks followed by a UAT week against your actual users, with fixes from that week folded in before handover. You leave with hypercare support and a 30-day warranty on the delivered work.",
      },
      {
        question: "What's not included in the $5,000 MVP build?",
        answer:
          "It's one AI capability, scoped and shipped completely — not an open-ended retainer, not unlimited feature requests, and not indefinite free support beyond the hypercare window and 30-day warranty. If what you need is multi-tenant architecture or a compliance-ready platform from day one, that's our Custom Platform engagement, not the MVP build.",
      },
      {
        question: "Why four weeks, and not two or twelve?",
        answer:
          "Three weeks is enough to build one AI capability properly when the scope is held to one capability, not five. The fourth week is UAT against real users, not our assumptions about them, so what ships has actually been used before you call it done.",
      },
      {
        question: "Who's actually building this — will we get a bench of junior developers?",
        answer:
          "No. The two senior architects who scope the engagement are the same two who build, review, and support it through hypercare. There's no handoff to a team you haven't met.",
      },
      {
        question: "What happens after the MVP ships?",
        answer:
          "A hypercare period immediately after launch, then a 30-day warranty on the delivered work. If the MVP validates and you need to scale it into a multi-tenant platform or add compliance-grade guarantees, that becomes a Custom Platform engagement built on what already shipped, not a rewrite.",
      },
    ],
    relatedProjectIds: ["aura", "bath-and-bark"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
