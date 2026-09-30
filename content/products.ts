import type { Locale } from "@/lib/i18n";

export interface TableHeaders {
  article: string;
  format: string;
  drained: string;
  perCarton: string;
  perContainer: string;
  drum: string;
  drumsPerContainer: string;
  calibre: string;
  fruitWeight: string;
  fruitsPerTin: string;
  brix: string;
  acidity: string;
  ph: string;
  salt: string;
  treatment: string;
  net: string;
  ingredients: string;
}

export interface ProductsContent {
  headers: TableHeaders;
  provenance: string;
  oliveNames: Record<string, string>;
  recipeNames: Record<string, string>;
  recipeIngredients: Record<string, string>;
  hub: {
    metaTitle: string;
    hero: { eyebrow: string; title: string; lede: string };
    lines: {
      key: "olives" | "apricots" | "capers";
      title: string;
      lede: string;
      points: string[];
      cta: string;
    }[];
    formats: { eyebrow: string; title: string; lede: string; items: { name: string; note: string }[] };
  };
  olives: {
    metaTitle: string;
    hero: { eyebrow: string; title: string; lede: string };
    intro: string;
    bulk: { title: string; lede: string; archiveCaption: string };
    canned: { title: string; lede: string; specsTitle: string; specsLede: string; archiveNote: string };
    prepared: { title: string; lede: string; weightsNote: string };
  };
  apricots: {
    metaTitle: string;
    hero: { eyebrow: string; title: string; lede: string };
    intro: string;
    handCut: { title: string; text: string };
    pastry: { title: string; lede: string };
    calibres: { title: string; lede: string };
    catering: { title: string; lede: string };
    archiveCaption: string;
  };
  capers: {
    metaTitle: string;
    hero: { eyebrow: string; title: string; lede: string };
    intro: string;
    tonnage: string;
    items: { key: "capers" | "variants" | "lemons" | "peppers"; title: string; text: string }[];
    note: string;
    cta: string;
  };
  pager: { prev: string; next: string };
}

