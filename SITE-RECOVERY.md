# SITE-RECOVERY — ben-stone-ai / portfolio

**Author:** Morgan (O2O task-003)  
**Date:** 2026-09-04  
**Status:** Operational runbook — source recovered; GitHub canonical not yet established

---

## Scope

**IN SCOPE:** Recovered portfolio source ↔ Vercel prod ↔ planned GitHub migration.

**OUT OF SCOPE:** IETF draft submission work (already done elsewhere). Do not mix IETF Protocols repo work into this recovery chain.

---

## Source of truth (today)

| Layer | Value |
|-------|--------|
| Local recovered source | `C:\Users\Work\Desktop\GitHub\ben-stone-ai` |
| Recovery method | Vercel **deployment file API** (not local original) — **46 files** |
| Package name | `ben-stone-portfolio` (`package.json`) |
| Live inventory | `C:\Users\Work\Desktop\portfolio-site-recovery\LIVE-SITE-INVENTORY.md` (Marcus / O2O task-001c) |
| Live URL | https://ben-stone-ai.vercel.app |
| Git remote | **NONE** (CLI upload only) |
| Intended GitHub | `BenStoneAI/portfolio-site` (**does not exist yet**) |

### Vercel project link (local)

`.vercel/project.json` already links this folder:

- **projectId:** `prj_812KcXw4LEnRpNANibmyr4P4gqgp`
- **orgId / team:** `team_ItXXuA5OqyJhix2MY4fbk5hA` (slug: `ben-stones-projects-ff17da1d`)
- **projectName:** `ben-stone-ai`

### Latest known production deployment

| Field | Value |
|-------|--------|
| Deployment id | `dpl_9teJkt17qJ9tnouKT1eVC58FVeWp` |
| Deployed by | `rainking6693-4289` |
| Git connection | **NONE** |

---

## 1. Source → Vercel chain (text diagram)

```
[ORIGINAL LOCAL SOURCE]          ← LOST / not available
         │
         │  (prior: vercel deploy / CLI upload)
         ▼
[VERCEL PROJECT: ben-stone-ai]
  prj_812KcXw4LEnRpNANibmyr4P4gqgp
  team_ItXXuA5OqyJhix2MY4fbk5hA
         │
         ├── LIVE PROD ──► https://ben-stone-ai.vercel.app
         │                 latest: dpl_9teJkt17qJ9tnouKT1eVC58FVeWp
         │
         └── Deployment file API (46 files)
                    │
                    ▼
[RECOVERED LOCAL]
  C:\Users\Work\Desktop\GitHub\ben-stone-ai
  package: ben-stone-portfolio
  .vercel/project.json → same project
                    │
                    │  (planned, not done)
                    ▼
[GITHUB] BenStoneAI/portfolio-site   ← DOES NOT EXIST YET
                    │
                    │  (then connect Vercel Git carefully)
                    ▼
[VERCEL GIT INTEGRATION] → future deploys from main
```

**Inventory sidecar (read-only evidence):**  
`C:\Users\Work\Desktop\portfolio-site-recovery\LIVE-SITE-INVENTORY.md`

---

## 2. Rollback (redeploy a previous deployment)

Prod is currently **CLI/upload-based**, not Git-triggered. Prefer promote/redeploy of a known-good deployment over rewriting history.

### Option A — Vercel Dashboard (safest for humans)

1. Open project **ben-stone-ai** in Vercel (team `ben-stones-projects-ff17da1d`).
2. **Deployments** → find the last known-good deployment (e.g. `dpl_9teJkt17qJ9tnouKT1eVC58FVeWp` if that is still the good baseline).
3. ⋯ menu → **Promote to Production** (or Instant Rollback if shown).
4. Confirm https://ben-stone-ai.vercel.app serves the expected build.

### Option B — Vercel CLI (from recovered folder)

```bash
cd C:\Users\Work\Desktop\GitHub\ben-stone-ai
# Confirm link
npx vercel project ls
# Redeploy current local tree to prod (only if local matches known-good)
npx vercel --prod
```

To roll back to a **specific** prior deployment without changing local files, use Dashboard promote (Option A). CLI redeploy ships **whatever is on disk now**.

