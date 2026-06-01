import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostBody } from "@/components/blog/post-body";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `https://www.realsolutionsph.com/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url,
      siteName: "Real Solutions PH",
      locale: "en_PH",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const baseUrl = "https://www.realsolutionsph.com";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: postUrl,
    mainEntityOfPage: postUrl,
    image: `${baseUrl}/og-image.png`,
    author: {
      "@type": "Organization",
      name: "Real Solutions PH",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Real Solutions PH",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo/logo-header-light-transparent 1.svg`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqBlock = post.body.find((b) => b.type === "faq");
  const faqSchema =
    faqBlock && faqBlock.type === "faq"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqBlock.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main className="flex min-h-screen flex-col w-full bg-background">
        <article className="w-full pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>
            <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{post.dateLabel}</span>
              <span>·</span>
              <span>{post.readMinutes} min read</span>
            </div>
            <h1 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-[1.2]">
              {post.title}
            </h1>
            <PostBody blocks={post.body} />

            <div className="mt-12 rounded-2xl border border-border bg-[#102A52] p-8 text-center">
              <h2 className="mb-3 text-xl font-bold text-white">
                Want a clear estimate for your project?
              </h2>
              <p className="mx-auto mb-6 max-w-md text-sm text-white/70">
                Book a Discovery Audit — a workflow audit, solution roadmap, and
                project estimate in 3–7 days.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Book a Discovery Audit</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
