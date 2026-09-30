import type { Locale } from "@/lib/i18n";

export interface CompanyContent {
  metaTitle: string;
  hero: { eyebrow: string; title: string; lede: string };
  story: { eyebrow: string; title: string; p1: string; p2: string };
  timeline: {
    eyebrow: string;
    title: string;
    items: { period: string; title: string; text: string }[];
  };
  leadership: {
    eyebrow: string;
    title: string;
    people: { name: string; role: string }[];
    note: string;
  };
  sector: { eyebrow: string; title: string; p1: string; p2: string; source: string };
  facilities: {
    eyebrow: string;
    title: string;
    lede: string;
    galleryCaption: string;
  };
  location: {
    eyebrow: string;
    title: string;
    lines: string[];
    mapCaption: string;
  };
}

const en: CompanyContent = {
  metaTitle: "Company",
  hero: {
    eyebrow: "The company",
    title: "A house of the Haouz plain",
    lede: "Family-founded in Marrakech in 1989, Marrakech Top Agro Export has spent three decades turning Moroccan harvests into export-grade food.",
  },
  story: {
    eyebrow: "Story",
    title: "Built on one conviction",
    p1: "The conviction is simple: Morocco grows some of the world's finest table olives, and they deserve a plant equal to them. From the Sidi Ghanem industrial zone, the house cures, prepares and packs the harvest of the country's olive basins — and has published a standard of thirty-five years of ambition in the service of its clients.",
    p2: "The company remains a Moroccan société anonyme with family leadership. What began as an olive house now spans apricots, capers and the Moroccan condiment table — with export as its sole orientation: 99.2% of turnover, by its own published figures.",
  },
  timeline: {
    eyebrow: "Milestones",
    title: "Three decades, one direction",
    items: [
      {
        period: "1989",
        title: "Founded in Marrakech",
        text: "Marrakech Top Agro Export S.A. is registered (RC 5709) — a family company built for export from day one.",
      },
      {
        period: "1990s–2000s",
        title: "The Sidi Ghanem plant",
        text: "The house builds out a 40,000 m² site with 20,000 m² covered and publishes an investment of $11 million in its industrial tool.",
      },
      {
        period: "2000s",
        title: "Kamil goes worldwide",
        text: "The Kamil label reaches eighteen published markets on five continents, from Canada to Australia.",
      },
      {
        period: "Today",
        title: "Among Morocco's largest",
        text: "OMPIC filings published by Maroc1000 place the company among Morocco's 1,000 largest by revenue, at roughly 100 million dirhams.",
      },
    ],
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Family direction",
    people: [
      { name: "Ahmed Bennis", role: "President" },
      { name: "Kamil Bennis", role: "General Director & Export Manager" },
    ],
    note: "Parent group recorded in trade directories: Groupe Bennis.",
  },
  sector: {
    eyebrow: "Terroir & sector",
    title: "Morocco, an olive nation",
    p1: "The Picholine marocaine — a dual-purpose olive for both table and oil — makes up around 90% of Morocco's orchards. The harvest runs from September to January: green olives first, black olives once the fruit has darkened on the tree.",
    p2: "With annual table-olive production around 120–130 thousand tonnes and exports around 80 thousand tonnes, Morocco stands among the world's leading table-olive exporting countries.",
    source: "Sector figures: International Olive Council (2023); variety share: OCL journal.",
  },
  facilities: {
    eyebrow: "Facilities",
    title: "The industrial tool",
    lede: "Fermentation yards, sorting halls, filling lines, autoclaves and an in-plant laboratory — the chain under one roof at Sidi Ghanem.",
    galleryCaption: "The plant at work — Top Agro company archive",
  },
  location: {
    eyebrow: "Where we are",
    title: "Sidi Ghanem, Marrakech",
    lines: [
      "Marrakech Top Agro Export S.A.",
      "Lot 160, New industrial zone, Sidi Ghanem — Route de Safi",
      "P.O. Box 641, Guéliz, 40000 Marrakech, Morocco",
    ],
    mapCaption: "Access sketch to the plant — Top Agro company archive",
  },
};

