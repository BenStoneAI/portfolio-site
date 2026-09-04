import type { CaseStudySection as CaseStudySectionType } from "@/content/projects";
import { DiagramRenderer } from "@/components/architecture/DiagramRenderer";

export function CaseStudySection({ section }: { section: CaseStudySectionType }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="mx-auto max-w-4xl scroll-mt-20 px-6 py-10 sm:py-12"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        <h2 id={`${section.id}-heading`} className="text-xl font-semibold tracking-tight sm:text-2xl">
          {section.heading}
        </h2>
      </div>

      <div className="mt-5 space-y-4">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-[1.05rem] leading-relaxed text-foreground/90 text-pretty">
            {p}
          </p>
        ))}
      </div>

      {section.list ? (
        <ul className="mt-5 space-y-3">
          {section.list.map((item, i) => (
            <li key={i} className="flex gap-3 text-[1.05rem] leading-relaxed text-foreground/90 text-pretty">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.diagram ? (
        <div className="mt-7">
          <DiagramRenderer diagram={section.diagram} />
        </div>
      ) : null}
    </section>
  );
}
