import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { InsightsContent } from "@/components/sections/insights-content";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights — AI Engineering, RAG & Production AI Systems",
  description:
    "Practical guides on shipping production AI: grounding guards, tenant isolation, RAG architecture, voice AI, and what an AI MVP actually costs.",
  keywords: [
    "AI engineering blog",
    "RAG architecture guide",
    "AI MVP cost",
    "LLM grounding guard",
    "AI agent development guide",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights — AI Engineering, RAG & Production AI Systems",
    description:
      "Practical guides on shipping production AI: grounding guards, tenant isolation, RAG architecture, and what things actually cost.",
    url: "https://www.realsolutionsph.com/blog",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — AI Engineering, RAG & Production AI Systems",
    description:
      "Practical guides on shipping production AI: grounding guards, tenant isolation, RAG architecture, and what things actually cost.",
    images: ["/api/og-image"],
  },
};

export default function BlogIndexPage() {
  const baseUrl = "https://www.realsolutionsph.com";
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Real Solutions PH Insights",
    url: `${baseUrl}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${baseUrl}/blog/${p.slug}`,
      description: p.description,
      image: `${baseUrl}${p.coverImage}`,
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
        name: "Insights",
        item: `${baseUrl}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="flex min-h-screen flex-col w-full bg-background">
        <InsightsContent />
        <CtaSection />
      </main>
    </>
  );
}
