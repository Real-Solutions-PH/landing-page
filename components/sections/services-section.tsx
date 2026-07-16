"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Repeat,
} from "lucide-react";

const SERVICES = [
  {
    icon: Sparkles,
    title: "MVP (Minimum Viable Product)",
    description:
      "Any software — AI or not — in production and usable by real users in three to four weeks. Strong cloud architecture from day one, so even an existing user base can migrate in without running into major issues.",
    priceHint: "$2,000-3,000 · 4 weeks",
    href: "/services/ai-mvp-development",
    features: [
      "Real users on it in 3–4 weeks — production, not a demo",
      "Architected for millions of users and future phases from day one",
      "Security and compliant data handling from the first commit",
      "Hypercare and a warranty at phase end — this is phase 1",
    ],
    cta: "See the MVP path",
    popular: false,
    highlighted: true,
  },
  {
    icon: Layers,
    title: "Full Software Implementation",
    description:
      "The full platform, delivered in phases — each scoped to three to four weeks and priced per phase. Most products mature in three or four, each building on the MVP's multi-tenant foundation.",
    priceHint: "$6,000 - $8,000",
    href: "/services",
    features: [
      "3–4 week phases, ~$2,000–3,000 each; most mature in 3–4",
      "Multi-tenancy matured: custom domains, branding, operator dashboard",
      "AI systems: eval + synthetic-data pipelines, feedback capture, prompt versioning",
      "Mobile apps, plus CRM, ERP, and WhatsApp/Instagram/Facebook integrations",
    ],
    cta: "Explore full builds",
    popular: false,
    highlighted: false,
  },
  {
    icon: Repeat,
    title: "Retainer",
    description:
      "Ongoing support and maintenance for a product we built — keeping what's live healthy and reliable. New features and revamps aren't part of this; those become a change order, or a phase of their own.",
    priceHint: "$300 / month",
    href: "/contact",
    features: [
      "Technical Customer Support",
      "Continuous Maintenance of the codebase",
      "Bug fixes and enhancements within 24 hours",
    ],
    cta: "Talk about a retainer",
    popular: false,
    highlighted: false,
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
              Three ways to work with us
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Start with an MVP, commission a full build, or keep us on
              retainer — every one runs on the same SOP, ships production-ready,
              and leaves you owning the code.
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
