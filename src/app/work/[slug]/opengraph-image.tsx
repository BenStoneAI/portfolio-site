import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#171310";
const PAPER = "#f6f3ee";
const ACCENT = "#c2660f";
const MUTED = "#8c8478";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: 80,
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: INK, fontWeight: 700 }}>BEN STONE</div>
          <div style={{ fontSize: 15, letterSpacing: 2, color: ACCENT, textTransform: "uppercase" }}>
            {project?.category ?? "Case Study"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 64, lineHeight: 1.08, color: INK, fontWeight: 700, letterSpacing: -1.5 }}>
            {project?.title ?? "Case Study"}
          </div>
          <div style={{ marginTop: 18, fontSize: 26, color: MUTED }}>{project?.subtitle ?? ""}</div>
          <div style={{ marginTop: 28, fontSize: 22, lineHeight: 1.4, color: INK, maxWidth: 900 }}>
            {project?.oneLiner ?? ""}
          </div>
        </div>

        <div
          style={{
            fontSize: 13,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: MUTED,
            border: `1px solid ${MUTED}`,
            borderRadius: 4,
            padding: "8px 14px",
            display: "flex",
            alignSelf: "flex-start",
          }}
        >
          {project?.status ?? ""}
        </div>
      </div>
    ),
    { ...size },
  );
}
