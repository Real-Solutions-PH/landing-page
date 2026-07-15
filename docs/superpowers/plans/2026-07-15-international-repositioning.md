# International Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition every content surface of the Real Solutions landing page from Philippine SME buyers to three international audiences (startup founders, regulated enterprise, agencies), anchored on AI engineering capability.

**Architecture:** Content-only change. No visual redesign, no new components, no dependency changes. Content lives in four data modules (`CONTEXT.md`, `lib/services.ts`, `lib/projects.ts`, `lib/blog.ts`) consumed by existing section components; the work is rewriting those modules, adding three route pages, and updating SEO metadata. A guard script (`scripts/check-positioning.mjs`) mechanically enforces the spec's constraints and runs in `pnpm lint`.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, pnpm.

**Spec:** `docs/superpowers/specs/2026-07-15-international-repositioning-design.md`

## Global Constraints

Every task's requirements implicitly include this section. Values are copied verbatim from the spec.

> **This repository is public** (`github.com/Real-Solutions-PH/landing-page`). The banned terms behind C1, C2, and C4 are **not written down anywhere in this repo** — listing them here, or in the guard script, would itself be the disclosure they exist to prevent, and git history is permanent.
>
> They live outside every repository at `~/Documents/rsph-confidential/client-publication-constraints.md`, and are enforced by salted hash (Task 1). **Never paste them into a file, a commit message, or a subagent prompt.**

**C1 — Banned client references.** No file may contain any client identity from the external constraints file: names, principals, company registration numbers, or client-specific pricing. Contractual bar with uncapped liability, not a style preference. `pnpm check:positioning` detects violations by hash and reports the file without echoing the term.

**C2 — Banned topic references.** One client's agreement bars even *anonymized* reference to its market. The barred topic phrases are in the external file and hashed into the guard. If you are writing copy and the guard flags C2, consult the external file — do not guess.

**C3 — Pre-cleared lines are verbatim-only.** These two strings are counterparty-authored and cleared for public marketing use. They are safe in this repo and on the site, exactly as written, and may not be embellished:
- `We develop AI-assisted fintech monitoring and real-time risk-management systems`
- `We build AI-assisted, voice-enabled knowledge assistants and retrieval systems`

**C4 — Banned fabricated metrics.** A set of figures from one client's design mockup are placeholder filler, never measurements. Several are themselves identifying, so they are hashed rather than listed. Enumerated in the external file.

**C5 — No unverifiable metrics.** Claims describe capability and method, not results. Do not invent client counts, revenue figures, uptime percentages, or satisfaction scores. If a number cannot be pointed to a source, it does not ship.

**C6 — No PH buyer targeting.** No `h1`, `metaTitle`, `metaDescription`, or `keywords` entry may contain `Philippines`, `Philippine`, `Filipino`, `Batangas`, or `SME`.

**C7 — Philippines placement.** "Philippines-based" appears in marketing copy only on `/about`, framed as origin not market. `/privacy-policy` and `/terms-of-service` may cite PH jurisdiction as required by law.

**C8 — No PHP currency.** No `₱` character and no `php:` field in `lib/services.ts`, `public/llms.txt`, or any section component. The `php` field is deleted from the `Service` type, not blanked.

**C9 — AI-assisted pairing.** Every mention of AI-assisted development / Claude Code must sit adjacent to a discipline artifact (ADR, grounding guard, positive-control test, security review). Never unpaired.

**C10 — No URL may 404.** Every previously indexed URL resolves 200 or 301.

**C11 — Pricing anchors.** Exact values, "from" format, no upper bounds:

| Tier | From | Timeline |
|---|---|---|
| Web / portal | $3,000 | 1–3 weeks |
| Integration | $3,500 | 2–4 weeks |
| AI feature add-on | $5,000 | 2–4 weeks |
| AI MVP build | $5,000 | 4 weeks |
| Custom platform | $13,000 | 6–10 weeks |

**C12 — Hero headline.** `We build AI systems that can't make things up.`

**C13 — Tone.** Confident, direct, senior. Not startup-hype, not corporate-formal. A senior engineer who understands business. No buzzword padding.

---

## File Structure

**Guard (new)**
- `scripts/check-positioning.mjs` — mechanically enforces C1–C8, C10. Wired into `pnpm lint`.

**Content layer (source of truth — rewritten)**
- `CONTEXT.md` — brand/positioning source of truth; every future edit inherits from it. Must change first.
- `lib/services.ts` — `Service` type change (`intl`/`php` → `from`), 4 rewrites, 3 new services.
- `lib/projects.ts` — reframe 8 existing entries, outcome-led and international.
- `lib/blog.ts` — 3 rewrites in place, 2 retirements, 4 new authority posts.

**Routes**
- `app/for/startups/page.tsx`, `app/for/enterprise/page.tsx`, `app/for/agencies/page.tsx` — new.
- `app/layout.tsx` — root metadata, keywords, OG, locale. **Also holds JSON-LD** (`Organization`, `LocalBusiness`, `WebSite`).
- `app/sitemap.ts` — add `/for/*`, drop retired blog slugs.
- `next.config.ts` — 301s for 2 retired blog slugs.
- `public/llms.txt` — full rewrite.

**Structured data (JSON-LD) — spans 7 files, not 1**

Discovered during planning; larger than the spec's §6.2 one-liner implies. Gets its own task (Task 12).

| File | Contains |
|---|---|
| `app/layout.tsx` | `Organization`, `LocalBusiness`, `WebSite`, `SearchAction`, `PostalAddress`, `GeoCoordinates` |
| `app/pricing/layout.tsx` | `FAQPage` — 70 lines, PHP pricing, PH-targeted questions |
| `app/services/page.tsx` | `Service`, `OfferCatalog`, `BreadcrumbList` |
| `app/services/[slug]/page.tsx` | `Service`, `Offer`, `FAQPage`, `BreadcrumbList` |
| `app/how-we-work/page.tsx` | `HowTo`, `HowToStep`, `FAQPage` |
| `app/blog/page.tsx` | `Blog`, `ItemList`, `BreadcrumbList` |
| `app/blog/[slug]/page.tsx` | `BlogPosting`, `FAQPage`, `BreadcrumbList` |

Across them: 4 `FAQPage` blocks / 15 `Question`+`Answer` pairs (PH-targeted, PHP-priced), plus `LocalBusiness` + `GeoCoordinates` + `PostalAddress` + `AdministrativeArea` + `Country` — local-SEO geo-targeting pointed at Batangas.

**Sections (copy only, no structural change)**
- `components/sections/*.tsx` — 20 files.
- `components/sections/pricing-section.tsx` — additionally strips `phOriginalPrice` / `phPromoPrice`.

**Untouched:** `components/ui/*`, `lib/indexnow.ts`, `lib/utils.ts`, `scripts/submit-indexnow.mjs`, `app/api/contact/route.ts`, `app/privacy-policy/*`, `app/terms-of-service/*`.

---

## Task 1: Positioning guard script

The test harness for every task that follows. It must fail loudly against current content before any rewriting begins.

**Files:**
- Create: `scripts/check-positioning.mjs`
- Modify: `package.json` (scripts block)

