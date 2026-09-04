import type { CapabilityStatus } from "@/content/projects";
import { STATUS_LABEL } from "@/content/projects";

const TONE: Record<CapabilityStatus, string> = {
  implemented: "border-accent/40 bg-accent-soft text-foreground",
  demonstrated: "border-accent/40 bg-accent-soft text-foreground",
  specified: "border-border-strong text-foreground",
  experimental: "border-border text-muted",
  planned: "border-border text-muted border-dashed",
};

const DOT_TONE: Record<CapabilityStatus, string> = {
  implemented: "bg-accent",
  demonstrated: "bg-accent",
  specified: "bg-foreground",
  experimental: "bg-muted",
  planned: "bg-muted",
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
