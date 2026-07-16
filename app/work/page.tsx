import type { Metadata } from "next";
import { WorkContent } from "@/components/sections/work-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "AI & Software Portfolio — Case Studies",
  description:
    "Real Solutions portfolio — AI agents, RAG pipelines, system integrations, custom platforms, and mobile apps shipped for founders, regulated teams, and agencies.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "AI & Software Portfolio — Case Studies",
    description:
      "Real Solutions portfolio — AI agents, RAG pipelines, system integrations, custom platforms, and mobile apps shipped for founders, regulated teams, and agencies.",
    url: "https://www.realsolutionsph.com/work",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Software Portfolio — Case Studies",
    description:
      "Real Solutions portfolio — AI agents, RAG pipelines, system integrations, custom platforms, and mobile apps shipped for founders, regulated teams, and agencies.",
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
