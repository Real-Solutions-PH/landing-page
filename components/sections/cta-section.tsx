"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  name: string;
  email: string;
  company: string;
  problem: string;
};

export function CtaSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

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
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Book a Discovery Audit
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Start with a Discovery Audit — we’ll map your problem and show you what’s possible. No commitment required.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">📞</span>
              <span>No commitment required</span>
            </div>
          </div>

          <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:bg-card">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">✅</span>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">We got your message!</h3>
                <p className="text-sm text-zinc-500">We&apos;ll reach out within 1 business day to set up your free discovery call.</p>
                <Button variant="outline" className="mt-2 rounded-xl" onClick={() => setStatus("idle")}>
                  Submit another
                </Button>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input
                    id="name"
                    placeholder="Juan Dela Cruz"
                    className="rounded-xl h-12"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p className="text-xs text-red-500">Full name is required.</p>}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@company.com"
                    className="rounded-xl h-12"
                    {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                  />
                  {errors.email && <p className="text-xs text-red-500">A valid email address is required.</p>}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                  <Input
                    id="company"
                    placeholder="Acme Corp"
                    className="rounded-xl h-12"
                    {...register("company")}
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="problem" className="text-sm font-medium">Biggest operational problem?</label>
                  <Textarea
                    id="problem"
                    placeholder="Tell us what's broken or takes too much time..."
                    className="rounded-xl min-h-[100px] resize-none"
                    {...register("problem", { required: true })}
                  />
                  {errors.problem && <p className="text-xs text-red-500">Please describe your problem.</p>}
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500 text-center">Something went wrong. Please try again or email us directly.</p>
                )}

                <Button
                  size="lg"
                  className="mt-2 h-12 rounded-xl text-base w-full shadow-sm shadow-primary/20 hover:-translate-y-0.5"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending…" : "Submit Request"}
                </Button>

                <div className="relative mt-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-card px-2 text-zinc-500">Or book directly</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="mt-2 h-12 rounded-xl text-base w-full hover:-translate-y-0.5"
                  asChild
                  type="button"
                >
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
