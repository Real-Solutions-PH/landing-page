"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Check, Cpu, Compass } from "lucide-react";

const AI_WORK = [
  "Implementation drafted across the stack, not typed line by line",
  "Every change swept against the codebase for regressions and dead paths",
  "Test scaffolding, fixtures, and migration drafts generated up front",
  "Research and first-pass documentation running in parallel, not after",
];

const HUMAN_WORK = [
  "Architecture and system design",
  "Cost design — and the tradeoffs behind every call",
  "Security boundaries, tenant isolation, and the review before handover",
  "Every deviation from spec recorded as a numbered ADR",
];

const NEUTRAL_CARD =
  "border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card/50";

export function OperatingModelSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      {/* Atmosphere — subtle, on-brand tints */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#F59E0B]/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <Badge
            variant="outline"
            className="mb-6 border-border bg-background uppercase tracking-widest text-[10px] text-muted-foreground shadow-sm"
          >
            The Operating Model
          </Badge>
          <h2 className="mb-6 max-w-4xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Three to four weeks isn&apos;t a shortcut.
            <br className="hidden sm:block" /> It&apos;s an{" "}
            <span className="relative inline-block rounded-sm bg-[#F59E0B] px-2 pb-1 pt-1 text-[#102A52] lg:px-3">
              operating model.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            AI runs at every step of how we work. Every output it produces is
            verified by a lead architect before it moves to the next step —
            which is why the timeline holds without trading away quality, cost,
            or security to get there.
          </p>
        </motion.div>

        {/* Two columns of labor + verification gate */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          {/* AI column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col rounded-[24px] p-8 ${NEUTRAL_CARD}`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400">
                <Cpu className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                AI handles the volume
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {AI_WORK.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Human column — the emphasized one */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col rounded-[24px] border border-[#F59E0B]/40 bg-[#F59E0B]/[0.06] p-8 shadow-[0_20px_50px_rgba(245,158,11,0.10)]"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B]/15 text-amber-600 dark:text-[#F59E0B]">
                <Compass className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                A lead architect owns the judgment
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {HUMAN_WORK.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-medium leading-relaxed text-foreground"
                >
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/20 text-amber-600 dark:text-[#F59E0B]">
                    <Check className="h-2.5 w-2.5 stroke-[4]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* The gate */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 flex max-w-5xl flex-col items-center"
        >
          <ArrowDown className="mb-4 h-5 w-5 text-muted-foreground/40" />
          <p className={`rounded-full px-5 py-2.5 text-center text-sm font-semibold text-foreground ${NEUTRAL_CARD}`}>
            Nothing an AI produces reaches your codebase unverified.
          </p>
        </motion.div>

        {/* Why the judgment work stays human */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-3xl border-l-2 border-[#F59E0B]/60 pl-6 sm:pl-8"
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            This is the part the tooling still doesn&apos;t do. AI writes
            plausible code all day.{" "}
            <span className="font-semibold text-foreground">
              It doesn&apos;t weigh what a design costs to run at month twelve,
              decide where a tenant boundary has to sit, or know which tradeoff
              you&apos;ll regret later
            </span>{" "}
            — those calls come from engineers who have had to live with them.
            That is the work we kept for ourselves.
          </p>
        </motion.div>

        {/* Track record */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`mx-auto mt-16 max-w-4xl rounded-[24px] p-8 text-center sm:p-10 ${NEUTRAL_CARD}`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Why we&apos;re qualified to run it
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            We didn&apos;t bolt AI onto how we work last year. We have built AI
            systems in production for three years — from back when shipping AI
            was still an argument rather than a roadmap item — and engineered
            our own delivery around it so its output holds up instead of being
            taken on faith. That span includes AI systems built to survive
            binding regulatory review, the EU AI Act among them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
