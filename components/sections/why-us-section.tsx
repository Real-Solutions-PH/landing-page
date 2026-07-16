"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    title: "No-Code / DIY AI Tools",
    items: [
      "Fast to prototype. No grounding guard, so it invents answers the moment real data gets messy.",
      "No isolation guarantee the day more than one tenant touches it.",
      "No one owns the architecture six months in.",
    ],
    highlight: false,
  },
  {
    title: "Agency Demo",
    items: [
      "Ships a demo, then support becomes a ticket queue.",
      "Rarely built with tenant isolation or an audit trail from day one.",
      "You inherit the guardrails after the fact, if at all.",
    ],
    highlight: false,
  },
  {
    title: "In-House Hire",
    items: [
      "Full control, but months of hiring before a line of code ships.",
      "You absorb the retention and delivery risk alone.",
      "Onboarding a senior architect takes longer than most builds.",
    ],
    highlight: false,
  },
  {
    title: "Real Solutions",
    items: [
      "AI leverage is why two people can move like a bigger team — and it never substitutes for discipline: scope changes get a decision record, not a Slack thread.",
      "Grounding guard and Postgres RLS isolation go in from the first commit, proven with positive-control tests, not asserted in a README.",
      "A security review runs across every surface before handover — standard on every build, not a line item you have to negotiate for.",
      "You own the code and the architecture outright.",
    ],
    highlight: true,
  },
];

export function WhyUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              The Real Solutions Difference
            </Badge>
            <h2 className="mb-6 max-w-4xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              The smarter middle ground between a no-code prototype, an agency
              demo, and hiring a full team.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Two senior architects with AI leverage — the speed comes from
              the tooling, the discipline comes from the ADRs, grounding
              guards, and security reviews that ship with every build.
            </p>
          </motion.div>
        </div>

        {/* 4-column comparison Grid */}
        <div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {comparisonData.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col overflow-hidden rounded-[24px] border ${
                column.highlight
                  ? "border-primary bg-primary/5 shadow-[0_20px_40px_rgba(25,59,118,0.1)] dark:bg-primary/10"
                  : "border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card/50"
              }`}
            >
              <div
                className={`p-6 border-b ${
                  column.highlight
                    ? "border-primary/20 bg-primary text-white dark:border-white/10 dark:bg-primary dark:text-primary-foreground"
                    : "border-black/5 bg-black/5 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                <h3
                  className={`font-semibold tracking-tight ${column.highlight ? "text-xl flex items-center gap-2" : "text-lg opacity-80"}`}
                >
                  {column.highlight && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                  {column.title}
                </h3>
              </div>
              <ul className="flex flex-col px-6 py-6 space-y-5 flex-1">
                {column.items.map((item, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 text-sm leading-relaxed ${column.highlight ? "font-medium text-foreground" : "text-muted-foreground"}`}
                  >
                    <span className="mt-0.5 flex shrink-0">
                      {column.highlight ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/30">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                          <X className="h-3 w-3 stroke-[3]" />
                        </div>
                      )}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
