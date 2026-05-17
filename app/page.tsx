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
    "Custom Software Development & System Integration PH",
  description:
    "Real Solutions PH builds custom software and connects POS, inventory, CRM, HR, and accounting for Philippine SMEs and international clients.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Custom Software Development & System Integration PH",
    description:
      "Real Solutions PH builds custom software and connects POS, inventory, CRM, HR, and accounting for Philippine SMEs and international clients.",
    url: "https://www.realsolutionsph.com",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH — Custom Software & System Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Software Development & System Integration PH",
    description:
      "Real Solutions PH builds custom software and connects POS, inventory, CRM, HR, and accounting for Philippine SMEs and international clients.",
    images: ["/og-image.png"],
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
