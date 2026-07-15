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
