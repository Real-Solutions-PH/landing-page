import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, phase-based pricing for Philippine SMEs and international clients. Custom software, system integrations, AI development, mobile apps — know exactly what you're paying before you commit.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Software Development Pricing — Philippines & International | Real Solutions PH",
    description:
      "Transparent pricing for custom software, system integration, AI development, and managed retainers. Serving Philippine SMEs and international clients.",
    url: "https://www.realsolutionsph.com/pricing",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Real Solutions PH Pricing — Software Development Philippines" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does custom software development cost in the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Real Solutions PH, custom software development starts from ₱63,000 for a simple business tool up to ₱1,050,000+ for an advanced business platform. International rates range from $6,000 to $75,000+. Pricing depends on scope, number of modules, and complexity.",
      },
    },
    {
      "@type": "Question",
      name: "How much does system integration cost in the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "System integration projects at Real Solutions PH start from ₱42,000 for a 1–2 system integration (e.g., POS + accounting) up to ₱455,000+ for an advanced suite connecting 6+ systems. International rates range from $3,500 to $32,000+.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an MVP in the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MVP builds at Real Solutions PH typically take 3–16 weeks depending on the type of software. Integration MVPs take 2–12 weeks, custom software MVPs take 3–16 weeks, and mobile apps take 6–20 weeks. We always start with a Discovery Audit and Prototype Sprint before full engineering begins.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Discovery Audit and how much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Discovery Audit is a paid engagement where we map your current tools, workflows, integration gaps, and software opportunities. We deliver a workflow audit, solution roadmap, and project estimate. It costs ₱10,000–₱22,000 for Philippine clients and $700–$1,200 for international clients. The fee can be credited toward your MVP build.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing software maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Real Solutions PH offers managed retainer plans after launch. The Care Plan covers bug fixes, monitoring, and security patches starting from ₱3,500/month (PH) or $600/month (International). The Growth Plan adds monthly feature development starting from ₱9,800/month (PH) or $1,600/month (International).",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheaper to outsource software development to the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hiring a senior engineering team in the Philippines is significantly more cost-effective than equivalent talent in the US, UK, or Australia — often at 30–60% of the cost — without sacrificing quality. Real Solutions PH founders are former lead engineers and heads of engineering at an AI startup, bringing senior-level expertise at Philippine rates.",
      },
    },
  ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
