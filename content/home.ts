import type { Locale } from "@/lib/i18n";

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: [string, string];
    lede: string;
    marqueeLabel: string;
  };
  manifesto: {
    eyebrow: string;
    big: string;
    body1: string;
    body2: string;
    archiveCaption: string;
    link: string;
  };
  chain: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: { title: string; text: string }[];
    cta: string;
  };
  products: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { key: "olives" | "apricots" | "capers"; title: string; range: string; text: string }[];
  };
  figures: {
    eyebrow: string;
    title: string;
    stats: { value: string; label: string; sub?: string }[];
    footnote: string;
  };
  map: { eyebrow: string; title: string; lede: string; origin: string; cta: string };
  quality: {
    eyebrow: string;
    title: string;
    body: string;
    standards: { name: string; note: string }[];
    smallPrint: string;
    cta: string;
    archiveCaption: string;
  };
  brands: {
    eyebrow: string;
    title: string;
    lede: string;
    marks: { name: string; note: string }[];
    cta: string;
  };
  band: { title: string; lede: string; cta: string };
}

const en: HomeContent = {
  hero: {
    eyebrow: "Marrakech Top Agro Export · Est. 1989 · Morocco",
    title: ["Moroccan harvests.", "Global tables."],
    lede: "Table olives, apricots and capers — cured, prepared and packed at industrial scale in Marrakech, shipped to buyers across five continents for more than three decades.",
    marqueeLabel: "Export markets, as published by the company",
  },
  manifesto: {
    eyebrow: "The house",
    big: "Green or black, the olive is one and the same fruit — Morocco's tree of life. We have selected, cured and shipped its finest for over thirty-five years.",
    body1: "Marrakech Top Agro Export S.A. is a family-founded Moroccan exporter built around a single discipline: taking the harvest of Morocco's olive basins — from the Rif down to the Souss valley — and turning it into food that travels.",
    body2: "From the plant in Marrakech's Sidi Ghanem industrial zone, export drums, tins and prepared recipes leave for importers, wholesalers and food-service suppliers around the world.",
    archiveCaption: "The Sidi Ghanem plant — Top Agro company archive",
    link: "Our company",
  },
  chain: {
    eyebrow: "From soil to ship",
    title: "One unbroken chain",
    lede: "Every container that leaves Marrakech is the end of a chain the house controls from orchard contract to bill of lading.",
    steps: [
      { title: "Terroir", text: "Olives ripen in Morocco's sun from the Rif to the Souss valley — one fruit, picked green or left to darken on the tree." },
      { title: "Harvest", text: "Picked from September to January. Green olives bruise easily, so they are gathered with infinite care." },
      { title: "Curing & selection", text: "Fermented in brine, graded and calibrated — the largest fruit is reserved for the table." },
      { title: "Quality control", text: "HACCP-based control at every step against physical, chemical and biological risk." },
      { title: "Packing", text: "Drums, cans and vacuum packs — pasteurised or sterilised to the specification of each market." },
      { title: "Export", text: "Consolidated by the container, documented and shipped. 99.2% of turnover comes from export." },
    ],
    cta: "See the full process",
  },
  products: {
    eyebrow: "Products",
    title: "Three crops, one standard",
    lede: "A range built for importers: bulk for processors, tins for food service and retail, recipes for the delicatessen counter.",
    items: [
      {
        key: "olives",
        title: "Table olives",
        range: "Bulk drums · cans · prepared recipes",
        text: "Whole, pitted, sliced or stuffed; green, black and Greek-style — in 175 kg export drums, food-service tins and eight prepared recipes.",
      },
      {
        key: "apricots",
        title: "Apricots",
        range: "Pâtisserie · food service",
        text: "Apricot halves in light syrup — 100% hand-cut, crown-packed in the tin, calibrated from 10.5 to 24.5 grams.",
      },
      {
        key: "capers",
        title: "Capers & specialties",
        range: "Capers · variants · preserved lemons · peppers",
        text: "The Moroccan table beyond the olive: capers, olive variants, preserved lemons and hot peppers complete the range.",
      },
    ],
  },
  figures: {
    eyebrow: "At a glance",
    title: "The industrial footprint",
    stats: [
      { value: "99.2%", label: "of turnover from export" },
      { value: "12,000 t", label: "olives processed" },
      { value: "3,000 t", label: "apricots processed" },
      { value: "300 t", label: "capers processed" },
      { value: "40,000 m²", label: "site in Sidi Ghanem", sub: "20,000 m² covered" },
      { value: "250", label: "people at the plant" },
      { value: "$11 M", label: "invested in the facility" },
      { value: "18", label: "export markets" },
    ],
    footnote: "Company-published operating figures, as stated by Marrakech Top Agro Export on top-agro.com.",
  },
  map: {
    eyebrow: "Reach",
    title: "From Marrakech to eighteen markets",
    lede: "Europe, the Americas, the Middle East, Africa and Oceania — routes per the company's published market list.",
    origin: "Marrakech",
    cta: "Explore export",
  },
  quality: {
    eyebrow: "Quality",
    title: "Food safety is the product",
    body: "The house runs HACCP-based control across reception, fermentation, sorting, filling and heat treatment — pasteurisation or sterilisation to each product's specification, checked in the plant's own laboratory.",
    standards: [
      { name: "HACCP", note: "hazard control at every production step" },
      { name: "ISO 22000", note: "food-safety management system" },
      { name: "Kosher", note: "certified production" },
      { name: "US FDA", note: "facility registration for US export" },
    ],
    smallPrint: "Standards as published by the company and listed in trade-directory records.",
    cta: "Process & quality",
    archiveCaption: "Laboratory control — Top Agro company archive",
  },
  brands: {
    eyebrow: "Brands",
    title: "Three marks, one house",
    lede: "From the classic canned range to regional table brands, the house ships under its own labels — and under yours.",
    marks: [
      { name: "Kamil", note: "The house retail brand, on the cans and labels of the classic range" },
      { name: "Ouchka", note: "House brand" },
      { name: "Bab Essalam", note: "House brand" },
    ],
    cta: "Discover the brands",
  },
  band: {
    title: "Have a market in mind?",
    lede: "Tell us the product, the format and the destination — the export desk will come back to you.",
    cta: "Request a quotation",
  },
};

