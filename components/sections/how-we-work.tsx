"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Zap,
  DollarSign,
  ShieldCheck,
  Search,
  Sparkles,
  Code2,
  TrendingUp,
  ArrowRight,
  Clock,
  Users,
  Rocket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const HERO_STATS = [
  { icon: Clock, label: "Discovery", value: "3–7 days" },
  { icon: Rocket, label: "MVP delivery", value: "3–8 weeks" },
  { icon: Users, label: "Team", value: "Senior-only" },
];

const PHASES = [
  {
    step: "01",
    icon: Search,
    name: "Discovery Audit",
    title: "We map your problem before writing a single line of code",
    description:
      "A paid discovery session where we audit your current tools, workflows, integration gaps, and pain points. You get a workflow audit, solution roadmap, and project estimate — in 3 to 7 days.",
    duration: "3–7 days",
  },
  {
    step: "02",
    icon: Sparkles,
    name: "Prototype Sprint",
    title: "See and react to your solution before production begins",
    description:
      "A high-speed design sprint driven by AI. We build a live, interactive prototype you can view and use in real-time on the cloud, allowing for rapid iterations before any core engineering begins.",
    duration: "1–2 weeks",
  },
  {
    step: "03",
    icon: Code2,
    name: "MVP Build",
    title: "Production-grade software, engineered properly from day one",
    description:
      "Production-ready MVP using proper engineering practices — architecture review, CI/CD pipelines, secure implementation, automated testing, and cloud deployment. Delivered in 3 to 8 weeks.",
    duration: "3–8 weeks",
  },
  {
    step: "04",
    icon: TrendingUp,
    name: "Managed Growth",
    title: "We stay after launch — your system keeps improving",
    description:
      "Ongoing partnership after launch. We keep your system stable with bug fixes, monitoring, and support — plus continuous feature development, new integrations, and roadmap advisory.",
    duration: "Ongoing",
  },
];

const ADVANTAGES = [
  {
    icon: Zap,
    title: "AI-accelerated engineering",
    body: "Senior engineers paired with AI tooling, internal templates, and design systems compress weeks of work into days — without the quality trade-offs of vibe-coded software.",
  },
  {
    icon: DollarSign,
    title: "Lean cost structure",
    body: "Reusable internal frameworks and an optimized delivery system mean we charge a fraction of what enterprise agencies and international shops charge for the same scope.",
  },
  {
    icon: ShieldCheck,
    title: "Senior-only team",
    body: "Every build is led by head-of-engineering and lead-engineer level talent from startups — no offshore juniors learning on your budget.",
  },
];

type Cell = boolean | "partial" | string;

const COMPARISON: {
  feature: string;
  rsp: Cell;
  diy: Cell;
  agency: Cell;
  inhouse: Cell;
}[] = [
  { feature: "Fast MVP delivery", rsp: true, diy: true, agency: false, inhouse: false },
  { feature: "Production-grade engineering", rsp: true, diy: false, agency: true, inhouse: true },
  { feature: "Competitive cost", rsp: true, diy: true, agency: false, inhouse: false },
  { feature: "Built around your workflow", rsp: true, diy: false, agency: "partial", inhouse: true },
  { feature: "You own the code & data", rsp: true, diy: false, agency: "partial", inhouse: true },
  { feature: "Maintained after launch", rsp: true, diy: false, agency: "partial", inhouse: true },
  { feature: "No hiring & management overhead", rsp: true, diy: true, agency: true, inhouse: false },
];

