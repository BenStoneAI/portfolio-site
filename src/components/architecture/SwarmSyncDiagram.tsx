import {
  ArchitectureArrow,
  ArchitectureChip,
  ArchitectureFlow,
  ArchitectureGroup,
  ArchitectureNode,
} from "./primitives";

const VERIFICATION_STEPS = [
  "Evidence collection",
  "Claim validation",
  "Execution correlation",
  "Policy checks",
  "Independent verification",
];

export function SwarmSyncDiagram() {
  return (
    <ArchitectureFlow ariaLabel="SwarmSync architecture: an orchestrator directs agent execution against tools and APIs, execution evidence is collected, the SwarmSync verification layer checks claims against that evidence, and the result is either a verified result or an exception routed to human review.">
      <ArchitectureNode kind="source" label="User / orchestrator" />
      <ArchitectureArrow />
      <ArchitectureNode kind="agent" label="Agent execution" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Tools / APIs / systems" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Execution evidence" sublabel="What actually happened, not what the agent says happened" />
      <ArchitectureArrow />

      <ArchitectureGroup title="SwarmSync verification layer" kind="verify">
        {VERIFICATION_STEPS.map((s) => (
          <ArchitectureChip key={s} label={s} kind="verify" />
        ))}
      </ArchitectureGroup>

      <ArchitectureArrow />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ArchitectureNode kind="output" label="Verified result" />
        <ArchitectureNode kind="exception" label="Exception / human review" />
      </div>
    </ArchitectureFlow>
  );
}
