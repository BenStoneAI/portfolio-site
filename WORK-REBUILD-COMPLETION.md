# WORK-REBUILD-COMPLETION — O2O wrap-up

**Agents:** Jackson (deploy + live verify) → Morgan (this consolidation)  
**Date:** 2026-09-04  
**Repo:** `C:\Users\Work\Desktop\GitHub\ben-stone-ai` → https://github.com/BenStoneAI/portfolio-site  
**Branch:** `main`  
**HEAD (this wrap-up):** `49c723f2ed37d21dbec23f8a3bde2f1d82967a97` — *Fix Work audit diagram framing for Cato and Conduit Halo.*

**Verdict:** Work rebuild complete on production (`ben-stone-ai.vercel.app`). Custom domain DNS still pending at GoDaddy. Hudson-Kraken (work section) **PASSED WITH FIXES**.

---

## 1. Production deploy (Jackson)

| Field | Value |
|-------|--------|
| Project | `ben-stone-ai` (`prj_812KcXw4LEnRpNANibmyr4P4gqgp`) |
| Team | `ben-stones-projects-ff17da1d` / `team_ItXXuA5OqyJhix2MY4fbk5hA` |
| Command | `npx vercel --prod --yes` (existing project only) |
| **New deploy (HEAD `49c723f`)** | `dpl_3G3En3qoNTXfYUZXRXvzXMLueyDh` |
| **readyState** | **READY** |
| Inspect | https://vercel.com/ben-stones-projects-ff17da1d/ben-stone-ai/3G3En3qoNTXfYUZXRXvzXMLueyDh |
| Deployment URL | https://ben-stone-grvoinooc-ben-stones-projects-ff17da1d.vercel.app |
| Production alias | https://ben-stone-ai.vercel.app |
| Also aliased | `benstone-ai.com`, `www.benstone-ai.com` (DNS not yet pointing here) |

### Prior work-rebuild deploy (HEAD `88fb549`)

| Field | Value |
|-------|--------|
| Git | `88fb549` — *Rebuild Selected Systems IA from work audit.* |
| **Deploy id** | `dpl_8bNVL28eXrZmzaF7obYSrDSDTECf` |
| readyState | READY (verified in `VERIFY-WORK-REBUILD.md`) |
| Inspect | https://vercel.com/ben-stones-projects-ff17da1d/ben-stone-ai/8bNVL28eXrZmzaF7obYSrDSDTECf |

---

## 2. Live check (post-`49c723f` deploy)

**URL:** https://ben-stone-ai.vercel.app/

| Check | Result |
|-------|--------|
| Section heading | **Present** — `Selected Systems & Products` (HTML entity form `Selected Systems &amp; Products`) |
| 12 cards | SwarmSync, CompanyOS, Cato + Genesis, FinanceOS / LedgerOS, Proof Stack, ProofRail, BookScout, Conduit → Halo, ConduitScore, Expense Optimization Audit, Real-Time AI Sales Coach, Aptria — all present |
| Old copy “Four systems…” | Absent |
| `github.com` homepage CTAs | **Absent** (GitHub chrome withheld) |
| Resume | Nav/footer → `/resume.pdf` — **HTTP 200** (~76KB) |
| benstone-ai.com | Still GoDaddy DPS parking HTML — **not** the portfolio (see §7) |

---

## 3. Projects discovered (`WORK-AUDIT.md`)

Source: Marcus audit 2026-09-04. Status tags per audit vocabulary.

### A. Must-inspect

| # | Project | Status (audit) | Notes |
|---|---------|----------------|-------|
| 1 | SwarmSync | LIVE PRODUCT + ACTIVE DEVELOPMENT | Agent marketplace + commerce/trust; not verification-only |
| 2 | CompanyOS | ARCHITECTURE / SPEC | V6 white-label control plane |
| 3 | Cato | ACTIVE DEVELOPMENT / WORKING PROTOTYPE | Company orchestrator — **not** finance-bot-only |
| 4 | Genesis Agents | LIVE PRODUCT (runtime) + ACTIVE DEVELOPMENT | Specialist workforce gateway |
| 5 | FinanceOS / LedgerOS | PRODUCTION SYSTEM (partial) + ACTIVE DEVELOPMENT | Pattern card; no E4L dump |
| 6 | Proof stack (InvoiceProof · AuditProof · VerifyAPI) | LIVE product pages / implemented engines | Grouped as one portfolio card |
| 7 | ProofRail | PRODUCTION SYSTEM | Architecture-only publicly; client artifacts confidential |
| 8a | Conduit | REFERENCE IMPLEMENTATION + ACTIVE DEVELOPMENT | Headless audited browser |
| 8b | Conduit Halo | ACTIVE DEVELOPMENT / WORKING PROTOTYPE | Headed policy/approval browser — **not** a “score ring” |
| 8c | ConduitScore | LIVE PRODUCT | AI visibility SaaS — separate from Conduit/Halo and SwarmScore |
| 9 | Expense Optimization Scanner | WORKING PROTOTYPE | Entry audit service |
| 10 | Acquisition / Off-Market Succession | ACTIVE DEVELOPMENT / WORKING PROTOTYPE | Private operator tool |
| 11 | AI Sales & Distribution Engine | ARCHITECTURE / SPEC | Meta GTM |
| 12 | Real-Time AI Sales Coach (CUE) | WORKING PROTOTYPE / ACTIVE DEVELOPMENT | Desktop enablement |

