// Questions mirror the anchors on this page's visible pricing cards (see
// components/sections/pricing-section.tsx) — USD "from" pricing only, no upper
// bound, no PHP (spec C8/C11). Below-anchor tiers (Discovery Audit, retainers)
// were removed from the site, not repriced, so their Q&A is not restated here.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build an AI MVP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI MVP build starts from $5,000 and runs four weeks: three weeks of build, one week of user acceptance testing against real users, followed by hypercare and a 30-day warranty. Final cost depends on the scope of the AI capability and how much of the surrounding product needs to be built alongside it.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to add an AI feature to a product we already run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI feature add-on — one capability such as RAG search or a grounded assistant, embedded into an existing product — starts from $5,000 and runs 2–4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to integrate AI into our existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wiring an AI agent or retrieval pipeline into a CRM, ticketing queue, ERP, or internal API starts from $3,500 and runs 2–4 weeks, with full read/write access rather than a read-only chat window bolted to the side.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a custom multi-tenant platform cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom platform with tenant isolation enforced at the database layer starts from $13,000 and runs 6–10 weeks. You own the code and schema outright, with no vendor lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website, client portal, or web app cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marketing site, client portal, or SaaS front-end starts from $3,000 and runs 1–3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Is pricing fixed, or does it change once you scope the project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The figures above are 'from' pricing anchors, not final quotes — they're floors, not averages. We confirm a fixed scope and a fixed price in USD after a scoping call, and the number moves up from the anchor depending on complexity, never down.",
      },
    },
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
