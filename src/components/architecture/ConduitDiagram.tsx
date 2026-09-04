import {
  ArchitectureArrow,
  ArchitectureChip,
  ArchitectureFlow,
  ArchitectureGroup,
  ArchitectureNode,
} from "./primitives";

/**
 * Conduit lineage: headless audited browser + headed Halo policy/approval runtime.
 * ConduitScore (visibility SaaS) is a separate card — not shown here.
 */
export function ConduitDiagram() {
  return (
    <ArchitectureFlow ariaLabel="Conduit family: headless Conduit with cryptographic audit chain, and Conduit Halo headed Playwright runtime with policy engine and human approvals — not a score ring.">
      <ArchitectureNode kind="source" label="Agent intent" />
      <ArchitectureArrow />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ArchitectureGroup title="Conduit (headless)" kind="process">
          <ArchitectureChip label="Headless browser" kind="process" />
          <ArchitectureChip label="Action log" kind="process" />
          <ArchitectureChip label="SHA-256 hash chain" kind="verify" />
          <ArchitectureChip label="Ed25519 signed proofs" kind="verify" />
          <ArchitectureChip label="Exportable session proof" kind="output" />
        </ArchitectureGroup>

        <ArchitectureGroup title="Conduit Halo (headed)" kind="process">
          <ArchitectureChip label="Playwright headed Chromium" kind="process" />
          <ArchitectureChip label="Policy engine" kind="verify" />
          <ArchitectureChip label="Human approvals" kind="human" />
          <ArchitectureChip label="Redacted action / screenshot logs" kind="process" />
          <ArchitectureChip label="Observe → Act → Verify" kind="verify" />
        </ArchitectureGroup>
      </div>
    </ArchitectureFlow>
  );
}
