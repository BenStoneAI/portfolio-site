# AUDIT-DEFECTS — ben-stone-ai portfolio

**Auditor:** Devon (O2O task-005)  
**Date:** 2026-09-04  
**Scope:** Recovered tree at `C:\Users\Work\Desktop\GitHub\ben-stone-ai`  
**Cross-checked against:** `C:\Users\Work\Desktop\portfolio-site-recovery\LIVE-SITE-INVENTORY.md`  
**Grounding for missing flagships:** Desktop/GitHub folders + `Sales Team Build\specs\PORTFOLIO-REPO-SURVEY.md`  
**Not fixed in this pass** — findings only.

---

## Severity-ranked summary

| Sev | ID | Defect | Path |
|-----|----|--------|------|
| **P0** | D-01 | Placeholder contact/social URLs live in prod | `src/content/site.ts` |
| **P0** | D-02 | `/resume.pdf` linked everywhere; file missing | `public/` (absent) + `src/content/site.ts` |
| **P1** | D-03 | SwarmSync framed as “Verification Infrastructure” only | `src/content/projects.ts` (+ `SwarmSyncDiagram.tsx`) |
| **P1** | D-04 | Overly finance-only positioning vs actual portfolio | `src/content/site.ts`, `src/app/layout.tsx`, `src/app/about/page.tsx`, Selected Work set |
| **P1** | D-05 | Flagship products exist on disk but absent from site | candidates below (found only; not invented) |
| **P2** | D-06 | Hardcoded marketing/chrome copy outside content layer | `src/components/`, `src/app/about/page.tsx` |
| **P2** | D-07 | No `data/` layer; diagram labels hardwired in components | no `data/`; `src/components/architecture/*` |
| **P2** | D-08 | Work-sample PDFs exist locally but not wired | `projects.ts` `workSamples` unused; `Desktop\Resume\` |
| **P3** | D-09 | Common routes 404 by design (expected gaps) | `/work`, `/contact`, `/resume`, `/favicon.ico` |
| **P3** | D-10 | SwarmSync status “Architecture / R&D” understates monorepo | `src/content/projects.ts` |

---

## P0 — Broken / placeholder (ship blockers)

### D-01 — Placeholder identity links

**Evidence (source matches live inventory §7 / §9):**

| Field | Value | File |
|-------|-------|------|
| Email | `ben@your-domain.com` | `src/content/site.ts` L28–29 |
| GitHub | `https://github.com/your-username` | `src/content/site.ts` L30–31 |
| LinkedIn | `https://www.linkedin.com/in/your-profile` | `src/content/site.ts` L32–33 |

Also: explicit `TODO(ben)` comments on those lines.  
Consumed by: Header/MobileNav (GitHub), Footer (email/LinkedIn/GitHub), About CTA (email), Hero tertiary CTA (GitHub).

**Grep inventory (app source):**

| Pattern | Hits |
|---------|------|
| `your-username` / `your-profile` / `your-domain` | `src/content/site.ts` only |
| `TODO` | `src/content/site.ts` (3× `TODO(ben)`) |
| `FIXME` | none |
| `example.com` / `lorem` | none |
| `placeholder` | comments + `SITE-RECOVERY.md` + `public/README-ADD-RESUME.txt` only |

### D-02 — Broken resume asset

- Link target: `links.resume = "/resume.pdf"` (`src/content/site.ts` L36)
- Linked from: nav, footer, About “Download Resume”
- `public/` contains only `README-ADD-RESUME.txt` — **no `resume.pdf`**
- Live inventory confirms **404**
- Real resumes exist locally (not deployed):
  - `C:\Users\Work\Desktop\Resume\Benjamin Stone - Resume (AI Transformation).pdf`
  - `C:\Users\Work\Desktop\Resume\Benjamin Stone - Resume (Financial Transformation).pdf`
  - `C:\Users\Work\Desktop\Resume\Ben-Stone-AI-Automation-Portfolio-Concise.pdf`

---

## P1 — Positioning / portfolio completeness

### D-03 — Incorrect SwarmSync framing (“Verification Infrastructure” only)

**Site copy:**

- Subtitle: `Verification Infrastructure for Agentic Systems` (`projects.ts` L153)
- Category: `Agent Verification & Evidence`
- System type: `Verification / evidence infrastructure`
- One-liner / thesis / Current State / diagram all describe an independent verification layer only
- Diagram group title: `SwarmSync verification layer` (`SwarmSyncDiagram.tsx` L29)
- Live title matches: `SwarmSync - Verification Infrastructure for Agentic Systems`

**Contradiction with product reality (found, not invented):**

| Source | What SwarmSync actually is |
|--------|----------------------------|
| `Desktop\GitHub\swarmsync` monorepo (`apps/`: api, web, agents-gateway, arbitrage, marketing-agents, …) | Large product monorepo, not a verification-only sketch |
| `Sales Team Build\specs\PORTFOLIO-REPO-SURVEY.md` §1 row 1 | Marketplace monorepo ~60 API modules: billing, payments, settlement, escrow, affiliates, invoice-proof, verification, etc. |

Verification is a **slice**, not the whole product. Framing collapses marketplace + payments + protocols into “verification infrastructure.”

### D-04 — Overly finance-only positioning

Finance depth is real — public site over-weights it relative to non-finance systems that exist on disk.

| Signal | Location |
|--------|----------|
| Hero secondary leads with “finance, operations…” | `site.ts` L51–52 |
| Bridge Business column: Finance, Accounting first | `site.ts` L152–156 |
| Meta keywords include `finance automation` | `layout.tsx` L34 |
| About meta: “background in finance and operations” | `about/page.tsx` L8–14 |
| Selected Work: 3/4 finance-adjacent (FinanceOS, InvoiceProof, SwarmSync money-workflow examples); only Sales Coach escapes | `projects.ts` |
| Home H2 locks narrative: “Four systems…” | `SelectedWork.tsx` L9–10 |

