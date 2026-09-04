# RESEARCH-SOT-INPUT — O2O tasks 006–008 (Marcus, read-only)

**Gathered:** 2026-09-04  
**Rule:** Facts only from local repos under `C:\Users\Work\Desktop\GitHub`, Datatracker, W3C, and public GitHub/org pages. No invented contact data. Internet-Drafts are **not** approved IETF standards.

---

## A) FLAGSHIP PROJECTS

Status words used: **implemented** / **demonstrated** / **specified** / **experimental** / **planned**.  
Where sources conflict, the more conservative status is listed and the conflict is noted under Confidence Gaps.

| Project | Local path(s) | One-line purpose (source-backed) | Status | Notes / public refs |
|---|---|---|---|---|
| **SwarmSync** | `C:\Users\Work\Desktop\GitHub\swarmsync` | Agent marketplace / commerce platform with AP2 escrow, verification, SwarmScore reputation, and proof-product front door (InvoiceProof / AuditProof / VerifyAPI) — not verification-only. | **implemented** (codebase + live product site); proof surfaces historically **demonstrated** with labeled samples | Local: `apps/api/README.md` (“agent marketplace platform”); public: https://swarmsync.ai/ ; GitHub org private mirror `BenStoneAI/SwarmSync`; public specs under `swarmsync-ai/*`. Portfolio copy in `ben-stone-ai` frames it as verification R&D — **narrower than** local/public product truth. |
| **Company OS / Master OS** | `C:\Users\Work\Desktop\GitHub\MasterOS` | Tenant-neutral company intelligence + control plane (CompanyOS): one NL interface to resolve company knowledge, work, ownership, approvals, provenance. | **specified** | `COMPANYOS_MASTER_BUILD_SPEC_V6.md` (“Build-ready … architecture specification”). Public repo: https://github.com/BenStoneAI/Master-OS . No implementation README found in local folder (5 files: specs + audit map). |
| **FinanceOS + Cato + Genesis** | Cato: `C:\Users\Work\Desktop\GitHub\Cato` · Genesis: `C:\Users\Work\Desktop\GitHub\Genesis Agents` · related GH: `BenStoneAI/FINAL-E4Life-FinanceOS`, `BenStoneAI/Cato-FinanceOS` | **Cato** = auditable local AI agent daemon / orchestrator; **Genesis** = FastAPI gateway of specialized agents; together with FinanceOS as finance ops stack (Cato routes, Genesis agents). | **implemented** (Cato daemon + Genesis gateway code); FinanceOS as named product **implemented/partial** in private GH repos (not fully re-verified from Desktop README) | Cato README: “AI agent daemon”; Genesis `CLAUDE.md`: deployed `https://swarmsync-agents.onrender.com`, 20+ specialised agents. Portfolio (`ben-stone-ai` projects.ts): FinanceOS “Active Development,” not production. |
| **Expense Replacement Engine** | `C:\Users\Work\Desktop\GitHub\Expense Scanner` | Vertical slice: one real expense → defendable decision brief (requirements, alternatives, TCO with evidence IDs, recommendation). | **demonstrated** / near-complete vertical slice | README: Phases 1–6 complete; Phase 7 = probe on a real ledger. Loopback-only server; no autonomous buy/cancel. |
| **BookScout / AP automation** | **Not found** as a named local repo under Desktop GitHub | — | **unknown** | No `BookScout*` path. Closest AP-adjacent work is ProofRail (construction-finance / QBO / payment ops) and SwarmSync InvoiceProof (AP fraud/risk checks), not a product named BookScout. |
| **ConduitScore** | Embedded in `swarmsync` (`ConduitScoreSiteDesign.md`, payments/ConduitScore Nest modules) | AI-visibility / “how AI perceives your digital presence” scoring product (design + Stripe fix-order callbacks inside SwarmSync). | **experimental** / productized surfaces partial | Design doc: “Visibility Beyond the Visible.” Footer trust badge “ConduitScore Verified.” Separate from **SwarmScore** (agent reputation). No standalone Desktop repo. |
| **Real-Time AI Sales Coach** | `C:\Users\Work\Desktop\GitHub\Real-time-AI-Sales-Coach\AI-Real-Time-Answers` | Windows desktop app **CUE**: local dual-channel listen + one-sentence answer overlay for live calls (no bot joins call). | **implemented** (desktop app architecture); portfolio marks **Prototype / Active Development** | README branded CUE; Tauri/MSI; Anthropic + Fireflies; consent controls. |
| **InvoiceProof / AuditProof / VerifyAPI** | Inside `swarmsync` (web + API + proof-pipeline / proof-eval) | Proof suite: invoice risk before pay; AI-work audit records; output/software-delivery validation against evidence. | **implemented** engines; public demos often **demonstrated** with sample labels | Live product pages on https://swarmsync.ai/ ; readiness audit 2026-05/06: engines real, some marketing/copy issues remediating; paid launch historically “conditional.” |
| **ProofRail** | `C:\Users\Work\Desktop\GitHub\Accounting Systems\ProofRail-App` | Adaptive-style construction-finance / QBO ops app with SwarmSync proof rails at material actions; payment-ops state machine (human-execution-only Phase 3 slice). | **implemented** (app + specs); payment-ops persistence still **experimental** | `CLAUDE.md`: “physics (state machines, proofs, QBO writes)”; notes another path as historically canonical clone (`foxfirepoets/ProofRail-App`). Payment-ops README: in-memory / not production money movement. |
| **Conduit** (stronger production-adjacent build) | `C:\Users\Work\Desktop\GitHub\Conduit` | Headless browser with cryptographic audit layer (SHA-256 chain, Ed25519, exportable proof). | **implemented** | PyPI `conduit-browser`; README claims 223 tests; product page https://swarmsync.ai/conduit |
| **conduit-halo** | `C:\Users\Work\Desktop\GitHub\conduit-halo` | Headed (visible) agent browser runtime with policy, approvals, action logs — trusted execution layer, not stealth. | **implemented** (monorepo apps/packages) | README: Playwright headed Chromium + Fastify/Next dashboard. |
| **IETF Protocols local package** | `C:\Users\Work\Desktop\GitHub\IETF Protocols` | Authoring/submission workspace for Stone Internet-Drafts (sources + UPDATES submission log). | **specified** / submission pipeline | See §B. |

