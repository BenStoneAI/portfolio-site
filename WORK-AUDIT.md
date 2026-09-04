# WORK-AUDIT — O2O task-001 (+ start 007)

**Auditor:** Marcus (read-only)  
**Date:** 2026-09-04  
**Scope:** `C:\Users\Work\Desktop\GitHub\` + relevant Desktop paths  
**Rule:** Purpose and status from README / specs / code / live fetches — not folder names alone.  
**Output only:** this file (no product-code changes).

**Cross-refs used (not re-audited as authority):**  
`Sales Team Build\specs\PORTFOLIO-REPO-SURVEY.md`, `Sales Team Build\SALES & DISTRIBUTION ENGINE.md`, prior `RESEARCH-SOT-INPUT.md` / `AUDIT-DEFECTS.md` in this repo.

---

## Status vocabulary (this audit)

| Tag | Meaning |
|---|---|
| **LIVE PRODUCT** | Public URL serves the product; customers/agents can use it |
| **PRODUCTION SYSTEM** | Runs against real ops / money-adjacent workflows for a real operator (may be private) |
| **ACTIVE DEVELOPMENT** | Substantial codebase with ongoing build/verify |
| **WORKING PROTOTYPE** | End-to-end slice works; not sold / not multi-tenant |
| **REFERENCE IMPLEMENTATION** | Protocol / library published for others to implement against |
| **ARCHITECTURE / SPEC** | Build-ready or frozen spec; little or no product runtime |

---

# A. MUST-INSPECT PROJECTS

---

## 1. SwarmSync

| Field | Finding |
|---|---|
| **Canonical name** | SwarmSync (SwarmSync.AI) |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\swarmsync` · mirror `Sales Team Build\repos\benstone-E4L\SwarmSync` · related `Demo Investor SS` |
| **Problem / what was built** | **Agent marketplace + commerce & trust rails**, not verification-only. NestJS API README: “agent marketplace platform.” Live site/docs: agents discover, negotiate, hire, pay (AP2 escrow + optional x402), verify delivery (Conduit), update reputation (SwarmScore). Proof products (InvoiceProof / AuditProof / VerifyAPI) are a **front door / trust layer**, not the whole product. Protocol suite (VCAP, ATEP, AIVS, AP2, etc.) lives alongside. |
| **Status** | **LIVE PRODUCT** (site + API surfaces) + **ACTIVE DEVELOPMENT** (large monorepo). Investor demos exist. Do not label as verification R&D alone. |
| **Public website** | https://swarmsync.ai/ · https://api.swarmsync.ai · proof pages: `/invoice-proof`, `/audit-proof`, `/verify-api`, `/swarmscore` (or `/swarm-score`), `/proof-tools` · docs: `/docs/a2a-agent-marketplace`, `/docs/agent-payments`, `/protocols.md` |
| **Public GitHub** | Org https://github.com/swarmsync-ai (specs). Product monorepo often private; clone URL historically `bkauto3/SwarmSync` / `BenStoneAI` mirrors. **Portfolio will not link GitHub for now — record only.** |
| **Relationships** | Owns/uses Conduit verification for delivery; Cato/Genesis as SwarmSync-platform components in CompanyOS V6; proof stack consumed by BookScout / ProofRail; ConduitScore is a **separate** SaaS (AI visibility), not SwarmScore. |
| **Confidentiality** | Investor materials, billing keys, org data — keep private. Public marketing OK. |

**Live fetch notes (2026-09-04):** Homepage fetch timed out once; WebSearch + docs pages confirm A2A marketplace + AP2 + Conduit verification positioning. Product page routes exist in `apps/web`. `/invoice-proof` fetch returned marketplace `llms.txt`-style content (possible soft-redirect/edge quirk) — treat **code routes + `/proof-tools` card copy** as authoritative for product existence.

---

## 2. CompanyOS

