# The 4-Day Workweek

Evidence-based research on the benefits of a 4-day workweek, compiled from 60+ global trials, peer-reviewed studies, and government pilot programs.

**Live site:** https://4-days-workweek-production.up.railway.app

## Research topics

| # | Topic | Description |
|---|-------|-------------|
| 01 | Productivity & Business | Microsoft Japan (+40%), revenue impacts, retention, case studies |
| 02 | Health & Wellbeing | Burnout (-71%), stress, sleep, gender equality, WHO data |
| 03 | Environment & Society | Carbon reduction (127M tonnes), energy, policy, historical context |
| 04 | Implementation Guide | Models (100-80-100), counterarguments, expert advice |

All research files are in [`/research`](./research) with full source attribution and URLs.

## Languages

- English (default): `/`
- French: `/fr/`

## Stack

- [Astro](https://astro.build) with content collections
- [Tailwind CSS](https://tailwindcss.com) v4 + typography plugin
- Deployed on [Railway](https://railway.com) with sleep mode

## Development

```sh
npm install
npm run dev       # localhost:4321
npm run build     # production build
npm run start     # run production server
```

## Project structure

```
research/
  en/                     # English markdown research files
  fr/                     # French markdown research files
src/
  components/
    Nav.astro             # Navigation with language switcher
    Footer.astro
  layouts/
    Layout.astro          # Shared layout with i18n support
  pages/
    index.astro           # EN home
    [slug].astro          # EN article pages
    fr/
      index.astro         # FR home
      fr/[slug].astro     # FR article pages
  i18n.ts                 # Translations and language utilities
  content.config.ts       # Astro content collection schema
```

## License

Research is compiled from public sources cited in each document. Code is MIT.
