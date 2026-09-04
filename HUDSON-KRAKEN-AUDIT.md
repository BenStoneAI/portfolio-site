# Hudson-Kraken Unified Audit Report — O2O Step 4.7

**Date:** 2026-09-04  
**Target:** `BenStoneAI/portfolio-site` @ `73c6ea9` (+ this audit’s follow-up commit)  
**Repo path:** `C:\Users\Work\Desktop\GitHub\ben-stone-ai`  
**Scope:** `src/content/*`, new UI (`ProofStrip`, `StandardsSection`, `EvidenceLinks`, etc.), pages that render standards/projects, link handling  
**Auditors:** Hudson (Phase 1) → Kraken (Phase 2 independent verify)

**Verdict:** PASSED WITH FIXES

---

## Executive Summary

| Area | Result |
|------|--------|
| XSS from content | PASS — content rendered as React text; only `dangerouslySetInnerHTML` is static theme bootstrap |
| Broken links (public evidence URLs) | PASS — 22/22 HEAD 200 |
| Placeholder leakage (runtime `src/`) | PASS — D-01/D-02 already fixed in `73c6ea9`; no live `your-*` / `/resume.pdf` |
| Standards claims (IETF RFC / W3C Rec) | PASS — hedged correctly; Co-Chair verified on live W3C groups page |
| Confidentiality | PASS — employer metrics/private data explicitly withheld |
| Accessibility basics | PASS WITH FIXES — skip link + labels already present; fixed W3C hash target, external-link SR text, mobile menu dialog/scroll lock |
| Lint / build after fixes | PASS — `npm run lint` 0; `npm run build` 0 (19 static routes) |

---

## Phase 1 — Hudson

### Checklist results

#### Security / XSS
- No markdown/HTML pipeline over portfolio content (`projects`, `standards`, `site`, `leadership`).
- Sole `dangerouslySetInnerHTML`: `src/app/layout.tsx` inlines `themeInitScript` from `src/lib/theme-script.ts` — fixed string, validates `localStorage` theme to `light|dark` only.
- External links use `rel="noopener noreferrer"`.

#### Broken links
HEAD-checked (all **200**): 8 Datatracker drafts, 4 `swarmsync-ai/*-spec` repos, W3C group + community + CfP, GitHub `BenStoneAI` + Cato/Genesis repos, SwarmSync product URLs, PyPI `conduit-browser`.

#### Placeholder leakage
- Runtime `src/`: no `your-domain` / `your-username` / `your-profile` / `TODO(ben)`.
- Resume: nav → `/about#resume` honesty copy; `public/resume.pdf` absent by design (operator README only).
- Email / LinkedIn omitted until provided (`links.ts`).

#### Standards claim accuracy
- Internet-Drafts labeled as drafts; explicit “not approved IETF standards / not RFC / not WG consensus” in `standards.ts` + footer.
- W3C: Co-Chair + Erik Newton match live https://www.w3.org/groups/cg/aivs/; copy states CG hosting ≠ endorsement and **not** a W3C Recommendation.
- Canonical 8 drafts match RESEARCH-SOT-INPUT; AREF correctly excluded.

#### Confidentiality
- Case studies avoid private employer metrics; evidence points at public GitHub/product pages only.

#### Accessibility (pre-fix)
- `lang="en"`, skip-to-main, focus ring CSS, labeled navs, theme toggle `aria-label`, mobile Escape-to-close already present.
- Gap found: proof-strip “W3C AIVS…” linked to `/#standards` (IETF list), not the W3C card.

### Issues found

| Sev | ID | Finding | Status |
|-----|-----|---------|--------|
| MEDIUM | H-01 | Proof strip W3C credential linked to `/#standards` instead of W3C block | **FIXED** |
| LOW | H-02 | External evidence/standards links lacked SR “opens in a new tab” | **FIXED** (StandardsSection, EvidenceLinks) |
| LOW | H-03 | Mobile menu lacked `aria-modal` / body scroll lock while open | **FIXED** |
| INFO | H-04 | Stale recovery docs (`RESEARCH-SOT-INPUT.md` §D, `SITE-RECOVERY.md`, `AUDIT-DEFECTS.md`) still describe pre-`73c6ea9` placeholders | **Not code** — residual Documentation Drift; non-blocking for public site |
| INFO | H-05 | Header/Footer/Hero/About external links still lack SR new-tab hint | Residual polish; not blocking |

