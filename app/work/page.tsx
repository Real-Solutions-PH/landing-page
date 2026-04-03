import type { Metadata } from "next";
import { WorkContent } from "@/components/sections/work-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title:
    "Software Portfolio — Custom Software Projects in the Philippines",
  description:
    "View our portfolio of custom software projects — system integrations, web applications, mobile apps, and AI solutions built for Philippine SMEs and international clients. Real Solutions PH delivers production-grade software from Batangas, Philippines.",
  alternates: { canonical: "/work" },
  openGraph: {
    title:
      "Software Portfolio — Real Solutions PH, Philippines",
    description:
      "Custom software, system integrations, mobile apps, and AI solutions built for Philippine SMEs and international clients. See real projects with real results.",
    url: "https://www.realsolutionsph.com/work",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Software Portfolio — Real Solutions PH, Philippines",
      },
    ],
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
