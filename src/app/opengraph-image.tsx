import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — You don’t lose money on the inspection. You lose it after the report is filed.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STEPS = ["Deficiency", "Priced", "Approved", "Chased", "Signed"];

/**
 * Social preview card (LinkedIn, iMessage, Slack, X). Mirrors the hero: the same
 * headline and the same deficiency-to-quote pipeline. Deliberately carries no
 * statistic — there's no room on a card to label a benchmark as industry data.
 */
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
          padding: "64px 72px",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(184,255,60,0.12), transparent 70%), radial-gradient(ellipse 50% 50% at 95% 100%, rgba(184,255,60,0.06), transparent 70%)",
          color: "#ededef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 20, height: 20, background: "#b8ff3c", transform: "rotate(45deg)" }} />
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>{site.name}</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#a1a1aa",
              border: "1px solid #26262b",
              borderRadius: 999,
              padding: "10px 22px",
              background: "#121214",
            }}
          >
            Built for fire &amp; life safety contractors
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 58, lineHeight: 1.12, letterSpacing: -1.5 }}>
          <div style={{ display: "flex" }}>You don’t lose money on the inspection.</div>
          <div style={{ display: "flex", color: "#b8ff3c" }}>You lose it after the report is filed.</div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {STEPS.map((step, i) => (
            <div key={step} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: i === STEPS.length - 1 ? "#0a0a0b" : "#ededef",
                  background: i === STEPS.length - 1 ? "#b8ff3c" : "#1a1a1d",
                  border: `1px solid ${i === STEPS.length - 1 ? "#b8ff3c" : "#35353d"}`,
                  borderRadius: 12,
                  padding: "12px 22px",
                }}
              >
                {step}
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ display: "flex", width: 34, height: 2, background: "#35353d" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
