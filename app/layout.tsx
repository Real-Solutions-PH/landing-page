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
    default: "Real Solutions PH | Custom Software & Integrations for SMEs",
    template: "%s | Real Solutions PH",
  },
  description: "Real Solutions PH designs, builds, and maintains custom software integrations for Filipino SMEs — connecting your POS, inventory, CRM, HR, and accounting into one seamless system.",
  keywords: [
    "custom software Philippines",
    "system integration Philippines",
    "SME software solutions",
    "API integration Batangas",
    "software development Philippines",
    "workflow automation SME",
    "POS integration Philippines",
    "CRM integration Philippines",
    "Real Solutions PH",
  ],
  metadataBase: new URL("https://www.realsolutionsph.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/logo-dark-transparent.svg",
    shortcut: "/logo/logo-dark-transparent.svg",
    apple: "/logo/logo-dark-transparent.svg",
  },
  openGraph: {
    title: "Real Solutions PH | Custom Software & Integrations for SMEs",
    description: "Connect your POS, inventory, online shop, HR, and accounting into a single coherent system. Built right, managed for you.",
    url: "https://www.realsolutionsph.com",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH — Custom Software & Integrations for Philippine SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Solutions PH | Custom Software & Integrations for SMEs",
    description: "Connect your POS, inventory, online shop, HR, and accounting into a single coherent system.",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Real Solutions PH",
              url: "https://www.realsolutionsph.com",
              logo: "https://www.realsolutionsph.com/logo/logo-header-light-transparent 1.svg",
              description:
                "Real Solutions PH designs, builds, and maintains custom software integrations for Filipino SMEs — connecting POS, inventory, CRM, HR, and accounting into one seamless system.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Batangas",
                addressCountry: "PH",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "executives.realsolutions.ph@gmail.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/real-solutions-ph",
                "https://github.com/Real-Solutions-PH",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-accent/20`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
