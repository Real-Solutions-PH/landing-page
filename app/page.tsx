import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <WhyUsSection />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
