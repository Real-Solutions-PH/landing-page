"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-20">
        <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute h-[300px] w-[300px] translate-x-1/2 translate-y-1/4 rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <Badge variant="secondary" className="mb-4 py-1px px-3 uppercase tracking-widest text-[9px] text-primary bg-primary/10 border-primary/20 shadow-sm">
            Integration & Automation
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-[1.1]">
            We connect your tools. <br className="hidden sm:block" />
            <span className="text-muted-foreground">You run your business.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Stop gluing your business together with spreadsheets. We design, build, and maintain custom integrations so your data flows automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="h-14 rounded-full px-8 text-base shadow-[0_8px_24px_rgba(25,59,118,0.25)]" asChild>
            <Link href="#contact">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 rounded-full px-8 text-base shadow-sm" asChild>
            <Link href="#services">See Our Services</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative mt-20 w-full max-w-3xl"
        >
          {/* Animated Integration Visualization Component Placeholder */}
          <div className="flex h-64 w-full items-center justify-center rounded-[32px] border border-black/5 bg-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md dark:bg-gray-800">
                <span className="text-xl font-bold">POS</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-0.5 w-12 bg-gradient-to-r from-primary/50 to-accent/50 sm:w-20" />
                <div className="h-0.5 w-12 bg-gradient-to-l from-primary/50 to-accent/50 sm:w-20" />
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-tr from-primary to-accent text-white shadow-xl ring-8 ring-accent/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-0.5 w-12 bg-gradient-to-r from-accent/50 to-primary/50 sm:w-20" />
                <div className="h-0.5 w-12 bg-gradient-to-l from-accent/50 to-primary/50 sm:w-20" />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md dark:bg-gray-800">
                <span className="text-xl font-bold">ERP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
