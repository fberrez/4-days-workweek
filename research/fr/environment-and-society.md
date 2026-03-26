---
title: "Environnement et Société"
description: "Réduction carbone, économies d'énergie, politiques gouvernementales et 200 ans d'évolution du temps de travail."
order: 3
lang: "fr"
---

# Bénéfices environnementaux et sociétaux de la semaine de 4 jours

> Recherches compilées en mars 2026. Sources, années et données spécifiques indiquées tout au long du document.

---

## Table des matières

1. [Réduction des émissions de carbone](#1-réduction-des-émissions-de-carbone)
2. [Économies d'énergie](#2-économies-dénergie)
3. [Trafic et congestion](#3-trafic-et-congestion)
4. [Économies locales](#4-économies-locales)
5. [Bénéfices sociaux](#5-bénéfices-sociaux)
6. [Réduction de la consommation](#6-réduction-de-la-consommation)
7. [Expérimentations gouvernementales et politiques publiques](#7-expérimentations-gouvernementales-et-politiques-publiques)
8. [Contexte historique](#8-contexte-historique)

---

## 1. Réduction des émissions de carbone

### Platform London / 4 Day Week Campaign UK : rapport « Stop the Clock » (2021)

Le rapport de référence **« Stop the Clock: The Environmental Benefits of a Shorter Working Week »**, publié par Platform London en collaboration avec la 4 Day Week Campaign, a révélé que :

- Le passage du Royaume-Uni à une semaine de 4 jours pourrait **réduire l'empreinte carbone nationale de 127 millions de tonnes par an**, soit une diminution de **21,3 %**.
- Cela équivaut à **retirer 27 millions de voitures de la circulation**, soit la quasi-totalité du parc automobile privé britannique.
- Cette réduction provient d'une moindre consommation d'énergie, de la diminution des trajets domicile-travail à forte intensité carbone et de la possibilité pour les individus de s'adonner à des activités « bas carbone » telles que le repos, l'exercice physique et l'engagement communautaire.

*Source : [Platform London / 4 Day Week Campaign, "Stop the Clock", 2021](https://www.4dayweek.co.uk/projects/stop-the-clock:-the-environmental-benefits-of-a-shorter-working-week)*

<div style="margin: 2em 0; max-width: 400px;">
<canvas id="chart-co2-reduction"></canvas>
</div>
<script>
new Chart(document.getElementById('chart-co2-reduction'), {
  type: 'doughnut',
  data: {
    labels: ['Économie possible (21,3 %)', 'Empreinte restante'],
    datasets: [{
      data: [21.3, 78.7],
      backgroundColor: ['#9a462a', '#e5e7eb'],
      borderWidth: 0,
      cutout: '70%',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Potentiel de réduction carbone au Royaume-Uni', font: { size: 16, weight: 'bold' }, color: '#31332e', padding: { bottom: 4 } },
      subtitle: { display: true, text: 'Équivalent au retrait de 27 millions de voitures (Platform London)', color: '#6b7280', font: { size: 12 }, padding: { bottom: 12 } },
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + ctx.raw + '%' } }
    }
  },
  plugins: [{
    id: 'centerText',
    afterDraw(chart) {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.font = 'bold 28px sans-serif';
      ctx.fillStyle = '#9a462a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('127M t', width / 2, height / 2 - 10);
      ctx.font = '13px sans-serif';
      ctx.fillStyle = '#6b7280';
      ctx.fillText('CO₂ / an', width / 2, height / 2 + 16);
      ctx.restore();
    }
  }]
});
</script>

### Autonomy Institute : rapport « Sparking Change » (2020)

Le groupe de réflexion britannique Autonomy a publié une étude montrant que :

- Un week-end de 3 jours **réduirait les émissions de carbone du Royaume-Uni de 117 000 tonnes de CO2 par semaine**, soit l'équivalent du retrait de plus de 1,3 million de voitures des routes chaque année.
- Le simple fait de faire du vendredi un jour de repos **réduirait les émissions de carbone liées à la production d'électricité britannique de 24 %**, et celles de l'ensemble du secteur énergétique de **5 %**.
- Une semaine de travail plus courte « contribuerait substantiellement à atteindre l'objectif de réduction de l'empreinte carbone globale du Royaume-Uni de 7,6 % par an au cours de la prochaine décennie ».

*Source : [Autonomy Institute, "Sparking Change: Electricity Consumption, Carbon Emissions and Working Time", mars 2020](https://autonomy.work/portfolio/sparkingchange/)*

### Juliet Schor et al. -- Temps de travail et empreinte écologique (2012)

L'économiste Juliet Schor (Boston College) et ses collègues Kyle Knight et Gene Rosa ont analysé les données de **29 pays de l'OCDE couvrant la période 1970-2007** et ont constaté que :

- Une **réduction de 10 % du temps de travail** est associée à :
  - Une **diminution de 8,6 %** de l'empreinte carbone
  - Une **baisse de 14,6 %** de l'empreinte carbone (mesure basée sur la consommation)
  - Une **chute de 12,1 %** de l'empreinte écologique
  - Une **réduction de 4,2 %** des émissions de CO2 (territorial)
- Les pays ayant un temps de travail plus court ont systématiquement des émissions de carbone plus faibles ; cette tendance se vérifie également entre les États américains.
- Les mécanismes sont doubles : l'**« effet d'échelle »** (une croissance économique moins maximale) et l'**« effet de composition »** (les ménages disposant de plus de temps consomment de manière moins intensive en carbone).

*Source : [Schor, Knight & Rosa, "Could Working Less Reduce Pressures on the Environment?", Global Environmental Change, 2012](https://www.sciencedirect.com/science/article/abs/pii/S0959378013000472)*

### Pilote britannique de la semaine de 4 jours : données carbone réelles (2022)

Lors du pilote historique de 6 mois au Royaume-Uni (61 entreprises, ~2 900 travailleurs) :

- Le cabinet de conseil en environnement **Tyler Grange** a signalé une **réduction de 21 % des kilomètres parcourus en voiture** grâce à la suppression de réunions et de déplacements inutiles.
- Le **kilométrage annuel professionnel de Tyler Grange a diminué de 38 600 km (24 000 miles)**, entraînant une réduction significative des émissions de CO2.
- Un directeur général d'une entreprise participante a rapporté une **baisse d'environ 30 % des émissions de CO2**, principalement grâce à la réduction des transports.
- Le temps de trajet domicile-travail dans les entreprises suivies a diminué de **10 %** (passant de 3,5 à 3,15 heures par semaine).

*Sources : [4 Day Week Global UK Pilot Results, 2023](https://www.4dayweek.com/uk-pilot-results) ; [Tyler Grange case study via NPR, 2023](https://www.npr.org/2023/02/21/1158580471/why-one-u-k-company-is-continuing-with-four-day-work-weeks-after-six-month-trial)*

### Valence, Espagne : amélioration de la qualité de l'air (2023)

Lorsque Valence a expérimenté la semaine de 4 jours sur 4 lundis consécutifs en avril 2023 (concernant ~360 000 travailleurs) :

- **La concentration de NO2 (dioxyde d'azote) a chuté de 58 %**.
- Le trafic urbain a diminué de **9,5 %**.

*Source : [Euronews, "Workers in Valencia's 4-day week trial report less stress and more socialising", octobre 2023](https://www.euronews.com/next/2023/10/31/workers-in-valencias-4-day-week-trial-report-less-stress-and-more-socialising)*

---

## 2. Économies d'énergie

### Consommation énergétique des bureaux

- **Microsoft Japan (2019) :** Lors de leur essai de semaine de 4 jours en août, les coûts d'électricité ont chuté de **23 %** et le nombre de pages imprimées a diminué de **près de 60 %**.
  *Source : [NPR, novembre 2019](https://www.npr.org/2019/11/04/776163853/microsoft-japan-says-4-day-workweek-boosted-workers-productivity-by-40)*

- **Momentum Mental Health :** A mesuré une **réduction de 27 % de la consommation d'énergie** lors de son essai de semaine de 4 jours, même si les bureaux restaient ouverts 5 jours par semaine avec des jours de repos décalés.
  *Source : [4dayweek.io statistics](https://4dayweek.io/pro/environment)*

- **Tyler Grange (Royaume-Uni, 2022) :** A constaté que le fait de laisser les ordinateurs éteints un jour supplémentaire réduisait la consommation d'électricité et la sollicitation des centres de données, générant des économies de carbone mesurables.
  *Source : [Tyler Grange / 4 Day Week Global UK Pilot, 2023](https://www.yourweather.co.uk/news/science/4-day-workweek-pilot-results-environment-sustainability-carbon-emissions.html)*

### Énergie à domicile vs au bureau : les compromis

L'Agence internationale de l'énergie (AIE) a calculé que :

- **Un jour supplémentaire de télétravail par semaine** pour les postes compatibles pourrait éviter environ **170 000 barils de pétrole par jour** à court terme.
- Bien que le télétravail déplace une partie de la consommation d'énergie vers les logements, l'effet net reste positif car les économies d'énergie liées à la suppression du trajet domicile-travail surpassent l'augmentation de la consommation domestique.

*Source : [IEA, "Working from home can save energy and reduce emissions. But how much?", 2022](https://www.iea.org/commentaries/working-from-home-can-save-energy-and-reduce-emissions-but-how-much)*

### Économies à l'échelle des bâtiments

- Fermer un bureau un jour supplémentaire par semaine réduit la demande en chauffage, climatisation, éclairage et alimentation des appareils électroniques.
- La consommation de données diminue grâce à moins d'e-mails envoyés et une moindre sollicitation des centres de données énergivores.
- L'usure des équipements diminue, prolongeant les cycles de remplacement des ordinateurs, imprimantes et machines de bureau.

---

## 3. Trafic et congestion

### Statistiques de réduction des trajets domicile-travail

- **Henley Business School (Royaume-Uni, 2019) :** A estimé qu'une semaine de 4 jours généralisée réduirait les trajets en voiture au Royaume-Uni de **557,8 millions de miles par semaine**, soit plus d'un demi-milliard de miles hebdomadaires.
  *Source : [Henley Business School, "The Four-Day Week" white paper, 2019](https://www.henley.ac.uk/the-four-day-week)*

- **Estimation UC Davis :** Si la moitié des 135 millions de navetteurs américains travaillaient depuis chez eux au lieu de se déplacer, cela équivaudrait à **retirer 10 millions de voitures des routes**.
  *Source : [4 Day Week Global, environmental benefits](https://www.4dayweek.com/news-posts/environmental-benefits-2hxgl)*

- **Contexte des transports aux États-Unis :** Les transports représentent **29 % des émissions de gaz à effet de serre** aux États-Unis ; réduire les jours de trajets domicile-travail a un impact direct sur ce chiffre.
  *Source : [4 Day Week Global, environmental benefits](https://www.4dayweek.com/news-posts/environmental-benefits-2hxgl)*

### Auckland, Nouvelle-Zélande : coûts de la congestion

- Auckland fait face à un problème de congestion dont le coût est estimé à **2,6 milliards de dollars néo-zélandais par an** d'ici 2026 (en tenant compte du temps perdu, de la baisse des investissements des entreprises et des dépenses des consommateurs).
- Le mouvement pour la semaine de 4 jours en Nouvelle-Zélande promeut explicitement ce modèle comme une solution à la congestion : un jour de trajet en moins signifie considérablement moins de véhicules sur les routes aux heures de pointe.
- **Perpetual Guardian** (Nouvelle-Zélande) a adopté une semaine de 4 jours permanente en 2018 après un essai montrant une augmentation de 20 % de la productivité, les employés passant moins de temps dans les transports.

*Sources : [NZ Herald, 2022](https://www.nzherald.co.nz/business/economy/employment/4-day-week-pandemic-petrol-and-congestion-charges-push-more-companies-to-join/EDOZT467Z4GRTFIR4PAVVACAO4/) ; [World Economic Forum, 2018](https://www.weforum.org/stories/2018/07/four-day-work-week-productivity-new-zealand-trial/)*

### Données sur la congestion aux États-Unis

- Les navetteurs américains ont perdu l'équivalent de **près de 8 journées de travail complètes** (63 heures par conducteur) à cause des embouteillages en 2024.
- Les coûts annuels de la congestion aux États-Unis dépassent **269 milliards de dollars par an**.
- Le lundi est systématiquement le jour de la semaine le moins congestionné, en partie parce que les travailleurs hybrides ou en télétravail choisissent de rester chez eux.

*Sources : [INRIX Global Traffic Scorecard, 2024](https://inrix.com/press-releases/2023-global-traffic-scorecard-us/) ; [HR Dive, 2025](https://www.hrdive.com/news/commuters-lost-work-days-record-high-traffic/804167/)*

### Le précédent du COVID-19

Lors des confinements liés à la pandémie, la réduction des déplacements a produit des améliorations environnementales visibles :

- Les canaux de Venise sont devenus visiblement plus clairs pour la première fois depuis des décennies.
- Le smog a « pratiquement disparu » à Londres, Los Angeles et Hong Kong.
- Cela a démontré l'immense potentiel environnemental de la réduction du trafic quotidien des navetteurs, même partielle.

---

## 4. Économies locales

### Dépenses de consommation et loisirs

- Les pays testant la semaine de 4 jours observent en moyenne **8 % de croissance économique**, ce qui indique qu'une adoption plus large peut stimuler les dépenses de consommation et le dynamisme du marché.
  *Source : [Humans First, "12 Ways a 4-Day Work Week Would Help the Economy"](https://www.humansfirst.us/blog/12-ways-a-4-day-work-week-would-help-the-economy)*

- Le temps libre supplémentaire encourage les dépenses dans :
  - Les escapades de week-end dans les villes voisines, soutenant les hôtels, chambres d'hôtes et restaurants locaux
  - Les marchés fermiers, boutiques spécialisées et commerces de proximité
  - Les installations sportives, les divertissements et les activités culturelles
  - Le tourisme intérieur (essor du tourisme domestique)

### Essai de Valence, Espagne (2023)

- Le secteur de l'hôtellerie-restauration a directement profité du temps libre supplémentaire utilisé par les habitants pour sortir manger et socialiser.
- Les travailleurs ont consacré leur jour de repos supplémentaire aux activités sportives, à la détente et à la préparation des repas -- des activités qui stimulent les économies alimentaires locales.

*Source : [TheMayor.EU, "Valencia's 4-day week trial was good for the people and the city", 2023](https://www.themayor.eu/en/a/view/valencia-s-government-says-4-day-week-trial-was-good-for-the-people-and-the-city-12172)*

### Japon : essor de l'industrie touristique

- La démarche du Japon en faveur de la semaine de 4 jours est explicitement liée à l'essor du tourisme intérieur, les travailleurs disposant de week-ends prolongés voyageant davantage dans le pays.
- Le secteur du voyage et du tourisme devrait bénéficier significativement du fait que les employés utilisent leurs week-ends prolongés pour de courts séjours.

*Source : [Travel and Tour World, "Why the New Four-Day Workweek in Japan Boost Tourism Industry"](https://www.travelandtourworld.com/news/article/why-the-new-four-day-workweek-in-japan-boost-tourism-industry/)*

### Économies pour les entreprises britanniques

- **Henley Business School (2019) :** La semaine de 4 jours pourrait faire économiser aux entreprises britanniques environ **104 milliards de livres sterling par an**, tout en améliorant la productivité et les performances environnementales.
- **78 % des employés** se sont déclarés plus heureux, **70 %** moins stressés, et **62 %** ont pris moins de jours de maladie.

*Source : [Henley Business School, "The Four-Day Week" white paper, 2019](https://www.henley.ac.uk/the-four-day-week)*

---

## 5. Bénéfices sociaux

### Engagement communautaire et bénévolat

- **Le travail est le principal frein au bénévolat :** 48 % des personnes citent le travail comme raison pour laquelle elles ne font pas de bénévolat.
- Une semaine de travail plus courte libère du temps et de l'énergie pour que les individus s'engagent dans leurs communautés, participent à la gouvernance locale et soutiennent la vie civique.
- Le bénévolat conduit à un engagement civique plus important : les bénévoles deviennent plus conscients des enjeux communautaires et plus enclins à participer aux processus décisionnels.

*Source : [The RSA, "Four-day week: the social benefits", septembre 2022](https://www.thersa.org/blog/2022/09/four-day-week-the-social-benefits)*

### Aide aux proches et égalité des sexes

- Un jour de repos supplémentaire offre aux parents et aidants davantage de temps pour la garde des enfants, l'aide aux personnes âgées et les responsabilités ménagères, sans perte de revenus.
- Tokyo a explicitement introduit sa politique de semaine de 4 jours pour « donner plus de pouvoir aux femmes » et répondre à la crise de la natalité au Japon, reconnaissant que l'équilibre entre vie professionnelle et vie personnelle est essentiel pour l'égalité des sexes.
- Le pilote allemand (2024) a constaté des améliorations de la satisfaction de vie « principalement grâce au temps libre supplémentaire » consacré aux activités personnelles et familiales.

*Sources : [Japan Times, décembre 2024](https://www.japantimes.co.jp/news/2024/12/04/japan/society/tokyo-four-day-work-week/) ; [University of Munster / 4 Day Week Global, Germany Pilot Results, 2024](https://www.4dayweek.com/germany-2024-pilot-results)*

### Santé et bien-être

Résultats issus de divers essais :

- **Pilote britannique (2022) :** Réduction de 65 % des jours de maladie ; diminution de l'anxiété, de la fatigue et des troubles du sommeil ; amélioration de l'équilibre vie professionnelle-vie personnelle.
- **Essais islandais (2015-2019) :** Le bien-être des travailleurs s'est amélioré sur les indicateurs de stress, d'épuisement professionnel, de santé et d'équilibre vie professionnelle-vie personnelle.
- **Sharjah, Émirats arabes unis (2022) :** Hausse de 90 % de la satisfaction au travail ; amélioration du moral des employés et de l'équilibre vie professionnelle-vie personnelle.
- **Pilote allemand (2024) :** Améliorations significatives de la satisfaction de vie, de la qualité du sommeil et de l'activité physique.
- Des recherches montrent que les personnes qui font du bénévolat (rendu possible par davantage de temps libre) ont des **taux de mortalité plus faibles** et une réduction des symptômes de douleur chronique et de maladies cardiaques.

### Cohésion sociale

- Davantage de temps libre permet aux individus de renforcer leurs liens communautaires, de nouer de nouvelles amitiés et de réduire les clivages sociétaux.
- La participation à des activités civiques favorise la cohésion sociale en réunissant des personnes d'horizons divers autour d'objectifs communs.
- Les travailleurs du pilote britannique ont adopté des approches de loisirs « plus lentes et plus réfléchies », avec environ 25 % réduisant leurs dépenses de sorties nocturnes au profit d'activités sociales plus significatives.

*Source : [Oxford Smith School of Enterprise and the Environment, 2023](https://www.smithschool.ox.ac.uk/news/day-save-planet-heres-what-four-day-week-could-mean-uk-carbon-emissions)*

---

## 6. Réduction de la consommation

### Moins de trajets = moins de carburant

- Une réduction de 20 % des trajets hebdomadaires se traduit directement par une moindre consommation de carburant des voitures particulières, bus et trains.
- **Gouvernement de l'Utah (2008) :** Lors de son expérimentation de semaine compressée 4/10, le Department of Environmental Quality a estimé que les employés de seulement 6 bâtiments ont économisé **plus de 300 000 dollars en frais de carburant**. L'utilisation des véhicules de la flotte de l'État a diminué, permettant d'économiser **1,4 million de dollars** la première année.

*Source : [NPR, "Utah Finds Surprising Benefits In 4-Day Workweek", avril 2009](https://www.npr.org/2009/04/10/102938615/utah-finds-surprising-benefits-in-4-day-workweek)*

### Moins de travail = moins de fast fashion

- L'industrie mondiale de la fast fashion est responsable de **10 % des émissions mondiales de CO2** et consomme **141 milliards de mètres cubes d'eau par an**.
- Le vêtement moyen est désormais porté **36 % de fois en moins** avant d'être jeté par rapport à il y a 15 ans.
- Moins de jours de trajet signifie moins de demande pour des vêtements « adaptés au bureau », réduisant le cycle d'achat, de port et de mise au rebut des tenues de travail.
- Les déchets textiles mondiaux dépassent **92 millions de tonnes par an** -- réduire le besoin de garde-robes professionnelles contribue à endiguer ce phénomène.

*Sources : [Earth.Org, 2026](https://earth.org/fast-fashions-detrimental-effect-on-the-environment/) ; [UNEP, "The environmental costs of fast fashion"](https://www.unep.org/news-and-stories/story/environmental-costs-fast-fashion)*

### Moins de plats préparés

- Les travailleurs sous pression temporelle sont plus susceptibles de recourir à des plats préparés à forte empreinte carbone (fortement emballés, transportés, transformés).
- Les participants à l'essai de Valence ont utilisé leur jour supplémentaire pour **préparer leurs repas à la maison**, réduisant la dépendance aux plats à emporter et aux emballages à usage unique.
- Les participants au pilote britannique ont déclaré consacrer du temps à des approches « plus lentes et plus réfléchies » du quotidien, y compris la préparation des repas.

### Changements comportementaux vers la durabilité

- Les travailleurs du pilote britannique se sont orientés vers des activités de loisirs plus « bas carbone » : randonnée, vélo, loisirs à domicile et engagement communautaire.
- Les participants étaient plus enclins à adopter des pratiques respectueuses du climat comme le **recyclage, l'achat de produits écologiques** et le bénévolat pour des causes environnementales.
- Les recherches du Boston College (Juliet Schor) ont confirmé que les travailleurs aux horaires réduits tendent à adopter des modes de consommation moins intensifs en carbone.

**Mise en garde importante :** L'étude de l'Oxford Smith School avertit que les réductions d'émissions ne sont **pas automatiques** -- si les gens utilisent leur temps libre supplémentaire pour des activités à forte intensité carbone (vols, shopping), les bénéfices peuvent être annulés. Environ 25 % des travailleurs d'une étude ont adopté des loisirs « plus lents et plus réfléchis », mais les voyages de loisirs ont également augmenté. Le bénéfice environnemental est maximisé lorsque le temps supplémentaire est consacré à des activités bas carbone.

*Source : [Oxford Smith School of Enterprise and the Environment, 2023](https://www.smithschool.ox.ac.uk/news/day-save-planet-heres-what-four-day-week-could-mean-uk-carbon-emissions)*

---

## 7. Expérimentations gouvernementales et politiques publiques

### Belgique -- Premier pays européen à légiférer (2022)

- **Statut :** Loi adoptée, entrée en vigueur le 21 novembre 2022.
- **Modèle :** Les employés peuvent volontairement choisir de travailler **4 jours par semaine à salaire complet** en condensant leurs 40 heures sur 4 journées plus longues (modèle 4x10).
- **Objectif :** Porter le taux d'emploi à 80 % d'ici 2030.
- La Belgique est devenue le premier pays européen à accorder aux travailleurs le droit légal à une semaine de 4 jours.

*Source : [HRMorning, "Belgium becomes latest country to adopt four-day workweek", 2022](https://www.hrmorning.com/news/four-day-workweek-belgium/)*

### Espagne -- Pilote financé par le gouvernement (2022-en cours)

- **Statut :** Pilote national volontaire de 3 ans pour une semaine de 32 heures.
- **Participants :** Jusqu'à 6 000 employés de 200 PME.
- **Financement :** Fonds gouvernemental de 10 millions d'euros.
- **Modèle :** Semaine de 4 jours (32 heures) à salaire complet.
- **Essai de la ville de Valence (2023) :** 360 000 travailleurs ont bénéficié de 4 lundis fériés consécutifs ; les résultats ont montré une réduction de 58 % du NO2, moins de stress et davantage de socialisation.
- **Note :** Une proposition plus large visant à abaisser le plafond légal national de 40 à 37,5 heures a été rejetée par vote en septembre 2025.

*Sources : [Euronews, février 2024](https://www.euronews.com/next/2024/02/02/the-four-day-week-which-countries-have-embraced-it-and-how-s-it-going-so-far) ; [European Business Review, octobre 2023](https://www.europeanbusinessreview.eu/page.asp?pid=6985)*

### Écosse -- Essai dans le secteur public (2024-en cours)

- **Statut :** Essai dans la fonction publique gouvernementale lancé fin janvier 2024.
- **Participants :** ~140 fonctionnaires chez South of Scotland Enterprise.
- **Modèle :** Semaine de 32 heures, sans perte de salaire.
- **Financement :** 10 millions de livres sterling engagés par le gouvernement écossais.
- **Contexte :** 80 % de soutien public ; s'inscrit dans l'engagement de l'Écosse envers une « économie du bien-être ».

*Source : [Euronews, février 2024](https://www.euronews.com/next/2024/02/02/the-four-day-week-which-countries-have-embraced-it-and-how-s-it-going-so-far)*

### Japon -- Impulsion gouvernementale (2021-en cours)

- **2021 :** Les directives annuelles de politique économique du gouvernement japonais ont recommandé aux entreprises de permettre aux travailleurs d'opter pour une semaine de 4 jours, afin d'améliorer l'équilibre vie professionnelle-vie personnelle.
- **Avril 2025 :** Le gouvernement métropolitain de Tokyo a commencé à permettre aux employés de travailler 4 jours par semaine ; il a ajouté un « congé partiel pour garde d'enfants » permettant 2 heures de travail en moins par jour.
- **Défi :** L'adoption est lente dans la culture du travail acharné au Japon -- Panasonic a proposé l'option à 63 000 employés éligibles en 2022, mais **seulement ~150 ont accepté**.
- **Objectif :** Faire face au déclin du taux de natalité et au vieillissement de la population japonaise.

*Sources : [CNN, décembre 2024](https://edition.cnn.com/2024/12/06/asia/tokyo-government-4-day-workweek-intl-hnk) ; [CNBC, septembre 2024](https://www.cnbc.com/2024/09/23/why-japans-workaholics-may-not-embrace-a-four-day-workweek.html)*

### Émirats arabes unis -- Adoption gouvernementale (2022)

- **Statut :** Mis en place pour les fonctionnaires fédéraux.
- **Date :** 1er janvier 2022.
- **Modèle :** Les employés fédéraux travaillent du lundi au jeudi (7h30-15h30) et le vendredi en demi-journée (7h30-12h00) -- une **semaine de 4,5 jours**.
- **Sharjah :** Est allé plus loin avec une **semaine complète de 4 jours** (lundi-jeudi), devenant le premier gouvernement local des Émirats arabes unis à le faire.
- **Résultats après 1 an :** **Augmentation de 88 % de la productivité**, **hausse de 90 % de la satisfaction au travail**, 87 % des employés souhaitaient conserver cet emploi du temps.

*Sources : [UAE Official Government Platform](https://u.ae/en/information-and-services/jobs/working-in-uae-government-sector/working-hours-in-the-public-sector) ; [WorkForce Software, "UAE State Sharjah 4 Day Working Week"](https://workforcesoftware.com/blog/uae-state-sharjah-4-day-working-week/)*

### Islande -- Le pionnier (2015-2021)

- **Essais :** Deux essais majeurs menés par le conseil municipal de Reykjavik (2014-2019) et le gouvernement national islandais (2017-2021).
- **Participants :** Plus de 2 500 travailleurs (~1,3 % de la population active totale de l'Islande).
- **Modèle :** Réduction de 40 heures à 35-36 heures par semaine, sans baisse de salaire.
- **Résultats :** Qualifiés de « succès retentissant » -- la productivité a été maintenue ou améliorée ; le bien-être s'est amélioré sur les indicateurs de stress, d'épuisement professionnel, de santé et d'équilibre vie professionnelle-vie personnelle.
- **Après l'essai :** En 2021, **86 % de la main-d'œuvre islandaise** travaille déjà à horaires réduits ou dispose de contrats leur permettant de réduire leurs heures.

*Source : [Autonomy Institute, "Going Public: Iceland's Journey to a Shorter Working Week", juin 2021](https://autonomy.work/wp-content/uploads/2021/06/ICELAND_4DW.pdf)*

### Allemagne -- Pilote national (2024)

- **Statut :** Pilote de 6 mois, de février à août 2024.
- **Participants :** 45 entreprises.
- **Modèle :** « 100-80-100 » (100 % du salaire, 80 % du temps, 100 % de la productivité).
- **Résultats :** 73 % des entreprises prévoyaient de conserver cet emploi du temps ; performance financière stable ; améliorations significatives de la satisfaction de vie, du sommeil et de l'activité physique.
- **Suivi (2026) :** 70 % des organisations participantes continuent avec une forme de réduction du temps de travail.

*Source : [4 Day Week Global, Germany 2024 Pilot Results](https://www.4dayweek.com/germany-2024-pilot-results)*

### Portugal -- Pilote soutenu par le gouvernement (2023)

- **Statut :** Pilote lancé en juin 2023.
- **Participants :** 39 entreprises du secteur privé.
- **Modèle :** Structure 100:80:100.
- **Extension :** Essai supplémentaire dans la Région autonome des Açores pour le secteur public.

*Source : [Euronews, février 2024](https://www.euronews.com/next/2024/02/02/the-four-day-week-which-countries-have-embraced-it-and-how-s-it-going-so-far)*

### Corée du Sud -- Essais émergents (2025)

- **Province de Gyeonggi :** A lancé le premier pilote de semaine de 4,5 jours du pays (juin 2025), impliquant 67 petites et moyennes entreprises, prévu jusqu'en 2027.
- **Cafe24 :** A mis en place une semaine complète de 4 jours en juillet 2025.
- **Position du gouvernement :** Le président Lee Jae-myung décrit la réforme du temps de travail comme essentielle mais préfère des changements volontaires de l'industrie à un mandat national.

*Source : [Al Jazeera, septembre 2025](https://www.aljazeera.com/economy/2025/9/4/south-korea-trials-4-day-weeks-and-half-days-for-its-stressed-out-workers)*

### Autres mentions notables

| Pays/Région | Statut | Détail clé |
|---|---|---|
| **Royaume-Uni** (pilote national) | Terminé en 2022 | 61 entreprises ; 92 % ont continué de façon permanente |
| **Nouvelle-Zélande** | Essais en entreprise | Perpetual Guardian (2018), Unilever (81 employés) |
| **Suède** | Résultats mitigés (2015) | Essai de journée de 6 heures ; positif en milieu hospitalier mais non généralisé |
| **Pays de Galles** | Pilote en réflexion | Le commissaire a recommandé un essai dans le secteur public (2023) |
| **États-Unis** | Intérêt croissant | 92 % des travailleurs sont favorables à une semaine raccourcie ; la Californie a proposé un projet de loi en 2022 |
| **Canada** | Intérêt croissant | 51 % des grandes entreprises susceptibles de l'adopter |

---

## 8. Contexte historique

### Comment sommes-nous passés de 6 jours à 5 jours

#### L'ère pré-industrielle

Les heures de travail à travers l'histoire ont varié bien plus que la plupart des gens ne le réalisent :

| Période | Lieu | Heures annuelles | Équivalent |
|---|---|---|---|
| Paysan du XIIIe siècle | Royaume-Uni | ~1 620 heures | ~150 jours/an à 12 heures/jour |
| Ouvrier occasionnel du XIVe siècle | Royaume-Uni | ~1 440 heures | ~120 jours/an à 12 heures/jour |
| Travailleur médiéval (moyenne) | Angleterre | ~2 309 heures | ~deux tiers de l'année à 9,5 heures/jour |
| Paysan-mineur 1400-1600 | Royaume-Uni | ~1 980 heures | ~180 jours/an à 11 heures/jour |

*Source : [Juliet Schor data compiled at MIT CSAIL](https://groups.csail.mit.edu/mac/users/rauch/worktime/hours_workweek.html)*

Caractéristiques principales du travail pré-industriel :
- Le travail était **intermittent** -- interrompu pour le petit-déjeuner, le déjeuner, la sieste de l'après-midi et le dîner.
- L'Église imposait de fréquents jours fériés pour les fêtes des saints, les festivités religieuses, les mariages et les veillées funèbres.
- Les travailleurs anglais médiévaux disposaient probablement d'**environ un tiers de l'année** comme temps de loisir.
- Les paysans espagnols bénéficiaient d'environ **5 mois de congés** par an.

#### La Révolution industrielle : explosion du temps de travail

| Année | Lieu | Heures annuelles | Heures hebdomadaires |
|---|---|---|---|
| 1840 | Royaume-Uni | 3 105-3 588 | ~69 heures |
| 1850 | États-Unis | 3 150-3 650 | ~70 heures |

- Les premiers ouvriers industriels travaillaient couramment **des semaines de 70 heures sur 6 jours** ; certains dépassaient les 100 heures.
- Les travailleurs subissaient le système du « speed up » -- des cadences de travail intenses et insoutenables.

*Source : [Juliet Schor data compiled at MIT CSAIL](https://groups.csail.mit.edu/mac/users/rauch/worktime/hours_workweek.html)*

#### Étapes clés vers la semaine de 5 jours

| Année | Événement |
|---|---|
| **1886** | Grève du Great Southwest Railroad -- les ouvriers revendiquent la journée de 8 heures |
| **1912-13** | Grèves du textile à Lawrence, MA et Paterson, NJ (25 000 ouvriers) revendiquant la journée de 8 heures |
| **1913** | Création du US Department of Labor par le président Taft |
| **1919** | 365 000 sidérurgistes en grève pour de meilleures conditions |
| **1926** | **Henry Ford réduit la semaine chez Ford Motor Company de 6 à 5 jours**, sans baisse de salaire. Ford estimait que des ouvriers reposés et bien payés seraient plus productifs et dépenseraient davantage (y compris pour ses voitures) -- la philosophie du **« fordisme »** : la production de masse nécessite la consommation de masse. |
| **1938** | Le président FDR signe le **Fair Labor Standards Act**, instaurant une semaine de 44 heures avec un salaire minimum et des protections pour les heures supplémentaires |
| **1940** | Le FLSA est amendé pour fixer la **semaine de 40 heures** comme norme nationale -- l'ère de la semaine de 5 jours et du week-end de 2 jours commence officiellement |
| **1947** | Le Portal-to-Portal Act clarifie le temps de travail indemnisable |
| **1981** | Grève des contrôleurs aériens revendiquant une semaine de 32 heures sur 4 jours ; Reagan licencie plus de 11 000 contrôleurs |
| **2022** | La Californie propose de réduire la semaine de travail à 32 heures pour les entreprises de plus de 500 employés (le projet de loi n'aboutit pas mais déclenche un débat national) |

*Sources : [Firmspace, "From Strikes to Labor Laws", 2024](https://firmspace.com/theproworker/from-strikes-to-labor-laws-how-the-us-adopted-the-5-day-workweek) ; [Teaching American History, "Henry Ford's Five-Day Week"](https://teachingamericanhistory.org/document/henry-fords-five-day-week/)*

<div style="margin: 2em 0; max-width: 100%;">
<canvas id="chart-working-hours-timeline"></canvas>
</div>
<script>
new Chart(document.getElementById('chart-working-hours-timeline'), {
  type: 'line',
  data: {
    labels: ['1870', '1926', '1940', '1980', 'Aujourd\'hui', 'Semaine de 4 j ?'],
    datasets: [{
      label: 'Heures par an',
      data: [3000, 2400, 2100, 1900, 1750, 1400],
      borderColor: '#9a462a',
      backgroundColor: 'rgba(154, 70, 42, 0.1)',
      fill: true,
      tension: 0.3,
      pointRadius: 6,
      pointBackgroundColor: '#9a462a',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: '200 ans de baisse du temps de travail', font: { size: 16, weight: 'bold' }, color: '#31332e', padding: { bottom: 4 } },
      subtitle: { display: true, text: 'Heures annuelles par travailleur (OCDE, données historiques)', color: '#6b7280', font: { size: 12 }, padding: { bottom: 16 } },
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => ctx.raw + ' h/an' } }
    },
    scales: {
      y: { beginAtZero: false, min: 1000, max: 3200, ticks: { callback: (v) => v.toLocaleString() + ' h', color: '#6b7280' }, grid: { color: '#e5e7eb' } },
      x: { ticks: { color: '#31332e', font: { weight: 'bold' } }, grid: { color: '#e5e7eb' } }
    }
  }
});
</script>

#### La longue trajectoire : le temps de travail sur deux siècles

Sur 200 ans, le temps de travail mondial a diminué d'**environ 34 %** :

- **1870 :** Les travailleurs des pays industrialisés précocement travaillaient **plus de 3 000 heures par an** (~60-70 heures/semaine pendant 50 semaines).
- **Aujourd'hui :** La moyenne est d'environ **2 100 heures par an** (~40 heures/semaine avec congés payés).

Ce déclin a été provoqué par :
1. **Les gains de productivité** -- la technologie permet de produire plus en moins de temps.
2. **Les mouvements ouvriers** -- les syndicats ont lutté pour des horaires réduits et de meilleures conditions.
3. **La réglementation gouvernementale** -- des limites légales au temps de travail.

*Source : [Our World in Data, "Are we working more than ever?"](https://ourworldindata.org/working-more-than-ever)*

#### Contexte moderne (1987-1988)

| Pays | Heures annuelles |
|---|---|
| États-Unis (1987) | 1 949 |
| Industrie manufacturière britannique (1988) | 1 856 |

La transition de la semaine de 6 jours à la semaine de 5 jours était autrefois considérée comme radicale et économiquement irresponsable -- les mêmes arguments avancés aujourd'hui contre la semaine de 4 jours. Henry Ford a donné tort aux sceptiques. La question aujourd'hui est de savoir si l'histoire se répétera.

---

## Synthèse des données clés

| Indicateur | Résultat | Source |
|---|---|---|
| Potentiel de réduction carbone au Royaume-Uni | 127 millions de tonnes/an (21,3 %) | Platform London, 2021 |
| Équivalent en voitures retirées (Royaume-Uni) | 27 millions (totalité du parc privé) | Platform London, 2021 |
| 10 % d'heures en moins = empreinte carbone | Réduction de 8,6-14,6 % | Schor et al., 2012 |
| Réduction des trajets au Royaume-Uni | 558 millions de miles en voiture en moins/semaine | Henley Business School, 2019 |
| Économies d'électricité (Microsoft Japan) | Réduction de 23 % | Microsoft, 2019 |
| Baisse de la pollution au NO2 (Valence) | Réduction de 58 % | Essai de la ville de Valence, 2023 |
| Réduction des émissions du secteur énergétique britannique | 5 % (ensemble du secteur) / 24 % (électricité) | Autonomy Institute, 2020 |
| Économies potentielles pour les entreprises britanniques | 104 milliards GBP/an | Henley Business School, 2019 |
| Taux d'adoption en Islande | 86 % de la main-d'œuvre aux horaires réduits | Autonomy, 2021 |
| Taux de poursuite du pilote britannique | 92 % des entreprises ont continué | 4 Day Week Global, 2023 |
| Taux de poursuite du pilote allemand | 73 % des entreprises ont continué | 4 Day Week Global, 2024 |
| Temps de travail sur 200 ans | Diminution d'environ 34 % (3 000+ à ~2 100/an) | Our World in Data |
| Année de travail pré-industrielle | ~1 440-1 980 heures (médiéval) | Schor, MIT CSAIL |
| Pic de la Révolution industrielle | 3 100-3 650 heures/an | Schor, MIT CSAIL |

---

*Recherches compilées pour le projet 4-Days Workweek. Toutes les sources consultées en mars 2026.*
