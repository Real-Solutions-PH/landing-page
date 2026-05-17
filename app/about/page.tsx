import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Our Software Engineers",
  description:
    "Meet the engineers behind Real Solutions PH — former startup leaders building production-grade software for Philippine SMEs and international clients.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Our Software Engineers",
    description:
      "Meet the engineers behind Real Solutions PH — former startup leaders building production-grade software for Philippine SMEs and international clients.",
    url: "https://www.realsolutionsph.com/about",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
      "Meet the engineers behind Real Solutions PH — former startup leaders building production-grade software for Philippine SMEs and international clients.",
    images: ["/og-image.png"],
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
