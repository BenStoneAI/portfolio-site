/**
 * Central source of truth for site-wide config: URLs, navigation,
 * contact links, and short bio copy used in more than one place.
 *
 * Nothing here is fabricated. Values marked "placeholder" below are
 * not guesses — they need to be filled in with the real values
 * before this is shared widely. See README.md → "Editing portfolio
 * content" for exactly what to change and where.
 */

export const site = {
  name: "Ben Stone",
  role: "AI Automation & Agentic Systems",
  titleSuffix: "Ben Stone | AI Automation & Agentic Systems",
  description:
    "AI automation and agentic systems portfolio focused on turning complex business processes into reliable AI workflows, agents, integrations, and verification systems.",

  // Set this once the site has a permanent home. Used for canonical
  // URLs and Open Graph tags. Safe to leave as the Vercel URL.
  url: "https://ben-stone-ai.vercel.app",
} as const;

/**
 * PLACEHOLDER VALUES — replace before sharing this site widely.
 * Centralized here so nothing needs to be hunted down in components.
 */
export const links = {
  // TODO(ben): replace with your real contact email.
  email: "ben@your-domain.com",
  // TODO(ben): replace with your GitHub profile URL.
  github: "https://github.com/your-username",
  // TODO(ben): replace with your LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/in/your-profile",
  // Resume PDF is served from /public/resume.pdf. Drop the file in
  // place and this link starts working — see public/README-ADD-RESUME.txt.
  resume: "/resume.pdf",
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: links.resume, external: true },
  { label: "GitHub", href: links.github, external: true },
] as const;

export const heroCopy = {
  eyebrow: "AI Automation & Agentic Systems Builder",
  heading: "AI Automation & Agentic Systems",
  supporting:
    "I turn complex business processes into AI systems that can reason, route work, use tools, verify outputs, and operate reliably alongside people.",
  secondary:
    "My background spans finance, operations, process design, and hands-on AI implementation. I work at the layer between the business problem and the technical system — designing the agents, workflows, integrations, controls, and verification needed to make AI useful in real operations.",
  primaryCta: { label: "View Selected Work", href: "/#work" },
  secondaryCta: { label: "About Me", href: "/about" },
  tertiaryCta: { label: "GitHub", href: links.github },
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

export const aboutCopy = {
  intro: [
    "I came to AI through operations, not hype.",
    "I have a background in finance, accounting, operations, and process improvement. That turned out to be unusually useful when LLMs became capable of performing real operational work.",
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
    "I operate in the translation layer between business ambiguity and technical systems — fluent enough in finance and operations to know what actually matters, and hands-on enough in AI engineering to build it.",
  bridge: [
    {
      title: "Business",
      items: ["Finance", "Accounting", "Operations", "Process improvement", "Controls", "Reporting"],
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
        "Observability",
        "Deployment",
      ],
    },
  ],
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
