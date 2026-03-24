import { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Book a Discovery Audit",
  description:
    "Start with a paid Discovery Audit from Real Solutions PH. We map your workflow gaps, identify software opportunities, and show you exactly what to build — with a full roadmap and estimate delivered.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Discovery Audit — Real Solutions PH",
    description:
      "We map your operational problems and deliver a full solution roadmap and estimate. No vague proposals — just clarity on what to build and how to get there.",
    url: "https://www.realsolutionsph.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book a Discovery Audit",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Book a Discovery Audit with Real Solutions PH
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We start with a paid Discovery Audit to map exactly what&apos;s
          failing in your current workflow and propose a clear path forward — no
          vague estimates, no wasted budget.
        </p>
      </div>
      <CtaSection />
    </main>
  );
}
