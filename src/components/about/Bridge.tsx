import { ArchitectureArrow } from "@/components/architecture/primitives";
import { aboutCopy } from "@/content/site";

export function Bridge({ eyebrow }: { eyebrow?: string }) {
  return (
    <section className="border-t border-border/80 bg-background/50">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
              {eyebrow}
            </p>
          </div>
        ) : null}
        <h2 className={`font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${eyebrow ? "mt-5" : ""}`}>
          {aboutCopy.bridgeHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
          {aboutCopy.bridgeSupporting}
        </p>

        <div className="mt-12 flex flex-col items-stretch gap-0 sm:flex-row sm:items-stretch">
          {aboutCopy.bridge.map((column, i) => (
            <div key={column.title} className="contents">
              {i > 0 ? <ArchitectureArrow responsive breakpoint="sm" /> : null}
              <div className="glass-card-specular glass-card-hover group rounded-2xl border border-border/80 p-7 sm:flex-1">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent font-bold">
                    {column.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-muted/60">0{i + 1}</span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/90 font-normal">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/80" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
