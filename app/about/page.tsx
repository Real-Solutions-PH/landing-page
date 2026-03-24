"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#102A52] pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute h-[400px] w-[400px] -left-20 top-10 rounded-full bg-sky-400/20 blur-[120px]" />
          <div className="absolute h-[300px] w-[300px] right-0 bottom-0 rounded-full bg-primary/20 blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] border-white/20 bg-white/10 text-white/70 shadow-sm"
            >
              Our Team
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              The engineers behind
              <br className="hidden sm:block" /> Real Solutions PH
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              A software company in the Philippines built by former startup
              engineering leaders — we understand both clean architecture and
              business reality. Builders who deliver, not just consultants who
              advise.
            </p>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