const fr: HomeContent = {
  hero: {
    eyebrow: "Marrakech Top Agro Export · Depuis 1989 · Maroc",
    title: ["Récoltes marocaines.", "Tables du monde."],
    lede: "Olives de table, abricots et câpres — préparés et conditionnés à l'échelle industrielle à Marrakech, expédiés vers cinq continents depuis plus de trois décennies.",
    marqueeLabel: "Marchés d'exportation, tels que publiés par l'entreprise",
  },
  manifesto: {
    eyebrow: "La maison",
    big: "Verte ou noire, l'olive est un seul et même fruit — l'arbre de vie du Maroc. Nous sélectionnons, préparons et expédions les meilleures depuis plus de trente-cinq ans.",
    body1: "Marrakech Top Agro Export S.A. est un exportateur marocain d'origine familiale, bâti autour d'une seule discipline : transformer la récolte des bassins oléicoles du Maroc — du Rif jusqu'à la vallée du Souss — en produits qui voyagent.",
    body2: "Depuis l'usine de la zone industrielle de Sidi Ghanem à Marrakech, fûts export, boîtes et recettes préparées partent vers importateurs, grossistes et fournisseurs de la restauration du monde entier.",
    archiveCaption: "L'usine de Sidi Ghanem — archives Top Agro",
    link: "L'entreprise",
  },
  chain: {
    eyebrow: "De la terre au navire",
    title: "Une chaîne ininterrompue",
    lede: "Chaque conteneur qui quitte Marrakech est l'aboutissement d'une chaîne que la maison maîtrise du verger au connaissement.",
    steps: [
      { title: "Terroir", text: "Du Rif à la vallée du Souss, les olives mûrissent au soleil du Maroc — un même fruit, cueilli vert ou noirci sur l'arbre." },
      { title: "Récolte", text: "Cueillies de septembre à janvier. Les olives vertes sont fragiles : elles se récoltent avec d'infinies précautions." },
      { title: "Sélection & confisage", text: "Fermentées en saumure, triées et calibrées — les plus gros fruits sont réservés à la table." },
      { title: "Contrôle qualité", text: "Une maîtrise fondée sur l'HACCP à chaque étape, contre les risques physiques, chimiques et biologiques." },
      { title: "Conditionnement", text: "Fûts, boîtes et sous-vide — pasteurisés ou stérilisés selon la spécification de chaque marché." },
      { title: "Export", text: "Consolidé par conteneur, documenté, expédié. 99,2 % du chiffre d'affaires vient de l'export." },
    ],
    cta: "Voir tout le process",
  },
  products: {
    eyebrow: "Produits",
    title: "Trois cultures, une exigence",
    lede: "Une gamme pensée pour les importateurs : le vrac pour les transformateurs, la boîte pour la restauration et la distribution, les recettes pour le rayon traiteur.",
    items: [
      {
        key: "olives",
        title: "Olives de table",
        range: "Vrac en fûts · boîtes · recettes préparées",
        text: "Entières, dénoyautées, en rondelles ou farcies ; vertes, noires et façon Grèce — en fûts export de 175 kg, boîtes restauration et huit recettes préparées.",
      },
      {
        key: "apricots",
        title: "Abricots",
        range: "Pâtisserie · restauration",
        text: "Oreillons au sirop léger — 100 % coupés à la main, rangés en couronne dans la boîte, calibrés de 10,5 à 24,5 grammes.",
      },
      {
        key: "capers",
        title: "Câpres & spécialités",
        range: "Câpres · variantes · citrons confits · piments",
        text: "La table marocaine au-delà de l'olive : câpres, variantes d'olives, citrons confits et piments complètent la gamme.",
      },
    ],
  },
  figures: {
    eyebrow: "En bref",
    title: "L'empreinte industrielle",
    stats: [
      { value: "99,2 %", label: "du chiffre d'affaires à l'export" },
      { value: "12 000 t", label: "d'olives traitées" },
      { value: "3 000 t", label: "d'abricots traités" },
      { value: "300 t", label: "de câpres traitées" },
      { value: "40 000 m²", label: "de site à Sidi Ghanem", sub: "dont 20 000 m² couverts" },
      { value: "250", label: "personnes à l'usine" },
      { value: "11 M$", label: "investis dans l'outil industriel" },
      { value: "18", label: "marchés d'exportation" },
    ],
    footnote: "Chiffres d'exploitation publiés par Marrakech Top Agro Export sur top-agro.com.",
  },
  map: {
    eyebrow: "Rayonnement",
    title: "De Marrakech vers dix-huit marchés",
    lede: "Europe, Amériques, Moyen-Orient, Afrique et Océanie — les routes selon la liste de marchés publiée par l'entreprise.",
    origin: "Marrakech",
    cta: "Découvrir l'export",
  },
  quality: {
    eyebrow: "Qualité",
    title: "La sécurité alimentaire est le produit",
    body: "La maison applique une maîtrise fondée sur l'HACCP de la réception à la fermentation, du tri au remplissage et au traitement thermique — pasteurisation ou stérilisation selon la spécification de chaque produit, contrôlées au laboratoire de l'usine.",
    standards: [
      { name: "HACCP", note: "maîtrise des risques à chaque étape" },
      { name: "ISO 22000", note: "management de la sécurité alimentaire" },
      { name: "Kosher", note: "production certifiée" },
      { name: "US FDA", note: "enregistrement de l'établissement pour l'export américain" },
    ],
    smallPrint: "Référentiels tels que publiés par l'entreprise et recensés dans les annuaires professionnels.",
    cta: "Process & qualité",
    archiveCaption: "Contrôle en laboratoire — archives Top Agro",
  },
  brands: {
    eyebrow: "Marques",
    title: "Trois marques, une maison",
    lede: "De la gamme appertisée classique aux marques de table régionales, la maison expédie sous ses propres étiquettes — et sous les vôtres.",
    marks: [
      { name: "Kamil", note: "La marque de la maison, sur les boîtes et étiquettes de la gamme classique" },
      { name: "Ouchka", note: "Marque de la maison" },
      { name: "Bab Essalam", note: "Marque de la maison" },
    ],
    cta: "Découvrir les marques",
  },
  band: {
    title: "Un marché en tête ?",
    lede: "Dites-nous le produit, le format et la destination — le bureau export vous répond.",
    cta: "Demander une cotation",
  },
};

