"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, X, Link2 } from "lucide-react";

type Cell = boolean | "partial";

interface ComparisonRow {
  feature: string;
  diy: Cell;
  agency: Cell;
  inhouse: Cell;
  rsp: Cell;
}

const COLUMNS = [
  { key: "diy", label: "No-Code / DIY" },
  { key: "agency", label: "Agency Demo" },
  { key: "inhouse", label: "In-House Hire" },
] as const;

const ROWS: ComparisonRow[] = [
  { feature: "Ships in weeks, not quarters", diy: true, agency: false, inhouse: false, rsp: true },
  { feature: "Grounding guard from the first commit", diy: false, agency: "partial", inhouse: "partial", rsp: true },
  { feature: "Tenant isolation proven, not asserted", diy: false, agency: "partial", inhouse: "partial", rsp: true },
  { feature: "Security review across every surface before handover", diy: false, agency: false, inhouse: "partial", rsp: true },
  { feature: "Every deviation recorded as a numbered ADR", diy: false, agency: false, inhouse: "partial", rsp: true },
  { feature: "You own the code & architecture outright", diy: false, agency: "partial", inhouse: true, rsp: true },
  { feature: "No hiring or management overhead", diy: true, agency: true, inhouse: false, rsp: true },
];

function CellMark({ value, emphasized = false }: { value: Cell; emphasized?: boolean }) {
  if (value === true)
    return (
      <span
        className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${
          emphasized ? "bg-primary text-white" : "bg-primary/10 text-primary"
        }`}
        aria-label="Yes"
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  if (value === "partial")
    return (
      <span
        className="mx-auto inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
        aria-label="Sometimes"
      >
        Maybe
      </span>
    );
  return (
    <span
      className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground"
      aria-label="No"
    >
      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
    </span>
  );
}

export function WhyUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              The Real Solutions PH Difference
            </Badge>
            <h2 className="mb-6 max-w-4xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              The smarter middle ground between a no-code prototype, an agency
              demo, and hiring a full team.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              AI runs every step of the build; a lead architect verifies every
              output before it moves. The speed comes from that model — the
              discipline comes from the ADRs, grounding guards, and security
              reviews that ship with every build.
            </p>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="overflow-x-auto rounded-[24px] border border-border bg-white dark:bg-card shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-white dark:bg-card px-6 py-5 align-bottom">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    What you actually get
                  </span>
                </th>
                <th className="px-4 pb-4 pt-3 text-center align-bottom">
                  <div className="mx-1 flex flex-col items-center gap-1.5 rounded-t-2xl bg-primary px-3 py-3 text-white shadow-[0_10px_30px_rgba(25,59,118,0.25)]">
                    <Link2 className="h-4 w-4" />
                    <span className="text-sm font-bold tracking-tight">
                      Real Solutions PH
                    </span>
                  </div>
                </th>
                {COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-5 text-center align-bottom text-sm font-semibold text-muted-foreground"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className="border-t border-border/70"
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-white dark:bg-card px-6 py-4 text-left text-sm font-medium leading-snug text-foreground"
                  >
                    {row.feature}
                  </th>
                  <td
                    className={`px-4 py-4 text-center bg-primary/5 dark:bg-primary/10 border-x border-primary/20 ${
                      i === ROWS.length - 1 ? "rounded-b-2xl border-b" : ""
                    }`}
                  >
                    <CellMark value={row.rsp} emphasized />
                  </td>
                  {COLUMNS.map((col) => (
                    <td key={col.key} className="px-4 py-4 text-center">
                      <CellMark value={row[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          <span className="font-semibold text-foreground">Maybe</span> means it
          happens on some engagements, if you ask and the timeline allows — not
          that it ships by default.
        </motion.p>
      </div>
    </section>
  );
}
