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
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function ProjectPlaceholder({
  letter,
  gradient,
  accentColor,
}: {
  letter: string;
  gradient: string;
  accentColor: string;
}) {
  // accentColor used to pick text shade if needed in the future
  void accentColor;
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
            id={`fw-grid-${letter}`}
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
        <rect width="100%" height="100%" fill={`url(#fw-grid-${letter})`} />
      </svg>
      <div className="absolute w-28 h-28 rounded-full bg-white/15 blur-2xl" />
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-2xl font-black text-white shadow-lg">
        {letter}
      </div>
    </div>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-white dark:bg-black shadow-sm"
            >
              Our Work
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Real integrations, real results
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Here&apos;s a sample of what we&apos;ve built for Philippine and
              SEA businesses.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full max-w-6xl gap-6 md:grid-cols-3"
          >
            {featured.map((project) => {
              const accent = ACCENT_CLASSES[project.accentColor];
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_24px_48px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-card/50"
                >
                  {/* Image */}
                  <div className="relative h-56 w-full shrink-0 overflow-hidden">
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
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Client type + live link row */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-white/15 border border-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                        {project.clientType}
                      </span>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 rounded-full bg-white/15 border border-white/20 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm hover:bg-white/25 transition-colors"
                        >
                          Live site
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col gap-4 p-6 text-left">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                        {project.service}
                      </p>
                      <h3 className="text-base font-bold leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Metric stat */}
                    <div
                      className={`flex items-start gap-3 rounded-xl ${accent.bg} px-4 py-3`}
                    >
                      <TrendingUp
                        className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`}
                      />
                      <span
                        className={`text-sm font-bold leading-snug ${accent.text}`}
                      >
                        {project.outcome}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-black/5 dark:border-white/10">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Button
              variant="outline"
              className="rounded-full h-12 px-8"
              asChild
            >
              <Link href="/work">
                See all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
