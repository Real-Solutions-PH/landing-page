import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Real Solutions PH | Custom Software & System Integration for Philippine SMEs",
    template: "%s | Real Solutions PH",
  },
  description:
    "Real Solutions PH is a managed software and system integration company in the Philippines. We connect your POS, inventory, CRM, HR, and accounting — production-grade, fully built, and managed for you. Serving Philippine SMEs and international clients.",
  keywords: [
    "custom software Philippines",
    "system integration Philippines",
    "software company Philippines",
    "software company in the Philippines",
    "affordable software development Philippines",
    "outsource software development Philippines",
    "managed software partner Philippines",
    "software outsourcing Philippines",
    "SME software solutions Philippines",
    "API integration Batangas",
    "software development Philippines",
    "workflow automation SME",
    "POS integration Philippines",
    "CRM integration Philippines",
    "AI integration Philippines",
    "MVP development Philippines",
    "software integration company Batangas",
    "business software for SMEs Philippines",
    "business automation Philippines",
    "SME digital transformation Philippines",
    "custom software development Philippines",
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
    title:
      "Real Solutions PH | Custom Software & System Integration for Philippine SMEs",
    description:
      "Connect your POS, inventory, online shop, HR, and accounting into a single coherent system. Built right, managed for you. Serving Philippine SMEs and international clients.",
    url: "https://www.realsolutionsph.com",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH — Custom Software & System Integration for Philippine SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Real Solutions PH | Custom Software & System Integration for Philippine SMEs",
    description:
      "Connect your POS, inventory, online shop, HR, and accounting into a single coherent system. Serving Philippine SMEs and international clients.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://www.realsolutionsph.com/#organization",
                name: "Real Solutions PH",
                url: "https://www.realsolutionsph.com",
                logo: "https://www.realsolutionsph.com/logo/logo-header-light.svg",
                description:
                  "Real Solutions PH is a prototype-first managed software partner for SMEs that need production-grade custom software and integrations — fully built, scalable, and maintained — without the operational overhead, build complexity, management burden, or decision blindness of doing it themselves.",
                priceRange: "₱₱₱",
                areaServed: [
                  { "@type": "Country", name: "Philippines" },
                  { "@type": "AdministrativeArea", name: "International" },
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Batangas",
                  addressRegion: "Batangas",
                  addressCountry: "PH",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "executives.realsolutions.ph@gmail.com",
                  availableLanguage: ["English", "Filipino"],
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Software & Integration Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "System Integration Development",
                        description:
                          "Connect POS, inventory, HR, payroll, CRM, accounting, and e-commerce systems. API and webhook integrations, workflow automation, and operational dashboards.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Software Systems Development",
                        description:
                          "Internal tools, admin panels, portals, industry-specific operational systems, and management platforms.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Website and Web Application Development",
                        description:
                          "Marketing websites, lead-generation websites, portals, and web-based operational applications.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Mobile Application Development",
                        description:
                          "Customer-facing mobile apps, internal operations apps, staff tools, and hybrid mobile systems.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "AI Integration and Custom AI Development",
                        description:
                          "AI-assisted internal workflows, document and knowledge assistants, embedded AI chat systems, and AI-powered automation.",
                      },
                    },
                  ],
                },
                sameAs: [
                  "https://www.linkedin.com/company/real-solutions-ph",
                  "https://github.com/Real-Solutions-PH",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.realsolutionsph.com/#website",
                url: "https://www.realsolutionsph.com",
                name: "Real Solutions PH",
                description:
                  "Custom software and system integration company in the Philippines serving Philippine SMEs and international clients.",
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
