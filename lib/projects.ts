export type Project = {
  id: string;
  title: string;
  clientType: string;
  description: string;
  outcome: string;
  tags: string[];
  service: string;
  featured: boolean;
  accentColor: string;
  letter: string;
  /** Public-relative path to a screenshot, e.g. /projects/pos-xero.png */
  image?: string;
  /** Multiple screenshots for the carousel */
  images?: string[];
  /** Live URL for the project */
  url?: string;
  /** Tailwind gradient classes used for the placeholder card cover */
  coverGradient: string;
  /** Tailoring image fit, especially useful for portrait screenshots */
  imageFit?: "cover" | "contain";
  /**
   * Engagement is under NDA. The card renders sector-level detail only: no client
   * name, no live link, and an abstract cover in place of product screenshots.
   */
  confidential?: boolean;
};

export const PROJECTS: Project[] = [
  // Public, shipped projects
  {
    id: "guardian-care",
    title: "Guardian Care — Solar Assessment & Monitoring",
    clientType: "CleanTech / Residential Solar",
    description:
      "Solar assessment and monitoring platform that transforms on-site solar visits into actionable findings. Features an offline-ready on-site assessment flow, a command centre for portfolio management, homeowner portal for energy insights, and a versioned rules engine for audit-trail transparency. Every finding is traced to the exact threshold that triggered it.",
    outcome:
      "From doorstep to dashboard — on-site assessments stay offline-ready, with every finding audited and traced to a rule",
    tags: ["Web App", "Dashboard", "Solar Tech", "Real-Time Monitoring"],
    service: "Custom Platforms",
    featured: true,
    accentColor: "green",
    letter: "G",
    coverGradient: "from-slate-800 via-green-600 to-emerald-400",
    image: "/projects/cover-guardian-care.png",
    images: [
      "/projects/cover-guardian-care.png",
      "/projects/guardian-care-dashboard.png",
      "/projects/guardian-care-portal.png",
    ],
    url: "https://guardian-care-web.vercel.app/",
  },
  {
    id: "polymath",
    title: "Polymath — Personal Knowledge & Recall System",
    clientType: "EdTech / Personal Learning",
    description:
      "A personal knowledge and spaced-repetition system spanning eight study fields (AI hardware, software, biohacking, neuroscience, biochemistry, electrical engineering, business/sales, and research methodology). Captures material from multiple sources, enables retrieval via voice and text with citations back to the exact passage, and uses layered questioning (recall → explain → apply) with automatic weak-area detection. Integrates research literature feeds to resurface forgotten concepts and material from underperforming topics.",
    outcome:
      "Daily capture → ask → recall loop running end-to-end with weak-area detection and research-literature tracking across eight fields",
    tags: ["Web App", "AI Agents", "Voice AI", "Spaced Repetition", "Knowledge Management"],
    service: "AI MVP Development",
    featured: true,
    accentColor: "purple",
    letter: "P",
    coverGradient: "from-purple-700 via-violet-600 to-indigo-400",
    image: "/projects/polymath-cover.svg",
    confidential: true,
  },
  // ---------------------------------------------------------------------------
  // Client engagements under NDA. Ordered next, and featured on the home page.
  //
  // Everything below is deliberately sector-level: no client or product name, no
  // live URL, no commercial terms, no dates, and none of the client-owned design
  // (schemas, thresholds, pricing models, vendor choices) that makes each build
  // worth paying for. Covers are abstract artwork standing in for the market, not
  // product screenshots. Anything more specific needs written client sign-off
  // before it goes on a public page.
  // ---------------------------------------------------------------------------
  {
    id: "risk-monitoring-platform",
    title: "AI-Assisted Risk Monitoring Platform",
    clientType: "FinTech / Risk Management",
    // Lead sentence is the counterparty-cleared line from CONTEXT.md §9 — verbatim,
    // unembellished. Everything after it describes how we work, not the client's system.
    description:
      "We develop AI-assisted fintech monitoring and real-time risk-management systems. This engagement is under a publication bar, so the line above is the whole of what can be said about it. The build ran the way every engagement here does: architecture decisions written down as ADRs, and a lead architect reviewing each step before it moved on.",
    outcome: "Delivered under a publication bar — the detail stays with the client",
    tags: ["AI Agents", "Data Pipelines", "Real-Time Monitoring", "Backend"],
    service: "Custom Platforms",
    featured: true,
    accentColor: "sky",
    letter: "R",
    coverGradient: "from-sky-700 via-blue-600 to-cyan-400",
    image: "/projects/cover-risk-monitoring.png",
    confidential: true,
  },
  {
    id: "prime-property-intelligence",
    title: "Prime Property Market Intelligence",
    clientType: "PropTech / Market Intelligence",
    description:
      "Confidential engagement in high-end residential real estate. An automated valuation engine paired with per-property intelligence pages: comparable-sales analysis that recomputes as new transactions land, vision-assisted adjustment from listing imagery, and generated valuation memos an analyst can stand behind in front of a client.",
    outcome:
      "Valuations an analyst can defend, recomputed as new comparable sales land",
    tags: ["AI Agents", "RAG", "Data Pipelines", "Web App"],
    service: "AI Agents & RAG",
    featured: true,
    accentColor: "amber",
    letter: "P",
    coverGradient: "from-zinc-900 via-slate-800 to-amber-500",
    image: "/projects/cover-prime-property.png",
    confidential: true,
  },
  {
    id: "voice-knowledge-assistant",
    title: "Voice-Enabled Knowledge Assistant",
    clientType: "Voice AI / Retrieval",
    // Lead sentence is the counterparty-cleared line from CONTEXT.md §9 — verbatim,
    // unembellished. Everything after it describes how we work, not the client's system.
    description:
      "We build AI-assisted, voice-enabled knowledge assistants and retrieval systems. This engagement is under a publication bar, so the line above is the whole of what can be said about it. The build ran the way every engagement here does: architecture decisions written down as ADRs, and a lead architect reviewing each step before it moved on.",
    outcome: "Delivered under a publication bar — the detail stays with the client",
    tags: ["Voice AI", "RAG", "AI Agents"],
    service: "Voice AI",
    featured: true,
    accentColor: "purple",
    letter: "V",
    coverGradient: "from-violet-700 via-purple-600 to-fuchsia-400",
    image: "/projects/cover-voice-assistant.png",
    confidential: true,
  },
  {
    id: "data-sovereign-chat-platform",
    title: "Data-Sovereign AI Chat Platform",
    clientType: "B2B SaaS / Regulated Markets",
    description:
      "Confidential engagement where data residency is the product, not a footnote. A multi-tenant AI chat platform with isolation enforced in the database rather than in application code, a provider-abstraction layer so each tenant's model runs in a region its buyer will accept, per-tenant usage and cost tracking from day one, and erasure that reaches the embeddings and not just the rows.",
    outcome:
      "Tenant isolation enforced in the database, with each tenant's model pinned to an approved region",
    tags: ["RAG", "Compliance", "Web App", "Backend"],
    service: "AI Agents & RAG",
    featured: true,
    accentColor: "blue",
    letter: "D",
    coverGradient: "from-blue-800 via-blue-600 to-teal-400",
    image: "/projects/cover-sovereign-chat.png",
    confidential: true,
  },
  {
    id: "family-activity-marketplace",
    title: "Family Activity Marketplace",
    clientType: "Marketplace / Consumer",
    description:
      "Confidential engagement taking a consumer marketplace for children's holiday programmes off a prototyping tool and onto infrastructure the founders own. Discovery and side-by-side comparison, planning across several children, cart and checkout against providers' own registration systems, waitlists and released-spot handoffs — with the handling of family data treated as foundational rather than a later hardening pass.",
    outcome:
      "Checkout runs against providers' own registration systems instead of linking families out",
    tags: ["Marketplace", "Web App", "Backend", "Data Pipelines"],
    service: "Custom Platforms",
    featured: true,
    accentColor: "green",
    letter: "F",
    coverGradient: "from-green-800 via-emerald-600 to-lime-400",
    image: "/projects/cover-family-marketplace.png",
    confidential: true,
  },
  {
    id: "artemis",
    title: "Artemis — Smart Waste Management Platform",
    clientType: "Waste Management / IoT",
    description:
      "Smart waste management platform combining software, mobile access, and IoT-enabled trash bins. Helps organizations monitor waste in real time, automate reporting, and improve collection efficiency. Built the fullstack from the ground up: frontend, mobile, backend, and IoT integration.",
    outcome: "From manual rounds to real-time monitoring across the fleet",
    tags: ["IoT", "Real-Time Monitoring", "Mobile", "System Integration"],
    service: "System Integration",
    featured: false,
    accentColor: "emerald",
    letter: "A",
    coverGradient: "from-emerald-600 via-teal-500 to-cyan-400",
    image: "/projects/artemis-1 copy.png",
    images: [
      "/projects/artemis-1 copy.png",
      "/projects/artemis-2.png",
      "/projects/artemis-3.png",
      "/projects/artemis-4.png",
      "/projects/artemis-5.png",
      "/projects/artemis-6.png",
      "/projects/artemis-7.png",
    ],
    url: "https://artemis-b18ae.web.app/",
  },
  {
    id: "evolve-talents",
    title: "Evolve Talents — Recruitment & VA Platform",
    clientType: "HR / Recruitment",
    description:
      "Premium recruitment and virtual assistant service that helps businesses scale by matching them with vetted remote professionals. Built the company website and handled SEO, positioning Evolve Talents as an end-to-end hiring partner covering recruiting, vetting, payroll, onboarding, and ongoing support.",
    outcome:
      "SEO-first launch — clean site architecture and on-page optimization built in from day one",
    tags: ["Website", "SEO", "Marketing"],
    service: "Web & Mobile",
    featured: false,
    accentColor: "blue",
    letter: "E",
    coverGradient: "from-blue-600 via-blue-500 to-sky-400",
    image: "/projects/evolve-talents-1.png",
    images: [
      "/projects/evolve-talents-1.png",
      "/projects/evolve-talents-2.png",
      "/projects/evolve-talents-3.png",
      "/projects/evolve-talents-4.png",
    ],
    url: "https://evolve-talents-sample.netlify.app/",
  },
  {
    id: "aura",
    title: "Aura — AI-Powered Dating App",
    clientType: "Consumer Tech / Dating App",
    description:
      "A cross-platform mobile dating application designed and built using React Native and Expo. Aura integrates Google GenAI, ElevenLabs, and AssemblyAI to power personalized matchmaking and an interactive voice-enabled AI assistant, alongside a glassmorphic UI, multi-language support, and OTP-based authentication.",
    outcome:
      "Real-time voice AI and matchmaking running natively on iOS and Android from one codebase",
    tags: ["Mobile", "React Native", "Voice AI", "AI Matchmaking"],
    service: "Voice AI",
    featured: true,
    accentColor: "purple",
    letter: "A",
    coverGradient: "from-purple-600 via-fuchsia-500 to-pink-400",
    image: "/projects/aura-1.png",
    images: [
      "/projects/aura-1.png",
      "/projects/aura-2.png",
      "/projects/aura-3.png",
      "/projects/aura-4.png",
    ],
    imageFit: "contain",
  },
  {
    id: "bath-and-bark",
    title: "Bath & Bark — Pet Care Platform",
    clientType: "Retail / Pet Care",
    description:
      "Premium pet care business offering grooming, wellness, and health support for dogs and other pets. Built the website, admin and members system, backend, and integrated an AI chatbot to handle customer inquiries and bookings.",
    outcome:
      "AI chatbot answers customer inquiries and manages bookings without a human in the loop",
    tags: ["Website", "Admin System", "Backend", "AI Integration"],
    service: "AI MVP Development",
    featured: true,
    accentColor: "orange",
    letter: "B",
    coverGradient: "from-orange-500 via-amber-500 to-yellow-400",
    image: "/projects/bath-and-bark-1.png",
    images: [
      "/projects/bath-and-bark-1.png",
      "/projects/bath-and-bark-2.png",
      "/projects/bath-and-bark-3.png",
    ],
    url: "https://bathandbark.realsolutionsph.com/",
  },
  {
    id: "food-costing-system",
    title: "Food Costing System",
    clientType: "Food & Beverage / Operations",
    description:
      "A food costing and recipe management system built for restaurants and food businesses. Tracks ingredient costs, recipe costing, and menu profitability so operators can make data-driven pricing decisions and control food costs.",
    outcome:
      "Real-time food cost visibility across every menu item, replacing manual spreadsheet costing",
    tags: ["Web App", "Backend", "Dashboard", "Operations"],
    service: "Custom Platforms",
    featured: false,
    accentColor: "amber",
    letter: "F",
    coverGradient: "from-amber-500 via-orange-400 to-yellow-300",
    image: "/projects/food-costing-system-1.png",
    images: [
      "/projects/food-costing-system-1.png",
      "/projects/food-costing-system-2.png",
      "/projects/food-costing-system-3.png",
      "/projects/food-costing-system-4.png",
    ],
  },
  {
    id: "osms",
    title: "Orders & Subscription Management System",
    clientType: "E-Commerce / SaaS",
    description:
      "A full-featured orders and subscription management platform that handles the complete lifecycle of customer orders and recurring subscriptions. Includes order tracking, subscription billing, customer management, and reporting dashboards to streamline operations for subscription-based businesses.",
    outcome:
      "Fully automated subscription lifecycle management from sign-up to renewal",
    tags: ["Web App", "Backend", "Subscriptions", "E-Commerce"],
    service: "Custom Platforms",
    featured: false,
    accentColor: "sky",
    letter: "O",
    coverGradient: "from-sky-600 via-cyan-500 to-teal-400",
    image: "/projects/osms-1.png",
    images: [
      "/projects/osms-1.png",
      "/projects/osms-2.png",
      "/projects/osms-3.png",
      "/projects/osms-4.png",
      "/projects/osms-5.png",
    ],
  },
  {
    id: "hydroguide",
    title: "HydroGuide — Hydroponics Farm Management App",
    clientType: "AgriTech / Mobile",
    description:
      "A mobile app for iOS and Android built to help hydroponics growers manage crop guides, planting cycles, daily farm tasks, and inventory — all in one place. Designed for hobbyist to small commercial growers using DFT, NFT, Dutch bucket, and similar setups. Features setup management, plant batch tracking, a crop guide library, a setup-aware daily checklist engine, inventory with low-stock alerts, and a reporting dashboard.",
    outcome:
      "One app replaces spreadsheets and guesswork — growers always know what to do today",
    tags: ["Mobile", "Flutter", "Backend", "AgriTech", "IoT-Ready"],
    service: "Web & Mobile",
    featured: true,
    accentColor: "green",
    letter: "H",
    coverGradient: "from-green-600 via-lime-500 to-emerald-400",
    imageFit: "contain",
    image: "/projects/hydroguide-1.png",
    images: [
      "/projects/hydroguide-1.png",
      "/projects/hydroguide-2.png",
      "/projects/hydroguide-3.png",
      "/projects/hydroguide-4.png",
      "/projects/hydroguide-5.png",
      "/projects/hydroguide-6.png",
      "/projects/hydroguide-7.png",
      "/projects/hydroguide-8.png",
      "/projects/hydroguide-9.png",
    ],
  },
  {
    id: "stocksense",
    title: "StockSense — Inventory Management System",
    clientType: "Retail / Inventory Management",
    description:
      "An inventory management system designed to give businesses real-time stock visibility and control. Features include stock level tracking, low-inventory alerts, purchase order management, and analytics to minimize waste and prevent stockouts.",
    outcome:
      "Real-time stock visibility with low-inventory alerts and purchase-order tracking, built to catch stockouts before they happen",
    tags: ["Web App", "Backend", "Dashboard", "Inventory"],
    service: "Custom Platforms",
    featured: false,
    accentColor: "emerald",
    letter: "S",
    coverGradient: "from-emerald-500 via-green-400 to-teal-300",
    image: "/projects/stocksense-1.png",
    images: [
      "/projects/stocksense-1.png",
      "/projects/stocksense-2.png",
      "/projects/stocksense-3.png",
    ],
  },

];

export const ACCENT_CLASSES: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/50",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-400",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/50",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/50",
    text: "text-purple-600 dark:text-purple-400",
    dot: "bg-purple-400",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/50",
    text: "text-orange-600 dark:text-orange-400",
    dot: "bg-orange-400",
  },
  sky: {
    bg: "bg-sky-100 dark:bg-sky-900/50",
    text: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/50",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/50",
    text: "text-green-600 dark:text-green-400",
    dot: "bg-green-400",
  },
};
