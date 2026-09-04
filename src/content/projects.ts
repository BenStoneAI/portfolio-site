/**
 * Case study content for the four flagship projects. This is the
 * single place project copy, status, and metadata live — see
 * README.md → "Editing portfolio content" before touching component
 * files to change wording.
 *
 * Truthfulness note: statuses below reflect what's described in the
 * project briefs, not a verified production claim. Confirm each
 * status against reality before this site goes out widely — see the
 * completion notes this was built with.
 */

export type ProjectStatus =
  | "Production System"
  | "Production Workflow"
  | "Active Development"
  | "Prototype"
  | "Prototype / Active Development"
  | "Architecture / R&D"
  | "Independent Project";

export type DiagramKey = "financeos" | "swarmsync" | "invoiceproof" | "salescoach";

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
  status: ProjectStatus;
  role: string;
  systemType: string;
  capabilities: string[];
  architectureTeaser: string;
  sections: CaseStudySection[];
  /**
   * Supporting downloadable material for this project (a one-pager,
   * a spec sample, a before/after). Left empty until the underlying
   * file exists in /public — an entry here with no matching file is
   * a broken download link, so don't add one without the file.
   */
  workSamples?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "financeos-cato",
    title: "FinanceOS + Cato",
    subtitle: "Agentic Finance Operations",
    category: "Multi-Agent Finance Automation",
    oneLiner:
      "An operating layer that routes finance work to specialized agents, verifies what they produce, and keeps sensitive actions behind human approval.",
    thesis: "One orchestrator, a dozen narrow specialists, and nothing sensitive happens without evidence and a human in the loop.",
    status: "Active Development",
    role: "Sole architect and builder — orchestration, agent design, integrations, controls",
    systemType: "Multi-agent orchestration system",
    capabilities: [
      "Specialized finance agents (AP, AR, cash, close, journals, financial integrity, and more)",
      "Orchestration, classification, and routing (Cato)",
      "Entity- and period-aware workflows",
      "Inbox and document intake",
      "Source evidence attached to outputs",
      "Verification before results reach a person",
      "Human approval boundaries on sensitive actions",
      "Draft-only accounting actions where appropriate",
      "Scheduled, recurring processes",
    ],
    architectureTeaser: "Sources → Ingestion → Cato Orchestrator → Specialist Agents → Verification → Human Review → Output",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Finance work rarely lives in one system. Information can be split across accounting platforms, operational databases, email, spreadsheets, reporting tools, and individual people. The challenge was not simply giving an LLM access to those systems; it was creating an operating layer that could determine what work needed to happen, find the right evidence, delegate it safely, and make the result reviewable.",
        ],
      },
      {
        id: "design-principle",
        heading: "Design Principle",
        paragraphs: [
          "One agent should not pretend to be an entire finance department.",
          "A single agent with access to every finance tool and a long system prompt telling it to act like a controller looks impressive in a demo. In practice, it's hard to reason about, hard to constrain, and hard to trust with anything that touches real money.",
          "FinanceOS is built around the opposite instinct: break finance work into the same specializations a finance team already uses — revenue, cash, AP, AR, close, journals — and give each one a narrow, well-defined job. Cato, the orchestrator, doesn't do the accounting itself. It reads incoming work, figures out which specialist owns it, attaches the right context, and keeps track of what's in flight.",
          "That separation is what makes verification possible. It's much easier to check whether a cash-matching agent got a bank reconciliation right than to audit a single generalist that touched a dozen different domains in one conversation.",
        ],
      },
      {
        id: "system",
        heading: "System",
        paragraphs: [
          "Work enters through the channels finance work actually shows up in — inbox, documents, accounting system events, scheduled jobs. Cato classifies each item, attaches entity and period context, and routes it to the specialist agent responsible for that domain. Each agent operates inside its own boundary: it knows its data sources, its tools, and the shape of a correct answer for its domain, and nothing more.",
          "Once an agent produces a result, it doesn't go straight to a person or a ledger. It passes through a verification step that checks the output against its supporting evidence, and — for anything sensitive — waits behind a human approval boundary before it becomes a real action.",
        ],
      },
      {
        id: "architecture",
        heading: "Architecture",
        paragraphs: [
          "Sources feed a normalization layer, Cato classifies and routes, specialist agents handle the domain-specific work, and everything downstream of that is verification and human review before anything reaches reporting or the books.",
        ],
        diagram: "financeos",
      },
      {
        id: "controls",
        heading: "Controls",
        paragraphs: [
          "The controls aren't an afterthought bolted onto the finance agents — they're what makes routing sensitive work to an agent defensible in the first place.",
        ],
        list: [
          "Sensitive accounting actions are draft-only by default. An agent can propose a journal entry or a payment; it cannot post one.",
          "Every agent is scoped to a specific entity and period. It can't reach across boundaries it wasn't given.",
          "Cato enforces policy at the routing layer, not inside each agent's prompt, so a policy change doesn't require touching every agent individually.",
          "Failures and low-confidence outputs are routed to exceptions rather than silently passed along.",
        ],
      },
      {
        id: "what-changed",
        heading: "What Changed",
        paragraphs: [
          "The most visible change isn't a single automated task — it's what happens before a person looks at finance work at all. Instead of starting from a raw document or an unread inbox item, the starting point is a routed, evidence-linked draft: classified, matched against the right context, and already checked against its own supporting evidence. The person's job shifts from finding and assembling the information to reviewing a conclusion someone — or something — already assembled.",
        ],
      },
      {
        id: "current-state",
        heading: "Current State",
        paragraphs: [
          "FinanceOS is in active development, not production. The orchestration layer, several specialist agents, and the verification and draft-only controls described above are built and operating against real finance data and workflows. Others are still being added. I'm not publishing a claimed accuracy rate or time saved because I don't have a number I'd stand behind yet — this section will change to reflect that once I do.",
        ],
      },
      {
        id: "what-i-learned",
        heading: "What I Learned",
        paragraphs: [
          "The orchestration layer is where most of the real design work lives, not the specialist agents. Any individual agent — an AP matcher, a close-checklist agent — is a fairly contained problem. Getting Cato's routing, state, and policy layer right, so that adding an agent or changing a policy doesn't mean rewriting everything else, took longer than any individual agent did.",
          "The second lesson: verification has to be a first-class step, not a hope. An agent that's usually right is not the same as a system you can trust with financial actions. Separating \"produce an answer\" from \"verify the answer against evidence\" from \"a human decides\" turned out to be the difference between a demo and something worth using.",
        ],
      },
    ],
  },
  {
    slug: "swarmsync",
    title: "SwarmSync",
    subtitle: "Verification Infrastructure for Agentic Systems",
    category: "Agent Verification & Evidence",
    oneLiner:
      "An independent layer that checks whether an autonomous agent's claims about its own actions are actually backed by evidence.",
    thesis: "Autonomous agents need an independent verification layer — because an agent grading its own work isn't verification.",
    status: "Architecture / R&D",
    role: "Sole architect and builder",
    systemType: "Verification / evidence infrastructure",
    capabilities: [
      "Agent action and coordination tracing",
      "Execution evidence collection",
      "Claim-to-evidence correlation",
      "Policy checks on agent actions",
      "Independent verification, run separately from the agent that acted",
      "Exception routing to human review",
    ],
    architectureTeaser: "Agent Execution → Tools / APIs → Execution Evidence → SwarmSync Verification Layer → Verified Result",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "LLMs are extremely good at producing convincing explanations of what they believe happened. In high-trust workflows, explanation is not enough. Systems need machine-verifiable evidence showing what actions actually occurred.",
        ],
      },
      {
        id: "thesis",
        heading: "Thesis",
        paragraphs: [
          "Autonomous agents need an independent verification layer.",
          "As agents get more autonomy — executing multi-step tool calls, chaining actions across systems, running with less supervision — the gap between what an agent reports and what actually happened becomes the thing that determines whether you can trust it with anything that matters.",
          "SwarmSync's premise is that this verification can't come from the agent itself. An agent checking its own work isn't verification; it's the same reasoning that produced the claim, asked to grade itself.",
        ],
      },
      {
        id: "architecture",
        heading: "Architecture",
        paragraphs: [
          "An orchestrator drives agent execution against real tools and APIs. Every action produces execution evidence — logs, responses, state changes — independent of whatever the agent later says about what it did. SwarmSync's verification layer correlates the agent's claims against that evidence, checks them against policy, and only then produces a verified result. Anything that doesn't check out is routed to exception handling and human review instead of being trusted by default.",
        ],
        diagram: "swarmsync",
      },
      {
        id: "verification-model",
        heading: "Verification Model",
        paragraphs: [
          "The verification layer is deliberately separated from the agent loop that produced the work:",
        ],
        list: [
          "Evidence collection — capturing what actually happened at the tool and API layer, not what the agent narrates.",
          "Claim validation — comparing the agent's stated outcome against that evidence.",
          "Execution correlation — tying specific actions to specific claims, so a general \"it worked\" isn't enough.",
          "Policy checks — confirming the action was allowed to happen, not just that it happened.",
          "Independent verification — running outside the agent's own reasoning path, so a confident but wrong agent can't verify itself into a pass.",
        ],
      },
      {
        id: "use-cases",
        heading: "Use Cases",
        paragraphs: [
          "The pattern matters most anywhere an agent's output triggers a real-world action or feeds another automated system without a person checking every step: agentic workflows that touch money, customer communication, or downstream systems; multi-agent pipelines where one agent's claimed output becomes another agent's trusted input; any workflow where \"the agent said it worked\" is currently the entire audit trail.",
        ],
      },
      {
        id: "design-decisions",
        heading: "Design Decisions",
        paragraphs: [
          "A few decisions shaped the architecture more than any other:",
        ],
        list: [
          "Verification lives outside the agent, not inside its prompt. Asking an agent to double-check its own work is not the same as an independent system checking it.",
          "Evidence, not narration, is the source of truth. What the agent says it did is a claim. What the tools and APIs recorded is evidence. The system is built to trust the second one.",
          "Failure is a first-class outcome, not an edge case. A workflow with no path for \"this doesn't check out — hand it to a person\" isn't ready for autonomy.",
        ],
      },
      {
        id: "current-state",
        heading: "Current State",
        paragraphs: [
          "SwarmSync is architecture and R&D, not a deployed product — the honest way to describe it is a worked-through design with a clear thesis, not a live verification service processing real agent traffic yet. It's the piece of this portfolio I'd point to for how I reason about trust and verification in agentic systems, not for a production track record.",
        ],
      },
      {
        id: "what-i-dont-show",
        heading: "What's Not Here",
        paragraphs: [
          "I'm not publishing the implementation details of how claim correlation and validation actually work — that's the part of this worth protecting. What's shown here is the shape of the problem and the architecture around it, not the internals.",
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
    thesis: "Extraction answers what the model thinks an invoice says. Verification answers what evidence supports that.",
    status: "Prototype",
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
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Invoice processing usually gets framed as an extraction problem: pull the vendor, amount, date, and line items off a document and get them into the books faster. That's necessary, but it isn't sufficient. Extraction answers \"what does the model think the invoice says?\" It doesn't answer \"what evidence supports that conclusion?\" — and for financial documents, that second question is the one that actually matters when something's wrong.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "InvoiceProof takes a document or email, classifies it, extracts the structured values, and then validates each one instead of treating extraction as the finish line. Every value that comes out the other side is mapped back to the evidence that supports it — the specific text or field on the source document it came from — so a downstream reviewer isn't taking the model's word for it.",
          "Documents that pass validation move on to the accounting workflow they belong to. Anything ambiguous, inconsistent, or missing supporting evidence — a total that doesn't reconcile with its line items, a vendor that doesn't match known records, a possible duplicate — gets flagged as an exception and routed to a person instead of pushed through.",
        ],
      },
      {
        id: "architecture",
        heading: "Architecture",
        paragraphs: [
          "A document or email is ingested, classified by type, run through structured extraction, and validated. The evidence map ties each extracted value back to its source. From there the workflow splits: documents that pass go to the accounting workflow; anything that doesn't gets routed to human review as an exception rather than forced through.",
        ],
        diagram: "invoiceproof",
      },
      {
        id: "key-design-decisions",
        heading: "Key Design Decisions",
        paragraphs: [
          "Extraction answers \"what does the model think the invoice says?\" Verification answers \"what evidence supports that conclusion?\" Those are different questions, and conflating them is where a lot of document-automation tools fall short — they report a confidently extracted value with no way to check it against the source.",
          "The exception path is treated as a normal outcome, not a failure state. Ambiguous documents are common; a workflow that quietly guesses on them is worse than one that routes them to a person.",
        ],
      },
      {
        id: "safety-verification-controls",
        heading: "Safety, Verification & Controls",
        paragraphs: [
          "Every value carries its evidence rather than a bare confidence score. Duplicate and anomaly checks run before a document is allowed to pass, not after. Ambiguous cases default to human review instead of a best guess.",
        ],
      },
      {
        id: "outcome",
        heading: "Outcome / Current State",
        paragraphs: [
          "InvoiceProof currently runs the full path end to end — intake through evidence mapping and routing — as a working prototype. I haven't put a claimed volume or accuracy number on it because I don't have a verified figure I'd stand behind. What I can say is that the evidence-first approach changes what a reviewer sees: not just an extracted number, but the source that backs it up.",
        ],
      },
      {
        id: "lessons",
        heading: "Lessons / Implications",
        paragraphs: [
          "The instinct to treat extraction as the deliverable is strong, because extraction is the visibly hard part. But the harder, more valuable problem for financial documents is building enough evidence and validation around the extraction that someone downstream can actually trust it without re-checking the source themselves.",
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
    thesis: "Assistance, not replacement: the system surfaces a good option in real time, the rep decides what to actually say.",
    status: "Prototype / Active Development",
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
    architectureTeaser: "Live Call → Transcription → Conversation State → Intent Detection → Knowledge Retrieval → Rep Interface",
    sections: [
      {
        id: "problem",
        heading: "Problem",
        paragraphs: [
          "Sales conversations move fast, and the moment where a rep would benefit most from context — an objection they haven't heard before, a buying signal they might miss, a question they don't have a crisp answer to — is also the moment there's no time to go look something up. The problem isn't a lack of information; it's getting the right piece of it into the conversation in real time without breaking the rep's attention or taking over the call.",
        ],
      },
      {
        id: "what-i-built",
        heading: "What I Built",
        paragraphs: [
          "An architecture that listens to a live call, keeps track of conversation state as it unfolds, and recognizes objections and buying signals as they happen. When something worth surfacing comes up, it retrieves the relevant product or company knowledge and recommends what the rep might say or ask next — as a suggestion in the rep's interface, not an action taken on their behalf.",
          "The same call transcript also feeds a separate, parallel path after the call ends: post-call analysis that produces coaching insights and can update CRM or workflow state, so the value isn't limited to the moment of the call.",
        ],
      },
      {
        id: "architecture",
        heading: "Architecture",
        paragraphs: [
          "A live call is transcribed into a stream, maintained as conversation state, and continuously checked for intent and objection signals. When something relevant surfaces, the system retrieves supporting knowledge and recommends a response or next-best-question to the rep. In parallel, the same call feeds a post-call path — analysis, coaching insights, and CRM or workflow updates — after the call ends.",
        ],
        diagram: "salescoach",
      },
      {
        id: "key-design-decisions",
        heading: "Key Design Decisions",
        paragraphs: [
          "This is built as assistance, not replacement. The system's job is to surface a good option at the right moment; the rep decides what to actually say. That shapes the interface as much as the model — recommendations need to be fast and unobtrusive enough that a rep can glance at them mid-conversation, not read a paragraph.",
        ],
      },
      {
        id: "guardrails",
        heading: "Guardrails",
        paragraphs: [
          "Recommendations are scoped to what the knowledge base actually supports, rather than open-ended generation, to reduce the chance of a confident but wrong suggestion mid-call. The rep interface is designed to be ignorable — nothing about the system interrupts or takes control of the conversation.",
        ],
      },
      {
        id: "outcome",
        heading: "Outcome / Current State",
        paragraphs: [
          "This one is earlier-stage than the others: prototype / active development. The real-time detection and recommendation path works end to end against recorded and live test conversations. I'm not claiming production call volume or a measured effect on close rates, because I don't have verified numbers for either yet.",
        ],
      },
      {
        id: "lessons",
        heading: "Lessons / Implications",
        paragraphs: [
          "Real-time is a genuinely different constraint than the other systems here. Verification and evidence still matter, but they have to happen fast enough to be useful mid-conversation, which pushes a lot of the design toward pre-computed knowledge retrieval rather than open-ended reasoning during the call itself.",
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
