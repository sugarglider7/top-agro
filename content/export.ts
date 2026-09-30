import type { Locale } from "@/lib/i18n";

export interface ExportContent {
  metaTitle: string;
  hero: { eyebrow: string; title: string; lede: string };
  brief: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { q: string; a: string }[];
  };
  map: { eyebrow: string; title: string; lede: string; origin: string; note: string };
  shipment: {
    eyebrow: string;
    title: string;
    lede: string;
    facts: { label: string; value: string }[];
    source: string;
  };
  buyers: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  band: { title: string; lede: string; cta: string };
}

const en: ExportContent = {
  metaTitle: "Export",
  hero: {
    eyebrow: "Export",
    title: "Built to supply your market",
    lede: "Export is not a department here — it is the company. 99.2% of turnover ships abroad, by the company's own published figures.",
  },
  brief: {
    eyebrow: "The sixty-second brief",
    title: "What a buyer needs to know",
    lede: "Eight questions every procurement desk asks — answered before the first call.",
    items: [
      {
        q: "Who are you?",
        a: "Marrakech Top Agro Export S.A. — a family-founded Moroccan société anonyme (capital 10 M MAD, RC 5709 Marrakech), established in 1989 in the Sidi Ghanem industrial zone. Ahmed Bennis presides; Kamil Bennis directs the company and its export desk.",
      },
      {
        q: "What do you produce?",
        a: "Table olives in every trade form — bulk drums, cans, prepared recipes — plus hand-cut apricot halves in light syrup, capers and Moroccan table specialties.",
      },
      {
        q: "How large are you?",
        a: "Company-published: a 40,000 m² site with 20,000 m² covered, 250 people and 12,000 t of olives processed. Independently: ranked among Morocco's 1,000 largest companies by revenue (Maroc1000, on OMPIC filings).",
      },
      {
        q: "Where do you export?",
        a: "Eighteen company-published markets across five continents — from Canada and Brazil to Finland, Saudi Arabia, South Africa and Australia. Trade directories record the EU, Middle East and North America as active zones.",
      },
      {
        q: "How is quality controlled?",
        a: "HACCP-based control from reception to dispatch, with published heat-treatment values per article — 95 °C pasteurisation for green olives, 121.1 °C sterilisation for black — verified in the plant's own laboratory.",
      },
      {
        q: "What standards do you hold?",
        a: "ISO 22000, HACCP and Kosher, with US FDA facility registration for American shipments — as published by the company and listed in trade-directory records.",
      },
      {
        q: "What packaging can you supply?",
        a: "Export drums of 120–190 kg, tins from 225 g retail to 2 750 g food-service, A10 catering cans and 5 kg vacuum pouches — with published carton and container loads per article.",
      },
      {
        q: "Who do we contact?",
        a: "The export office in Marrakech — direction Kamil Bennis. Phones, emails and a structured enquiry form are on the contact page; enquiries are handled in English, French and Arabic.",
      },
    ],
  },
  map: {
    eyebrow: "Markets",
    title: "Eighteen markets, five continents",
    lede: "Hover a market to trace its route from Marrakech.",
    origin: "Marrakech",
    note: "Market list as published by the company on top-agro.com; current programmes on request.",
  },
  shipment: {
    eyebrow: "Documented trade",
    title: "On the water, on the record",
    lede: "Public customs data independently documents the house's shipments — like this bulk consignment of Moroccan cured olives to a New York importer.",
    facts: [
      { label: "Cargo", value: "728 cases · 4 × 11 lb Moroccan cured olives" },
      { label: "HTS code", value: "071120 — olives, provisionally preserved" },
      { label: "Routing", value: "Casablanca → Barcelona → Newark" },
      { label: "Consignee", value: "Mediterranean-foods importer, New York" },
    ],
    source: "US import record, May 2014 — public customs data (Seair).",
  },
  buyers: {
    eyebrow: "Who we supply",
    title: "Four kinds of buyer, four kinds of pack",
    items: [
      { title: "Importers & distributors", text: "Mixed-container programmes across the canned and prepared ranges, under house labels." },
      { title: "Industrial processors", text: "Ingredient-grade olives in 120–190 kg export drums, eighty to the container." },
      { title: "Food service & catering", text: "5/1 and A10 tins, 5 kg vacuum pouches and catering apricot packs." },
      { title: "Retail programmes", text: "1/2 and 4/4 tins from the classic canned range, under the Kamil label." },
    ],
  },
  band: {
    title: "Put us on your next tender",
    lede: "Send the product, format and destination — the export desk responds with specifications and availability.",
    cta: "Start an export enquiry",
  },
};

