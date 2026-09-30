/**
 * Technical product data transcribed from the company's legacy website
 * (top-agro.com product pages & spec sheets). Values are company-published;
 * two legacy typos corrected per research/legacy-site-inventory.md §5:
 * — olive 004 heat treatment: 121.1 °C / 28 min (FR sheet, EN sheet was wrong)
 * — garlic-olive recipe: 10 kg drained / 17 kg net (values were swapped)
 */

export interface CanFormat {
  format: string; // trade format designation
  drainedG: number;
  drainedOz?: string;
  perCarton: number;
  cartonsPerFcl: number;
}

export interface BulkRow {
  id: string;
  drainedKg: number;
  drumsPerFcl: number;
}

export const BULK_OLIVES: BulkRow[] = [
  { id: "green-whole", drainedKg: 175, drumsPerFcl: 80 },
  { id: "green-pitted", drainedKg: 140, drumsPerFcl: 80 },
  { id: "green-stuffed", drainedKg: 170, drumsPerFcl: 80 },
  { id: "cracked", drainedKg: 180, drumsPerFcl: 80 },
  { id: "green-sliced", drainedKg: 170, drumsPerFcl: 80 },
  { id: "black-greek", drainedKg: 190, drumsPerFcl: 80 },
];

export interface CannedRow {
  id: string;
  can?: string; // legacy can photo id under /images/legacy/cans/
  formats: CanFormat[];
}

export const CANNED_OLIVES: CannedRow[] = [
  {
    id: "green-whole",
    can: "001",
    formats: [
      { format: "5/1", drainedG: 2750, drainedOz: "97 oz", perCarton: 6, cartonsPerFcl: 750 },
      { format: "A10", drainedG: 1900, drainedOz: "67 oz", perCarton: 6, cartonsPerFcl: 1008 },
      { format: "4/4", drainedG: 500, drainedOz: "18 oz", perCarton: 12, cartonsPerFcl: 1700 },
      { format: "1/2", drainedG: 225, drainedOz: "8 oz", perCarton: 24, cartonsPerFcl: 1700 },
    ],
  },
  {
    id: "green-pitted",
    can: "002",
    formats: [
      { format: "5/1", drainedG: 2000, drainedOz: "71 oz", perCarton: 6, cartonsPerFcl: 750 },
      { format: "A10", drainedG: 1445, drainedOz: "51 oz", perCarton: 6, cartonsPerFcl: 1008 },
      { format: "4/4", drainedG: 400, drainedOz: "14 oz", perCarton: 12, cartonsPerFcl: 1700 },
    ],
  },
  {
    id: "green-stuffed",
    can: "003",
    formats: [
      { format: "5/1", drainedG: 2000, drainedOz: "71 oz", perCarton: 6, cartonsPerFcl: 750 },
      { format: "A10", drainedG: 1560, drainedOz: "55 oz", perCarton: 6, cartonsPerFcl: 1008 },
    ],
  },
  {
    id: "black-whole",
    can: "004",
    formats: [
      { format: "5/1", drainedG: 2750, drainedOz: "97 oz", perCarton: 6, cartonsPerFcl: 750 },
      { format: "A10", drainedG: 1900, drainedOz: "67 oz", perCarton: 6, cartonsPerFcl: 1008 },
      { format: "4/4", drainedG: 500, drainedOz: "18 oz", perCarton: 12, cartonsPerFcl: 1700 },
      { format: "1/2", drainedG: 225, drainedOz: "8 oz", perCarton: 24, cartonsPerFcl: 1700 },
    ],
  },
  {
    id: "black-pitted",
    can: "005",
    formats: [
      { format: "5/1", drainedG: 2000, drainedOz: "71 oz", perCarton: 6, cartonsPerFcl: 750 },
      { format: "A10", drainedG: 1445, drainedOz: "51 oz", perCarton: 6, cartonsPerFcl: 1008 },
      { format: "4/4", drainedG: 360, drainedOz: "14 oz", perCarton: 12, cartonsPerFcl: 1700 },
    ],
  },
  {
    id: "black-sliced",
    can: "006",
    formats: [
      { format: "5/1", drainedG: 2000, drainedOz: "71 oz", perCarton: 6, cartonsPerFcl: 750 },
      { format: "A10", drainedG: 1560, drainedOz: "55 oz", perCarton: 6, cartonsPerFcl: 1008 },
    ],
  },
  {
    id: "black-greek-vacuum",
    formats: [
      { format: "1×5 kg", drainedG: 5000, perCarton: 1, cartonsPerFcl: 3000 },
      { format: "2×5 kg", drainedG: 5000, perCarton: 2, cartonsPerFcl: 1500 },
      { format: "4×5 kg", drainedG: 5000, perCarton: 4, cartonsPerFcl: 800 },
    ],
  },
  {
    id: "black-greek-herbs",
    formats: [
      { format: "5/1", drainedG: 3400, drainedOz: "7.5 lb", perCarton: 6, cartonsPerFcl: 750 },
    ],
  },
  {
    id: "black-greek-pitted",
    formats: [{ format: "5/1", drainedG: 2000, perCarton: 6, cartonsPerFcl: 750 }],
  },
];

