/**
 * Central registry of art-directed photography.
 * Stock imagery is atmospheric/supporting only — it is never captioned as
 * Top Agro's own factory or products. Authentic legacy assets live under
 * /images/legacy and are always presented as archive material.
 */
export interface Photo {
  src: string;
  mobileSrc?: string;
  alt: Record<"en" | "fr" | "ar", string>;
  width: number;
  height: number;
}

export const photos = {
  heroGrove: {
    src: "/images/stock/olive-grove-sunrise.jpg",
    mobileSrc: "/images/stock/olive-grove-sunrise-m.jpg",
    alt: {
      en: "Olive grove at sunrise",
      fr: "Oliveraie au lever du soleil",
      ar: "بستان زيتون عند شروق الشمس",
    },
    width: 2400,
    height: 1600,
  },
} satisfies Record<string, Photo>;
