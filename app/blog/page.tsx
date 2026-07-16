import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero, GradientText } from "@/components/sections/page-hero";
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — AI Engineering, RAG & Production AI Systems",
    description:
      "Practical guides on shipping production AI: grounding guards, tenant isolation, RAG architecture, and what things actually cost.",
    images: ["/og-image.png"],
  },
};

export default function BlogIndexPage() {
  const baseUrl = "https://www.realsolutionsph.com";
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Real Solutions Insights",
    url: `${baseUrl}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${baseUrl}/blog/${p.slug}`,
      description: p.description,
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
        <PageHero
          eyebrow="Insights"
          title={
            <>
              <GradientText>AI engineering</GradientText> — explained in
              plain terms
            </>
          }
          description="Practical guides on grounding guards, tenant isolation, RAG architecture, and what an AI MVP actually costs."
        />

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <Card className="flex flex-col gap-3 border-border bg-card p-6 transition-colors group-hover:border-accent/40 md:p-8">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.dateLabel}</span>
                      <span>·</span>
                      <span>{post.readMinutes} min read</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
}