**Interfaces:**
- Consumes: nothing.
- Produces: `pnpm check:positioning` — exits 0 on pass, 1 on violation with a per-violation report. Every later task runs it.

- [ ] **Step 1: Write the guard script**

Create `scripts/check-positioning.mjs`. This exact script was written and verified during planning — it caught planted C1/C2/C4 terms in a positive control and stayed clean on a negative control containing "Discovery Assessment", "props", and the pre-cleared lines. Transcribe it verbatim:

```js
#!/usr/bin/env node
// Enforces the constraints in docs/superpowers/specs/2026-07-15-international-repositioning-design.md
//
// This repo is PUBLIC. The C1/C2/C4 terms are therefore stored as salted hashes,
// never plaintext — writing them here would be the disclosure they prevent, and
// git history is permanent. The term list lives outside every repo; see the spec.
//
// C1/C2 are contractual bars with uncapped liability. A failure here blocks release.
// Violations report the FILE and the CODE, never the matched term.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const SALT = "rsph-positioning-guard-v1";
const MAX_NGRAM = 3;

// sha256(SALT + normalized-term), truncated. Regenerate via the external term list.
const BANNED = new Map([
  ["24becd9237f6796e", "C1"], ["8bc1a90f38dce9ee", "C1"], ["b311051beb60de2f", "C1"],
  ["25cd5c21406754b3", "C1"], ["b15c5b975c2d190f", "C1"], ["94cd044122a24259", "C1"],
  ["b897335ded0909d1", "C1"], ["26f3a57f26340125", "C1"], ["f3809aeb08bc7d8d", "C1"],
  ["af25915e5378a4bf", "C1"], ["e1495e42d5f10e54", "C1"], ["a91e5948eb15a8bf", "C1"],
  ["4d45654cac3a7cec", "C1"],
  ["e4bf98a41939a3bb", "C2"], ["7624590c93b49fd2", "C2"], ["bc64fc754e5ea2f1", "C2"],
  ["6b41f01d84ad906c", "C2"], ["753c17bf43845233", "C2"],
  ["694881ff61d608b3", "C4"], ["9ffd9aff0ee62ab1", "C4"], ["bc1925551d93f8c1", "C4"],
  ["80609df5639c285b", "C4"], ["5ef861d166a10be6", "C4"], ["20108f8597abe056", "C4"],
]);

// C3 — counterparty-cleared for public use; safe verbatim, must not be embellished.
const PRECLEARED = [
  "We develop AI-assisted fintech monitoring and real-time risk-management systems",
  "We build AI-assisted, voice-enabled knowledge assistants and retrieval systems",
];

// C6 — PH buyer targeting. Word-boundary matched: "sme" as a substring hits
// "assessment", which is a legitimate word in this copy.
const PH_TERMS = ["philippines", "philippine", "filipino", "batangas", "sme", "smes"];
const PH_RE = new RegExp(`\\b(${PH_TERMS.join("|")})\\b`, "i");

// C7 — Philippines is permitted on /about (origin, not market) and on legal pages
// (jurisdiction). A line may opt out for a legally-required schema address.
const PH_ALLOWED_PATHS = ["app/privacy-policy", "app/terms-of-service", "app/about"];
const PH_ALLOW_MARKER = "positioning-guard:allow-ph";

const words = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);

const hash = (s) =>
  createHash("sha256").update(SALT + s).digest("hex").slice(0, 16);

function scanBanned(text) {
  const w = words(text);
  const found = new Set();
  for (let n = 1; n <= MAX_NGRAM; n++) {
    for (let i = 0; i + n <= w.length; i++) {
      const code = BANNED.get(hash(w.slice(i, i + n).join(" ")));
      if (code) found.add(code);
    }
  }
  return found;
}

function collectFiles(dir, exts) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { recursive: true, encoding: "utf8" })
    .map((f) => join(dir, f))
    .filter((f) => {
      if (f.includes("node_modules")) return false;
      try { if (statSync(f).isDirectory()) return false; } catch { return false; }
      return exts.some((e) => f.endsWith(e));
    });
}

const violations = [];
const files = [
  ...["CONTEXT.md", "lib/services.ts", "lib/projects.ts", "lib/blog.ts", "public/llms.txt"]
    .filter(existsSync),
  ...collectFiles("app", [".tsx", ".ts"]),
  ...collectFiles("components", [".tsx"]),
];

for (const file of files) {
  const raw = readFileSync(file, "utf8");

  for (const code of scanBanned(raw)) {
    violations.push(`${file}: ${code} banned reference — see external constraints file`);
  }

  if (raw.includes("₱")) violations.push(`${file}: C8 PHP currency symbol`);
  if (/\bphp:\s*["'`]/.test(raw)) violations.push(`${file}: C8 php: pricing field`);
  if (/phOriginalPrice|phPromoPrice/.test(raw)) violations.push(`${file}: C8 PHP promo field`);

  for (const line of PRECLEARED) {
    if (raw.includes(line.slice(0, 30)) && !raw.includes(line)) {
      violations.push(`${file}: C3 pre-cleared line altered — must be verbatim`);
    }
  }

  if (!PH_ALLOWED_PATHS.some((p) => file.startsWith(p))) {
    for (const [i, l] of raw.split("\n").entries()) {
      if (/philippines|philippine|filipino|batangas/i.test(l) && !l.includes(PH_ALLOW_MARKER)) {
        violations.push(`${file}:${i + 1}: C7 Philippines outside /about (add "${PH_ALLOW_MARKER}" if legally required)`);
      }
    }
  }
}

if (existsSync("lib/services.ts")) {
  const svc = readFileSync("lib/services.ts", "utf8");
  for (const [i, l] of svc.split("\n").entries()) {
    if (/^\s*(h1|metaTitle|metaDescription):/.test(l) && PH_RE.test(l)) {
      violations.push(`lib/services.ts:${i + 1}: C6 PH targeting in SEO field`);
    }
  }
  const kw = svc.match(/keywords:\s*\[[\s\S]*?\]/g) ?? [];
  for (const block of kw) {
    if (PH_RE.test(block)) violations.push(`lib/services.ts: C6 PH targeting in keywords`);
  }
}

for (const p of ["startups", "enterprise", "agencies"]) {
  if (!existsSync(`app/for/${p}/page.tsx`)) violations.push(`app/for/${p}/page.tsx: missing audience page`);
}

if (existsSync("next.config.ts")) {
  const cfg = readFileSync("next.config.ts", "utf8");
  for (const slug of [
    "business-process-automation-philippines-sme",
    "system-integration-small-business-philippines",
  ]) {
    if (!cfg.includes(slug)) violations.push(`next.config.ts: C10 missing 301 for retired slug`);
  }
}

if (existsSync("CONTEXT.md")) {
  if (/primary market:\s*philippine/i.test(readFileSync("CONTEXT.md", "utf8"))) {
    violations.push("CONTEXT.md: still declares a Philippine primary market");
  }
}

