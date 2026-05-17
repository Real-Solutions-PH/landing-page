import type { Metadata } from "next";
import { WorkContent } from "@/components/sections/work-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Software Portfolio & Case Studies",
  description:
    "Real Solutions PH portfolio — system integrations, web apps, mobile apps, and AI projects for Philippine SMEs and international clients.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Software Portfolio & Case Studies",
    description:
      "Real Solutions PH portfolio — system integrations, web apps, mobile apps, and AI projects for Philippine SMEs and international clients.",
    url: "https://www.realsolutionsph.com/work",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Portfolio & Case Studies",
    description:
      "Real Solutions PH portfolio — system integrations, web apps, mobile apps, and AI projects for Philippine SMEs and international clients.",
    images: ["/og-image.png"],
  },
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <WorkContent />
      <CtaSection />
    </main>
  );
}