### Stronger production-ready / production-adjacent builds found (local)

1. **SwarmSync** monorepo (API + web + agents gateway) — marketplace + proof suite + protocols reference impl.  
2. **Conduit** — published Python package + cryptographic session proofs.  
3. **Genesis Agents** — live Render gateway.  
4. **Cato** — installable daemon with budget caps / vault.  
5. **ProofRail-App** — substantial QBO/STV operating codebase (ops reality > marketing).  
6. **CUE (Real-Time AI Sales Coach)** — shippable desktop MSI path documented.

---

## B) IETF DRAFTS (canonical 8)

**Canonical set (portfolio brief):** ATXN, VCAP, VCAP-AP2, AIVS, ATEP, SwarmScore V1, SwarmScore V2 Canary, ADRP.  
These are **Individual Submission Internet-Drafts / work in progress** — **not** IETF-approved standards, RFCs, or WG consensus documents.

| Stack | Short | Exact draft name (stem) | Title | Datatracker |
|---|---|---|---|---|
| DEFINE | ATXN | `draft-stone-atxn` | ATXN: Agent-to-Agent Transaction Definition Protocol | https://datatracker.ietf.org/doc/draft-stone-atxn/ |
| SETTLE | VCAP | `draft-stone-vcap` | VCAP: Verified Commerce for Agent Protocols | https://datatracker.ietf.org/doc/draft-stone-vcap/ |
| SETTLE | VCAP-AP2 | `draft-stone-vcap-ap2-binding` | VCAP-AP2 Binding: Verified Delivery Settlement for the Agent Payments Protocol *(local UPDATES title; Datatracker -00 used “Verified Commerce Settlement…”)* | https://datatracker.ietf.org/doc/draft-stone-vcap-ap2-binding/ |
| PROVE | AIVS | `draft-stone-aivs` | AIVS: Agentic Integrity Verification Standard | https://datatracker.ietf.org/doc/draft-stone-aivs/ |
| CARRY TRUST | ATEP | `draft-stone-atep` | ATEP: Agent Trust and Execution Passport | https://datatracker.ietf.org/doc/draft-stone-atep/ |
| REPUTATION | SwarmScore V1 | `draft-stone-swarmscore-v1` | SwarmScore V1: Volume-Scaled Agent Reputation Protocol | https://datatracker.ietf.org/doc/draft-stone-swarmscore-v1/ |
| REPUTATION | SwarmScore V2 Canary | `draft-stone-swarmscore-v2-canary` | SwarmScore V2 Canary: Safety-Aware Agent Reputation Protocol | https://datatracker.ietf.org/doc/draft-stone-swarmscore-v2-canary/ |
| DISPUTES | ADRP | `draft-stone-adrp` | ADRP: Agent Dispute Resolution Protocol | https://datatracker.ietf.org/doc/draft-stone-adrp/ |

