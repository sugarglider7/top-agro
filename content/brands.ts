import type { Locale } from "@/lib/i18n";

export interface BrandsContent {
  metaTitle: string;
  hero: { eyebrow: string; title: string; lede: string };
  kamil: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    labelsCaption: string;
    cansCaption: string;
  };
  others: {
    eyebrow: string;
    title: string;
    marks: { name: string; note: string }[];
    footnote: string;
  };
  band: { title: string; cta: string };
}

const en: BrandsContent = {
  metaTitle: "Brands",
  hero: {
    eyebrow: "Brands",
    title: "The marks of the house",
    lede: "Trade directories record three brands to the company's name — Kamil, Ouchka and Bab Essalam — with Kamil on the cans of the classic range.",
  },
  kamil: {
    eyebrow: "The table brand",
    title: "Kamil",
    p1: "Kamil is the label the house has put on its classic canned range — whole and pitted olives, the eight prepared recipes, and the apricot tins found at European wholesalers to this day.",
    p2: "Its label wall is a small atlas of the Moroccan table: Pimentées, Tchermela, Façon Grèce, Sauce anchois — each recipe with its own colourway on the same Kamil crest.",
    labelsCaption: "The Kamil label wall — Top Agro company archive",
    cansCaption: "The classic canned range — Top Agro company archive",
  },
  others: {
    eyebrow: "House marks",
    title: "Ouchka & Bab Essalam",
    marks: [
      {
        name: "Ouchka",
        note: "House brand recorded in trade directories alongside Kamil.",
      },
      {
        name: "Bab Essalam",
        note: "House brand recorded in trade directories — 'the gate of peace'.",
      },
    ],
    footnote:
      "Directories also record the marks Bennis and Top-Agro to the company's name (Telecontact).",
  },
  band: { title: "Ask which mark fits your market", cta: "Talk to the export desk" },
};

const fr: BrandsContent = {
  metaTitle: "Marques",
  hero: {
    eyebrow: "Marques",
    title: "Les marques de la maison",
    lede: "Les annuaires professionnels recensent trois marques au nom de l'entreprise — Kamil, Ouchka et Bab Essalam — Kamil signant les boîtes de la gamme classique.",
  },
  kamil: {
    eyebrow: "La marque de table",
    title: "Kamil",
    p1: "Kamil est l'étiquette que la maison appose sur sa gamme appertisée classique — olives entières et dénoyautées, les huit recettes préparées, et les boîtes d'abricots encore référencées chez des grossistes européens aujourd'hui.",
    p2: "Son mur d'étiquettes est un petit atlas de la table marocaine : Pimentées, Tchermela, Façon Grèce, Sauce anchois — chaque recette avec sa couleur sur le même blason Kamil.",
    labelsCaption: "Le mur d'étiquettes Kamil — archives Top Agro",
    cansCaption: "La gamme appertisée classique — archives Top Agro",
  },
  others: {
    eyebrow: "Marques de la maison",
    title: "Ouchka & Bab Essalam",
    marks: [
      { name: "Ouchka", note: "Marque de la maison recensée dans les annuaires aux côtés de Kamil." },
      { name: "Bab Essalam", note: "Marque de la maison recensée dans les annuaires — « la porte de la paix »." },
    ],
    footnote:
      "Les annuaires recensent également les marques Bennis et Top-Agro au nom de l'entreprise (Telecontact).",
  },
  band: { title: "Demandez quelle marque convient à votre marché", cta: "Parler au bureau export" },
};

const ar: BrandsContent = {
  metaTitle: "العلامات",
  hero: {
    eyebrow: "العلامات",
    title: "علامات الدار",
    lede: "تسجل الأدلة التجارية ثلاث علامات باسم الشركة — Kamil وOuchka وBab Essalam — وتوقّع Kamil علب التشكيلة الكلاسيكية.",
  },
  kamil: {
    eyebrow: "علامة المائدة",
    title: "Kamil",
    p1: "Kamil هي العلامة التي تضعها الدار على تشكيلتها المعلّبة الكلاسيكية — الزيتون الكامل ومنزوع النوى، والوصفات الثماني، وعلب المشمش التي ما زالت مدرجة لدى تجار جملة أوروبيين حتى اليوم.",
    p2: "جدار ملصقاتها أطلس صغير للمائدة المغربية: بالفلفل الحار، الشرملة، اليونانية، صلصة الأنشوجة — لكل وصفة لونها على شعار Kamil نفسه.",
    labelsCaption: "جدار ملصقات Kamil — أرشيف توب أغرو",
    cansCaption: "التشكيلة المعلّبة الكلاسيكية — أرشيف توب أغرو",
  },
  others: {
    eyebrow: "علامات الدار",
    title: "Ouchka وBab Essalam",
    marks: [
      { name: "Ouchka", note: "علامة الدار تسجلها الأدلة التجارية إلى جانب Kamil." },
      { name: "Bab Essalam", note: "علامة الدار تسجلها الأدلة التجارية — «باب السلام»." },
    ],
    footnote: "تسجل الأدلة أيضاً علامتي Bennis وTop-Agro باسم الشركة (Telecontact).",
  },
  band: { title: "اسألوا أي علامة تناسب سوقكم", cta: "تحدث إلى مكتب التصدير" },
};

export const brands: Record<Locale, BrandsContent> = { en, fr, ar };