### Option C — Re-pull files from a deployment (source recovery again)

If local tree is corrupted, re-fetch from a deployment id via Vercel deployment file API (same method used for the 46-file recovery), then redeploy.

**Do not** delete the Vercel project or unlink `.vercel/project.json` during rollback.

---

## 3. Migration plan → `BenStoneAI/portfolio-site` (non-destructive)

Goal: establish GitHub as canonical **without** taking prod offline or force-overwriting Vercel.

### Phase A — Local git only (no Vercel change)

```bash
cd C:\Users\Work\Desktop\GitHub\ben-stone-ai
git init
# Add .gitignore if missing (node_modules, .next, .env*)
git add .
git commit -m "Initial commit: recovered portfolio source from Vercel deployment"
```

Do **not** push until the empty repo exists.

### Phase B — Create empty GitHub repo

1. Create **`BenStoneAI/portfolio-site`** (empty, no README/license if possible — avoids merge conflict).
2. Visibility: private until content review, then public if desired.

```bash
gh repo create BenStoneAI/portfolio-site --private --source=. --remote=origin --push
# OR manual:
git remote add origin https://github.com/BenStoneAI/portfolio-site.git
git branch -M main
git push -u origin main
```

### Phase C — Connect Vercel Git (careful)

1. In Vercel → **ben-stone-ai** → **Settings → Git**.
2. Connect `BenStoneAI/portfolio-site`.
3. Confirm **Production Branch** = `main`.
4. **Do not** change the production domain or delete the existing project.
5. Prefer first Git deploy as a **Preview** deploy; only promote after smoke check.
6. Keep CLI deploy as fallback until one successful Git prod deploy is verified.
7. After Git prod works: stop ad-hoc CLI deploys unless emergency.

### Phase D — Smoke checklist after first Git prod

- `/` `200`
- `/about` `200`
- `/work/swarmsync` (or another case study) `200`
- `/resume.pdf` still expected **404** until asset is added (see defects)
- Placeholders still live until content fields are filled

---

## 4. Manual fields still unknown (TBD — do not invent)

| Field | Current placeholder | Real value |
|-------|---------------------|------------|
| Contact email | `ben@your-domain.com` | **TBD** |
| LinkedIn URL | `https://www.linkedin.com/in/your-profile` | **TBD** |
| GitHub profile URL | `https://github.com/your-username` | **TBD** (repo target is `BenStoneAI/portfolio-site`; personal profile URL still TBD) |
| Personal domain | `your-domain.com` | **TBD** |
| Resume PDF asset | linked as `/resume.pdf` | **TBD** (file missing) |

Source of placeholders: `src/content/site.ts` + live inventory probes.

---

## 5. Known defects (from live inventory)

Evidence: `LIVE-SITE-INVENTORY.md` (2026-09-04).

| Defect | Detail |
|--------|--------|
| `/resume.pdf` **404** | Linked in header, footer, About “Download Resume” — file not deployed |
| `https://github.com/your-username` | Placeholder; profile 404 |
| `https://www.linkedin.com/in/your-profile` | Placeholder path |
| `mailto:ben@your-domain.com` | Placeholder mailbox |
| `/resume` HTML route | 404 (contact is `/#contact` only) |

These are **content/ops fixes**, not recovery-chain blockers.

---

## 6. Quick operator commands

```bash
# Linked project check
type .vercel\project.json

# Local build sanity (after npm install)
npm install
npm run build

# Prod deploy (CLI path — current model)
npx vercel --prod
```

---

## Evidence index

| Evidence | Location / id |
|----------|----------------|
| Recovered tree | `C:\Users\Work\Desktop\GitHub\ben-stone-ai` (46 files via deployment API) |
| Vercel project | `prj_812KcXw4LEnRpNANibmyr4P4gqgp` |
| Team | `team_ItXXuA5OqyJhix2MY4fbk5hA` |
| Latest prod dpl | `dpl_9teJkt17qJ9tnouKT1eVC58FVeWp` |
| Live inventory | `C:\Users\Work\Desktop\portfolio-site-recovery\LIVE-SITE-INVENTORY.md` |
| Package name | `ben-stone-portfolio` |

**IETF submission:** out of scope / already complete — not part of this runbook.