### Revision / submission snapshot (2026-09-04)

Local `IETF Protocols\UPDATES\submission-log\STATUS.md` records **9** Datatracker uploads (portfolio **8** + AREF), all posted checks-passed, waiting on author confirmation to `benstone@swarmsync.ai`:

| Upload file | Datatracker status (local log) |
|---|---|
| `draft-stone-aivs-01.xml` | AWAITING_APPROVAL |
| `draft-stone-vcap-ap2-binding-01.xml` | AWAITING_APPROVAL |
| `draft-stone-swarmscore-v1-01.xml` | AWAITING_APPROVAL *(live Datatracker already showed -01 active when sampled)* |
| `draft-stone-swarmscore-v2-canary-01.xml` | AWAITING_APPROVAL |
| `draft-stone-vcap-02.xml` | AWAITING_APPROVAL |
| `draft-stone-atep-02.xml` | AWAITING_APPROVAL |
| `draft-stone-atxn-01.xml` | AWAITING_APPROVAL |
| `draft-stone-adrp-01.xml` | AWAITING_APPROVAL |
| `draft-stone-aref-00.xml` | AWAITING_CONFIRMATION |

**AREF — not in the canonical 8:**  
- Name: `draft-stone-aref`  
- Title: Agent Referral and Escrow Framework (AREF)  
- Local source: `IETF Protocols\UPDATES\sources\draft-stone-aref-01.md` (authoring -01 text; submission log uploaded **-00**)  
- Include in portfolio “8” lists: **No** (ninth draft in UPDATES package). Confirm Datatracker page after author confirmation: https://datatracker.ietf.org/doc/draft-stone-aref/ (may 404 until confirmed).

Public companion repos (specs, not standards):  
https://github.com/swarmsync-ai/aivs-spec · https://github.com/swarmsync-ai/vcap-spec · https://github.com/swarmsync-ai/atep-spec · https://github.com/swarmsync-ai/swarmscore-spec

---

## C) W3C AIVS Community Group

| Field | Fact |
|---|---|
| Official group URL | https://www.w3.org/groups/cg/aivs/ |
| Community home / blog | https://www.w3.org/community/aivs/ |
| Full name | Agentic Integrity Verification Specification Community Group |
| Shortname | `aivs` |
| Co-chairs (W3C groups page Leadership) | **Erik Newton** and **Ben Stone** |
| Endorsement | W3C hosting **does not** imply endorsement of activities (stated on community pages). |
| Call for Participation | https://www.w3.org/community/aivs/2026/04/05/call-for-participation-in-agentic-integrity-verification-specification-community-group/ — notes group proposed 2026-03-14 by Ben Stone; supporters listed there. |

