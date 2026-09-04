/**
 * Site-wide copy and navigation. Identity URLs live in links.ts.
 * Positioning: AI Automation & Agentic Systems Leader — not finance-first.
 */

import { links, resumeRequestHref } from "./links";

export const site = {
  name: "Ben Stone",
  role: "AI Automation & Agentic Systems Leader",
  titleSuffix: "Ben Stone | AI Automation & Agentic Systems Leader",
  description:
    "AI automation and agentic systems portfolio — workflows, agents, orchestration, verification, open protocol leadership, and production-adjacent systems that make autonomous work trustworthy.",
  url: "https://ben-stone-ai.vercel.app",
} as const;

export { links, resumeRequestHref };

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const nav: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Standards", href: "/#standards" },
  { label: "About", href: "/about" },
  { label: "Resume", href: resumeRequestHref, external: true },
  { label: "GitHub", href: links.github, external: true },
  { label: "LinkedIn", href: links.linkedin!, external: true },
];

export const heroCopy = {
  eyebrow: "AI Automation & Agentic Systems Leader",
  heading: "AI Automation & Agentic Systems",
  supporting:
    "I design and build the operating layer between business work and agentic systems — discovery, orchestration, tools, verification, settlement, and reputation — so autonomous work can be trusted in production.",
  secondary:
    "My background spans operations, process design, and hands-on AI implementation across finance and non-finance domains. Finance is one domain I know deeply; the pattern is broader: agents that do real work with evidence, controls, and clear human boundaries.",
  primaryCta: { label: "View Selected Work", href: "/#work" },
  secondaryCta: { label: "About Me", href: "/about" },
  tertiaryCta: { label: "GitHub", href: links.github },
} as const;

/** Homepage proof strip — near top, below hero. */
export const proofStrip = {
  items: [
    { label: "8 IETF Internet-Drafts", href: "/#standards" },
    { label: "W3C AIVS Community Group Co-Chair", href: "/#w3c-aivs" },
    { label: "SwarmSync", href: "/work/swarmsync" },
  ],
} as const;

export const selectedWorkCopy = {
  eyebrow: "Selected Work",
  heading: "Systems that make agentic work real.",
  supporting:
    "Each case study is a different shape of the same question: how do you get AI systems to do real work reliably — with the right checks, the right evidence, and the right person in the loop.",
} as const;

export const positioningStrip = {
  heading: "I build the layer between AI and actual work.",
  supporting:
    "The model is only one piece. Reliable automation also requires context, tools, routing, permissions, state, observability, failure handling, verification, and clear boundaries for human judgment.",
  stages: [
    "Business process",
    "Workflow design",
    "AI / agents",
    "Tools + data",
    "Verification",
    "Human control",
    "Production",
  ],
} as const;

export const howIBuild = {
  heading: "From messy process to working system.",
  steps: [
    {
      number: "01",
      title: "Understand reality",
      body: "Map what people actually do rather than what the process document says they do.",
    },
    {
      number: "02",
      title: "Find the leverage",
      body: "Identify where reasoning, retrieval, automation, or agents can remove meaningful work.",
    },
    {
      number: "03",
      title: "Design the operating model",
      body: "Define responsibilities, tools, data, state, permissions, and human boundaries.",
    },
    {
      number: "04",
      title: "Build the smallest complete loop",
      body: "Get one useful workflow working end to end before expanding the architecture.",
    },
    {
      number: "05",
      title: "Add verification",
      body: "Make outputs observable, testable, and supported by evidence.",
    },
    {
      number: "06",
      title: "Operationalize",
      body: "Add monitoring, failure handling, documentation, ownership, and deployment.",
    },
    {
      number: "07",
      title: "Remove myself",
      body: "A system is not finished if it depends on the person who created it being in the room.",
    },
  ],
} as const;

export const footerCopy = {
  prompt: "Interested in working together, or just want to talk shop?",
  contactNote: "Reach me by email, LinkedIn, or GitHub — whichever is easiest.",
  disclaimer:
    "All project descriptions reflect actual design and implementation work — no metrics on this site are estimated or fabricated. Internet-Drafts listed here are not approved IETF standards.",
} as const;

export const aboutCopy = {
  intro: [
    "I came to AI through operations, not hype.",
    "I have a background in finance, accounting, operations, and process improvement — and I build agentic systems that also reach beyond finance into commerce, verification, browser agents, and live assistance.",
    "I naturally see organizations as systems: information comes in, decisions are made, work is routed, exceptions occur, controls are applied, and outputs move somewhere else.",
    "AI introduces an entirely new kind of worker into that system. My focus is figuring out how to use it responsibly and practically.",
    "I work across the gap between the business problem and technical implementation. I can map a workflow with the people performing it, design an agentic architecture around it, work directly with repositories and APIs, build and test the implementation, diagnose where it breaks, and iterate until the system becomes useful.",
    "I am particularly comfortable when the process is still messy. Sometimes the hardest automation problem isn't automation at all. It is determining what the process should actually be.",
  ],
  principles: [
    {
      title: "Start with the work, not the model.",
      body: "The newest model does not matter if the workflow is wrong.",
    },
    {
      title: "Give agents jobs, not personalities.",
      body: "Clear responsibilities and contracts are more useful than elaborate personas.",
    },
    {
      title: "Evidence beats confidence.",
      body: "A system should be able to show why its answer deserves to be trusted.",
    },
    {
      title: "Automate decisions carefully.",
      body: "The more consequential the action, the stronger the verification and approval boundary should be.",
    },
    {
      title: "Build for whoever comes next.",
      body: "Documentation, observable behavior, tests, ownership, and failure recovery belong in the product.",
    },
    {
      title: "Ship the loop.",
      body: "A small workflow operating end to end is more valuable than a massive architecture that is 80% connected.",
    },
  ],
  bridgeHeading: "The useful part is the overlap.",
  bridgeSupporting:
    "I operate in the translation layer between business ambiguity and technical systems — fluent enough in operations to know what actually matters, and hands-on enough in AI engineering to build it.",
  bridge: [
    {
      title: "Business",
      items: ["Operations", "Process improvement", "Controls", "Commerce & workflows", "Finance (domain depth)", "Reporting"],
    },
    {
      title: "System design",
      items: ["Workflow mapping", "Automation architecture", "Data flow", "Failure modes", "Human controls"],
    },
    {
      title: "AI engineering",
      items: [
        "LLMs",
        "Agents",
        "Orchestration",
        "Tool use",
        "APIs",
        "RAG / context",
        "Verification",
        "Open protocols",
        "Observability",
        "Deployment",
      ],
    },
  ],
  resume: {
    heading: "Resume",
    body: "AI Automation portfolio résumé — focused on agentic systems, automation leadership, and production AI operations work.",
    ctaLabel: "Download PDF",
    ctaHref: links.resumePdf ?? "/about#resume",
  },
} as const;

export const technology = [
  {
    category: "AI / Agentic",
    items: [
      "Claude",
      "OpenAI",
      "Agentic workflows",
      "MCP",
      "Tool use",
      "RAG / context systems",
      "Multi-agent orchestration",
    ],
  },
  {
    category: "Engineering",
    items: ["TypeScript", "Python", "Next.js", "APIs", "PostgreSQL", "GitHub"],
  },
  {
    category: "Infrastructure",
    items: ["Azure", "Vercel", "Containers", "Background jobs", "Observability"],
  },
  {
    category: "Business Systems",
    items: ["Accounting platforms", "Email / documents", "CRM workflows", "Operational databases", "Reporting systems"],
  },
] as const;
