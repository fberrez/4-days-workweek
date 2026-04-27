export type Trial = {
  id: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  year: number;
  employees: number;
  productivity: number | null;
  sector: string;
  continued: boolean;
  model: string;
  burnout?: number | null;
  revenue?: number | null;
  sick?: number | null;
  retention?: number | null;
  turnover?: number | null;
  source: string;
  url?: string;
  statusReason?: string;
};

export type HeadlineStat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  source: string;
};

export type ComparisonRow = {
  hours: number;
  days: number;
  meetings: number;
  deepWork: number;
  sickDays: number;
  burnout: number;
  satisfaction: number;
  co2Index: number;
};

export type TimelineEntry = { year: number; label: string; url?: string; sourceLabel?: string };

export const trials: Trial[] = [
  { id: "msft-jp", name: "Microsoft Japan", country: "Japan", lat: 36.2, lon: 138.2, year: 2019, employees: 2300, productivity: 39.9, sector: "Tech", continued: false, model: "Aug pilot", burnout: null, revenue: null, sick: null, retention: null, turnover: null, source: "NPR", url: "https://www.npr.org/2019/11/04/776163853/microsoft-japan-says-4-day-workweek-boosted-workers-productivity-by-40", statusReason: "The August 2019 \"Work Life Choice Challenge\" was a single-month pilot — Microsoft Japan never extended it into a permanent company-wide 4-day week. Subsequent iterations of the program did not include the compressed schedule. The widely cited +40% productivity figure refers only to that one-month August window." },
  { id: "iceland", name: "Iceland Public Sector", country: "Iceland", lat: 64.9, lon: -19.0, year: 2019, employees: 2500, productivity: 12, sector: "Public", continued: true, model: "35–36h", sick: -15, source: "Autonomy Institute", url: "https://autonomy.work/portfolio/icelandsww/", statusReason: "After the 2015–2019 trials succeeded, Icelandic unions secured shorter-hours contracts for ~86% of the workforce. Five years on, nearly 90% of Icelandic workers are on a 36-hour week with no pay cut. The economy grew 5% in 2023 — second only to Malta in Europe." },
  { id: "uk-pilot", name: "UK Pilot (61 cos)", country: "United Kingdom", lat: 51.5, lon: -0.1, year: 2022, employees: 2900, productivity: 22, sector: "Mixed", continued: true, model: "100:80:100", revenue: 1.4, sick: -65, burnout: -71, turnover: -57, source: "4 Day Week Global", url: "https://www.4dayweek.com/uk-pilot-results", statusReason: "One year after the 2022 pilot, 89% (54 of 61 companies) were still operating a 4-day week and 51% had made it permanent. Improvements in burnout, sleep and life satisfaction held a year on (Autonomy 'Making It Stick', Feb 2024)." },
  { id: "us-ireland", name: "US/Ireland Pilot", country: "USA / Ireland", lat: 39.5, lon: -98.0, year: 2022, employees: 1000, productivity: 15, sector: "Mixed", continued: true, model: "100:80:100", revenue: 8.1, source: "4 Day Week Global", url: "https://www.4dayweek.com/us-ireland-results", statusReason: "All 12 Irish participants continued post-trial. Of 27 US companies that reported, 18 confirmed continuing and the remainder were still deliberating — none planned to discontinue. Workers rated the experience 9.1/10; revenue rose +38% during the trial." },
  { id: "spain", name: "Spain Gov. Trial", country: "Spain", lat: 40.4, lon: -3.7, year: 2021, employees: 3000, productivity: 20, sector: "Mixed", continued: true, model: "100:80:100", sick: -20, revenue: 20, source: "WEF", url: "https://www.weforum.org/stories/2023/10/surprising-benefits-four-day-week/", statusReason: "The 2021 government trial fed into national policy: in February 2025 the Council of Ministers approved a draft bill cutting the standard workweek from 40 to 37.5 hours for ~12 million workers, with no pay reduction. Awaiting parliamentary approval." },
  { id: "germany", name: "Germany Trial", country: "Germany", lat: 51.2, lon: 10.5, year: 2024, employees: 900, productivity: 18, sector: "Mixed", continued: true, model: "Various", source: "4 Day Week Global", url: "https://www.4dayweek.com/germany-2024-pilot-results", statusReason: "73% of the 45 participating companies kept the 4-day week after the 2024 pilot ended; 20% returned to 5 days and two stopped early citing economic difficulties. Wearables showed −89 stress minutes/wk, +1,848 steps and +38 min sleep vs 5-day peers." },
  { id: "portugal", name: "Portugal Pilot", country: "Portugal", lat: 39.5, lon: -8.0, year: 2023, employees: 1000, productivity: 14, sector: "Private", continued: true, model: "100:80:100", source: "Euronews", url: "https://www.euronews.com/next/2024/02/02/the-four-day-week-which-countries-have-embraced-it-and-how-s-it-going-so-far", statusReason: "95% of the 41 participating companies rated the 6-month pilot positively; only 4 returned to 5 days. Work exhaustion fell 19% and 93% of workers wanted to keep it. The Azores has since launched a public-sector 4-day pilot." },
  { id: "south-africa", name: "South Africa Pilot", country: "South Africa", lat: -30.6, lon: 22.9, year: 2023, employees: 1200, productivity: 49, sector: "Mixed", continued: true, model: "100:80:100", revenue: 10.5, burnout: -57, sick: -9, source: "4 Day Week Global", url: "https://www.4dayweek.com/sa-2023-pilot-results", statusReason: "92% of the 28 participating companies plan to continue or are considering it. Companies rated their experience 8.0/10. Government-backed broader rollout planned for mid-2025 across Gauteng, KwaZulu-Natal and the Western Cape." },
  { id: "perpetual", name: "Perpetual Guardian", country: "New Zealand", lat: -41.0, lon: 174.0, year: 2018, employees: 200, productivity: 20, sector: "Finance", continued: true, model: "Permanent", source: "Perpetual Guardian", url: "https://www.perpetualguardian.co.nz/the-four-day-week-is-here/", statusReason: "Made permanent after the 2018 pilot — productivity +20%, work-life balance up from 54% to 78%, stress −27%. Founder Andrew Barnes went on to co-found 4 Day Week Global and authored 'The 4 Day Week.'" },
  { id: "buffer", name: "Buffer", country: "USA", lat: 37.8, lon: -122.4, year: 2020, employees: 80, productivity: 25, sector: "Tech", continued: true, model: "Permanent", source: "Buffer", url: "https://buffer.com/resources/four-day-work-week-update/", statusReason: "Made permanent in 2020. Five years on, 100% of surveyed staff want to keep it; 91% report being happier and more productive. Buffer still lists the 4-day week as a core benefit in 2026 hiring." },
  { id: "kickstarter", name: "Kickstarter", country: "USA", lat: 40.7, lon: -73.9, year: 2021, employees: 90, productivity: 18, sector: "Tech", continued: true, model: "Permanent", source: "Yahoo Finance", url: "https://finance.yahoo.com/news/kickstarter-ceo-stands-4-day-160428523.html", statusReason: "Strengthened, not weakened: a 42-day union strike in October–November 2025 ended with the 32-hour, 4-day week being contractually codified. Any temporary shift to 5 days now requires written justification, advance notice and a time limit." },
  { id: "bolt", name: "Bolt", country: "USA", lat: 37.8, lon: -122.4, year: 2021, employees: 600, productivity: 22, sector: "Fintech", continued: false, model: "Reversed 2023", source: "Fast Company", url: "https://www.fastcompany.com/91370026/bolts-ceo-on-why-hes-axing-progressive-workplace-policies", statusReason: "Bolt quietly ended the 4-day week after founder Ryan Breslow returned as CEO and dismantled the progressive HR policies introduced during his absence — citing \"significant gaps in execution\" amid financial restructuring and layoffs at the fintech (once valued at $14B). The 2021 pilot results themselves were strongly positive (94% of workers and 91% of managers wanted it to continue)." },
  { id: "unilever", name: "Unilever NZ/AU", country: "New Zealand", lat: -36.9, lon: 174.8, year: 2020, employees: 80, productivity: 15, sector: "Consumer", continued: true, model: "Expanded", sick: -34, source: "Unilever", url: "https://www.unilever.com.au/news/press-releases/2022/unilever-australia-new-zealand-expands-fourday-work-week-trial-following-encouraging-results/", statusReason: "The 18-month NZ pilot (Dec 2020–Jun 2022) saw absenteeism drop 34% and stress drop 33%. Unilever expanded to Australia in November 2022 with 500 employees on a 12-month trial — the largest 4-day-week trial in the country at the time. No reversal reported." },
  { id: "atom", name: "Atom Bank", country: "United Kingdom", lat: 54.7, lon: -1.6, year: 2021, employees: 480, productivity: 25, sector: "Finance", continued: true, model: "34h/4d", turnover: -22, source: "Atom Bank", url: "https://www.atombank.co.uk/blog/four-day-week-10-months-on/", statusReason: "CEO Mark Mullen has publicly doubled down: in 2025 he called the 4-day week \"not progressive — bloody logical\" and confirmed no plans to reverse the 34h/4d schedule introduced in 2021. Attrition fell 22%, applications rose 49% in year one." },
  { id: "elephant", name: "Elephant Ventures", country: "USA", lat: 40.7, lon: -74.0, year: 2020, employees: 41, productivity: 25, sector: "Tech", continued: true, model: "4×10h", source: "Elephant Ventures", url: "https://www.elephantventures.com/4-day-work-week-pilot/", statusReason: "Made permanent after the 2-month August 2020 pilot showed +20% productivity. The compressed 4×10h schedule (Mon–Thu) continues at the company as of 2025; the Philippines-based half of the team saw a +20–30% productivity boost." },
  { id: "awin", name: "Awin", country: "Germany", lat: 52.5, lon: 13.4, year: 2021, employees: 1300, productivity: 13, sector: "Marketing", continued: true, model: "Flexi", sick: -21, turnover: -33, source: "Awin", url: "https://www.awin.com/us/news-and-events/awin-news/awin-flexible-work-week", statusReason: "After an 18-month trial, Awin made the flexible 4-day arrangement permanent in February 2023. Gross profit grew 13% annually 2019–2022, regrettable turnover fell 33%, and sick leave fell 21%. No plans to reverse." },
  { id: "exos", name: "Exos", country: "USA", lat: 33.4, lon: -111.9, year: 2023, employees: 3000, productivity: 35, sector: "Health", continued: true, model: "You Do You", burnout: -34, turnover: -38, source: "CNBC", url: "https://www.cnbc.com/2024/04/05/exos-4-day-workweek-how-it-went-one-year-later.html", statusReason: "The May 2023 6-month pilot was extended into permanent policy ('You Do You Fridays' — meeting-free, with workers choosing how to use the day). Sales pipeline grew 211% YoY; turnover fell from 47% to 29%. Still listed as a current benefit in 2026 hiring." },
  { id: "wildbit", name: "Wildbit", country: "USA", lat: 39.9, lon: -75.2, year: 2017, employees: 30, productivity: 10, sector: "Tech", continued: true, model: "Permanent", source: "Wildbit", url: "https://www.wildbit.com/4-day-workweek.html", statusReason: "On a 32-hour, 4-day schedule since 2017 — one of the earliest tech adopters. Customer-support median first-reply time stayed at ~4.7h (vs 4h pre-transition); CSAT rose to 96%. Postmark/DMARC Digests were sold to ActiveCampaign, but Wildbit retains the policy at its remaining ventures." },
];

