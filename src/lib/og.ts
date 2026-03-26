import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { html } from "satori-html";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const interRegular = readFileSync(
  join(process.cwd(), "src/assets/fonts/Inter-Regular.ttf")
);
const interBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Inter-Bold.ttf")
);

export async function generateOgImage(
  title: string,
  description: string,
  lang: string
): Promise<Buffer> {
  const langLabel = lang === "fr" ? "FR" : "EN";

  const markup = html`
    <div
      style="display: flex; flex-direction: column; width: 100%; height: 100%; background: #ffffff; padding: 60px;"
    >
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px;"
      >
        <div
          style="font-size: 24px; font-weight: 700; color: #9a462a;"
        >
          4-Day Workweek
        </div>
        <div
          style="font-size: 14px; color: #9ca3af; border: 1px solid #e5e7eb; padding: 4px 12px; border-radius: 4px;"
        >
          ${langLabel}
        </div>
      </div>
      <div style="display: flex; flex-direction: column; flex: 1; justify-content: center;">
        <div
          style="font-size: 52px; font-weight: 700; color: #111827; line-height: 1.15; margin-bottom: 20px;"
        >
          ${title}
        </div>
        <div
          style="font-size: 22px; color: #6b7280; line-height: 1.5; max-width: 900px;"
        >
          ${description}
        </div>
      </div>
      <div
        style="display: flex; align-items: center; gap: 16px; margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 24px;"
      >
        <div style="display: flex; gap: 24px;">
          <div style="display: flex; align-items: baseline; gap: 6px;">
            <span style="font-size: 28px; font-weight: 700; color: #9a462a;">+40%</span>
            <span style="font-size: 13px; color: #9ca3af;">productivity</span>
          </div>
          <div style="display: flex; align-items: baseline; gap: 6px;">
            <span style="font-size: 28px; font-weight: 700; color: #9a462a;">-71%</span>
            <span style="font-size: 13px; color: #9ca3af;">burnout</span>
          </div>
          <div style="display: flex; align-items: baseline; gap: 6px;">
            <span style="font-size: 28px; font-weight: 700; color: #9a462a;">92%</span>
            <span style="font-size: 13px; color: #9ca3af;">continued</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      { name: "Inter", data: interBold, weight: 700, style: "normal" },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });

  return Buffer.from(resvg.render().asPng());
}