if (violations.length) {
  console.error(`\n✖ ${violations.length} positioning violation(s):\n`);
  for (const v of violations) console.error(`  ${v}`);
  console.error("");
  process.exit(1);
}
console.log("✔ positioning guard passed");
```

- [ ] **Step 2: Wire it into package.json**

In `package.json`, change the `lint` script and add `check:positioning`:

```json
"lint": "eslint && node scripts/check-positioning.mjs",
"check:positioning": "node scripts/check-positioning.mjs",
```

- [ ] **Step 3: Run it to verify it FAILS against current content**

Run: `pnpm check:positioning`

Expected: exit 1 with **260 violations**. Baseline measured against current content:

| Code | Count | Meaning |
|---|---|---|
| C7 | 233 | Philippines references outside `/about` |
| C6 | 12 | PH targeting in `lib/services.ts` SEO fields |
| C8 | 9 | PHP currency / promo fields |
| — | 3 | missing `app/for/*` audience pages |
| C10 | 2 | missing 301s for retired blog slugs |
| — | 1 | `CONTEXT.md` declares a PH primary market |
| **C1/C2/C4** | **0** | the live site names no client today — this must stay 0 |

When checking the C1/C2/C4 count, use word boundaries — `grep -cE '\bC1\b|\bC2\b|\bC4\b'`. A bare `C1` substring-matches `C10` and will report phantom hits.

If it passes, or reports materially fewer, the guard is broken — fix the guard before continuing. A guard that under-reports is worse than none, because C1/C2 failures carry uncapped liability.

Confirm the C1 path actually fires, rather than trusting a zero:

```bash
mkdir -p components/__guardtest
# Paste one C1 term from ~/Documents/rsph-confidential/client-publication-constraints.md
# into a string in components/__guardtest/planted.tsx, then:
pnpm check:positioning 2>&1 | grep guardtest   # expect: C1 banned reference
rm -rf components/__guardtest                   # never commit this file
```

- [ ] **Step 4: Commit**

```bash
git add scripts/check-positioning.mjs package.json
git commit -m "test: add positioning guard enforcing spec constraints"
```

---

## Task 2: CONTEXT.md — source of truth

Must come first. Every later copy task reads this file for tone and positioning; if it still says "Philippine SMEs", later work regenerates PH copy from it.

**Files:**
- Modify: `CONTEXT.md` (full rewrite)

**Interfaces:**
- Consumes: nothing.
- Produces: the canonical positioning statement, audience definitions, and tone rules every later copy task quotes from.

- [ ] **Step 1: Rewrite CONTEXT.md**

Replace the entire file. Required content:

- **Company:** Real Solutions (display brand; legal name Real Solutions PH; domain realsolutionsph.com unchanged)
- **Origin:** Philippines-based, remote-first. Stated as origin, not market. This file may say it; only `/about` may surface it in marketing copy.
- **Founders:** Ervin Piol and Kairus Noah Tecson — former lead full-stack engineers and heads of engineering at an AI startup.
- **Primary market:** three international audiences — (1) US/EU pre-seed–seed startup founders, (2) regulated enterprise in fintech/healthcare/proptech, (3) agencies and CTOs needing an AI engineering pod.
- **Positioning statement (verbatim, replaces the old one):**
  > Real Solutions is a senior AI engineering studio. Two architects with AI leverage, shipping production-grade AI systems in weeks — with guarantees you can audit.
- **Differentiator — provable guarantees, not demos.** List all five from spec §4.2 (grounding guard, server-side citations, provable tenant isolation, honest uncertainty, recorded deviations), each described as RSPH's own engineering practice.
- **AI-assisted development:** per C9 — value is architecture decisions, code review, integration, and deployment. Never mention unpaired with a discipline artifact.
- **Tone:** per C13.
- **Hard constraints — a "Never publish" section.** State C3 (the two pre-cleared lines, verbatim — they are safe here) and C5 in full. For C1, C2, and C4, state the *rule* and point to `~/Documents/rsph-confidential/client-publication-constraints.md`; **do not reproduce the banned terms.** `CONTEXT.md` is a tracked file in a public repo, and the guard scans it — pasting the list here would both leak the names permanently and make `CONTEXT.md` unable to pass its own guard. Note that C1/C2 are contractual bars with uncapped liability and that `pnpm check:positioning` enforces them by hash.
- **Services:** the 7 slugs from Task 3/4.

Delete entirely: "Primary market: Philippine SMEs in retail, food, distribution, and service operations", the four-pain-layer framing (operational overhead / build complexity / management burden / decision blindness), and the old positioning statement.

- [ ] **Step 2: Run the guard**

Run: `pnpm check:positioning`

Expected: still exit 1 (other tasks incomplete), but the `CONTEXT.md: still declares a Philippine primary market` violation is gone. Verify with: `pnpm check:positioning 2>&1 | grep CONTEXT` → no output.

- [ ] **Step 3: Commit**

```bash
git add CONTEXT.md
git commit -m "docs: reposition CONTEXT.md to international AI engineering studio"
```

---

## Task 3: lib/services.ts — type change + rewrite 4 existing services

**Files:**
- Modify: `lib/services.ts:1-36` (type), `lib/services.ts:38-315` (4 service objects)

**Interfaces:**
- Consumes: `CONTEXT.md` positioning (Task 2).
- Produces: the `Service` type below. `components/sections/service-detail.tsx`, `services-index.tsx`, `pricing-section.tsx`, and `app/services/[slug]/page.tsx` all read it — Task 9 and Task 10 depend on this exact shape.

- [ ] **Step 1: Change the pricing shape in the Service type**

In `lib/services.ts`, replace the `pricing` field:

```ts
  /** Indicative investment, surfaced for buyers + AI extraction */
  pricing: { label: string; intl: string; php: string; timeline: string }[];
```

with:

```ts
  /** Indicative investment, surfaced for buyers + AI extraction. USD "from" anchors only — no upper bound, no PHP (spec C8/C11). */
  pricing: { label: string; from: string; timeline: string }[];
