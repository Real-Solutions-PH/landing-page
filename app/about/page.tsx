import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Our Software Engineers",
  description:
    "Meet the two senior architects behind Real Solutions — former startup engineering leads shipping production-grade AI systems for international startups, regulated enterprises, and agencies.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Our Software Engineers",
    description:
      "Meet the two senior architects behind Real Solutions — former startup engineering leads shipping production-grade AI systems for international startups, regulated enterprises, and agencies.",
    url: "https://www.realsolutionsph.com/about",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "About Real Solutions PH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Software Engineers",
    description:
      "Meet the two senior architects behind Real Solutions — former startup engineering leads shipping production-grade AI systems for international startups, regulated enterprises, and agencies.",
    images: ["/api/og-image"],
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
