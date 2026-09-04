import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171310",
          borderRadius: 7,
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            color: "#c2660f",
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1,
            transform: "translateY(-1px)",
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size },
  );
}