```

- [ ] **Step 2: Run typecheck to see every call site break**

Run: `pnpm exec tsc --noEmit`

Expected: FAIL. Errors at every `pricing` literal in `lib/services.ts` (`intl`/`php` do not exist on the new type) and at any component reading `.intl` or `.php`. Record the component paths — Task 9/10 fix them.

- [ ] **Step 3: Rewrite the 4 existing services**

Keep all 4 slugs — they hold search authority (spec §5.2). Rewrite every other field.

| Slug | New `name` | New role |
|---|---|---|
| `ai-software-development` | AI Agents & RAG | **Flagship.** Promoted from System Integration. |
| `system-integration` | System Integration | Demoted from flagship. Reframed: connecting AI systems to existing infrastructure, not POS/payroll. |
| `custom-software` | Custom Platforms | Multi-tenant platform engineering. |
| `web-mobile-apps` | Web & Mobile | Front-ends and apps over AI backends. |

Per-service field rules:
- `h1` — drop "in the Philippines". Keyword-led, targets a §6.1 cluster.
- `metaTitle` — no PH terms (C6). Under 60 chars.
- `metaDescription` — 150–160 chars. No PH terms.
- `keywords` — from the §6.1 cluster matching the service. Zero PH terms.
- `intro` — 3 paragraphs, unique indexable copy, tone per C13.
- `problem` — the operational pain removed, framed for international buyers.
- `features` / `deliverables` / `whoFor` — concrete, no results claims (C5).
- `pricing` — anchors per C11, `{ label, from, timeline }`.
- `faqs` — 4–6 per service, question phrasing matching real search queries.
- `relatedProjectIds` — from the existing 8 in `lib/projects.ts`. **Not** the four barred clients.

**Worked exemplar — `ai-software-development`.** Match this depth and voice for the other three:

```ts
  {
    slug: "ai-software-development",
    name: "AI Agents & RAG",
    h1: "AI Agent & RAG Development",
    metaTitle: "AI Agent & RAG Development Company | Real Solutions",
    metaDescription:
      "We build production RAG systems and LLM agents with grounded output, server-side citations, and provable tenant isolation. Shipped in weeks, not quarters.",
    keywords: [
      "RAG development company",
      "AI agent development",
      "LangGraph developers for hire",
      "build AI agent MVP",
      "production RAG system",
      "LLM application development",
      "retrieval augmented generation agency",
    ],
    tagline:
      "Retrieval and agents that ship to production — with output your compliance team can audit.",
    intro: [
      "Most AI demos fall apart the week they meet real users. The model invents a number nobody can trace, a citation points at a document that says something else, and the thing that impressed everyone in the pitch becomes a liability the moment it's answering customers.",
      "We build the other kind. Our retrieval systems construct citations server-side from the chunks actually retrieved — never parsed from the model's prose — so a poisoned document cannot exfiltrate data across tenants. Our narration layers run behind a grounding guard that rejects any output citing a number the deterministic engine did not produce, falling back to deterministic copy instead of guessing.",
      "That discipline is why we can move fast. Senior architects using AI leverage, with the guardrails written first: every deviation from spec recorded as a numbered ADR, isolation proven by positive-control tests rather than asserted in a README.",
    ],
    problem:
      "Teams ship an LLM prototype that works in the demo and cannot survive an audit. There's no way to prove the model didn't invent a figure, no way to prove one customer's data can't reach another, and no record of why any of it was built the way it was.",
    features: [
      "Hybrid retrieval — dense vectors and full-text, fused with reciprocal rank fusion in a single query",
      "Server-side citations built from retrieved chunk ids, never parsed from model output",
      "Grounding guard that rejects ungrounded numbers and falls back to deterministic copy",
      "Provider-agnostic model layer — swap providers with an env var, no code change",
      "Tenant isolation enforced at the data layer with Postgres RLS, not UI checks",
      "Agent orchestration with checkpointed state, so a failed turn resumes rather than restarts",
    ],
    deliverables: [
      "Working RAG or agent system deployed to your infrastructure",
      "Numbered ADRs recording every architectural decision and deviation",
      "Isolation test suite with positive controls",
      "Security review across every surface before handover",
      "Runbook and 30-day warranty",
    ],
    whoFor: [
      "Founders who need an AI MVP in front of users in weeks",
      "Teams whose AI output will be read by regulators, auditors, or customers under contract",
      "Companies who tried an LLM prototype and hit the grounding or isolation wall",
    ],
    pricing: [
      { label: "AI Feature Add-on", from: "$5,000", timeline: "2–4 weeks" },
      { label: "AI MVP Build", from: "$5,000", timeline: "4 weeks" },
      { label: "Custom Platform", from: "$13,000", timeline: "6–10 weeks" },
    ],
    faqs: [
      {
        question: "How do you stop the model from making things up?",
        answer:
          "A grounding guard sits between the model and the user. Every number, percentage, and rule state in the output is checked against the facts the deterministic engine actually produced; anything ungrounded is rejected and replaced with deterministic copy. The CI check imports the same primitives as the runtime guard, so the two cannot drift apart.",
      },
      {
        question: "Can you prove one tenant can't see another's data?",
        answer:
          "Yes, at the data layer. Isolation is enforced by Postgres row-level security using a per-transaction session variable with a bleed-guard: an unset variable reads back as NULL and matches no rows, so the failure mode is an empty result, never another tenant's data. The application role cannot bypass RLS and does not own the tables. Every isolation test carries a positive control, so an empty result can't be a broken query passing silently.",
      },
      {
        question: "How fast can you actually ship?",
        answer:
          "Three to four weeks for a working system in front of users, four to ten for a multi-tenant platform. Two senior architects with AI leverage — our value is the architecture decisions, code review, integration, and deployment, which is also why the guardrails go in first rather than last.",
      },
      {
        question: "Which model providers do you support?",
        answer:
          "Every model call goes through one provider-agnostic layer, so switching providers is an environment variable, not a refactor. That matters when a compliance requirement forces a specific region or vendor after the build has started.",
      },
    ],
    relatedProjectIds: ["aura", "artemis"],
  },
