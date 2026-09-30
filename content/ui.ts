import type { Locale } from "@/lib/i18n";

export interface UiStrings {
  companyName: string;
  companyShort: string;
  tagline: string;
  nav: {
    company: string;
    products: string;
    process: string;
    export: string;
    brands: string;
    contact: string;
  };
  cta: {
    exploreProducts: string;
    exportEnquiry: string;
    requestQuote: string;
    viewAll: string;
    learnMore: string;
    downloadOverview: string;
  };
  header: {
    location: string;
    since: string;
    menu: string;
    close: string;
  };
  footer: {
    addressTitle: string;
    addressLines: string[];
    phoneTitle: string;
    faxTitle: string;
    emailTitle: string;
    navTitle: string;
    legalNote: string;
    credit: string;
  };
  legacyNote: string;
}

const en: UiStrings = {
  companyName: "Marrakech Top Agro Export",
  companyShort: "Top Agro",
  tagline: "Moroccan harvests. Global tables.",
  nav: {
    company: "Company",
    products: "Products",
    process: "Process & Quality",
    export: "Export",
    brands: "Brands",
    contact: "Contact",
  },
  cta: {
    exploreProducts: "Explore our products",
    exportEnquiry: "Export enquiry",
    requestQuote: "Request a quotation",
    viewAll: "View all",
    learnMore: "Learn more",
    downloadOverview: "Company overview",
  },
  header: {
    location: "Sidi Ghanem, Marrakech",
    since: "Est. 1989",
    menu: "Menu",
    close: "Close",
  },
  footer: {
    addressTitle: "Address",
    addressLines: [
      "Marrakech Top Agro Export S.A.",
      "New industrial zone, Sidi Ghanem",
      "P.O. Box 641, Marrakech, Morocco",
    ],
    phoneTitle: "Telephone",
    faxTitle: "Fax",
    emailTitle: "Email",
    navTitle: "Navigate",
    legalNote:
      "Operating figures and market lists shown on this site are company-published data.",
    credit: "Concept redesign — not the official company website.",
  },
  legacyNote: "Company-published figures",
};

const fr: UiStrings = {
  companyName: "Marrakech Top Agro Export",
  companyShort: "Top Agro",
  tagline: "Récoltes marocaines. Tables du monde.",
  nav: {
    company: "L'entreprise",
    products: "Produits",
    process: "Process & Qualité",
    export: "Export",
    brands: "Marques",
    contact: "Contact",
  },
  cta: {
    exploreProducts: "Découvrir nos produits",
    exportEnquiry: "Demande export",
    requestQuote: "Demander une cotation",
    viewAll: "Tout voir",
    learnMore: "En savoir plus",
    downloadOverview: "Présentation de l'entreprise",
  },
  header: {
    location: "Sidi Ghanem, Marrakech",
    since: "Depuis 1989",
    menu: "Menu",
    close: "Fermer",
  },
  footer: {
    addressTitle: "Adresse",
    addressLines: [
      "Marrakech Top Agro Export S.A.",
      "Nouvelle zone industrielle, Sidi Ghanem",
      "B.P. 641, Marrakech, Maroc",
    ],
    phoneTitle: "Téléphone",
    faxTitle: "Fax",
    emailTitle: "E-mail",
    navTitle: "Navigation",
    legalNote:
      "Les chiffres et listes de marchés présentés sur ce site sont des données publiées par l'entreprise.",
    credit: "Refonte conceptuelle — ceci n'est pas le site officiel de l'entreprise.",
  },
  legacyNote: "Chiffres publiés par l'entreprise",
};

const ar: UiStrings = {
  companyName: "مراكش توب أغرو للتصدير",
  companyShort: "توب أغرو",
  tagline: "محاصيل مغربية. موائد العالم.",
  nav: {
    company: "الشركة",
    products: "المنتجات",
    process: "الجودة والتصنيع",
    export: "التصدير",
    brands: "علاماتنا",
    contact: "اتصل بنا",
  },
  cta: {
    exploreProducts: "اكتشف منتجاتنا",
    exportEnquiry: "طلب تصدير",
    requestQuote: "اطلب عرض سعر",
    viewAll: "عرض الكل",
    learnMore: "المزيد",
    downloadOverview: "نبذة عن الشركة",
  },
  header: {
    location: "سيدي غانم، مراكش",
    since: "منذ 1989",
    menu: "القائمة",
    close: "إغلاق",
  },
  footer: {
    addressTitle: "العنوان",
    addressLines: [
      "شركة مراكش توب أغرو للتصدير",
      "المنطقة الصناعية الجديدة، سيدي غانم",
      "ص.ب 641، مراكش، المغرب",
    ],
    phoneTitle: "الهاتف",
    faxTitle: "الفاكس",
    emailTitle: "البريد الإلكتروني",
    navTitle: "التصفح",
    legalNote: "الأرقام وقوائم الأسواق المعروضة في هذا الموقع بيانات نشرتها الشركة.",
    credit: "إعادة تصميم تصورية — هذا ليس الموقع الرسمي للشركة.",
  },
  legacyNote: "أرقام نشرتها الشركة",
};

export const ui: Record<Locale, UiStrings> = { en, fr, ar };

export const contact = {
  phones: ["+212 5 24 33 52 01", "+212 5 24 33 52 02", "+212 5 24 33 56 39"],
  fax: "+212 5 24 33 52 00",
  emails: ["contact@marrakechtopagro.com", "topagro@menara.ma"],
} as const;
