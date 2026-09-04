"use client";

import { useMemo, useState } from "react";
import {
  WORK_FILTERS,
  filterProjects,
  type WorkFilterId,
} from "@/content/projects";
import { ProjectCard } from "@/components/project/ProjectCard";

export function WorkGrid() {
  const [filter, setFilter] = useState<WorkFilterId | "all">("all");
  const visible = useMemo(() => filterProjects(filter), [filter]);

  return (
    <div className="mt-10">
      <div
        className="flex flex-wrap gap-2.5"
        role="tablist"
        aria-label="Filter selected systems"
      >
        {WORK_FILTERS.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={`cursor-pointer rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-all duration-200 ${
                active
                  ? "border-accent bg-accent text-accent-contrast font-bold shadow-[0_0_20px_-3px_var(--accent-glow)]"
                  : "border-border/90 bg-background-raised/50 text-muted hover:border-accent/50 hover:text-foreground hover:bg-subtle/80"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 divide-y divide-border/60">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