| Field | Finding |
|---|---|
| **Canonical name** | CompanyOS (tenant-facing name configurable, e.g. “Ask Acme”) |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\MasterOS\COMPANYOS_MASTER_BUILD_SPEC_V6.md` · E4L mirror `Sales Team Build\repos\benstone-E4L\Master-OS` · related control-plane: `E4L-Control-Plane`, `E4L-Coordination-Ledger` |
| **Problem / what was built** | **Reusable institutional intelligence + company control plane:** one NL interface (Claude Cowork / chat) resolving what the company knows, is doing, owns, approved, executed, verified — with permissions, provenance, conflicts, receipts. Five authority layers: Principles/Canon, Epistemic Knowledge, Company Control Plane, Live Domain Systems, Execution/Orchestration. **Not** a RAG chatbot. V6 = white-label, tenant-neutral; SwarmSync components (Cato, Genesis, InvoiceProof, AuditProof, VerifyAPI) remain first-party core. |
| **Status** | **ARCHITECTURE / SPEC** (explicitly “Build-ready … architecture specification”). Local MasterOS folder is mostly the V6 spec (+ audits), not a full shipping app. Coordination Ledger / Control Plane pieces exist separately as components. |
| **Public website** | None as product. Spec repo public: https://github.com/BenStoneAI/Master-OS |
| **Public GitHub** | https://github.com/BenStoneAI/Master-OS |
| **Relationships** | Cato = company operator; Genesis = specialist workforce; FinanceOS / departmental OSes plug in as Live Domain / Execution; proof stack via Proof Gateway. |
| **Confidentiality** | Spec is white-label/public-safe. Tenant Estate Inventories and E4L control-plane docs can contain employer secrets — **CONFIDENTIAL** when those appear. |

---

## 3. Cato (company-level orchestrator — not “finance bot”)

| Field | Finding |
|---|---|
| **Canonical name** | Cato |
| **Local path(s)** | **Daemon / product:** `C:\Users\Work\Desktop\GitHub\Cato` · **Finance-domain packaging:** `Sales Team Build\repos\benstone-E4L\Cato-FinanceOS` · **Role in CompanyOS:** defined in `COMPANYOS_MASTER_BUILD_SPEC_V6.md` §15A |
| **Problem / what was built** | **Two layers of truth that must not be collapsed:** (1) **CompanyOS / portfolio framing:** Cato is SwarmSync’s proprietary **company-level operator/orchestrator** — creates objectives, coordinates work, claims tasks, invokes capabilities, escalates; must **not** become durable SoT or a second finance system. Finance is a **proving domain**, not the product ceiling. (2) **Local `Cato` README:** auditable ~3k-line Python **AI agent daemon** (budget caps, encrypted vault, Web UI, Telegram/WhatsApp, Conduit browser, SwarmSync model routing, OpenClaw migration). That daemon is the installable runtime expression of the orchestrator idea. |
| **Status** | **ACTIVE DEVELOPMENT** / **WORKING PROTOTYPE→shippable daemon** (local repo + ~1900 tests referenced in plans). FinanceOS pairing: **ACTIVE DEVELOPMENT** / partial production use in E4L contexts (conservative: not “public SaaS”). |
| **Public website** | None dedicated. SwarmSync may reference routing. |
| **Public GitHub** | https://github.com/BenStoneAI/Cato-FinanceOS · README cites https://github.com/bkauto3/cato |
| **Relationships** | Routes to Genesis; uses Conduit; optional SwarmSync LLM router; CompanyOS Control Plane is durable state; ProofRail/FinanceOS are domain consumers — Cato coordinates, does not replace them. |
| **Confidentiality** | Vault/secrets, E4L finance bindings — **CONFIDENTIAL**. Public marketing of “orchestrator + specialists” OK. |

**Portfolio rule:** Never present Cato as an invoice/finance-only bot.

---

## 4. Genesis Agents

| Field | Finding |
|---|---|
| **Canonical name** | Genesis Agents |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Genesis Agents` · mirror `Sales Team Build\repos\benstone-E4L\Genesis-Agents` · Desktop `Genesis` (related) |
| **Problem / what was built** | **Company-wide specialist intelligence workforce** — FastAPI gateway of specialized agents (`POST /agents/{slug}/run`). CLAUDE.md: 20 specialised agents deployed; inventory plans reference **57 live slugs** + skill bundles. Domains include builder, research, deploy, QA, marketing, finance (guarded), HR, legal, support, etc. Uses Conduit submodule + SwarmSync model router. CompanyOS: Genesis MUST NOT own durable company state or replace Cato. |
| **Status** | **LIVE PRODUCT** (gateway) for agent runtime: `https://swarmsync-agents.onrender.com` · **ACTIVE DEVELOPMENT** (validation plan partially complete). |
| **Public website** | Runtime URL above; no consumer marketing site. |
| **Public GitHub** | https://github.com/BenStoneAI/Genesis-Agents |
| **Relationships** | Invoked by Cato; tools include Conduit; finance tools gated; part of CompanyOS execution plane. |
| **Confidentiality** | Gateway secrets, money-domain agents — **CONFIDENTIAL**. Capability inventory OK to describe at high level. |

