"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Search, Lock, HelpCircle, GitBranch } from "lucide-react";

const PILLARS = [
  {
    title: "Grounding guard",
    description:
      "A number that doesn't trace back to something the system actually computed never reaches the user — code writes the fallback sentence instead of the model.",
    icon: ShieldCheck,
  },
  {
    title: "Server-side citations",
    description:
      "Our retrieval step builds each citation, not the model's own prose. A poisoned document has no path into another tenant's answer.",
    icon: Search,
  },
  {
    title: "Provable tenant isolation",
    description:
      "Row-level security enforced in Postgres, with a bleed-guard at the data layer: a bug returns nothing, never someone else's row.",
    icon: Lock,
  },
  {
    title: "Honest uncertainty",
    description:
      "When the data doesn't support an answer, the system says so instead of estimating one. Nothing ships that outruns what it can back up.",
    icon: HelpCircle,
  },
  {
    title: "Recorded deviations",
    description:
      "Any departure from spec becomes a numbered decision record — which clause it breaks from, and who approved the exception.",
    icon: GitBranch,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function SolutionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground bg-white dark:bg-black shadow-sm"
            >
              The Solution
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Five guarantees, not a demo
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We don&apos;t ask you to trust that the AI works. We engineer
              five specific guarantees so you — or your compliance team — can
              check for yourselves.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex flex-col items-start gap-4 rounded-[32px] border border-black/5 bg-white p-8 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-card/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
