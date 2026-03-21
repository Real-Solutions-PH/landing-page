import { Metadata } from "next";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, phase-based pricing for Philippine SMEs. From a free Discovery Audit to MVP builds and ongoing retainers — know exactly what you're paying before you commit.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Real Solutions PH Pricing",
    description: "Transparent, phase-based pricing for SME software integrations. Discovery, Prototype, MVP, and Retainer.",
    url: "https://www.realsolutionsph.com/pricing",
    images: [{ url: "/api/og-image", width: 1200, height: 630, alt: "Real Solutions PH Pricing" }],
  },
};

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background pt-24">
      <PricingSection />
      <CtaSection />
    </main>
  );
}
