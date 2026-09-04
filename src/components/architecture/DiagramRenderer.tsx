import type { DiagramKey } from "@/content/projects";
import { CatoGenesisDiagram } from "./CatoGenesisDiagram";
import { ConduitDiagram } from "./ConduitDiagram";
import { FinanceOSDiagram } from "./FinanceOSDiagram";
import { InvoiceProofDiagram } from "./InvoiceProofDiagram";
import { SalesCoachDiagram } from "./SalesCoachDiagram";
import { SwarmSyncDiagram } from "./SwarmSyncDiagram";

const DIAGRAMS: Record<DiagramKey, React.ComponentType> = {
  financeos: FinanceOSDiagram,
  catogenesis: CatoGenesisDiagram,
  swarmsync: SwarmSyncDiagram,
  invoiceproof: InvoiceProofDiagram,
  salescoach: SalesCoachDiagram,
  conduit: ConduitDiagram,
};

export function DiagramRenderer({ diagram }: { diagram: DiagramKey }) {
  const Diagram = DIAGRAMS[diagram];
  return <Diagram />;
}
