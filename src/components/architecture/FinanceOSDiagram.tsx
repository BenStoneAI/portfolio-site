import {
  ArchitectureArrow,
  ArchitectureChip,
  ArchitectureFlow,
  ArchitectureGroup,
  ArchitectureNode,
} from "./primitives";

const SOURCES = ["Email", "Accounting systems", "Operational data", "Documents", "AP / AR inputs"];

const AGENTS = [
  "Revenue",
  "Cash",
  "AP",
  "AR",
  "COGS",
  "Commissions",
  "Intercompany",
  "Close",
  "Journals",
  "Financial integrity",
  "Controller",
  "Treasury",
];

export function FinanceOSDiagram() {
  return (
    <ArchitectureFlow ariaLabel="FinanceOS enterprise AI ops pattern: sources feed ingestion, an orchestrator classifies and routes work to specialist finance agents, outputs are verified, and sensitive results wait for human review before reporting or action.">
      <ArchitectureGroup title="Sources" kind="source">
        {SOURCES.map((s) => (
          <ArchitectureChip key={s} label={s} kind="source" />
        ))}
      </ArchitectureGroup>

      <ArchitectureArrow />

      <ArchitectureNode kind="process" label="Ingestion + normalization" />

      <ArchitectureArrow />

      <ArchitectureNode
        kind="orchestrator"
        label="Orchestrator"
        sublabel="Classification · entity & period context · routing · state · policies"
      />

      <ArchitectureArrow />

      <ArchitectureGroup title="Specialist finance agents" kind="agent" columns="narrow">
        {AGENTS.map((a) => (
          <ArchitectureChip key={a} label={a} kind="agent" />
        ))}
      </ArchitectureGroup>

      <ArchitectureArrow />

      <ArchitectureNode kind="verify" label="Verification + evidence" />

      <ArchitectureArrow />

      <ArchitectureNode kind="human" label="Human review / approval" />

      <ArchitectureArrow />

      <ArchitectureNode
        kind="output"
        label="Reporting, draft actions, exceptions"
      />
    </ArchitectureFlow>
  );
}
