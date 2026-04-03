"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  FeatureCarousel,
  type FeatureCarouselStep,
  type FeatureCarouselImageSet,
} from "@/components/ui/animated-feature-carousel";
import { Search, Zap, Code, TrendingUp } from "lucide-react";

const steps: readonly FeatureCarouselStep[] = [
  {
    id: "1",
    name: "Discovery Audit",
    title: "We map your problem before writing a single line of code",
    description:
      "A paid discovery session where we audit your current tools, workflows, integration gaps, and pain points. You get a workflow audit, solution roadmap, and project estimate — in 3 to 7 days.",
    icon: Search,
  },
  {
    id: "2",
    name: "Prototype Sprint",
    title: "See and react to your solution before production begins",
    description:
      "A high-speed design sprint driven by AI. We build a live, interactive prototype you can view and use in real-time on the cloud, allowing for rapid iterations before any core engineering begins.",
    icon: Zap,
  },
  {
    id: "3",
    name: "MVP Build",
    title: "Production-grade software, engineered properly from day one",
    description:
      "Production-ready MVP using proper engineering practices — architecture review, CI/CD pipelines, secure implementation, automated testing, and cloud deployment. Delivered in 3 to 8 weeks.",
    icon: Code,
  },
  {
    id: "4",
    name: "Managed Growth",
    title: "We stay after launch — your system keeps improving",
    description:
      "Ongoing partnership after launch. We keep your system stable with bug fixes, monitoring, and support — plus continuous feature development, new integrations, and roadmap advisory.",
    icon: TrendingUp,
  },
];

const images: FeatureCarouselImageSet = {
  alt: "How Real Solutions PH works",
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
              Simple, transparent process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Prototype first. Build second. Never waste budget on the wrong
              thing. We&apos;ve refined our delivery into four clear phases so
              you always know what&apos;s happening.
            </p>
          </motion.div>
        </div>

        <FeatureCarousel image={images} steps={steps} />
      </div>
    </section>
  );
}
