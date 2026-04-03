"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  CheckCircle2,
  Network,
  AppWindow,
  Globe,
  Smartphone,
  Bot,
} from "lucide-react";

const SERVICES = [
  {
    icon: Network,
    title: "System Integration Development",
    description:
      "Connect your POS, inventory, HR, payroll, CRM, accounting, and e-commerce. We build secure APIs, webhooks, and workflow automations.",
    priceHint: "Flagship Service",
    features: [
      "API & webhook integrations",
      "Workflow automation",
      "Operational dashboards",
      "Internal business systems",
    ],
    cta: "Book a Discovery Audit",
    popular: true,
    comingSoon: false,
  },
  {
    icon: AppWindow,
    title: "Custom Software Systems",
    description:
      "Internal tools, admin panels, portals, industry-specific operational systems, and management platforms tailored exactly to your workflows.",
    priceHint: "Scalable Solutions",
    features: [
      "Custom Admin Panels",
      "Client Portals",
      "Industry-specific systems",
      "Production-grade architecture",
    ],
    cta: "Get a Free Estimate",
    popular: false,
    comingSoon: false,
  },
  {
    icon: Globe,
    title: "Website & Web Apps",
    description:
      "High-performance marketing websites, lead-generation websites, portals, and web-based operational applications.",
    priceHint: "Modern Web",
    features: [
      "Marketing Websites",
      "Lead-gen platforms",
      "Web operations apps",
      "SEO optimized & fast",
    ],
    cta: "Get a Free Estimate",
    popular: false,
    comingSoon: false,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Customer-facing mobile apps, internal operations apps, staff tools, and hybrid mobile systems tied to your backend platforms.",
    priceHint: "iOS & Android",
    features: [
      "Customer-facing apps",
      "Internal staff tools",
      "Cross-platform capability",
      "Backend integration",
    ],
    cta: "Get a Free Estimate",
    popular: false,
    comingSoon: false,
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "AI-assisted internal workflows, document and knowledge assistants, embedded AI chat systems, and AI-powered automation.",
    priceHint: "Future Ready",
    features: [
      "Knowledge Assistants",
      "AI-assisted workflows",
      "Embedded AI chat",
      "Smart automation",
    ],
    cta: "Get a Free Estimate",
    popular: false,
    comingSoon: false,
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
              Custom software &amp; integration services for Philippine SMEs and
              international clients
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From system integration and custom software to AI and mobile —
              fully built, deployed, and managed. We provide the senior
              engineering your business has been missing.
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
                      : "border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card/50"
                  }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Most Popular
                  </div>
                )}
                {service.comingSoon && (
                  <div className="absolute -top-3 right-8 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-sm">
                    Coming Soon
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <div
                    className={`mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.popular ? "bg-primary text-white shadow-md" : "bg-primary/10 text-primary dark:bg-primary/20"}`}
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
                    Includes:
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
                  {service.comingSoon ? (
                    <Button
                      variant={service.popular ? "default" : "outline"}
                      className="w-full rounded-xl h-12"
                      disabled={service.comingSoon}
                    >
                      {service.cta}
                    </Button>
                  ) : (
                    <Button
                      variant={service.popular ? "default" : "outline"}
                      className="w-full rounded-xl h-12"
                      asChild
                    >
                      {service.cta === "Get a Free Estimate" ||
                      service.cta === "Ask About Retainers" ? (
                        <a href="#contact">
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      ) : (
                        <a
                          href="https://calendly.com/executives-realsolutions-ph/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
