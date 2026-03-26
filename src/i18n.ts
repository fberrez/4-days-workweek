export type Lang = "en" | "fr";

export const ui = {
  en: {
    "site.title": "The 4-Day Workweek",
    "site.subtitle":
      "A collection of evidence-based research on the benefits of reducing work to four days a week. Covering productivity, health, environment, and implementation.",
    "nav.research": "Research",
    "stat.productivity": "Productivity (Microsoft Japan)",
    "stat.burnout": "Burnout (UK Pilot)",
    "stat.companies": "Companies continued post-trial",
    "about.title": "About this project",
    "about.text":
      "This site compiles peer-reviewed research, government trial data, and company case studies from 60+ global pilots of the 4-day workweek. All claims include source attribution. The full source and research files are available on",
    "footer.text": "Research compiled March 2026. Open source on",
    "back": "Back to index",
  },
  fr: {
    "site.title": "La semaine de 4 jours",
    "site.subtitle":
      "Un recueil de recherches factuelles sur les avantages de la semaine de travail de quatre jours. Productivit\u00e9, sant\u00e9, environnement et mise en \u0153uvre.",
    "nav.research": "Recherche",
    "stat.productivity": "Productivit\u00e9 (Microsoft Japan)",
    "stat.burnout": "Burnout (pilote UK)",
    "stat.companies": "Entreprises qui ont continu\u00e9 apr\u00e8s l\u2019essai",
    "about.title": "\u00c0 propos de ce projet",
    "about.text":
      "Ce site compile des recherches \u00e9valu\u00e9es par des pairs, des donn\u00e9es d\u2019essais gouvernementaux et des \u00e9tudes de cas d\u2019entreprises issues de plus de 60 programmes pilotes mondiaux de la semaine de 4 jours. Toutes les affirmations sont sourc\u00e9es. Le code source et les fichiers de recherche sont disponibles sur",
    "footer.text": "Recherche compil\u00e9e en mars 2026. Open source sur",
    "back": "Retour \u00e0 l\u2019index",
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)["en"]): string {
  return ui[lang][key] ?? ui.en[key];
}

export function langPrefix(lang: Lang): string {
  return lang === "en" ? "" : `/${lang}`;
}

/** Get the slug part from a content collection ID like "en/productivity-and-business" */
export function slugFromId(id: string): string {
  return id.replace(/^(en|fr)\//, "");
}
