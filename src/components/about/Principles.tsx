import { aboutCopy } from "@/content/site";

export function Principles() {
  return (
    <section className="border-t border-border/80 bg-subtle/30">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
            Operating Principles
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          How I decide what to build, and how to build it.
        </h2>

        <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {aboutCopy.principles.map((principle, idx) => (
            <div
              key={principle.title}
              className="group rounded-xl border border-border/80 bg-background-raised/70 p-6 shadow-xs backdrop-blur-xs transition-all hover:border-accent/40 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-strong font-semibold">
                  Rule 0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border-strong group-hover:bg-accent transition-colors" aria-hidden="true" />
              </div>
              <dt className="mt-3 text-base font-bold tracking-tight text-foreground text-balance">
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
