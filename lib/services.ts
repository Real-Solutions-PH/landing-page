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
  /** Indicative investment, surfaced for buyers + AI extraction */
  pricing: { label: string; intl: string; php: string; timeline: string }[];
  faqs: ServiceFaq[];
  /** Project ids from lib/projects.ts to feature as proof */
  relatedProjectIds: string[];
};

export const services: Service[] = [
  {
    slug: "system-integration",
    name: "System Integration",
    h1: "System Integration Services in the Philippines",
    metaTitle: "System Integration Services Philippines | POS, CRM, Inventory & Accounting",
    metaDescription:
      "We connect your POS, inventory, CRM, HR, and accounting into one real-time system. Software integration for Philippine SMEs and international clients — fast, fixed-scope delivery.",
    keywords: [
      "system integration Philippines",
      "software integration company Philippines",
      "POS integration",
      "CRM integration Philippines",
      "API integration Philippines",
      "ERP integration",
      "data integration SME",
    ],
    tagline:
      "Unify your POS, HR, payroll, CRM, and accounting into one real-time pipeline — no more manual re-entry or overnight batch syncs.",
    intro: [
      "System integration is our flagship service at Real Solutions PH. Most growing Philippine businesses don't have a software problem — they have a disconnection problem. Their POS doesn't talk to their inventory, their CRM doesn't talk to their accounting, and someone on the team spends hours every week copying numbers between spreadsheets.",
      "We build the middle layer that ties those tools together. Sales, stock, payroll, and finance data flow through one real-time pipeline, so the number you see in one system is the same number everywhere else — automatically, the moment it changes.",
      "Because we pair senior engineers with AI tooling and our own internal integration templates, we deliver integrations in weeks, not quarters — at a fraction of the cost of a traditional enterprise systems integrator.",
    ],
    problem:
      "Manual data re-entry, overnight batch syncs, and conflicting numbers across POS, inventory, CRM, HR, and accounting. Teams waste hours reconciling systems that were never designed to talk to each other.",
    features: [
      "Same-day, real-time data sync across all platforms",
      "Zero manual data re-entry between systems",
      "One dashboard that reads from every connected tool",
      "Works with both legacy and modern software",
      "API and webhook integrations with third-party services",
      "Secure, auditable data flows with role-based access",
    ],
    deliverables: [
      "Integration architecture and data-flow map",
      "Production integration layer with monitoring",
      "Unified dashboard or reporting view",
      "Technical documentation and handover",
      "Post-launch support and monitoring plan",
    ],
    whoFor: [
      "Multi-branch retailers reconciling sales and stock by hand",
      "SMEs running separate POS, accounting, and inventory tools",
      "Businesses that have outgrown spreadsheets but not yet a full ERP",
      "Companies needing legacy software connected to modern apps",
    ],
    pricing: [
      { label: "Integration Starter (1–2 systems)", intl: "$3,500–$7,000", php: "₱42,000–₱100,000", timeline: "2–4 weeks" },
      { label: "Integration MVP (3–5 systems)", intl: "$7,000–$16,000", php: "₱98,000–₱224,000", timeline: "4–8 weeks" },
      { label: "Advanced Integration Suite (6+ systems)", intl: "$16,000–$32,000", php: "₱224,000–₱455,000", timeline: "8–12 weeks" },
    ],
    faqs: [
      {
        question: "How much does system integration cost in the Philippines?",
        answer:
          "At Real Solutions PH, connecting 1–2 systems starts at ₱42,000 (about $3,500). A full 3–5 system integration MVP ranges from ₱98,000 to ₱224,000, and advanced suites of 6+ systems start at ₱224,000. Final cost depends on the number of systems and the complexity of each connection.",
      },
      {
        question: "Can you integrate software that doesn't have an API?",
        answer:
          "Often, yes. We work with APIs and webhooks where they exist, and use database-level integrations, file-based syncs, or middleware for legacy systems that don't expose a modern API.",
      },
      {
        question: "How long does an integration project take?",
        answer:
          "A simple two-system integration typically takes 2–4 weeks. Larger projects connecting 3–6+ systems run 4–12 weeks, including architecture, build, testing, and deployment.",
      },
    ],
    relatedProjectIds: ["stocksense", "food-costing-system", "osms"],
  },
  {
    slug: "ai-software-development",
    name: "AI Development",
    h1: "AI Software Development & Integration in the Philippines",
    metaTitle: "AI Software Development Philippines | Custom AI Integration for Business",
    metaDescription:
      "Custom AI development and integration for Philippine SMEs and global clients. We wire AI into your existing systems — not a standalone chatbot — to automate real operations.",
    keywords: [
      "AI software development Philippines",
      "AI integration Philippines",
      "custom AI development",
      "AI automation for business",
      "machine learning company Philippines",
      "AI consulting Philippines",
    ],
    tagline:
      "Deploy AI that actually plugs into your existing systems — not a standalone chatbot, but intelligence wired into your daily operations.",
    intro: [
      "Most businesses experimenting with AI end up with a chatbot bolted onto the side of their operation — impressive in a demo, useless in daily work. We take the opposite approach: we wire AI directly into the systems your team already uses.",
      "That means AI trained on your own company data, drafting your reports, routing your tickets, flagging your exceptions, and supporting real decisions inside your existing workflow. The intelligence lives where the work happens.",
      "AI is also core to how we build. We use it to accelerate prototyping and engineering, which is why we can ship custom AI features faster and cheaper than agencies that treat AI as an afterthought.",
    ],
    problem:
      "Generic AI tools and standalone chatbots that don't know your data, don't connect to your systems, and don't reduce any real workload. AI that demos well but never reaches production.",
    features: [
      "AI trained and grounded on your company data",
      "Auto-draft reports, documents, and summaries",
      "Smart routing, classification, and decision support",
      "Retrieval-augmented generation (RAG) over your knowledge base",
      "AI features embedded inside your existing tools",
      "Human-in-the-loop controls and audit trails",
    ],
    deliverables: [
      "AI use-case assessment and feasibility roadmap",
      "Production AI feature integrated into your stack",
      "Evaluation harness and quality guardrails",
      "Cost and usage monitoring",
      "Documentation and team training",
    ],
    whoFor: [
      "Operations teams drowning in manual document work",
      "Businesses with knowledge locked in PDFs, chats, and spreadsheets",
      "Companies wanting AI inside their app, not a separate tool",
      "Founders who tried no-code AI and hit a wall",
    ],
    pricing: [
      { label: "AI Feature Add-on", intl: "$5,000–$9,000", php: "₱14,000–₱38,500", timeline: "2–4 weeks" },
      { label: "Custom AI Workflow", intl: "$9,000–$18,000", php: "₱38,500–₱112,000", timeline: "4–8 weeks" },
      { label: "AI-Powered Platform", intl: "$18,000–$45,000+", php: "₱112,000–₱315,000+", timeline: "8–14 weeks" },
    ],
    faqs: [
      {
        question: "How much does custom AI development cost in the Philippines?",
        answer:
          "A single AI feature add-on at Real Solutions PH starts at ₱14,000 (about $5,000). A custom AI workflow ranges from ₱38,500 to ₱112,000, and a full AI-powered platform starts at ₱112,000. Pricing depends on data complexity, integrations, and accuracy requirements.",
      },
      {
        question: "Do you build on OpenAI, Claude, or open-source models?",
        answer:
          "We are model-agnostic. We choose the right model — commercial (such as Claude or GPT) or open-source — based on your accuracy, privacy, latency, and cost requirements, and we design so you can switch later.",
      },
      {
        question: "Will the AI use my private business data safely?",
        answer:
          "Yes. We ground AI on your data using secure retrieval patterns, keep your data isolated, and add human-in-the-loop controls and audit trails so you stay in control of what the AI can see and do.",
      },
    ],
    relatedProjectIds: ["aura", "bath-and-bark", "food-costing-system"],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    h1: "Custom Software Development in the Philippines",
    metaTitle: "Custom Software Development Philippines | Built Around Your Workflow",
    metaDescription:
      "Custom software development for Philippine SMEs and international clients. Replace spreadsheets with production-grade software built around how your team already works.",
    keywords: [
      "custom software development Philippines",
      "software development company Philippines",
      "bespoke software Philippines",
      "business software development",
      "MVP development Philippines",
      "SaaS development Philippines",
    ],
    tagline:
      "Replace your spreadsheet workflows with real software — built around how your team already works, not the other way around.",
    intro: [
      "Off-the-shelf software forces your business to bend around someone else's assumptions. Spreadsheets do the opposite — they bend so far they break under growth. Custom software is the middle path: a system shaped around how your team actually operates.",
      "We build production-grade custom software with real engineering practices — proper architecture, automated testing, CI/CD, and cloud deployment — so what you launch is something you can scale, not a prototype that buckles at the first hundred users.",
      "And because you own the code and the data, you are never locked into us or a vendor. Our prototype-first process and AI-accelerated engineering keep the build lean, fast, and competitively priced.",
    ],
    problem:
      "Spreadsheet chaos, brittle no-code stacks, and rigid off-the-shelf tools that don't match how the business runs. Owners lose visibility, make errors, and can't scale.",
    features: [
      "Software that mirrors your actual workflow",
      "Role-based access and full audit trails",
      "Scales without re-architecting later",
      "You own the code and the data — no lock-in",
      "Cloud-deployed with CI/CD and automated testing",
      "Built on a fast prototype you approve before full build",
    ],
    deliverables: [
      "Interactive prototype before engineering begins",
      "Production-grade MVP with test coverage",
      "Cloud deployment and CI/CD pipeline",
      "Source code ownership and documentation",
      "Managed support and roadmap advisory",
    ],
    whoFor: [
      "SMEs running their core operation on spreadsheets",
      "Founders validating a software product or MVP",
      "Businesses that outgrew an off-the-shelf tool",
      "Teams needing role-based access and audit trails",
    ],
    pricing: [
      { label: "Simple Business Tool", intl: "$6,000–$13,000", php: "₱63,000–₱154,000", timeline: "3–5 weeks" },
      { label: "Custom Software MVP", intl: "$13,000–$36,000", php: "₱154,000–₱455,000", timeline: "6–10 weeks" },
      { label: "Advanced Business Platform", intl: "$36,000–$75,000+", php: "₱455,000–₱1,050,000+", timeline: "10–16 weeks" },
    ],
    faqs: [
      {
        question: "How much does custom software development cost in the Philippines?",
        answer:
          "At Real Solutions PH, a simple business tool starts at ₱63,000 (about $6,000). A custom software MVP ranges from ₱154,000 to ₱455,000, and an advanced business platform starts at ₱455,000. International rates run from $6,000 to $75,000+, depending on scope and complexity.",
      },
      {
        question: "Do I own the source code?",
        answer:
          "Yes. With every custom software project you own the code and the data outright. There is no vendor lock-in — you can host it, extend it, or hand it to another team at any time.",
      },
      {
        question: "What do you do before writing production code?",
        answer:
          "We run a paid Discovery Audit to map your workflow, then build a live interactive prototype you can use and react to before any core engineering begins. This removes misalignment early and keeps the build efficient.",
      },
    ],
    relatedProjectIds: ["stocksense", "osms", "food-costing-system"],
  },
  {
    slug: "web-mobile-apps",
    name: "Web & Mobile Apps",
    h1: "Web & Mobile App Development in the Philippines",
    metaTitle: "Web & Mobile App Development Philippines | Web Apps & iOS/Android",
    metaDescription:
      "Web and mobile app development for Philippine SMEs and global clients. Conversion-focused websites, web apps, and cross-platform iOS & Android apps wired into your systems.",
    keywords: [
      "web development Philippines",
      "mobile app development Philippines",
      "web application development",
      "iOS Android app development Philippines",
      "React Native developer Philippines",
      "Next.js development Philippines",
    ],
    tagline:
      "Websites and apps that generate leads while you sleep — fast, conversion-optimized, and wired into your CRM and backend from day one.",
    intro: [
      "A website or app is not a brochure — it is a working part of your operation. We build web and mobile products that capture leads, sync to your CRM, and feed your backend in real time, so what a customer does on screen actually moves your business.",
      "On the web, that means conversion-optimized sites and web apps with sub-second load times, built-in analytics, and self-serve content editing. On mobile, it means one codebase for iOS and Android, offline support, and real-time sync so field teams stay productive anywhere.",
      "Everything ships on the same prototype-first, AI-accelerated process we use across the company — so you see and approve a live version before full engineering, and you get a fast, cost-efficient delivery without cutting corners on quality.",
    ],
    problem:
      "Slow, generic websites that don't convert, and mobile apps that cost a fortune because they're built twice — once for iOS, once for Android — and still don't connect to the business's data.",
    features: [
      "Leads flow straight into your CRM",
      "Sub-second load times and strong Core Web Vitals",
      "Built-in analytics and A/B testing",
      "Self-serve content editing for your team",
      "One codebase for iOS and Android",
      "Offline support with real-time backend sync, push & deep links",
    ],
    deliverables: [
      "Conversion-focused website or web app",
      "Cross-platform mobile app (iOS + Android)",
      "Analytics, SEO, and performance setup",
      "CRM and backend integrations",
      "App store submission support and documentation",
    ],
    whoFor: [
      "Businesses whose website generates no leads",
      "Companies needing a customer-facing web portal or SaaS frontend",
      "Field-service teams needing a mobile app with offline mode",
      "Brands launching an iOS and Android product on one budget",
    ],
    pricing: [
      { label: "Business Website", intl: "$3,000–$5,500", php: "₱17,500–₱45,500", timeline: "1–3 weeks" },
      { label: "Web Portal / SaaS Frontend", intl: "$12,000–$28,000", php: "₱112,000–₱294,000", timeline: "6–10 weeks" },
      { label: "Cross-Platform Mobile App", intl: "$13,000–$52,000", php: "₱84,000–₱490,000", timeline: "6–14 weeks" },
    ],
    faqs: [
      {
        question: "How much does a website or mobile app cost in the Philippines?",
        answer:
          "At Real Solutions PH, a business website starts at ₱17,500 (about $3,000). A web portal or SaaS frontend ranges from ₱112,000 to ₱294,000, and a cross-platform mobile app starts at ₱84,000 up to ₱490,000 for an advanced build. Pricing depends on features, integrations, and design complexity.",
      },
      {
        question: "Do you build separate apps for iOS and Android?",
        answer:
          "No — we build cross-platform apps from a single codebase that runs on both iOS and Android. This cuts cost and timeline significantly while still supporting offline mode, push notifications, and real-time sync.",
      },
      {
        question: "Will my website actually rank on Google?",
        answer:
          "We build for performance and SEO from the start: fast load times, clean semantic markup, structured data, and analytics. This site itself is built the same way. SEO results also depend on content and authority, which we can advise on.",
      },
    ],
    relatedProjectIds: ["evolve-talents", "hydroguide", "aura"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