Do **not** claim W3C Recommendation status, standards-track approval, or IETF/W3C joint endorsement.

---

## D) SAFE PUBLIC LINKS + CONTACT

### GitHub / orgs

| Link | Notes |
|---|---|
| https://github.com/BenStoneAI | Org/user profile (login `BenStoneAI`; public repos include `Master-OS`, `Genesis-Agents`, `Cato-FinanceOS`, `portfolio-site`; many repos private). |
| https://github.com/BenStoneAI/Master-OS | Public |
| https://github.com/BenStoneAI/Genesis-Agents | Public — “E4L Genesis Agents — FastAPI gateway…” |
| https://github.com/BenStoneAI/Cato-FinanceOS | Public |
| https://github.com/BenStoneAI/portfolio-site | Public |
| https://github.com/swarmsync-ai | Spec + demo org (public): `aivs-spec`, `vcap-spec`, `atep-spec`, `swarmscore-spec`, `commerce-demo-agent` |
| https://github.com/bkauto3/cato | Cited in local Cato README clone URL |
| https://github.com/bkauto3/Conduit | Cited in local Conduit README |
| https://github.com/bkauto3/SwarmSync | Cited in ATEP Protocols README as reference implementation |

### Product / protocols

| Link | Notes |
|---|---|
| https://swarmsync.ai/ | SwarmSync product home |
| https://swarmsync.ai/protocols.md | Protocol map (VCAP/ATEP/AIVS narrative) |
| https://swarmsync.ai/swarm-score | SwarmScore product page |
| https://swarmsync.ai/conduit | Conduit product page |
| https://ben-stone-ai.vercel.app | Portfolio site URL in `ben-stone-ai` `src/content/site.ts` |

### Contact (do not invent)

| Field | Value |
|---|---|
| Email (portfolio placeholders) | **TBD** — `ben-stone-ai` still has `ben@your-domain.com` |
| Email (IETF / SwarmSync submissions) | `benstone@swarmsync.ai` appears on Datatracker author lines and UPDATES STATUS.md (operational for drafts; confirm before publishing on portfolio) |
| LinkedIn | **TBD** — portfolio placeholder `https://www.linkedin.com/in/your-profile` |
| GitHub profile link on portfolio | **TBD** — still `https://github.com/your-username` in `site.ts` |

---

## Confidence gaps

1. **BookScout** — no local/public confirmation; do not list as a flagship until a real path or URL is found.  
2. **SwarmSync status for resume** — product site + monorepo say live marketplace/proof suite; older portfolio case study says Architecture/R&D / verification-only — reconcile before shipping claims.  
3. **IETF revision pins** — datatracker live revision vs UPDATES “awaiting approval” can drift hour-to-hour; always cite the **doc URL** (stem), not a frozen `-0x` in marketing, unless re-checked that day.  
4. **AREF** — exists in UPDATES as 9th draft; **excluded** from the portfolio “8”; Datatracker presence depends on author confirmation.  
5. **W3C chair wording** — groups page lists co-chairs Erik Newton & Ben Stone; community CfP historically said “must now choose a chair” — prefer the **groups Leadership** page as current, re-fetch if copy must be exact.  
6. **ProofRail canonical clone** — Desktop GitHub copy exists; `CLAUDE.md` claims another machine path / `foxfirepoets/ProofRail-App` as historical canonical — treat Desktop path as *a* working tree, not sole provenance.  
7. **LinkedIn / personal email / personal GitHub username for site footer** — still TBD in portfolio config; do not invent.  
8. **FinanceOS** as single Desktop folder — not present under that exact name; reconstruct from Cato + Genesis + `BenStoneAI/*FinanceOS*` private/public repos.
