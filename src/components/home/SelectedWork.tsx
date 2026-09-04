import { selectedWorkCopy } from "@/content/site";
import { WorkGrid } from "@/components/home/WorkGrid";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 sm:py-24">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
            {selectedWorkCopy.eyebrow}
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {selectedWorkCopy.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted text-pretty">
          {selectedWorkCopy.supporting}
        </p>
      </div>

      <WorkGrid />
    </section>
  );
}
