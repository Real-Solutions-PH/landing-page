"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";

/* ── DATA ── */

const STATS = [
  {
    value: 82,
    suffix: "%",
    label: "of small businesses fail due to poor cash flow management",
    // Source: U.S. Bank study, cited by SCORE
    // Link: https://www.score.org/resource/blog-post/1-reason-small-businesses-fail-and-how-avoid-it
  },
  {
    value: 35.9,
    suffix: "%",
    label: "online shopping scam rate in PH — the highest in all of Asia",
    // Source: 2023 Asia Scam Report (GASA & Gogolook), confirmed by CICC Philippines
    // Link: https://www.philstar.com/headlines/2023/11/24/2313809/survey-philippines-has-highest-e-shopping-scam-rate-in-asia
  },
  {
    value: 30,
    suffix: "%",
    label: "of freelancer revenue lost to late or uncollected payments every year",
    // Source: Indie dev/freelancer survey via Hacker News; Creditsafe bad debt report
    // Link: https://news.ycombinator.com/item?id=46197005
  },
];

const PAIN_STORIES = [
  {
    quote:
      "We are having trouble handling orders from customers — they send via Viber, email, even handwritten notes.",
    emphasis:
      "We need two people just to consolidate everything before we can start fulfilling.",
    source: "Food supplier owner, r/BusinessPH",
  },
  {
    quote: "Manual pa kami nagbibilang/tally at the end of shift.",
    emphasis: "It's wasting time — and we still make mistakes.",
    source: "Caf\u00e9 owner, Philippines",
  },
  {
    quote:
      "Leads were coming in. Quotes were being sent out. Tapos biglang wala na.",
    emphasis:
      "No follow-up system, no conversion tracking, no idea kung saan nalalaglag.",
    source: "Manufacturing business owner, r/BusinessPH",
  },
  {
    quote:
      "My sales look big but I honestly don't know what I'm actually making per product.",
    emphasis: "Hindi ko alam kung kumikita ba talaga ako o lugi na.",
    source: "Shopee/Facebook seller, small business Philippines",
  },
  {
    quote:
      "I own three branches now but I still have to go to each one personally to know what's happening.",
    emphasis:
      "Each branch manager just tells me 'okay naman' — I have no way to verify.",
    source: "Multi-branch franchise owner, Philippines",
  },
  {
    quote:
      "We have technicians going out every day but I honestly don't know if the jobs are getting done right.",
    emphasis:
      "I find out something went wrong only when the customer calls to complain.",
    source: "Machine servicing business, r/BusinessPH",
  },
  {
    quote:
      "50% of outsourced projects either fail outright or just fail to meet expectations.",
    emphasis:
      "Saving money becomes the primary goal — so owners pick the cheapest option and get burned.",
    source: "Magellan Solutions research on SME outsourcing failures",
  },
  {
    quote:
      "I kept hearing about AI creating applications and thought it was all I needed.",
    emphasis:
      "I could have avoided two years of spreadsheet chaos if I had known sooner.",
    source: "Non-technical business owner, r/GrowthHacking",
  },
];

/* ── ANIMATED COUNTER (compact) ── */

function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const decimals = value % 1 !== 0 ? 1 : 0;
  const rounded = useTransform(count, (v) =>
    decimals ? parseFloat(v.toFixed(decimals)) : Math.round(v),
  );
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      const unsubscribe = rounded.on("change", (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count, rounded]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {display}
        {suffix}
      </span>
      <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
        {label}
      </p>
    </div>
  );
}

/* ── AUTO-ROTATING QUOTE WITH STAGED REVEAL ── */

const QUOTE_DURATION = 6000; // ms per quote

function RotatingQuotes() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % PAIN_STORIES.length);
    setProgress(0);
  }, []);

  // Progress bar tick
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 100 / (QUOTE_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [next, active]);

  const story = PAIN_STORIES[active];

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-10"
          >
            {/* Large decorative quote mark */}
            <div className="mb-1 select-none font-serif text-6xl leading-none text-foreground/10">
              &ldquo;
            </div>

            {/* Quote — first part fades in, emphasis slides up with highlight */}
            <div className="-mt-4 mb-6 min-h-[100px]">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg font-medium leading-relaxed text-foreground sm:text-xl"
              >
                {story.quote}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-2 text-lg font-bold leading-relaxed text-foreground sm:text-xl"
              >
                <span className="relative">
                  <span className="relative z-10">{story.emphasis}</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                    className="absolute inset-x-0 bottom-0 z-0 h-[40%] origin-left rounded-sm bg-[#193B76]/15 dark:bg-[#2A5CAA]/25"
                  />
                </span>
              </motion.p>
            </div>

            {/* Source — fades in last with a dash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-6 bg-muted-foreground/30" />
              <p className="text-xs font-medium tracking-wide text-muted-foreground">
                {story.source}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar + dot navigation */}
      <div className="mt-6 flex w-full max-w-md items-center gap-3">
        {PAIN_STORIES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              setProgress(0);
            }}
            className="relative h-1 flex-1 overflow-hidden rounded-full bg-muted-foreground/10"
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-foreground/60"
              initial={false}
              animate={{
                width:
                  i < active
                    ? "100%"
                    : i === active
                      ? `${progress}%`
                      : "0%",
              }}
              transition={
                i === active
                  ? { duration: 0.05, ease: "linear" }
                  : { duration: 0.3 }
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── MAIN SECTION ── */

export function ProblemSection() {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT COLUMN: Header + Stats ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-border bg-background uppercase tracking-widest text-[10px] text-muted-foreground shadow-sm"
              >
                The Problem
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              They work hard every single day.
              <br />
              But the systems are{" "}
              <span className="relative inline-block px-2 lg:px-4 pb-1 pt-1 text-[#F7FAFC] bg-[#193B76] dark:bg-[#2A5CAA] rounded-sm">
                working against them.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 max-w-lg text-base text-muted-foreground sm:text-lg"
            >
              Filipino business owners aren&apos;t failing because they lack
              talent or drive. They&apos;re failing because they have no tools
              built for how they actually work.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {STATS.map((stat, i) => (
                <AnimatedCounter key={i} {...stat} />
              ))}
            </motion.div>

            {/* Bottom line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 text-sm font-medium text-muted-foreground sm:text-base"
            >
              The problem isn&apos;t the people.{" "}
              <span className="font-semibold text-foreground">
                It&apos;s the absence of software that fits their world.
              </span>
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN: Rotating Quotes ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Real voices. Real struggles.
            </motion.p>
            <RotatingQuotes />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
