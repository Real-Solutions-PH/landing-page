import { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the founders of Real Solutions PH — engineers who build tailored business software for Philippine SMEs. Learn about our mission, team, and approach.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Real Solutions PH",
    description: "Engineers who bridge technical solutions with business needs. Meet Ervin and Kairus, the founders of Real Solutions PH.",
    url: "https://www.realsolutionsph.com/about",
    images: [{ url: "/api/og-image", width: 1200, height: 630, alt: "Real Solutions PH Team" }],
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          The team behind the tech
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We’re engineers who understand both clean architecture and business reality.
        </p>
      </div>
      <AboutSection />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
