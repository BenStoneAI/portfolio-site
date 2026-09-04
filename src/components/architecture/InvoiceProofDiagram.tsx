import {
  ArchitectureArrow,
  ArchitectureBranch,
  ArchitectureBranches,
  ArchitectureNode,
  ArchitectureFlow,
} from "./primitives";

export function InvoiceProofDiagram() {
  return (
    <ArchitectureFlow ariaLabel="InvoiceProof architecture: a document or email is ingested, classified, extracted, validated, and mapped to evidence, then either passed to the accounting workflow or routed as an exception to human review.">
      <ArchitectureNode kind="source" label="Document / email" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Ingest" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Classify" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Extract" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Validate" />
      <ArchitectureArrow />
      <ArchitectureNode kind="verify" label="Evidence map" sublabel="What supports each extracted value" />
      <ArchitectureArrow />

      <ArchitectureBranches>
        <ArchitectureBranch label="Pass">
          <ArchitectureNode kind="output" label="Accounting workflow" />
        </ArchitectureBranch>
        <ArchitectureBranch label="Exception" tone="exception">
          <ArchitectureNode kind="exception" label="Human review" />
        </ArchitectureBranch>
      </ArchitectureBranches>
    </ArchitectureFlow>
  );
}
