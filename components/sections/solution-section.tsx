"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Blocks, Code2, HeartHandshake, Zap } from "lucide-react";

const PILLARS = [
  {
    title: "One system. All your tools.",
    description:
      "We connect your POS, inventory, online shop, HR, payroll, and accounting into a single coherent flow.",
    icon: Blocks,
  },
  {
    title: "We build it. You use it.",
    description:
      "No DIY automation that breaks. No wasted AI credits. A team of engineers who deliver production-grade work.",
    icon: Code2,
  },
  {
    title: "Senior-level engineering. Philippine rates.",
    description:
      "60–70% less than hiring a Western agency — without compromising code quality, security, or delivery.",
    icon: Zap,
  },
  {
    title: "We keep it running.",
    description:
      "Monthly retainers for monitoring, maintenance, and continuous improvement. Integration isn't a one-time job.",
    icon: HeartHandshake,
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
      <div className="container mx-auto px-4 md:px-6">
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
              Why Real Solutions PH?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We don&apos;t just sell you a new software tool. We engineer a
              cohesive system out of the ones you already have.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
