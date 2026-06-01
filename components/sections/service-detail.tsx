"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import type { Service } from "@/lib/services";
import type { Project } from "@/lib/projects";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export function ServiceDetail({
  service,
  relatedProjects,
}: {
  service: Service;
  relatedProjects: Project[];
}) {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      {/* Hero */}
      <PageHero eyebrow={service.name} title={service.h1} description={service.tagline}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Book a Discovery Audit</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/work">See our work</Link>
          </Button>
        </div>
      </PageHero>

      {/* Intro + problem */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div {...fadeUp} className="space-y-5">
            {service.intro.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="mt-10">
            <Card className="border-border bg-secondary/40 p-6 md:p-8">
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                The problem we solve
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.problem}
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            {...fadeUp}
            className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            What you get
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground md:text-base">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + who for */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl grid gap-12 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What we deliver
            </h2>
            <ul className="space-y-3">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground md:text-base">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp}>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Who it&apos;s for
            </h2>
            <ul className="space-y-3">
              {service.whoFor.map((w, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground md:text-base">
                    {w}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Indicative investment
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Transparent ranges so you can plan. Final scope and quote come out
              of your Discovery Audit.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium md:px-6">Package</th>
                  <th className="px-4 py-3 font-medium md:px-6">PH rate</th>
                  <th className="hidden px-4 py-3 font-medium sm:table-cell md:px-6">
                    Intl rate
                  </th>
                  <th className="px-4 py-3 font-medium md:px-6">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {service.pricing.map((p, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-4 font-medium text-foreground md:px-6">
                      {p.label}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground md:px-6">
                      {p.php}
                    </td>
                    <td className="hidden px-4 py-4 text-muted-foreground sm:table-cell md:px-6">
                      {p.intl}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground md:px-6">
                      {p.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Related work */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <motion.h2
              {...fadeUp}
              className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Related work
            </motion.h2>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link href="/work" className="group block h-full">
                    <Card className="flex h-full flex-col gap-2 border-border bg-card p-5 transition-colors group-hover:border-accent/40">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {project.clientType}
                      </span>
                      <h3 className="font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.outcome}
                      </p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2
            {...fadeUp}
            className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Frequently asked questions
          </motion.h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <Card className="border-border bg-card p-5 md:p-6">
                  <h3 className="mb-2 font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ready to scope your {service.name.toLowerCase()} project?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground md:text-base">
              Book a Discovery Audit. In 3–7 days you get a workflow audit, a
              solution roadmap, and a clear project estimate — no guesswork.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Book a Discovery Audit</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
