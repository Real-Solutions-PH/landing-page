"use client"

import {
  useCallback,
  useEffect,
  useState,
} from "react"
import { cn } from "@/lib/utils"
import {
  AnimatePresence,
  motion,
} from "framer-motion"

// --- Types ---
interface Step {
  id: string
  name: string
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}

interface ImageSet {
  alt: string
  images: string[]
}

interface FeatureCarouselProps {
  image: ImageSet
  steps: readonly Step[]
}

// --- Hooks ---
function useNumberCycler(totalSteps: number = 4, interval: number = 8000) {
  const [currentNumber, setCurrentNumber] = useState(0)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps)
    }, interval)

    return () => clearTimeout(timerId)
  }, [currentNumber, totalSteps, interval])

  const setStep = useCallback(
    (stepIndex: number) => {
      setCurrentNumber(stepIndex % totalSteps)
    },
    [totalSteps]
  )

  return { currentNumber, setStep }
}

// --- Components ---
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function PhaseTimeline({
  steps: stepItems,
  current,
  onChange,
}: {
  steps: readonly Step[]
  current: number
  onChange: (index: number) => void
}) {
  return (
    <nav aria-label="Progress" className="w-full">
      <div className="relative flex items-center justify-between">
        {/* Background line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border -translate-y-1/2" />
        {/* Active progress line */}
        <motion.div
          className="absolute top-1/2 left-0 h-[2px] bg-primary -translate-y-1/2 origin-left"
          initial={false}
          animate={{
            width: `${(current / (stepItems.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {stepItems.map((step, stepIdx) => {
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onChange(stepIdx)}
              className="relative z-10 flex items-center gap-3 group focus:outline-none bg-zinc-50 dark:bg-zinc-950 pr-4 last:pr-0 first:pl-0 pl-4"
            >
              {/* Circle with icon */}
              <motion.div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
                  isCurrent
                    ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : isCompleted
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground group-hover:border-primary/50"
                )}
                animate={isCurrent ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                transition={isCurrent ? { duration: 0.5, ease: "easeInOut" } : { duration: 0.3 }}
              >
                {isCompleted ? (
                  <IconCheck className="h-5 w-5" />
                ) : step.icon ? (
                  <step.icon className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-bold">{stepIdx + 1}</span>
                )}
              </motion.div>

              {/* Name beside the icon */}
              <span
                className={cn(
                  "text-sm font-semibold transition-colors duration-300 whitespace-nowrap hidden sm:block",
                  isCurrent
                    ? "text-foreground"
                    : isCompleted
                      ? "text-foreground/70"
                      : "text-muted-foreground"
                )}
              >
                {step.name}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export type { Step as FeatureCarouselStep, ImageSet as FeatureCarouselImageSet }

export function FeatureCarousel({
  image,
  steps,
}: FeatureCarouselProps) {
  const { currentNumber: step, setStep } = useNumberCycler(steps.length)

  return (
    <div className="flex flex-col gap-6 w-full mx-auto h-[calc(100dvh-6rem)]">
      {/* Stepper — full width */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <PhaseTimeline current={step} onChange={setStep} steps={steps} />
      </motion.div>

      {/* Card */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-white transition-colors duration-300 dark:bg-card flex-1 min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 h-full">
          {/* Text column */}
          <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="text-sm font-semibold uppercase tracking-wider text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  #{String(step + 1).padStart(2, "0")}
                </motion.div>
                <motion.h2
                  className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {steps[step].title}
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {steps[step].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image column */}
          <div className="relative min-h-[280px] md:min-h-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={step}
                src={image.images[step]}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover md:rounded-r-3xl"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
