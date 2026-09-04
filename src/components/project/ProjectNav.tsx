import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav aria-label="More projects" className="border-t border-border/80 bg-subtle/20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-2 sm:py-12">
        <Link
          href={`/work/${prev.slug}`}
          className="group flex flex-col justify-center gap-1.5 rounded-xl border border-border/80 bg-background-raised/80 p-6 shadow-xs backdrop-blur-xs transition-all hover:border-accent/50 hover:shadow-sm"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted group-hover:text-accent-strong transition-colors">
            <ArrowLeft size={12} aria-hidden="true" className="transition-transform group-hover:-translate-x-1" /> Previous
          </span>
          <span className="text-base font-bold tracking-tight text-foreground group-hover:text-accent-strong transition-colors">{prev.title}</span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col justify-center gap-1.5 rounded-xl border border-border/80 bg-background-raised/80 p-6 text-left transition-all hover:border-accent/50 hover:shadow-sm sm:items-end sm:text-right backdrop-blur-xs shadow-xs"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted group-hover:text-accent-strong transition-colors">
            Next <ArrowRight size={12} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-base font-bold tracking-tight text-foreground group-hover:text-accent-strong transition-colors">{next.title}</span>
        </Link>
      </div>
      <div className="mx-auto max-w-4xl px-6 pb-14 text-center sm:text-left">
        <Link href="/#work" className="font-mono text-xs font-semibold text-muted underline-offset-4 hover:text-accent-strong hover:underline transition-colors">
          ← Back to all work
        </Link>
      </div>
    </nav>
  );
}
