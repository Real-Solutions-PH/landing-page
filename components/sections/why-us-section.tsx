"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    title: "DIY AI Tools",
    items: [
      "Fast to set up. Fragile when operations depend on it.",
      "Disconnected automations create more hidden failure points.",
      "No real ownership, no clear long-term system design.",
    ],
    highlight: false,
  },
  {
    title: "Traditional Agencies",
    items: [
      "Project delivered, then support becomes uncertain.",
      "Often optimized for output, not operational fit.",
      "You still carry the burden of keeping the system useful.",
    ],
    highlight: false,
  },
  {
    title: "In-House Team",
    items: [
      "Full control, but high hiring and management cost.",
      "Slower to assemble than most SMEs expect.",
      "You take on delivery, architecture, and retention risk.",
    ],
    highlight: false,
  },
  {
    title: "Real Solutions PH",
    items: [
      "We start with discovery, so the right problem gets solved.",
      "We prototype before full build, reducing waste and misalignment.",
      "We deliver production-grade software and stay to maintain it.",
      "You get a tailored system and a long-term technical partner.",
    ],
    highlight: true,
  },
];

export function WhyUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
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
              The smarter middle ground between DIY tools, vendors, and building
              your own team.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Real Solutions PH gives SMEs a managed path from operational
              problem to stable software — tailored to the business, backed by
              real engineering, and maintained after launch.
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