---

## 5. FinanceOS / LedgerOS (ops architecture pattern)

| Field | Finding |
|---|---|
| **Canonical name** | FinanceOS (E4L instance) / Accounting Automation OS · **LedgerOS** = commercial product-line name in Sales & Distribution Engine |
| **Local path(s)** | `Sales Team Build\repos\benstone-E4L\FINAL-E4Life-FinanceOS` (+ `E4Life-FinanceOS`) · white-label / GL: `Self-Hosted-Accounting-Build`, `Accounting Systems\Project-STV-Skeleton` · Summa Terra / AI Accounting Hub: `C:\Users\Work\Desktop\GitHub\AI Accounting Hub`, `Accounting Systems\Summa-Terra-QB-Automation` |
| **Problem / what was built** | **Enterprise AI ops pattern applied to finance:** ingest → Cato classify/route → Genesis specialists → verification → human gates → accounting outputs. FINAL-E4Life-FinanceOS: integrated master build (Xero adapters, workers, audit, Metabase, entity/subledger specs). LedgerOS line = white-label extraction / platformization of that pattern (ProofRail skeleton, self-hosted GL kernel, etc.). |
| **Status** | **PRODUCTION SYSTEM** (partial) for E4L ops + **ACTIVE DEVELOPMENT** / **ARCHITECTURE / SPEC** for unfinished chunks. Portfolio should sell the **pattern**, not claim a finished multi-tenant SaaS named LedgerOS unless Ben prices it. |
| **Public website** | None productized as LedgerOS. |
| **Public GitHub** | Cato-FinanceOS / Genesis public; FinanceOS E4L repos often private. |
| **Relationships** | Domain OS under CompanyOS; consumes SwarmSync proof; distinct from ProofRail (construction vertical) and BookScout (AP inbox product). |
| **Confidentiality** | **HIGH — E4L financial/legal.** Employer-private. Portfolio copy must stay architecture-level. |

---

## 6. Proof stack — InvoiceProof · AuditProof · VerifyAPI

| Field | Finding |
|---|---|
| **Canonical names** | InvoiceProof · AuditProof · VerifyAPI |
| **Local path(s)** | Inside `swarmsync` (`apps/web` product pages, API modules, `tools/proof-pipeline`, InvoiceProof Page handoff) |
| **Separate responsibilities (evidence)** | **InvoiceProof** — AI invoice fraud / risk checks with structured proof before pay (`proof-tools`: “invoice fraud checks with structured proof records”). **AuditProof** — reviewable audit trails for AI agent actions. **VerifyAPI** — verify AI-generated **software deliveries** / outputs before accept or release (“AI said the work is done. Now prove it.”). Same integrity instinct; **different objects**. |
| **Status** | Engines **IMPLEMENTED** inside SwarmSync; public demos historically **WORKING PROTOTYPE / demonstrated** with sample labels; paid launch historically conditional per readiness audits. |
| **Public website** | https://swarmsync.ai/invoice-proof · https://swarmsync.ai/audit-proof · https://swarmsync.ai/verify-api · hub https://swarmsync.ai/proof-tools |
| **Public GitHub** | Prefer not to surface; engines live in private monorepo. |
| **Relationships** | Consumed by ProofRail (fail-closed gates) and BookScout (Gmail→proof→QBO). Under SwarmSync commerce/trust story — do not replace SwarmSync card with “proof suite only.” |
| **Confidentiality** | Customer invoice corpora / live org proofs — private. Marketing demos OK if labeled. |

