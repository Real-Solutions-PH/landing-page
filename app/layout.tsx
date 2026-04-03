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
    "Real Solutions PH is a managed software and system integration company in Batangas, Philippines. We build custom software, connect your POS, inventory, CRM, HR, and accounting — production-grade, fully built, and managed for you. Affordable software development for Philippine SMEs and international clients.",
  keywords: [
    // Tier 1: High-intent commercial
    "custom software development Philippines",
    "software company Philippines",
    "system integration Philippines",
    "software development company Philippines",
    "outsource software development Philippines",
    "hire software developers Philippines",
    "custom software for small business Philippines",
    "POS integration Philippines",
    "software outsourcing Philippines",
    "affordable software development Philippines",
    // Tier 2: Service-specific
    "CRM integration Philippines",
    "inventory management software Philippines",
    "mobile app development Philippines",
    "web application development Philippines",
    "AI integration services Philippines",
    "API integration services Philippines",
    "ERP integration Philippines",
    "business automation Philippines",
    "managed software services Philippines",
    "software maintenance Philippines",
    // Tier 3: Problem-aware
    "software development cost Philippines",
    "best software company for SME Philippines",
    "SME digital transformation Philippines",
    "business process automation Philippines",
    "software for Filipino small business",
    "workflow automation for small business",
    // Tier 4: Location-based
    "software company Batangas",
    "IT company Batangas Philippines",
    "software developer Philippines",
    // Tier 5: International outsourcing
    "outsource software development to Philippines",
    "Philippine software development rates",
    "hire Filipino developers",
    "offshore software development Philippines",
    "cost-effective software development Asia",
    "senior software engineers Philippines",
    // Brand
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
      "Custom software development and system integration company in the Philippines. Connect your POS, inventory, online shop, HR, and accounting into a single coherent system. Built right, managed for you. Serving Philippine SMEs and international clients.",
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
      "Custom software development and system integration company in the Philippines. Connect your POS, inventory, online shop, HR, and accounting into a single coherent system. Serving Philippine SMEs and international clients.",
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
              // Organization + ProfessionalService schema
              {
                "@context": "https://schema.org",
                "@type": ["ProfessionalService", "SoftwareApplication"],
                "@id": "https://www.realsolutionsph.com/#organization",
                name: "Real Solutions PH",
                url: "https://www.realsolutionsph.com",
                logo: "https://www.realsolutionsph.com/logo/logo-header-light.svg",
                image:
                  "https://www.realsolutionsph.com/og-image.png",
                description:
                  "Real Solutions PH is a custom software development and system integration company in Batangas, Philippines. We build production-grade software for Philippine SMEs and international clients — prototype-first, fully managed, from discovery to long-term retainer.",
                priceRange: "₱₱₱",
                areaServed: [
                  {
                    "@type": "Country",
                    name: "Philippines",
                  },
                  {
                    "@type": "AdministrativeArea",
                    name: "International",
                  },
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Batangas",
                  addressRegion: "Batangas",
                  addressCountry: "PH",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 13.7565,
                  longitude: 121.0583,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "executives.realsolutions.ph@gmail.com",
                  availableLanguage: ["English", "Filipino"],
                },
                founder: [
                  {
                    "@type": "Person",
                    name: "Ervin Piol",
                    jobTitle: "Co-Founder & Full-Stack Engineer",
                  },
                  {
                    "@type": "Person",
                    name: "Kairus Noah Tecson",
                    jobTitle: "Co-Founder & AI/Cloud Engineer",
                  },
                ],
                knowsAbout: [
                  "Custom Software Development",
                  "System Integration",
                  "API Development",
                  "Mobile App Development",
                  "AI Integration",
                  "Web Application Development",
                  "POS Integration",
                  "CRM Integration",
                  "ERP Integration",
                  "Business Process Automation",
                  "Workflow Automation",
                  "Software Maintenance",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Software Development & Integration Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "System Integration Development",
                        description:
                          "Connect POS, inventory, HR, payroll, CRM, accounting, and e-commerce systems. API and webhook integrations, workflow automation, and operational dashboards for Philippine SMEs.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Software Development",
                        description:
                          "Internal tools, admin panels, portals, industry-specific operational systems, and management platforms. Production-grade custom software for small businesses in the Philippines.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Website and Web Application Development",
                        description:
                          "Marketing websites, lead-generation websites, portals, and web-based operational applications. SEO-optimized and high-performance websites for Philippine businesses.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Mobile Application Development",
                        description:
                          "Customer-facing mobile apps, internal operations apps, staff tools, and cross-platform mobile systems for iOS and Android.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "AI Integration and Custom AI Development",
                        description:
                          "AI-assisted internal workflows, document and knowledge assistants, embedded AI chat systems, and AI-powered business automation.",
                      },
                    },
                  ],
                },
                sameAs: [
                  "https://www.linkedin.com/company/real-solutions-ph",
                  "https://github.com/Real-Solutions-PH",
                ],
              },
              // LocalBusiness schema for Batangas local SEO
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.realsolutionsph.com/#localbusiness",
                name: "Real Solutions PH",
                description:
                  "Custom software development and system integration company in Batangas, Philippines. Affordable software solutions for SMEs.",
                url: "https://www.realsolutionsph.com",
                telephone: "",
                email: "executives.realsolutions.ph@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Batangas",
                  addressRegion: "Batangas",
                  addressCountry: "PH",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 13.7565,
                  longitude: 121.0583,
                },
                priceRange: "₱₱₱",
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
              // WebSite schema with search action
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.realsolutionsph.com/#website",
                url: "https://www.realsolutionsph.com",
                name: "Real Solutions PH",
                description:
                  "Custom software development and system integration company in Batangas, Philippines serving Philippine SMEs and international clients.",
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
                    name: "About",
                    item: "https://www.realsolutionsph.com/about",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Portfolio",
                    item: "https://www.realsolutionsph.com/work",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Pricing",
                    item: "https://www.realsolutionsph.com/pricing",
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "Contact",
                    item: "https://www.realsolutionsph.com/contact",
                  },
                ],
              },
              // FAQ schema for rich snippets
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How much does custom software development cost in the Philippines?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "At Real Solutions PH, custom software development starts from ₱42,000 (approximately $3,500 USD) for basic systems, and scales based on complexity. System integration projects start from ₱10,000, and managed retainers from ₱3,500/month. We offer transparent pricing with no hidden fees.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What services does Real Solutions PH offer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We offer five core services: System Integration Development (connecting POS, inventory, CRM, HR, accounting), Custom Software Systems (admin panels, portals, internal tools), Website & Web Application Development, Mobile App Development (iOS & Android), and AI Integration (chatbots, workflow automation, knowledge assistants).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does the software development process work at Real Solutions PH?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We follow a 4-step process: (1) Discovery Audit — we map your problem in 3-7 days, (2) Prototype Sprint — see and react to your solution in 1-2 weeks, (3) MVP Build — production-grade software in 3-8 weeks, (4) Managed Growth — ongoing support, maintenance, and feature development on a retainer basis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you integrate my existing POS, inventory, and accounting systems?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, system integration is our flagship service. We connect POS systems, inventory management, HR/payroll, CRM, accounting software (Xero, QuickBooks), and e-commerce platforms (Shopify, Lazada) into a unified operational system with real-time data sync and automated workflows.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you work with international clients outside the Philippines?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we serve both Philippine SMEs and international clients. International clients benefit from senior Filipino engineering talent at cost-effective rates. We offer USD pricing for international projects, with the same production-grade quality and managed service approach.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where is Real Solutions PH located?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Real Solutions PH is based in Batangas, Philippines. We operate as a remote-first company, serving clients across the Philippines and internationally. Our founders are former startup engineering leaders with deep expertise in full-stack development, cloud infrastructure, and AI.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is a Discovery Audit and how much does it cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A Discovery Audit is a paid engagement (₱10,000–₱22,000 for Philippine clients, $700–$1,200 for international clients) where we map your current workflow, identify software opportunities, and deliver a full solution roadmap with project estimates. The audit fee credits toward your MVP build if you proceed.",
                    },
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
