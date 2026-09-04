import { ArchitectureArrow, ArchitectureNode, ArchitectureFlow } from "./primitives";

export function SalesCoachDiagram() {
  return (
    <ArchitectureFlow ariaLabel="Real-Time AI Sales Coach architecture: a live call is transcribed into conversation state, intent and objections are detected, relevant knowledge is retrieved, and a response or next-best-question is recommended to the rep in real time. In parallel, each call also feeds a post-call analysis path that produces coaching insights and CRM updates.">
      <ArchitectureNode kind="source" label="Live call" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Transcription / stream" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Conversation state" />
      <ArchitectureArrow />
      <ArchitectureNode kind="verify" label="Intent + objection detection" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Knowledge retrieval" sublabel="Product, company, and objection-handling context" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Response / question recommender" />
      <ArchitectureArrow />
      <ArchitectureNode kind="human" label="Rep interface" sublabel="Suggestion only — the rep decides what to say" />

      <div className="mt-6 border-t border-dashed border-border-strong pt-5">
        <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          Parallel path — same call, after it ends
        </div>
        <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center sm:justify-center">
          <ArchitectureNode kind="source" label="Call" className="sm:w-36" />
          <ArchitectureArrow responsive />
          <ArchitectureNode kind="process" label="Post-call analysis" className="sm:w-44" />
          <ArchitectureArrow responsive />
          <ArchitectureNode kind="verify" label="Coaching insights" className="sm:w-44" />
          <ArchitectureArrow responsive />
          <ArchitectureNode kind="output" label="CRM / workflow actions" className="sm:w-44" />
        </div>
      </div>
    </ArchitectureFlow>
  );
}
