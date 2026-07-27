import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/logo.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

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
        <img src={logoSrc} alt={SITE.name} height={140} />
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
