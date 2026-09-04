import { ImageResponse } from "next/og";
import { heroCopy } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#171310";
const PAPER = "#f6f3ee";
const ACCENT = "#c2660f";
const MUTED = "#8c8478";

export default function OpengraphImage() {
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
          <div style={{ fontSize: 16, letterSpacing: 2, color: ACCENT, textTransform: "uppercase" }}>
            AI Automation &amp; Agentic Systems
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              color: INK,
              fontWeight: 700,
              letterSpacing: -1.5,
            }}
          >
            {heroCopy.heading}
          </div>
          <div style={{ marginTop: 28, fontSize: 24, lineHeight: 1.4, color: MUTED, maxWidth: 880 }}>
            Business process → workflow design → agents → verification → human control → production.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["Business Process", "Agents", "Verification", "Human Control", "Production"].map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {i > 0 ? <div style={{ width: 28, height: 1, background: MUTED }} /> : null}
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: INK,
                  border: `1px solid ${MUTED}`,
                  borderRadius: 4,
                  padding: "6px 12px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