export const headlineStats: HeadlineStat[] = [
  { value: 92, suffix: "%", label: "of UK pilot companies still on a 4-day week one year later", source: "UK Pilot, 2022" },
  { value: 71, suffix: "%", prefix: "−", label: "reduction in employee burnout", source: "UK Pilot, 2022" },
  { value: 65, suffix: "%", prefix: "−", label: "fewer sick days taken", source: "UK Pilot, 2022" },
  { value: 57, suffix: "%", prefix: "−", label: "lower staff turnover during the trial", source: "UK Pilot, 2022" },
  { value: 38, suffix: "%", prefix: "+", label: "average revenue growth versus prior year", source: "US/Ireland Pilot, 2022" },
  { value: 40, suffix: "%", prefix: "+", label: "productivity gain at Microsoft Japan", source: "NPR, 2019" },
  { value: 200, suffix: "%", prefix: "+", label: "increase in job applications at Bolt", source: "CNBC, 2022" },
  { value: 23, suffix: "%", prefix: "−", label: "reduction in electricity costs", source: "Microsoft Japan, 2019" },
];

export const comparison: { five: ComparisonRow; four: ComparisonRow } = {
  five: { hours: 40, days: 5, meetings: 18, deepWork: 12, sickDays: 8.4, burnout: 70, satisfaction: 54, co2Index: 100 },
  four: { hours: 32, days: 4, meetings: 7, deepWork: 19, sickDays: 2.9, burnout: 36, satisfaction: 78, co2Index: 73 },
};

