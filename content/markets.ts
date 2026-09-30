import type { Locale } from "@/lib/i18n";

export type Region = "americas" | "europe" | "mena" | "africa" | "oceania";

export const regionNames: Record<Region, Record<Locale, string>> = {
  americas: { en: "Americas", fr: "Amériques", ar: "الأمريكتان" },
  europe: { en: "Europe", fr: "Europe", ar: "أوروبا" },
  mena: { en: "Middle East", fr: "Moyen-Orient", ar: "الشرق الأوسط" },
  africa: { en: "Africa", fr: "Afrique", ar: "إفريقيا" },
  oceania: { en: "Oceania", fr: "Océanie", ar: "أوقيانوسيا" },
};

export const marketNames: Record<
  string,
  { region: Region; name: Record<Locale, string> }
> = {
  ca: { region: "americas", name: { en: "Canada", fr: "Canada", ar: "كندا" } },
  us: {
    region: "americas",
    name: { en: "United States", fr: "États-Unis", ar: "الولايات المتحدة" },
  },
  br: { region: "americas", name: { en: "Brazil", fr: "Brésil", ar: "البرازيل" } },
  gb: {
    region: "europe",
    name: { en: "United Kingdom", fr: "Royaume-Uni", ar: "المملكة المتحدة" },
  },
  fr: { region: "europe", name: { en: "France", fr: "France", ar: "فرنسا" } },
  be: { region: "europe", name: { en: "Belgium", fr: "Belgique", ar: "بلجيكا" } },
  nl: {
    region: "europe",
    name: { en: "Netherlands", fr: "Pays-Bas", ar: "هولندا" },
  },
  de: { region: "europe", name: { en: "Germany", fr: "Allemagne", ar: "ألمانيا" } },
  dk: { region: "europe", name: { en: "Denmark", fr: "Danemark", ar: "الدنمارك" } },
  fi: { region: "europe", name: { en: "Finland", fr: "Finlande", ar: "فنلندا" } },
  ch: { region: "europe", name: { en: "Switzerland", fr: "Suisse", ar: "سويسرا" } },
  it: { region: "europe", name: { en: "Italy", fr: "Italie", ar: "إيطاليا" } },
  es: { region: "europe", name: { en: "Spain", fr: "Espagne", ar: "إسبانيا" } },
  lb: { region: "mena", name: { en: "Lebanon", fr: "Liban", ar: "لبنان" } },
  il: { region: "mena", name: { en: "Israel", fr: "Israël", ar: "إسرائيل" } },
  sa: {
    region: "mena",
    name: { en: "Saudi Arabia", fr: "Arabie saoudite", ar: "السعودية" },
  },
  za: {
    region: "africa",
    name: { en: "South Africa", fr: "Afrique du Sud", ar: "جنوب إفريقيا" },
  },
  au: { region: "oceania", name: { en: "Australia", fr: "Australie", ar: "أستراليا" } },
};
