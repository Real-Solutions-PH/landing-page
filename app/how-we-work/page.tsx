import type { Metadata } from "next";
import { HowWeWork } from "@/components/sections/how-we-work";

export const metadata: Metadata = {
  title: "How We Work — Build, UAT, Hypercare, Warranty",
  description:
    "How Real Solutions PH ships AI systems: three build weeks, one UAT week against real users, a hypercare window, and a 30-day warranty — run by two senior architects.",
  keywords: [
    "AI development process",
    "AI MVP delivery timeline",
    "AI-accelerated software development",
    "senior AI engineering studio",
    "software development process",
    "4 week AI MVP build",
  ],
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work — Build, UAT, Hypercare, Warranty",
    description:
      "Three build weeks, one UAT week against real users, hypercare, and a 30-day warranty — the delivery shape behind every Real Solutions PH engagement.",
    url: "https://www.realsolutionsph.com/how-we-work",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "How Real Solutions PH Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work — Build, UAT, Hypercare, Warranty",
    description:
      "Three build weeks, one UAT week against real users, hypercare, and a 30-day warranty.",
    images: ["/api/og-image"],
  },
};

export default function HowWeWorkPage() {
  const baseUrl = "https://www.realsolutionsph.com";
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Real Solutions PH builds AI systems",
    description:
      "A senior-architect delivery system: three build weeks, one UAT week, hypercare, and a 30-day warranty, accelerated by AI-assisted development.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Build",
        text: "The build window holds to a single scoped capability — the data model and integration points get decided before anything else, with the grounding and isolation policy part of that same decision.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "UAT",
        text: "A dedicated testing week where the people who'll actually use the system try to break it, and whatever they find gets fixed before anyone calls it done.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Hypercare",
        text: "The two architects who built the system stay reachable immediately after launch to handle whatever needs attention the week it ships.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Warranty",
        text: "A dated warranty period follows launch, and any scope change along the way is logged as its own numbered record rather than a chat message.",
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
