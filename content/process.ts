import type { Locale } from "@/lib/i18n";

export interface ProcessContent {
  metaTitle: string;
  hero: { eyebrow: string; title: string; lede: string };
  steps: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { title: string; text: string; archive: string }[];
  };
  haccp: { eyebrow: string; title: string; quote: string; body: string };
  standards: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { name: string; note: string }[];
    smallPrint: string;
  };
  band: { title: string; lede: string; cta: string };
}

const en: ProcessContent = {
  metaTitle: "Process & Quality",
  hero: {
    eyebrow: "Process & quality",
    title: "From intake to bill of lading",
    lede: "Seven controlled stages between the orchard and the container — each one documented in the company's own published material.",
  },
  steps: {
    eyebrow: "The chain",
    title: "Seven stages, one standard",
    lede: "Photographs are from the company's own archive.",
    items: [
      {
        title: "Reception & first grading",
        text: "Fruit arrives from September to January and is graded on arrival; the largest calibres are set aside for the table.",
        archive: "Green olives at the sorting pan — company archive",
      },
      {
        title: "Fermentation & curing",
        text: "Olives ferment in brine in the plant's outdoor vat yard, the slow step that fixes texture and taste.",
        archive: "The fermentation yard — company archive",
      },
      {
        title: "Sorting & calibration",
        text: "Hand sorting and mechanical grading bring each lot to a constant calibre before preparation.",
        archive: "Hand-sorting tables — company archive",
      },
      {
        title: "Preparation",
        text: "Whole, pitted, sliced, stuffed or slashed; eight prepared recipes carry the flavours of the Moroccan table.",
        archive: "Grading conveyor — company archive",
      },
      {
        title: "Filling & heat treatment",
        text: "Tins are filled and heat-treated to the article's published values — pasteurisation at 95 °C for green olives, sterilisation at 121.1 °C for black.",
        archive: "Filling line and autoclaves — company archive",
      },
      {
        title: "Laboratory control",
        text: "The in-plant laboratory checks free acidity, pH at equilibrium and brine strength against each article's specification.",
        archive: "Laboratory bench — company archive",
      },
      {
        title: "Packing & loading",
        text: "Cartons and drums are consolidated to published container plans — up to 1,700 cartons or 80 drums per twenty-foot box.",
        archive: "Export drums awaiting loading — company archive",
      },
    ],
  },
  haccp: {
    eyebrow: "HACCP",
    title: "Analyse every step",
    quote:
      "The HACCP system analyses each step of the production process with one overriding aim: bringing the final consumer a safe, reliable product.",
    body: "In the company's published words, the system minimises physical, chemical and biological risk while guaranteeing the stability and quality of the product. It is the frame around everything the plant does — and the language the house shares with every food-safety auditor.",
  },
  standards: {
    eyebrow: "Standards",
    title: "Certified, registered, audited",
    lede: "The standards the company publishes and trade directories record.",
    items: [
      { name: "ISO 22000", note: "Food-safety management system — the directory-listed backbone of plant control." },
      { name: "HACCP", note: "Hazard analysis at every production step, published by the company since its earliest material." },
      { name: "Kosher", note: "Directory-listed certification for kosher programmes." },
      { name: "US FDA", note: "Facility registration supporting documented shipments to US importers. Not an approval mark." },
    ],
    smallPrint:
      "Standards as published by the company and listed in trade-directory records (Kerix). Certificate copies should be requested from the export office.",
  },
  band: {
    title: "Audit us with a question",
    lede: "Ask for the specification sheet of any article — the export desk answers with the published values.",
    cta: "Ask the export desk",
  },
};

