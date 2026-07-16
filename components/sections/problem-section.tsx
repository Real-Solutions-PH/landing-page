"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Ban, ShieldAlert, FileQuestion, AlertTriangle } from "lucide-react";

/* ── DATA ── */

const PAIN_POINTS = [
  {
    icon: AlertTriangle,
    title: "The demo that can't survive an audit",
    body: "It answers every question in the pitch. The first time a reviewer asks how it decided something, there's no answer — because nobody built one.",
  },
  {
    icon: Ban,
    title: "No way to prove it didn't invent a figure",
    body: "A number shows up in the output. Nothing traces it back to a system that actually produced it.",
  },
  {
    icon: ShieldAlert,
    title: "No way to prove tenant separation",
    body: "Two customers share the same database, and isolation is an application-level check someone could forget — not a guarantee.",
  },
  {
    icon: FileQuestion,
    title: "No record of why it was built this way",
    body: "The person who made the call is gone six months later, and so is the reasoning behind it.",
  },
];

const PAIN_STORIES = [
  {
    quote:
      "The chatbot demoed perfectly. Then a real user asked it something specific, and it answered with a number that didn't exist anywhere in our data.",
    emphasis:
      "We had no way to prove where that number came from — because it didn't come from anywhere real.",
    source: "Founder, pre-seed AI startup",
  },
  {
    quote:
      "Compliance asked how the model decided to flag that case. The honest answer was: the LLM said so.",
    emphasis:
      "A system that can't explain itself doesn't survive a regulated review.",
    source: "Engineering lead, fintech AI pilot",
  },
  {
    quote:
      "Two customers were sharing infrastructure, and isolation was a WHERE clause somebody could forget to add.",
    emphasis:
      "One missed filter away from one tenant reading another's data — and no test that would have caught it.",
    source: "CTO, multi-tenant SaaS team",
  },
  {
    quote:
      "We subcontracted the AI build our agency had already sold. Nobody could tell us why half the architecture decisions were made.",
    emphasis: "No ADRs, no record — just a codebase and a deadline.",
    source: "Delivery lead, agency partner",
  },
];

/* ── AUTO-ROTATING QUOTE WITH STAGED REVEAL ── */

const QUOTE_DURATION = 6000; // ms per quote

function RotatingQuotes() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % PAIN_STORIES.length);
    setProgress(0);
  }, []);

  // Progress bar tick
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 100 / (QUOTE_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [next, active]);

  const story = PAIN_STORIES[active];

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="relative w-full max-w-md min-h-[380px] sm:min-h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-10"
          >
            {/* Large decorative quote mark */}
            <div className="mb-1 select-none font-serif text-6xl leading-none text-foreground/10">
              &ldquo;
            </div>

            {/* Quote — first part fades in, emphasis slides up with highlight */}
            <div className="-mt-4 mb-6 min-h-[100px]">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg font-medium leading-relaxed text-foreground sm:text-xl"
              >
                {story.quote}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-2 text-lg font-bold leading-relaxed text-foreground sm:text-xl"
              >
                <span className="relative">
                  <span className="relative z-10">{story.emphasis}</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                    className="absolute inset-x-0 bottom-0 z-0 h-[40%] origin-left rounded-sm bg-[#193B76]/15 dark:bg-[#2A5CAA]/25"
                  />
                </span>
              </motion.p>
            </div>

            {/* Source — fades in last with a dash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-6 bg-muted-foreground/30" />
              <p className="text-xs font-medium tracking-wide text-muted-foreground">
                {story.source}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar + dot navigation */}
      <div className="mt-6 flex w-full max-w-md items-center gap-3">
        {PAIN_STORIES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              setProgress(0);
            }}
            className="relative h-1 flex-1 overflow-hidden rounded-full bg-muted-foreground/10"
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-foreground/60"
              initial={false}
              animate={{
                width:
                  i < active
                    ? "100%"
                    : i === active
                      ? `${progress}%`
                      : "0%",
              }}
              transition={
                i === active
                  ? { duration: 0.05, ease: "linear" }
                  : { duration: 0.3 }
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── MAIN SECTION ── */

export function ProblemSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-zinc-50 dark:bg-zinc-950 py-24 lg:py-0">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT COLUMN: Header + Pain Points ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-border bg-background uppercase tracking-widest text-[10px] text-muted-foreground shadow-sm"
              >
                The Problem
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              It works in the demo.
              <br />
              Production asks{" "}
              <span className="relative inline-block px-2 lg:px-4 pb-1 pt-1 text-[#F7FAFC] bg-[#193B76] dark:bg-[#2A5CAA] rounded-sm">
                harder questions.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 max-w-lg text-base text-muted-foreground sm:text-lg"
            >
              Every AI vendor can ship something that works in a meeting. The
              teams we talk to have already shipped a version that impressed
              everyone right up until a real user, a compliance reviewer, or a
              security audit asked it a question the demo never had to
              answer.
            </motion.p>

            {/* Pain point grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {PAIN_POINTS.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <point.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-foreground">
                      {point.title}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 text-sm font-medium text-muted-foreground sm:text-base"
            >
              The question was never whether AI can do the work.{" "}
              <span className="font-semibold text-foreground">
                It&apos;s whether anyone can prove it did the work safely —
                and that&apos;s the part most builds skip.
              </span>
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN: Rotating Pain Vignettes ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex w-full flex-col items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            >
              What we hear before teams call us
            </motion.p>
            <RotatingQuotes />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
