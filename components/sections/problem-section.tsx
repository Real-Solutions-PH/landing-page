"use client";

import { motion } from "framer-motion";
import { Layers, Target, Briefcase, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PAINS = [
  {
    title: "Operational Overhead",
    description:
      "Disconnected systems (POS, inventory, HR, CRM, accounting) causing duplicated work, bad reporting, and slow decisions.",
    quote:
      "Your POS doesn’t talk to your inventory. Your CRM has no idea what accounting knows. Every gap is costing you time, money, and clarity.",
    icon: Layers,
  },
  {
    title: "Build Complexity",
    description:
      "SMEs cannot spec, architect, or QA scalable production-grade software on their own; freelancers and cheap vendors fail at scale.",
    quote:
      "Building custom software is hard. Most freelancers and cheap vendors produce things that work once and break at scale.",
    icon: Target,
  },
  {
    title: "Management Burden",
    description:
      "After launch, software needs maintenance, monitoring, and evolution; most vendors disappear after delivery.",
    quote:
      "Retainers keep your software alive, improving, and accountable to the same team that built it.",
    icon: Briefcase,
  },
  {
    title: "Decision Blindness",
    description:
      "Without integrated data infrastructure, business owners run on gut, miss early warning signs, and fail without knowing why.",
    quote:
      "Most businesses that close didn’t know they were in trouble. They had no data. No dashboards. No early warning. Just instinct — until it was too late.",
    icon: Activity,
  },
];

export function ProblemSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-10 sm:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-4 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              The Problem
            </Badge>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Why most SME software fails
            </h2>
          </motion.div>

          <div className="mx-auto mt-10 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PAINS.map((pain, index) => {
              const Icon = pain.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex h-full flex-col text-left group relative overflow-hidden rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-card/50"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive group-hover:text-destructive-foreground dark:bg-destructive/20 dark:text-red-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {pain.title}
                    </h3>
                  </div>

                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>

                  <div className="mt-auto relative">
                    <div className="absolute -left-1 -top-4 text-4xl text-muted-foreground/10 font-serif leading-none transition-colors group-hover:text-primary/10">
                      &quot;
                    </div>
                    <div className="relative z-10 rounded-xl bg-slate-50 p-4 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-colors group-hover:border-primary/20 dark:group-hover:border-primary/20">
                      <p className="text-sm italic text-foreground/80 font-medium leading-relaxed">
                        {pain.quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