---

## 7. ProofRail

| Field | Finding |
|---|---|
| **Canonical name** | ProofRail |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Accounting Systems\ProofRail-App` · Desktop `C:\Users\Work\Desktop\ProofRail-App-main` · mirror `Sales Team Build\repos\foxfirepoets\ProofRail-App` |
| **Problem / what was built** | **Construction / real-estate finance OS** for STV: Adaptive-parity QBO ops across two Advanced realms + SwarmSync proof at material actions. Law: Cowork = cognition · ProofRail = physics · MCP = seam · **no proof → no completion**. Workflows: AP intake, nightly audit gates, draw build/send, fee engine, draw-sheet reconciliation. Payments stay human-in-QBO. |
| **Status** | **PRODUCTION SYSTEM** (operator Ben / STV) + **ACTIVE DEVELOPMENT**. SPEC v2.4.0 FROZEN for build. |
| **Public website** | None (internal ops). |
| **Public GitHub** | Private / foxfirepoets — **do not demo from this repo**. |
| **Relationships** | Consumes InvoiceProof / VerifyAPI / AuditProof; sibling to BookScout (different vertical); pattern sibling to FinanceOS. |
| **Confidentiality** | **CRITICAL.** Client financial PDFs, draw sheets, lien releases under repo trees. **EXCLUDE from seller demos and public portfolio detail.** Architecture-only OK. |

---

## 8. Conduit → Conduit Halo → ConduitScore

### 8a. Conduit (canonical browser)

| Field | Finding |
|---|---|
| **Canonical name** | Conduit |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Conduit` (**canonical**) · also submodule under Genesis · SwarmSync `packages/conduit-mcp` |
| **Problem / what was built** | **Headless browser with cryptographic audit layer:** every action on a SHA-256 hash chain, Ed25519 identity, exportable/verifiable proof. MCP server. PyPI `conduit-browser`. |
| **Status** | **REFERENCE IMPLEMENTATION** + **ACTIVE DEVELOPMENT** / production-adjacent (used by SwarmSync verification & Genesis). |
| **Public website** | Product narrative on SwarmSync (e.g. `/conduit` if live); PyPI package page. |
| **Public GitHub** | https://github.com/bkauto3/Conduit |
| **Relationships** | Verification oracle for SwarmSync settlement; tool for Genesis/Cato; **not** ConduitScore. |
| **Confidentiality** | Open-source-ish surface; session proofs may contain sensitive URLs — redact. |

### 8b. Conduit Halo (`conduit-halo`) — **repo evidence only**

