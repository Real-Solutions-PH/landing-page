import type { Metadata } from "next";
import Link from "next/link";
import { Lock, ShieldCheck, ScrollText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero, GradientText } from "@/components/sections/page-hero";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Compliance-Ready AI Architecture for Enterprise",
  description:
    "Multi-tenant RAG platforms with provable tenant isolation, grounded output, and EU data-residency support — architected for a compliance review, not just a demo.",
  keywords: [
    "multi-tenant RAG platform",
    "EU AI data residency",
    "GDPR compliant AI vendor",
    "LLM security audit",
  ],
  alternates: { canonical: "/for/enterprise" },
  openGraph: {
    title: "Compliance-Ready AI Architecture for Enterprise",
    description:
      "Multi-tenant RAG platforms with provable tenant isolation, grounded output, and EU data-residency support — architected for a compliance review, not just a demo.",
    url: "https://www.realsolutionsph.com/for/enterprise",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compliance-Ready AI Architecture for Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance-Ready AI Architecture for Enterprise",
    description:
      "Multi-tenant RAG platforms with provable tenant isolation, grounded output, and EU data-residency support — architected for a compliance review, not just a demo.",
    images: ["/og-image.png"],
  },
};

const ARCHITECTURE_PROOF = [
  {
    icon: Lock,
    title: "Tenant isolation enforced at the data layer",
    body: "Postgres row-level security keyed to a per-transaction session variable with a nullif bleed-guard: an unset variable reads back NULL and matches no rows, so a bug fails to an empty result, never to another tenant's data. The application role is LOGIN NOBYPASSRLS and does not own the tables it queries.",
  },
  {
    icon: ShieldCheck,
    title: "Grounded output, checked the same way in CI as in production",
    body: "Every number and rule state in a model's response is checked against what the deterministic engine actually produced; anything ungrounded is rejected and replaced with deterministic copy. The CI fixture eval imports the same primitives as the runtime guard, so the check and the guard cannot quietly drift apart.",
  },
  {
    icon: Globe,
    title: "Data residency as a provider swap, not a rewrite",
    body: "Every model call routes through one provider-agnostic layer. When a GDPR or EU data-residency requirement dictates a specific region or vendor mid-engagement, changing providers is an environment variable, not a re-architecture.",
  },
  {
    icon: ScrollText,
    title: "An audit trail your reviewer can actually check",
    body: "Every departure from the agreed spec is a numbered ADR citing the exact clause it deviates from and the sign-off that approved it. Isolation tests carry positive controls, so an empty result can never be mistaken for a broken query that happens to return nothing.",
  },
];

export default function EnterprisePage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <PageHero
        eyebrow="For Regulated Enterprise"
        title={
          <>
            Compliance as <GradientText>Architecture</GradientText>
          </>
        }
        description="Isolation and grounding built into the data layer from the first migration — provable in a security review, not asserted in a README."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Request a technical review</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/services/ai-software-development">
              See the platform architecture
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Pain */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Whatever your AI system outputs, a compliance team, an auditor, or
              a regulator will eventually read it — in fintech, healthcare, and
              proptech alike, a wrong figure or a document that crosses a tenant
              boundary isn&apos;t a bug ticket, it&apos;s an incident report. A
              chatbot that impresses in a demo and can&apos;t explain how it
              reached an answer doesn&apos;t survive that scrutiny.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Most AI vendors can show you confidence. Very few can show you
              proof: that one customer&apos;s data structurally cannot reach
              another&apos;s, that a hallucinated number gets caught before a
              user ever sees it, and that every decision behind the system is
              written down somewhere your own reviewer can find.
            </p>
          </div>
          <Card className="mt-10 border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              The problem we solve
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              AI pilots that pass a demo and fail a security review — isolation
              claimed at the application layer instead of proven at the
              database, grounding asserted instead of tested, and no record of
              why the system was built the way it was when compliance finally
              asks.
            </p>
          </Card>
        </div>
      </section>

      {/* Capability proof */}
      <section className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            The architecture, not the pitch
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-muted-foreground md:text-base">
            Every practice below is our own engineering discipline — applied on
            every engagement, describable without reference to any client, and
            provable in a technical review rather than taken on faith.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {ARCHITECTURE_PROOF.map((point) => (
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

      <FeaturedWorkSection />
      <CtaSection />
    </main>
  );
}
