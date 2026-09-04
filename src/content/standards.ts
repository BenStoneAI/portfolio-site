/**
 * IETF Internet-Draft portfolio set (canonical 8).
 * These are Individual Submission Internet-Drafts / work in progress —
 * NOT IETF-approved standards, RFCs, or working-group consensus documents.
 */

export type StandardsStack =
  | "DEFINE"
  | "SETTLE"
  | "PROVE"
  | "CARRY TRUST"
  | "MEASURE"
  | "RESOLVE";

export type StandardDraft = {
  acronym: string;
  plainEnglish: string;
  title: string;
  draftStem: string;
  datatrackerUrl: string;
  /** Public companion repo when one exists. */
  repoUrl?: string;
  stack: StandardsStack;
};

export const standardsIntro = {
  eyebrow: "Open Standards & Protocol Leadership",
  heading: "Protocols for agent commerce, integrity, and trust.",
  supporting:
    "I author Individual Submission Internet-Drafts that define how agents should describe transactions, settle commerce, prove integrity, carry trust, measure reputation, and resolve disputes. These are published drafts under active discussion — not approved IETF standards.",
  disclaimer:
    "Internet-Drafts are working documents. Listing them here does not mean IETF approval, RFC status, or working-group consensus.",
} as const;

export const standards: StandardDraft[] = [
  {
    stack: "DEFINE",
    acronym: "ATXN",
    plainEnglish: "Defines what an agent-to-agent transaction is — the shared vocabulary before anything settles.",
    title: "ATXN: Agent-to-Agent Transaction Definition Protocol",
    draftStem: "draft-stone-atxn",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-atxn/",
  },
  {
    stack: "SETTLE",
    acronym: "VCAP",
    plainEnglish: "Verified commerce rules so agent payments and deliveries can be checked, not just claimed.",
    title: "VCAP: Verified Commerce for Agent Protocols",
    draftStem: "draft-stone-vcap",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-vcap/",
    repoUrl: "https://github.com/swarmsync-ai/vcap-spec",
  },
  {
    stack: "SETTLE",
    acronym: "VCAP-AP2",
    plainEnglish: "Binds VCAP settlement semantics to the Agent Payments Protocol (AP2) for verified delivery.",
    title: "VCAP-AP2 Binding: Verified Delivery Settlement for the Agent Payments Protocol",
    draftStem: "draft-stone-vcap-ap2-binding",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-vcap-ap2-binding/",
  },
  {
    stack: "PROVE",
    acronym: "AIVS",
    plainEnglish: "How to prove an agentic system's outputs and actions are integrity-checked against evidence.",
    title: "AIVS: Agentic Integrity Verification Standard",
    draftStem: "draft-stone-aivs",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-aivs/",
    repoUrl: "https://github.com/swarmsync-ai/aivs-spec",
  },
  {
    stack: "CARRY TRUST",
    acronym: "ATEP",
    plainEnglish: "A portable trust and execution passport agents can carry across systems and workflows.",
    title: "ATEP: Agent Trust and Execution Passport",
    draftStem: "draft-stone-atep",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-atep/",
    repoUrl: "https://github.com/swarmsync-ai/atep-spec",
  },
  {
    stack: "MEASURE",
    acronym: "SwarmScore V1",
    plainEnglish: "Volume-scaled reputation so agent track records can be compared fairly as activity grows.",
    title: "SwarmScore V1: Volume-Scaled Agent Reputation Protocol",
    draftStem: "draft-stone-swarmscore-v1",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-swarmscore-v1/",
    repoUrl: "https://github.com/swarmsync-ai/swarmscore-spec",
  },
  {
    stack: "MEASURE",
    acronym: "SwarmScore V2 Canary",
    plainEnglish: "Safety-aware reputation that canary-weights risky behavior instead of raw volume alone.",
    title: "SwarmScore V2 Canary: Safety-Aware Agent Reputation Protocol",
    draftStem: "draft-stone-swarmscore-v2-canary",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-swarmscore-v2-canary/",
    repoUrl: "https://github.com/swarmsync-ai/swarmscore-spec",
  },
  {
    stack: "RESOLVE",
    acronym: "ADRP",
    plainEnglish: "Dispute resolution when agent commerce fails, conflicts, or needs an accountable unwind path.",
    title: "ADRP: Agent Dispute Resolution Protocol",
    draftStem: "draft-stone-adrp",
    datatrackerUrl: "https://datatracker.ietf.org/doc/draft-stone-adrp/",
  },
];

export const stackOrder: StandardsStack[] = [
  "DEFINE",
  "SETTLE",
  "PROVE",
  "CARRY TRUST",
  "MEASURE",
  "RESOLVE",
];

export const stackPlainEnglish: Record<StandardsStack, string> = {
  DEFINE: "Name the transaction",
  SETTLE: "Settle with verification",
  PROVE: "Prove integrity",
  "CARRY TRUST": "Carry trust across systems",
  MEASURE: "Measure reputation",
  RESOLVE: "Resolve disputes",
};

export function standardsByStack(): { stack: StandardsStack; label: string; drafts: StandardDraft[] }[] {
  return stackOrder.map((stack) => ({
    stack,
    label: stackPlainEnglish[stack],
    drafts: standards.filter((d) => d.stack === stack),
  }));
}
