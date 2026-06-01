"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Route,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  name: string;
  email: string;
  tools: string;
  problem: string;
};

const STEPS = [
  {
    icon: Route,
    title: "Discovery Audit",
    body: "We map exactly what's failing in your current workflow and where the time leaks are.",
  },
  {
    icon: ShieldCheck,
    title: "Clear roadmap + fixed estimate",
    body: "You get a concrete path forward — scope, timeline, and price. No vague guesses.",
  },
  {
    icon: Send,
    title: "We build & integrate",
    body: "Prototype-first delivery that connects your tools and ships to production.",
  },
];

const CALENDLY_URL =
  "https://calendly.com/executives-realsolutions-ph/30min";
const CONTACT_EMAIL = "executives.realsolutions.ph@gmail.com";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

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

  const entrance = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background py-16 sm:py-24"
    >
      {/* decorative accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container relative mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* ── Left: brand info panel ───────────────────────────────── */}
        <motion.div
          {...entrance}
          className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#16356b] to-[#0b1d3c] p-8 text-white md:p-10 lg:rounded-4xl"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 ring-1 ring-inset ring-white/15">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Booking new projects
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s map your workflow
            </h2>
            <p className="mt-3 max-w-md text-base text-white/70">
              Start with a paid Discovery Audit. We pinpoint what&apos;s broken
              and hand you a clear, costed roadmap — no wasted budget.
            </p>

            {/* what happens next */}
            <ol className="mt-8 space-y-5">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                    <step.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <span className="text-white/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-sm text-white/60">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* direct contact + socials */}
          <div className="relative mt-10 border-t border-white/10 pt-6">
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <CalendarClock className="h-4 w-4 text-accent" aria-hidden="true" />
                  Book a 30-min intro call
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                Batangas, Philippines
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                Replies within 1 business day
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/real-solutions-ph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Real Solutions PH on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Real-Solutions-PH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Real Solutions PH on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Right: form card ─────────────────────────────────────── */}
        <motion.div
          {...entrance}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.6, ease: "easeOut", delay: 0.1 }
          }
          className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-8 lg:rounded-4xl"
        >
          {/* polite live region for screen readers */}
          <p className="sr-only" role="status" aria-live="polite">
            {status === "loading"
              ? "Sending your message"
              : status === "success"
                ? "Your message was sent"
                : status === "error"
                  ? "Something went wrong sending your message"
                  : ""}
          </p>

          {status === "success" ? (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-4 py-12 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">We got your message!</h3>
              <p className="max-w-xs text-sm text-muted-foreground">
                We&apos;ll reach out within 1 business day to set up your
                Discovery Audit.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="mt-2"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="mb-1">
                <h3 className="text-xl font-bold tracking-tight">
                  Tell us what to fix
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fields marked{" "}
                  <span className="text-destructive">*</span> are required.
                </p>
              </div>

              <Field
                id="name"
                label="Full name"
                required
                error={errors.name?.message}
              >
                <Input
                  id="name"
                  placeholder="Juan Dela Cruz"
                  autoComplete="name"
                  className="h-12 rounded-xl"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name", { required: "Full name is required." })}
                />
              </Field>

              <Field
                id="email"
                label="Email address"
                required
                error={errors.email?.message}
              >
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  placeholder="juan@company.com"
                  autoComplete="email"
                  className="h-12 rounded-xl"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email", {
                    required: "A valid email address is required.",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "A valid email address is required.",
                    },
                  })}
                />
              </Field>

              <Field
                id="tools"
                label="Tools you use"
                hint="Optional"
                error={errors.tools?.message}
              >
                <Input
                  id="tools"
                  placeholder="Shopify, Xero, POS…"
                  className="h-12 rounded-xl"
                  {...register("tools")}
                />
              </Field>

              <Field
                id="problem"
                label="Biggest operational problem"
                required
                error={errors.problem?.message}
              >
                <Textarea
                  id="problem"
                  placeholder="Tell us what's broken or takes too much time…"
                  className="min-h-[110px] resize-none rounded-xl"
                  aria-required="true"
                  aria-invalid={!!errors.problem}
                  aria-describedby={errors.problem ? "problem-error" : undefined}
                  {...register("problem", {
                    required: "Please describe your problem.",
                  })}
                />
              </Field>

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-lg bg-destructive/10 px-3 py-2 text-center text-sm text-destructive"
                >
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <Button
                size="lg"
                className="h-12 w-full rounded-xl text-base"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Get your free estimate
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>

              <div className="relative flex items-center">
                <div className="flex-grow border-t border-border" />
                <span className="mx-4 flex-shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Or
                </span>
                <div className="flex-grow border-t border-border" />
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-xl text-base"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarClock className="h-4 w-4" aria-hidden="true" />
                  Book a call instead
                </a>
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ── small labelled field wrapper ──────────────────────────────────── */
function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
          {required && (
            <span className="ml-0.5 text-destructive" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {hint && (
          <span className="text-xs text-muted-foreground">{hint}</span>
        )}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
