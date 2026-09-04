import type { CapabilityStatus } from "@/content/projects";
import { STATUS_LABEL } from "@/content/projects";

const TONE: Record<CapabilityStatus, string> = {
  "live-product": "border-accent/50 bg-accent-soft/70 text-foreground shadow-[0_0_12px_-3px_var(--color-accent-glow)]",
  "production-system": "border-accent/50 bg-accent-soft/70 text-foreground shadow-[0_0_12px_-3px_var(--color-accent-glow)]",
  "active-development": "border-border-strong bg-subtle/50 text-foreground",
  "working-prototype": "border-border bg-subtle/30 text-foreground",
  "reference-implementation": "border-border-strong bg-subtle/50 text-foreground",
  "architecture-spec": "border-border text-muted border-dashed bg-background/50",
};

export function StatusBadge({ status }: { status: CapabilityStatus }) {
  const isLive = status === "live-product" || status === "production-system";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] font-medium backdrop-blur-xs transition-colors ${TONE[status]}`}
    >
      {isLive ? (
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ) : (
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            status === "active-development"
              ? "bg-foreground animate-pulse-subtle"
              : status === "reference-implementation"
              ? "bg-foreground/80"
              : "bg-muted"
          }`}
          aria-hidden="true"
        />
      )}
      {STATUS_LABEL[status]}
    </span>
  );
}
