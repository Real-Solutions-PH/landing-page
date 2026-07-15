This document contains all context an AI software engineer needs to write brand-accurate copy for Real Solutions. Read it fully before writing a single line of site copy. Every later content task — services, projects, blog, page copy — inherits its tone and positioning from this file.

# 1. Company

Display brand: Real Solutions
Legal name: Real Solutions PH
Domain: realsolutionsph.com (unchanged — a domain change would forfeit existing search authority for no gain)
Type: Senior AI engineering studio

# 2. Origin

Philippines-based, remote-first — stated here as an origin fact, not a market claim. <!-- positioning-guard:allow-ph -->

Real Solutions does not sell into that domestic market and does not target local buyers anywhere in marketing copy. This file may state the origin plainly. On the live site, only `/about` may surface it — framed as a cost-structure advantage for a seed-stage founder, not as a location the business serves. Every other page, meta tag, and keyword omits it entirely.

# 3. Founders

Ervin Piol and Kairus Noah Tecson — former lead full-stack engineers and heads of engineering at an AI startup. Two senior architects, not a team of juniors managed by a senior: every engagement is scoped, built, and reviewed by the same two people.

# 4. Primary Market

Three international audiences. Every page, service, and piece of content is built for one of these three — not for local buyers.

1. **Startups** — US/EU pre-seed–seed founders who need a production AI MVP shipped in weeks, not a full engineering hire.
2. **Regulated enterprise** — fintech, healthcare, and proptech teams who need AI systems that survive a compliance review, not just a demo.
3. **Agencies and CTOs** — teams that have sold AI work they can't staff, and need a senior engineering pod they can subcontract to without embarrassment.

# 5. Positioning Statement

Use verbatim wherever a positioning statement is needed:

> Real Solutions is a senior AI engineering studio. Two architects with AI leverage, shipping production-grade AI systems in weeks — with guarantees you can audit.

# 6. Differentiator — Provable Guarantees, Not Demos

Every AI vendor claims "we build AI." Every one of the three audiences above has already been burned by a demo that doesn't survive contact with production — a chatbot that invents a number, a RAG pipeline that leaks another tenant's document, a system nobody can explain when compliance asks how it decided something. That is the actual pain: not "can you build AI," but "can you prove it won't break."

Real Solutions' answer is five engineering practices. Each is real, each is RSPH's own — not a client's — and each is describable without reference to any engagement:

1. **Grounding guard** — LLM output citing a number the deterministic engine did not produce is rejected; deterministic fallback copy is emitted instead. The CI fixture eval imports the same primitives as the runtime guard, so the check and the guard cannot drift apart.
2. **Server-side citations** — citations are constructed from chunk ids that were actually retrieved, never parsed from model prose, so a poisoned document cannot exfiltrate across tenants.
3. **Provable tenant isolation** — Postgres row-level security at the data layer via a per-transaction session GUC with a `nullif` bleed-guard: an unset GUC reads back `NULL` and matches no rows, so a bug fails to *empty*, never to another tenant's data. The application role is `LOGIN NOBYPASSRLS` and does not own the tables. Isolation tests carry positive controls, so an empty result can never be mistaken for a broken query that happens to return nothing.
4. **Honest uncertainty** — unknown risk returns "we don't know," not a guess. Estimates never move on data the system doesn't hold.
5. **Recorded deviations** — every departure from spec is a numbered ADR citing the exact clause deviated from and the sign-off that approved it.

# 7. AI-Assisted Development

Real Solutions' architects use AI-assisted development — including tools like Claude Code — to move at the speed the positioning promises. The value is not the tool; it's what the two architects do around it: architecture decisions, code review, integration, and deployment. That is the whole claim.

Never mention AI-assisted development unpaired. Every mention in copy must sit next to one of the discipline artifacts from Section 6 — an ADR, a grounding guard, a positive-control test, a security review. "We use AI to build fast" alone reads as vibe-coding to an enterprise buyer. "We use AI to build fast, and every deviation from spec is a numbered ADR" reads as what it is.

# 8. Tone

Confident, direct, senior. Write like a senior engineer who understands business, not like a startup pitch deck or a corporate brochure. No buzzword padding — no "innovative," no "passionate," no unearned superlatives. State the capability plainly and back it with the method — the ADR, the test, the guard — not with adjectives.

# 9. Never Publish

Four recent client engagements are under contractual publication bars. Two carry **uncapped liability** for deliberate disclosure. Their names, principals, markets, and platforms may not appear anywhere in this repository — no page, meta tag, blog post, JSON-LD entry, OG image, `llms.txt` line, source comment, commit message, or file — beyond the two pre-cleared lines below.

The full list of what is barred, and why, lives outside every repository, at `~/Documents/rsph-confidential/client-publication-constraints.md`. Consult it before writing any copy that might touch these engagements. Do not guess, and do not attempt to reconstruct the list from context. `pnpm check:positioning` enforces this mechanically by salted hash — a violation is reported by file and constraint code, never by echoing the matched term.

The only client-derived strings cleared for public use — counterparty-authored, safe verbatim, may not be embellished:

- "We develop AI-assisted fintech monitoring and real-time risk-management systems"
- "We build AI-assisted, voice-enabled knowledge assistants and retrieval systems"

No unverifiable metrics, anywhere. Claims describe capability and method, not results. Do not invent client counts, revenue figures, uptime percentages, or satisfaction scores. If a number cannot be pointed to a source, it does not ship.

# 10. Services

Seven services, all under `/services/[slug]`. Flagship is AI, not integration.

1. `ai-software-development` — AI Agents & RAG. **Flagship.**
2. `system-integration` — System Integration. Reframed: connecting AI systems to existing infrastructure, not POS/payroll integration.
3. `custom-software` — Custom Platforms. Multi-tenant platform engineering.
4. `web-mobile-apps` — Web & Mobile. Front-ends and apps built over AI backends.
5. `voice-ai` — Voice AI.
6. `data-pipelines` — Data Pipelines.
7. `ai-mvp-development` — AI MVP Development. The startups audience's primary conversion path.
