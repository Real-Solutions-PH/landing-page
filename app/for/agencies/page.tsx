import type { Metadata } from "next";
import Link from "next/link";
import { Users, GitBranch, Handshake, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero, GradientText } from "@/components/sections/page-hero";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "White-Label AI Engineering Pod for Agencies",
  description:
    "Subcontract the AI work your agency sold to a senior engineering pod — white-label delivery with a numbered ADR trail your client's own reviewer can check.",
  keywords: [
    "white label AI development",
    "AI engineering pod",
    "subcontract AI development",
  ],
  alternates: { canonical: "/for/agencies" },
  openGraph: {
    title: "White-Label AI Engineering Pod for Agencies",
    description:
      "Subcontract the AI work your agency sold to a senior engineering pod — white-label delivery with a numbered ADR trail your client's own reviewer can check.",
    url: "https://www.realsolutionsph.com/for/agencies",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "White-Label AI Engineering Pod for Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label AI Engineering Pod for Agencies",
    description:
      "Subcontract the AI work your agency sold to a senior engineering pod — white-label delivery with a numbered ADR trail your client's own reviewer can check.",
    images: ["/og-image.png"],
  },
};

const POD_PROOF = [
  {
    icon: Users,
    title: "Two senior architects, not a bench of juniors",
    body: "The same two architects who scope your client's engagement build and review it end to end. Nothing gets quietly handed off to whoever has spare capacity when your timeline tightens.",
  },
  {
    icon: GitBranch,
    title: "AI leverage, paired with the paper trail",
    body: "We use AI-assisted development to move at the pace a subcontracted engagement demands — and every deviation from the scope you agreed with your client is a numbered ADR citing the exact clause it departs from. The leverage buys speed on the build, not a shortcut on the record of what got decided.",
  },
  {
    icon: FileCheck,
    title: "An audit trail your client's reviewer can check",
    body: "Isolation tests carry positive controls and a security review runs before handover, so when your client's own technical reviewer asks how the system was built, the answer is a document, not a reassurance.",
  },
  {
    icon: Handshake,
    title: "White-label by default",
    body: "We work inside the relationship you already own. Your client sees your agency's name; the audit trail behind the work is what lets you stand behind it.",
  },
];

export default function AgenciesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <PageHero
        eyebrow="For Agencies & CTOs"
        title={
          <>
            Your <GradientText>AI Engineering Pod</GradientText>
          </>
        }
        description="A senior pod that subcontracts the AI work you've already sold — white-label delivery, with the ADR trail your client's reviewer will ask for."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Talk about capacity</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/services/ai-software-development">
              See how we build
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Pain */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              You sold an AI feature because saying no to the client wasn&apos;t
              a real option, and now someone has to actually build it. Staffing
              it with a developer who&apos;s never shipped a grounded retrieval
              system is a bet against your own name — if the output invents a
              number or leaks across a boundary it shouldn&apos;t, your client
              blames your agency, not a subcontractor they never see.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              What you need isn&apos;t another freelancer to manage. It&apos;s a
              senior pod that plugs into the project you&apos;ve already
              scoped, delivers under your relationship with the client, and
              hands you a record you can point to if their own technical
              reviewer starts asking questions.
            </p>
          </div>
          <Card className="mt-10 border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              The problem we solve
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Agencies and fractional CTOs who committed to AI work they can
              staff with confidence, not with a junior learning on the
              client&apos;s codebase — and who need the delivery to hold up
              under whatever scrutiny the client applies to it later.
            </p>
          </Card>
        </div>
      </section>

      {/* Capability proof */}
      <section className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Capacity you can subcontract without embarrassment
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {POD_PROOF.map((point) => (
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
