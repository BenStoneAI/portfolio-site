import {
  ArchitectureArrow,
  ArchitectureFlow,
  ArchitectureNode,
} from "./primitives";

export function ConduitDiagram() {
  return (
    <ArchitectureFlow ariaLabel="Conduit auditable browser: agent intent drives a headless browser, actions are logged into a hash chain, and signed proofs can be exported.">
      <ArchitectureNode kind="source" label="Agent intent" />
      <ArchitectureArrow />
      <ArchitectureNode kind="agent" label="Headless browser" />
      <ArchitectureArrow />
      <ArchitectureNode kind="process" label="Action log" />
      <ArchitectureArrow />
      <ArchitectureNode kind="verify" label="SHA-256 hash chain" sublabel="Ed25519 signed proofs" />
      <ArchitectureArrow />
      <ArchitectureNode kind="output" label="Exportable session proof" />
    </ArchitectureFlow>
  );
}
