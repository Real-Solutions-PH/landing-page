import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, ShieldCheck, GitBranch, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero, GradientText } from "@/components/sections/page-hero";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { CtaSection } from "@/components/sections/cta-section";
import { getService } from "@/lib/services";
import { getPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI MVP Development for Startup Founders",
  description:
    "Get a production AI MVP in front of real users in 4 weeks, from $5,000. For pre-seed and seed founders who need traction before the next raise, not a demo.",
  keywords: [
    "AI MVP development agency",
    "RAG development company",
    "LangGraph developers for hire",
    "build AI agent MVP",
  ],
  alternates: { canonical: "/for/startups" },
  openGraph: {
    title: "AI MVP Development for Startup Founders",
    description:
      "Get a production AI MVP in front of real users in 4 weeks, from $5,000. For pre-seed and seed founders who need traction before the next raise, not a demo.",
    url: "https://www.realsolutionsph.com/for/startups",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "AI MVP Development for Startup Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI MVP Development for Startup Founders",
    description:
      "Get a production AI MVP in front of real users in 4 weeks, from $5,000. For pre-seed and seed founders who need traction before the next raise, not a demo.",
    images: ["/api/og-image"],
  },
};

// Client work is under publication bars, so these posts are the proof path —
// describable end to end without reference to any engagement.
const RELATED_POST_SLUGS = [
  "shipping-production-ai-in-four-weeks",
  "grounding-guards-llm-refuse-invent-numbers",
];
const RELATED_POSTS = RELATED_POST_SLUGS.map(getPost).filter(
  (post): post is NonNullable<typeof post> => Boolean(post),
);

const PROOF_POINTS = [
  {
    icon: Rocket,
    title: "Two architects, no bench",
    body: "Whoever scopes your engagement is one of the two people who write the code, review it, and stay reachable after launch — no project manager relaying your spec to engineers you've never met.",
  },
  {
    icon: ShieldCheck,
    title: "Grounded from the first commit",
    body: "A grounding guard rejects any model output citing a number the underlying system didn't actually produce, so the answer your users see is either correct or honest about not knowing — not a guess wearing confidence.",
  },
  {
    icon: GitBranch,
    title: "Every deviation on the record",
    body: "If scope has to move to hit the four-week mark, it's a numbered ADR naming what changed and why — agreed before the deadline, not a surprise you discover at handover.",
  },
  {
    icon: Layers,
    title: "Built to survive your next round",
    body: "Tenant isolation and grounding guarantees go in during the build, not retrofitted the week a customer's security questionnaire lands on your desk.",
  },
];

export default function StartupsPage() {
  const mvp = getService("ai-mvp-development");
  const anchor = mvp?.pricing[0];

  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <PageHero
        eyebrow="For Startup Founders"
        title={
          <>
            Ship a Production AI MVP in{" "}
            <GradientText>4 Weeks</GradientText>
          </>
        }
        description="Three weeks to build one AI capability completely, one week of testing against your real users — not a demo that impresses in a pitch meeting and cracks the moment an actual user touches it."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Book a scoping call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/services/ai-mvp-development">See the AI MVP service</Link>
          </Button>
        </div>
      </PageHero>

      {/* Pain */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              You need something real users can touch before you&apos;re back
              pitching investors or handing it to a pilot customer — not a
              slide, and not a full-time engineering hire you can&apos;t make
              before your runway forces the decision. A no-code prototype gets
              you into the room; it rarely survives the first real user who
              does something the demo never anticipated.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Hiring solves it eventually, if you can find, vet, and onboard the
              right person before the opportunity closes. Most pre-seed and seed
              founders don&apos;t have that runway. What they need is a working AI
              system in production in weeks, built by people who are still around
              to fix it the week after it ships.
            </p>
          </div>
          <Card className="mt-10 border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              The problem we solve
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Founders who spun up a no-code prototype or paid an agency for a
              slick demo, then watched it stall the moment a real user did
              something neither one accounted for — the model fabricated an
              answer, retrieval pointed at the wrong document, or no one could
              explain why the system responded the way it did. A polished
              walkthrough and a system a paying customer can actually rely on
              are not the same build.
            </p>
          </Card>
        </div>
      </section>

      {/* Capability proof */}
      <section className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Built for a founder&apos;s timeline, not a slower one
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROOF_POINTS.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <point.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing anchor */}
      {anchor && (
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {anchor.label}: from {anchor.from}, {anchor.timeline}
            </h2>
            <p className="mx-auto max-w-xl text-sm text-muted-foreground md:text-base">
              One core AI capability, scoped and shipped completely, with a
              hypercare window and a 30-day warranty after launch. Final scope
              and quote come out of a scoping call, not a generic estimate.
            </p>
          </div>
        </section>
      )}

      {/* Read the engineering */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Read the engineering
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-muted-foreground md:text-base">
            How the four-week build actually runs, and the grounding guard
            that ships with every capability — in enough depth to evaluate
            before you book a call.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {RELATED_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="flex h-full flex-col gap-3 border-border bg-card p-6 transition-colors group-hover:border-accent/40">
                  <span className="text-xs text-muted-foreground">
                    {post.readMinutes} min read
                  </span>
                  <h3 className="text-base font-bold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
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

      <FeaturedWorkSection />
      <CtaSection />
    </main>
  );
}
