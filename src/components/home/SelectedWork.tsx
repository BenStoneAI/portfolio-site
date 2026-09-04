import { selectedWorkCopy } from "@/content/site";
import { WorkGrid } from "@/components/home/WorkGrid";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            {selectedWorkCopy.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {selectedWorkCopy.heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
          {selectedWorkCopy.supporting}
        </p>
      </div>

      <WorkGrid />
    </section>
  );
}
