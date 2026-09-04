import {
  ArchitectureArrow,
  ArchitectureChip,
  ArchitectureFlow,
  ArchitectureGroup,
  ArchitectureNode,
} from "./primitives";

const PIPELINE = [
  "Discovery",
  "Engagement",
  "Execution",
  "Verification",
  "Settlement",
  "Reputation",
] as const;

const VERIFICATION_STEPS = [
  "Evidence collection",
  "Claim validation",
  "Execution correlation",
  "Policy checks",
  "Independent verification",
];

export function SwarmSyncDiagram() {
  return (
    <ArchitectureFlow ariaLabel="SwarmSync autonomous agent commerce and trust pipeline: discovery through engagement, execution, verification layer, settlement, and reputation, with verification as one layer in the stack.">
      <ArchitectureGroup title="Commerce & trust pipeline" kind="process">
        {PIPELINE.map((step) => (
          <ArchitectureChip key={step} label={step} kind="process" />
        ))}
      </ArchitectureGroup>

      <ArchitectureArrow />

      <ArchitectureNode kind="agent" label="Agent execution" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Tools / APIs / systems" />
      <ArchitectureArrow />
      <ArchitectureNode
        kind="process"
        label="Execution evidence"
        sublabel="What actually happened, not what the agent says happened"
      />
      <ArchitectureArrow />

      <ArchitectureGroup title="Verification layer (one slice of SwarmSync)" kind="verify">
        {VERIFICATION_STEPS.map((s) => (
          <ArchitectureChip key={s} label={s} kind="verify" />
        ))}
      </ArchitectureGroup>

      <ArchitectureArrow />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ArchitectureNode kind="output" label="Settlement path" />
        <ArchitectureNode kind="output" label="Reputation (SwarmScore)" />
        <ArchitectureNode kind="exception" label="Exception / human review" />
      </div>
    </ArchitectureFlow>
  );
}
