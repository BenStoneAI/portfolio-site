import { ArchitectureArrow, ArchitectureNode, type NodeKind } from "@/components/architecture/primitives";
import { positioningStrip } from "@/content/site";

const KIND_BY_INDEX: NodeKind[] = ["source", "process", "agent", "process", "verify", "human", "output"];

export function PositioningStrip() {
  return (
    <section className="border-y border-border/80 bg-background-raised/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
            {positioningStrip.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
            {positioningStrip.supporting}
          </p>
        </div>

        <div
          role="group"
          aria-label="The layers between a business process and a production AI system: business process, workflow design, AI and agents, tools and data, verification, human control, production."
          className="mt-12 flex flex-col items-stretch gap-0 rounded-2xl border border-border/90 bg-background/80 p-5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-7 lg:flex-row lg:items-center"
        >
          {positioningStrip.stages.map((stage, i) => (
            <div key={stage} className="contents">
              {i > 0 ? <ArchitectureArrow responsive breakpoint="lg" /> : null}
              <ArchitectureNode label={stage} kind={KIND_BY_INDEX[i]} className="lg:flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
