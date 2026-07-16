"use client";

import { PageHero, GradientText } from "@/components/sections/page-hero";

export function AboutHeroSection() {
  return (
    <PageHero
      eyebrow="Our Team"
      maxWidth="max-w-5xl"
      titleClassName="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]"
      title={
        <>
          The architects behind
          <br className="hidden sm:block" /> <GradientText>Real Solutions</GradientText>
        </>
      }
      description={
        <>
          Philippines-based and remote-first, with strong overlap across US-East and EU working hours — two senior architects who scope, build, and review every engagement themselves. {/* positioning-guard:allow-ph */}
        </>
      }
    />
  );
}
