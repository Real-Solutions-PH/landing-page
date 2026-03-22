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
            <Badge variant="outline" className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm">
              Our Story
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              A software company in the Philippines built for real business problems
            </h2>
            <div className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Real Solutions PH is a custom software and system integration company based in Batangas, Philippines. Founded by former startup engineering leaders, we build production-grade software for Philippine SMEs and international clients who need serious engineering — not freelancer-grade workarounds.
              </p>
              <p>
                For SMEs in the Philippines and abroad, building operational software hasn&apos;t been easy. You&apos;re forced to choose between exorbitant enterprise consultancies, cheap freelancers who leave behind unstable code, or fragile no-code workarounds that break at scale.
              </p>
              <p>
                We started Real Solutions PH to eliminate those trade-offs. Senior engineers, Philippine rates, production-grade output — accessible to the businesses that need it most.
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
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm">🎯</span>
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To make tailored business software practical, fast, and convenient for SMEs. We aim to remove the technical friction so owners can focus on running their business, not debugging their spreadsheets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-[32px] border border-accent/20 bg-accent/5 p-8 dark:bg-accent/10"
            >
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-sm text-foreground">🚀</span>
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading managed software and systems integration partner for Philippine SMEs and selected international clients, then evolve into a hybrid service-plus-product company.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
