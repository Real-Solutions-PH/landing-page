"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Network,
  AppWindow,
  Globe,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Agents & RAG",
    description:
      "Grounded retrieval and LLM agents wired into production — not a demo that falls apart the week real users show up.",
    priceHint: "Flagship — from $5,000",
    href: "/services/ai-software-development",
    features: [
      "Hybrid dense + full-text retrieval",
      "Server-side citations, never parsed from prose",
      "Grounding guard rejects invented numbers",
      "Provider-agnostic — swap models via env var",
    ],
    cta: "See the AI service",
    popular: true,
    highlighted: false,
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Your agent reads and writes against the CRM, ERP, and ticketing queue it needs to act on — not a chat widget floating beside your stack.",
    priceHint: "From $3,500",
    href: "/services/system-integration",
    features: [
      "Read/write into your CRM, ERP, ticketing",
      "Tenant isolation enforced at the data layer",
      "Grounding guard on every write path",
      "Works with legacy and modern APIs",
    ],
    cta: "Explore service",
    popular: false,
    highlighted: false,
  },
  {
    icon: AppWindow,
    title: "Custom Platforms",
    description:
      "Multi-tenant platforms where isolation is a database guarantee, not a permissions check you're hoping holds.",
    priceHint: "From $13,000",
    href: "/services/custom-software",
    features: [
      "Postgres RLS isolation, not app-layer checks",
      "Positive-control isolation tests",
      "You own the code and schema outright",
      "Interactive prototype before core build",
    ],
    cta: "Explore service",
    popular: false,
    highlighted: false,
  },
  {
    icon: Globe,
    title: "Web & Mobile",
    description:
      "Interfaces built to match a live backend — token-by-token rendering and inline sourcing, instead of a spinner until the answer is done.",
    priceHint: "From $3,000",
    href: "/services/web-mobile-apps",
    features: [
      "Streaming token and tool-call rendering",
      "Inline citations, not buried in prose",
      "One React Native codebase, iOS + Android",
      "Sub-second loads, clean semantic markup",
    ],
    cta: "Explore service",
    popular: false,
    highlighted: false,
  },
  {
    icon: Sparkles,
    title: "AI MVP Development",
    description:
      "One capability, scoped tightly and shipped completely on a four-week clock — built by the same two people who scope it.",
    priceHint: "From $5,000, 4 weeks",
    href: "/services/ai-mvp-development",
    features: [
      "Three build weeks, one UAT week",
      "Two senior architects — no bench of juniors",
      "Grounding + isolation from the first commit",
      "Hypercare plus a 30-day warranty",
    ],
    cta: "Explore service",
    popular: false,
    highlighted: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-background py-16 sm:py-24"
    >
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
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              Our Services
            </Badge>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              What we build — and why it&apos;s different
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every service ships production-ready with monitoring, docs, and
              handoff — not a demo you have to finish yourself.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col gap-6 rounded-[32px] border p-8 text-left transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                  ${
                    service.popular
                      ? "border-primary/50 bg-primary/5 shadow-lg dark:bg-primary/10 sm:col-span-2 lg:col-span-1"
                      : service.highlighted
                        ? "border-violet-500/40 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/60 shadow-[0_8px_30px_rgba(124,58,237,0.1)] dark:from-violet-950/30 dark:via-card/50 dark:to-fuchsia-950/20 dark:border-violet-400/30"
                        : "border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card/50"
                  }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Flagship
                  </div>
                )}
                {service.highlighted && (
                  <div className="absolute -top-3 right-8 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    4 Weeks
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <div
                    className={`mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.popular ? "bg-primary text-white shadow-md" : service.highlighted ? "bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md" : "bg-primary/10 text-primary dark:bg-primary/20"}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-accent dark:text-accent-foreground/80">
                    {service.priceHint}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground min-h-[80px]">
                  {service.description}
                </p>

                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                    What you get:
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-auto border-t border-border">
                  <Button
                    variant={service.popular ? "default" : "outline"}
                    className="w-full rounded-xl h-12"
                    asChild
                  >
                    <a href={service.href}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
