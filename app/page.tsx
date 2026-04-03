import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { PortfolioIntroSection } from "@/components/sections/portfolio-intro-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title:
    "Real Solutions PH | Custom Software Development & System Integration Company in the Philippines",
  description:
    "Real Solutions PH is a custom software development company in Batangas, Philippines. We build production-grade software, system integrations, mobile apps, and AI solutions for Philippine SMEs and international clients. Affordable rates, senior engineers, fully managed — from discovery audit to long-term retainer.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Real Solutions PH | Custom Software Development & System Integration in the Philippines",
    description:
      "Custom software development company in the Philippines. We connect your POS, inventory, CRM, HR, and accounting into one system. Affordable software development for SMEs — built right, fully managed.",
    url: "https://www.realsolutionsph.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH — Custom Software Development & System Integration for Philippine SMEs",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <PortfolioIntroSection />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
