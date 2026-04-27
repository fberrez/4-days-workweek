import type { APIRoute, GetStaticPaths } from "astro";
import { generateOgImage } from "../../lib/og";

export const getStaticPaths: GetStaticPaths = async () => {
  return [
    {
      params: { path: "en/home" },
      props: {
        title: "Drop a day. Keep the work.",
        description:
          "Evidence from 60+ global trials of the 4-day workweek. Compare 5 vs 4. See the atlas. Calculate what your company would save.",
        lang: "en",
        variant: "home" as const,
      },
    },
  ];
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, lang, variant } = props as {
    title: string;
    description: string;
    lang: string;
    variant: "home" | "article";
  };

  const png = await generateOgImage(title, description, lang, variant);

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
