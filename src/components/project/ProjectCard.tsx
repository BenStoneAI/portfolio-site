import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

/**
 * Selected Systems row — High-end editorial presentation with Space Grotesk typography.
 * Visit Site only when visitUrl is set (YES URLs only).
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative -mx-4 rounded-2xl border-t border-border/70 p-6 sm:-mx-6 sm:p-8 transition-all duration-300 hover:border-accent/40 hover:bg-background-raised/30 hover:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.5)] first:border-t-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,7.5rem)_1fr] sm:gap-8">
        <div className="flex flex-row items-start justify-between gap-3 sm:flex-col sm:justify-start sm:gap-3">
          <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-foreground/25 group-hover:text-accent transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>

          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-[1.65rem]">
            <Link
              href={`/work/${project.slug}`}
              className="text-foreground transition-colors group-hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm font-medium text-muted">{project.subtitle}</p>

          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-foreground/90 text-pretty">
            {project.cardOneLiner}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href={`/work/${project.slug}`}
              className="group/link inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-accent"
            >
              <span>Case study</span>
              <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover/link:translate-x-1 text-accent" />
            </Link>

            {project.visitUrl ? (
              <a
                href={project.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent underline-offset-4 hover:underline"
              >
                Visit Site
                <span className="sr-only"> (opens in a new tab)</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