### B. Other strong

| Project | Status | Notes |
|---------|--------|-------|
| Aptria | LIVE PRODUCT | Services brand |
| BookScout OS (ap-hub) | ACTIVE DEVELOPMENT | Distinct AP product |
| IETF / W3C protocol suite | REFERENCE / SPEC | Proof strip / Standards — not a product card |
| Demo Investor SS | Collateral | Exclude from homepage |

### C. Exclude candidates (audit §C — summary)

Sales Engine app as card; ProofRail deep client artifacts; E4L Control Plane / Coordination Ledger as separate cards; Cato-FinanceOS duplicate; Summa-Terra / estate / restructuring; IETF as product card; SwarmScore standalone; Halo as mystical brand; QB Cleanup; OpenClaw narratives; Meeting-AI as sales-coach demo.

Full detail: `WORK-AUDIT.md`.

---

## 4. Included vs excluded (`INCLUDE-EXCLUDE.md`)

### Included (12 homepage cards)

| # | Card | Slug | Visit Site |
|---|------|------|------------|
| 1 | SwarmSync | `swarmsync` | https://swarmsync.ai/ |
| 2 | CompanyOS | `companyos` | — |
| 3 | Cato + Genesis | `cato-genesis` | — |
| 4 | FinanceOS / LedgerOS | `financeos` | — |
| 5 | Proof Stack | `proof-stack` | https://swarmsync.ai/proof-tools |
| 6 | ProofRail | `proofrail` | — |
| 7 | BookScout | `bookscout` | — |
| 8 | Conduit → Halo | `conduit-family` | https://swarmsync.ai/conduit |
| 9 | ConduitScore | `conduitscore` | https://conduitscore.com/ |
| 10 | Expense Optimization Audit | `expense-optimization` | — |
| 11 | Real-Time AI Sales Coach | `realtime-sales-coach` | — |
| 12 | Aptria | `aptria` | https://aptria.net/ |

### Excluded (homepage / public case studies)

Sales & Distribution Engine; Off-Market Succession Radar; Demo Investor SS; E4L Control Plane / Coordination Ledger as separate cards; Cato-FinanceOS duplicate; Summa-Terra / estate folders; IETF as product card; SwarmScore flagship; Halo mystical card; lone InvoiceProof mega-card; Meeting-AI as coach demo; **GitHub CTAs / github.com evidence links**; raw Genesis Render URL; wrong/unowned domains (proofrail.com/.ai, invoiceproof.com, cato.ai, getconduit.com, aptria.com).

### Old slug redirects

| From | To |
|------|----|
| `/work/financeos-cato` | `/work/cato-genesis` |
| `/work/invoiceproof` | `/work/proof-stack` |
| `/work/conduit` | `/work/conduit-family` |

---

## 5. Exact card copy

Canonical file: **`CARD-COPY.md`** (mirrors `src/content/projects.ts`).

Section chrome: **Selected Systems & Products** — filters All · Agent Systems · Automation · Verification · Business Intelligence · Products.

One-liner summary (see file for full subtitle + status + Visit):

1. **SwarmSync** — Marketplace → escrow → verify → reputation  
2. **CompanyOS** — Tenant-neutral company intelligence + control plane  
3. **Cato + Genesis** — Orchestrator + specialists; finance is a proving domain, not the ceiling  
4. **FinanceOS / LedgerOS** — Ingest → orchestrate → specialists → verify → human gates → accounting outputs  
5. **Proof Stack** — InvoiceProof · AuditProof · VerifyAPI  
6. **ProofRail** — Fail-closed construction finance OS (architecture only)  
7. **BookScout** — Gmail AP → proof-gated QB proposals  
8. **Conduit → Halo** — Headless cryptographic audit + headed policy/approval runtime  
9. **ConduitScore** — AI visibility scoring SaaS  
10. **Expense Optimization Audit** — Evidence-backed replacement briefs  
11. **Real-Time AI Sales Coach** — Private live-call overlay (not Meeting-AI)  
12. **Aptria** — Human-sold AI automation services brand  

---

## 6. Public URLs tested

From `CARD-COPY.md` / `URL-TEST-RESULTS.md` (2026-09-04). Visit Site only where YES.

