import { ArchitectureArrow } from "@/components/architecture/primitives";
import { aboutCopy } from "@/content/site";

export function Bridge({ eyebrow }: { eyebrow?: string }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        {eyebrow ? (
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">{eyebrow}</p>
        ) : null}
        <h2 className={`text-2xl font-semibold tracking-tight text-balance sm:text-3xl ${eyebrow ? "mt-3" : ""}`}>
          {aboutCopy.bridgeHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
          {aboutCopy.bridgeSupporting}
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-0 sm:flex-row sm:items-stretch">
          {aboutCopy.bridge.map((column, i) => (
            <div key={column.title} className="contents">
              {i > 0 ? <ArchitectureArrow responsive breakpoint="sm" /> : null}
              <div className="rounded-lg border border-border bg-background-raised/60 p-5 sm:flex-1">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-strong">
                  {column.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {column.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/90">
                      {item}
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
