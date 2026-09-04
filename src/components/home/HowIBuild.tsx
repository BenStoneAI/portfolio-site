import { howIBuild } from "@/content/site";

export function HowIBuild() {
  return (
    <section className="border-t border-border/80 bg-background-raised/20">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
              How I Build
            </p>
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {howIBuild.heading}
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {howIBuild.steps.map((step) => (
            <li
              key={step.number}
              className="glass-card-specular glass-card-hover group relative rounded-2xl border border-border/80 p-7"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="font-mono text-sm font-bold text-accent tracking-widest">
                  {step.number}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border-strong group-hover:bg-accent group-hover:shadow-[0_0_8px_var(--accent)] transition-all" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
