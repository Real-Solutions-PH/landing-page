"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  FeatureCarousel,
  type FeatureCarouselStep,
  type FeatureCarouselImageSet,
} from "@/components/ui/animated-feature-carousel";
import { Code2, ClipboardCheck, HeartHandshake, ShieldCheck } from "lucide-react";

const steps: readonly FeatureCarouselStep[] = [
  {
    id: "1",
    name: "Build",
    title: "One AI capability, scoped and built completely",
    description:
      "Three build weeks, one capability held to scope. Grounding and isolation are part of the design from day one, not a checklist run before handover.",
    icon: Code2,
  },
  {
    id: "2",
    name: "UAT",
    title: "Tested against your real users, not our assumptions",
    description:
      "One full week of user acceptance testing. Fixes from what actually breaks get folded in before handover, not left for a version two.",
    icon: ClipboardCheck,
  },
  {
    id: "3",
    name: "Hypercare",
    title: "We stay reachable right after launch",
    description:
      "The two architects who built it are the two people you reach if something needs attention the week it ships — not a support ticket queue.",
    icon: HeartHandshake,
  },
  {
    id: "4",
    name: "Warranty",
    title: "A 30-day warranty on delivered work",
    description:
      "Any change to what was agreed gets its own dated, numbered record — nothing you'd have to reconstruct from a chat log later.",
    icon: ShieldCheck,
  },
];

const images: FeatureCarouselImageSet = {
  alt: "How Real Solutions works",
  images: [
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1740&auto=format&fit=crop",
  ],
};

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 sm:pt-24 pb-8 sm:pb-12">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground bg-white dark:bg-black shadow-sm"
            >
              How It Works
            </Badge>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              A predictable four-week shape
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Three weeks to build, one week to test against real users, then
              we stay on. No sales-funnel phases — just a build with the
              guarantees already built in.
            </p>
          </motion.div>
        </div>

        <FeatureCarousel image={images} steps={steps} />
      </div>
    </section>
  );
}