### Fixes applied (Hudson)

1. `src/content/site.ts` — proof strip W3C href → `/#w3c-aivs`
2. `src/components/home/StandardsSection.tsx` — `id="w3c-aivs"` + `scroll-mt-16`; SR new-tab text on Datatracker / Spec repo / W3C links
3. `src/components/project/EvidenceLinks.tsx` — SR new-tab text
4. `src/components/layout/MobileNav.tsx` — `role="dialog"` `aria-modal="true"` `aria-label="Site menu"`; lock `document.body` overflow while open

### Verification (Hudson)
- `npm run lint` → exit 0  
- `npm run build` → exit 0; routes include `/`, `/about`, 5 `/work/*`

---

## Phase 2 — Kraken (independent reality check)

### Executive Summary
Hudson’s three code fixes are present in source and reflected in the successful production build. Prior `73c6ea9` claim hygiene (placeholders, resume honesty, standards disclaimers) holds. Residual gaps are doc drift and incomplete SR new-tab coverage on chrome links — not ship blockers.

### Reality Assessment

**What actually works**
- `#w3c-aivs` id on Standards W3C card; proof strip points at `/#w3c-aivs` (grep-confirmed).
- SR “(opens in a new tab)” on StandardsSection + EvidenceLinks (grep-confirmed).
- MobileNav dialog attributes + overflow lock (grep-confirmed).
- All sampled public evidence URLs still 200 from Phase 1.
- Lint/build green after edits.

**What's claimed but broken**
- None of Hudson’s claimed fixes are missing from the tree.

**What's missing entirely**
- Full focus trap inside mobile dialog (Tab can still leave the panel) — residual a11y depth, not introduced as a false “complete” claim.
- Resume PDF / personal email / LinkedIn still unpublished — intentional, documented.

**BS Detection Findings**
- **Documentation Drift:** `RESEARCH-SOT-INPUT.md` §D and older audit docs still say placeholders live in `site.ts`; runtime code no longer has them (fixed in `73c6ea9`). Risk is future agents re-opening closed defects, not user-facing breakage.
- No Ideal-Condition-Only Code, Over-Abstraction Theater, Premature Optimization, Architectural Excuses, or Test Theater found in this scope.

### Prioritized Action Plan (remaining)

| Sev | Item | Current | Target | Success criteria |
|-----|------|---------|--------|------------------|
| LOW | SR new-tab on Header/Footer/Hero/About externals | Partial | Consistent | All `target="_blank"` have SR hint or shared helper |
| LOW | Mobile focus trap | Escape + dialog attrs only | Tab cycle within panel | Focus cannot reach page under open menu |
| INFO | Refresh stale SoT/audit docs § placeholders | Stale | Match `links.ts` truth | No doc claims `your-username` still ships |

### Prevention Recommendations
1. Treat Datatracker doc stems + W3C groups Leadership page as claim sources of truth; re-HEAD before marketing count changes.
2. Never invent email/LinkedIn; keep omit-until-set pattern in `links.ts`.
3. When adding proof-strip credentials, href must land on the exact section id for that claim.
4. Update or stamp supersession on `AUDIT-DEFECTS.md` / RESEARCH contact tables when runtime fixes land.

---

## Severity tally

| Severity | Found | Fixed | Remaining |
|----------|-------|-------|-----------|
| CRITICAL | 0 | — | 0 |
| HIGH | 0 | — | 0 |
| MEDIUM | 1 | 1 | 0 |
| LOW | 2 | 2 (+ residual polish noted) | 2 polish (H-05 + focus trap) |
| INFO | 2 | 0 | 2 (doc drift; intentional TBD contacts) |

---

## Final verdict

**PASSED WITH FIXES** — W3C proof-strip hash target corrected; external-link SR hints and mobile-menu dialog/scroll lock added; standards/placeholder/XSS/link checks clean; lint+build green.
