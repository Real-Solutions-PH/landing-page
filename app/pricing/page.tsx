import type { Metadata } from "next";
import { PricingHeroSection } from "@/components/sections/pricing-hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Pricing — Software Development Rates",
  description:
    "Transparent software development pricing. Custom software, integration, AI, mobile apps, and retainers for Philippine SMEs and international clients.",
  alternates: { canonical: "/pricing" },
  // Page is intentionally hidden from nav; keep it out of the index until relaunched.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Pricing — Software Development Rates",
    description:
      "Transparent software development pricing. Custom software, integration, AI, mobile apps, and retainers for Philippine SMEs and international clients.",
    url: "https://www.realsolutionsph.com/pricing",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Software Development Rates",
    description:
      "Transparent software development pricing. Custom software, integration, AI, mobile apps, and retainers for Philippine SMEs and international clients.",
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
