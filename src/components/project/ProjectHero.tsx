import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ProjectHero({ project }: { project: Project }) {
  const visitTargets = [
    ...(project.visitUrl
      ? [{ label: "Visit Site", href: project.visitUrl }]
      : []),
    ...(project.visitLinks ?? []),
  ];

  return (
    <header className="mx-auto max-w-4xl px-6 pt-16 pb-12 sm:pt-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
          {project.category}
        </p>
      </div>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {project.title}
      </h1>
      <p className="mt-2 text-lg font-medium text-muted">{project.subtitle}</p>

      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/90 text-pretty font-normal">
        {project.thesis}
      </p>

      {visitTargets.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {visitTargets.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent-strong underline-offset-4 hover:underline"
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : null}

      <dl className="mt-10 grid grid-cols-1 gap-4 rounded-xl border border-border/80 bg-background-raised/60 p-5 shadow-xs sm:grid-cols-3">
        <div>
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Status</dt>
          <dd className="mt-2">
            <StatusBadge status={project.status} />
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Role</dt>
          <dd className="mt-2 text-sm font-medium text-foreground">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">System Type</dt>
          <dd className="mt-2 text-sm font-medium text-foreground">{project.systemType}</dd>
        </div>
      </dl>
    </header>
  );
}
