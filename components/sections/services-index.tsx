"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHero, GradientText } from "@/components/sections/page-hero";
import type { Service } from "@/lib/services";

export function ServicesIndex({ services }: { services: Service[] }) {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Software development services{" "}
            <GradientText>in the Philippines</GradientText>
          </>
        }
        description="From system integration to custom software, AI, and apps — built by senior engineers, accelerated by AI, and delivered fast and cost-efficiently for Philippine SMEs and international clients."
      />

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <Card className="flex h-full flex-col gap-3 border-border bg-card p-6 transition-colors group-hover:border-accent/40 md:p-8">
                    <h2 className="text-xl font-bold text-foreground">
                      {service.name}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Explore service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
