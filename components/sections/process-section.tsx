"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    number: "01",
    title: "Book a Discovery Call",
    description: "30-minute free call to understand your business tools and pain points.",
  },
  {
    number: "02",
    title: "Integration Audit",
    description: "We map your systems, identify inefficiencies, and design the ideal integration architecture.",
  },
  {
    number: "03",
    title: "We Build It",
    description: "Sprint-based development with weekly updates and demos — you see progress in real time.",
  },
  {
    number: "04",
    title: "We Go Live Together",
    description: "Shadow mode testing, team training, and go-live support.",
  },
  {
    number: "05",
    title: "We Keep It Running",
    description: "Optional retainer for monitoring, maintenance, and continuous improvement.",
  },
];

export function ProcessSection() {
  return (
    <section id="how-it-works" className="relative w-full overflow-hidden bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Badge variant="outline" className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground bg-white dark:bg-black shadow-sm">
              How It Works
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple, transparent process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We&apos;ve refined our delivery process to ensure you know exactly what&apos;s happening at every stage.
            </p>
          </motion.div>

          <div className="relative mx-auto w-full max-w-5xl">
            {/* The continuing line background (visible on md+) */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

            <div className="flex flex-col gap-12 md:gap-24">
              {STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative flex flex-col items-center md:flex-row md:justify-between">
                    {/* The circle on the line */}
                    <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:block" />

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className={`relative flex w-full flex-col gap-4 rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card/50 md:w-[45%] ${
                        isEven ? "md:mr-auto md:-translate-x-4 md:text-right" : "md:ml-auto md:translate-x-4 md:text-left"
                      }`}
                    >
                      <div className={`text-6xl font-black text-primary/10 select-none absolute top-4 ${isEven ? 'right-6' : 'left-6'} dark:text-primary/20`}>
                        {step.number}
                      </div>
                      <div className={`flex flex-col gap-2 relative z-10 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
