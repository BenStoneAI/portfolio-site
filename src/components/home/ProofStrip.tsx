import Link from "next/link";
import { proofStrip } from "@/content/site";

export function ProofStrip() {
  return (
    <section aria-label="Credentials and flagship proof" className="border-b border-border/80 bg-background-raised/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3.5 px-6 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
            VERIFIED CREDENTIALS
          </span>
        </div>
        <span className="hidden text-border-strong sm:inline" aria-hidden="true">
          |
        </span>
        {proofStrip.items.map((item, i) => (
          <div key={item.label} className="contents">
            {i > 0 ? (
              <span className="hidden text-muted/40 sm:inline" aria-hidden="true">
                ·
              </span>
            ) : null}
            <Link
              href={item.href}
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/90 transition-all hover:text-accent"
            >
              <span className="h-1 w-1 rounded-full bg-border-strong group-hover:bg-accent group-hover:shadow-[0_0_8px_var(--accent)] transition-all" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