const fr: ProcessContent = {
  metaTitle: "Process & Qualité",
  hero: {
    eyebrow: "Process & qualité",
    title: "De la réception au connaissement",
    lede: "Sept étapes maîtrisées entre le verger et le conteneur — chacune documentée dans les publications de l'entreprise.",
  },
  steps: {
    eyebrow: "La chaîne",
    title: "Sept étapes, une exigence",
    lede: "Les photographies proviennent des archives de l'entreprise.",
    items: [
      {
        title: "Réception & premier tri",
        text: "Les fruits arrivent de septembre à janvier et sont triés dès réception ; les plus gros calibres sont réservés à la table.",
        archive: "Olives vertes au bac de tri — archives de l'entreprise",
      },
      {
        title: "Fermentation & confisage",
        text: "Les olives fermentent en saumure dans le parc de cuves de l'usine — l'étape lente qui fixe texture et goût.",
        archive: "Le parc de fermentation — archives de l'entreprise",
      },
      {
        title: "Tri & calibrage",
        text: "Tri manuel et calibrage mécanique amènent chaque lot à un calibre constant avant préparation.",
        archive: "Tables de tri manuel — archives de l'entreprise",
      },
      {
        title: "Préparation",
        text: "Entières, dénoyautées, en rondelles, farcies ou tailladées ; huit recettes préparées portent les saveurs de la table marocaine.",
        archive: "Convoyeur de calibrage — archives de l'entreprise",
      },
      {
        title: "Remplissage & traitement thermique",
        text: "Les boîtes sont remplies puis traitées aux barèmes publiés par article — pasteurisation à 95 °C pour les vertes, stérilisation à 121,1 °C pour les noires.",
        archive: "Ligne de remplissage et autoclaves — archives de l'entreprise",
      },
      {
        title: "Contrôle laboratoire",
        text: "Le laboratoire intégré vérifie acidité libre, pH d'équilibre et sel de saumure contre la spécification de chaque article.",
        archive: "Paillasse du laboratoire — archives de l'entreprise",
      },
      {
        title: "Emballage & chargement",
        text: "Cartons et fûts sont consolidés selon les plans de conteneur publiés — jusqu'à 1 700 cartons ou 80 fûts par vingt pieds.",
        archive: "Fûts export en attente de chargement — archives de l'entreprise",
      },
    ],
  },
  haccp: {
    eyebrow: "HACCP",
    title: "Analyser chaque étape",
    quote:
      "Le système HACCP analyse chaque étape du processus de production avec une seule finalité : amener au consommateur final un produit sûr et fiable.",
    body: "Dans les termes publiés par l'entreprise, le système réduit au maximum les risques physiques, chimiques et biologiques tout en garantissant la stabilité et la qualité du produit. C'est le cadre de tout ce que fait l'usine — et la langue commune avec chaque auditeur de sécurité alimentaire.",
  },
  standards: {
    eyebrow: "Référentiels",
    title: "Certifiée, enregistrée, auditée",
    lede: "Les référentiels que l'entreprise publie et que recensent les annuaires professionnels.",
    items: [
      { name: "ISO 22000", note: "Management de la sécurité alimentaire — colonne vertébrale du contrôle usine, recensée en annuaire." },
      { name: "HACCP", note: "Analyse des dangers à chaque étape, publiée par l'entreprise depuis ses premiers supports." },
      { name: "Kosher", note: "Certification recensée pour les programmes casher." },
      { name: "US FDA", note: "Enregistrement de l'établissement, à l'appui d'expéditions documentées vers des importateurs américains. Ce n'est pas une marque d'approbation." },
    ],
    smallPrint:
      "Référentiels tels que publiés par l'entreprise et recensés dans les annuaires professionnels (Kerix). Les copies de certificats sont à demander au bureau export.",
  },
  band: {
    title: "Auditez-nous d'une question",
    lede: "Demandez la fiche technique de n'importe quel article — le bureau export répond avec les valeurs publiées.",
    cta: "Interroger le bureau export",
  },
};

