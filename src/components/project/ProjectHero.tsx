import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <header className="mx-auto max-w-4xl px-6 pt-14 pb-10 sm:pt-20">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">
        {project.category}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-2 text-lg text-muted">{project.subtitle}</p>

      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/90 text-pretty">
        {project.thesis}
      </p>

      <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-3">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Status</dt>
          <dd className="mt-1.5">
            <StatusBadge status={project.status} />
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Role</dt>
          <dd className="mt-1.5 text-sm text-foreground/90">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">System Type</dt>
          <dd className="mt-1.5 text-sm text-foreground/90">{project.systemType}</dd>
        </div>
      </dl>
    </header>
  );
}
