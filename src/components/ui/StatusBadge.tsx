import type { CapabilityStatus } from "@/content/projects";
import { STATUS_LABEL } from "@/content/projects";

const TONE: Record<CapabilityStatus, string> = {
  "live-product": "border-accent/40 bg-accent-soft text-foreground",
  "production-system": "border-accent/40 bg-accent-soft text-foreground",
  "active-development": "border-border-strong text-foreground",
  "working-prototype": "border-border text-foreground",
  "reference-implementation": "border-border-strong text-foreground",
  "architecture-spec": "border-border text-muted border-dashed",
};

const DOT_TONE: Record<CapabilityStatus, string> = {
  "live-product": "bg-accent",
  "production-system": "bg-accent",
  "active-development": "bg-foreground",
  "working-prototype": "bg-muted",
  "reference-implementation": "bg-foreground",
  "architecture-spec": "bg-muted",
};

export function StatusBadge({ status }: { status: CapabilityStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${TONE[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_TONE[status]}`} aria-hidden="true" />
      {STATUS_LABEL[status]}
    </span>
  );
}
