# International Repositioning — Design Spec

**Date:** 2026-07-15
**Branch:** `content/international-repositioning`
**Status:** Approved, pending implementation plan

## 1. Problem

The site targets Philippine SME owners: every service H1 ends "in the Philippines", every blog slug targets a PH keyword, pricing is dual PHP/USD, and `CONTEXT.md` declares "Primary market: Philippine SMEs in retail, food, distribution, and service operations."

The last four engagements were none of those. They were AI-native platform builds for US and EU clients. The site no longer describes the business.

## 2. Goal

Reposition every surface toward three international buyers, anchored on AI engineering capability rather than PH SME system integration — without breaching client confidentiality and without fabricating results.

## 3. Constraints

### 3.1 Confidentiality — binding

> **This repository is public** (`github.com/Real-Solutions-PH/landing-page`). Client identities, governing clauses, and the full analysis are deliberately **not in this document** — recording them here would itself be the disclosure this section exists to prevent, and git history is permanent.
>
> The mapping and analysis live outside every repository at:
> `~/Documents/rsph-confidential/client-publication-constraints.md`

Four recent projects informed this positioning but **cannot appear on the site**. Verified against their signed agreements:

| Codename | Verdict | What may be published |
|---|---|---|
| Client A | Naming barred. A later signed agreement revoked an earlier portfolio grant; approval must be express and written, and silence is explicitly not approval. | One pre-cleared line, verbatim only (below). Certain topic areas are barred **even when anonymized**. |
| Client B | **Publication barred entirely — including any anonymized description.** The agreement defines the engagement's existence and the platform's nature as Confidential Information, and a 24-month publicity embargo has not begun. | **Nothing.** |
| Client C | Naming barred. The agreement is **unsigned**. | One pre-cleared line, verbatim only (below). |
| Client D | No agreement on file. Treat as confidential. | Generic capability copy only. |

**Pre-cleared lines.** Counterparty-authored and cleared for public marketing use. Safe verbatim; may not be embellished:

- `We develop AI-assisted fintech monitoring and real-time risk-management systems`
- `We build AI-assisted, voice-enabled knowledge assistants and retrieval systems`

**Exposure.** Every one of these agreements makes *deliberate* breach of confidentiality an **uncapped** liability carve-out, where "deliberate" turns on knowing conduct. One additionally routes confidentiality disputes to offshore arbitration regardless of amount, with prevailing-party attorneys' fees — on engagements worth low single-digit thousands.

**Rule for implementation:** no page, meta tag, blog post, JSON-LD entry, OG image, `llms.txt` line, source comment, commit message, or file in this repo may name or characterize these four clients, their platforms, or their markets beyond the pre-cleared lines above. `scripts/check-positioning.mjs` enforces this mechanically using salted hashes, so the banned terms never appear in plaintext in this public repo.

**Separately, outside this spec's scope:** one client's legal package is unsigned while work appears to have been performed against it. A second hazard exists in the local filesystem, recorded in the external file above. Both warrant resolution independently of the marketing question.

### 3.2 No fabricated metrics — binding

None of the four projects has a delivered outcome metric. Every number in their docs is a target, an acceptance threshold, or an aspiration.

A specific set of figures circulating in one client's design mockup are **placeholder filler, not measurements** — publishing them as metrics would be fabrication. They are enumerated in the external constraints file and enforced by hash in `scripts/check-positioning.mjs`; they are not reproduced here because several are themselves identifying.

Claims on the site must be about **capability and method**, not results — except where a result is independently verifiable.

### 3.3 No URL may 404

Every existing indexed URL either keeps its slug or gets a 301. Nothing is deleted outright.

## 4. Positioning

### 4.1 Spine

> Two senior architects. AI leverage. Production-grade AI systems in weeks — with guarantees you can audit.

### 4.2 Differentiator

Not "we build AI" — the claim is **provable guarantees** where the industry ships demos. Each of these is RSPH's own engineering practice, describable without reference to any client:

