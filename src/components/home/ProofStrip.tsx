import Link from "next/link";
import { proofStrip } from "@/content/site";

export function ProofStrip() {
  return (
    <section aria-label="Credentials and flagship proof" className="border-y border-border bg-subtle/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-2 sm:py-3.5">
        {proofStrip.items.map((item, i) => (
          <div key={item.label} className="contents">
            {i > 0 ? (
              <span className="hidden text-muted sm:inline" aria-hidden="true">
                ·
              </span>
            ) : null}
            <Link
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/85 transition-colors hover:text-accent-strong"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
