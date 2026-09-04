import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

/**
 * Editorial row rather than a boxed card — the site already uses one
 * card-shaped pattern too many times if project entries get their own
 * bordered box on top of it. A top-rule row with a fixed meta column
 * reads more like a table of contents / dossier than a grid of tiles.
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid grid-cols-1 gap-4 border-t border-border py-7 transition-colors first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-8 sm:py-9"
    >
      <div className="flex flex-row items-start justify-between gap-3 sm:flex-col sm:justify-start sm:gap-3">
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
        <StatusBadge status={project.status} />
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          {project.category}
        </p>

        <h3 className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-strong sm:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="mt-0.5 text-sm text-muted">{project.subtitle}</p>

        <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-foreground/90 text-pretty">
          {project.oneLiner}
        </p>

        <p className="mt-5 max-w-xl truncate font-mono text-[11px] text-muted">
          {project.architectureTeaser}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          View Case Study
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
