import { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Book a Discovery Audit",
  description: "Book a free 30-minute Discovery Audit with Real Solutions PH. We'll map your workflow gaps and show you exactly what's possible — no commitment required.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Discovery Audit — Real Solutions PH",
    description: "Free 30-minute discovery call. We map your problem and show you what's possible, no commitment.",
    url: "https://www.realsolutionsph.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Book a Discovery Audit" }],
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Let&apos;s talk about your systems
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We typically start with a 30-minute discovery call to learn exactly what&apos;s failing in your current workflow and propose a path forward.
        </p>
      </div>
      <CtaSection />
    </main>
  );
}
