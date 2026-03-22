import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, phase-based pricing for Philippine SMEs. From a free Discovery Audit to MVP builds and ongoing retainers — know exactly what you're paying before you commit.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Real Solutions PH Pricing",
    description:
      "Transparent, phase-based pricing for SME software integrations. Discovery, Prototype, MVP, and Retainer.",
    url: "https://www.realsolutionsph.com/pricing",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Real Solutions PH Pricing" },
    ],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
