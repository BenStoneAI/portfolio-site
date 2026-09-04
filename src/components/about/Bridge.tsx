import { ArchitectureArrow } from "@/components/architecture/primitives";
import { aboutCopy } from "@/content/site";

export function Bridge({ eyebrow }: { eyebrow?: string }) {
  return (
    <section className="border-t border-border/80 bg-subtle/20">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
              {eyebrow}
            </p>
          </div>
        ) : null}
        <h2 className={`text-2xl font-bold tracking-tight text-balance sm:text-3xl ${eyebrow ? "mt-4" : ""}`}>
          {aboutCopy.bridgeHeading}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted text-pretty">
          {aboutCopy.bridgeSupporting}
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-0 sm:flex-row sm:items-stretch">
          {aboutCopy.bridge.map((column, i) => (
            <div key={column.title} className="contents">
              {i > 0 ? <ArchitectureArrow responsive breakpoint="sm" /> : null}
              <div className="group rounded-xl border border-border bg-background-raised/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-accent/40 sm:flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong font-semibold">
                    {column.title}
                  </h3>
                  <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/90">
                      <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
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
