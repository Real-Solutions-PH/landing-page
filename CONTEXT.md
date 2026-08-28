This document contains all context an AI software engineer needs to write brand-accurate copy for Real Solutions PH. Read it fully before writing a single line of site copy. Every later content task — services, projects, blog, page copy — inherits its tone and positioning from this file.

# 1. Company

Display brand: Real Solutions PH
Legal name: Real Solutions PH
Domain: realsolutionsph.com (unchanged — a domain change would forfeit existing search authority for no gain)
Type: Senior AI engineering studio

# 2. Origin

Philippines-based, remote-first — stated here as an origin fact, not a market claim. <!-- positioning-guard:allow-ph -->

Real Solutions PH does not sell into that domestic market and does not target local buyers anywhere in marketing copy. This file may state the origin plainly. On the live site, only `/about` may surface it — framed as a cost-structure advantage for a seed-stage founder, not as a location the business serves. Every other page, meta tag, and keyword omits it entirely.

## 2a. The domestic market as a long-term aspiration

One deliberate carve-out, added on the founders' instruction: the Vision card on `/about` states a long-term aim to bring the same engineering standard to businesses in that domestic market. It is written as an aspiration — where the studio wants to arrive — never as a market it currently serves or solicits.

The carve-out is exactly that narrow. It does not license a second mention anywhere else. Every rule above still binds: no other page, no meta tag, no keyword, no JSON-LD entry, no `llms.txt` line, no service or blog copy. The primary market in Section 4 is unchanged, and copy must still be written for those three international audiences — a reader of any page other than `/about` should see nothing that reads as domestic targeting.

If this ever becomes a market the studio actually sells into, that is a repositioning decision with its own scope — CONTEXT.md Sections 2 and 4, the C6/C7 guard rules in `scripts/check-positioning.mjs`, service metadata, keywords, and `llms.txt` all have to move together. Do not let it happen by copy drift, one sentence at a time.

# 3. Founders

Ervin Piol and Kairus Noah Tecson — former lead full-stack engineers and heads of engineering at an AI startup. Two senior architects, not a team of juniors managed by a senior: every engagement is scoped, built, and reviewed by the same two people.

# 4. Primary Market

Three international audiences. Every page, service, and piece of content is built for one of these three — not for local buyers.

1. **Startups** — US/EU pre-seed–seed founders who need a production AI MVP shipped in weeks, not a full engineering hire.
2. **Regulated enterprise** — fintech, healthcare, and proptech teams who need AI systems that survive a compliance review, not just a demo.
3. **Agencies and CTOs** — teams that have sold AI work they can't staff, and need a senior engineering pod they can subcontract to without embarrassment.

# 5. Positioning Statement

Use verbatim wherever a positioning statement is needed:

> Real Solutions PH is a senior AI engineering studio. AI runs every step of the build and a lead architect verifies every output — shipping production-grade AI systems in three to four weeks, with guarantees you can audit.

## 5a. Headcount — a supporting fact, never the lead

The studio is two lead-level architects, and that is not hidden anywhere: `/about` and the homepage team section state it plainly, and a buyer who asks gets a straight answer. But it must never be the *lead* claim in a hero, meta description, JSON-LD, or `llms.txt` summary.

The reason is market, not modesty. Senior-led delivery has converged into table stakes across boutique consulting — "you'll have senior people on your engagement" is now the floor, not the ceiling, so it distinguishes nothing. Two-person boutiques are also a recognized, unremarkable model (a boutique is conventionally two to eight senior consultants with no junior bench), and enterprise procurement screens for financial health, security, and single-point-of-failure continuity — never headcount. Blurring the number would fail that screen anyway, because diligence finds it.

So: lead with the operating model in Section 7. Let the headcount land later as the supporting fact that explains why there is no handoff. Never imply a larger team than two — an implied bench a buyer later discovers is worse than the count itself ever was.

# 6. Differentiator — Provable Guarantees, Not Demos

Every AI vendor claims "we build AI." Every one of the three audiences above has already been burned by a demo that doesn't survive contact with production — a chatbot that invents a number, a RAG pipeline that leaks another tenant's document, a system nobody can explain when compliance asks how it decided something. That is the actual pain: not "can you build AI," but "can you prove it won't break."

Real Solutions PH’s answer is five engineering practices. Each is real, each is RSPH's own — not a client's — and each is describable without reference to any engagement:

1. **Grounding guard** — LLM output citing a number the deterministic engine did not produce is rejected; deterministic fallback copy is emitted instead. The CI fixture eval imports the same primitives as the runtime guard, so the check and the guard cannot drift apart.
2. **Server-side citations** — citations are constructed from chunk ids that were actually retrieved, never parsed from model prose, so a poisoned document cannot exfiltrate across tenants.
3. **Provable tenant isolation** — Postgres row-level security at the data layer via a per-transaction session GUC with a `nullif` bleed-guard: an unset GUC reads back `NULL` and matches no rows, so a bug fails to *empty*, never to another tenant's data. The application role is `LOGIN NOBYPASSRLS` and does not own the tables. Isolation tests carry positive controls, so an empty result can never be mistaken for a broken query that happens to return nothing.
4. **Honest uncertainty** — unknown risk returns "we don't know," not a guess. Estimates never move on data the system doesn't hold.
5. **Recorded deviations** — every departure from spec is a numbered ADR citing the exact clause deviated from and the sign-off that approved it.

