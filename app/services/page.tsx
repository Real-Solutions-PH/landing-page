import type { Metadata } from "next";
import { ServicesIndex } from "@/components/sections/services-index";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "AI Engineering Services — RAG, Voice AI, Integration & More",
  description:
    "Seven services under one senior engineering team: AI agents & RAG, system integration, custom platforms, web & mobile, voice AI, data pipelines, and AI MVP development.",
  keywords: [
    "AI engineering services",
    "RAG development company",
    "AI agent development",
    "AI systems integration company",
    "multi-tenant platform development",
    "voice AI development",
    "AI MVP development agency",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Engineering Services — RAG, Voice AI, Integration & More",
    description:
      "Seven services under one senior engineering team: AI agents & RAG, system integration, custom platforms, web & mobile, voice AI, data pipelines, and AI MVP development.",
    url: "https://www.realsolutionsph.com/services",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Services — RAG, Voice AI, Integration & More",
    description:
      "Seven services under one senior engineering team: AI agents & RAG, system integration, custom platforms, web & mobile, voice AI, data pipelines, and AI MVP development.",
    images: ["/api/og-image"],
  },
};

export default function ServicesPage() {
  const baseUrl = "https://www.realsolutionsph.com";
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Engineering Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${baseUrl}/services/${s.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesIndex services={services} />
      <CtaSection />
    </>
  );
}
