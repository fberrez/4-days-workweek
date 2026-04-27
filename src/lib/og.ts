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

const INK = "#0E141B";
const PAPER = "#F8F4EC";
const ACCENT = "#FF604D";
const MUTED = "rgba(248, 244, 236, 0.55)";

type Stat = { n: string; l: string };

export async function generateOgImage(
  title: string,
  description: string,
  lang: string,
  variant: "home" | "article" = "article"
): Promise<Buffer> {
  const isHome = variant === "home";
  const langLabel = lang === "fr" ? "FR" : "EN";
  const eyebrow =
    lang === "fr"
      ? "ÉVIDENCE · 60+ ESSAIS MONDIAUX · 2018 → 2026"
      : "EVIDENCE · 60+ GLOBAL TRIALS · 2018 → 2026";
  const stats: Stat[] = isHome
    ? [
        { n: "92%", l: lang === "fr" ? "ENTREPRISES" : "COMPANIES" },
        { n: "−71%", l: "BURNOUT" },
        { n: "−65%", l: lang === "fr" ? "ARRÊTS MALADIE" : "SICK DAYS" },
        { n: "+22%", l: lang === "fr" ? "PRODUCTIVITÉ" : "PRODUCTIVITY" },
      ]
    : [
        { n: "+40%", l: lang === "fr" ? "MICROSOFT" : "MICROSOFT" },
        { n: "−71%", l: "BURNOUT" },
        { n: "92%", l: lang === "fr" ? "CONTINUENT" : "STAYED" },
      ];

  // Build stat tiles as a flat HTML string then parse the WHOLE markup at once
  // (satori-html's `html` tag escapes interpolated strings, so we must compose
  // the full template before tagging).
  const statTilesHtml = stats
    .map(
      (s) =>
        `<div style="display:flex;flex-direction:column;margin-right:48px;">` +
        `<div style="display:flex;font-size:44px;font-weight:700;color:${ACCENT};letter-spacing:-0.03em;line-height:1;">${s.n}</div>` +
        `<div style="display:flex;font-size:13px;color:${MUTED};letter-spacing:0.14em;font-weight:600;margin-top:8px;">${s.l}</div>` +
        `</div>`
    )
    .join("");

  const fullHtml =
    `<div style="display:flex;flex-direction:column;width:100%;height:100%;background:${INK};color:${PAPER};padding:64px;position:relative;">` +
      `<div style="display:flex;align-items:center;justify-content:space-between;">` +
        `<div style="display:flex;align-items:center;">` +
          `<div style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;background:${ACCENT};color:white;font-size:22px;font-weight:700;border-radius:6px;margin-right:14px;">4</div>` +
          `<div style="display:flex;font-size:26px;font-weight:700;color:${PAPER};letter-spacing:-0.02em;">` +
            `<span>fourday</span><span style="color:${ACCENT};">.</span><span>work</span>` +
          `</div>` +
        `</div>` +
        `<div style="display:flex;font-size:14px;color:${MUTED};letter-spacing:0.16em;padding:6px 14px;border:1px solid rgba(248,244,236,0.18);border-radius:999px;">${langLabel}</div>` +
      `</div>` +
      `<div style="display:flex;font-size:16px;color:${ACCENT};letter-spacing:0.16em;margin-top:56px;font-weight:600;">${eyebrow}</div>` +
      `<div style="display:flex;font-size:${isHome ? 80 : 64}px;font-weight:700;color:${PAPER};line-height:1.04;letter-spacing:-0.035em;margin-top:18px;max-width:1080px;">${title}</div>` +
      `<div style="display:flex;font-size:22px;color:${MUTED};line-height:1.45;max-width:980px;margin-top:22px;">${description}</div>` +
      `<div style="display:flex;flex:1;"></div>` +
      `<div style="display:flex;align-items:flex-end;padding-top:28px;border-top:1px solid rgba(248,244,236,0.18);">` +
        `<div style="display:flex;align-items:flex-end;">${statTilesHtml}</div>` +
        `<div style="display:flex;flex:1;"></div>` +
        `<div style="display:flex;font-size:13px;color:${MUTED};letter-spacing:0.14em;font-weight:600;">4-DAYS-WORKWEEK</div>` +
      `</div>` +
    `</div>`;

  const markup = html(fullHtml);

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
