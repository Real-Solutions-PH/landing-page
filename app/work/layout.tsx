import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio",
  description:
    "See real projects built by Real Solutions PH — system integrations, custom software, AI integrations, and web applications for Philippine SMEs and international clients. Based in Batangas, Philippines.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Portfolio & Case Studies — Real Solutions PH",
    description:
      "Real integrations, real results. Projects built for Philippine and international businesses — from IoT waste management platforms to AI-powered pet care systems and recruitment platforms.",
    url: "https://www.realsolutionsph.com/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Real Solutions PH Portfolio — Software Projects Philippines" }],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
