"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type PricingTier = {
  name: string;
  from: string;
  timeline: string;
  description: string;
};

// USD "from" anchors only — no upper bound, no PHP, no discount framing (spec C8/C11).
const PRICING_TIERS: PricingTier[] = [
  {
    name: "Web / Portal",
    from: "$3,000",
    timeline: "1–3 weeks",
    description:
      "Marketing sites, client portals, and SaaS front-ends — sub-second loads and clean semantic markup, built to sit over what's running behind them.",
  },
  {
    name: "Integration",
    from: "$3,500",
    timeline: "2–4 weeks",
    description:
      "Wire AI agents and RAG pipelines into your CRM, ticketing, ERP, or internal APIs — read/write, not a bolt-on chatbot.",
  },
  {
    name: "AI Feature Add-on",
    from: "$5,000",
    timeline: "2–4 weeks",
    description:
      "One AI capability — RAG search, an agent, a grounded assistant — scoped and shipped completely, embedded in what you already run.",
  },
  {
    name: "AI MVP Build",
    from: "$5,000",
    timeline: "4 weeks",
    description:
      "A working AI system in front of real users in four weeks: three build weeks, one UAT week, hypercare and a 30-day warranty included.",
  },
  {
    name: "Custom Platform",
    from: "$13,000",
    timeline: "6–10 weeks",
    description:
      "Multi-tenant platforms engineered so one customer's data structurally cannot reach another's — not a permissions check away from a breach.",
  },
];

const PricingCard = ({
  item,
  delayIndex = 0,
}: {
  item: PricingTier;
  delayIndex?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.5,
      delay: delayIndex * 0.1,
      type: "spring",
      stiffness: 100,
    }}
    className="flex flex-col p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-sm hover:border-primary/30 transition-all hover:-translate-y-1"
  >
    <div className="flex justify-between items-start mb-3 gap-4">
      <h3 className="text-md font-bold leading-tight text-foreground">
        {item.name}
      </h3>
      <Badge
        variant="secondary"
        className="font-normal text-[10px] whitespace-nowrap bg-muted/50 text-muted-foreground border-transparent"
      >
        {item.timeline}
      </Badge>
    </div>

    <p className="text-sm text-muted-foreground mb-6 flex-1">
      {item.description}
    </p>

    <div className="flex flex-col pt-4 border-t border-border mt-auto">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
        Starting at
      </span>
      <span className="text-lg font-bold text-foreground leading-none tracking-tight">
        From {item.from}
      </span>
    </div>
  </motion.div>
);

export function PricingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              Pricing
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Engineering investment, from
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Indicative &quot;from&quot; pricing so you can plan. Final scope
              and quote come out of a Discovery Audit.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {PRICING_TIERS.map((item, i) => (
            <PricingCard key={item.name} item={item} delayIndex={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
