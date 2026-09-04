import type { ReactNode } from "react";

/**
 * Architecture diagram design system.
 *
 * A small set of composable primitives used to build every system
 * diagram on the site. They share one visual language — flat neutral
 * boxes, a monospace category label, a single accent reserved for
 * verification/human-control layers — so a reader who has seen one
 * diagram can read all of them. Diagrams are read top-to-bottom and
 * reflow naturally on narrow screens; nothing here relies on fixed
 * pixel widths or horizontal scrolling.
 */

type NodeKind = "source" | "process" | "orchestrator" | "agent" | "verify" | "human" | "output" | "exception";

const KIND_STYLES: Record<NodeKind, string> = {
  source: "border-border/90 bg-background-raised/80 shadow-xs",
  process: "border-border/90 bg-background-raised/80 shadow-xs",
  orchestrator: "border-border-strong bg-background-raised shadow-xs",
  agent: "border-border-strong/80 bg-background-raised/90 shadow-xs",
  verify: "border-accent/50 bg-accent-soft/70 shadow-[0_0_16px_-4px_var(--color-accent-glow)] ring-1 ring-accent/30",
  human: "border-accent/50 bg-accent-soft/70 shadow-[0_0_16px_-4px_var(--color-accent-glow)] ring-1 ring-accent/30",
  output: "border-border/90 bg-background-raised/80 shadow-xs",
  exception: "border-border-strong border-dashed bg-background/80",
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
      className="w-full rounded-xl border border-border/80 bg-subtle/30 p-4 shadow-sm backdrop-blur-xs sm:p-6 md:p-8"
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
      className={`min-w-0 rounded-lg border px-4 py-3.5 text-center transition-all hover:border-accent/40 ${KIND_STYLES[kind]} ${className}`}
    >
      <div
        className={`font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${
          isHighlighted ? "text-accent-strong" : "text-muted"
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
      className={`rounded-xl border p-4 sm:p-5 transition-colors ${
        isEmphasized
          ? "border-accent/40 bg-accent-soft/40 shadow-[0_0_20px_-6px_var(--color-accent-glow)]"
          : "border-border/90 bg-background-raised/70 shadow-xs"
      }`}
    >
      <div
        className={`mb-3.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${
          isEmphasized ? "text-accent-strong" : "text-muted"
        }`}
      >
        {title}
      </div>
      <div
        className={`grid gap-2.5 ${
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
      className={`rounded-md border px-3 py-2 text-center text-xs font-medium leading-tight transition-colors ${KIND_STYLES[kind]}`}
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
  /** When true, renders as a down-arrow on narrow screens and a right-arrow from `breakpoint` up — for rows that go from stacked to side-by-side. */
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
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted font-medium">
          {label}
        </div>
      ) : null}
    </div>
  );
}

/** A horizontal split into two or more labeled paths (e.g. pass vs. exception). */
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
      className={`flex flex-col items-stretch gap-0 rounded-lg border p-3.5 transition-colors ${
        tone === "exception" ? "border-dashed border-border-strong bg-background/50" : "border-border bg-background-raised/50"
      }`}
    >
      <div className="mb-2 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </div>
      {children}
    </div>
  );
}

export { KIND_LABEL as ArchitectureKindLabels };
export type { NodeKind };