const fr: ExportContent = {
  metaTitle: "Export",
  hero: {
    eyebrow: "Export",
    title: "Conçu pour approvisionner votre marché",
    lede: "L'export n'est pas ici un service — c'est l'entreprise. 99,2 % du chiffre d'affaires part à l'étranger, selon les chiffres publiés par la maison.",
  },
  brief: {
    eyebrow: "Le brief en soixante secondes",
    title: "Ce qu'un acheteur doit savoir",
    lede: "Les huit questions que pose tout service achats — avec les réponses, avant le premier appel.",
    items: [
      {
        q: "Qui êtes-vous ?",
        a: "Marrakech Top Agro Export S.A. — société anonyme marocaine d'origine familiale (capital 10 M MAD, RC 5709 Marrakech), établie en 1989 dans la zone industrielle de Sidi Ghanem. Ahmed Bennis préside ; Kamil Bennis dirige l'entreprise et son bureau export.",
      },
      {
        q: "Que produisez-vous ?",
        a: "Des olives de table sous toutes leurs formes — fûts, boîtes, recettes préparées — ainsi que des oreillons d'abricots au sirop léger coupés à la main, des câpres et des spécialités marocaines.",
      },
      {
        q: "Quelle est votre taille ?",
        a: "Chiffres publiés par l'entreprise : un site de 40 000 m² dont 20 000 m² couverts, 250 personnes et 12 000 t d'olives traitées. Indépendamment : classée parmi les 1 000 premières entreprises marocaines par chiffre d'affaires (Maroc1000, sur données OMPIC).",
      },
      {
        q: "Où exportez-vous ?",
        a: "Dix-huit marchés publiés par l'entreprise sur cinq continents — du Canada et du Brésil à la Finlande, l'Arabie saoudite, l'Afrique du Sud et l'Australie. Les annuaires professionnels recensent l'UE, le Moyen-Orient et l'Amérique du Nord comme zones actives.",
      },
      {
        q: "Comment la qualité est-elle maîtrisée ?",
        a: "Une maîtrise fondée sur l'HACCP de la réception à l'expédition, avec des barèmes thermiques publiés par article — pasteurisation à 95 °C pour les vertes, stérilisation à 121,1 °C pour les noires — vérifiés au laboratoire de l'usine.",
      },
      {
        q: "Quels référentiels ?",
        a: "ISO 22000, HACCP et Kosher, avec enregistrement FDA de l'établissement pour les expéditions américaines — tels que publiés par l'entreprise et recensés dans les annuaires professionnels.",
      },
      {
        q: "Quels conditionnements ?",
        a: "Fûts export de 120 à 190 kg, boîtes du 225 g détail à la 5/1 de 2 750 g, A10 collectivités et sachets sous vide de 5 kg — avec cartons et plans de conteneur publiés par article.",
      },
      {
        q: "Qui contacter ?",
        a: "Le bureau export à Marrakech — direction Kamil Bennis. Téléphones, e-mails et formulaire structuré sur la page contact ; les demandes sont traitées en français, anglais et arabe.",
      },
    ],
  },
  map: {
    eyebrow: "Marchés",
    title: "Dix-huit marchés, cinq continents",
    lede: "Survolez un marché pour tracer sa route depuis Marrakech.",
    origin: "Marrakech",
    note: "Liste des marchés telle que publiée par l'entreprise sur top-agro.com ; programmes actuels sur demande.",
  },
  shipment: {
    eyebrow: "Commerce documenté",
    title: "Sur l'eau, et dans les registres",
    lede: "Les données douanières publiques documentent les expéditions de la maison — comme ce lot d'olives marocaines vers un importateur new-yorkais.",
    facts: [
      { label: "Cargaison", value: "728 caisses · 4 × 11 lb d'olives marocaines" },
      { label: "Code SH", value: "071120 — olives conservées provisoirement" },
      { label: "Routage", value: "Casablanca → Barcelone → Newark" },
      { label: "Destinataire", value: "Importateur de produits méditerranéens, New York" },
    ],
    source: "Registre d'importation américain, mai 2014 — données douanières publiques (Seair).",
  },
  buyers: {
    eyebrow: "Qui nous servons",
    title: "Quatre profils d'acheteurs, quatre conditionnements",
    items: [
      { title: "Importateurs & distributeurs", text: "Programmes de conteneurs panachés sur les gammes appertisées et préparées, sous les marques de la maison." },
      { title: "Transformateurs industriels", text: "Olives en qualité ingrédient, fûts export de 120 à 190 kg, quatre-vingts par conteneur." },
      { title: "Restauration & collectivités", text: "Boîtes 5/1 et A10, sachets sous vide de 5 kg et conditionnements abricot pour la restauration." },
      { title: "Programmes de détail", text: "Boîtes 1/2 et 4/4 de la gamme classique, sous l'étiquette Kamil." },
    ],
  },
  band: {
    title: "Mettez-nous sur votre prochain appel d'offres",
    lede: "Envoyez le produit, le format et la destination — le bureau export répond avec spécifications et disponibilités.",
    cta: "Lancer une demande export",
  },
};