- **Grounding guard** — LLM output citing a number the deterministic engine did not produce is rejected; deterministic fallback copy is emitted instead. The CI fixture eval imports the same primitives, so the check and the runtime guard cannot drift.
- **Server-side citations** — citations constructed from actually-retrieved chunk ids, never parsed from model prose, so a poisoned document cannot exfiltrate across tenants.
- **Provable tenant isolation** — Postgres RLS at the data layer via per-transaction session GUC with a `nullif` bleed-guard (an unset GUC reads back `NULL` and matches no rows — fails to empty, never to another tenant's data); the app role is `LOGIN NOBYPASSRLS` and does not own the tables; isolation tests carry positive controls so an empty result cannot be a broken-query false positive.
- **Honest uncertainty** — unknown risk returns `None` rather than a guess; estimates never move on data not held.
- **Recorded deviations** — every departure from spec is a numbered ADR citing the exact clause deviated from and the sign-off reference.

### 4.3 Hero headline

**"We build AI systems that can't make things up."**

Literally true; the grounding guard is the receipt. Runner-up (unused): "AI systems built to survive audit. Shipped in weeks, not quarters."

### 4.4 AI-assisted development

Lead with it as the speed explanation — it is why two engineers ship a full platform in 3–4 weeks. Framing follows the disclosure language RSPH already uses contractually: RSPH's value is **architecture decisions, code review, integration, and deployment**.

**Never mention it unpaired.** "We use Claude Code" alone reads as vibe-coding to an enterprise buyer. Every mention must sit adjacent to a discipline artifact from §4.2. The claim is *senior architects with AI leverage*, and the ADRs, grounding guards, and positive-control tests are what separate that from cowboys.

### 4.5 Geography

Two distinct decisions:

- **Drop** "Philippines" from every H1, meta title, and keyword. Those target PH *buyers*.
- **Keep** Philippines-based as a plainly stated fact on `/about`. It is a cost advantage for a seed-stage founder, and concealing it until contract is worse than leading with it.
- **Domain unchanged** — `realsolutionsph.com`. A domain change destroys existing authority for no gain.
- **Display brand** softens to "Real Solutions" in nav and hero. "PH" stops being load-bearing.

## 5. Structure

### 5.1 Audience pages (new)

One spine on the home page, three paths:

| Page | Buyer | Hook |
|---|---|---|
| `/for/startups` | US/EU pre-seed–seed founders | AI MVP in 4 weeks |
| `/for/enterprise` | Regulated fintech / healthcare / proptech | Compliance as architecture |
| `/for/agencies` | Agencies + CTOs needing a pod | Your AI engineering pod |

Rationale: three buyers on one page dilutes to mush, and each searches different phrases. Separate pages give each a real hook plus its own keyword cluster.

### 5.2 Services

Keep all four existing slugs — preserves authority, no redirects needed. Flagship flips from System Integration to AI.

| Slug | Action |
|---|---|
| `ai-software-development` | **KEEP** — becomes flagship: AI agents & RAG |
| `system-integration` | **KEEP** — demoted from flagship, rewritten international |
| `custom-software` | **KEEP** — rewritten |
| `web-mobile-apps` | **KEEP** — rewritten |
| `voice-ai` | **NEW** |
| `data-pipelines` | **NEW** |
| `ai-mvp-development` | **NEW** |

All H1s drop "in the Philippines".

### 5.3 Projects

The existing 8 (Artemis, Evolve Talents, Bath & Bark, Aura, Food Costing System, OSMS, HydroGuide, StockSense) are already public with screenshots and live URLs. They remain, reframed outcome-led and international.

**Acknowledged weakness:** these 8 are mostly not AI work — Artemis is IoT, Evolve Talents is recruitment, StockSense is inventory; only Aura is AI-adjacent. The site claims senior AI capability against a portfolio that largely does not demonstrate it, and §3.1 blocks the four projects that would. §5.4 is the mitigation.

### 5.4 Blog as the proof vehicle

Because case studies are contractually blocked, **technical content carries credibility instead**. Deep posts demonstrating method directly:

- "Proving tenant isolation with Postgres RLS (not asserting it)"
- "Grounding guards: making an LLM refuse to invent numbers"
- "Server-side citations: why you never parse them from model prose"
- "Shipping a production AI platform in 4 weeks with two engineers"

These need **zero client permission** — the methods are RSPH's practice, not any client's confidential information. They target high-intent technical keywords and convince a technical buyer more than a logo wall would.

Existing 5 posts:

| Slug | Action |
|---|---|
| `custom-software-development-cost-philippines` | Rewrite in place, geo framing → international. URL untouched. |
| `offshore-vs-local-software-development-philippines` | Rewrite in place, geo framing → international. URL untouched. |
| `ai-for-business-philippines` | Rewrite in place, geo framing → international. URL untouched. |
| `business-process-automation-philippines-sme` | Retire, 301 → new equivalent. |
| `system-integration-small-business-philippines` | Retire, 301 → new equivalent. |

Plus 4–6 new authority posts per the list above.

### 5.5 Pricing

The site already publishes international rates of $3,500–$75,000+, while recent SOWs were actually $1,200–$2,750. The published aspiration is retained; only its presentation changes.

**Shape change** — `lib/services.ts` `{ label, intl, php, timeline }` → `{ label, from, timeline }`. The `php` field is removed from the type, not just blanked, so it cannot silently return.

**Anchors** — reuse the existing published low-ends, dropping upper bounds:

| Tier | From | Timeline |
|---|---|---|
| Web / portal | $3,000 | 1–3 weeks |
| Integration | $3,500 | 2–4 weeks |
| AI feature add-on | $5,000 | 2–4 weeks |
| AI MVP build | $5,000 | 4 weeks |
| Custom platform | $13,000 | 6–10 weeks |

**Also removed** — `phOriginalPrice` / `phPromoPrice` in `components/sections/pricing-section.tsx`. Struck-through discount pricing signals SME bargain-hunting and undercuts the senior positioning.

## 6. SEO

### 6.1 Clusters

| Cluster | Targets |
|---|---|
| Startups | `AI MVP development agency`, `RAG development company`, `LangGraph developers for hire`, `build AI agent MVP` |
| Enterprise | `multi-tenant RAG platform`, `EU AI data residency`, `GDPR compliant AI vendor`, `LLM security audit` |
| Agencies | `white label AI development`, `AI engineering pod`, `subcontract AI development` |
| Authority | `Postgres RLS tenant isolation`, `LLM grounding guard`, `Pipecat voice agent`, `AG-UI protocol` |

### 6.2 Technical

- `app/sitemap.ts` — add `/for/*`, new service slugs, new posts; drop retired slugs
- `app/robots.ts` — verify no stale disallows
- `public/llms.txt` — rewrite to the new positioning
- `next.config.ts` — 301s for the 2 retired blog slugs
- OG images — `app/api/og-image/route.tsx` copy update
- `app/layout.tsx` — root metadata, title template, canonical

**JSON-LD — larger than a single bullet.** Found during planning: structured data spans **7 files**, containing 4 `FAQPage` blocks (15 `Question`/`Answer` pairs, all PH-targeted and PHP-priced) plus a `LocalBusiness` + `GeoCoordinates` + `PostalAddress` + `AdministrativeArea` + `Country` cluster — local-SEO geo-targeting pointed at Batangas. `LocalBusiness` is actively wrong for this repositioning: it signals that the business serves a geographic area. It becomes `Organization` / `ProfessionalService` with international `areaServed`.

| File | Contains |
|---|---|
| `app/layout.tsx` | `Organization`, `LocalBusiness`, `WebSite`, `SearchAction`, `PostalAddress`, `GeoCoordinates` |
| `app/pricing/layout.tsx` | `FAQPage` — 70 lines, PHP pricing, PH-targeted questions |
| `app/services/page.tsx` | `Service`, `OfferCatalog`, `BreadcrumbList` |
| `app/services/[slug]/page.tsx` | `Service`, `Offer`, `FAQPage`, `BreadcrumbList` |
| `app/how-we-work/page.tsx` | `HowTo`, `HowToStep`, `FAQPage` |
| `app/blog/page.tsx` | `Blog`, `ItemList`, `BreadcrumbList` |
| `app/blog/[slug]/page.tsx` | `BlogPosting`, `FAQPage`, `BreadcrumbList` |

## 7. Content source of truth

`CONTEXT.md` states "Primary market: Philippine SMEs" and carries a verbatim positioning statement that every future edit inherits. It must be rewritten first — otherwise the next session regenerates PH copy from it. `GEMINI.md` needs the same check.

## 8. Files affected

**Content layer (bulk of the work)**
- `CONTEXT.md` — rewrite; source of truth
- `lib/services.ts` — 4 rewrites + 3 new; drop `php` from pricing shape
- `lib/projects.ts` — reframe 8 entries
- `lib/blog.ts` — 3 rewrites, 2 retirements, 4–6 new posts

**Routes**
- `app/for/startups/page.tsx`, `app/for/enterprise/page.tsx`, `app/for/agencies/page.tsx` — new
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/pricing/page.tsx`, `app/how-we-work/page.tsx`, `app/contact/page.tsx` — copy
- `app/pricing/layout.tsx` — FAQPage JSON-LD; 70 lines of PH-targeted, PHP-priced schema
- `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `next.config.ts` — metadata + redirects

**Sections** — copy only, no structural change:
`hero-section`, `problem-section`, `solution-section`, `services-section`, `why-us-section`, `about-section`, `team-section`, `process-section`, `how-we-work`, `pricing-section`, `cta-section`, `featured-work-section`, `portfolio-intro-section`, `services-index`, `service-detail`, `work-content`, `page-hero`, `about-hero-section`, `pricing-hero-section`, `contact-section`, `navbar`, `footer`

**Untouched:** `components/ui/*`, `lib/indexnow.ts`, `lib/utils.ts`, `scripts/submit-indexnow.mjs`, `app/api/contact/route.ts`, `app/privacy-policy`, `app/terms-of-service`

## 9. Out of scope

- Visual redesign — copy and structure only; existing components and design system stay
- Domain change
- Pursuing client permission to name the four projects (decided against; revisit if a client volunteers)
- New project screenshots
- Resolving the unsigned client agreement noted in §3.1

## 10. Success criteria

1. No H1, meta title, or keyword targets a Philippine buyer
2. Philippines-based appears once in marketing copy — on `/about`, framed as origin not market. Legal pages (`/privacy-policy`, `/terms-of-service`) may cite PH jurisdiction as required.
3. The four recent clients appear nowhere, in any form, beyond the two pre-cleared verbatim lines
4. No metric on the site is unverifiable; no mockup placeholder figure appears
5. All three audience pages exist, each with a distinct hook, CTA, and keyword cluster
6. Every previously indexed URL resolves 200 or 301 — zero 404s
7. `CONTEXT.md` describes the international AI positioning
8. Every AI-assisted-development mention sits adjacent to a discipline artifact
9. `pnpm build` passes; no PHP price string remains in `lib/services.ts`

## 11. Implementation phasing

The scope is large enough that the implementation plan should sequence it, not attempt one pass:

1. **Foundation** — `CONTEXT.md` first (source of truth; everything downstream inherits from it), then `lib/services.ts` pricing shape change
2. **Content layer** — `lib/services.ts` copy, `lib/projects.ts`, `lib/blog.ts`
3. **Routes** — new `/for/*` pages, then existing page copy
4. **Sections** — component copy sweep
5. **SEO technical** — sitemap, robots, llms.txt, JSON-LD, 301s, OG
6. **Verify** — build, crawl for 404s, grep for residual PH targeting and PHP strings

## 12. Open items

- **LinkedIn** — the URL provided (`/company/112756826/admin/dashboard/`) is auth-walled; only the login page is fetchable. The public company URL or pasted content is needed before LinkedIn material can inform copy. Not a blocker; noted so it is not silently dropped.
