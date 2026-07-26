import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#EEF9F1",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 24,
              background: "#1FA84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "8px solid white",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "#17853D",
            }}
          >
            jamogo
          </div>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            fontWeight: 600,
            color: "#0E1A13",
          }}
        >
          {SITE.tagline}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 24,
            color: "#39433D",
          }}
        >
          Ride-pooling, built for Ghana
        </div>
      </div>
    ),
    { ...size }
  );
}