const ar: ProcessContent = {
  metaTitle: "الجودة والتصنيع",
  hero: {
    eyebrow: "الجودة والتصنيع",
    title: "من الاستلام إلى بوليصة الشحن",
    lede: "سبع مراحل مضبوطة بين البستان والحاوية — كل واحدة موثّقة في منشورات الشركة نفسها.",
  },
  steps: {
    eyebrow: "السلسلة",
    title: "سبع مراحل، معيار واحد",
    lede: "الصور من أرشيف الشركة نفسها.",
    items: [
      { title: "الاستلام والفرز الأول", text: "تصل الثمار من سبتمبر إلى يناير وتُفرز فور وصولها؛ وتُحجز أكبر العيارات للمائدة.", archive: "زيتون أخضر في حوض الفرز — أرشيف الشركة" },
      { title: "التخمير والكبس", text: "يتخمر الزيتون في المحلول الملحي في ساحة الأحواض الخارجية — المرحلة البطيئة التي تثبّت القوام والمذاق.", archive: "ساحة التخمير — أرشيف الشركة" },
      { title: "الفرز والمعايرة", text: "فرز يدوي ومعايرة آلية يوصلان كل لوط إلى عيار ثابت قبل التحضير.", archive: "طاولات الفرز اليدوي — أرشيف الشركة" },
      { title: "التحضير", text: "كامل أو منزوع النوى أو شرائح أو محشو أو مشرَّط؛ وثماني وصفات تحمل نكهات المائدة المغربية.", archive: "ناقل المعايرة — أرشيف الشركة" },
      { title: "التعبئة والمعالجة الحرارية", text: "تُملأ العلب وتُعالج حرارياً بالقيم المنشورة لكل صنف — بسترة عند 95° للأخضر وتعقيم عند 121.1° للأسود.", archive: "خط التعبئة والأوتوكلاف — أرشيف الشركة" },
      { title: "الرقابة المخبرية", text: "يتحقق مختبر المصنع من الحموضة الحرة ودرجة pH وملوحة المحلول وفق مواصفة كل صنف.", archive: "منضدة المختبر — أرشيف الشركة" },
      { title: "التغليف والتحميل", text: "تُجمَّع الكراتين والبراميل وفق مخططات الحاويات المنشورة — حتى 1,700 كرتون أو 80 برميلاً في حاوية عشرين قدماً.", archive: "براميل تصدير في انتظار التحميل — أرشيف الشركة" },
    ],
  },
  haccp: {
    eyebrow: "HACCP",
    title: "حلّل كل مرحلة",
    quote: "يحلل نظام HACCP كل مرحلة من مراحل الإنتاج بهدف واحد: إيصال منتج آمن وموثوق إلى المستهلك النهائي.",
    body: "بكلمات الشركة المنشورة، يقلّص النظام المخاطر الفيزيائية والكيميائية والبيولوجية إلى أدنى حد مع ضمان استقرار المنتج وجودته. إنه إطار كل ما يفعله المصنع — واللغة المشتركة مع كل مدقق لسلامة الغذاء.",
  },
  standards: {
    eyebrow: "المعايير",
    title: "معتمدة، مسجلة، مدققة",
    lede: "المعايير التي تنشرها الشركة وتسجلها الأدلة التجارية.",
    items: [
      { name: "ISO 22000", note: "نظام إدارة سلامة الغذاء — العمود الفقري لضبط المصنع كما تسجله الأدلة." },
      { name: "HACCP", note: "تحليل المخاطر في كل مرحلة إنتاج، تنشره الشركة منذ أقدم موادها." },
      { name: "كوشير", note: "اعتماد مسجل في الأدلة لبرامج الكوشير." },
      { name: "US FDA", note: "تسجيل المنشأة الداعم لشحنات موثّقة إلى مستوردين أمريكيين. وليس علامة اعتماد." },
    ],
    smallPrint: "المعايير كما نشرتها الشركة وسجلتها الأدلة التجارية (Kerix). نسخ الشهادات تُطلب من مكتب التصدير.",
  },
  band: {
    title: "دقّقوا علينا بسؤال",
    lede: "اطلبوا البطاقة التقنية لأي صنف — يجيب مكتب التصدير بالقيم المنشورة.",
    cta: "اسأل مكتب التصدير",
  },
};

export const processContent: Record<Locale, ProcessContent> = { en, fr, ar };
