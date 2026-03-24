"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { PROJECTS, ACCENT_CLASSES } from "@/lib/projects";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";

const featured = PROJECTS.filter((p) => p.featured);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

/** Gradient placeholder shown when a project has no screenshot. */
function ProjectPlaceholder({
  letter,
  gradient,
  accentColor,
}: {
  letter: string;
  gradient: string;
  accentColor: string;
}) {
  const accent = ACCENT_CLASSES[accentColor];
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
    >
      {/* Subtle grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${letter}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${letter})`} />
      </svg>
      {/* Glow orb */}
      <div className="absolute w-32 h-32 rounded-full bg-white/15 blur-2xl" />
      {/* Letter badge */}
      <div
        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-2xl font-black text-white shadow-lg`}
      >
        {letter}
      </div>
    </div>
  );
}

export function PortfolioIntroSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden bg-[#F7FAFC] dark:bg-[#081526] py-20 sm:py-28"
    >
      {/* Background accent blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-5 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-white dark:bg-card shadow-sm"
          >
            Portfolio
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            See what we&apos;ve built
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real integrations, real results. Every project here eliminated
            manual work and gave business owners back hours they didn&apos;t
            know they were losing.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => {
            const accent = ACCENT_CLASSES[project.accentColor];
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-card/60"
              >
                {/* Image / Placeholder area */}
                <div className="relative h-80 w-full shrink-0 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <ProjectImageCarousel
                      images={project.images}
                      alt={`${project.title} — Real Solutions PH, Philippines`}
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} — Real Solutions PH, Philippines`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ProjectPlaceholder
                      letter={project.letter}
                      gradient={project.coverGradient}
                      accentColor={project.accentColor}
                    />
                  )}
                  {/* Client type pill + live site button overlaid */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {project.clientType}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
                      >
                        Live site
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-base font-bold leading-snug">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Outcome pill */}
                  <div className="flex items-center gap-2 rounded-xl border border-black/[0.05] bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                    <TrendingUp
                      className={`h-3.5 w-3.5 shrink-0 ${accent.text}`}
                    />
                    <span className="text-sm font-semibold text-foreground">
                      {project.outcome}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/[0.05] bg-zinc-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground dark:border-white/10 dark:bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <Button
            size="lg"
            className="h-12 rounded-full px-8 text-sm font-semibold shadow-[0_4px_16px_rgba(25,59,118,0.2)] transition-transform hover:scale-105"
            asChild
          >
            <Link href="/work">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            {PROJECTS.length} projects across integration, automation, and
            software development
          </p>
        </motion.div>
      </div>
    </section>
  );
}