Non-finance product folders exist locally (see D-05) but get zero surface.

### D-05 — Missing flagship candidates (found on disk / survey)

**On site today (4):** FinanceOS+Cato, SwarmSync (narrow), InvoiceProof, Real-Time AI Sales Coach.

**Candidates found** under Desktop/GitHub (and/or PORTFOLIO-REPO-SURVEY) that are **not** portfolio case studies — list only; do not invent copy:

| Candidate | Evidence path(s) |
|-----------|------------------|
| **ProofRail** | `Desktop\ProofRail-App-main`; `Desktop\GitHub\Accounting Systems\ProofRail-App`; survey row 6 |
| **Conduit** / **ConduitScore** / **conduit-halo** | `Desktop\GitHub\Conduit`, `conduit-halo`; survey row 8 (live SaaS pricing noted in survey) |
| **Expense Scanner** (Expense Optimization Audit) | `Desktop\GitHub\Expense Scanner`; survey row 3 |
| **BookScout / ap-hub** | `Desktop\GitHub\Accounting Systems\ap-hub`; survey row 4 |
| **Genesis Agents** / **MasterOS** (Company OS) | `Desktop\GitHub\Genesis Agents`, `MasterOS`, `Desktop\Genesis`; survey row 7 |
| **Business Acquisition Engine** | `Desktop\GitHub\Business Acquisition Engine` |
| **IETF / agent-trust protocol suite** | `Desktop\GitHub\IETF Protocols`; survey notes SwarmSync-related spec repos |
| **Demo Investor SS** | `Desktop\GitHub\Demo Investor SS` |
| **Cato** (standalone product folder vs FinanceOS bundle) | `Desktop\GitHub\Cato` — site only presents Cato inside FinanceOS |
| **Sales & Distribution Engine** | `Desktop\GitHub\Sales Team Build` |
| **AI Accounting Hub** / LedgerOS line | `Desktop\GitHub\AI Accounting Hub`; survey row 5 |
| **Aptria** | survey row 2 (repo mapped; not a Desktop/GitHub top-level folder in this pass) |

Ben still chooses which become flagship; this audit only lists what exists.

---

## P2 — Content architecture

### D-06 / D-07 — Hardcoded copy that should move to `data/` (or content)

**Fact:** There is **no** `data/` directory. Project/site copy is centralized in:

- `src/content/site.ts`
- `src/content/projects.ts`

**Still hardcoded in components** (should move into `data/` or `content/` if that becomes the editing contract):

| Copy | Path |
|------|------|
| Selected Work section title + intro (“Four systems…”) | `src/components/home/SelectedWork.tsx` L8–15 |
| Footer contact prompt + metrics disclaimer | `src/components/layout/Footer.tsx` L12–14, L71 |
| About page H1 “Working philosophy” | `src/app/about/page.tsx` L25 |
| Brand string `BEN STONE` | `src/components/layout/Header.tsx` L14; OG images |
| Diagram node/chip labels (agents, verification steps, sources) | `FinanceOSDiagram.tsx`, `SwarmSyncDiagram.tsx`, `InvoiceProofDiagram.tsx`, `SalesCoachDiagram.tsx` |
| Chrome labels (“Capabilities”, “Supporting Material”) | `CapabilitiesStrip.tsx`, `WorkSamples.tsx` |

Case-study body copy is correctly in `projects.ts` — good. Diagrams and homepage section framing are not.

### D-08 — Supporting materials not wired

- `Project.workSamples` exists but **no project sets it**
- Desktop resume folder already has usable PDFs, e.g.:
  - `FinanceOS-Cato-Case-Study-Concise.pdf`
  - `InvoiceProof-Technical-Spec-Sample-Concise.pdf`
  - `Cato-InvoiceProof-AP-Workflow-Before-After.pdf`  
  under `C:\Users\Work\Desktop\Resume\`

---

## P3 — Route / honesty gaps

### D-09 — Missing routes (aligned with live inventory)

Confirmed by inventory / sitemap design (not bugs if intentional):

- `/work` index — no listing page
- `/contact` — contact is `/#contact` only
- `/resume` HTML — 404; PDF path used instead
- `/favicon.ico` — 404; dynamic `/icon` works
- Alias slug guesses (`/work/financeos`, `/work/sales-coach`, etc.) — 404

Sitemap only emits `/`, `/about`, and the four `/work/*` slugs (`src/app/sitemap.ts`).

### D-10 — SwarmSync maturity claim

Status `Architecture / R&D` + Current State says not a deployed product. Product folder + survey describe a large monorepo / marketplace with investor demos. At minimum, status/copy needs Ben’s truth pass so the site doesn’t under-claim a live system or over-claim unfinished pieces.

---

## Cross-check vs LIVE-SITE-INVENTORY.md

Recovered source **matches** live defects for placeholders + missing resume. Framing/flagship gaps above are **content-strategy defects** visible in both live and recovered trees (same four projects, same SwarmSync subtitle).

---

## Suggested fix order (do not implement yet)

1. Replace placeholders (D-01) + drop real `public/resume.pdf` (D-02)  
2. Rewrite SwarmSync framing to A2A marketplace + verification as capability (D-03 / D-10)  
3. Decide flagship set from D-05 candidates; widen positioning off finance-only (D-04)  
4. Introduce `data/` (or expand `content/`) and move hardcoded section/diagram copy (D-06–D-08)

---

*End of O2O task-005 audit — no code changes beyond this file.*
