import {
  ArchitectureArrow,
  ArchitectureChip,
  ArchitectureFlow,
  ArchitectureGroup,
  ArchitectureNode,
} from "./primitives";

const SPECIALISTS = [
  "Builder",
  "Research",
  "Deploy",
  "QA",
  "Marketing",
  "Finance (gated)",
  "Support",
  "Other domains",
];

/**
 * Company orchestrator + specialist workforce — finance is one proving domain,
 * not the product ceiling. Do not reuse FinanceOSDiagram on this page.
 */
export function CatoGenesisDiagram() {
  return (
    <ArchitectureFlow ariaLabel="Cato and Genesis orchestration: company-level Cato creates and routes work to Genesis specialist agents across domains, then verification and human gates — finance is one gated proving domain, not the ceiling.">
      <ArchitectureNode
        kind="source"
        label="Company work / objectives"
        sublabel="Not a single finance inbox"
      />

      <ArchitectureArrow />

      <ArchitectureNode
        kind="orchestrator"
        label="Cato"
        sublabel="Create objectives · claim tasks · invoke capabilities · escalate"
      />

      <ArchitectureArrow />

      <ArchitectureGroup title="Genesis specialist workforce" kind="agent" columns="narrow">
        {SPECIALISTS.map((s) => (
          <ArchitectureChip key={s} label={s} kind="agent" />
        ))}
      </ArchitectureGroup>

      <ArchitectureArrow />

      <ArchitectureNode kind="verify" label="Verification" />

      <ArchitectureArrow />

      <ArchitectureNode kind="human" label="Human gates" />

      <ArchitectureArrow />

      <ArchitectureNode
        kind="output"
        label="Outcomes"
        sublabel="CompanyOS remains durable authority"
      />
    </ArchitectureFlow>
  );
}