export const timeline: TimelineEntry[] = [
  { year: 1926, label: "Henry Ford adopts the 5-day, 40-hour week at Ford Motor Co.", sourceLabel: "Teaching American History", url: "https://teachingamericanhistory.org/document/henry-fords-five-day-week/" },
  { year: 2018, label: "Perpetual Guardian (NZ) trials a 4-day week — productivity rises 20%", sourceLabel: "Perpetual Guardian", url: "https://www.perpetualguardian.co.nz/the-four-day-week-is-here/" },
  { year: 2019, label: "Microsoft Japan reports 40% productivity gain in August trial", sourceLabel: "NPR", url: "https://www.npr.org/2019/11/04/776163853/microsoft-japan-says-4-day-workweek-boosted-workers-productivity-by-40" },
  { year: 2021, label: 'Iceland publishes results of public-sector trial — declared an "overwhelming success"', sourceLabel: "Autonomy Institute", url: "https://autonomy.work/portfolio/icelandsww/" },
  { year: 2022, label: "World's largest pilot launches in the UK with 61 companies", sourceLabel: "4 Day Week Global", url: "https://www.4dayweek.com/uk-pilot-results" },
  { year: 2023, label: "South Africa, Portugal, Spain expand trials; 4DWG runs cohorts in 6 countries", sourceLabel: "4 Day Week Global", url: "https://www.4dayweek.com/research" },
  { year: 2024, label: "Germany trial: 73% of companies keep the 4-day week after the pilot ends", sourceLabel: "4 Day Week Global", url: "https://www.4dayweek.com/germany-2024-pilot-results" },
  { year: 2026, label: "Belgium, Iceland, Spain pursue legislative paths; over 60 trials globally", sourceLabel: "American Bar Association", url: "https://www.americanbar.org/groups/labor_law/publications/ilelc_newsletters/issue-winter-2023/belgium-approves-four-day-work-week/" },
];

export const sectors = (): string[] => Array.from(new Set(trials.map((t) => t.sector)));