export interface SpecSheet {
  id: string; // matches CANNED_OLIVES id
  can: string;
  acidity?: string;
  ph: string;
  salt: string; // °Bé
  treatment: { kind: "pasteurisation" | "sterilisation"; temp: string; minutes: number };
}

export const OLIVE_SPECS: SpecSheet[] = [
  { id: "green-whole", can: "001", acidity: "0.5–0.6 %", ph: "< 4.20", salt: "2.5 °Bé", treatment: { kind: "pasteurisation", temp: "95 °C", minutes: 26 } },
  { id: "green-pitted", can: "002", acidity: "0.5–0.6 %", ph: "< 4.20", salt: "2.5 °Bé", treatment: { kind: "pasteurisation", temp: "95 °C", minutes: 26 } },
  { id: "green-stuffed", can: "003", acidity: "0.5–0.6 %", ph: "< 4.20", salt: "2.5 °Bé", treatment: { kind: "pasteurisation", temp: "95 °C", minutes: 26 } },
  { id: "black-whole", can: "004", ph: "6.8–7.6", salt: "2–4 °Bé", treatment: { kind: "sterilisation", temp: "121.1 °C", minutes: 28 } },
  { id: "black-pitted", can: "005", ph: "6.8–7.6", salt: "2–4 °Bé", treatment: { kind: "sterilisation", temp: "121.1 °C", minutes: 26 } },
  { id: "black-sliced", can: "006", ph: "6.8–7.6", salt: "2–4 °Bé", treatment: { kind: "sterilisation", temp: "121.1 °C", minutes: 26 } },
];

export interface Recipe {
  id: string;
  label: string; // /images/legacy/labels/<label>.jpg
  drainedKg: number;
  netKg: number;
}

export const PREPARED_RECIPES: Recipe[] = [
  { id: "pimentees", label: "pimentees", drainedKg: 10, netKg: 17 },
  { id: "denoyautees", label: "denoyautees", drainedKg: 9, netKg: 16.5 },
  { id: "farcies", label: "farcies", drainedKg: 10, netKg: 17 },
  { id: "alail", label: "alail", drainedKg: 10, netKg: 17 },
  { id: "tailladees", label: "tailladees", drainedKg: 10, netKg: 17 },
  { id: "facongrece", label: "facongrece", drainedKg: 11, netKg: 17 },
  { id: "tchermela", label: "tchermela", drainedKg: 10, netKg: 17 },
  { id: "anchois", label: "anchois", drainedKg: 10, netKg: 17 },
];

export const APRICOT_PASTRY = [
  { format: "2.5 L", drainedG: 1350, perCarton: 12, cartonsPerFcl: 670 },
  { format: "A9", drainedG: 1550, perCarton: 6, cartonsPerFcl: 1175 },
  { format: "5/1", drainedG: 2500, perCarton: 6, cartonsPerFcl: 750 },
  { format: "5 kg", drainedG: 2800, perCarton: 6, cartonsPerFcl: 670 },
] as const;

export const APRICOT_CALIBRES_PASTRY = [
  { format: "2.5 L", calibres: [{ calibre: "2+", weight: "16–18.5 g", fruits: "74–81" }, { calibre: "2−", weight: "14–15 g", fruits: "85–90" }] },
  { format: "A9", calibres: [{ calibre: "2+", weight: "16–18.5 g", fruits: "89–95" }, { calibre: "2−", weight: "14–15 g", fruits: "105–110" }] },
  { format: "5/1", calibres: [{ calibre: "2+", weight: "16–18.5 g", fruits: "140–145" }, { calibre: "2−", weight: "14–15 g", fruits: "165–175" }, { calibre: "1", weight: "19.5–22 g", fruits: "115–125" }] },
] as const;

export const APRICOT_CATERING = [
  { calibre: "0", weight: "23–24.5 g" },
  { calibre: "1", weight: "19.5–22 g" },
  { calibre: "3", weight: "12.5–14 g" },
  { calibre: "4", weight: "10.5–12.5 g" },
] as const;

export const APRICOT_BRIX = "14–16°";
