import { aboutCopy } from "@/content/site";

export function Principles() {
  return (
    <section className="border-t border-border/80 bg-background/40">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            Operating Principles
          </p>
        </div>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          How I decide what to build, and how to build it.
        </h2>

        <dl className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {aboutCopy.principles.map((principle, idx) => (
            <div
              key={principle.title}
              className="glass-card-specular glass-card-hover group rounded-2xl border border-border/80 p-7"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                  Rule 0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border-strong group-hover:bg-accent group-hover:shadow-[0_0_8px_var(--accent)] transition-all" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-display text-lg font-bold tracking-tight text-foreground text-balance">
                {principle.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                {principle.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
