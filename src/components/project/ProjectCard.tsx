import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

/**
 * Compact Selected Systems row — editorial, not a boxed card tile.
 * Visit Site only when visitUrl is set (YES URLs only).
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid grid-cols-1 gap-3 border-t border-border py-5 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,6.5rem)_1fr] sm:gap-6 sm:py-6">
      <div className="flex flex-row items-start justify-between gap-3 sm:flex-col sm:justify-start sm:gap-2">
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
        <StatusBadge status={project.status} />
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          {project.category}
        </p>

        <h3 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-[1.35rem]">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors hover:text-accent-strong"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-0.5 text-sm text-muted">{project.subtitle}</p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90 text-pretty sm:text-[0.95rem]">
          {project.cardOneLiner}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Case study
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          {project.visitUrl ? (
            <a
              href={project.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              Visit Site
              <span className="sr-only"> (opens in a new tab)</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
