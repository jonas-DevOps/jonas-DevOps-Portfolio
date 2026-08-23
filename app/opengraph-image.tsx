import { ImageResponse } from "next/og";

export const alt = "Jonatas Barbosa dos Santos — Full Stack, DevOps e Engenharia da Computação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "#070b14",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#5eead4", fontSize: 28, fontWeight: 700 }}>
          jonas-DevOps • PORTFÓLIO
        </div>
        <div style={{ display: "flex", marginTop: 30, maxWidth: 1000, fontSize: 70, lineHeight: 1.05, fontWeight: 900 }}>
          Jonatas Barbosa dos Santos
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#a7b3c7" }}>
          Full Stack • DevOps • Engenharia da Computação
        </div>
        <div style={{ display: "flex", marginTop: 55, alignItems: "center", gap: 16 }}>
          <div style={{ width: 54, height: 6, borderRadius: 999, background: "#5eead4" }} />
          <div style={{ fontSize: 24, color: "#cbd5e1" }}>Software com base forte.</div>
        </div>
      </div>
    ),
    size,
  );
}