const fr: CompanyContent = {
  metaTitle: "L'entreprise",
  hero: {
    eyebrow: "L'entreprise",
    title: "Une maison de la plaine du Haouz",
    lede: "Fondée en famille à Marrakech en 1989, Marrakech Top Agro Export transforme depuis trois décennies les récoltes marocaines en produits d'exportation.",
  },
  story: {
    eyebrow: "Histoire",
    title: "Bâtie sur une conviction",
    p1: "La conviction est simple : le Maroc produit parmi les plus belles olives de table du monde, et elles méritent un outil industriel à leur hauteur. Depuis la zone industrielle de Sidi Ghanem, la maison prépare et conditionne la récolte des bassins oléicoles du pays — et revendique, dans ses propres publications, trente-cinq ans d'ambition au service de sa clientèle.",
    p2: "L'entreprise demeure une société anonyme marocaine à direction familiale. La maison d'olives s'est étendue aux abricots, aux câpres et à la table marocaine des condiments — avec l'export pour seule orientation : 99,2 % du chiffre d'affaires, selon ses chiffres publiés.",
  },
  timeline: {
    eyebrow: "Jalons",
    title: "Trois décennies, une direction",
    items: [
      {
        period: "1989",
        title: "Fondation à Marrakech",
        text: "Marrakech Top Agro Export S.A. est immatriculée (RC 5709) — une entreprise familiale tournée vers l'export dès le premier jour.",
      },
      {
        period: "Années 1990–2000",
        title: "L'usine de Sidi Ghanem",
        text: "La maison développe un site de 40 000 m² dont 20 000 m² couverts et publie un investissement de 11 millions de dollars dans son outil industriel.",
      },
      {
        period: "Années 2000",
        title: "Kamil part dans le monde",
        text: "L'étiquette Kamil atteint dix-huit marchés publiés sur cinq continents, du Canada à l'Australie.",
      },
      {
        period: "Aujourd'hui",
        title: "Parmi les plus grandes du Maroc",
        text: "Les dépôts OMPIC publiés par Maroc1000 classent l'entreprise parmi les 1 000 premières du Maroc par chiffre d'affaires, autour de 100 millions de dirhams.",
      },
    ],
  },
  leadership: {
    eyebrow: "Direction",
    title: "Une direction familiale",
    people: [
      { name: "Ahmed Bennis", role: "Président" },
      { name: "Kamil Bennis", role: "Directeur Général & Responsable Export" },
    ],
    note: "Groupe parent recensé dans les annuaires professionnels : Groupe Bennis.",
  },
  sector: {
    eyebrow: "Terroir & filière",
    title: "Le Maroc, nation oléicole",
    p1: "La picholine marocaine — olive à double fin, table et huile — représente environ 90 % des vergers du Maroc. La récolte court de septembre à janvier : les vertes d'abord, puis les noires, une fois le fruit noirci sur l'arbre.",
    p2: "Avec une production d'olives de table d'environ 120 à 130 mille tonnes et des exportations autour de 80 mille tonnes par an, le Maroc figure parmi les tout premiers pays exportateurs d'olives de table.",
    source: "Chiffres filière : Conseil oléicole international (2023) ; part variétale : revue OCL.",
  },
  facilities: {
    eyebrow: "Installations",
    title: "L'outil industriel",
    lede: "Parcs de fermentation, halls de tri, lignes de remplissage, autoclaves et laboratoire intégré — toute la chaîne sous un même toit à Sidi Ghanem.",
    galleryCaption: "L'usine au travail — archives Top Agro",
  },
  location: {
    eyebrow: "Où nous trouver",
    title: "Sidi Ghanem, Marrakech",
    lines: [
      "Marrakech Top Agro Export S.A.",
      "Lot 160, Nouvelle zone industrielle Sidi Ghanem — Route de Safi",
      "B.P. 641, Guéliz, 40000 Marrakech, Maroc",
    ],
    mapCaption: "Croquis d'accès à l'usine — archives Top Agro",
  },
};