# 7. AI-Assisted Development

This is the lead claim — the thing that goes in heroes, meta, and summaries where the headcount used to sit.

AI runs at every step of how the studio operates. Every output it produces is verified by a lead architect before it moves to the next step. The division of labor is the point: AI handles volume — implementation drafts, regression sweeps, test scaffolding, first-pass docs — while the judgment work stays human: architecture, system design, cost design and its tradeoffs, security boundaries, and the review before handover.

That division is what the copy should argue, because it is where the tooling actually falls short. AI writes plausible code all day; it does not weigh what a design costs to run at month twelve, decide where a tenant boundary has to sit, or know which tradeoff will be regretted later. Those calls come from engineers who have had to live with them. That is why the timeline holds without trading away quality, cost, or security — and it is a sharper claim than seniority, which every competitor now also asserts.

The value is not the tool; it's what the architects do around it: architecture decisions, code review, integration, and deployment. That is the whole claim.

Never call the framework "the best" — or any other unearned superlative (see Section 8). Argue it structurally, through the division of labor and the verification gate, and let the reader conclude it. The framework's internal SOP is confidential and must never appear on the site in any form, in whole or in part.

Never mention AI-assisted development unpaired. Every mention in copy must sit next to one of the discipline artifacts from Section 6 — an ADR, a grounding guard, a positive-control test, a security review. "We use AI to build fast" alone reads as vibe-coding to an enterprise buyer. "We use AI to build fast, and every deviation from spec is a numbered ADR" reads as what it is.

# 8. Tone

Confident, direct, senior. Write like a senior engineer who understands business, not like a startup pitch deck or a corporate brochure. No buzzword padding — no "innovative," no "passionate," no unearned superlatives. State the capability plainly and back it with the method — the ADR, the test, the guard — not with adjectives.

# 9. Never Publish

Four recent client engagements are under contractual publication bars. Two carry **uncapped liability** for deliberate disclosure. Their names, principals, markets, and platforms may not appear anywhere in this repository — no page, meta tag, blog post, JSON-LD entry, OG image, `llms.txt` line, source comment, commit message, or file — beyond the two pre-cleared lines below.

The full list of what is barred, and why, lives outside every repository, at `~/Documents/rsph-confidential/client-publication-constraints.md`. Consult it before writing any copy that might touch these engagements. Do not guess, and do not attempt to reconstruct the list from context. `pnpm check:positioning` enforces this mechanically by salted hash — a violation is reported by file and constraint code, never by echoing the matched term.

The only client-derived strings cleared for public use — counterparty-authored, safe verbatim, may not be embellished:

- "We develop AI-assisted fintech monitoring and real-time risk-management systems"
- "We build AI-assisted, voice-enabled knowledge assistants and retrieval systems"

**The founders' former employer may not be named.** The AI startup both founders worked at is referenced only as "an AI startup" — never by name, anywhere on the site. Individual past projects that either founder worked on personally, at that employer or anywhere else, may not be named or described either.

This bounds how the founders' track record is written. The three years of AI experience and the regulatory exposure (including the EU AI Act) are **founder background** and must be framed as such — "the founders have built AI systems under binding regulatory frameworks including the EU AI Act" is accurate; "Real Solutions PH delivered EU AI Act systems" is not, and would also violate the Section 6 rule that RSPH's claims are RSPH's own, never borrowed from a client or an employer. Keep that line clean.

No unverifiable metrics, anywhere. Claims describe capability and method, not results. Do not invent client counts, revenue figures, uptime percentages, or satisfaction scores. If a number cannot be pointed to a source, it does not ship.

# 10. Services

Two layers, and they must not be conflated.

**Engagement shapes (how the homepage sells).** The homepage services section offers three ways to work with us, not a menu of seven. Keep it lean:

1. **AI MVP** — one capability, proposal→UAT in 3–4 weeks, from $5,000. The startups audience's primary conversion path; the emphasized card.
2. **Full Software Implementation** — the whole system (platform + integrations + front-ends), architected and built end to end, from $13,000.
3. **Retainer** — a senior pod on standing capacity for continuous work. No fixed price; scoped per client.

**Capabilities (how buyers find us in search).** The seven `/services/[slug]` pages stay live as the SEO/landing surface — each holds its own keywords, metadata, JSON-LD offer, and llms.txt line. The three shapes above link into them; do not retire or 301 them. Flagship capability is AI, not integration.

1. `ai-software-development` — AI Agents & RAG. **Flagship.**
2. `system-integration` — System Integration. Connecting AI systems to existing infrastructure, not POS/payroll integration.
3. `custom-software` — Custom Platforms. Multi-tenant platform engineering.
4. `web-mobile-apps` — Web & Mobile. Front-ends and apps built over AI backends.
5. `voice-ai` — Voice AI.
6. `data-pipelines` — Data Pipelines.
7. `ai-mvp-development` — AI MVP Development. The startups audience's primary conversion path.

Timeline shape (whole company): Proposal → POC → MVP → UAT → Hypercare → Warranty. Proposal through UAT lands in 3–4 weeks; hypercare and the 30-day warranty run after launch. Do not attach per-phase week counts — that math isn't fixed and inventing it violates Section 9.
