import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { generateOgImage } from "../../lib/og";
import { slugFromId } from "../../i18n";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getCollection("research");

  const paths = [
    // Home pages
    {
      params: { path: "en/home" },
      props: {
        title: "The 4-Day Workweek",
        description:
          "Evidence-based research on the benefits of reducing work to four days a week.",
        lang: "en",
      },
    },
    {
      params: { path: "fr/home" },
      props: {
        title: "La semaine de 4 jours",
        description:
          "Recherches factuelles sur les avantages de la semaine de travail de quatre jours.",
        lang: "fr",
      },
    },
    // Article pages
    ...articles.map((article) => ({
      params: {
        path: `${article.data.lang}/${slugFromId(article.id)}`,
      },
      props: {
        title: article.data.title,
        description: article.data.description,
        lang: article.data.lang,
      },
    })),
  ];

  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, lang } = props as {
    title: string;
    description: string;
    lang: string;
  };

  const png = await generateOgImage(title, description, lang);

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