const en: ProductsContent = {
  headers: {
    article: "Article",
    format: "Format",
    drained: "Drained net weight",
    perCarton: "Tins / carton",
    perContainer: "Cartons / 20′ FCL",
    drum: "Plastic drum",
    drumsPerContainer: "Drums / 20′ FCL",
    calibre: "Calibre",
    fruitWeight: "Fruit weight",
    fruitsPerTin: "Fruits / tin",
    brix: "Brix",
    acidity: "Free acidity",
    ph: "pH at equilibrium",
    salt: "Brine salt",
    treatment: "Heat treatment",
    net: "Net weight",
    ingredients: "Ingredients",
  },
  provenance:
    "Specifications as published in the company's technical sheets. Confirm current specifications and availability with the export office.",
  oliveNames: {
    "green-whole": "Green olives, whole",
    "green-pitted": "Green olives, pitted",
    "green-stuffed": "Green olives stuffed with pepper paste",
    cracked: "Cracked olives",
    "green-sliced": "Green olives, sliced",
    "black-greek": "Black olives, Greek style",
    "black-whole": "Black olives in brine",
    "black-pitted": "Black olives, pitted",
    "black-sliced": "Sliced ripe olives",
    "black-greek-vacuum": "Black Greek-style olives, vacuum pack",
    "black-greek-herbs": "Black Greek-style olives with herbs",
    "black-greek-pitted": "Black Greek-style olives, pitted",
  },
  recipeNames: {
    pimentees: "Pimentées — with hot pepper",
    denoyautees: "Dénoyautées — pitted",
    farcies: "Farcies — stuffed",
    alail: "À l'ail — with garlic",
    tailladees: "Tailladées — slashed purple",
    facongrece: "Façon Grèce — Greek style",
    tchermela: "Tchermela — chermoula",
    anchois: "Sauce anchois — anchovy",
  },
  recipeIngredients: {
    pimentees:
      "Green olives, lemon, hot pepper, vegetable oil, water, salt, aromatics, whole peppercorns, E330",
    denoyautees: "Green olives, water, salt, E330",
    farcies: "Green olives stuffed with pepper paste, water, salt, E330",
    alail: "Green olives, concentrated garlic, parsley, water, salt, E330",
    tailladees:
      "Slashed purple olives, vinegar, water, salt, preservative, citric acid, acetic acid",
    facongrece:
      "Greek-style black olives, bay leaves, herbes de Provence, vegetable oil, potassium sorbate, citric acid, acetic acid",
    tchermela:
      "Green olives, hot green and red peppers, lemon slices, cumin, garlic, parsley, vegetable oil, water, salt, aromatics, E330",
    anchois: "Candied green olives, anchovy concentrate, water, salt, E330",
  },
  hub: {
    metaTitle: "Products",
    hero: {
      eyebrow: "Products",
      title: "Three crops, one standard",
      lede: "Bulk for processors, tins for food service and retail, prepared recipes for the delicatessen counter — every line specified for export.",
    },
    lines: [
      {
        key: "olives",
        title: "Table olives",
        lede: "The heart of the house: green and black olives cured in Marrakech, in every trade preparation.",
        points: [
          "Six bulk articles in 120–190 kg export drums",
          "Nine canned articles from 1/2 to 5/1 and vacuum packs",
          "Eight prepared recipes, from Tchermela to Façon Grèce",
        ],
        cta: "Explore olives",
      },
      {
        key: "apricots",
        title: "Apricots",
        lede: "Half apricots in light syrup for pastry and food service — hand-cut and crown-packed.",
        points: [
          "Four formats from 2.5 L to 5 kg",
          "Calibrated from 10.5 to 24.5 g per fruit",
          "Brix held at 14–16°",
        ],
        cta: "Explore apricots",
      },
      {
        key: "capers",
        title: "Capers & specialties",
        lede: "Capers and the Moroccan condiment table — the range that completes an import programme.",
        points: [
          "Capers — 300 t processed (company-published)",
          "Olive variants and preserved lemons",
          "Hot peppers",
        ],
        cta: "Explore specialties",
      },
    ],
    formats: {
      eyebrow: "Export formats",
      title: "Packed the way your market buys",
      lede: "From ingredient-grade drums to retail half tins, the plant fills the trade formats importers actually order.",
      items: [
        { name: "Drum", note: "120–190 kg plastic export drums, 80 per 20′ container" },
        { name: "5/1", note: "food-service tin, up to 2 750 g drained" },
        { name: "A10", note: "catering tin, up to 1 900 g drained" },
        { name: "4/4", note: "retail tin, ~500 g drained" },
        { name: "1/2", note: "retail tin, ~225 g drained" },
        { name: "Vacuum", note: "5 kg pouches for Greek-style olives" },
      ],
    },
  },
  olives: {
    metaTitle: "Table olives",
    hero: {
      eyebrow: "Products · Olives",
      title: "The olive, in every trade form",
      lede: "Green and black, whole and pitted, sliced, stuffed, slashed or Greek-style — cured in Marrakech and packed for export.",
    },
    intro:
      "The harvest runs from September to January, green olives first, black olives picked in dry weather with methods that keep the fruit off the ground. The largest calibres are reserved for the table; like wine, each lot carries the mark of its terroir and of the hands that cure it.",
    bulk: {
      title: "Bulk, in export drums",
      lede: "Ingredient-grade supply for processors and packers: six articles in plastic drums, eighty drums to the twenty-foot container.",
      archiveCaption: "The drum yard at Sidi Ghanem — Top Agro company archive",
    },
    canned: {
      title: "Canned olives",
      lede: "Nine articles across the trade formats — from 225 g retail tins to 2 750 g food-service cans and 5 kg vacuum pouches.",
      specsTitle: "Technical specifications",
      specsLede: "Company-published control values per article: acidity, pH at equilibrium, brine strength and heat treatment.",
      archiveNote: "Can artwork — company archive",
    },
    prepared: {
      title: "Prepared olives",
      lede: "Eight recipes from the Moroccan table, prepared and packed at the plant under the Kamil label.",
      weightsNote: "drained / net",
    },
  },
  apricots: {
    metaTitle: "Apricots",
    hero: {
      eyebrow: "Products · Apricots",
      title: "Oreillons in light syrup",
      lede: "Half apricots for pâtisserie and food service — cut by hand, packed in a crown, calibrated to the gram.",
    },
    intro:
      "Morocco's apricots reach the plant at full ripeness and are halved the same day. The house packs them in light syrup at 14–16° Brix, in tins sized for bakeries, pastry labs and catering kitchens.",
    handCut: {
      title: "100% hand-cut, crown-packed",
      text: "Every oreillon is cut by hand and arranged in a crown inside the tin — the company's own published standard, and the reason the halves arrive intact.",
    },
    pastry: {
      title: "Pâtisserie formats",
      lede: "Four formats, from the 2.5 L bakery tin to the 5 kg catering pack.",
    },
    calibres: {
      title: "Calibres per format",
      lede: "Published fruit counts per tin, held to a constant fruit weight.",
    },
    catering: {
      title: "Food-service calibres — 5 kg",
      lede: "The 5 kg pack is graded in four calibres, all at 14–16° Brix.",
    },
    archiveCaption: "Kamil apricot tins — Top Agro company archive",
  },
  capers: {
    metaTitle: "Capers & specialties",
    hero: {
      eyebrow: "Products · Specialties",
      title: "Capers & the Moroccan table",
      lede: "The range that completes an olive programme: capers, olive variants, preserved lemons and hot peppers.",
    },
    intro:
      "Alongside its olives and apricots, the house has long listed a range of Moroccan table specialties. These lines are produced to order for export programmes — specifications are agreed at enquiry.",
    tonnage: "300 t of capers processed — company-published figure",
    items: [
      { key: "capers", title: "Capers", text: "Caper buds graded and packed for export — a line the company has published at three hundred tonnes processed." },
      { key: "variants", title: "Olive variants", text: "Seasonal and regional olive preparations beyond the classic range, listed in the company's historic catalogue." },
      { key: "lemons", title: "Preserved lemons", text: "The essential Moroccan condiment — lemons cured in salt, as listed in the company's range." },
      { key: "peppers", title: "Hot peppers", text: "Pickled hot peppers to accompany the olive counter, as listed in the company's range." },
    ],
    note: "The legacy catalogue lists these categories without published specifications. No formats are shown here that the company has not published — ask the export office for current sheets.",
    cta: "Ask about this range",
  },
  pager: { prev: "Previous", next: "Next" },
};

