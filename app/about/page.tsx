import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title:
    "About Us — Software Engineers & Developers in the Philippines",
  description:
    "Meet the engineers behind Real Solutions PH — a custom software development company in Batangas, Philippines. Former startup engineering leaders building production-grade software, system integrations, and managed solutions for Philippine SMEs and international clients.",
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About Real Solutions PH — Software Engineers in the Philippines",
    description:
      "A Philippine software company built by former startup engineering leaders. We build production-grade custom software and system integrations for SMEs — fully managed, from discovery to long-term retainer.",
    url: "https://www.realsolutionsph.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Real Solutions PH — Software Engineers in the Philippines",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <AboutHeroSection />
      <AboutSection />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
