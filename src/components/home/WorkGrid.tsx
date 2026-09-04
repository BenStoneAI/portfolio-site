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
    <div className="mt-8">
      <div
        className="flex flex-wrap gap-2"
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
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] transition-colors ${
                active
                  ? "border-accent/50 bg-accent-soft text-foreground"
                  : "border-border text-muted hover:border-border-strong hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
