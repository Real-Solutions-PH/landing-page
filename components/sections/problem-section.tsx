"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PAIN_POINTS = [
  "Your POS doesn't sync with your inventory system",
  "Your online shop orders don't automatically update stock",
  "Your employee shifts aren't connected to payroll",
  "You copy-paste data between systems daily",
  "You tried DIY automation with Zapier, but it broke at scale",
  "You're paying for 8 different SaaS subscriptions to run one business",
];

export function ProblemSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm">
              The Problem
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Does this sound familiar?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Your business runs on 6+ tools — and none of them talk to each other.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid w-full max-w-4xl gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 rounded-[32px] border border-red-500/10 bg-red-50/50 p-8 text-left shadow-[0_20px_40px_rgba(220,38,38,0.03)] dark:bg-red-950/10"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 text-red-700 dark:text-red-400">
                <XCircle className="h-5 w-5" /> The False Solutions
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>DIY with Zapier/Make (works for simple things, breaks at scale)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>Vibe-coded tools with Cursor or Replit (technical debt, insecure)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>Tried an all-in-one ERP (doesn&apos;t support half the niche tools you use)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>Nothing — still doing it manually</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-6 rounded-[32px] border border-primary/10 bg-primary/5 p-8 text-left shadow-[0_20px_40px_rgba(25,59,118,0.03)]"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5" /> The Reality You Face
              </h3>
              <ul className="flex flex-col gap-4">
                {PAIN_POINTS.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
