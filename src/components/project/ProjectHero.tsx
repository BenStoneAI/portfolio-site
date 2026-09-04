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
    <header className="mx-auto max-w-4xl px-6 pt-20 pb-14 sm:pt-28">
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
          {project.category}
        </p>
      </div>

      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {project.title}
      </h1>
      <p className="mt-2 text-lg font-medium text-muted">{project.subtitle}</p>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/95 text-pretty font-normal">
        {project.thesis}
      </p>

      {visitTargets.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {visitTargets.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent underline-offset-4 hover:underline"
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : null}

      <dl className="glass-card-specular mt-12 grid grid-cols-1 gap-6 rounded-2xl border border-border/80 p-6 sm:grid-cols-3">
        <div>
          <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Status</dt>
          <dd className="mt-2">
            <StatusBadge status={project.status} />
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Role</dt>
          <dd className="mt-2 text-sm font-semibold text-foreground">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">System Type</dt>
          <dd className="mt-2 text-sm font-semibold text-foreground">{project.systemType}</dd>
        </div>
      </dl>
    </header>
  );
}
