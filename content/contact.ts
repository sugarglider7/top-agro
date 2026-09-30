import type { Locale } from "@/lib/i18n";

export interface ContactContent {
  metaTitle: string;
  hero: { eyebrow: string; title: string; lede: string };
  form: {
    title: string;
    interestLegend: string;
    interests: { id: string; label: string }[];
    name: string;
    company: string;
    email: string;
    country: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    required: string;
    invalidEmail: string;
    pickInterest: string;
    readyTitle: string;
    readyBody: string;
    openEmail: string;
    copy: string;
    copied: string;
    edit: string;
    note: string;
  };
  details: {
    officeTitle: string;
    exportDesk: string;
    addressTitle: string;
    addressLines: string[];
    phoneTitle: string;
    faxTitle: string;
    emailTitle: string;
    hoursNote: string;
    mapCaption: string;
  };
}

const en: ContactContent = {
  metaTitle: "Contact & enquiry",
  hero: {
    eyebrow: "Contact",
    title: "Tell us what your market needs",
    lede: "A structured enquiry reaches the export desk with everything it needs to answer fast — product, format, destination.",
  },
  form: {
    title: "Export enquiry",
    interestLegend: "I am interested in",
    interests: [
      { id: "olives", label: "Olives" },
      { id: "apricots", label: "Apricots" },
      { id: "capers", label: "Capers & specialties" },
      { id: "distribution", label: "Distribution" },
      { id: "other", label: "Other" },
    ],
    name: "Full name",
    company: "Company",
    email: "Business email",
    country: "Market / country",
    message: "Approximate requirement",
    messagePlaceholder: "e.g. 1 FCL green pitted olives A10, monthly, delivered Rotterdam…",
    submit: "Prepare the enquiry",
    required: "Required",
    invalidEmail: "Enter a valid email address",
    pickInterest: "Choose at least one interest",
    readyTitle: "Your enquiry is ready",
    readyBody: "Review the summary below, then send it from your own mailbox — the export office reads every message.",
    openEmail: "Open in your email app",
    copy: "Copy summary",
    copied: "Copied",
    edit: "Edit the enquiry",
    note: "This form prepares an email to the export office — nothing is sent until you send it.",
  },
  details: {
    officeTitle: "The export office",
    exportDesk: "Export direction: Kamil Bennis",
    addressTitle: "Address",
    addressLines: [
      "Marrakech Top Agro Export S.A.",
      "Lot 160, New industrial zone Sidi Ghanem — Route de Safi",
      "P.O. Box 641, Guéliz, 40000 Marrakech, Morocco",
    ],
    phoneTitle: "Telephone",
    faxTitle: "Fax",
    emailTitle: "Email",
    hoursNote: "Enquiries handled in English, French and Arabic.",
    mapCaption: "Access sketch to the plant — Top Agro company archive",
  },
};

const fr: ContactContent = {
  metaTitle: "Contact & demande",
  hero: {
    eyebrow: "Contact",
    title: "Dites-nous ce qu'il faut à votre marché",
    lede: "Une demande structurée arrive au bureau export avec tout ce qu'il faut pour répondre vite — produit, format, destination.",
  },
  form: {
    title: "Demande export",
    interestLegend: "Je suis intéressé par",
    interests: [
      { id: "olives", label: "Olives" },
      { id: "apricots", label: "Abricots" },
      { id: "capers", label: "Câpres & spécialités" },
      { id: "distribution", label: "Distribution" },
      { id: "other", label: "Autre" },
    ],
    name: "Nom complet",
    company: "Société",
    email: "E-mail professionnel",
    country: "Marché / pays",
    message: "Besoin approximatif",
    messagePlaceholder: "ex. 1 conteneur d'olives vertes dénoyautées A10, mensuel, livré Rotterdam…",
    submit: "Préparer la demande",
    required: "Requis",
    invalidEmail: "Saisissez une adresse e-mail valide",
    pickInterest: "Choisissez au moins un intérêt",
    readyTitle: "Votre demande est prête",
    readyBody: "Relisez le résumé ci-dessous, puis envoyez-le depuis votre messagerie — le bureau export lit chaque message.",
    openEmail: "Ouvrir dans votre messagerie",
    copy: "Copier le résumé",
    copied: "Copié",
    edit: "Modifier la demande",
    note: "Ce formulaire prépare un e-mail au bureau export — rien n'est envoyé tant que vous ne l'envoyez pas.",
  },
  details: {
    officeTitle: "Le bureau export",
    exportDesk: "Direction export : Kamil Bennis",
    addressTitle: "Adresse",
    addressLines: [
      "Marrakech Top Agro Export S.A.",
      "Lot 160, Nouvelle zone industrielle Sidi Ghanem — Route de Safi",
      "B.P. 641, Guéliz, 40000 Marrakech, Maroc",
    ],
    phoneTitle: "Téléphone",
    faxTitle: "Fax",
    emailTitle: "E-mail",
    hoursNote: "Demandes traitées en français, anglais et arabe.",
    mapCaption: "Croquis d'accès à l'usine — archives Top Agro",
  },
};

const ar: ContactContent = {
  metaTitle: "الاتصال والاستفسار",
  hero: {
    eyebrow: "اتصل بنا",
    title: "أخبرونا بما يحتاجه سوقكم",
    lede: "يصل الاستفسار المنظم إلى مكتب التصدير بكل ما يلزم للرد سريعاً — المنتج والحجم والوجهة.",
  },
  form: {
    title: "طلب تصدير",
    interestLegend: "أنا مهتم بـ",
    interests: [
      { id: "olives", label: "الزيتون" },
      { id: "apricots", label: "المشمش" },
      { id: "capers", label: "القبار والتخصصات" },
      { id: "distribution", label: "التوزيع" },
      { id: "other", label: "أخرى" },
    ],
    name: "الاسم الكامل",
    company: "الشركة",
    email: "البريد المهني",
    country: "السوق / البلد",
    message: "الحاجة التقريبية",
    messagePlaceholder: "مثال: حاوية زيتون أخضر منزوع النوى A10، شهرياً، تسليم روتردام…",
    submit: "جهّز الاستفسار",
    required: "مطلوب",
    invalidEmail: "أدخل بريداً إلكترونياً صحيحاً",
    pickInterest: "اختر اهتماماً واحداً على الأقل",
    readyTitle: "استفساركم جاهز",
    readyBody: "راجعوا الملخص أدناه ثم أرسلوه من بريدكم — مكتب التصدير يقرأ كل رسالة.",
    openEmail: "افتح في تطبيق البريد",
    copy: "انسخ الملخص",
    copied: "نُسخ",
    edit: "عدّل الاستفسار",
    note: "هذا النموذج يجهّز رسالة إلى مكتب التصدير — لا يُرسل شيء حتى ترسلوه بأنفسكم.",
  },
  details: {
    officeTitle: "مكتب التصدير",
    exportDesk: "إدارة التصدير: كمال بنيس",
    addressTitle: "العنوان",
    addressLines: [
      "شركة مراكش توب أغرو للتصدير",
      "القطعة 160، المنطقة الصناعية الجديدة سيدي غانم — طريق آسفي",
      "ص.ب 641، جليز، 40000 مراكش، المغرب",
    ],
    phoneTitle: "الهاتف",
    faxTitle: "الفاكس",
    emailTitle: "البريد الإلكتروني",
    hoursNote: "تُعالج الطلبات بالعربية والفرنسية والإنجليزية.",
    mapCaption: "مخطط الوصول إلى المصنع — أرشيف توب أغرو",
  },
};

export const contactContent: Record<Locale, ContactContent> = { en, fr, ar };
