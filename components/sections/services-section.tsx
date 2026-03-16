"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    title: "Integration Audit & Roadmap",
    description: "A 1–2 week discovery engagement to map your systems, identify inefficiencies, and design the ideal integration architecture.",
    priceHint: "Starts at ₱15,000",
    features: [
      "Complete tool inventory",
      "Current state data flow diagram",
      "Prioritized integration roadmap",
      "Phased cost estimate report",
    ],
    cta: "Book a Discovery Audit",
    popular: false,
    comingSoon: false,
  },
  {
    title: "Custom Integration Projects",
    description: "We design, build, test, deploy, and document custom robust integrations connecting your scattered systems.",
    priceHint: "Custom Scoped",
    features: [
      "POS ↔ Inventory ↔ Accounting",
      "E-commerce ↔ Fulfillment",
      "HR System ↔ Payroll ↔ Biometrics",
      "CRM ↔ Email/SMS ↔ Lead Forms",
    ],
    cta: "Get a Free Estimate",
    popular: true,
    comingSoon: false,
  },
  {
    title: "Managed Integration Operations",
    description: "Monthly ongoing support and maintenance. Integration isn't a one-time job, we ensure continuous uptime.",
    priceHint: "Monthly Retainer",
    features: [
      "24/7 API uptime monitoring",
      "Rapid incident response",
      "Routine bug fixes & updates",
      "Monthly health reports",
    ],
    cta: "Ask About Retainers",
    popular: false,
    comingSoon: false,
  },
  {
    title: "Productized Connectors",
    description: "Pre-built, plug-and-play connectors for the most common Philippine and SEA business tool combinations.",
    priceHint: "Setup + Subscription",
    features: [
      "Local POS ↔ Xero/QuickBooks",
      "Shopee/Lazada ↔ Inventory",
      "BIR-ready accounting hooks",
      "Instant deployment",
    ],
    cta: "Join Waitlist",
    popular: false,
    comingSoon: true,
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
    transition: { duration: 0.7, ease: "easeOut" as const }
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
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
              Our Services
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Solutions that scale with you
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From initial technical audits to fully managed operations, we provide the engineering horsepower your business has been missing.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col gap-6 rounded-[32px] border p-8 text-left transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] 
                  ${service.popular 
                    ? "border-primary/50 bg-primary/5 shadow-lg dark:bg-primary/10" 
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
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm font-medium text-accent dark:text-accent-foreground/80">{service.priceHint}</p>
                </div>
                
                <p className="text-sm leading-relaxed text-muted-foreground min-h-[80px]">
                  {service.description}
                </p>

                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground">Includes:</div>
                  <ul className="flex flex-col gap-2.5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
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
                      <a href="https://calendly.com/executives-realsolutions-ph/30min" target="_blank" rel="noopener noreferrer">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
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
