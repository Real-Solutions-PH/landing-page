import { Metadata } from "next";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Book a Discovery Audit",
  description:
    "Book a Discovery Audit with Real Solutions PH. We map your workflow, identify integration opportunities, and deliver a clear roadmap with estimates.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Discovery Audit",
    description:
      "Book a Discovery Audit with Real Solutions PH. We map your workflow, identify integration opportunities, and deliver a clear roadmap with estimates.",
    url: "https://www.realsolutionsph.com/contact",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book a Discovery Audit — Real Solutions PH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Discovery Audit",
    description:
      "Book a Discovery Audit with Real Solutions PH. We map your workflow, identify integration opportunities, and deliver a clear roadmap with estimates.",
    images: ["/og-image.png"],
  },
};

const TRUST_CHIPS = [
  { icon: Clock, label: "Replies within 1 business day" },
  { icon: ShieldCheck, label: "Fixed-scope estimate" },
  { icon: CheckCircle2, label: "No commitment to build" },
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background pt-24">
      <div className="container mx-auto max-w-3xl px-4 pt-12 pb-4 text-center md:px-6 sm:pt-16">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Get in touch
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Book a Discovery Audit
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          We map exactly what&apos;s failing in your current workflow and
          propose a clear path forward — no vague estimates, no wasted budget.
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {TRUST_CHIPS.map((chip) => (
            <li key={chip.label} className="inline-flex items-center gap-2">
              <chip.icon className="h-4 w-4 text-accent" aria-hidden="true" />
              {chip.label}
            </li>
          ))}
        </ul>
      </div>
      <ContactSection />
    </main>
  );
}