function CellMark({ value, highlight = false }: { value: Cell; highlight?: boolean }) {
  if (value === true)
    return (
      <span
        className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${
          highlight ? "bg-accent text-white" : "bg-primary/10 text-primary"
        }`}
        aria-label="Included"
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  if (value === false)
    return (
      <span
        className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground"
        aria-label="Not included"
      >
        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  if (value === "partial")
    return (
      <span
        className="mx-auto inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800"
        aria-label="Partial"
      >
        Partial
      </span>
    );
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function HowWeWork() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#102A52] pt-40 pb-28">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute h-[460px] w-[460px] -left-24 top-10 rounded-full bg-sky-400/25 blur-[140px]" />
          <div className="absolute h-[360px] w-[360px] right-0 bottom-0 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute h-[280px] w-[280px] left-1/3 bottom-20 rounded-full bg-accent/15 blur-[110px]" />
        </div>
        {/* Grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] border-white/20 bg-white/10 text-white/80 shadow-sm backdrop-blur-sm"
            >
              How We Work
            </Badge>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
              An AI-optimized system for building software{" "}
              <span className="bg-gradient-to-r from-sky-300 via-accent to-sky-400 bg-clip-text text-transparent">
                fast and affordably
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
              Real Solutions PH runs a prototype-first, AI-accelerated delivery
              system led by senior startup engineers. It&apos;s how we ship
              production-grade software faster and cheaper than agencies — local
              or international — without cutting corners.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Book a Discovery Audit
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#process">See the process</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:flex-col sm:items-center sm:gap-1 sm:text-center"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <stat.icon className="h-4 w-4" />
                </span>
                <div className="text-left sm:text-center">
                  <div className="text-sm font-semibold text-white sm:text-base">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/65">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why faster & cheaper */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp} className="mb-12 max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              Why we&apos;re different
            </Badge>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Why we&apos;re faster and more affordable
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              We don&apos;t deliver fast and cheap by hiring juniors or skipping
              engineering. We do it by running an optimized system: senior
              engineers amplified by AI, reusable internal frameworks, and a
              prototype-first process that kills misalignment before it costs
              money.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {ADVANTAGES.map((adv, i) => (
              <motion.div
                key={adv.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="group relative flex h-full flex-col gap-4 overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                  />
                  <div className="flex items-start justify-between">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent ring-1 ring-accent/20">
                      <adv.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground/50">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{adv.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {adv.body}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The process */}
      <section
        id="process"
        className="relative w-full overflow-hidden bg-secondary/30 py-16 md:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 0%, rgba(0,159,229,0.08), transparent 40%), radial-gradient(circle at 80% 100%, rgba(25,59,118,0.08), transparent 40%)",
          }}
        />
        <div className="container relative mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <Badge
              variant="outline"
              className="mb-4 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              The Process
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Four phases from problem to maintained software
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
              Each phase has a defined deliverable and timeline. You always know
              what comes next.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              aria-hidden
              className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent md:left-8"
            />

            <div className="space-y-6">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  {/* Step node */}
                  <div className="absolute left-0 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-accent/40 md:left-2 md:h-14 md:w-14">
                    <phase.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>

                  <Card className="ml-16 flex flex-col gap-3 border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-md md:ml-24 md:p-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold tracking-widest text-primary">
                        STEP {phase.step}
                      </span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                        {phase.name}
                      </span>
                      <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                        <Clock className="h-3 w-3" />
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {phase.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp} className="mb-8 max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              Comparison
            </Badge>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              The smarter middle ground
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Between cobbling together DIY tools, hiring a traditional agency,
              and building your own in-house team — here&apos;s how a managed
              partnership with Real Solutions PH compares.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            {/* Highlight accent on RSP column header */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-secondary/50 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-4 font-medium md:px-6">Capability</th>
                    <th className="relative px-4 py-4 text-center md:px-6">
                      <span className="inline-flex flex-col items-center gap-1">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                          <Sparkles className="h-2.5 w-2.5" />
                          Best fit
                        </span>
                        <span className="font-semibold text-foreground">
                          Real Solutions PH
                        </span>
                      </span>
                    </th>
                    <th className="px-4 py-4 text-center font-medium md:px-6">
                      DIY Tools
                    </th>
                    <th className="px-4 py-4 text-center font-medium md:px-6">
                      Traditional Agency
                    </th>
                    <th className="px-4 py-4 text-center font-medium md:px-6">
                      In-House Team
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-t border-border transition-colors hover:bg-secondary/20"
                    >
                      <td className="px-4 py-4 font-medium text-foreground md:px-6">
                        {row.feature}
                      </td>
                      <td className="bg-accent/5 px-4 py-4 text-center ring-1 ring-inset ring-accent/10 md:px-6">
                        <CellMark value={row.rsp} highlight />
                      </td>
                      <td className="px-4 py-4 text-center md:px-6">
                        <CellMark value={row.diy} />
                      </td>
                      <td className="px-4 py-4 text-center md:px-6">
                        <CellMark value={row.agency} />
                      </td>
                      <td className="px-4 py-4 text-center md:px-6">
                        <CellMark value={row.inhouse} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div
            {...fadeUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              Included
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                Partial
              </span>
              Limited
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <X className="h-2.5 w-2.5" strokeWidth={2.5} />
              </span>
              Not included
            </span>
          </motion.div>
        </div>
      </section>

      {/* The people */}
      <section className="relative w-full overflow-hidden bg-secondary/30 py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(0,159,229,0.08), transparent 50%)",
          }}
        />
        <div className="container relative mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <span className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent ring-1 ring-accent/20">
              <Users className="h-6 w-6" />
            </span>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Run by senior startup engineers
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Real Solutions PH was founded by former startup engineering leaders
              who&apos;ve shipped production software at head-of-engineering and
              lead-engineer level. We understand both clean architecture and
              business reality — builders who deliver, not just consultants who
              advise.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/about">
                Meet the team
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102A52] via-[#193b76] to-[#0a1f3d] px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
              {/* Decorative glows */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-[100px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-400/20 blur-[100px]"
              />
              {/* Grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                }}
              />
              <div className="relative">
                <Badge
                  variant="outline"
                  className="mb-5 uppercase tracking-widest text-[10px] border-white/20 bg-white/10 text-white/80 shadow-sm backdrop-blur-sm"
                >
                  Get Started
                </Badge>
                <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                  See the system applied to your business
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-sm text-white/70 md:text-base">
                  Start with a Discovery Audit. We map your workflow and hand you
                  a roadmap and estimate in 3–7 days.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/contact">
                      Book a Discovery Audit
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/services">Explore services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
