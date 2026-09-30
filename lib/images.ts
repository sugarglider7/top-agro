/**
 * Central registry of art-directed photography.
 *
 * Stock imagery (public/images/stock, credits in research/image-credits.md) is
 * atmospheric/supporting only — it is never captioned as Top Agro's own factory
 * or products. Authentic legacy assets live under /images/legacy and are always
 * presented with archive treatment.
 */
import type { Locale } from "@/lib/i18n";

export interface Photo {
  src: string;
  mobileSrc?: string;
  alt: Record<Locale, string>;
  width: number;
  height: number;
}

function stock(
  name: string,
  width: number,
  height: number,
  alt: Photo["alt"],
): Photo {
  return {
    src: `/images/stock/${name}.jpg`,
    mobileSrc: `/images/stock/${name}-m.jpg`,
    alt,
    width,
    height,
  };
}

export const photos = {
  heroGrove: stock("olive-grove-morning-light", 2400, 1600, {
    en: "Sunlight breaking through an olive grove at dawn",
    fr: "Lumière du matin dans une oliveraie",
    ar: "ضوء الفجر يخترق بستان زيتون",
  }),
  groveSunlit: stock("olive-grove-sunlit", 2400, 1800, {
    en: "Ancient olive trees in a sunlit field",
    fr: "Oliviers centenaires dans un champ ensoleillé",
    ar: "أشجار زيتون معمّرة في حقل مشمس",
  }),
  groveSunsetPath: stock("olive-grove-sunset-path", 2400, 3200, {
    en: "Path through an olive grove at sunset",
    fr: "Chemin dans une oliveraie au couchant",
    ar: "ممر عبر بستان زيتون عند الغروب",
  }),
  oliveBranch: stock("olive-branch-green-olives", 2400, 1600, {
    en: "Green olives ripening on the branch",
    fr: "Olives vertes mûrissant sur la branche",
    ar: "زيتون أخضر ينضج على الغصن",
  }),
  greenOlives: stock("green-olives-pile", 2400, 1800, {
    en: "Freshly picked green olives",
    fr: "Olives vertes fraîchement cueillies",
    ar: "زيتون أخضر مقطوف حديثاً",
  }),
  olivesBrine: stock("green-olives-brine", 2400, 1800, {
    en: "Green olives in brine",
    fr: "Olives vertes en saumure",
    ar: "زيتون أخضر في محلول ملحي",
  }),
  darkOlives: stock("olives-mixed-dark-pile", 2400, 1600, {
    en: "Dark ripe olives",
    fr: "Olives noires mûres",
    ar: "زيتون أسود ناضج",
  }),
  harvestHands: stock("hands-holding-olives", 2400, 3200, {
    en: "Hands holding freshly harvested olives",
    fr: "Mains tenant des olives fraîchement récoltées",
    ar: "أيادٍ تحمل زيتوناً مقطوفاً حديثاً",
  }),
  apricots: stock("apricots-fresh-pile", 2400, 3600, {
    en: "Ripe apricots",
    fr: "Abricots mûrs",
    ar: "مشمش ناضج",
  }),
  driedApricots: stock("dried-apricots-closeup", 2400, 1600, {
    en: "Apricot halves, close up",
    fr: "Oreillons d'abricots en gros plan",
    ar: "أنصاف مشمش عن قرب",
  }),
  capers: stock("capers-jar", 2400, 1603, {
    en: "Caper buds in a glass jar",
    fr: "Câpres en bocal",
    ar: "قبار في برطمان زجاجي",
  }),
  spiceMarket: stock("marrakech-spice-market", 2400, 4266, {
    en: "Spices in a Marrakech souk",
    fr: "Épices dans un souk de Marrakech",
    ar: "توابل في سوق مراكشي",
  }),
  bottlingLine: stock("bottling-line-glass", 2400, 1600, {
    en: "Glass containers on a production line",
    fr: "Contenants en verre sur une ligne de production",
    ar: "عبوات زجاجية على خط إنتاج",
  }),
  containerPort: stock("container-port-sunset", 2400, 4265, {
    en: "Container ship at port, sunset",
    fr: "Porte-conteneurs au port, au couchant",
    ar: "سفينة حاويات في الميناء عند الغروب",
  }),
  atlas: stock("atlas-mountains-palms", 2400, 1566, {
    en: "Atlas mountains behind palm groves",
    fr: "Montagnes de l'Atlas derrière les palmeraies",
    ar: "جبال الأطلس خلف واحات النخيل",
  }),
  oliveJar: stock("olive-oil-jar-rustic", 2400, 4264, {
    en: "Preserved olives and oil, still life",
    fr: "Olives préparées et huile, nature morte",
    ar: "زيتون معدّ وزيت، طبيعة صامتة",
  }),
  burlap: stock("burlap-sacks-barn", 2400, 1346, {
    en: "Burlap sacks in a warehouse",
    fr: "Sacs de jute dans un entrepôt",
    ar: "أكياس خيش في مستودع",
  }),
} satisfies Record<string, Photo>;

/** Authentic Top Agro material from the legacy website — archive treatment only. */
export const legacy = {
  factoryAerial: { src: "/images/legacy/photo-usine.jpg", width: 525, height: 306 },
  sortingPan: { src: "/images/legacy/olive1.jpg", width: 474, height: 313 },
  drumYard: { src: "/images/legacy/bramel.jpg", width: 441, height: 230 },
  autoclaves: { src: "/images/legacy/garantie02.jpg", width: 244, height: 164 },
  sortingHall: { src: "/images/legacy/selection02.jpg", width: 244, height: 164 },
  handSorting: { src: "/images/legacy/selection30.jpg", width: 200, height: 130 },
  brineYard: { src: "/images/legacy/selection31.jpg", width: 200, height: 130 },
  gradingConveyor: { src: "/images/legacy/selection32.jpg", width: 200, height: 130 },
  canningLine: { src: "/images/legacy/garantie30.jpg", width: 200, height: 130 },
  drumWarehouse: { src: "/images/legacy/garantie31.jpg", width: 200, height: 130 },
  goldCans: { src: "/images/legacy/garantie32.jpg", width: 200, height: 130 },
  elevator: { src: "/images/legacy/usine1.jpg", width: 185, height: 274 },
  gradingBelt: { src: "/images/legacy/usine2.jpg", width: 185, height: 274 },
  lab: { src: "/images/legacy/labo1.jpg", width: 474, height: 313 },
  logo: { src: "/images/legacy/logo.gif", width: 143, height: 100 },
  worldMap: { src: "/images/legacy/world.gif", width: 525, height: 256 },
  accessMap: { src: "/images/legacy/plan00.jpg", width: 501, height: 295 },
} as const;

export const kamilLabels = [
  "pimentees",
  "denoyautees",
  "farcies",
  "alail",
  "tailladees",
  "facongrece",
  "tchermela",
  "anchois",
] as const;

export const kamilCans = ["001", "002", "003", "004", "005", "006", "007", "008"] as const;
