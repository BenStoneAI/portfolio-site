# URL Test Results — O2O task-003 (partial) / task-009 prep

**Date:** 2026-09-04  
**Tester:** Jackson (CLI)  
**Method:** HTTP GET/HEAD via PowerShell `Invoke-WebRequest` and `curl.exe -L` where noted  
**Rule:** Only URLs that were requested, found in Desktop/GitHub READMEs / portfolio content / Ben’s Vercel projects, or named product probes from the task brief. No invented “live” product URLs.

---

## Visit Site usability legend

| Verdict | Meaning |
|---------|---------|
| **YES** | 200 with real product/content page; safe for a Visit Site button |
| **YES (use apex)** | Works after redirect; prefer the final URL on the button |
| **NO** | DNS fail, timeout, SSL fail, empty/parked/wrong product, or API 404 |

---

## Primary tests (task list)

| URL | HTTP | Notes | Visit Site? |
|-----|------|-------|-------------|
| https://swarmsync.ai | 200 | Final `https://swarmsync.ai/` — real SwarmSync site | **YES** |
| https://www.swarmsync.ai | 200 | Redirects to apex; same site | **YES (use apex)** |
| https://conduitscore.com | 200 | Live site | **YES** |
| https://www.conduitscore.com | 308 → 200 | `curl -L` lands on `https://conduitscore.com/` | **YES (use apex)** |

---

## Found / related product URLs (≤15 min scan)

Sources: `Desktop\GitHub` READMEs, `ben-stone-ai/src/content/projects.ts`, Vercel project list, Desktop ProofRail path mentions.

| URL | HTTP | Source / notes | Visit Site? |
|-----|------|----------------|-------------|
| https://swarmsync.ai/conduit | 200 | Portfolio `projects.ts` — Conduit product page | **YES** |
| https://swarmsync.ai/protocols.md | 200 | Portfolio link — markdown body (~5KB) | **YES** (docs, not marketing home) |
| https://swarmsync.ai/swarm-score | 200 | Portfolio link — SwarmScore page | **YES** |
| https://aptria.net | 200 | Vercel project `aptria` production URL; real Aptria site | **YES** |
| https://www.aptria.net | 200 | Real Aptria consulting site | **YES** |
| https://aptria.com | 200 | Empty HTML shell (`<title></title>`, ~168 bytes) | **NO** |
| https://www.aptria.com | 200 | Same empty shell | **NO** |
| https://aptria.ai | FAIL | DNS NXDOMAIN | **NO** |
| https://meeting-ai-stone.vercel.app | 200 | Vercel project `meeting-ai`; title “Meeting-AI - Quiet meeting assistant” | **YES** |
| https://meetingai.com | 200 | Tiny lander redirect to `/lander` — not Ben’s Meeting-AI | **NO** |
| https://www.meetingai.com | 200 | Same lander pattern | **NO** |
| https://meeting-ai.com | FAIL | SSL/TLS trust failure | **NO** |
| https://invoiceproof.com | FAIL | Timeout | **NO** |
| https://www.invoiceproof.com | FAIL | DNS NXDOMAIN | **NO** |
| https://proofrail.com | 200 | Responds, but third-party style title `proofrail.com` — **not confirmed as Ben’s product** in GitHub READMEs | **NO** (do not use until ownership confirmed) |
| https://www.proofrail.com | 200 | Same as above | **NO** |
| https://proofrail.ai | 200 | “ProofRail Advisory Services” — appears unrelated/third-party | **NO** |
| https://www.proofrail.ai | 200 | Same | **NO** |
| https://proofrail-mcp.onrender.com | 404 | Found in ProofRail-App docs as auth callback host; root is not a public product page | **NO** |
| https://cato.ai | 200 | GPU rentals site — **not** Ben’s Cato/FinanceOS repo | **NO** |
| https://getconduit.com | 200 | HVAC “Conduit Tech” — **not** SwarmSync Conduit browser | **NO** |
| https://conduit-halo.com | FAIL | DNS NXDOMAIN | **NO** |
| https://haloconduit.com | FAIL | DNS NXDOMAIN | **NO** |

**Not found as a public product URL:** InvoiceProof (no responding site). Meeting-AI public URL = Vercel alias above (README says “Meeting-AI Vercel URL”, no custom domain documented).

---

## Portfolio production smoke (post-deploy)

| URL | HTTP | Notes |
|-----|------|-------|
| https://ben-stone-ai.vercel.app | 200 | Home live |
| https://ben-stone-ai.vercel.app/about | 200 | About live |
| https://ben-stone-ai.vercel.app/resume.pdf | 200 | Resume PDF (~76KB) served |

---

## Domain attach — benstone-ai.com

| Item | Status |
|------|--------|
| Project | `ben-stone-ai` (`prj_812KcXw4LEnRpNANibmyr4P4gqgp`) |
| Team | `ben-stones-projects-ff17da1d` |
| Apex added | **Yes** — `benstone-ai.com` attached |
| www added | **Yes** — `www.benstone-ai.com` attached |
| DNS verified | **No** — misconfigured at registrar |
| Registrar NS | GoDaddy: `ns17.domaincontrol.com`, `ns18.domaincontrol.com` |
| Current apex A | `76.223.105.230`, `13.248.243.5` (parking / old) |
| Current www | CNAME → `benstone-ai.com.` (also wrong for Vercel) |

### DNS Ben must set at GoDaddy (domaincontrol)

**Option A — recommended records (keep GoDaddy nameservers):**

| Type | Name | Value |
|------|------|-------|
| A | `@` | `216.198.79.1` |
| A | `@` | `64.29.17.1` |
| CNAME | `www` | `e1256f90699f271e.vercel-dns-017.com.` |

(Fallback also accepted by older docs: A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`.)

**Option B — point nameservers to Vercel:**

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

Then re-run:  
`vercel domains verify benstone-ai.com --scope ben-stones-projects-ff17da1d`  
`vercel domains verify www.benstone-ai.com --scope ben-stones-projects-ff17da1d`

Until DNS updates, custom domain will not resolve to the portfolio even though it is attached and aliased on the deployment.

---

## Production deploy

| Field | Value |
|-------|-------|
| Deployment ID | `dpl_3DTdYmATrNdunGfWrY26wkmySwvV` |
| Ready state | **READY** |
| Target | production |
| Inspect | https://vercel.com/ben-stones-projects-ff17da1d/ben-stone-ai/3DTdYmATrNdunGfWrY26wkmySwvV |
| Prod URL | https://ben-stone-ai.vercel.app |
| Alias note | CLI also reported alias `https://benstone-ai.com` (DNS still pending) |
| Git | `43e5374` — Hide GitHub CTAs and refresh resume PDF |

---

## Recommended Visit Site buttons (confirmed usable)

1. `https://swarmsync.ai/` (+ optional deep links `/conduit`, `/swarm-score`)
2. `https://conduitscore.com/`
3. `https://aptria.net/`
4. `https://meeting-ai-stone.vercel.app/` (until a custom Meeting-AI domain exists)

Do **not** button: aptria.com, meetingai.com, cato.ai, getconduit.com, proofrail.com/.ai, invoiceproof.*, proofrail-mcp root.
