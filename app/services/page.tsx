import type { Metadata } from "next";
import { ServicesIndex } from "@/components/sections/services-index";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Software Development Services in the Philippines",
  description:
    "System integration, custom software, AI development, and web & mobile apps for Philippine SMEs and international clients. Senior engineers, AI-accelerated, fast delivery.",
  keywords: [
    "software development services Philippines",
    "software company Philippines",
    "system integration Philippines",
    "custom software development Philippines",
    "AI software development Philippines",
    "web and mobile app development Philippines",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Development Services in the Philippines",
    description:
      "System integration, custom software, AI development, and web & mobile apps for Philippine SMEs and international clients.",
    url: "https://www.realsolutionsph.com/services",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services in the Philippines",
    description:
      "System integration, custom software, AI development, and web & mobile apps for Philippine SMEs and international clients.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  const baseUrl = "https://www.realsolutionsph.com";
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${baseUrl}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ServicesIndex services={services} />
      <CtaSection />
    </>
  );
}