const ar: ExportContent = {
  metaTitle: "التصدير",
  hero: {
    eyebrow: "التصدير",
    title: "بُنيت لتموين سوقكم",
    lede: "التصدير هنا ليس قسماً — بل هو الشركة. 99.2% من رقم المعاملات يُشحن إلى الخارج، وفق الأرقام التي نشرتها الدار.",
  },
  brief: {
    eyebrow: "الملخص في ستين ثانية",
    title: "ما يحتاج المشتري إلى معرفته",
    lede: "ثمانية أسئلة يطرحها كل مكتب مشتريات — مع الأجوبة قبل المكالمة الأولى.",
    items: [
      {
        q: "من أنتم؟",
        a: "مراكش توب أغرو للتصدير ش.م. — شركة مغربية ذات جذور عائلية (رأسمال 10 ملايين درهم، سجل تجاري 5709 مراكش)، تأسست سنة 1989 في المنطقة الصناعية سيدي غانم. يرأسها أحمد بنيس، ويدير كمال بنيس الشركة ومكتب التصدير.",
      },
      {
        q: "ماذا تنتجون؟",
        a: "زيتون المائدة بكل أشكاله التجارية — براميل سائبة وعلب ووصفات محضّرة — إضافة إلى أنصاف المشمش المقطوعة يدوياً في شراب خفيف، والقبار والتخصصات المغربية.",
      },
      {
        q: "ما حجمكم؟",
        a: "وفق أرقام الشركة: موقع من 40,000 م² منها 20,000 م² مغطاة، و250 عاملاً و12,000 طن من الزيتون المعالَج. وبشكل مستقل: مصنَّفة بين أكبر 1,000 شركة مغربية من حيث رقم المعاملات (Maroc1000 على بيانات OMPIC).",
      },
      {
        q: "إلى أين تصدّرون؟",
        a: "ثمانية عشر سوقاً نشرتها الشركة في خمس قارات — من كندا والبرازيل إلى فنلندا والسعودية وجنوب إفريقيا وأستراليا. وتسجل الأدلة التجارية الاتحاد الأوروبي والشرق الأوسط وأمريكا الشمالية مناطق نشطة.",
      },
      {
        q: "كيف تُضبط الجودة؟",
        a: "ضبط قائم على HACCP من الاستلام إلى الشحن، بقيم معالجة حرارية منشورة لكل صنف — بسترة عند 95° للأخضر وتعقيم عند 121.1° للأسود — تُتحقق في مختبر المصنع.",
      },
      {
        q: "ما المعايير المعتمدة؟",
        a: "ISO 22000 وHACCP وكوشير، مع تسجيل المنشأة لدى FDA الأمريكية للشحنات الأمريكية — كما نشرتها الشركة ووردت في سجلات الأدلة التجارية.",
      },
      {
        q: "ما التعبئة المتاحة؟",
        a: "براميل تصدير 120–190 كغ، وعلب من 225 غ للتجزئة إلى 2,750 غ للمطاعم، وعلب A10 للتموين وأكياس 5 كغ مفرَّغة — بحمولات كرتون وحاوية منشورة لكل صنف.",
      },
      {
        q: "بمن نتصل؟",
        a: "مكتب التصدير في مراكش — بإدارة كمال بنيس. الهواتف والبريد ونموذج استفسار منظم في صفحة الاتصال؛ وتُعالج الطلبات بالعربية والفرنسية والإنجليزية.",
      },
    ],
  },
  map: {
    eyebrow: "الأسواق",
    title: "ثمانية عشر سوقاً، خمس قارات",
    lede: "مرّر المؤشر فوق سوق لرسم طريقه من مراكش.",
    origin: "مراكش",
    note: "قائمة الأسواق كما نشرتها الشركة على top-agro.com؛ البرامج الحالية عند الطلب.",
  },
  shipment: {
    eyebrow: "تجارة موثّقة",
    title: "على الماء، وفي السجلات",
    lede: "تُوثّق بيانات الجمارك العامة شحنات الدار — مثل هذه الشحنة من الزيتون المغربي إلى مستورد في نيويورك.",
    facts: [
      { label: "الحمولة", value: "728 صندوقاً · 4 × 11 رطلاً زيتون مغربي مكبوس" },
      { label: "الرمز الجمركي", value: "071120 — زيتون محفوظ مؤقتاً" },
      { label: "المسار", value: "الدار البيضاء → برشلونة → نيوارك" },
      { label: "المرسَل إليه", value: "مستورد أغذية متوسطية، نيويورك" },
    ],
    source: "سجل استيراد أمريكي، مايو 2014 — بيانات جمركية عامة (Seair).",
  },
  buyers: {
    eyebrow: "من نموّن",
    title: "أربعة أنواع من المشترين، أربعة أنواع من التعبئة",
    items: [
      { title: "المستوردون والموزعون", text: "برامج حاويات مختلطة عبر التشكيلات المعلّبة والمحضّرة، تحت علامات الدار." },
      { title: "المصنّعون الصناعيون", text: "زيتون بدرجة المكوّنات في براميل 120–190 كغ، ثمانون برميلاً في الحاوية." },
      { title: "المطاعم والتموين", text: "علب 5/1 وA10 وأكياس 5 كغ مفرَّغة وعبوات مشمش للمطاعم." },
      { title: "برامج التجزئة", text: "علب 1/2 و4/4 من التشكيلة الكلاسيكية تحت علامة Kamil." },
    ],
  },
  band: {
    title: "ضعونا في مناقصتكم القادمة",
    lede: "أرسلوا المنتج والحجم والوجهة — يرد مكتب التصدير بالمواصفات والتوفر.",
    cta: "ابدأ طلب تصدير",
  },
};

export const exportContent: Record<Locale, ExportContent> = { en, fr, ar };
