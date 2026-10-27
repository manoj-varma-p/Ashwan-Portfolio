import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E1E22",
          borderRadius: 16,
          border: "2px solid rgba(200, 255, 0, 0.4)",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: "-1.5px",
            color: "#C8FF00",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
            marginTop: -3,
          }}
        >
          AJ
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 6,
            width: 26,
            height: 3,
            backgroundColor: "#C8FF00",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
