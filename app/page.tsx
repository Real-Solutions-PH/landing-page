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
    "Real Solutions PH | Custom Software & System Integration Company in the Philippines",
  description:
    "Real Solutions PH builds production-grade custom software and system integrations for Philippine SMEs and international clients — prototype-first, fully managed, from discovery to long-term retainer. Based in Batangas, Philippines.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Real Solutions PH | Custom Software & System Integration Company in the Philippines",
    description:
      "Prototype-first managed software partner for Philippine SMEs and international clients. We connect your POS, inventory, CRM, HR, and accounting — built right, fully managed.",
    url: "https://www.realsolutionsph.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH — Custom Software & System Integration for Philippine SMEs",
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