```

- [ ] **Step 4: Run typecheck and the guard**

Run: `pnpm exec tsc --noEmit && pnpm check:positioning 2>&1 | grep services`

Expected: tsc still fails at component call sites reading `.intl`/`.php` (Task 9/10 fix those). The grep should produce no `lib/services.ts` violations.

- [ ] **Step 5: Commit**

```bash
git add lib/services.ts
git commit -m "feat: reposition 4 services to international AI capability, drop PHP pricing"
```

---

## Task 4: lib/services.ts — add 3 new services

**Files:**
- Modify: `lib/services.ts` (append to `services` array)

**Interfaces:**
- Consumes: the `Service` type from Task 3.
- Produces: slugs `voice-ai`, `data-pipelines`, `ai-mvp-development`. `app/sitemap.ts` (Task 12) picks these up automatically via `services.map`.

- [ ] **Step 1: Add the three services**

Same field rules and depth as Task 3's exemplar.

**`voice-ai`** — real capability, describable generically (never reference the barred client):
- Streaming STT/TTS, barge-in cancelling in-flight speech and generation within ~100ms
- Backchannel audio masking retrieval latency on grounded turns
- One agent core across text, voice-note, and live-call transports — same retrieval, persona, guardrails, and memory; only transport and turn-taking differ
- Transport as a swappable seam (WebSocket first, no media server; WebRTC a bounded swap, not a rewrite)
- Cost as an architectural constraint — per-tenant concurrent-call caps, spend cap, kill switch, session timeouts
- Pricing: AI MVP Build from $5,000 / 4 weeks; Custom Platform from $13,000 / 6–10 weeks
- Keywords: `voice AI development`, `Pipecat voice agent`, `conversational AI agency`, `voice agent development company`
- May use pre-cleared line C3 #2 verbatim if a capability sentence is wanted

**`data-pipelines`** — describe as generic practice only. The entity-resolution work is barred; the *methods* are RSPH's own:
- Scheduled ingestion with full lineage — every canonical row carries source feed, source doc id, run id, ingested_at
- Deterministic rules first, LLM only where deterministic logic cannot reach; LLM never in the request path
- Read-through caching with prompt-version cache-busting; cost logging per call
- Soft-delete only, no hard deletes
- Blue/green swap on validation pass
- Pricing: Custom Platform from $13,000 / 6–10 weeks
- Keywords: `data pipeline development`, `Dagster consulting`, `ETL pipeline agency`, `data engineering for AI`

**`ai-mvp-development`** — the startups cluster's money page:
- 4 weeks to a working AI system in front of users
- 3 build weeks + 1 UAT week; hypercare + warranty
- What's included / what's explicitly not
- Pricing: AI MVP Build from $5,000 / 4 weeks
- Keywords: `AI MVP development agency`, `build AI agent MVP`, `AI prototype development`, `MVP development company`

- [ ] **Step 2: Verify the new slugs resolve**

Run: `pnpm build 2>&1 | grep -E "services/(voice-ai|data-pipelines|ai-mvp-development)"`

Expected: all three appear in the built route list as static pages.

- [ ] **Step 3: Commit**

```bash
git add lib/services.ts
git commit -m "feat: add voice-ai, data-pipelines, ai-mvp-development services"
```

---

## Task 5: lib/projects.ts — reframe 8 projects

**Files:**
- Modify: `lib/projects.ts:26-259`

**Interfaces:**
- Consumes: nothing.
- Produces: 8 `Project` objects with unchanged `id`s (Task 3's `relatedProjectIds` references them) and unchanged `image`/`images`/`url` fields.

- [ ] **Step 1: Rewrite descriptions, outcomes, clientType, and service fields**

Do **not** change: `id`, `image`, `images`, `url`, `coverGradient`, `accentColor`, `letter`, `imageFit`. Those point at real assets.

Do change: `title`, `clientType`, `description`, `outcome`, `tags`, `service`, `featured`.

Rules:
- `clientType` drops PH-SME framing. `"Retail / Operations"` → the buyer segment an international reader recognises.
- `service` must name one of the 7 slugs' display names from Tasks 3–4.
- `outcome` — **C5 applies.** The existing `"collection time cut by 60%"` on `artemis` must be verifiable or it goes. If no source exists for a number, rewrite the outcome as a capability statement: `"From manual rounds to real-time monitoring across the fleet"`. Check every one of the 8.
- `featured: true` on the entries that best support AI positioning — `aura` first.
- `tags` — align to the new capability vocabulary (RAG, agents, retrieval, multi-tenant, IoT, mobile) rather than the old PH SME vocabulary.

- [ ] **Step 2: Verify no unverifiable metric survives**

Run: `grep -nE '[0-9]+%|[0-9]+x faster|cut by|reduced by|increased by' lib/projects.ts`

Expected: every hit is a number you can point to a source for. If you cannot, rewrite it. Record in the commit message which outcomes were softened and why.

- [ ] **Step 3: Commit**

```bash
git add lib/projects.ts
git commit -m "feat: reframe 8 projects international, remove unverifiable outcome metrics"
```

---

## Task 6: lib/blog.ts — rewrite 3 posts in place

Keeping these slugs preserves whatever authority they hold (spec §5.4). URLs do not change.

**Files:**
- Modify: `lib/blog.ts:27-125` (`custom-software-development-cost-philippines`), `lib/blog.ts:126-227` (`offshore-vs-local-software-development-philippines`), `lib/blog.ts:329-419` (`ai-for-business-philippines`)

**Interfaces:**
- Consumes: `Post` type at `lib/blog.ts:9-26` — unchanged.
- Produces: 3 rewritten posts, slugs untouched.

- [ ] **Step 1: Rewrite the 3 posts**

The slug stays; everything else changes. The slug containing "philippines" is a legacy URL, not a targeting signal — C6 governs `title`/`metaTitle`/`metaDescription`/`keywords`, which must contain no PH terms.

| Slug (unchanged) | New angle |
|---|---|
| `custom-software-development-cost-philippines` | "What an AI MVP actually costs in 2026" — international rates, C11 anchors, what drives cost up/down |
| `offshore-vs-local-software-development-philippines` | "Offshore vs local AI engineering: what actually matters" — timezone overlap, seniority, the discipline artifacts that let you verify quality remotely |
| `ai-for-business-philippines` | "AI that survives contact with production" — grounding, isolation, why demos break |

Every post: C5 applies to any figure. C9 applies to any AI-assisted mention. No PH terms in SEO fields.

- [ ] **Step 2: Verify slugs unchanged**

Run: `grep -c 'slug: "custom-software-development-cost-philippines"\|slug: "offshore-vs-local-software-development-philippines"\|slug: "ai-for-business-philippines"' lib/blog.ts`

Expected: `3`. If fewer, a slug was changed — revert it; those URLs must not move.

- [ ] **Step 3: Commit**

```bash
git add lib/blog.ts
git commit -m "content: rewrite 3 blog posts international, slugs preserved"
```

---

## Task 7: lib/blog.ts — retire 2 posts, add 4 authority posts

**Files:**
- Modify: `lib/blog.ts` (delete 2 posts, append 4), `next.config.ts` (redirects block)

**Interfaces:**
- Consumes: `Post` type.
- Produces: 4 new slugs. `app/sitemap.ts` picks them up via `posts.map`. The guard (Task 1) asserts the 2 redirects exist.

- [ ] **Step 1: Delete the 2 retired posts**

Remove from `lib/blog.ts`: `business-process-automation-philippines-sme` (lines ~228-328) and `system-integration-small-business-philippines` (lines ~420-525).

- [ ] **Step 2: Add the 301s**

In `next.config.ts`, inside the existing `redirects()` array, after the `/portfolio` entry:

```ts
      {
        source: "/blog/business-process-automation-philippines-sme",
        destination: "/blog/shipping-production-ai-in-four-weeks",
        permanent: true,
      },
      {
        source: "/blog/system-integration-small-business-philippines",
        destination: "/blog/proving-tenant-isolation-postgres-rls",
        permanent: true,
      },
