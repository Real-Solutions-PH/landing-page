"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CtaSection() {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-12 rounded-[40px] bg-primary p-8 md:flex-row md:p-16 lg:p-20"
        >
          <div className="flex max-w-md flex-col text-left text-white">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to connect your business?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Stop letting manual data entry hold your business back. Get a free estimate for your integration project today.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">📞</span>
              <span>Free 30-min Discovery Call</span>
            </div>
          </div>

          <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:bg-card">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                <Input id="name" placeholder="Juan Dela Cruz" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <Input id="email" type="email" placeholder="juan@company.com" className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="tools" className="text-sm font-medium">Tools you use (e.g., Shopify, Xero)</label>
                <Input id="tools" placeholder="Shopify, Xero, POS..." className="rounded-xl h-12" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="problem" className="text-sm font-medium">Biggest operational problem?</label>
                <Textarea 
                  id="problem" 
                  placeholder="Tell us what's broken or takes too much time..." 
                  className="rounded-xl min-h-[100px] resize-none" 
                />
              </div>
              <Button size="lg" className="mt-2 h-12 rounded-xl text-base w-full shadow-sm shadow-primary/20 hover:-translate-y-0.5" type="submit">
                Get Your Free Estimate
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