const ar: HomeContent = {
  hero: {
    eyebrow: "مراكش توب أغرو للتصدير · منذ 1989 · المغرب",
    title: ["محاصيل مغربية.", "موائد العالم."],
    lede: "زيتون المائدة والمشمش والقبار — يُحضَّر ويُعبَّأ على نطاق صناعي في مراكش، ويُشحن إلى المشترين في خمس قارات منذ أكثر من ثلاثة عقود.",
    marqueeLabel: "أسواق التصدير كما نشرتها الشركة",
  },
  manifesto: {
    eyebrow: "الدار",
    big: "أخضر كان أم أسود، الزيتون ثمرة واحدة — شجرة الحياة في المغرب. نحن ننتقي أجودها ونحضّرها ونصدّرها منذ أكثر من خمسة وثلاثين عاماً.",
    body1: "مراكش توب أغرو للتصدير شركة مغربية ذات جذور عائلية، بُنيت حول حرفة واحدة: تحويل محصول أحواض الزيتون المغربية — من الريف إلى وادي سوس — إلى غذاء يعبر البحار.",
    body2: "من المصنع في المنطقة الصناعية سيدي غانم بمراكش، تنطلق براميل التصدير والعلب والوصفات المحضّرة نحو المستوردين وتجار الجملة وموردي المطاعم حول العالم.",
    archiveCaption: "مصنع سيدي غانم — أرشيف توب أغرو",
    link: "عن الشركة",
  },
  chain: {
    eyebrow: "من التربة إلى السفينة",
    title: "سلسلة لا تنقطع",
    lede: "كل حاوية تغادر مراكش هي خاتمة سلسلة تتحكم فيها الدار من عقد البستان إلى بوليصة الشحن.",
    steps: [
      { title: "الأرض", text: "من الريف إلى وادي سوس، ينضج الزيتون تحت شمس المغرب — ثمرة واحدة، تُقطف خضراء أو تُترك لتسودّ على الشجرة." },
      { title: "القطاف", text: "يُقطف من سبتمبر إلى يناير. الزيتون الأخضر رقيق، فيُجمع بعناية بالغة." },
      { title: "التخليل والانتقاء", text: "يُخمَّر في المحلول الملحي ويُفرز ويُعاير — وتُحجز أكبر الثمار للمائدة." },
      { title: "مراقبة الجودة", text: "ضبط قائم على نظام HACCP في كل مرحلة ضد المخاطر الفيزيائية والكيميائية والبيولوجية." },
      { title: "التعبئة", text: "براميل وعلب وتغليف مفرَّغ — بسترة أو تعقيم وفق مواصفات كل سوق." },
      { title: "التصدير", text: "يُجمَّع بالحاوية ويُوثَّق ويُشحن. 99.2% من رقم المعاملات من التصدير." },
    ],
    cta: "اطّلع على كامل العملية",
  },
  products: {
    eyebrow: "المنتجات",
    title: "ثلاثة محاصيل، معيار واحد",
    lede: "تشكيلة صُممت للمستوردين: السائب للمصنّعين، والعلب للمطاعم والتوزيع، والوصفات لأركان الأطعمة الفاخرة.",
    items: [
      {
        key: "olives",
        title: "زيتون المائدة",
        range: "براميل سائب · علب · وصفات محضّرة",
        text: "كامل أو منزوع النوى أو شرائح أو محشو؛ أخضر وأسود وعلى الطريقة اليونانية — في براميل تصدير 175 كغ وعلب المطاعم وثماني وصفات محضّرة.",
      },
      {
        key: "apricots",
        title: "المشمش",
        range: "الحلويات · المطاعم",
        text: "أنصاف مشمش في شراب خفيف — مقطوعة يدوياً 100% ومرصوصة على شكل تاج في العلبة، بمعايرة من 10.5 إلى 24.5 غراماً.",
      },
      {
        key: "capers",
        title: "القبار والتخصصات",
        range: "قبار · تشكيلات · ليمون مخلل · فلفل حار",
        text: "المائدة المغربية بما يتجاوز الزيتون: القبار وتشكيلات الزيتون والليمون المخلل والفلفل الحار تكمل التشكيلة.",
      },
    ],
  },
  figures: {
    eyebrow: "في لمحة",
    title: "البصمة الصناعية",
    stats: [
      { value: "99.2%", label: "من رقم المعاملات من التصدير" },
      { value: "12,000 طن", label: "من الزيتون المعالَج" },
      { value: "3,000 طن", label: "من المشمش المعالَج" },
      { value: "300 طن", label: "من القبار المعالَج" },
      { value: "40,000 م²", label: "مساحة الموقع في سيدي غانم", sub: "منها 20,000 م² مغطاة" },
      { value: "250", label: "عاملاً في المصنع" },
      { value: "11 مليون $", label: "استثمارات في المنشأة" },
      { value: "18", label: "سوق تصدير" },
    ],
    footnote: "أرقام تشغيلية نشرتها مراكش توب أغرو للتصدير على موقع top-agro.com.",
  },
  map: {
    eyebrow: "الانتشار",
    title: "من مراكش إلى ثمانية عشر سوقاً",
    lede: "أوروبا والأمريكتان والشرق الأوسط وإفريقيا وأوقيانوسيا — وفق قائمة الأسواق التي نشرتها الشركة.",
    origin: "مراكش",
    cta: "اكتشف التصدير",
  },
  quality: {
    eyebrow: "الجودة",
    title: "سلامة الغذاء هي المنتج",
    body: "تطبّق الدار ضبطاً قائماً على HACCP من الاستلام إلى التخمير والفرز والتعبئة والمعالجة الحرارية — بسترة أو تعقيم وفق مواصفات كل منتج، تحت رقابة مختبر المصنع.",
    standards: [
      { name: "HACCP", note: "ضبط المخاطر في كل مرحلة إنتاج" },
      { name: "ISO 22000", note: "نظام إدارة سلامة الغذاء" },
      { name: "كوشير", note: "إنتاج معتمد" },
      { name: "US FDA", note: "تسجيل المنشأة للتصدير إلى الولايات المتحدة" },
    ],
    smallPrint: "معايير كما نشرتها الشركة ووردت في سجلات الأدلة التجارية.",
    cta: "الجودة والتصنيع",
    archiveCaption: "مراقبة مخبرية — أرشيف توب أغرو",
  },
  brands: {
    eyebrow: "العلامات",
    title: "ثلاث علامات، دار واحدة",
    lede: "من التشكيلة المعلّبة الكلاسيكية إلى علامات المائدة الإقليمية، تشحن الدار تحت علاماتها — وتحت علامتكم.",
    marks: [
      { name: "Kamil", note: "علامة الدار التجارية، على علب التشكيلة الكلاسيكية وملصقاتها" },
      { name: "Ouchka", note: "علامة الدار" },
      { name: "Bab Essalam", note: "علامة الدار" },
    ],
    cta: "اكتشف العلامات",
  },
  band: {
    title: "لديكم سوق في البال؟",
    lede: "أخبرونا بالمنتج والحجم والوجهة — وسيتواصل معكم مكتب التصدير.",
    cta: "اطلب عرض سعر",
  },
};

export const home: Record<Locale, HomeContent> = { en, fr, ar };
