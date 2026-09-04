import type { CapabilityStatus } from "@/content/projects";
import { STATUS_LABEL } from "@/content/projects";

const TONE: Record<CapabilityStatus, string> = {
  "live-product": "border-emerald-500/40 bg-emerald-950/30 text-emerald-300 dark:text-emerald-200 shadow-[0_0_15px_-4px_rgba(16,185,129,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)]",
  "production-system": "border-emerald-500/40 bg-emerald-950/30 text-emerald-300 dark:text-emerald-200 shadow-[0_0_15px_-4px_rgba(16,185,129,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)]",
  "active-development": "border-accent/40 bg-accent-soft/50 text-accent-strong shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
  "working-prototype": "border-border bg-subtle/40 text-foreground",
  "reference-implementation": "border-border-strong bg-subtle/60 text-foreground",
  "architecture-spec": "border-border text-muted border-dashed bg-background/50",
};

export function StatusBadge({ status }: { status: CapabilityStatus }) {
  const isLive = status === "live-product" || status === "production-system";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] font-semibold backdrop-blur-md transition-all ${TONE[status]}`}
    >
      {isLive ? (
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-radar-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
        </span>
      ) : (
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            status === "active-development"
              ? "bg-accent shadow-[0_0_6px_var(--accent)]"
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
