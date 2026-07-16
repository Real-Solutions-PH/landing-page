import type { Metadata } from "next";
import { PricingHeroSection } from "@/components/sections/pricing-hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Pricing — AI Engineering Rates",
  description:
    "Transparent AI engineering pricing, from $3,000. AI agents, RAG, integration, custom platforms, and AI MVP builds — fixed scope, USD, no upper-bound guesswork.",
  alternates: { canonical: "/pricing" },
  // Page is intentionally hidden from nav; keep it out of the index until relaunched.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Pricing — AI Engineering Rates",
    description:
      "Transparent AI engineering pricing, from $3,000. AI agents, RAG, integration, custom platforms, and AI MVP builds — fixed scope, USD, no upper-bound guesswork.",
    url: "https://www.realsolutionsph.com/pricing",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — AI Engineering Rates",
    description:
      "Transparent AI engineering pricing, from $3,000. AI agents, RAG, integration, custom platforms, and AI MVP builds — fixed scope, USD, no upper-bound guesswork.",
    images: ["/og-image.png"],
  },
};

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <PricingHeroSection />
      <PricingSection />
      <CtaSection />
    </main>
  );
}
