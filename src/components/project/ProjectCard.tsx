import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

/**
 * Selected Systems row — elevated editorial presentation with smooth hover states.
 * Visit Site only when visitUrl is set (YES URLs only).
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group -mx-4 rounded-xl border-t border-border/80 px-4 py-6 transition-all hover:border-border-strong hover:bg-subtle/30 sm:-mx-5 sm:px-5 sm:py-7 first:border-t-0 first:pt-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-6">
        <div className="flex flex-row items-start justify-between gap-3 sm:flex-col sm:justify-start sm:gap-2.5">
          <span className="font-mono text-xs font-semibold text-muted/80 group-hover:text-accent-strong transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            {project.category}
          </p>

          <h3 className="mt-1.5 text-xl font-bold tracking-tight sm:text-[1.35rem]">
            <Link
              href={`/work/${project.slug}`}
              className="text-foreground transition-colors hover:text-accent-strong"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm font-medium text-muted">{project.subtitle}</p>

          <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-foreground/90 text-pretty sm:text-[0.95rem]">
            {project.cardOneLiner}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href={`/work/${project.slug}`}
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent-strong"
            >
              Case study
              <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover/link:translate-x-1 text-accent" />
            </Link>

            {project.visitUrl ? (
              <a
                href={project.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
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