| Field | Finding |
|---|---|
| **Canonical name** | Conduit Halo / Headed Agent Browser Engine (`@headed-agent/*`) |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\conduit-halo` (**must-read completed**) |
| **Problem / what was built (FROM README + docs ONLY)** | Standalone **visible (headed)** AI browser runtime: Playwright headed Chromium, **policy engine** (allow/block, approval triggers, session limits), **human approvals**, action/screenshot logs with redaction, Fastify API + worker + Next.js dashboard. Packages include tab orchestrator (multi-tab/popup/OAuth/download Observe→Act→Verify), agent controller (Zod LLM decisions), session recorder. Explicitly **NOT** stealth/CAPTCHA-bypass/proxy rotation/payment auto-submit. **No direct Conduit imports** — adapter interfaces only. |
| **Status** | **ACTIVE DEVELOPMENT** / **WORKING PROTOTYPE** (monorepo apps + demos without DB). |
| **Public website** | None found. |
| **Public GitHub** | Not confirmed public in this pass. |
| **Relationships** | Trust/execution sibling to Conduit (headed vs headless audited browsing). Do **not** invent “halo = score ring” from the name. |
| **Confidentiality** | Session artifacts / credentials — private. |

### 8c. ConduitScore

| Field | Finding |
|---|---|
| **Canonical name** | ConduitScore |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Sales Team Build\repos\foxfirepoets\conduitscore` · design/payments also referenced inside SwarmSync historically |
| **Problem / what was built** | **AI visibility scoring SaaS:** scans crawler access, structured data, llms.txt, content clarity, citation signals, etc., vs competitors — “Can AI see your site better than your competitor’s?” Live site confirmed 2026-09-04. Separate from **SwarmScore** (agent reputation). |
| **Status** | **LIVE PRODUCT** (https://conduitscore.com) — survey notes Stripe pricing tiers + e2e. |
| **Public website** | https://conduitscore.com |
| **Public GitHub** | foxfirepoets/conduitscore (likely private). |
| **Relationships** | Marketing/SaaS wedge; shares “Conduit” brand family loosely; **not** the browser runtime. |
| **Confidentiality** | Low for marketing; customer scan data private. |

**Family card guidance:** One homepage card can say “Conduit family” with Halo + Score as sub-bullets, **or** separate ConduitScore (sellable SaaS) from Conduit/Halo (infra). Prefer **ConduitScore as its own card** (live SaaS) and fold Halo under Conduit infra in case study depth.

---

## 9. Expense Optimization Scanner

| Field | Finding |
|---|---|
| **Canonical name** | Expense Replacement Engine / Expense Optimization Audit |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Expense Scanner` · remote `foxfirepoets/expense-scanner` |
| **Specs / plans** | `README.md`, `IMPLEMENTATION_PLAN.md`, chunk specs under `specs/`. **`IMPLEMENTATION_PLAN(1).md` not found** on disk under Desktop/GitHub (Windows duplicate naming); treat `IMPLEMENTATION_PLAN.md` as canonical. |
| **Problem / what was built** | Vertical slice: one real ledger expense → defendable **decision brief** (requirements profile, commercial+FOSS research, deterministic TCO with evidence IDs, recommendation). Loopback-only server; no autonomous buy/cancel; no raw memos egress. |
| **Status** | **WORKING PROTOTYPE** — Phases 1–6 complete; Phase 7 = real-ledger probe (owner-gated). Sellable as a **service**. |
| **Public website** | None. |
| **Public GitHub** | foxfirepoets/expense-scanner |
| **Relationships** | Entry offer in Sales & Distribution Engine; distinct from InvoiceProof (fraud) and BookScout (AP posting). |
| **Confidentiality** | Real client ledgers — **CONFIDENTIAL**; sample CSV OK. |

---

## 10. Acquisition / Off-Market Succession

| Field | Finding |
|---|---|
| **Canonical name** | Off-Market Succession Targets / Acquisition Radar Desktop Platform |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Off-Market Succession Targets` · related listed radar: `Business Acquisition Engine` |
| **Spec** | `# SPEC – OFF-MARKET SUCCESSION TARGET.md` (filename uses en-dash; content: extend Acquisition Radar with Pipeline B off-market succession sourcing for boring trades). Also `docs/HOW-IT-WORKS.md`, `IMPLEMENTATION_PLAN.md`. |
| **Problem / what was built** | Find privately held “boring” businesses (HVAC, plumbing, etc.) where founder may face succession **before** public listing; research owner, score business + seller-financing fit, prepare outreach — **no autonomous contact**. Parallel listed BizBuySell radar in Business Acquisition Engine (Telegram alerts, deal packets). |
| **Status** | **ACTIVE DEVELOPMENT** / **WORKING PROTOTYPE** (connectors, scoring, web UI, daily workflow scripts). |
| **Public website** | None (private operator tool). |
| **Public GitHub** | foxfirepoets/Business-Acquisition-Engine (listed); succession repo local. |
| **Relationships** | Personal acquisition capability — **not** a SwarmSync product. Adjacent to Sales Engine only as Ben’s own deal pipeline. |
| **Confidentiality** | **HIGH** — target lists, credentials.json, outreach. Do not publish targets. Architecture OK. |

---

## 11. AI Sales & Distribution Engine

| Field | Finding |
|---|---|
| **Canonical name** | Portfolio Sales & Distribution Engine |
| **Local path(s)** | Spec: `C:\Users\Work\Desktop\GitHub\Sales Team Build\SALES & DISTRIBUTION ENGINE.md` · `specs\SPEC-sales-distribution-engine.md` · survey `specs\PORTFOLIO-REPO-SURVEY.md` · stub app `sales-engine` (default Next.js scaffold README — **not** the engine) |
| **Problem / what was built** | **Go-to-market operating system** for selling the portfolio via independent sellers/affiliates without a big salaried sales dept. Defines product lines, CGM commission economics, line cards, what is capability vs sellable product. |
| **Status** | **ARCHITECTURE / SPEC** (+ survey). Engine app not built as production CRM. |
| **Public website** | None. |
| **Public GitHub** | N/A for portfolio linking. |
| **Relationships** | Meta-layer over all product lines; reuses SwarmSync affiliate **patterns** without coupling seller DB to agent marketplace. |
| **Confidentiality** | Commission rates / seller PII — private. |

**Homepage:** Usually **EXCLUDE** as a customer-facing card (internal GTM). OK as “how I commercialize” on About only if Ben wants.

---

## 12. Real-Time AI Sales Coach

| Field | Finding |
|---|---|
| **Canonical name** | CUE Real-Time AI Sales Coach (foundation: CUE Real-Time Answer Overlay) |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Real-time-AI-Sales-Coach` · app `AI-Real-Time-Answers\` · E4L fork specs `Sales-AI-CoPilot` |
| **Problem / what was built** | Windows desktop app: listens to **both sides** of a live call (mic + system audio), coaches the rep with **one sayable sentence**, grounded in org playbooks — no bot joins the call. SPEC expands overlay into full sales coach (objections, deal state, claim safety). Tauri/MSI path documented. |
| **Status** | **WORKING PROTOTYPE** / **ACTIVE DEVELOPMENT** (survey: majority of tasks done; some owner-blocked). |
| **Public website** | None required. |
| **Public GitHub** | Private / foxfirepoets. |
| **Relationships** | Sellable SaaS/enablement line in Sales Engine; playbook YAML reusable by distribution engine. |
| **Confidentiality** | Call audio never written to disk (per README); API keys in Credential Manager. Customer playbooks private. |

---

# B. OTHER STRONG PROJECTS (different capability only)

---

## Aptria

| Field | Finding |
|---|---|
| **Canonical name** | Aptria |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Sales Team Build\repos\foxfirepoets\Aptria` |
| **What** | Services brand: “AI automation for business processes with controls built in” — static marketing site + booking + PacketOS paywall. |
| **Status** | **LIVE PRODUCT** (marketing/services): https://aptria.net |
| **Why include** | Different capability: **human-sold automation services brand**, not a platform monorepo. |
| **Confidentiality** | Low. |

---

## BookScout OS (ap-hub)

| Field | Finding |
|---|---|
| **Canonical name** | BookScout OS |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\Accounting Systems\ap-hub` · mirror foxfirepoets/ap-hub · related CPA-Automation, Gmail-Automation |
| **What** | Gmail AP intake → SwarmSync proof gates → reviewable QBO/QBD proposals; human-gated writes; per-business install. README title: **BookScout OS**. |
| **Status** | **ACTIVE DEVELOPMENT** / installable **WORKING PROTOTYPE→production-ready path**. |
| **Why include** | Distinct from ProofRail (construction draws/fees) and InvoiceProof (API product): **operator AP automation product**. |
| **Confidentiality** | Client books — confidential. |

---

## IETF / W3C protocol suite

| Field | Finding |
|---|---|
| **Canonical name** | Agent trust / commerce Internet-Drafts + W3C AIVS CG |
| **Local path(s)** | `C:\Users\Work\Desktop\GitHub\IETF Protocols` |
| **What** | Authoring package for ATXN, VCAP, VCAP-AP2, AIVS, ATEP, SwarmScore, ADRP (+ AREF). W3C AIVS Community Group co-chair (Ben Stone). |
| **Status** | **REFERENCE IMPLEMENTATION** / **ARCHITECTURE / SPEC** (I-Ds — **not** approved IETF standards). |
| **Public** | Datatracker + https://www.w3.org/groups/cg/aivs/ + swarmsync-ai spec repos |
| **Homepage** | Prefer proof-strip / standards section over a “product card.” |

---

## Demo Investor SS

Investor demo packaging for SwarmSync — **EXCLUDE** from homepage cards (sales collateral, not a distinct capability). Keep for diligence rooms.

---

# C. EXCLUDE CANDIDATES (homepage / public case studies)

| Candidate | Why exclude (or demote) |
|---|---|
| **Sales & Distribution Engine app** | Spec/meta GTM; `sales-engine` folder is empty Next scaffold |
| **ProofRail deep case study with live artifacts** | Client financials in tree — architecture blurb max |
| **E4L Control Plane / Coordination Ledger as separate cards** | Components of CompanyOS — fold in |
| **Cato-FinanceOS as separate from Cato** | Duplicate; use one Cato + FinanceOS pattern card |
| **Summa-Terra / Canyon View / Harry Massey / estate / restructuring folders** | Employer/personal legal-finance — **CONFIDENTIAL** |
| **QB Cleanup App** | Narrow utility; not flagship capability |
| **IETF Protocols as a “product”** | Standards work → proof strip, not Selected Work card |
| **Service Arbitrage / Cabinet Leads / SMB Training** | Later-stage per Sales Engine; different story |
| **Demo Investor SS / PacketOS-only** | Collateral or single SKU under Aptria |
| **Accounting Systems\Gmail-Automation alone** | Subsystem of BookScout/ProofRail |
| **OpenClaw / competitor daemon narratives** | Marketing digression in Cato README — not a Ben product |
| **BookScout name without ap-hub path** | Historical confusion; path is ap-hub — include under BookScout once, not twice |
| **SwarmScore as standalone flagship** | Feature of SwarmSync — mention under SwarmSync |
| **Halo as mystical brand card** | Repo = headed browser engine; fold under Conduit family |

---

# D. RELATIONSHIP MAP (compressed)

```
CompanyOS (spec)
  ├─ Cato (orchestrator / daemon)
  ├─ Genesis (specialist workforce)
  ├─ FinanceOS / LedgerOS pattern (domain OS)
  ├─ ProofRail (construction finance OS)
  └─ Proof Gateway → InvoiceProof / AuditProof / VerifyAPI
         ↑ consumed by BookScout, ProofRail, SwarmSync commerce

SwarmSync (LIVE agent commerce & trust)
  ├─ AP2 / escrow / x402 / SwarmScore
  ├─ Conduit (headless audited browser) ← verification oracle
  ├─ conduit-halo (headed trusted browser) — sibling runtime
  └─ Proof product pages

ConduitScore (LIVE AI-visibility SaaS) — brand cousin, separate product

Aptria — services brand
Expense Scanner — entry audit service
CUE Sales Coach — desktop enablement
Off-Market Succession + BizBuySell Radar — Ben acquisition (private)
Sales & Distribution Engine — how the above get sold (spec)
```

---

# E. RECOMMENDED HOMEPAGE HIERARCHY (11 cards)

Matches Sales Engine product-line structure + O2O must-inspect set. Order = narrative weight for portfolio (platform → ops → verticals → wedges → private capability).

| # | Card title | One-line (evidence-backed) | Status tag for UI | Notes |
|---|---|---|---|---|
| 1 | **SwarmSync** | Autonomous agent commerce & trust infrastructure (marketplace → escrow → verify → reputation) | LIVE PRODUCT | Lead card. Verification = layer, not whole story. |
| 2 | **CompanyOS** | Tenant-neutral company intelligence + control plane (spec V6) | ARCHITECTURE / SPEC | Architecture credibility. |
| 3 | **Cato + Genesis** | Company-level orchestrator + specialist agent workforce | ACTIVE DEVELOPMENT / LIVE runtime | Explicitly **not** finance-only. |
| 4 | **FinanceOS / LedgerOS pattern** | Enterprise AI ops architecture proven in finance domain | PRODUCTION SYSTEM (partial) / ACTIVE DEVELOPMENT | Pattern card; no private metrics. |
| 5 | **Proof stack** | InvoiceProof · AuditProof · VerifyAPI — fraud / audit trail / software-delivery proof | LIVE PRODUCT pages | Can deep-link SwarmSync URLs; keep separate from card 1 subtitle. |
| 6 | **ProofRail** | Construction & real-estate finance OS with fail-closed proof gates | PRODUCTION SYSTEM | Architecture-only; **no client docs**. |
| 7 | **BookScout** | AP email → proof-gated QuickBooks proposals | ACTIVE DEVELOPMENT | Distinct AP product (ap-hub). |
| 8 | **Conduit family** | Audited headless Conduit + headed Halo execution layer | REFERENCE / ACTIVE DEVELOPMENT | Halo description = headed policy/approval browser **only**. |
| 9 | **ConduitScore** | AI visibility scoring SaaS | LIVE PRODUCT | https://conduitscore.com |
| 10 | **Expense Optimization Audit** | Evidence-backed expense replacement decision briefs | WORKING PROTOTYPE | Entry offer. |
| 11 | **Real-Time AI Sales Coach (CUE)** | Private live-call coaching overlay / coach | WORKING PROTOTYPE | Enablement SaaS path. |

**Optional 12th (if Ben wants acquisition narrative):**  
**Off-Market Succession Radar** — private acquisition sourcing (listed + succession pipelines). Mark **CONFIDENTIAL / operator tool** — or keep off homepage and only on About.

**Do not put on homepage as cards:** Sales Distribution Engine, IETF suite (use proof strip), Aptria (can be 12th **or** About “services brand”), Demo Investor, E4L internals.

**Suggested grouping under Selected Work intros (not separate cards):**  
- “Platform” = 1–3  
- “Operations systems” = 4–7  
- “Agent tooling & visibility” = 8–9  
- “Commercial wedges” = 10–11  

---

# F. CONFIDENCE GAPS / CONFLICTS

1. **Cato identity:** Daemon README vs CompanyOS orchestrator vs FinanceOS packaging — all real; portfolio must present **orchestrator**, with daemon as implementation, finance as domain proof.  
2. **SwarmSync maturity:** Live marketplace claims vs historical readiness audits on proof marketing — use **LIVE PRODUCT** carefully; avoid fabricated volume metrics.  
3. **`IMPLEMENTATION_PLAN(1).md`:** Not found; Expense Scanner uses `IMPLEMENTATION_PLAN.md`.  
4. **Off-Market SPEC filename** uses special dash; content verified via Python read.  
5. **invoice-proof URL fetch quirk** — confirm in browser before citing as sole live proof; code + proof-tools cards are solid.  
6. **BookScout** was “not found” in earlier RESEARCH-SOT; this pass maps it to **ap-hub** README title.

---

# G. ARTIFACTS TOUCHED

| Path | Role |
|---|---|
| This file | Canonical task-001 audit output |
| Prior `RESEARCH-SOT-INPUT.md` | Partial overlap; this file supersedes for hierarchy/Halo/BookScout/CompanyOS V6 depth |

---

*End of WORK-AUDIT — Marcus, O2O task-001 (+007 start). Read-only.*
