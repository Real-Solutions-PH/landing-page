"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS, ACCENT_CLASSES } from "@/lib/projects";

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
              Here&apos;s a sample of what we&apos;ve built for Philippine and SEA businesses.
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
                  className="flex flex-col gap-5 rounded-[32px] border border-black/5 bg-white p-8 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-card/50"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl font-black ${accent.bg} ${accent.text}`}
                    >
                      {project.letter}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {project.clientType}
                      </p>
                      <h3 className="mt-0.5 text-base font-bold leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                    <div className={`h-2 w-2 shrink-0 rounded-full ${accent.dot}`} />
                    <span className="text-sm font-semibold text-foreground">
                      {project.outcome}
                    </span>
                  </div>

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
            <Button variant="outline" className="rounded-full h-12 px-8" asChild>
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
