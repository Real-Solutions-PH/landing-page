"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { PROJECTS, ACCENT_CLASSES } from "@/lib/projects";
import { ProjectImageCarousel } from "@/components/ui/project-image-carousel";

const ALL_TAGS = ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function ProjectPlaceholder({
  letter,
  gradient,
}: {
  letter: string;
  gradient: string;
}) {
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`wk-grid-${letter}`}
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
        <rect width="100%" height="100%" fill={`url(#wk-grid-${letter})`} />
      </svg>
      <div className="absolute w-32 h-32 rounded-full bg-white/15 blur-2xl" />
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-2xl font-black text-white shadow-lg">
        {letter}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#102A52] pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute h-[400px] w-[400px] -left-20 top-10 rounded-full bg-sky-400/20 blur-[120px]" />
          <div className="absolute h-[300px] w-[300px] right-0 bottom-0 rounded-full bg-primary/20 blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] border-white/20 bg-white/10 text-white/70 shadow-sm"
            >
              Our Portfolio
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Software portfolio —<br className="hidden sm:block" /> Real Solutions PH, Philippines
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Every project here is a Philippine or international business that stopped copying and pasting and started scaling. Here&apos;s how we did it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="relative w-full py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-wrap justify-center gap-2"
          >
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeTag === tag
                    ? "border-primary bg-primary text-white shadow-[0_4px_12px_rgba(25,59,118,0.3)]"
                    : "border-black/10 bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground dark:border-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            key={activeTag}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((project) => {
              const accent = ACCENT_CLASSES[project.accentColor];
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-card/50"
                >
                  {/* Image */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden">
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
                      />
                    )}
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
                  <div className="flex flex-1 flex-col gap-4 p-6 text-left">
                    <h2 className="text-base font-bold leading-snug">
                      {project.title}
                    </h2>

                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Metric stat */}
                    <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                      <TrendingUp className={`h-3.5 w-3.5 shrink-0 ${accent.text}`} />
                      <span className="text-sm font-semibold text-foreground">
                        {project.outcome}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/5 bg-zinc-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground dark:border-white/10 dark:bg-white/10"
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

          {filtered.length === 0 && (
            <div className="py-24 text-center text-muted-foreground">
              No projects found for &quot;{activeTag}&quot;.
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
