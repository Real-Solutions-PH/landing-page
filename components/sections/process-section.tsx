"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  FeatureCarousel,
  type FeatureCarouselStep,
  type FeatureCarouselImageSet,
} from "@/components/ui/animated-feature-carousel";
import {
  FileText,
  FlaskConical,
  Rocket,
  ClipboardCheck,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const steps: readonly FeatureCarouselStep[] = [
  {
    id: "1",
    name: "Proposal",
    title: "Software architecture & project overview",
    description:
      "Before any code: the architecture, the tradeoffs behind it, and a project overview you sign off on. You approve the plan and the cost design first — nothing gets built on assumptions.",
    icon: FileText,
  },
  {
    id: "2",
    name: "POC",
    title: "Prove the riskiest part first",
    description:
      "The one assumption that changes everything if it fails gets proven on its own — a focused proof of concept, before a full build rests on top of it.",
    icon: FlaskConical,
  },
  {
    id: "3",
    name: "MVP",
    title: "One capability, built complete",
    description:
      "The core capability, scoped tight and shipped whole — grounding guards and tenant isolation in from the first commit, not a checklist run before handover.",
    icon: Rocket,
  },
  {
    id: "4",
    name: "UAT",
    title: "Tested against your real users, not our assumptions",
    description:
      "A full pass of user acceptance testing against actual users. Fixes from what actually breaks get folded in before handover, not left for a version two.",
    icon: ClipboardCheck,
  },
  {
    id: "5",
    name: "Hypercare",
    title: "We stay reachable right after launch",
    description:
      "A lead architect stays on the week it ships to handle whatever needs attention — the person who built it, not a support ticket queue.",
    icon: HeartHandshake,
  },
  {
    id: "6",
    name: "Warranty",
    title: "A 30-day warranty on delivered work",
    description:
      "Any change to what was agreed gets its own dated, numbered record — nothing you'd have to reconstruct from a chat log later.",
    icon: ShieldCheck,
  },
];

// One image per phase, in step order: Proposal, POC, MVP, UAT, Hypercare, Warranty.
const images: FeatureCarouselImageSet = {
  alt: "How Real Solutions PH works",
  images: [
    "/process/proposal.png",
    "/process/proof_of_concept.png",
    "/process/mvp.png",
    "/process/uat.png",
    "/process/hypercare.png",
    "/process/warranty.png",
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
              A predictable shape, proposal to warranty
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Six phases from a signed architecture proposal to a 30-day
              warranty. The build — proposal through UAT — lands in three to
              four weeks; hypercare and the warranty run after you&apos;re live.
            </p>
          </motion.div>
        </div>

        <FeatureCarousel image={images} steps={steps} />
      </div>
    </section>
  );
}