| URL | HTTP | Visit? |
|-----|------|--------|
| https://swarmsync.ai/ | 200 | YES |
| https://swarmsync.ai/proof-tools | 200 | YES |
| https://swarmsync.ai/invoice-proof | 200 | YES |
| https://swarmsync.ai/audit-proof | 200 | YES |
| https://swarmsync.ai/verify-api | 200 | YES |
| https://swarmsync.ai/conduit | 200 | YES |
| https://conduitscore.com/ | 200 | YES |
| https://aptria.net/ | 200 | YES |
| https://meeting-ai-stone.vercel.app/ | 200 | NO for sales coach (different product) |
| https://ben-stone-ai.vercel.app/ | 200 | Portfolio home |
| https://ben-stone-ai.vercel.app/about | 200 | About |
| https://ben-stone-ai.vercel.app/resume.pdf | 200 | Resume PDF |

Do **not** Visit-button: aptria.com, meetingai.com, cato.ai, getconduit.com, proofrail.com/.ai, invoiceproof.*, conduit-halo.com.

---

## 7. Conduit / Halo / ConduitScore (from audit)

### Conduit
Headless browser with cryptographic audit layer: every action on a SHA-256 hash chain, Ed25519 identity, exportable/verifiable proof. MCP server. PyPI `conduit-browser`. Verification oracle for SwarmSync settlement; tool for Genesis/Cato. **Not** ConduitScore.

### Conduit Halo (`conduit-halo`)
Standalone **visible (headed)** AI browser runtime: Playwright headed Chromium, policy engine (allow/block, approvals, session limits), action/screenshot logs with redaction, Fastify API + worker + Next.js dashboard. Explicitly **not** stealth/CAPTCHA-bypass/proxy rotation. No direct Conduit imports — adapter interfaces only. Do **not** invent “halo = score ring.” Fold under Conduit family on the homepage.

### ConduitScore
**AI visibility scoring SaaS** — crawler access, structured data, llms.txt, citation signals vs competitors. Live: https://conduitscore.com. Separate from **SwarmScore** (agent reputation) and from the Conduit/Halo browser runtimes. Prefer own homepage card.

---

## 8. Resume + no GitHub CTAs

| Item | Status |
|------|--------|
| Resume | `/resume.pdf` live (200); nav + footer link to PDF |
| GitHub CTAs | Withheld from homepage / Work Visit / evidence chrome (`github.com` absent on live home) |
| LinkedIn | Present in nav/contact |
| Standards Datatracker / W3C links | Kept (not GitHub product CTAs) |

---

## 9. DNS — benstone-ai.com (HUMAN NEEDED)

| Item | Status |
|------|--------|
| Vercel attach | Apex + www attached; deploy aliases include both |
| Registrar NS | Still GoDaddy `ns17.domaincontrol.com` / `ns18.domaincontrol.com` |
| Public probe | HTTP 200 from **GoDaddy DPS** parking — not portfolio HTML |
| Portfolio live URL | https://ben-stone-ai.vercel.app |

**Ben must update GoDaddy** (see `URL-TEST-RESULTS.md` § Domain attach):

- **Option A:** A `@` → `216.198.79.1` and `64.29.17.1`; CNAME `www` → `e1256f90699f271e.vercel-dns-017.com.`  
- **Option B:** Nameservers → `ns1.vercel-dns.com` / `ns2.vercel-dns.com`

Until then, share the `.vercel.app` URL.

---

## 10. Hudson-Kraken

| Audit | Scope | Verdict |
|-------|-------|---------|
| `HUDSON-KRAKEN-AUDIT.md` | Early SoT / standards / a11y | **PASSED WITH FIXES** |
| `HUDSON-KRAKEN-WORK.md` | Work rebuild @ `88fb549` (+ diagram fixes → `49c723f`) | **PASSED WITH FIXES** |

Work-section fixes: Cato/Genesis diagram no longer FinanceOS leak; Conduit/Halo dual diagram; Visit hygiene; confidentiality; lint+build green.

---

## 11. Artifact index

| File | Role |
|------|------|
| `WORK-AUDIT.md` | Full project discovery |
| `INCLUDE-EXCLUDE.md` | Card include/exclude + redirects |
| `CARD-COPY.md` | Exact card copy |
| `URL-TEST-RESULTS.md` | URL + DNS evidence |
| `VERIFY-WORK-REBUILD.md` | `88fb549` / `dpl_8bNVL…` verify |
| `HUDSON-KRAKEN-WORK.md` | Work rebuild audit |
| `HUDSON-KRAKEN-AUDIT.md` | Prior site audit |
| This file | O2O wrap-up |

---

## 12. Remaining for Ben

1. **GoDaddy DNS** for `benstone-ai.com` / `www` → Vercel (blocking custom domain)  
2. Optional: connect GitHub `portfolio-site` to Vercel for auto-deploy  
3. Optional polish only — public site is shippable on `.vercel.app`

---

*End of WORK-REBUILD-COMPLETION — Morgan / Jackson, O2O wrap-up.*
