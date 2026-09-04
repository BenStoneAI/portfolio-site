import type { CaseStudySection as CaseStudySectionType } from "@/content/projects";
import { DiagramRenderer } from "@/components/architecture/DiagramRenderer";

export function CaseStudySection({ section }: { section: CaseStudySectionType }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-12 sm:py-16"
    >
      <div className="flex items-center gap-3.5">
        <span className="h-px w-8 bg-accent shadow-[0_0_8px_var(--accent)]" aria-hidden="true" />
        <h2 id={`${section.id}-heading`} className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {section.heading}
        </h2>
      </div>

      <div className="mt-6 space-y-4.5">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-[1.05rem] leading-relaxed text-foreground/90 text-pretty font-normal">
            {p}
          </p>
        ))}
      </div>

      {section.list ? (
        <ul className="mt-6 space-y-3.5">
          {section.list.map((item, i) => (
            <li key={i} className="flex gap-3.5 text-[1.05rem] leading-relaxed text-foreground/90 text-pretty">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_var(--accent)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.diagram ? (
        <div className="mt-9">
          <DiagramRenderer diagram={section.diagram} />
        </div>
      ) : null}
    </section>
  );
}
