import type { Metadata } from "next";
import { PricingHeroSection } from "@/components/sections/pricing-hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title:
    "Software Development Pricing — Philippines & International Rates",
  description:
    "Transparent software development pricing from Real Solutions PH. Custom software from ₱42,000, system integration from ₱10,000, managed retainers from ₱3,500/month. Serving Philippine SMEs and international clients from Batangas, Philippines.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title:
      "Software Development Pricing — Real Solutions PH",
    description:
      "Transparent pricing for custom software, system integration, and managed retainers. No hidden fees, no lock-in. Philippine SME and international rates available.",
    url: "https://www.realsolutionsph.com/pricing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Software Development Pricing — Real Solutions PH",
      },
    ],
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