```

- [ ] **Step 3: Add the 4 authority posts**

These are the proof vehicle (spec §5.4) — the methods are RSPH's own practice and need no client permission. Write them deep and technical; a shallow post fails the job. **C1/C2 apply hard: describe the method, never the engagement it came from.**

| Slug | Angle | Targets |
|---|---|---|
| `proving-tenant-isolation-postgres-rls` | Per-transaction session GUC, the `nullif` bleed-guard (unset GUC → NULL → matches no rows → fails to empty, never to another tenant's data), `LOGIN NOBYPASSRLS` non-owning role, positive controls so an empty result can't be a false pass | `Postgres RLS tenant isolation`, `multi-tenant RAG platform` |
| `grounding-guards-llm-refuse-invent-numbers` | Rejecting output citing numbers the engine didn't produce; deterministic fallback; percentages bucketed separately from raw magnitudes; CI eval importing the same primitives so check and runtime can't drift | `LLM grounding guard`, `LLM security audit` |
| `server-side-citations-never-parse-model-prose` | Citations built from retrieved chunk ids; page-bounded chunking protecting the (page, span) contract; fuzzy-matching offsets because extraction pipelines don't align character-for-character | `RAG citations`, `production RAG system` |
| `shipping-production-ai-in-four-weeks` | 3 build + 1 UAT; AI-assisted development paired with ADRs and positive-control tests (C9); what gets cut and what never does | `AI MVP development agency`, `AI engineering pod` |

- [ ] **Step 4: Verify redirects and build**

Run: `pnpm build && pnpm check:positioning 2>&1 | grep next.config`

Expected: build succeeds; grep produces no output (both 301s present).

- [ ] **Step 5: Commit**

```bash
git add lib/blog.ts next.config.ts
git commit -m "content: retire 2 PH posts with 301s, add 4 technical authority posts"
```

---

## Task 8: Audience pages

**Files:**
- Create: `app/for/startups/page.tsx`, `app/for/enterprise/page.tsx`, `app/for/agencies/page.tsx`

**Interfaces:**
- Consumes: existing section components (`page-hero`, `cta-section`, `featured-work-section`) and `lib/services.ts`.
- Produces: 3 routes. Task 12 adds them to the sitemap; the guard asserts they exist.

- [ ] **Step 1: Build the three pages**

Reuse existing components — no new UI. Each page needs: `export const metadata` (title, description, keywords from its §6.1 cluster, canonical), an H1 carrying the hook, the buyer's specific pain, capability proof, and one CTA.

| Route | H1 hook | Cluster | CTA |
|---|---|---|---|
| `/for/startups` | AI MVP in 4 weeks | `AI MVP development agency`, `RAG development company`, `LangGraph developers for hire`, `build AI agent MVP` | Book a scoping call |
| `/for/enterprise` | Compliance as architecture | `multi-tenant RAG platform`, `EU AI data residency`, `GDPR compliant AI vendor`, `LLM security audit` | Request a technical review |
| `/for/agencies` | Your AI engineering pod | `white label AI development`, `AI engineering pod`, `subcontract AI development` | Talk about capacity |

Per-page emphasis:
- **startups** — speed and the C11 `$5,000 / 4 weeks` anchor. Pain: needs users in front of it now, can't afford a rebuild in month three.
- **enterprise** — the isolation and grounding proof. Pain: AI output will be read by regulators; needs to prove tenant separation and that the model can't invent figures. Data residency as an env-var provider swap, not a rewrite.
- **agencies** — pod model, C9 pairing (senior architects + AI leverage, ADRs as the audit trail their client will ask for). Pain: won AI work they can't staff.

- [ ] **Step 2: Verify routes build**

Run: `pnpm build 2>&1 | grep "/for/"`

Expected: `/for/startups`, `/for/enterprise`, `/for/agencies` all listed as static.

- [ ] **Step 3: Run the guard**

Run: `pnpm check:positioning 2>&1 | grep "app/for"`

Expected: no output — the three "missing audience page" violations are gone.

- [ ] **Step 4: Commit**

```bash
git add app/for
git commit -m "feat: add startups, enterprise, agencies audience pages"
```

---

## Task 9: pricing-section.tsx — strip PHP and promo pricing

**Files:**
- Modify: `components/sections/pricing-section.tsx:10` (type), `:42-138` (tier data)

**Interfaces:**
- Consumes: the `Service["pricing"]` shape from Task 3 (`{ label, from, timeline }`).
- Produces: a pricing section with no PHP and no discount framing.

- [ ] **Step 1: Remove the PHP fields**

Delete `phOriginalPrice` and `phPromoPrice` from the local type at `:10` and from every tier object at `:42-138`. Rename `intlPrice` → `from`.

Struck-through discount pricing signals SME bargain-hunting and undercuts senior positioning (spec §5.5). Remove the strikethrough rendering along with the data — do not leave dead markup.

- [ ] **Step 2: Apply the C11 anchors**

Replace every range with its "from" anchor. `"$700 – $1,200"` and `"$2,000 – $4,000"` are below every C11 anchor — those tiers are removed, not repriced. The remaining tiers map to the C11 table.

- [ ] **Step 3: Typecheck and guard**

Run: `pnpm exec tsc --noEmit && pnpm check:positioning 2>&1 | grep pricing`

Expected: tsc passes for this file; grep produces no output.

- [ ] **Step 4: Commit**

```bash
git add components/sections/pricing-section.tsx
git commit -m "feat: strip PHP and promo pricing, apply USD from-anchors"
```

---

## Task 10: Section copy sweep

**Files:**
- Modify: `components/sections/hero-section.tsx`, `problem-section.tsx`, `solution-section.tsx`, `services-section.tsx`, `why-us-section.tsx`, `about-section.tsx`, `about-hero-section.tsx`, `team-section.tsx`, `process-section.tsx`, `how-we-work.tsx`, `cta-section.tsx`, `featured-work-section.tsx`, `portfolio-intro-section.tsx`, `services-index.tsx`, `service-detail.tsx`, `work-content.tsx`, `page-hero.tsx`, `pricing-hero-section.tsx`, `contact-section.tsx`, `components/layout/navbar.tsx`, `components/layout/footer.tsx`

**Interfaces:**
- Consumes: `CONTEXT.md` (Task 2), `lib/services.ts` (Task 3/4), `lib/projects.ts` (Task 5).
- Produces: no interface changes — copy only.

- [ ] **Step 1: Hero**

`hero-section.tsx` H1 → C12 verbatim: `We build AI systems that can't make things up.`

Subhead carries the spine: two senior architects, AI leverage, production AI in weeks, guarantees you can audit. Add the three audience paths linking to Task 8's routes.

- [ ] **Step 2: Problem and solution**

`problem-section.tsx` currently runs the four PH-SME pain layers (disconnected POS/inventory/HR/CRM, freelancers failing at scale, vendors disappearing, gut-feel decisions). All four go. Replace with the international AI buyer's pain: the demo that can't survive an audit, no way to prove the model didn't invent a figure, no way to prove tenant separation, no record of why anything was built as it was.

`solution-section.tsx` answers with the five provable guarantees from spec §4.2.

- [ ] **Step 3: About and team**

`about-section.tsx` / `about-hero-section.tsx` — **the only place "Philippines-based" appears in marketing copy (C7).** Frame as origin: senior engineers, remote-first, strong timezone overlap with EU and US-East. Not as a market, not as a discount pitch.

`team-section.tsx` — founders as former lead full-stack engineers and heads of engineering at an AI startup.

- [ ] **Step 4: Process, how-we-work, why-us**

`process-section.tsx` / `how-we-work.tsx` — replace "Discovery Audit → Prototype Sprint → MVP Build → Managed Growth" with the real shape: 3 build weeks + 1 UAT week, hypercare, 30-day warranty.

`why-us-section.tsx` — **C9 lives here.** AI-assisted development as the speed explanation, paired with ADRs, grounding guards, positive-control tests, security review across every surface. Never the claim alone.

- [ ] **Step 5: Nav, footer, remaining sections**

`navbar.tsx` — display brand "Real Solutions". Add the `/for/*` routes.
`footer.tsx` — display brand; remove PH-market framing; keep legal links.
Remaining sections — sweep for PH terms and old service names.

- [ ] **Step 6: Run the full guard**

Run: `pnpm check:positioning`

Expected: **exit 0, "✔ positioning guard passed"**. This is the first point the guard should pass. If any violation remains, fix it here.

- [ ] **Step 7: Commit**

```bash
git add components
git commit -m "feat: sweep section copy to international AI positioning"
```

---

## Task 11: Root metadata

