/**
 * Flagship project case studies — single editing surface for work pages.
 * Capability status uses: implemented | demonstrated | specified | experimental | planned.
 * Case study body follows: Problem / What I Built / How It Works / Why It Matters /
 * Technical Depth / Status / Evidence.
 *
 * Do not invent employer-private metrics or secrets. Prefer conservative status.
 */

export type CapabilityStatus =
  | "implemented"
  | "demonstrated"
  | "specified"
  | "experimental"
  | "planned";

/** @deprecated Prefer CapabilityStatus — kept as alias for StatusBadge imports. */
export type ProjectStatus = CapabilityStatus;

export const STATUS_LABEL: Record<CapabilityStatus, string> = {
  implemented: "Implemented",
  demonstrated: "Demonstrated",
  specified: "Specified",
  experimental: "Experimental",
  planned: "Planned",
};

export type DiagramKey = "financeos" | "swarmsync" | "invoiceproof" | "salescoach" | "conduit";

export type CaseStudySection = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  /** When set, the project page renders the matching architecture diagram after this section's copy. */
  diagram?: DiagramKey;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  oneLiner: string;
  thesis: string;
  status: CapabilityStatus;
  role: string;
  systemType: string;
  capabilities: string[];
  architectureTeaser: string;
  sections: CaseStudySection[];
  /**
   * Supporting downloadable material for this project.
   * Only add entries when the file exists under /public.
   */
  workSamples?: { label: string; href: string }[];
  /** Optional public product / repo links shown in Evidence. */
  evidenceLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "swarmsync",
    title: "SwarmSync",
    subtitle: "Autonomous Agent Commerce & Trust Infrastructure",
    category: "Agent Commerce & Trust",
    oneLiner:
      "A full pipeline for autonomous agent commerce — discovery through settlement, verification, and reputation — with verification as a layer, not the whole product.",
    thesis:
      "Agent marketplaces need more than matching: they need discovery, escrow/settlement, independent verification, and reputation that other systems can trust.",
    status: "implemented",
    role: "Sole architect and builder",
    systemType: "Agent commerce platform + trust infrastructure",
    capabilities: [
      "Agent marketplace / commerce surface",
      "Discovery → engagement → settlement path",
      "AP2-oriented escrow / verified delivery patterns",
      "Independent verification layer (claims vs evidence)",
      "Proof products (InvoiceProof / AuditProof / VerifyAPI)",
      "SwarmScore reputation",
      "Protocol reference implementations (AIVS / VCAP / ATEP family)",
    ],
    architectureTeaser:
      "Discovery → Engagement → Execution → Verification → Settlement → Reputation",
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
          "SwarmSync is autonomous agent commerce and trust infrastructure: a marketplace-oriented platform with AP2-style escrow patterns, a verification layer, SwarmScore reputation, and a proof-product front door (InvoiceProof, AuditProof, VerifyAPI).",
          "Verification is one layer in that stack — necessary for trust, but not the whole product. The product is the full pipeline from discovery through settlement and reputation.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Agents discover and engage through the commerce surface. Execution produces evidence at the tool and API layer. A verification layer correlates claims against that evidence and policy. Settlement and escrow patterns can complete when delivery checks pass. Reputation (SwarmScore) records outcomes so future counterparties can reason about track record.",
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
          "Without an independent trust path, agent-to-agent commerce collapses into narration. SwarmSync’s point is that marketplace + payments + proof + reputation have to work together — otherwise autonomy stops at the demo.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "The monorepo spans API, web, agents gateway, and related services. Protocol work (AIVS, VCAP, ATEP, SwarmScore, and related drafts) sits alongside product surfaces so the commerce stack and the open specs reinforce each other.",
        ],
        list: [
          "Verification lives outside the acting agent’s prompt loop",
          "Evidence, not narration, is the source of truth for checks",
          "Proof products reuse the same integrity instincts on concrete document / delivery workflows",
          "Reputation is protocolized rather than a one-off scoreboard",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Capability status: implemented. SwarmSync exists as a substantial product codebase and public product site (swarmsync.ai), with proof surfaces that have also been demonstrated with labeled samples. This case study does not claim specific production volume or revenue metrics.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Public product home and protocol pages are linked below. Implementation detail that is proprietary stays out of this write-up on purpose — the architecture and capability boundaries are what this page is meant to show.",
        ],
      },
    ],
  },
  {
    slug: "financeos-cato",
    title: "FinanceOS + Cato + Genesis",
    subtitle: "Enterprise AI Operations Architecture",
    category: "Multi-Agent Operations Architecture",
    oneLiner:
      "An enterprise AI operations pattern: Cato orchestrates, Genesis agents specialize, and finance is the domain example — not the outer limit of the architecture.",
    thesis:
      "One orchestrator, many narrow specialists, and nothing sensitive happens without evidence and a human in the loop — finance is where the pattern was proven first.",
    status: "implemented",
    role: "Sole architect and builder — orchestration, agent design, integrations, controls",
    systemType: "Enterprise AI operations pattern (finance domain example)",
    capabilities: [
      "Cato orchestration / classification / routing",
      "Genesis specialized agent gateway",
      "Finance-domain specialist agents (AP, AR, cash, close, journals, integrity, and more)",
      "Entity- and period-aware workflows",
      "Inbox and document intake",
      "Source evidence attached to outputs",
      "Verification before results reach a person",
      "Human approval boundaries on sensitive actions",
      "Draft-only accounting actions where appropriate",
    ],
    architectureTeaser:
      "Sources → Ingestion → Cato (orchestrator) → Genesis agents → Verification → Human Review → Output",
    evidenceLinks: [
      { label: "Cato-FinanceOS (public)", href: "https://github.com/BenStoneAI/Cato-FinanceOS" },
      { label: "Genesis-Agents (public)", href: "https://github.com/BenStoneAI/Genesis-Agents" },
    ],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Operational work rarely lives in one system. Information splits across platforms, email, spreadsheets, reporting tools, and people. The challenge is not “give an LLM access” — it is building an operating layer that can determine what work is needed, attach the right evidence, delegate safely, and make the result reviewable.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "FinanceOS is the domain example of an enterprise AI operations architecture: Cato is the orchestrator (classify, route, enforce policy), Genesis is the specialist agent layer, and finance workflows are where the pattern was exercised end to end.",
          "The same pattern — orchestrator + narrow agents + verification + human gates — is not finance-only. Finance is the domain with the sharpest controls requirements, which made it a demanding proving ground.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Work enters through real operational channels. Cato classifies each item, attaches entity/period context, and routes to the Genesis specialist that owns that job. Results pass verification and — for sensitive actions — human approval before becoming real ledger or money movement.",
        ],
        diagram: "financeos",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "A single generalist agent with every tool looks impressive in a demo and is hard to trust with consequential work. Narrow specialists plus an orchestrator make verification and policy enforceable — which is the difference between a chat demo and an operations system.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Controls are first-class: draft-only sensitive actions, entity/period scoping, policy at the routing layer, and exception paths for low-confidence outputs. Public repositories document Cato and Genesis components without dumping private employer operational data.",
        ],
        list: [
          "Sensitive accounting actions draft-only by default",
          "Agents scoped to entity and period boundaries",
          "Policy enforced in Cato routing, not only in prompts",
          "Failures routed to exceptions instead of silent pass-through",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Capability status: implemented for the orchestration and specialist layers described here, operating against real finance workflows in development and deployment contexts. Not every specialist is complete; this page does not publish accuracy or time-saved metrics without verified figures.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Public GitHub surfaces for Cato-FinanceOS and Genesis-Agents are linked below. Private employer systems and proprietary metrics are intentionally not reproduced here.",
        ],
      },
    ],
  },
  {
    slug: "conduit",
    title: "Conduit",
    subtitle: "Auditable Agent Browser Runtime",
    category: "Trusted Agent Execution",
    oneLiner:
      "A headless browser with a cryptographic audit layer — SHA-256 chaining and Ed25519 signatures — so agent browsing sessions leave exportable proof.",
    thesis:
      "If an agent can browse and act, the session needs a proof trail that is stronger than a screenshot and a chat log.",
    status: "implemented",
    role: "Builder / product author",
    systemType: "Auditable browser runtime",
    capabilities: [
      "Headless browser automation",
      "Cryptographic session audit chain (SHA-256)",
      "Ed25519 signed proofs",
      "Exportable proof artifacts",
      "Product surface on SwarmSync",
    ],
    architectureTeaser: "Agent intent → Headless browser → Action log → Hash chain → Signed proof export",
    evidenceLinks: [
      { label: "Conduit product page", href: "https://swarmsync.ai/conduit" },
      { label: "PyPI conduit-browser", href: "https://pypi.org/project/conduit-browser/" },
    ],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Agent browsers can do useful work and also erase the audit trail. Traditional session recordings and screenshots are weak evidence when the question is “what exactly did the agent do, in what order, and can someone else verify it later?”",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "Conduit is a headless browser runtime with a cryptographic audit layer: actions form a hash chain and can be signed (Ed25519) so sessions produce exportable proof rather than only narrative logs.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "An agent drives browser actions through Conduit. Each material step is recorded into a chained audit structure. Proofs can be exported for later verification — the goal is integrity of the session record, not stealth browsing.",
        ],
        diagram: "conduit",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Trusted agent execution needs more than “it worked on my machine.” Cryptographic session proofs make browser-agent work reviewable by someone who was not watching the screen.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Published as the Python package conduit-browser with a substantial automated test suite. Related headed runtime work (conduit-halo) explores visible, policy-gated execution for operators who need to watch and approve.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Capability status: implemented. Public package and product page are available. This page does not invent usage metrics.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Product page and PyPI package links are provided below.",
        ],
      },
    ],
  },
  {
    slug: "invoiceproof",
    title: "InvoiceProof",
    subtitle: "Evidence-First Document Automation",
    category: "Document Intake & Verification",
    oneLiner:
      "An invoice workflow that pairs every extracted value with the evidence behind it, so exceptions get caught before they reach the books.",
    thesis:
      "Extraction answers what the model thinks an invoice says. Verification answers what evidence supports that.",
    status: "demonstrated",
    role: "Sole builder",
    systemType: "Document automation and verification pipeline",
    capabilities: [
      "Document intake",
      "Invoice classification",
      "Structured extraction",
      "Validation",
      "Exception detection",
      "Source evidence for every extracted value",
      "Duplicate / anomaly checks where applicable",
      "Downstream accounting workflow routing",
      "Human review for ambiguous cases",
    ],
    architectureTeaser: "Document → Ingest → Classify → Extract → Validate → Evidence Map → Pass or Exception",
    evidenceLinks: [{ label: "SwarmSync proof suite", href: "https://swarmsync.ai/" }],
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Invoice processing usually gets framed as an extraction problem. Extraction answers “what does the model think the invoice says?” It doesn’t answer “what evidence supports that conclusion?” — and for financial documents, that second question is the one that matters when something is wrong.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "InvoiceProof takes a document or email, classifies it, extracts structured values, and validates each one instead of treating extraction as the finish line. Every value maps back to supporting evidence on the source document.",
          "Documents that pass move to the accounting workflow. Ambiguous or unsupported cases become exceptions for a person.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Ingest → classify → extract → validate → evidence map → pass or exception. The evidence map is the product differentiator: reviewers see source-backed values, not bare model confidence.",
        ],
        diagram: "invoiceproof",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Confident extraction without evidence is how bad numbers enter the books. Evidence-first routing changes the reviewer’s job from re-keying to checking.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "InvoiceProof sits in the SwarmSync proof suite alongside related proof products. Exception paths are normal outcomes, not failure states.",
        ],
        list: [
          "Values carry evidence, not only confidence scores",
          "Duplicate / anomaly checks before pass",
          "Ambiguous cases default to human review",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Capability status: demonstrated. Engines are implemented in the SwarmSync stack; public demos have historically used labeled samples. No unverified accuracy or volume metrics are published here.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Product context lives under the SwarmSync proof suite. Proprietary evaluation datasets and private customer invoices are not published on this site.",
        ],
      },
    ],
  },
  {
    slug: "realtime-sales-coach",
    title: "Real-Time AI Sales Coach",
    subtitle: "Live Agent Assistance",
    category: "Real-Time Conversational Assistance",
    oneLiner:
      "A live-call architecture that listens for objections and buying signals and quietly suggests what to say or ask next — without taking over the conversation.",
    thesis:
      "Assistance, not replacement: the system surfaces a good option in real time, the rep decides what to actually say.",
    status: "implemented",
    role: "Sole builder",
    systemType: "Real-time streaming assistance system",
    capabilities: [
      "Streaming call context",
      "Conversation state",
      "Objection recognition",
      "Buying-signal detection",
      "Knowledge retrieval",
      "Response recommendation",
      "Next-best-question suggestions",
      "Product / company knowledge grounding",
      "Guardrails on recommendations",
      "Post-call insights",
    ],
    architectureTeaser:
      "Live Call → Transcription → Conversation State → Intent Detection → Knowledge Retrieval → Rep Interface",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Sales conversations move fast. The moment a rep needs context most is the moment there is no time to look it up. The problem is getting the right piece of information into the conversation without breaking attention or taking over the call.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "A desktop-oriented architecture (CUE) that listens to a live call, maintains conversation state, recognizes objections and buying signals, and recommends what the rep might say or ask next — as a suggestion, not an action taken on their behalf.",
          "The same transcript feeds a post-call path for coaching insights and CRM/workflow updates.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        paragraphs: [
          "Live audio → transcription stream → conversation state → intent/objection detection → knowledge retrieval → recommendation to the rep interface, with a parallel post-call analysis path.",
        ],
        diagram: "salescoach",
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters",
        paragraphs: [
          "Real-time assistance is a different constraint than batch automation. The system has to be fast and ignorable — otherwise it becomes another interruption.",
        ],
      },
      {
        id: "technical-depth",
        heading: "Technical Depth",
        paragraphs: [
          "Recommendations are grounded in retrieved knowledge rather than open-ended generation mid-call. Consent and local-listen controls matter because the system hears the call without joining as a bot.",
        ],
      },
      {
        id: "status",
        heading: "Status",
        paragraphs: [
          "Capability status: implemented as a desktop application architecture with end-to-end paths against recorded and live test conversations. No production close-rate metrics are claimed here.",
        ],
      },
      {
        id: "evidence",
        heading: "Evidence",
        paragraphs: [
          "Architecture and capability boundaries are documented on this page. Proprietary call recordings and customer-specific knowledge bases are not published.",
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
