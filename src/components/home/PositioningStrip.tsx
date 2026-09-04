import { ArchitectureArrow, ArchitectureNode, type NodeKind } from "@/components/architecture/primitives";
import { positioningStrip } from "@/content/site";

const KIND_BY_INDEX: NodeKind[] = ["source", "process", "agent", "process", "verify", "human", "output"];

export function PositioningStrip() {
  return (
    <section className="border-y border-border/80 bg-subtle/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl">
            {positioningStrip.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
            {positioningStrip.supporting}
          </p>
        </div>

        <div
          role="group"
          aria-label="The layers between a business process and a production AI system: business process, workflow design, AI and agents, tools and data, verification, human control, production."
          className="mt-10 flex flex-col items-stretch gap-0 rounded-xl border border-border bg-background-raised/80 p-4 shadow-sm backdrop-blur-sm sm:p-6 lg:flex-row lg:items-center"
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
