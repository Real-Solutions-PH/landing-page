"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { posts } from "@/lib/blog";
import { ACCENT_CLASSES } from "@/lib/projects";
import { PageHero, GradientText } from "@/components/sections/page-hero";

const ALL_TOPICS = ["All", ...Array.from(new Set(posts.map((p) => p.topic)))];

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

export function InsightsContent() {
  const [activeTopic, setActiveTopic] = useState("All");

  const filtered =
    activeTopic === "All"
      ? posts
      : posts.filter((p) => p.topic === activeTopic);

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Insights"
        maxWidth="max-w-5xl"
        titleClassName="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]"
        title={
          <>
            <GradientText>AI engineering</GradientText> —
            <br className="hidden sm:block" /> explained in plain terms
          </>
        }
        description="Practical guides on grounding guards, tenant isolation, RAG architecture, and what an AI MVP actually costs."
      />

      {/* Filter + Grid */}
      <section className="relative w-full py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-wrap justify-center gap-2"
          >
            {ALL_TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeTopic === topic
                    ? "border-primary bg-primary text-white shadow-[0_4px_12px_rgba(25,59,118,0.3)]"
                    : "border-black/10 bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground dark:border-white/10"
                }`}
              >
                {topic}
              </button>
            ))}
          </motion.div>

          {/* Post grid */}
          <motion.div
            key={activeTopic}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((post) => {
              const accent = ACCENT_CLASSES[post.accentColor];
              return (
                <motion.article key={post.slug} variants={itemVariants}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-card/50"
                  >
                    {/* Cover */}
                    <div className="relative h-44 w-full shrink-0 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={`${post.title} — an article by Real Solutions PH`}
                        fill
                        sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                          {post.topic}
                        </span>
                        <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                          {post.readMinutes} min read
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col gap-4 p-6 text-left">
                      <span className="text-xs text-muted-foreground">
                        {post.dateLabel}
                      </span>

                      <h2 className="text-base font-bold leading-snug">
                        {post.title}
                      </h2>

                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>

                      {/* Takeaway */}
                      <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                        <Lightbulb
                          className={`h-3.5 w-3.5 shrink-0 ${accent.text}`}
                        />
                        <span className="text-sm font-semibold text-foreground">
                          {post.takeaway}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/5 bg-zinc-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground dark:border-white/10 dark:bg-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-muted-foreground">
              No articles found for &quot;{activeTopic}&quot;.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
