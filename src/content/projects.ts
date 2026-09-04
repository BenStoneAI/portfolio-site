/**
 * Selected Systems & Products — homepage cards + case study pages.
 * Status labels: WORK-AUDIT vocabulary only.
 * Visit Site URLs: only curl/URL-TEST-RESULTS YES product pages.
 * No github.com links in public evidence / Visit CTAs.
 */

export type CapabilityStatus =
  | "live-product"
  | "production-system"
  | "active-development"
  | "working-prototype"
  | "reference-implementation"
  | "architecture-spec";

/** @deprecated Prefer CapabilityStatus — kept as alias for StatusBadge imports. */
export type ProjectStatus = CapabilityStatus;

export const STATUS_LABEL: Record<CapabilityStatus, string> = {
  "live-product": "Live Product",
  "production-system": "Production System",
  "active-development": "Active Development",
  "working-prototype": "Working Prototype",
  "reference-implementation": "Reference Implementation",
  "architecture-spec": "Architecture / Spec",
};

export type WorkFilterId =
  | "agent-systems"
  | "automation"
  | "verification"
  | "business-intelligence"
  | "products";

export const WORK_FILTERS: { id: WorkFilterId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "agent-systems", label: "Agent Systems" },
  { id: "automation", label: "Automation" },
  { id: "verification", label: "Verification" },
  { id: "business-intelligence", label: "Business Intelligence" },
  { id: "products", label: "Products" },
];

export type DiagramKey =
  | "financeos"
  | "swarmsync"
  | "invoiceproof"
  | "salescoach"
  | "conduit";

