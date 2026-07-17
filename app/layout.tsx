import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { services } from "@/lib/services";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Real Solutions PH — AI Systems, Shipped in Weeks",
    template: "%s | Real Solutions PH",
  },
  description:
    "Senior AI engineering studio. Production RAG, agents, and voice systems with grounded output and provable tenant isolation — shipped in weeks, not quarters.",
  keywords: [
    "AI MVP development agency",
    "RAG development company",
    "AI agent development",
    "LangGraph developers for hire",
    "build AI agent MVP",
    "multi-tenant RAG platform",
    "EU AI data residency",
    "GDPR compliant AI vendor",
    "LLM security audit",
    "white label AI development",
    "AI engineering pod",
    "subcontract AI development",
    "Postgres RLS tenant isolation",
    "LLM grounding guard",
    "Pipecat voice agent",
    "production RAG system",
    "Real Solutions PH",
  ],
  metadataBase: new URL("https://www.realsolutionsph.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/logo-dark.svg",
    shortcut: "/logo/logo-dark.svg",
    apple: "/logo/logo-dark.svg",
  },
  openGraph: {
    title: "Real Solutions PH — AI Systems, Shipped in Weeks",
    description:
      "Senior AI engineering studio. Production RAG, agents, and voice systems with grounded output and provable tenant isolation — shipped in weeks, not quarters.",
    url: "https://www.realsolutionsph.com",
    siteName: "Real Solutions PH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH — AI Systems, Shipped in Weeks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@realsolutionsph",
    creator: "@realsolutionsph",
    title: "Real Solutions PH — AI Systems, Shipped in Weeks",
    description:
      "Senior AI engineering studio. Production RAG, agents, and voice systems with grounded output and provable tenant isolation — shipped in weeks, not quarters.",
    images: ["/api/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // Organization + ProfessionalService schema (LocalBusiness/geo removed —
              // international positioning, no service-area targeting).
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "ProfessionalService"],
                "@id": "https://www.realsolutionsph.com/#organization",
                name: "Real Solutions PH",
                url: "https://www.realsolutionsph.com",
                logo: "https://www.realsolutionsph.com/logo/logo-header-light.svg",
                image:
                  "https://www.realsolutionsph.com/api/og-image",
                description:
                  "Real Solutions PH is a senior AI engineering studio shipping production-grade AI systems — RAG, agents, and voice AI — in three to four weeks. AI runs every step of the build; a lead architect verifies every output, with grounding guards, provable tenant isolation, and numbered ADRs. For startups, regulated enterprise, and agencies worldwide.",
                areaServed: {
                  "@type": "Place",
                  name: "Worldwide",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "executives.realsolutions.ph@gmail.com",
                  availableLanguage: ["English"],
                },
                founder: [
                  {
                    "@type": "Person",
                    name: "Ervin Piol",
                    jobTitle: "Co-Founder & CEO",
                  },
                  {
                    "@type": "Person",
                    name: "Kairus Noah Tecson",
                    jobTitle: "Co-Founder & CTO",
                  },
                ],
                knowsAbout: services.map((s) => s.name),
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "AI Engineering Services",
                  itemListElement: services.map((s) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: s.h1,
                      description: s.tagline,
                    },
                  })),
                },
                sameAs: [
                  "https://www.linkedin.com/company/real-solutions-ph",
                  "https://github.com/Real-Solutions-PH",
                ],
              },
              // WebSite schema with search action
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.realsolutionsph.com/#website",
                url: "https://www.realsolutionsph.com",
                name: "Real Solutions PH",
                description:
                  "Real Solutions PH — a senior AI engineering studio shipping production AI systems for startups, regulated enterprise, and agencies worldwide.",
                publisher: {
                  "@id": "https://www.realsolutionsph.com/#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://www.realsolutionsph.com/?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              // BreadcrumbList schema for site navigation
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.realsolutionsph.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.realsolutionsph.com/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "How We Work",
                    item: "https://www.realsolutionsph.com/how-we-work",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Work",
                    item: "https://www.realsolutionsph.com/work",
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "Insights",
                    item: "https://www.realsolutionsph.com/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 6,
                    name: "About",
                    item: "https://www.realsolutionsph.com/about",
                  },
                  {
                    "@type": "ListItem",
                    position: 7,
                    name: "Pricing",
                    item: "https://www.realsolutionsph.com/pricing",
                  },
                  {
                    "@type": "ListItem",
                    position: 8,
                    name: "Contact",
                    item: "https://www.realsolutionsph.com/contact",
                  },
                  {
                    "@type": "ListItem",
                    position: 9,
                    name: "For Startups",
                    item: "https://www.realsolutionsph.com/for/startups",
                  },
                  {
                    "@type": "ListItem",
                    position: 10,
                    name: "For Enterprise",
                    item: "https://www.realsolutionsph.com/for/enterprise",
                  },
                  {
                    "@type": "ListItem",
                    position: 11,
                    name: "For Agencies",
                    item: "https://www.realsolutionsph.com/for/agencies",
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-accent/20`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
