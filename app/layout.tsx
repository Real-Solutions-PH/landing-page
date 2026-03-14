import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Solutions PH | We connect your tools",
  description: "Real Solutions PH designs, builds, and maintains custom integrations between the software tools your business already uses.",
  keywords: ["integration", "automation", "software development", "Philippines", "SME solutions"],
  openGraph: {
    title: "Real Solutions PH | Custom Integrations for SMEs",
    description: "Connect your POS, inventory, online shop, HR, and accounting into a single coherent flow.",
    url: "https://realsolutions.ph",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "website",
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
      </body>
    </html>
  );
}
