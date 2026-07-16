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
  title: "AI Engineering Studio — Production AI in Weeks",
  description:
    "Two senior architects shipping AI agents, RAG, and custom platforms with grounding guards, tenant isolation, and numbered ADRs — guarantees you can audit.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Engineering Studio — Production AI in Weeks",
    description:
      "Two senior architects shipping AI agents, RAG, and custom platforms with grounding guards, tenant isolation, and numbered ADRs — guarantees you can audit.",
    url: "https://www.realsolutionsph.com",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "Real Solutions — AI Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Studio — Production AI in Weeks",
    description:
      "Two senior architects shipping AI agents, RAG, and custom platforms with grounding guards, tenant isolation, and numbered ADRs — guarantees you can audit.",
    images: ["/api/og-image"],
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
