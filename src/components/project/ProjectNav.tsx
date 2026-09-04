import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav aria-label="More projects" className="border-t border-border/80 bg-background-raised/20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 px-6 py-12 sm:grid-cols-2 sm:py-16">
        <Link
          href={`/work/${prev.slug}`}
          className="glass-card-specular glass-card-hover group flex flex-col justify-center gap-2 rounded-2xl border border-border/80 p-7"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted group-hover:text-accent transition-colors">
            <ArrowLeft size={12} aria-hidden="true" className="transition-transform group-hover:-translate-x-1" /> Previous
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">{prev.title}</span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="glass-card-specular glass-card-hover group flex flex-col justify-center gap-2 rounded-2xl border border-border/80 p-7 text-left transition-all sm:items-end sm:text-right"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted group-hover:text-accent transition-colors">
            Next <ArrowRight size={12} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">{next.title}</span>
        </Link>
      </div>
      <div className="mx-auto max-w-4xl px-6 pb-16 text-center sm:text-left">
        <Link href="/#work" className="font-mono text-xs font-bold uppercase tracking-wider text-muted underline-offset-4 hover:text-accent hover:underline transition-colors">
          ← Back to all work
        </Link>
      </div>
    </nav>
  );
}
