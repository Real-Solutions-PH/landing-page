"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function WhyUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Badge variant="outline" className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm">
              The Real Solutions Difference
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Precision vs Basic
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We sit in the whitespace between fragile DIY tools and enterprise consultancies that are prohibitively expensive for SMEs.
            </p>
          </motion.div>

          {/* Comparison Table / Grid */}
          <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-zinc-50 shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:border-white/10 dark:bg-card/30"
            >
              <div className="border-b border-black/5 bg-black/5 px-8 py-6 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-bold opacity-60">Traditional Agencies & DIY</h3>
              </div>
              <ul className="flex flex-col px-8 py-6">
                {[
                  "Prohibitive enterprise costs",
                  "Zapier zaps that break on edge cases",
                  "Vibe-coded AI spaghetti code",
                  "Pass technical debt onto you",
                  "Project ends, you are on your own",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 py-4 text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col overflow-hidden rounded-[32px] border-2 border-primary bg-primary/5 shadow-[0_20px_40px_rgba(25,59,118,0.1)] dark:bg-primary/10"
            >
              <div className="border-b border-primary/20 bg-primary px-8 py-6 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  Real Solutions PH
                </h3>
              </div>
              <ul className="flex flex-col px-8 py-6">
                {[
                  "Philippine engineering rates (60% less)",
                  "Production-grade, secure architecture",
                  "AI-accelerated delivery by senior devs",
                  "Rigorous testing and pure code quality",
                  "Ongoing accountability and operations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 py-4 font-medium text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary dark:bg-primary/30">✓</span>
                    {item}
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
