"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

/**
 * Gradient-clipped text accent for hero headlines.
 * Wrap the phrase you want highlighted: <GradientText>fast and affordably</GradientText>
 */
export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-sky-300 via-accent to-sky-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Container max width, e.g. "max-w-4xl" (default) or "max-w-7xl". */
  maxWidth?: string;
  /** Override the default <h1> classes when a larger/smaller scale is needed. */
  titleClassName?: string;
  /** Extra content rendered below the description (CTAs, stat strips, etc.). */
  children?: ReactNode;
}

const DEFAULT_TITLE_CLASS =
  "mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]";

/**
 * Shared dark hero header used across tab pages (Services, Work, Insights,
 * About, How We Work). Ambient glows + masked grid pattern + entrance motion.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  maxWidth = "max-w-4xl",
  titleClassName,
  children,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#102A52] pt-40 pb-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute h-[460px] w-[460px] -left-24 top-10 rounded-full bg-sky-400/25 blur-[140px]" />
        <div className="absolute h-[360px] w-[360px] right-0 bottom-0 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute h-[280px] w-[280px] left-1/3 bottom-20 rounded-full bg-accent/15 blur-[110px]" />
      </div>
      {/* Grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        className={`container relative z-10 mx-auto px-4 md:px-6 ${maxWidth} text-center`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {eyebrow && (
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] border-white/20 bg-white/10 text-white/80 shadow-sm backdrop-blur-sm"
            >
              {eyebrow}
            </Badge>
          )}
          <h1 className={titleClassName ?? DEFAULT_TITLE_CLASS}>{title}</h1>
          {description && (
            <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