const fr: ProductsContent = {
  headers: {
    article: "Article",
    format: "Format",
    drained: "Poids net égoutté",
    perCarton: "Boîtes / carton",
    perContainer: "Cartons / TC 20′",
    drum: "Fût plastique",
    drumsPerContainer: "Fûts / TC 20′",
    calibre: "Calibre",
    fruitWeight: "Poids du fruit",
    fruitsPerTin: "Fruits / boîte",
    brix: "Brix",
    acidity: "Acidité libre",
    ph: "pH d'équilibre",
    salt: "Sel de saumure",
    treatment: "Traitement thermique",
    net: "Poids net",
    ingredients: "Ingrédients",
  },
  provenance:
    "Spécifications telles que publiées dans les fiches techniques de l'entreprise. Confirmez les spécifications et disponibilités actuelles auprès du bureau export.",
  oliveNames: {
    "green-whole": "Olives vertes entières",
    "green-pitted": "Olives vertes dénoyautées",
    "green-stuffed": "Olives vertes farcies à la pâte de poivrons",
    cracked: "Olives cassées",
    "green-sliced": "Olives vertes en rondelles",
    "black-greek": "Olives noires façon Grèce",
    "black-whole": "Olives noires confites",
    "black-pitted": "Olives noires dénoyautées",
    "black-sliced": "Olives noires en rondelles",
    "black-greek-vacuum": "Olives noires façon Grèce sous vide",
    "black-greek-herbs": "Olives noires façon Grèce aux herbes",
    "black-greek-pitted": "Olives noires façon Grèce dénoyautées",
  },
  recipeNames: {
    pimentees: "Pimentées",
    denoyautees: "Dénoyautées",
    farcies: "Farcies",
    alail: "À l'ail",
    tailladees: "Tailladées",
    facongrece: "Façon Grèce",
    tchermela: "Tchermela",
    anchois: "Sauce anchois",
  },
  recipeIngredients: {
    pimentees:
      "Olives vertes, citron, piment fort, huile végétale, eau, sel, aromates, poivre en grains, E330",
    denoyautees: "Olives vertes, eau, sel, E330",
    farcies: "Olives vertes farcies à la pâte de poivrons, eau, sel, E330",
    alail: "Olives vertes, semoule d'ail concentrée, persil, eau, sel, E330",
    tailladees:
      "Olives violettes tailladées, vinaigre, eau, sel, conservateur, acide citrique, acide acétique",
    facongrece:
      "Olives noires à la grecque, feuilles de laurier, herbes de Provence, huile végétale, sorbate de potassium, acide citrique, acide acétique",
    tchermela:
      "Olives vertes, piments verts et rouges piquants, tranches de citron, cumin, ail, persil, huile végétale, eau, sel, aromates, E330",
    anchois: "Olives vertes confites, concentré d'anchois, eau, sel, E330",
  },
  hub: {
    metaTitle: "Produits",
    hero: {
      eyebrow: "Produits",
      title: "Trois cultures, une exigence",
      lede: "Le vrac pour les transformateurs, la boîte pour la restauration et la distribution, les recettes pour le rayon traiteur — chaque gamme spécifiée pour l'export.",
    },
    lines: [
      {
        key: "olives",
        title: "Olives de table",
        lede: "Le cœur de la maison : olives vertes et noires préparées à Marrakech, dans toutes les présentations du commerce.",
        points: [
          "Six articles en vrac, fûts export de 120 à 190 kg",
          "Neuf articles appertisés, du 1/2 au 5/1 et sous vide",
          "Huit recettes préparées, de la Tchermela à la Façon Grèce",
        ],
        cta: "Découvrir les olives",
      },
      {
        key: "apricots",
        title: "Abricots",
        lede: "Oreillons au sirop léger pour la pâtisserie et la restauration — coupés à la main, rangés en couronne.",
        points: [
          "Quatre formats, du 2,5 L au 5 kg",
          "Calibrés de 10,5 à 24,5 g par fruit",
          "Brix tenu à 14–16°",
        ],
        cta: "Découvrir les abricots",
      },
      {
        key: "capers",
        title: "Câpres & spécialités",
        lede: "Les câpres et la table marocaine des condiments — la gamme qui complète un programme d'importation.",
        points: [
          "Câpres — 300 t traitées (chiffre publié par l'entreprise)",
          "Variantes d'olives et citrons confits",
          "Piments forts",
        ],
        cta: "Découvrir les spécialités",
      },
    ],
    formats: {
      eyebrow: "Formats export",
      title: "Conditionné comme votre marché achète",
      lede: "Du fût industriel à la demi-boîte de détail, l'usine remplit les formats que les importateurs commandent réellement.",
      items: [
        { name: "Fût", note: "fûts plastique export de 120 à 190 kg, 80 par conteneur 20′" },
        { name: "5/1", note: "boîte restauration, jusqu'à 2 750 g égoutté" },
        { name: "A10", note: "boîte collectivités, jusqu'à 1 900 g égoutté" },
        { name: "4/4", note: "boîte détail, ~500 g égoutté" },
        { name: "1/2", note: "boîte détail, ~225 g égoutté" },
        { name: "Sous vide", note: "sachets de 5 kg pour olives façon Grèce" },
      ],
    },
  },
  olives: {
    metaTitle: "Olives de table",
    hero: {
      eyebrow: "Produits · Olives",
      title: "L'olive, sous toutes ses formes",
      lede: "Vertes et noires, entières et dénoyautées, en rondelles, farcies, tailladées ou façon Grèce — préparées à Marrakech et conditionnées pour l'export.",
    },
    intro:
      "La cueillette s'étale de septembre à janvier : les vertes d'abord, puis les noires, ramassées par temps sec avec des méthodes qui évitent tout contact avec le sol. Les plus gros calibres sont réservés à la table ; comme le vin, chaque lot porte la marque de son terroir et du savoir-faire qui le prépare.",
    bulk: {
      title: "Le vrac, en fûts export",
      lede: "L'approvisionnement industriel des transformateurs et conditionneurs : six articles en fûts plastique, quatre-vingts fûts par conteneur de vingt pieds.",
      archiveCaption: "Le parc à fûts de Sidi Ghanem — archives Top Agro",
    },
    canned: {
      title: "Olives appertisées",
      lede: "Neuf articles dans les formats du commerce — de la boîte détail de 225 g à la 5/1 de 2 750 g et aux sachets sous vide de 5 kg.",
      specsTitle: "Spécifications techniques",
      specsLede: "Valeurs de contrôle publiées par l'entreprise, par article : acidité, pH d'équilibre, sel de saumure et traitement thermique.",
      archiveNote: "Visuels de boîtes — archives de l'entreprise",
    },
    prepared: {
      title: "Olives préparées",
      lede: "Huit recettes de la table marocaine, préparées et conditionnées à l'usine sous l'étiquette Kamil.",
      weightsNote: "égoutté / net",
    },
  },
  apricots: {
    metaTitle: "Abricots",
    hero: {
      eyebrow: "Produits · Abricots",
      title: "Oreillons au sirop léger",
      lede: "Des oreillons pour la pâtisserie et la restauration — coupés à la main, rangés en couronne, calibrés au gramme.",
    },
    intro:
      "Les abricots du Maroc arrivent à l'usine à pleine maturité et sont coupés le jour même. La maison les conditionne au sirop léger à 14–16° Brix, dans des boîtes pensées pour les boulangeries, laboratoires de pâtisserie et cuisines de collectivité.",
    handCut: {
      title: "100 % coupés à la main, rangés en couronne",
      text: "Chaque oreillon est coupé à la main et rangé en couronne dans la boîte — le standard publié par l'entreprise, et la raison pour laquelle les oreillons arrivent intacts.",
    },
    pastry: {
      title: "Formats pâtisserie",
      lede: "Quatre formats, de la boîte 2,5 L au conditionnement 5 kg.",
    },
    calibres: {
      title: "Calibres par format",
      lede: "Nombre de fruits par boîte publié, à poids de fruit constant.",
    },
    catering: {
      title: "Calibres restauration — 5 kg",
      lede: "Le conditionnement 5 kg se décline en quatre calibres, tous à 14–16° Brix.",
    },
    archiveCaption: "Boîtes d'abricots Kamil — archives Top Agro",
  },
  capers: {
    metaTitle: "Câpres & spécialités",
    hero: {
      eyebrow: "Produits · Spécialités",
      title: "Câpres & la table marocaine",
      lede: "La gamme qui complète un programme d'olives : câpres, variantes, citrons confits et piments forts.",
    },
    intro:
      "Aux côtés de ses olives et abricots, la maison référence de longue date une gamme de spécialités marocaines. Ces lignes sont produites à la commande pour les programmes export — les spécifications se définissent à la demande.",
    tonnage: "300 t de câpres traitées — chiffre publié par l'entreprise",
    items: [
      { key: "capers", title: "Câpres", text: "Boutons de câpres calibrés et conditionnés pour l'export — une ligne que l'entreprise a publiée à trois cents tonnes traitées." },
      { key: "variants", title: "Variantes d'olives", text: "Préparations d'olives saisonnières et régionales au-delà de la gamme classique, référencées au catalogue historique." },
      { key: "lemons", title: "Citrons confits", text: "Le condiment marocain essentiel — citrons confits au sel, tels que référencés dans la gamme de l'entreprise." },
      { key: "peppers", title: "Piments forts", text: "Piments au vinaigre pour accompagner le rayon olives, tels que référencés dans la gamme de l'entreprise." },
    ],
    note: "Le catalogue historique référence ces catégories sans spécifications publiées. Aucun format n'est affiché ici que l'entreprise n'ait publié — demandez les fiches actuelles au bureau export.",
    cta: "Se renseigner sur cette gamme",
  },
  pager: { prev: "Précédent", next: "Suivant" },
};

