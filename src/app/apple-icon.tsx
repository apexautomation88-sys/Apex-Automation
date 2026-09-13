import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon: the same lime diamond as the nav wordmark and icon.svg.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
        }}
      >
        <div
          style={{
            width: 62,
            height: 62,
            background: "#b8ff3c",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    size,
  );
}
