import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero, GradientText } from "@/components/sections/page-hero";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights — Software Development in the Philippines",
  description:
    "Practical guides on custom software, system integration, AI, and outsourcing in the Philippines — pricing, process, and how to choose the right software partner.",
  keywords: [
    "software development blog Philippines",
    "custom software guide Philippines",
    "software outsourcing Philippines",
    "software development insights",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights — Software Development in the Philippines",
    description:
      "Practical guides on custom software, system integration, AI, and outsourcing in the Philippines.",
    url: "https://www.realsolutionsph.com/blog",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — Software Development in the Philippines",
    description:
      "Practical guides on custom software, system integration, AI, and outsourcing in the Philippines.",
    images: ["/og-image.png"],
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
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="flex min-h-screen flex-col w-full bg-background">
        <PageHero
          eyebrow="Insights"
          title={
            <>
              <GradientText>Software, integration & AI</GradientText> —
              explained for Philippine businesses
            </>
          }
          description="Straight-talking guides on what software actually costs, how to choose a partner, and how to get more out of your systems."
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
