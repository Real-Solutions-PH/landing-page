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
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
