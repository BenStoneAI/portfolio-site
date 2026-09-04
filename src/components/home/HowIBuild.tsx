import { howIBuild } from "@/content/site";

export function HowIBuild() {
  return (
    <section className="border-t border-border/80 bg-subtle/10">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
              How I Build
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            {howIBuild.heading}
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {howIBuild.steps.map((step) => (
            <li
              key={step.number}
              className="group relative rounded-xl border border-border/80 bg-background-raised/60 p-6 shadow-xs backdrop-blur-xs transition-all hover:border-accent/40 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-accent-strong tracking-wider">
                  {step.number}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border-strong group-hover:bg-accent transition-colors" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-base font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