export type CaseStudySection = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  /** When set, the project page renders the matching architecture diagram after this section's copy. */
  diagram?: DiagramKey;
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  filters: WorkFilterId[];
  /** Compact homepage card blurb. */
  cardOneLiner: string;
  oneLiner: string;
  thesis: string;
  status: CapabilityStatus;
  role: string;
  systemType: string;
  capabilities: string[];
  architectureTeaser: string;
  sections: CaseStudySection[];
  workSamples?: { label: string; href: string }[];
  /** Public product / docs links only — never github.com while GitHub chrome is withheld. */
  evidenceLinks?: ProjectLink[];
  /** Primary Visit Site button — only YES URLs from URL-TEST-RESULTS / curl 200. */
  visitUrl?: string;
  /** Extra Visit Site targets (e.g. proof product pages). */
  visitLinks?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "swarmsync",
    title: "SwarmSync",
    subtitle: "Autonomous agent commerce & trust infrastructure",
    category: "Agent Commerce",
    filters: ["agent-systems", "products", "verification"],
    cardOneLiner:
      "Marketplace → escrow → verify → reputation — agent commerce with trust rails, not verification alone.",
    oneLiner:
      "Autonomous agent commerce and trust infrastructure: discovery, engagement, settlement, verification, and reputation.",
    thesis:
      "Agent marketplaces need more than matching — discovery, escrow/settlement, independent verification, and reputation that other systems can trust.",
    status: "live-product",
    role: "Sole architect and builder",
    systemType: "Agent commerce platform + trust infrastructure",
    capabilities: [
      "Agent marketplace / commerce surface",
      "Discovery → engagement → settlement path",
      "AP2-oriented escrow / verified delivery patterns",
      "Independent verification layer (claims vs evidence)",
      "Proof products as trust front door (not the whole product)",
      "SwarmScore reputation",
      "Protocol reference work (AIVS / VCAP / ATEP family)",
    ],
    architectureTeaser:
      "Discovery → Engagement → Execution → Verification → Settlement → Reputation",
    visitUrl: "https://swarmsync.ai/",
    evidenceLinks: [
      { label: "swarmsync.ai", href: "https://swarmsync.ai/" },
      { label: "Protocol map", href: "https://swarmsync.ai/protocols.md" },
      { label: "SwarmScore", href: "https://swarmsync.ai/swarm-score" },
    ],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "As agents start buying, selling, and delivering work for each other, “the agent said it worked” is not enough. Commerce between agents needs a shared path for discovery, engagement, settlement, and dispute — plus an independent way to check claims against evidence and to carry reputation forward.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "SwarmSync is autonomous agent commerce and trust infrastructure: a marketplace-oriented platform with AP2-style escrow patterns, a verification layer, SwarmScore reputation, and a proof-product front door.",
          "Verification is one layer in that stack — necessary for trust, but not the whole product. The product is the full pipeline from discovery through settlement and reputation.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Agents discover and engage through the commerce surface. Execution produces evidence. A verification layer correlates claims against that evidence and policy. Settlement and escrow patterns can complete when delivery checks pass. Reputation (SwarmScore) records outcomes for future counterparties.",
        ],
        list: [
          "Discovery & engagement — find and start agent work",
          "Execution evidence — capture what actually happened",
          "Verification layer — check claims independently of the acting agent",
          "Settlement / escrow — complete delivery-aware commerce paths",
          "Reputation — publish volume- and safety-aware scores",
        ],
        diagram: "swarmsync",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Without an independent trust path, agent-to-agent commerce collapses into narration. Marketplace + payments + proof + reputation have to work together — otherwise autonomy stops at the demo.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "The monorepo spans API, web, agents gateway, and related services. Protocol work sits alongside product surfaces so the commerce stack and open specs reinforce each other.",
        ],
        list: [
          "Verification lives outside the acting agent’s prompt loop",
          "Evidence, not narration, is the source of truth for checks",
          "Proof products reuse the same integrity instincts on concrete workflows",
          "Reputation is protocolized rather than a one-off scoreboard",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Live product — public site and API surfaces, with ongoing active development in a large monorepo. This page does not claim specific production volume or revenue metrics.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Public product home and protocol pages are linked below. Proprietary implementation detail stays out of this write-up on purpose.",
        ],
      },
    ],
  },
  {
    slug: "companyos",
    title: "CompanyOS",
    subtitle: "Institutional intelligence + company control plane",
    category: "Architecture",
    filters: ["agent-systems"],
    cardOneLiner:
      "Tenant-neutral company intelligence: what the company knows, is doing, owns, approved, executed, and verified.",
    oneLiner:
      "Reusable institutional intelligence and company control plane — not a RAG chatbot — specified for white-label deployment.",
    thesis:
      "A company needs one natural-language interface that resolves knowledge, work, ownership, approvals, execution, and verification with permissions, provenance, and receipts.",
    status: "architecture-spec",
    role: "Sole architect",
    systemType: "Company control-plane architecture (V6 spec)",
    capabilities: [
      "Five authority layers (Principles/Canon → Execution/Orchestration)",
      "Permissions, provenance, conflicts, receipts",
      "White-label / tenant-neutral design",
      "Cato + Genesis as first-party execution components",
      "Proof gateway for material actions",
    ],
    architectureTeaser:
      "Canon → Epistemic Knowledge → Control Plane → Live Domain Systems → Execution",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Organizations accumulate tools, chats, and “AI copilots” that do not share authority. The hard problem is a control plane that can answer what the company knows and is doing — with provenance — without becoming a second shadow ERP.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "CompanyOS V6 is a build-ready architecture specification for tenant-neutral institutional intelligence: one NL interface resolving knowledge, work, ownership, approvals, execution, and verification under explicit authority layers.",
          "It is not a RAG chatbot. SwarmSync components (Cato, Genesis, proof products) remain first-party core in the execution and trust story.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Authority is layered: Principles/Canon, Epistemic Knowledge, Company Control Plane, Live Domain Systems, and Execution/Orchestration. Domain OSes (e.g. finance patterns) plug in as live systems; Cato orchestrates; Genesis supplies specialists; proofs gate material outcomes.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Without a control plane, agent work has no durable company memory and no shared notion of approval. Spec-first architecture makes the boundary clear before runtime sprawl.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "The public-safe surface is the white-label V6 specification. Tenant estate inventories and employer control-plane dumps stay out of this portfolio.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Architecture / Spec — build-ready specification. Related control-plane components exist separately; this card represents the institutional design, not a shipping multi-tenant SaaS UI.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Architecture boundaries and authority layers are documented on this page. No public product URL exists for CompanyOS as a consumer site.",
        ],
      },
    ],
  },
  {
    slug: "cato-genesis",
    title: "Cato + Genesis",
    subtitle: "Company orchestrator + specialist workforce",
    category: "Orchestration Ecosystem",
    filters: ["agent-systems", "automation"],
    cardOneLiner:
      "Cato creates and coordinates company work; Genesis runs the specialist agents — finance is a proving domain, not the ceiling.",
    oneLiner:
      "Company-level orchestrator (Cato) paired with a specialist agent workforce (Genesis) — an orchestration ecosystem, not a finance bot.",
    thesis:
      "One company-level operator should create objectives, claim work, invoke capabilities, and escalate — while specialists do narrow jobs and never own durable company state.",
    status: "active-development",
    role: "Sole architect and builder — orchestration, agent design, controls",
    systemType: "Orchestration ecosystem (daemon + specialist gateway)",
    capabilities: [
      "Cato — company-level operator / orchestrator",
      "Objective creation, task claiming, capability invocation, escalation",
      "Genesis — specialized agent gateway (multi-domain workforce)",
      "Policy and budget boundaries at the orchestrator layer",
      "Finance as a proving domain — not the product ceiling",
      "Conduit tooling for audited browser work",
    ],
    architectureTeaser: "Cato (orchestrate) → Genesis specialists → Verification → Human gates",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "A single generalist agent with every tool looks impressive and is hard to trust. A company needs an orchestrator that can route work safely, plus specialists that stay narrow — without collapsing the orchestrator into “the finance bot.”",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "Cato is the company-level orchestrator: creates objectives, coordinates work, claims tasks, invokes capabilities, and escalates. The installable expression is an auditable AI agent daemon with budgets, vault, and operator surfaces.",
          "Genesis is the specialist workforce: a gateway of domain agents invoked for narrow jobs. Genesis must not own durable company state or replace Cato. Finance is where the pattern was pressure-tested first — not the outer limit of either system.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Cato classifies and routes work under policy. Genesis specialists execute scoped jobs. Results return through verification and human gates for consequential actions. CompanyOS Control Plane remains the durable authority; Cato coordinates rather than becoming a second system of record.",
        ],
        diagram: "financeos",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Orchestrator + specialists makes policy enforceable. Collapsing Cato into invoice automation misstates both the product and the risk model.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Cato daemon: budget caps, encrypted vault, operator UI, messaging hooks, Conduit browser tooling, model routing. Genesis: FastAPI gateway of specialized agents across builder, research, deploy, QA, marketing, finance (guarded), and other domains.",
        ],
        list: [
          "Cato coordinates — does not replace domain systems of record",
          "Genesis specialists stay narrow and invocable",
          "Sensitive domains stay gated",
          "No public consumer marketing site for the raw runtime URL",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Active development — shippable daemon / working prototype path for Cato; Genesis gateway is a live agent runtime. No Visit Site button for raw infrastructure URLs.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Architecture and relationship boundaries are documented here. Public GitHub surfaces are intentionally not linked while portfolio GitHub chrome is withheld.",
        ],
      },
    ],
  },
  {
    slug: "financeos",
    title: "FinanceOS / LedgerOS",
    subtitle: "Enterprise AI ops pattern — proven in finance",
    category: "Operations Pattern",
    filters: ["automation", "business-intelligence"],
    cardOneLiner:
      "Ingest → orchestrate → specialists → verify → human gates → accounting outputs — the pattern, not an employer dump.",
    oneLiner:
      "Enterprise AI operations architecture applied to finance: orchestration, specialists, verification, and human gates — sold as a pattern, not private ledger metrics.",
    thesis:
      "The operating layer between messy finance work and agents must carry evidence, entity/period context, and approval boundaries — finance is the demanding proving ground for a reusable pattern.",
    status: "production-system",
    role: "Sole architect and builder",
    systemType: "Enterprise AI ops pattern (finance domain)",
    capabilities: [
      "Ingest → classify/route → specialist → verify → human gate → output",
      "Entity- and period-aware workflows",
      "Draft-only sensitive accounting actions where appropriate",
      "Exception paths for low-confidence outputs",
      "White-label / LedgerOS productization path (architecture)",
    ],
    architectureTeaser:
      "Sources → Ingestion → Orchestrator → Specialists → Verification → Human Review → Output",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Finance operations split across platforms, email, spreadsheets, and people. The challenge is not “give an LLM access” — it is an operating layer that attaches evidence, routes safely, and keeps humans in the loop for consequential actions.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "FinanceOS is the domain instance of an enterprise AI ops pattern. LedgerOS is the commercial/product-line name for white-labeling that pattern. This page describes architecture — not employer-private ledgers, metrics, or entity inventories.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Work enters through real operational channels. An orchestrator classifies, attaches entity/period context, and routes to specialists. Results pass verification and human approval before becoming real ledger or money movement.",
        ],
        diagram: "financeos",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Finance has sharp controls requirements. Patterns that survive there transfer to other departmental OSes under CompanyOS.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Controls are first-class: draft-only sensitive actions, entity/period scoping, policy at routing, and exception paths. Distinct from ProofRail (construction vertical) and BookScout (AP inbox product).",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Production system (partial) with active development on unfinished chunks. Portfolio sells the pattern — not a claim of finished multi-tenant SaaS named LedgerOS.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Architecture only. Employer-private financial and legal material is excluded from this site.",
        ],
      },
    ],
  },
  {
    slug: "proof-stack",
    title: "Proof Stack",
    subtitle: "InvoiceProof · AuditProof · VerifyAPI",
    category: "Trust Products",
    filters: ["verification", "products"],
    cardOneLiner:
      "Three proof products, one integrity instinct — invoice fraud, agent audit trails, and software-delivery verification.",
    oneLiner:
      "InvoiceProof, AuditProof, and VerifyAPI: structured proof for invoices, agent actions, and AI software deliveries — grouped as one stack, not a lone mega-card.",
    thesis:
      "Same integrity instinct, different objects: invoices before pay, agent actions for review, and software deliveries before accept or release.",
    status: "live-product",
    role: "Sole builder (within SwarmSync)",
    systemType: "Proof product suite",
    capabilities: [
      "InvoiceProof — invoice fraud / risk checks with structured proof",
      "AuditProof — reviewable audit trails for AI agent actions",
      "VerifyAPI — verify AI-generated software deliveries / outputs",
      "Shared integrity model across different objects",
      "Consumed by BookScout, ProofRail, and SwarmSync commerce",
    ],
    architectureTeaser: "Object → Checks → Structured proof → Pass / Exception / Gate",
    visitUrl: "https://swarmsync.ai/proof-tools",
    visitLinks: [
      { label: "InvoiceProof", href: "https://swarmsync.ai/invoice-proof" },
      { label: "AuditProof", href: "https://swarmsync.ai/audit-proof" },
      { label: "VerifyAPI", href: "https://swarmsync.ai/verify-api" },
    ],
    evidenceLinks: [
      { label: "Proof tools hub", href: "https://swarmsync.ai/proof-tools" },
      { label: "InvoiceProof", href: "https://swarmsync.ai/invoice-proof" },
      { label: "AuditProof", href: "https://swarmsync.ai/audit-proof" },
      { label: "VerifyAPI", href: "https://swarmsync.ai/verify-api" },
    ],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "“AI said it’s fine” is not an accept criterion for invoices, agent actions, or software delivery. Each object needs structured proof before money moves, work is trusted, or code is released.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "Three products under SwarmSync with separate responsibilities: InvoiceProof for invoice fraud/risk with structured proof records; AuditProof for reviewable trails of agent actions; VerifyAPI for verifying AI-generated software deliveries before accept or release.",
          "They share an integrity instinct but are not interchangeable — and they are not a substitute for the SwarmSync commerce story.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Each product runs checks against its object type, emits structured proof, and routes pass vs exception. Downstream systems (BookScout, ProofRail, marketplace settlement) consume those gates.",
        ],
        diagram: "invoiceproof",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Grouping them as a stack prevents InvoiceProof from looking like a lone mega-product while keeping SwarmSync’s marketplace story intact on its own card.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Engines are implemented inside the SwarmSync monorepo with public product pages. Demos historically used labeled samples; paid launch readiness is separate from page existence.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Live product pages on swarmsync.ai. Engines implemented; treat marketing maturity conservatively — no invented volume metrics.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Public proof hub and individual product pages are linked below (curl-verified 200).",
        ],
      },
    ],
  },
  {
    slug: "proofrail",
    title: "ProofRail",
    subtitle: "Construction & real-estate finance OS",
    category: "Vertical Operations",
    filters: ["automation", "verification"],
    cardOneLiner:
      "Fail-closed proof gates on construction finance workflows — architecture only; no client artifacts.",
    oneLiner:
      "Construction / real-estate finance operating system with SwarmSync proof at material actions — portfolio describes architecture only.",
    thesis:
      "No proof → no completion. Cognition and physics stay separated: AI reasons; ProofRail enforces gates; payments stay human-in-ledger.",
    status: "production-system",
    role: "Sole architect and builder",
    systemType: "Construction finance OS (architecture-only public view)",
    capabilities: [
      "AP intake with proof gates",
      "Nightly audit gates",
      "Draw build/send workflows (architecture)",
      "Fee engine and reconciliation patterns",
      "Human-in-ledger payments",
      "Consumes InvoiceProof / AuditProof / VerifyAPI",
    ],
    architectureTeaser: "Work event → Proof gate → Pass / Block → Human ledger action",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Construction finance workflows move real money across entities and draw cycles. Autocomplete without proof is how bad completions become irreversible.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "ProofRail is a construction and real-estate finance OS with fail-closed SwarmSync proof at material actions. Law of the system: Cowork = cognition · ProofRail = physics · no proof → no completion.",
          "This portfolio page is architecture-only. Client financial PDFs, draw sheets, and lien releases are excluded.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Material workflows (AP, audit gates, draws, fees) require proof before completion. Payments remain human-controlled in the ledger system of record.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Vertical finance OSes need stronger gates than generic chat automation. ProofRail is the construction instance of that rule.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "SPEC frozen for build; production use is operator-facing. Sibling pattern to FinanceOS; distinct from BookScout (AP email product).",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Production system with active development. No public product website. Architecture-only on this portfolio.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Public third-party domains using the ProofRail name are not claimed here. No Visit Site button.",
        ],
      },
    ],
  },
  {
    slug: "bookscout",
    title: "BookScout",
    subtitle: "AP email → proof-gated QuickBooks proposals",
    category: "AP Automation",
    filters: ["automation", "verification"],
    cardOneLiner:
      "Gmail AP intake with SwarmSync proof gates and human-gated accounting proposals — distinct from ProofRail and InvoiceProof.",
    oneLiner:
      "Operator AP automation: email intake → proof gates → reviewable QuickBooks proposals with human-gated writes.",
    thesis:
      "AP automation that posts without proof and a human gate is how bad invoices become journal entries.",
    status: "active-development",
    role: "Sole builder",
    systemType: "AP inbox automation product",
    capabilities: [
      "Gmail AP intake",
      "SwarmSync proof gates before proposals",
      "Reviewable QBO/QBD proposals",
      "Human-gated writes",
      "Per-business install path",
    ],
    architectureTeaser: "Email → Classify → Proof gate → Proposal → Human approve → Ledger",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Accounts payable arrives as email and attachments. Auto-posting without independent proof and a human gate creates silent ledger risk.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "BookScout OS (ap-hub) takes AP email through SwarmSync proof gates and produces reviewable QuickBooks proposals. Writes stay human-gated. It is distinct from ProofRail (construction draws/fees) and from InvoiceProof as an API product.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Inbox intake → classification → proof checks → proposal for review → human approval → accounting write.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Operator AP products need a different shape than construction draw OSes or standalone fraud APIs — BookScout is that shape.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Installable per-business path with proof integration. Client books stay confidential; this page stays architecture-level.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Active development / working prototype → production-ready path. No public marketing site.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Capability boundaries documented here. No Visit Site button.",
        ],
      },
    ],
  },
  {
    slug: "conduit-family",
    title: "Conduit → Halo",
    subtitle: "Audited headless browser + headed policy/approval runtime",
    category: "Trusted Execution",
    filters: ["agent-systems", "verification"],
    cardOneLiner:
      "Conduit: headless browser with cryptographic audit. Halo: headed Playwright runtime with policy, approvals, and redacted logs.",
    oneLiner:
      "Lineage card for trusted browsing: Conduit (headless audited browser) → Conduit Halo (headed policy/approval browser). ConduitScore is a separate SaaS card.",
    thesis:
      "If an agent can browse and act, the session needs a proof trail stronger than a screenshot — and headed runs need policy and human approval, not stealth myths.",
    status: "reference-implementation",
    role: "Builder / product author",
    systemType: "Auditable browser lineage (headless + headed)",
    capabilities: [
      "Conduit — headless browser with SHA-256 audit chain + Ed25519 proofs",
      "Exportable / verifiable session proofs",
      "MCP server / PyPI conduit-browser",
      "Conduit Halo — headed Chromium with policy engine and human approvals",
      "Action/screenshot logs with redaction; Observe→Act→Verify tab orchestration",
      "Explicitly not stealth / CAPTCHA-bypass / payment auto-submit",
    ],
    architectureTeaser:
      "Agent intent → Browser runtime → Action log → Hash chain / policy gate → Proof or approval",
    visitUrl: "https://swarmsync.ai/conduit",
    evidenceLinks: [
      { label: "Conduit product page", href: "https://swarmsync.ai/conduit" },
      { label: "PyPI conduit-browser", href: "https://pypi.org/project/conduit-browser/" },
    ],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Agent browsers can erase the audit trail. Headed automation without policy turns “watching the agent” into uncontrolled action. Both need trustworthy execution — different constraints.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "Conduit is a headless browser with a cryptographic audit layer: actions form a hash chain and can be signed so sessions produce exportable proof.",
          "Conduit Halo (from conduit-halo README only) is a standalone visible AI browser runtime: Playwright headed Chromium, policy engine (allow/block, approval triggers, session limits), human approvals, and redacted action/screenshot logs. No direct Conduit imports — adapter interfaces only. It is not a “score ring” brand myth.",
          "ConduitScore — AI visibility SaaS — is a separate live product and has its own card.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Headless path: agent drives Conduit → chained audit → signed export. Headed path: Halo runs visible sessions under policy with approval gates and recorded evidence. SwarmSync uses Conduit as a verification oracle for delivery checks.",
        ],
        diagram: "conduit",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Trusted agent execution needs integrity of what happened — not narration. Separating ConduitScore keeps visibility SaaS from being confused with the browser runtime.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Conduit: reference implementation + active development, production-adjacent in SwarmSync/Genesis. Halo: active development / working prototype monorepo (apps + demos). Halo explicitly excludes stealth, CAPTCHA bypass, proxy rotation, and payment auto-submit.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Reference implementation (Conduit) with active development on both runtimes. Visit Site points to the SwarmSync Conduit product page — Halo has no public marketing site.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Conduit product page and PyPI package are linked. Halo descriptions are limited to conduit-halo README/docs facts.",
        ],
      },
    ],
  },
  {
    slug: "conduitscore",
    title: "ConduitScore",
    subtitle: "AI visibility scoring SaaS",
    category: "Products",
    filters: ["products", "business-intelligence"],
    cardOneLiner:
      "Can AI see your site better than your competitor’s? Live visibility scoring — separate from SwarmScore and the Conduit browser.",
    oneLiner:
      "AI visibility scoring SaaS: crawler access, structured data, llms.txt, content clarity, citation signals — live at conduitscore.com.",
    thesis:
      "If AI systems cannot see your site clearly, you lose the next distribution channel before you know it.",
    status: "live-product",
    role: "Builder / product author",
    systemType: "AI visibility SaaS",
    capabilities: [
      "Site visibility scans vs competitors",
      "Crawler access / structured data / llms.txt signals",
      "Content clarity and citation-oriented checks",
      "Distinct from SwarmScore (agent reputation)",
      "Distinct from Conduit browser runtime",
    ],
    architectureTeaser: "URL → Scan signals → Score → Competitor compare → Actions",
    visitUrl: "https://conduitscore.com/",
    evidenceLinks: [{ label: "conduitscore.com", href: "https://conduitscore.com/" }],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Traditional SEO does not fully answer whether AI systems can discover, parse, and cite a site. Teams need a visibility score they can act on.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "ConduitScore is a live AI visibility SaaS. It shares a brand family loosely with Conduit but is not the browser runtime and not SwarmScore agent reputation.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Scan a site for AI-visibility signals, score them, and compare against competitors so teams can improve how AI systems see them.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "A sellable SaaS wedge with a clear customer question — separate from infrastructure and marketplace products.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Live product with pricing/e2e noted in portfolio surveys. Customer scan data stays private.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Live product at conduitscore.com (curl-verified 200).",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Public product site linked below.",
        ],
      },
    ],
  },
  {
    slug: "expense-optimization",
    title: "Expense Optimization Audit",
    subtitle: "Evidence-backed expense replacement briefs",
    category: "Commercial Wedge",
    filters: ["business-intelligence", "automation"],
    cardOneLiner:
      "One ledger expense → defendable decision brief with TCO evidence — research, not autonomous cancel.",
    oneLiner:
      "Working prototype that turns a real ledger expense into a defendable replacement decision brief with evidence IDs — sellable as a service.",
    thesis:
      "Expense cuts need evidence, not vibes — and the system should never autonomously buy or cancel.",
    status: "working-prototype",
    role: "Sole builder",
    systemType: "Expense replacement decision engine",
    capabilities: [
      "Requirements profile from a real expense",
      "Commercial + FOSS research",
      "Deterministic TCO with evidence IDs",
      "Recommendation brief",
      "No autonomous buy/cancel",
      "Loopback-only server; no raw memo egress",
    ],
    architectureTeaser: "Expense → Profile → Research → TCO evidence → Brief → Human decide",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Teams want to cut software spend but lack a defendable brief: requirements, alternatives, TCO, and evidence that survives scrutiny.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "A vertical slice: one real ledger expense becomes a decision brief with requirements, commercial+FOSS research, deterministic TCO with evidence IDs, and a recommendation. No autonomous purchase or cancel.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Ingest expense → build requirements profile → research options → compute TCO with evidence IDs → emit brief for a human decision.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Entry commercial offer distinct from InvoiceProof (fraud) and BookScout (AP posting).",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Phases 1–6 complete; Phase 7 real-ledger probe is owner-gated. Real client ledgers stay confidential.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Working prototype. No public product website.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Capability boundaries documented here. Sample CSVs only — no client ledgers.",
        ],
      },
    ],
  },
  {
    slug: "realtime-sales-coach",
    title: "Real-Time AI Sales Coach",
    subtitle: "Private live-call coaching overlay (CUE)",
    category: "Sales Enablement",
    filters: ["products", "automation"],
    cardOneLiner:
      "Listens to both sides of a live call and suggests one sayable sentence — no bot joins the meeting.",
    oneLiner:
      "Windows desktop sales coach: mic + system audio → conversation state → one sayable suggestion grounded in playbooks.",
    thesis:
      "Assistance, not replacement: surface a good option in real time; the rep decides what to say.",
    status: "working-prototype",
    role: "Sole builder",
    systemType: "Real-time sales enablement (desktop)",
    capabilities: [
      "Dual-channel listen (mic + system audio)",
      "Conversation state and objection recognition",
      "One sayable sentence / next-best question",
      "Playbook-grounded recommendations",
      "No bot joins the call",
      "Post-call coaching path",
    ],
    architectureTeaser:
      "Live Call → Transcription → Conversation State → Intent → Knowledge → Rep Interface",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Sales conversations move faster than lookup. The moment a rep needs context is the moment there is no time to search — without a bot joining the call.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "CUE Real-Time AI Sales Coach: a desktop architecture that listens to both sides of a live call and coaches with one sayable sentence grounded in org playbooks. Meeting-AI (quiet meeting assistant on Vercel) is a different product and is not linked here as the sales coach demo.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Live audio → transcription → conversation state → intent/objection detection → knowledge retrieval → recommendation to the rep interface, with a parallel post-call path.",
        ],
        diagram: "salescoach",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Real-time assistance is a different constraint than batch automation — fast, ignorable, and grounded.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Tauri/MSI path documented. Call audio is not written to disk per product rules. Customer playbooks stay private.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Working prototype / active development. No public consumer marketing site for the coach. Visit Site intentionally omitted — meeting-ai-stone.vercel.app is Meeting-AI, not this coach.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Architecture and capability boundaries documented on this page. No Visit Site button.",
        ],
      },
    ],
  },
  {
    slug: "aptria",
    title: "Aptria",
    subtitle: "AI automation services brand",
    category: "Services",
    filters: ["products", "automation"],
    cardOneLiner:
      "Human-sold AI automation for business processes with controls built in — services brand, not a platform monorepo.",
    oneLiner:
      "Services brand and marketing site for AI automation engagements with controls — distinct capability from platform products.",
    thesis:
      "Some buyers need a services motion with clear controls — not another self-serve platform login.",
    status: "live-product",
    role: "Founder / builder",
    systemType: "Services marketing + engagement brand",
    capabilities: [
      "Marketing site and booking",
      "Automation services positioning with controls",
      "PacketOS paywall surface",
    ],
    architectureTeaser: "Lead → Discovery → Controlled automation engagement",
    visitUrl: "https://aptria.net/",
    evidenceLinks: [{ label: "aptria.net", href: "https://aptria.net/" }],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Not every automation sale is self-serve SaaS. Buyers often need a human-led engagement with controls baked into delivery.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "Aptria is a live services brand site for AI automation with controls — a different capability from SwarmSync, ConduitScore, or internal OSes.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Public marketing and booking surface for controlled automation engagements.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Keeps the services motion visible without pretending it is a platform monorepo.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Static marketing site + booking + PacketOS paywall. Use aptria.net only — aptria.com is an empty shell and is not linked.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Live product (marketing/services) at aptria.net.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Public site linked below.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project; next: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  return { prev, next };
}

export function filterProjects(filter: WorkFilterId | "all"): Project[] {
  if (filter === "all") return projects;
  return projects.filter((p) => p.filters.includes(filter));
}
