import type { Metadata } from "next";
import { HowWeWork } from "@/components/sections/how-we-work";

export const metadata: Metadata = {
  title: "How We Work — AI-Optimized Software Delivery",
  description:
    "How Real Solutions PH builds software fast and affordably: a prototype-first, AI-accelerated delivery system led by senior startup engineers for Philippine SMEs and global clients.",
  keywords: [
    "affordable software development Philippines",
    "fast software development",
    "AI-accelerated software development",
    "software development process",
    "prototype-first development",
    "cheap custom software Philippines",
  ],
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work — AI-Optimized Software Delivery",
    description:
      "A prototype-first, AI-accelerated delivery system led by senior startup engineers — how we ship production-grade software faster and cheaper than agencies.",
    url: "https://www.realsolutionsph.com/how-we-work",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Real Solutions PH Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work — AI-Optimized Software Delivery",
    description:
      "A prototype-first, AI-accelerated delivery system led by senior startup engineers.",
    images: ["/og-image.png"],
  },
};

export default function HowWeWorkPage() {
  const baseUrl = "https://www.realsolutionsph.com";
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Real Solutions PH builds software",
    description:
      "A prototype-first, AI-accelerated delivery system for building production-grade software fast and affordably.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Discovery Audit",
        text: "We audit your current tools, workflows, integration gaps, and pain points and deliver a workflow audit, solution roadmap, and project estimate in 3 to 7 days.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Prototype Sprint",
        text: "An AI-driven design sprint produces a live, interactive prototype you can use and react to before any core engineering begins.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "MVP Build",
        text: "A production-ready MVP using proper engineering practices — architecture review, CI/CD, automated testing, and cloud deployment — delivered in 3 to 8 weeks.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Managed Growth",
        text: "Ongoing partnership after launch with bug fixes, monitoring, support, continuous feature development, and roadmap advisory.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "How We Work",
        item: `${baseUrl}/how-we-work`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HowWeWork />
    </>
  );
}
