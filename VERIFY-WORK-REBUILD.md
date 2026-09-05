# VERIFY-WORK-REBUILD — O2O tasks 008–009

**Agent:** Jackson  
**Repo:** `C:\Users\Work\Desktop\GitHub\ben-stone-ai` (GitHub: BenStoneAI/portfolio-site)  
**Branch:** `main`  
**HEAD:** `88fb54931f5fd321ba4db51c8fc9d376f48940be` (`88fb549`) — *Rebuild Selected Systems IA from work audit.*  
**Date:** 2026-09-04 15:10:25 -06:00

---

## 1. HEAD confirmation

| Check | Result |
|-------|--------|
| `git rev-parse HEAD` | `88fb54931f5fd321ba4db51c8fc9d376f48940be` |
| Remote | `https://github.com/BenStoneAI/portfolio-site.git` |
| Branch | `main` tracking `origin/main` at `88fb549` |

**PASS** — HEAD is `88fb549` (required: 88fb549 or later).

---

## 2. Local lint / build

| Command | Exit |
|---------|------|
| `npm run lint` | **0** |
| `npm run build` | **0** (Next.js 16.3.4 Turbopack; 33 static pages) |

---

## 3. Production deploy (existing project ONLY)

| Field | Value |
|-------|--------|
| Scope | `ben-stones-projects-ff17da1d` |
| Project | `ben-stone-ai` |
| Command | `vercel --prod --yes --scope ben-stones-projects-ff17da1d` |
| **Deploy id** | `dpl_8bNVL28eXrZmzaF7obYSrDSDTECf` |
| **readyState** | **READY** |
| Target | production |
| Production URL | https://ben-stone-ai.vercel.app |
| Inspect | https://vercel.com/ben-stones-projects-ff17da1d/ben-stone-ai/8bNVL28eXrZmzaF7obYSrDSDTECf |
| Deployment URL | https://ben-stone-aliiz3mv8-ben-stones-projects-ff17da1d.vercel.app |

**READY confirmed.**

---

## 4. Live verification (https://ben-stone-ai.vercel.app)

### Work heading / old copy

- **FOUND:** `Selected Systems & Products` (HTML: `Selected Systems &amp; Products`)
- **ABSENT:** `Four systems, four different problems`

Snippet:
```
Selected Systems &amp; Products
```

### Project / proof strings

| String | Present |
|--------|---------|
| SwarmSync | yes — `/work/swarmsync">SwarmSync` |
| ConduitScore | yes — `/work/conduitscore">ConduitScore` |
| Aptria | yes — `/work/aptria">Aptria` |
| proof-tools | yes — `https://swarmsync.ai/proof-tools` |

### GitHub CTAs

- **OK:** no `github.com/BenStoneAI` in homepage HTML

### resume.pdf

- `GET/HEAD https://ben-stone-ai.vercel.app/resume.pdf` → **200**

---

## 5. DNS status — benstone-ai.com (report only)

| Item | Status |
|------|--------|
| Vercel domain | Registered under team; attached to `ben-stone-ai` (apex + www) |
| Edge Network | yes (Vercel side) |
| Intended NS | `ns1.vercel-dns.com` / `ns2.vercel-dns.com` |
| Current NS | `ns17.domaincontrol.com` / `ns18.domaincontrol.com` (**mismatch**) |
| Public A | `76.223.105.230`, `13.248.243.5` (GoDaddy/Amazon-style, not Vercel `76.76.21.21`) |
| HTTPS probe | HTTP 200 from **DPS** parking/proxy — **not** Vercel app HTML (`Selected Systems` / `SwarmSync` **missing** on custom domain) |
| Vercel warning | Domain not configured properly — set A → `76.76.21.21` or switch NS to Vercel |

**Conclusion:** GoDaddy DNS/nameservers still pending correct Vercel pointing. Production verified on `ben-stone-ai.vercel.app`. Custom domain alias exists in Vercel but public traffic is not yet serving the portfolio.

---

## Verdict

| Gate | Result |
|------|--------|
| HEAD ≥ 88fb549 | PASS |
| lint + build | PASS |
| Deploy to `ben-stone-ai` only | PASS |
| readyState READY | **PASS** — `dpl_8bNVL28eXrZmzaF7obYSrDSDTECf` |
| Live work IA + project strings | PASS on vercel.app |
| No BenStoneAI GitHub CTAs | PASS |
| resume.pdf 200 | PASS |
| benstone-ai.com DNS | **PENDING** (GoDaddy NS still active) |

**O2O 008–009 VERIFY: READY on vercel.app; custom domain DNS still pending.**

