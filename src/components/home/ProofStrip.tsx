import Link from "next/link";
import { proofStrip } from "@/content/site";

export function ProofStrip() {
  return (
    <section aria-label="Credentials and flagship proof" className="border-b border-border/80 bg-subtle/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2 sm:py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted font-medium">
          VERIFIED PROOF
        </span>
        <span className="hidden text-border-strong sm:inline" aria-hidden="true">
          |
        </span>
        {proofStrip.items.map((item, i) => (
          <div key={item.label} className="contents">
            {i > 0 ? (
              <span className="hidden text-muted/60 sm:inline" aria-hidden="true">
                ·
              </span>
            ) : null}
            <Link
              href={item.href}
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/85 transition-colors hover:text-accent-strong"
            >
              <span className="h-1 w-1 rounded-full bg-accent/60 group-hover:bg-accent" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