const ar: ProductsContent = {
  headers: {
    article: "الصنف",
    format: "الحجم",
    drained: "الوزن الصافي المصفّى",
    perCarton: "علب / كرتون",
    perContainer: "كرتون / حاوية 20 قدماً",
    drum: "برميل بلاستيكي",
    drumsPerContainer: "برميل / حاوية 20 قدماً",
    calibre: "العيار",
    fruitWeight: "وزن الثمرة",
    fruitsPerTin: "ثمرة / علبة",
    brix: "بركس",
    acidity: "الحموضة الحرة",
    ph: "درجة الحموضة pH",
    salt: "ملوحة المحلول",
    treatment: "المعالجة الحرارية",
    net: "الوزن الصافي",
    ingredients: "المكوّنات",
  },
  provenance:
    "المواصفات كما نُشرت في البطاقات التقنية للشركة. يُرجى تأكيد المواصفات والتوفر الحاليين لدى مكتب التصدير.",
  oliveNames: {
    "green-whole": "زيتون أخضر كامل",
    "green-pitted": "زيتون أخضر منزوع النوى",
    "green-stuffed": "زيتون أخضر محشو بمعجون الفلفل",
    cracked: "زيتون مرضوض",
    "green-sliced": "زيتون أخضر شرائح",
    "black-greek": "زيتون أسود على الطريقة اليونانية",
    "black-whole": "زيتون أسود في محلول ملحي",
    "black-pitted": "زيتون أسود منزوع النوى",
    "black-sliced": "زيتون أسود شرائح",
    "black-greek-vacuum": "زيتون أسود يوناني مفرَّغ الهواء",
    "black-greek-herbs": "زيتون أسود يوناني بالأعشاب",
    "black-greek-pitted": "زيتون أسود يوناني منزوع النوى",
  },
  recipeNames: {
    pimentees: "بالفلفل الحار",
    denoyautees: "منزوع النوى",
    farcies: "محشو",
    alail: "بالثوم",
    tailladees: "مشرَّط بنفسجي",
    facongrece: "على الطريقة اليونانية",
    tchermela: "بالشرملة",
    anchois: "بصلصة الأنشوجة",
  },
  recipeIngredients: {
    pimentees: "زيتون أخضر، ليمون، فلفل حار، زيت نباتي، ماء، ملح، توابل، حب الفلفل، E330",
    denoyautees: "زيتون أخضر، ماء، ملح، E330",
    farcies: "زيتون أخضر محشو بمعجون الفلفل، ماء، ملح، E330",
    alail: "زيتون أخضر، ثوم مركّز، بقدونس، ماء، ملح، E330",
    tailladees: "زيتون بنفسجي مشرَّط، خل، ماء، ملح، مادة حافظة، حمض الستريك، حمض الخليك",
    facongrece: "زيتون أسود يوناني، ورق الغار، أعشاب بروفنسال، زيت نباتي، سوربات البوتاسيوم، حمض الستريك، حمض الخليك",
    tchermela: "زيتون أخضر، فلفل أخضر وأحمر حار، شرائح ليمون، كمون، ثوم، بقدونس، زيت نباتي، ماء، ملح، توابل، E330",
    anchois: "زيتون أخضر مكبوس، مركّز الأنشوجة، ماء، ملح، E330",
  },
  hub: {
    metaTitle: "المنتجات",
    hero: {
      eyebrow: "المنتجات",
      title: "ثلاثة محاصيل، معيار واحد",
      lede: "السائب للمصنّعين، والعلب للمطاعم والتوزيع، والوصفات المحضّرة لأركان الأطعمة — كل خط بمواصفات تصدير.",
    },
    lines: [
      {
        key: "olives",
        title: "زيتون المائدة",
        lede: "قلب الدار: زيتون أخضر وأسود يُحضَّر في مراكش، بكل أشكال التجارة.",
        points: [
          "ستة أصناف سائبة في براميل تصدير 120–190 كغ",
          "تسعة أصناف معلّبة من 1/2 إلى 5/1 وتغليف مفرَّغ",
          "ثماني وصفات محضّرة، من الشرملة إلى اليونانية",
        ],
        cta: "اكتشف الزيتون",
      },
      {
        key: "apricots",
        title: "المشمش",
        lede: "أنصاف مشمش في شراب خفيف للحلويات والمطاعم — تُقطع يدوياً وتُرصّ على شكل تاج.",
        points: [
          "أربعة أحجام من 2.5 لتر إلى 5 كغ",
          "معايرة من 10.5 إلى 24.5 غ للثمرة",
          "بركس ثابت عند 14–16°",
        ],
        cta: "اكتشف المشمش",
      },
      {
        key: "capers",
        title: "القبار والتخصصات",
        lede: "القبار ومائدة المخللات المغربية — التشكيلة التي تُكمل برنامج الاستيراد.",
        points: [
          "قبار — 300 طن معالَج (رقم نشرته الشركة)",
          "تشكيلات زيتون وليمون مخلل",
          "فلفل حار",
        ],
        cta: "اكتشف التخصصات",
      },
    ],
    formats: {
      eyebrow: "أحجام التصدير",
      title: "معبّأ كما يشتري سوقكم",
      lede: "من براميل المكوّنات الصناعية إلى علب التجزئة الصغيرة، يعبّئ المصنع الأحجام التي يطلبها المستوردون فعلاً.",
      items: [
        { name: "برميل", note: "براميل بلاستيكية 120–190 كغ، 80 برميلاً في حاوية 20 قدماً" },
        { name: "5/1", note: "علبة مطاعم حتى 2,750 غ مصفّى" },
        { name: "A10", note: "علبة تموين حتى 1,900 غ مصفّى" },
        { name: "4/4", note: "علبة تجزئة ~500 غ مصفّى" },
        { name: "1/2", note: "علبة تجزئة ~225 غ مصفّى" },
        { name: "مفرَّغ", note: "أكياس 5 كغ للزيتون اليوناني" },
      ],
    },
  },
  olives: {
    metaTitle: "زيتون المائدة",
    hero: {
      eyebrow: "المنتجات · الزيتون",
      title: "الزيتون بكل أشكاله التجارية",
      lede: "أخضر وأسود، كامل ومنزوع النوى، شرائح ومحشو ومشرَّط وعلى الطريقة اليونانية — يُحضَّر في مراكش ويُعبَّأ للتصدير.",
    },
    intro:
      "يمتد القطاف من سبتمبر إلى يناير: الأخضر أولاً، ثم الأسود الذي يُجمع في الطقس الجاف بطرق تمنع ملامسة الأرض. تُحجز أكبر العيارات للمائدة؛ وكما النبيذ، تحمل كل دفعة بصمة أرضها وبصمة الأيدي التي تحضّرها.",
    bulk: {
      title: "السائب في براميل التصدير",
      lede: "تموين صناعي للمصنّعين والمعبّئين: ستة أصناف في براميل بلاستيكية، ثمانون برميلاً في حاوية العشرين قدماً.",
      archiveCaption: "ساحة البراميل في سيدي غانم — أرشيف توب أغرو",
    },
    canned: {
      title: "الزيتون المعلّب",
      lede: "تسعة أصناف في أحجام التجارة — من علبة 225 غ إلى 5/1 بسعة 2,750 غ وأكياس 5 كغ مفرَّغة.",
      specsTitle: "المواصفات التقنية",
      specsLede: "قيم الضبط المنشورة لكل صنف: الحموضة ودرجة pH وملوحة المحلول والمعالجة الحرارية.",
      archiveNote: "تصاميم العلب — أرشيف الشركة",
    },
    prepared: {
      title: "الزيتون المحضّر",
      lede: "ثماني وصفات من المائدة المغربية، تُحضَّر وتُعبَّأ في المصنع تحت علامة Kamil.",
      weightsNote: "مصفّى / صافي",
    },
  },
  apricots: {
    metaTitle: "المشمش",
    hero: {
      eyebrow: "المنتجات · المشمش",
      title: "أنصاف مشمش في شراب خفيف",
      lede: "أنصاف للحلويات والمطاعم — تُقطع يدوياً وتُرصّ على شكل تاج وتُعاير بالغرام.",
    },
    intro:
      "يصل مشمش المغرب إلى المصنع في تمام نضجه ويُقطع في اليوم نفسه. تعبّئه الدار في شراب خفيف عند 14–16° بركس، في علب مصممة للمخابز ومختبرات الحلويات ومطابخ التموين.",
    handCut: {
      title: "مقطوع يدوياً 100% ومرصوص على شكل تاج",
      text: "كل نصف يُقطع يدوياً ويُرتَّب على شكل تاج داخل العلبة — المعيار الذي نشرته الشركة، وسبب وصول الأنصاف سليمة.",
    },
    pastry: { title: "أحجام الحلويات", lede: "أربعة أحجام، من علبة 2.5 لتر إلى عبوة 5 كغ." },
    calibres: { title: "العيارات حسب الحجم", lede: "عدد الثمار المنشور لكل علبة، بوزن ثمرة ثابت." },
    catering: { title: "عيارات المطاعم — 5 كغ", lede: "عبوة 5 كغ في أربعة عيارات، كلها عند 14–16° بركس." },
    archiveCaption: "علب مشمش Kamil — أرشيف توب أغرو",
  },
  capers: {
    metaTitle: "القبار والتخصصات",
    hero: {
      eyebrow: "المنتجات · التخصصات",
      title: "القبار والمائدة المغربية",
      lede: "التشكيلة التي تكمل برنامج الزيتون: قبار وتشكيلات وليمون مخلل وفلفل حار.",
    },
    intro:
      "إلى جانب الزيتون والمشمش، تُدرج الدار منذ زمن طويل تشكيلة من التخصصات المغربية. تُنتَج هذه الخطوط حسب الطلب لبرامج التصدير — وتُحدَّد المواصفات عند الاستفسار.",
    tonnage: "300 طن من القبار المعالَج — رقم نشرته الشركة",
    items: [
      { key: "capers", title: "القبار", text: "براعم قبار معايَرة ومعبّأة للتصدير — خط نشرته الشركة بثلاثمئة طن معالَج." },
      { key: "variants", title: "تشكيلات الزيتون", text: "تحضيرات موسمية وإقليمية تتجاوز التشكيلة الكلاسيكية، وردت في الكتالوج التاريخي." },
      { key: "lemons", title: "الليمون المخلل", text: "المخلل المغربي الأساسي — ليمون مكبوس بالملح، كما ورد في تشكيلة الشركة." },
      { key: "peppers", title: "الفلفل الحار", text: "فلفل حار مخلل يرافق ركن الزيتون، كما ورد في تشكيلة الشركة." },
    ],
    note: "يذكر الكتالوج التاريخي هذه الفئات دون مواصفات منشورة. لا نعرض هنا أي حجم لم تنشره الشركة — اطلبوا البطاقات الحالية من مكتب التصدير.",
    cta: "استفسر عن هذه التشكيلة",
  },
  pager: { prev: "السابق", next: "التالي" },
};

export const products: Record<Locale, ProductsContent> = { en, fr, ar };
