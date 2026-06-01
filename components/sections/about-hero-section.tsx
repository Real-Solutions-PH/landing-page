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
          The engineers behind
          <br className="hidden sm:block" /> <GradientText>Real Solutions PH</GradientText>
        </>
      }
      description="A software company in the Philippines built by former startup engineering leaders — we understand both clean architecture and business reality. Builders who deliver, not just consultants who advise."
    />
  );
}
