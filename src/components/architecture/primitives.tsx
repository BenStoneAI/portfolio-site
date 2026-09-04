import type { ReactNode } from "react";

/**
 * Architecture diagram design system — Genesis Aerospace & Obsidian Spec.
 * Composable primitives with smoked glass materiality and warm champagne verification layers.
 */

type NodeKind = "source" | "process" | "orchestrator" | "agent" | "verify" | "human" | "output" | "exception";

const KIND_STYLES: Record<NodeKind, string> = {
  source: "border-border/80 bg-background-card/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
  process: "border-border/80 bg-background-card/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
  orchestrator: "border-border-strong bg-background-raised shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
  agent: "border-border/90 bg-background-card/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
  verify: "border-accent/70 bg-accent-soft/80 shadow-[0_0_24px_-4px_var(--accent-glow),inset_0_1px_0_0_rgba(255,255,255,0.3)] ring-1 ring-accent/30",
  human: "border-accent/70 bg-accent-soft/80 shadow-[0_0_24px_-4px_var(--accent-glow),inset_0_1px_0_0_rgba(255,255,255,0.3)] ring-1 ring-accent/30",
  output: "border-border/80 bg-background-card/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
  exception: "border-border-strong border-dashed bg-background/60",
};

const KIND_LABEL: Record<NodeKind, string> = {
  source: "SOURCE",
  process: "PROCESS",
  orchestrator: "ORCHESTRATOR",
  agent: "AGENT",
  verify: "VERIFICATION",
  human: "HUMAN CONTROL",
  output: "OUTPUT",
  exception: "EXCEPTION",
};

export function ArchitectureFlow({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  return (
    <figure
      role="group"
      aria-label={ariaLabel}
      className="w-full rounded-2xl border border-border/90 bg-background-raised/30 p-5 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-7 md:p-9"
    >
      <div className="flex flex-col items-stretch gap-0">{children}</div>
    </figure>
  );
}

export function ArchitectureNode({
  label,
  sublabel,
  kind = "process",
  className = "",
}: {
  label: string;
  sublabel?: string;
  kind?: NodeKind;
  className?: string;
}) {
  const isHighlighted = kind === "verify" || kind === "human";

  return (
    <div
      className={`min-w-0 rounded-xl border px-4 py-3.5 text-center transition-all hover:border-accent/60 hover:shadow-[0_0_20px_-4px_var(--accent-glow)] ${KIND_STYLES[kind]} ${className}`}
    >
      <div
        className={`font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
          isHighlighted ? "text-accent" : "text-muted"
        }`}
      >
        {KIND_LABEL[kind]}
      </div>
      <div className="mt-1 text-sm font-semibold tracking-tight text-balance sm:text-[0.95rem]">{label}</div>
      {sublabel ? (
        <div className="mt-0.5 text-xs text-muted text-pretty">{sublabel}</div>
      ) : null}
    </div>
  );
}

export function ArchitectureGroup({
  title,
  kind = "agent",
  columns = "auto",
  children,
}: {
  title: string;
  kind?: NodeKind;
  columns?: "auto" | "narrow";
  children: ReactNode;
}) {
  const isEmphasized = kind === "verify" || kind === "human";

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 transition-all ${
        isEmphasized
          ? "border-accent/50 bg-accent-soft/50 shadow-[0_0_30px_-8px_var(--accent-glow)]"
          : "border-border/90 bg-background-card/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
      }`}
    >
      <div
        className={`mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
          isEmphasized ? "text-accent" : "text-muted"
        }`}
      >
        {title}
      </div>
      <div
        className={`grid gap-3 ${
          columns === "narrow"
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function ArchitectureChip({
  label,
  kind = "agent",
}: {
  label: string;
  kind?: NodeKind;
}) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold leading-tight transition-all hover:border-accent/40 ${KIND_STYLES[kind]}`}
    >
      {label}
    </div>
  );
}

export function ArchitectureArrow({
  label,
  responsive = false,
  breakpoint = "sm",
}: {
  label?: string;
  responsive?: boolean;
  breakpoint?: "sm" | "lg";
}) {
  const downArrow = (
    <svg width="16" height="28" viewBox="0 0 16 28" className="text-border-strong transition-colors hover:text-accent">
      <line x1="8" y1="0" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 16 L8 24 L14 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const rightArrow = (
    <svg width="28" height="16" viewBox="0 0 28 16" className="text-border-strong transition-colors hover:text-accent">
      <line x1="0" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 2 L24 8 L16 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  if (responsive) {
    const wrapClass =
      breakpoint === "lg"
        ? "flex shrink-0 flex-col items-center justify-center py-2 lg:py-0 lg:px-2"
        : "flex shrink-0 flex-col items-center justify-center py-2 sm:py-0 sm:px-2";
    const hideDownClass = breakpoint === "lg" ? "lg:hidden" : "sm:hidden";
    const showRightClass = breakpoint === "lg" ? "hidden lg:inline-flex" : "hidden sm:inline-flex";
    return (
      <div className={wrapClass} aria-hidden="true">
        <span className={hideDownClass}>{downArrow}</span>
        <span className={showRightClass}>{rightArrow}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      {downArrow}
      {label ? (
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted font-semibold">
          {label}
        </div>
      ) : null}
    </div>
  );
}

export function ArchitectureBranches({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
  );
}

export function ArchitectureBranch({
  label,
  tone = "default",
  children,
}: {
  label: string;
  tone?: "default" | "exception";
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-stretch gap-0 rounded-xl border p-4 transition-all ${
        tone === "exception" ? "border-dashed border-border-strong bg-background/50" : "border-border bg-background-card/50"
      }`}
    >
      <div className="mb-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
        {label}
      </div>
      {children}
    </div>
  );
}

export { KIND_LABEL as ArchitectureKindLabels };
export type { NodeKind };