**Files:**
- Modify: `app/layout.tsx:14-90`

**Interfaces:**
- Consumes: nothing.
- Produces: root metadata inherited by every page not overriding it.

- [ ] **Step 1: Replace title, description, and keywords**

All 35+ current keywords target PH buyers across 6 tiers — delete the entire array and rebuild from the §6.1 clusters. Keep only the `Real Solutions` brand entry.

```ts
  title: {
    default: "Real Solutions — AI Systems, Shipped in Weeks",
    template: "%s | Real Solutions",
  },
  description:
    "Senior AI engineering studio. Production RAG, agents, and voice systems with grounded output and provable tenant isolation — shipped in weeks, not quarters.",
  keywords: [
    "AI MVP development agency",
    "RAG development company",
    "AI agent development",
    "LangGraph developers for hire",
    "build AI agent MVP",
    "multi-tenant RAG platform",
    "EU AI data residency",
    "GDPR compliant AI vendor",
    "LLM security audit",
    "white label AI development",
    "AI engineering pod",
    "subcontract AI development",
    "Postgres RLS tenant isolation",
    "LLM grounding guard",
    "Pipecat voice agent",
    "production RAG system",
    "Real Solutions",
  ],
```

- [ ] **Step 2: Update OpenGraph**

Match `title`/`description` to the above. Change `locale: "en_PH"` → `locale: "en_US"` — the locale signal targets the buyer, not the vendor's address. Update the OG image `alt`.

- [ ] **Step 3: Guard and typecheck**

Run: `pnpm exec tsc --noEmit && pnpm check:positioning`

Expected: both pass.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: rebuild root metadata and keywords for international clusters"
```

---

## Task 12: Structured data (JSON-LD)

Larger than spec §6.2 implies — 7 files, 4 `FAQPage` blocks, and local-SEO geo-targeting. The `LocalBusiness` type is actively wrong for international positioning: it tells Google the business serves a geographic area, which is the opposite of the goal.

**Files:**
- Modify: `app/layout.tsx` (JSON-LD block), `app/pricing/layout.tsx:1-70`, `app/services/page.tsx`, `app/services/[slug]/page.tsx`, `app/how-we-work/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`

**Interfaces:**
- Consumes: `services` (Tasks 3–4), `posts` (Tasks 6–7).
- Produces: structured data with no PH geo-targeting and no PHP.

- [ ] **Step 1: Replace LocalBusiness with Organization**

In `app/layout.tsx`, the JSON-LD carries `LocalBusiness`, `PostalAddress`, `GeoCoordinates`, `AdministrativeArea`, and `Country` — local-SEO signals pointing at Batangas.

Remove `LocalBusiness`, `GeoCoordinates`, `OpeningHoursSpecification`, and `AdministrativeArea`. Keep `Organization` and `ProfessionalService`. Set `areaServed` to international rather than a PH region. Keep `ContactPoint`.

Retain `PostalAddress` **only** if a registered business address is legally required in structured data. C7 governs marketing copy, not schema — but the guard cannot tell the difference, so an unmarked `Philippines` in `app/layout.tsx` will fail it. If you keep the address, mark each line:

```ts
    addressCountry: "PH", // positioning-guard:allow-ph (legally required registered address)