const ar: CompanyContent = {
  metaTitle: "الشركة",
  hero: {
    eyebrow: "الشركة",
    title: "دار من سهل الحوز",
    lede: "تأسست عائلياً في مراكش سنة 1989، وتحوّل مراكش توب أغرو منذ ثلاثة عقود المحاصيل المغربية إلى غذاء بمواصفات التصدير.",
  },
  story: {
    eyebrow: "الحكاية",
    title: "بُنيت على قناعة واحدة",
    p1: "القناعة بسيطة: المغرب ينتج من أجود زيتون المائدة في العالم، وهو يستحق أداة صناعية بمستواه. من المنطقة الصناعية سيدي غانم، تحضّر الدار وتعبّئ محصول أحواض الزيتون في البلاد — وقد نشرت بنفسها شعار خمسة وثلاثين عاماً من الطموح في خدمة زبائنها.",
    p2: "لا تزال الشركة شركة مساهمة مغربية بإدارة عائلية. وما بدأ داراً للزيتون امتد إلى المشمش والقبار ومائدة المخللات المغربية — والتصدير وجهتها الوحيدة: 99.2% من رقم المعاملات وفق أرقامها المنشورة.",
  },
  timeline: {
    eyebrow: "محطات",
    title: "ثلاثة عقود، اتجاه واحد",
    items: [
      { period: "1989", title: "التأسيس في مراكش", text: "تُسجَّل مراكش توب أغرو للتصدير (سجل تجاري 5709) — شركة عائلية وُلدت للتصدير منذ اليوم الأول." },
      { period: "التسعينيات–الألفينيات", title: "مصنع سيدي غانم", text: "تبني الدار موقعاً من 40,000 م² منها 20,000 م² مغطاة، وتنشر استثماراً قدره 11 مليون دولار في أداتها الصناعية." },
      { period: "الألفينيات", title: "Kamil حول العالم", text: "تصل علامة Kamil إلى ثمانية عشر سوقاً منشوراً في خمس قارات، من كندا إلى أستراليا." },
      { period: "اليوم", title: "بين كبريات الشركات المغربية", text: "تضع بيانات OMPIC المنشورة عبر Maroc1000 الشركة بين أكبر 1,000 شركة مغربية برقم معاملات يناهز 100 مليون درهم." },
    ],
  },
  leadership: {
    eyebrow: "الإدارة",
    title: "إدارة عائلية",
    people: [
      { name: "أحمد بنيس", role: "الرئيس" },
      { name: "كمال بنيس", role: "المدير العام ومسؤول التصدير" },
    ],
    note: "المجموعة الأم كما تسجلها الأدلة التجارية: مجموعة بنيس.",
  },
  sector: {
    eyebrow: "الأرض والقطاع",
    title: "المغرب، بلد الزيتون",
    p1: "تمثل البيشولين المغربية — وهي صنف مزدوج الغرض للمائدة والزيت — نحو 90% من بساتين المغرب. ويمتد الموسم من سبتمبر إلى يناير: الأخضر أولاً، ثم الأسود بعد أن يسودّ على الشجرة.",
    p2: "بإنتاج سنوي من زيتون المائدة يقارب 120–130 ألف طن وصادرات تناهز 80 ألف طن، يقف المغرب بين أوائل الدول المصدّرة لزيتون المائدة في العالم.",
    source: "أرقام القطاع: المجلس الدولي للزيتون (2023)؛ حصة الصنف: مجلة OCL.",
  },
  facilities: {
    eyebrow: "المنشآت",
    title: "الأداة الصناعية",
    lede: "ساحات تخمير وقاعات فرز وخطوط تعبئة وأوتوكلاف ومختبر داخلي — السلسلة كلها تحت سقف واحد في سيدي غانم.",
    galleryCaption: "المصنع في العمل — أرشيف توب أغرو",
  },
  location: {
    eyebrow: "موقعنا",
    title: "سيدي غانم، مراكش",
    lines: [
      "شركة مراكش توب أغرو للتصدير",
      "القطعة 160، المنطقة الصناعية الجديدة سيدي غانم — طريق آسفي",
      "ص.ب 641، جليز، 40000 مراكش، المغرب",
    ],
    mapCaption: "مخطط الوصول إلى المصنع — أرشيف توب أغرو",
  },
};

export const company: Record<Locale, CompanyContent> = { en, fr, ar };
