import type { Metadata } from "next";
import { WorkContent } from "@/components/sections/work-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "AI & Software Portfolio — Case Studies",
  description:
    "Real Solutions PH portfolio — AI agents, RAG pipelines, system integrations, custom platforms, and mobile apps, built across retail, consumer tech, and agritech.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "AI & Software Portfolio — Case Studies",
    description:
      "Real Solutions PH portfolio — AI agents, RAG pipelines, system integrations, custom platforms, and mobile apps, built across retail, consumer tech, and agritech.",
    url: "https://www.realsolutionsph.com/work",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Software Portfolio — Case Studies",
    description:
      "Real Solutions PH portfolio — AI agents, RAG pipelines, system integrations, custom platforms, and mobile apps, built across retail, consumer tech, and agritech.",
    images: ["/api/og-image"],
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
