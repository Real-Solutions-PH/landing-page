"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              Our Story
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Two architects, one AI engineering studio
            </h2>
            <div className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Real Solutions PH is a senior AI engineering studio founded by
                two former heads of engineering at an AI startup. Every
                engagement — scoping, build, and review — runs through the
                same two people, not a bench of engineers you&apos;ll never
                meet.
              </p>
              <p>
                We&apos;re Philippines-based and remote-first, which gives us strong overlap with US-East and EU working hours without the overhead of a Western engineering rate card. {/* positioning-guard:allow-ph */}
              </p>
              <p>
                That origin shows up as leverage, not as a reason to cut
                corners: two senior architects, AI-assisted development, and
                the same discipline — grounding guards, tenant isolation,
                numbered ADRs — on every build, regardless of who&apos;s
                paying for it.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-[32px] border border-primary/20 bg-primary/5 p-8 dark:bg-primary/10"
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm">
                  🎯
                </span>
                Our Mission
              </h3>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  To make AI-assisted development the way software actually
                  gets built: shipped fast, and traceable, secure, accurate,
                  and scalable enough to survive an audit — on every
                  engagement, not only the ones that happen to go well.
                </p>
                <p>
                  AI carries the volume; a lead architect carries the
                  judgment. Used that way it amplifies an engineering role
                  rather than replacing it — which is what makes this a studio
                  where an engineer&apos;s existing expertise compounds,
                  against our workflow, our tools, and our SOPs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-[32px] border border-accent/20 bg-accent/5 p-8 dark:bg-accent/10"
            >
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-sm text-foreground">
                  🚀
                </span>
                Our Vision
              </h3>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  To make that standard the default — first for the startups,
                  regulated enterprises, and agencies who subcontract to us
                  when the AI work actually has to hold up.
                </p>
                <p>
                  And in the long run, closer to home: the same engineering brought to businesses across the Philippines, upgrading what local companies are able to build and run. {/* positioning-guard:allow-ph — long-term aspiration stated on /about only, per CONTEXT.md §2; every other page, meta tag and keyword stays international */}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
