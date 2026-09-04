import type { ProjectStatus } from "@/content/projects";

const TONE: Record<ProjectStatus, string> = {
  "Production System": "border-accent/40 bg-accent-soft text-foreground",
  "Production Workflow": "border-accent/40 bg-accent-soft text-foreground",
  "Active Development": "border-border-strong text-foreground",
  Prototype: "border-border text-muted",
  "Prototype / Active Development": "border-border text-muted",
  "Architecture / R&D": "border-border text-muted border-dashed",
  "Independent Project": "border-border-strong text-foreground",
};

const DOT_TONE: Record<ProjectStatus, string> = {
  "Production System": "bg-accent",
  "Production Workflow": "bg-accent",
  "Active Development": "bg-foreground",
  Prototype: "bg-muted",
  "Prototype / Active Development": "bg-muted",
  "Architecture / R&D": "bg-muted",
  "Independent Project": "bg-foreground",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${TONE[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_TONE[status]}`} aria-hidden="true" />
      {status}
    </span>
  );
}