```

The guard exempts any line carrying `positioning-guard:allow-ph`. Use it only for a legally-required address — never to silence a marketing-copy violation. Default to removing the address; keep it only if you can name the requirement.

- [ ] **Step 2: Rewrite the pricing FAQPage**

`app/pricing/layout.tsx` is 70 lines of `FAQPage` JSON-LD. Every question is PH-targeted and every answer is PHP-priced. Examples of what must go:
- `"How much does custom software development cost in the Philippines?"`
- `"How much does system integration cost in the Philippines?"`
- `"Is it cheaper to outsource software development to the Philippines?"`
- `"...starts from ₱63,000 ... up to ₱1,050,000+"`
- `"...₱10,000–₱22,000 for Philippine clients and $700–$1,200 for international clients"`
- `"Care Plan ... from ₱3,500/month (PH) or $600/month (International)"`

Replace with questions the new buyers actually search, answered with C11 anchors in USD only. Match the FAQs written in Task 3/4 so the page copy and structured data agree — divergence between them is an SEO defect.

The `$700–$1,200` Discovery Audit and the retainer tiers are below every C11 anchor. Per Task 9, those tiers are removed, not repriced — so remove their Q&A rather than restating them.

- [ ] **Step 3: Sweep the remaining 5 JSON-LD files**

`app/services/page.tsx`, `app/services/[slug]/page.tsx`, `app/how-we-work/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`.

- `Service` / `Offer` entries — all 7 slugs, USD `from` anchors, `priceCurrency: "USD"` only
- `FAQPage` blocks — must match the page's visible FAQ copy
- `HowTo` / `HowToStep` in `how-we-work` — the real 3 build + 1 UAT shape from Task 10 step 4
- `BreadcrumbList` — add the `/for/*` routes
- No PH terms, no `₱`, anywhere

- [ ] **Step 4: Validate**

Run: `pnpm exec tsc --noEmit && pnpm check:positioning 2>&1 | grep -E "layout|services|blog|how-we-work"`

Expected: tsc passes; grep produces no output.

Then confirm no schema geo-targeting survives:

```bash
grep -rn 'LocalBusiness\|GeoCoordinates\|AdministrativeArea\|addressRegion\|addressCountry' app
```

Expected: no output, unless a legally-required `PostalAddress` was retained per Step 1.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/pricing/layout.tsx app/services app/how-we-work app/blog
git commit -m "feat: replace LocalBusiness geo-targeting with international Organization schema"
```

---

## Task 13: SEO technical — sitemap, llms.txt, OG

**Files:**
- Modify: `app/sitemap.ts:8-66`, `public/llms.txt`, `app/api/og-image/route.tsx`, `app/robots.ts`

**Interfaces:**
- Consumes: `services` (Tasks 3–4), `posts` (Tasks 6–7).
- Produces: the crawlable surface.

- [ ] **Step 1: Sitemap**

Service and blog routes already derive from `services.map` / `posts.map` — they pick up new entries automatically. Add the three audience pages to `staticRoutes`:

```ts
    {
      url: `${baseUrl}/for/startups`,
      lastModified: "2026-07-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/enterprise`,
      lastModified: "2026-07-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/agencies`,
      lastModified: "2026-07-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
```

Bump `lastModified` to `"2026-07-15"` on every rewritten static route.

- [ ] **Step 2: llms.txt**

Full rewrite. The current file is entirely PHP-priced and PH-positioned. New content:
- Summary paragraph: senior AI engineering studio, the spine, provable guarantees
- Key facts: company, founders, engagement model, process (3 build + 1 UAT), contact
- Services: all 7 with C11 "from" anchors in **USD only** — the current `₱42,000`/`₱455,000` figures are a C8 violation
- Pages: home, 3 audience pages, services, work, about, blog, contact
- Do not list the four barred clients (C1)

- [ ] **Step 3: OG image**

`app/api/og-image/route.tsx` — copy to match the new title/description. Check the static `public/og-image.png` for PH text; if present, flag it for regeneration (out of scope — image asset, not code).

- [ ] **Step 4: robots.ts**

Verify no stale disallows block `/for/*`.

- [ ] **Step 5: Verify**

Run: `pnpm build && pnpm check:positioning`

Expected: both pass. Then confirm the sitemap contains the audience pages:

```bash
pnpm build && grep -c "/for/startups" .next/server/app/sitemap.xml.body
```

Expected: `1`.

- [ ] **Step 6: Commit**

```bash
git add app/sitemap.ts app/robots.ts public/llms.txt app/api/og-image/route.tsx
git commit -m "feat: update sitemap, llms.txt, and OG for international positioning"
```

---

## Task 14: Full verification

**Files:** none modified unless a check fails.

**Interfaces:**
- Consumes: everything.
- Produces: a green build and a passing guard.

- [ ] **Step 1: Guard, typecheck, lint, build**

```bash
pnpm check:positioning && pnpm exec tsc --noEmit && pnpm lint && pnpm build
```

Expected: all four pass.

Note: `pnpm build` triggers `postbuild` → `scripts/submit-indexnow.mjs`, which submits URLs to search engines. That is an outward-facing side effect. Confirm with the user before running a build that will fire it, or run `pnpm exec next build` to skip the postbuild hook.

- [ ] **Step 2: Residual PH targeting sweep**

```bash
grep -rniE 'philippines|philippine|filipino|batangas' \
  --include='*.ts' --include='*.tsx' --include='*.md' --include='*.txt' \
  app components lib public CONTEXT.md \
  | grep -v 'privacy-policy\|terms-of-service\|app/about\|about-section\|about-hero'
```

Expected: no output. Any hit outside `/about` and the legal pages violates C7.

- [ ] **Step 3: Confidentiality sweep**

The guard's C1/C2/C4 hash check **is** the sweep — do not write a plaintext `grep` of the banned terms. Doing so recreates the exact disclosure the hashing exists to prevent, in a public repo, permanently in git history. (An earlier draft of this plan made precisely that mistake here.)

```bash
pnpm check:positioning 2>&1 | grep -E 'C1|C2|C4'
```

Expected: **no output.** Any hit is a contractual breach with uncapped liability — stop, consult `~/Documents/rsph-confidential/client-publication-constraints.md` to identify the term, remove it, and confirm it never reached a commit. If it did reach a commit and the branch is unpushed, rewrite history rather than adding a removal commit.

Also verify the guard's own integrity — a guard that silently matches nothing would pass this step while catching nothing:

```bash
mkdir -p components/__guardtest
printf 'export const x = "%s";\n' "$(node -e 'console.log(process.argv[1])' 'placeholder')" > components/__guardtest/planted.tsx
# Paste one C1 term from the external constraints file into the string above, then:
pnpm check:positioning 2>&1 | grep guardtest
# Expected: reports "C1 banned reference". Then:
rm -rf components/__guardtest
```

Never commit the planted file.

- [ ] **Step 4: PHP sweep**

```bash
grep -rn '₱\|php:\|phOriginalPrice\|phPromoPrice' \
  --include='*.ts' --include='*.tsx' --include='*.txt' \
  app components lib public
```

Expected: no output.

- [ ] **Step 5: Drive the site**

Run `pnpm dev` and confirm in a browser:
- `/` — H1 is C12 verbatim; the three audience paths link correctly
- `/for/startups`, `/for/enterprise`, `/for/agencies` — 200, distinct H1s
- `/services/voice-ai`, `/services/data-pipelines`, `/services/ai-mvp-development` — 200
- `/services/system-integration`, `/services/custom-software`, `/services/web-mobile-apps`, `/services/ai-software-development` — 200, no PH copy
- `/blog/business-process-automation-philippines-sme` — 301 → `/blog/shipping-production-ai-in-four-weeks`
- `/blog/system-integration-small-business-philippines` — 301 → `/blog/proving-tenant-isolation-postgres-rls`
- `/blog/custom-software-development-cost-philippines` — 200 (slug preserved, content rewritten)
- `/pricing` — no PHP, no strikethrough, C11 anchors

- [ ] **Step 6: Report to the user**

Summarise: what shipped, which project outcome metrics were softened under C5 and why, and the open LinkedIn item (spec §12). Do not claim SEO results — nothing is measurable yet.

- [ ] **Step 7: Final commit**

Do not use `git add -A` — this repo is public, and a stray guard-test fixture or scratch file
would be committed permanently. Stage explicitly:

```bash
git status --porcelain          # review every path before staging
git add <specific paths>
git commit -m "chore: verify international repositioning complete"
```

`.superpowers/` is gitignored; if `git status` shows it, stop and fix the ignore rule first.

---

## Self-Review

**Spec coverage:**

| Spec section | Task |
|---|---|
| §3.1 confidentiality | C1–C3, Task 1 guard, Task 14 step 3 |
| §3.2 no fabricated metrics | C4–C5, Task 5 step 2 |
| §3.3 no URL 404s | C10, Task 7 step 2, Task 14 step 5 |
| §4.1–4.2 spine, differentiator | Task 2, Task 10 step 2 |
| §4.3 hero headline | C12, Task 10 step 1 |
| §4.4 AI-assisted framing | C9, Task 10 step 4 |
| §4.5 geography | C6–C7, Task 10 step 3, Task 11 |
| §5.1 audience pages | Task 8 |
| §5.2 services | Tasks 3–4 |
| §5.3 projects | Task 5 |
| §5.4 blog | Tasks 6–7 |
| §5.5 pricing | C11, Task 3 step 1, Task 9 |
| §6.1 clusters | Tasks 3, 4, 8, 11 |
| §6.2 technical SEO | Tasks 11–13 |
| §7 source of truth | Task 2 |
| §10 success criteria | Task 1 guard + Task 14 |
| §11 phasing | Task order |
| §12 LinkedIn | Task 14 step 6 |

**One gap found and closed during self-review:** spec §6.2 lists JSON-LD as a single bullet. It is actually 7 files, 4 `FAQPage` blocks, 15 Q&A pairs, and a `LocalBusiness` + `GeoCoordinates` + `AdministrativeArea` local-SEO cluster targeting Batangas — `app/pricing/layout.tsx` alone is 70 lines of PHP-priced, PH-targeted FAQ schema. Split into its own Task 12; the spec's §6.2 understates it. Also missed by the spec's §8 file list: `app/pricing/layout.tsx`.

**Placeholder scan:** No TBDs. Copy tasks specify exact fields, keyword targets, banned phrases, tone, and a complete worked exemplar (Task 3 step 3) rather than pre-writing every word — the deliverable *is* the prose, and duplicating it here would guarantee drift.

**Type consistency:** `pricing: { label, from, timeline }` defined once in Task 3 step 1, consumed identically in Task 3 step 3, Task 4, Task 9, Task 12. `intlPrice` → `from` renamed in Task 9 matches. Project `id`s referenced by Task 3's `relatedProjectIds` are preserved unchanged in Task 5 step 1. The 4 new blog slugs in Task 7 step 3 match the 301 destinations in Task 7 step 2 and the verification in Task 13 step 5.
