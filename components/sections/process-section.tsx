"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Map,
  MousePointerClick,
  MessageSquareDiff,
  MonitorPlay,
  ClipboardCheck,
  Activity,
  Target,
  LucideIcon,
} from "lucide-react";

type ActionItem = {
  title: string;
  experience: string;
  outcome: string;
  icon: LucideIcon;
};

const STEPS = [
  {
    phase: 1,
    title: "Discovery Audit",
    description:
      "We map your current tools, workflows, integration gaps, pain points, and software opportunities. You get a workflow audit, solution roadmap, and estimate.",
    actions: [
      {
        title: "Share Business Context",
        experience:
          "You meet with us to walk through your current manual processes, pain points, and existing software tools.",
        outcome:
          "A clear understanding of the exact bottlenecks holding your operations back.",
        icon: Search,
      },
      {
        title: "Review Proposed Roadmap",
        experience:
          "We present a comprehensive audit and technical roadmap detailing how to solve your specific issues.",
        outcome:
          "A finalized project scope and clear estimate for the next phase.",
        icon: Map,
      },
    ] as ActionItem[],
  },
  {
    phase: 2,
    title: "Prototype Sprint",
    description:
      "A high-speed UX design sprint driven by AI. We build a live, interactive prototype you can view and use in real-time on the cloud, allowing for rapid iterations before any core engineering begins.",
    actions: [
      {
        title: "Test Live Changes",
        experience:
          "You access a live URL to click through the new system's interface as we actively build it.",
        outcome:
          "Immediate validation of the user experience with zero wait time.",
        icon: MousePointerClick,
      },
      {
        title: "Provide Instant Feedback",
        experience:
          "You tell us what works and what doesn't during rapid check-ins or on-demand feedback loops.",
        outcome:
          "A fully approved UX blueprint ready for production engineering.",
        icon: MessageSquareDiff,
      },
    ] as ActionItem[],
  },
  {
    phase: 3,
    title: "MVP Build",
    description:
      "Production-ready MVP using proper engineering practices — architecture review, CI/CD pipelines, secure implementation, automated testing, and cloud deployment.",
    actions: [
      {
        title: "Attend Sprint Demos",
        experience:
          "You watch live demonstrations of fully functional backend systems and core workflows coming to life.",
        outcome:
          "Transparency into the codebase progress and assurance we're on track.",
        icon: MonitorPlay,
      },
      {
        title: "Execute Pre-launch UAT",
        experience:
          "You and your team test the complete software in a staging environment to ensure all edge cases are handled.",
        outcome:
          "A secure, production-ready system signed-off for the real world.",
        icon: ClipboardCheck,
      },
    ] as ActionItem[],
  },
  {
    phase: 4,
    title: "Retainer (Managed Growth)",
    description:
      "Ongoing partnership after launch. We keep your system stable and support continuous feature development, new integrations, and roadmap advisory.",
    actions: [
      {
        title: "Monthly Health Review",
        experience:
          "You review automated performance, security, and uptime reports to ensure the system remains stable.",
        outcome:
          "Peace of mind that your operations are fully protected and monitored.",
        icon: Activity,
      },
      {
        title: "Quarterly Roadmap Planning",
        experience:
          "We sit down to discuss new business goals and potential software upgrades or integrations.",
        outcome: "A scalable path forward that grows alongside your business.",
        icon: Target,
      },
    ] as ActionItem[],
  },
];

const ActionCard = ({
  action,
  delayIndex = 0,
}: {
  action: ActionItem;
  delayIndex?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.5,
      delay: delayIndex * 0.1,
      type: "spring",
      stiffness: 100,
    }}
    className="flex flex-col p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-sm hover:border-primary/30 transition-all hover:-translate-y-1 relative overflow-hidden group"
  >
    {/* Large background watermark icon */}
    <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
      <action.icon className="w-32 h-32" />
    </div>

    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shadow-inner">
        <action.icon className="w-5 h-5" />
      </div>
      <h4 className="text-base font-bold tracking-tight text-foreground">
        {action.title}
      </h4>
    </div>

    <div className="flex flex-col gap-4 relative z-10">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          What you experience
        </span>
        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
          {action.experience}
        </p>
      </div>

      <div className="w-12 h-[1px] bg-border/60" />

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
          The Outcome
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {action.outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-zinc-50 py-16 sm:py-32 dark:bg-zinc-950"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground bg-white dark:bg-black shadow-sm"
            >
              How It Works
            </Badge>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Simple, transparent process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We&apos;ve refined our delivery process to ensure you know exactly
              what&apos;s happening at every stage. We value transparency and
              regular touchpoints with our clients.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* Continuous vertical roadmap timeline line */}
          <div className="absolute left-[36px] md:left-[80px] top-6 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-primary/5 rounded-full z-0 hidden sm:block" />

          {STEPS.map((step, phaseIndex) => (
            <div
              key={phaseIndex}
              className="relative flex flex-col w-full z-10"
            >
              {/* Phase Marker Bubble */}
              <div className="hidden sm:flex absolute left-[36px] md:left-[80px] top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center border-[6px] border-zinc-50 dark:border-zinc-950 shadow-sm z-10 text-primary-foreground font-bold text-lg">
                {step.phase}
              </div>

              {/* Phase Content aligned to right of marker */}
              <div className="pl-4 pr-4 sm:pl-[90px] md:pl-[160px] md:pr-0 w-full mt-1.5 flex flex-col">
                <div className="mb-8">
                  <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
                    Phase {step.phase}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl">
                    {step.description}
                  </p>
                </div>

                <div className="flex flex-col w-full">
                  <h4 className="text-lg font-semibold tracking-tight text-foreground mb-6 pb-2 border-b border-border/40">
                    Your Action Items
                  </h4>

                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {step.actions.map((action, actionIndex) => (
                      <ActionCard
                        key={`${phaseIndex}-${actionIndex}`}
                        action={action}
                        delayIndex={actionIndex % 2}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
