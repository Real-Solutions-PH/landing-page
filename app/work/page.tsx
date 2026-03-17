"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { PROJECTS, ACCENT_CLASSES } from "@/lib/projects";

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
              Real integrations,<br className="hidden sm:block" /> real results
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Every project here is a business that stopped copying and pasting and started
              scaling. Here&apos;s how we did it.
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
                  className="group flex flex-col gap-5 rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-card/50"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl font-black ${accent.bg} ${accent.text}`}
                    >
                      {project.letter}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {project.clientType}
                      </p>
                      <h2 className="mt-0.5 text-lg font-bold leading-snug">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Outcome */}
                  <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                    <div className={`h-2 w-2 shrink-0 rounded-full ${accent.dot}`} />
                    <span className="text-sm font-semibold text-foreground">
                      {project.outcome}
                    </span>
                  </div>

                  {/* Tags + Service */}
                  <div className="flex flex-col gap-3 pt-1 border-t border-black/5 dark:border-white/10">
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
                    <p className="text-xs text-muted-foreground/70">
                      Service:{" "}
                      <span className="font-medium text-muted-foreground">
                        {project.service}
                      </span>
                    </p>
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

      {/* CTA banner */}
      <section className="w-full bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-between gap-8 rounded-[32px] border border-primary/20 bg-primary/5 p-10 text-center shadow-[0_20px_40px_rgba(25,59,118,0.08)] dark:bg-primary/10 md:flex-row md:text-left"
          >
            <div className="flex flex-col gap-2 max-w-xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Want results like these?
              </h2>
              <p className="text-muted-foreground">
                Book a free 30-minute discovery call. We&apos;ll map out which integrations
                will have the biggest impact on your business — no commitment required.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button
                size="lg"
                className="h-14 rounded-md px-8 text-base shadow-[0_8px_24px_rgba(25,59,118,0.25)] flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white border-0 transition-transform hover:scale-105"
                asChild
              >
                <a
                  href="https://calendly.com/executives-realsolutions-ph/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Zap className="h-5 w-5 fill-current" />
                  <span className="font-semibold">Book a Discovery Call</span>
                </a>
              </Button>
              <Link
                href="/#services"
                className="flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View our services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
