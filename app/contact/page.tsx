import { Metadata } from "next";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Book a Scoping Call",
  description:
    "Book a scoping call with Real Solutions. We'll scope the build, give you a fixed-price estimate, and tell you plainly whether we're the right fit — no commitment.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Scoping Call",
    description:
      "Book a scoping call with Real Solutions. We'll scope the build, give you a fixed-price estimate, and tell you plainly whether we're the right fit — no commitment.",
    url: "https://www.realsolutionsph.com/contact",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "Book a Scoping Call — Real Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Scoping Call",
    description:
      "Book a scoping call with Real Solutions. We'll scope the build, give you a fixed-price estimate, and tell you plainly whether we're the right fit — no commitment.",
    images: ["/api/og-image"],
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
          Book a Scoping Call
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Tell us what you&apos;re building. We&apos;ll scope it, give you a
          fixed-price estimate, and tell you plainly whether we&apos;re the
          right fit — no commitment.
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
