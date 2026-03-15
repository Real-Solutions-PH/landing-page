import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Solutions PH | We connect your tools",
  description: "Real Solutions PH designs, builds, and maintains custom integrations between the software tools your business already uses.",
  keywords: ["integration", "automation", "software development", "Philippines", "SME solutions"],
  metadataBase: new URL("https://realsolutions.ph"),
  icons: {
    icon: "/logo/logo-dark-transparent.svg",
    shortcut: "/logo/logo-dark-transparent.svg",
    apple: "/logo/logo-dark-transparent.svg",
  },
  openGraph: {
    title: "Real Solutions PH | Custom Integrations for SMEs",
    description: "Connect your POS, inventory, online shop, HR, and accounting into a single coherent flow.",
    url: "https://realsolutions.ph",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/logo/logo-header-light.svg",
        width: 932,
        height: 621,
        alt: "Real Solutions PH Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Solutions PH | Custom Integrations for SMEs",
    description: "Connect your POS, inventory, online shop, HR, and accounting into a single coherent flow.",
    images: ["/logo/logo-header-light.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-accent/20`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
