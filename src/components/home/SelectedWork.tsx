import { projects } from "@/content/projects";
import { selectedWorkCopy } from "@/content/site";
import { ProjectCard } from "@/components/project/ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">
          {selectedWorkCopy.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {selectedWorkCopy.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted text-pretty">
          {selectedWorkCopy.supporting}
        </p>
      </div>

      <div className="mt-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
