import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav aria-label="More projects" className="border-t border-border">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 sm:my-10">
        <Link
          href={`/work/${prev.slug}`}
          className="group flex flex-col justify-center gap-1 bg-background px-6 py-6 transition-colors hover:bg-subtle"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            <ArrowLeft size={12} aria-hidden="true" /> Previous
          </span>
          <span className="text-base font-semibold">{prev.title}</span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col justify-center gap-1 bg-background px-6 py-6 text-right transition-colors hover:bg-subtle sm:items-end"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            Next <ArrowRight size={12} aria-hidden="true" />
          </span>
          <span className="text-base font-semibold">{next.title}</span>
        </Link>
      </div>
      <div className="mx-auto max-w-4xl px-6 pb-14 text-center sm:text-left">
        <Link href="/#work" className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline">
          ← Back to all work
        </Link>
      </div>
    </nav>
  );
}
