# Legacy Site Inventory — www.top-agro.com

Crawled live 2026-09-29 from https://www.top-agro.com/ (sequential curl). Raw HTML mirrored in
`research/legacy-html/` (original windows-1252/iso-8859-1 bytes, plus `.utf8` transcodes made with iconv).
All images in `research/legacy-assets/` preserving server-relative paths. **172 image files downloaded**
(88 under `images/`, 84 under `english/images/` + extras). Everything below is quoted from the fetched
pages; nothing invented. French is verbatim (including original typos: "ceuillette", "symbol",
"oilivier", "viollettes", "cumain", "percil", "terroire", "at" for "et").

## 1. Site structure

Frameset site (2000s Dreamweaver/"MM_swapImage" era), brand of canned goods = **KAMIL**.

```
/  (index, <title>TOP AGRO EXPORT</title>, frameset 4 frames)
├─ frame_logo.php      (corner logo frame)
├─ frame_top.php       (banner frame: titre1.gif)
├─ frame_menu.php      (left nav: Equipement / Produits / Marché / Contact + Home + FR/GB flags)
├─ homepage.php        (main frame default)
├─ selection.php       ("La Sélection des Olives", links garantie.php)
├─ garantie.php        ("La Garantie de la qualité" / HACCP, links selection.php)
├─ produit.php         (product category menu, image-based)
├─ histoire.php        (market map + key figures — menu button labelled "Marché")
├─ contact.php         (address/phones/map, links plan.php popup + info.php)
├─ plan.php            (popup: enlarged access map plan00.jpg)
├─ info.php            (contact form "Message directe", posts nowhere visible — form has no action)
├─ produit/vrac.php                     (olives in drums table)
├─ produit/produit oliboites.php        (canned olives table; %20 in URL)
├─ produit/produit preparer.php         (prepared/marinated olives, 8 recipes)
├─ produit/produit_abricot_patis.php    (apricots pastry table)
├─ produit/abricot_restauration.php     (apricots catering 5KG calibre table)
├─ produit/001.php … 006.php            (canned-olive spec sheets, linked from oliboites)
├─ produit/abricot_patis1.php … 3.php   (apricot spec sheets 2.5L / A9 / 5/1)
└─ english/ …          (full mirror: index.php, frame_*.php, homepage, selection, garantie,
                        produit, histoire, contact, plan, info, produit/* incl. 001-006 and
                        abricot_patis1-3 — ALL exist in English)
```

### Dead links / 404s (verified)
- `marrakech.php` — linked from every FR page and `english/homepage.php` ("Marrakech" text link, target=_blank) → **404**.
- `produit/007.php`, `produit/008.php` — **404** (the oliboites table shows thumbnails 007/008 but rows "façon grèce…" have no detail links; images `oli-boites/007.jpg` & `008.jpg` DO exist and were downloaded).
- `/Html/javascript/load-img.js`, `/Html/javascript/over_out.js`, `/Html/styles/table_text_font.css` — referenced as `../../Html/…` from contact/info pages → **404** (pages render without them).
- `english/images/marche/photo-usine.jpg`, `english/images/produits/sous/007.jpg`, `english/images/produits/sous/008.jpg` → **404** (english histoire uses the root `../images/marche/photo-usine.jpg`, but english abricot_patis1/2 have a **broken product photo**).
- Category menu items **Capres / variantes / Citron confit / Piment** (rollover menu "Divers" on every product page) are `href="#"` — **no pages exist** for capers, lemon confit, hot pepper despite the 300t caper figure.

### Third-party/webmaster cruft (excluded from "content")
Every page footer: "Création site web Couleurs Com Marrakech", "Immobilier Marrakech / Riad Marrakech" (marrakechpocket.com), "designed by Youssef.imp" (imprimeurmarocain.com), "Powered by Couleurs Com" (iwm-maroc.com), links to hotel-marrakech-hotel-maroc.com, casa-pocket.com, tangerpocket.com, imprimerie.co.ma, agencecouleurs.com. SEO cruft, not company content.

---

## 2. Page-by-page content

### 2.1 homepage.php (FR) — title "Top Agro Marrakech commerce"
Verbatim:
> « Après **35 ans d'ambition** au service de notre clientèle, **Marrakech Top Agro Export SA**, met à votre disposition votre nouveau site pour mieux nous connaître »
>
> « Arbre éternel, symbol de toutes les civilisations méditerranéennes, l'oilivier est l'arbre de vie et ses fruits sentent bon le soleil. Au Maroc, il est cultivé dans les montagnes du **Rif** au Nord jusqu'aux vallées de l'**Oued Souss à Taroudant** (Sud) »
>
> « La ceuillette des olives s'etale traditionnellement entre **septembre et janvier**, selon qu'on les cueille vertes ou mûres. Car l'olive verte et l'olive noire sont un seul et même fruit qui change de couleur au fur et à mesure de sa maturation. Les olives cueillies vertes sont fragiles et récoltées avec d'infinies précautions. »
>
> Groupe "Marrakech Top Agro" — PoBox : 641 Marrakech — Tél : 05 24 33 52 01 / 05 24 33 52 02 / 05 24 33 56 39 — Fax : 05 24 33 52 00 — E-mail : contact@marrakechtopagro.com / topagro@menara.ma / marrakechtopagro@hotmail.fr

Photo: `images/image_html/kamil.jpg` (platter of fruit/produce, dark background).

### 2.2 english/homepage.php (EN mirror — professionally translated copy exists)
> "After 35 years of ambition in the service of our "clientele", Marrakesh Top Agro Export inc., provides you with your new site to know us better"
>
> "Regarded since antiquity as an integral part of Mediterranean culture and civilization, the olive tree is the tree of life bearing fruit imbued with the scent of the sun and the wind. In Morocco, the olive is cultivated from the far northern reaches of the Rif mountains all the way down to the Oued Souss valley of Taroudant region."
>
> "The harvest traditionally spans from September to January depending upon whether the olives are picked green or ripe. The green olive and the black olive are, in fact, one in the same fruit. The color is simply testament to its ripeness. The earlier green olive is extremely fragile and great care must be taken during harvest in order to maintain its integrity."

### 2.3 selection.php — "La Sélection des Olives"
Banner gifs: `selection00.gif` ("La Sélection des Olives ⬤ La Garantie"), link button `la garantie1.gif` → garantie.php. Verbatim:
> « La ceuillette des olives s'étale traditionnellement entre septembre et janvier… Les olives ceuillies vertes sont fragiles et récoltées avec d'infinies précautions. **Les plus petites servent à la fabrication de l'huile.** »
>
> « **Les plus grosses sont réservées à la table.** Les olives noires sont ceuillies par temps sec. C'est un travail extrêmement délicat, par lequel on applique différentes méthodes évitant tout contact avec le sol. Mais toutes les olives ne se ressemblent pas et sont comme les vins, leurs histoire est marquée par un savoir-faire at par les spécifités d'un terroire. »

EN (english/selection.php): "…The smallest ones are cold-pressed into olive oil. The larger olives are reserved for the table. Finally, as the climate gradually becomes drier, the black olives are picked. Harvesting these olives is an excepltionally delicate process and precautions are taken to avoid all contact with the ground. Of course, all olives are not the same. As with wine, their character is determined as much by the age-old techniques used to prepare them as it is by intericacies of the soil and climate unique to their growing region." (sic: "excepltionally", "intericacies")

Photos: olive1.jpg (green olives + perforated scoop in sorting pan), selection02.jpg (sorting hall), selection30 (workers in orange uniforms at sorting tables), selection31 (outdoor brine-vat/fermentation yard), selection32 (grading conveyor hall).

### 2.4 garantie.php — "La Garantie de la qualité" (HACCP)
Banner `garantie00.gif` ("La Garantie de la qualité ⬤ La Sélection"), link `la selection1.gif` → selection.php.
Main visual `garantie01.jpg` (607×313): lab technician titrating + **embedded image text**: « LE SYSTEME HACCP — Il s'agit de l'analyse de chaque étape du processus de production, toujours dans l'intention d'amener au consommateur final un produit sûr et fiable. » (transcribed from the image; wording partially from EN mirror). Verbatim HTML text:
> « Le système HACCP diminue au maximum les risques de défauts physiques, chimiques et biologiques tout en garantissant la stabilité et la qualité du produit. »
>
> « Cette expérience et ce savoir-faire, appréciés des amateurs d'olives les plus exigeants, sont la garantie de la qualité **Top Agro**. »

EN (english/garantie.php, fuller than FR):
> "The HACCP SYSTEM — It involves anlysing each step in the production process with the overriding aim of bringing to the consumer a safe, sure product."
> "The HACCP SYSTEM : The system result in a production process guaranteeing maximum physical, chemical and biogical safety and stability."
> "Our experience and know-how, appreciated by the most exacting olives's amateurs, are the guarantee of the Top Agro quality." (sic throughout)

Photos: garantie02.jpg (horizontal autoclave/retort sterilizers with basket trolley), garantie30 (filling/canning line), garantie31 (drum warehouse), garantie32 (stacked shiny gold cans), usine1.jpg & usine2.jpg (vertical shots: elevator conveyor structure; olives on grading/vibrating belt). English version adds labo1.jpg (technician at lab bench, 474×313).

### 2.5 produit.php — product category menu (image-based, both languages)
- **OLives :** (m1.gif) → Olives en vrac (`produit/vrac.php`) · Olives conditionnées (`produit/produit oliboites.php`) · Olives préparées (`produit/produit preparer.php`)
- **Abricot :** (m2.gif) → Abricot patisserie (`produit/produit_abricot_patis.php`) · Abricot restauration (`produit/abricot_restauration.php`)
- **Divers :** (m3.gif) → Capres (m31) · Variantes (m32) · Citron confi (m33) · Piment (m34) — **all dead ends** (`#`).
EN labels (english/produit.php + rollover menus): "Olives in barrels", "Conditionned olives", "Assorted olives", "Apricot pastry / backery", "Apricot Restauration", "Capers", "variants", "Lemon", "Hot pepper". (sic)

### 2.6 histoire.php — "Le marché MARRAKECH TOP AGRO" (menu button says **Marché**)
World map `world.gif` (525×256): arrows from Marrakech + KAMIL can graphic; country labels around map.

**Export markets listed (FR / EN):** Canada, Arabie Saudite/Saudi Arabia, Angleterre/United Kingdom, Italie/Italy, Allemagne/Germany, Danemark, USA, Liban/Libanon, Holland/Netherlands, France, Belgique/Belgium, Israel, Brésil/Brazil, Australie/Australia, Espagne/Spain, Suisse/Swiss, Finlande/Finland, Afrique du sud/South Africa — **18 markets**.

**« Quelques chiffres : » (legacy-published figures — exact source: histoire.php & english/histoire.php)**

| Figure | FR verbatim (histoire.php) | EN verbatim (english/histoire.php) |
|---|---|---|
| Turnover | Chiffre d'affaires : **13 Millions $** | Turnover : 13 Millions $ |
| Staff | Nbre personnes : **250** | Nbr persons : 250 |
| Export share | % CA export : **99.20%** | % Turnover export : 99.20% |
| Olives processed | Tonage traité — Olives : **12.000 Tonnes** | Olives : 12.000 Tons |
| Apricots | Abricot : **3000 Tonnes** | Apricots : 3000 Tons |
| Capers | Capres : **300 Tonnes** | Capers : 300 Tons |
| Investment | Investissement : **11 Millions $** | Investment : 11 Millions $ |
| Site area | Superficie : **40.000 m² dont 20.000 m² couvert** | **row absent from English page** |

Photo below figures: `photo-usine.jpg` (525×306 aerial view of the factory compound, desert setting).
Also "35 ans" claim lives in homepage copy + banner `titre1.gif` "MARRAKECH TOP AGRO EXPORT — 35 ans d'ambitions communes" (EN gif: "35 years of common ambitions").

### 2.7 contact.php — "Pour contacter TOP AGRO"
| Datum | Value (verbatim) |
|---|---|
| Adresse | Po Box : 641. **Nouvelle zone industrielle Sidi Ghanem. Marrakech. Maroc** |
| Tél | (212) 05 24 33 52 01 · (212) 05 24 33 52 02 · (212) 05 24 33 56 39 |
| Fax | (212) 05 24 33 52 00 |
| E-mail | contact@marrakechtopagro.com · topagro@menara.ma · marrakechtopagro@hotmail.fr |

"Cliquez sur le plan pour avoir un aperçu plus grand" → thumbnail plan11.jpg opens plan.php popup (plan00.jpg 501×295: hand-drawn access map — Avenue Abdelkrim Khattabi, Pont chemin de fer, Vers Bab Doukala, Route de Safi, Vers Gare(?), landmarks "Sopharma(?)", "Annexe ERAC", "Préfecture Sidi Ghanem", TOP AGRO logo at plant location). "cliquez ici pour nous laisser un message" → info.php.

### 2.8 info.php — contact form "Message directe / Laissez nous un message"
Fields: Nom, Fonction, Societé, Activité de la societé, Pays, e-mail, message. EN: Name, Office, Company, The company's activities, Country, e-mail, message. **Form has no working action/handler in the fetched HTML.**

---

## 3. Product tables (verbatim data)

### 3.1 produit/vrac.php — « Olives en vrac » / "Olives in Barrels"

| Articles (FR) | Articles (EN) | Format | Poids net égouté | Contenance TC 20' |
|---|---|---|---|---|
| Olives vertes | Green olives | Fût plastique / Plastic drums | 175 KG | 80 |
| Olives dénoyautées | Pitted green olives | Fût plastique | 140KG | 80 |
| Olives vertes farcies à la pâte de poivrons | Stuffed green olives | Fût plastique | 170 KG | 80 |
| Olives cassées | Cracked/Pink olives | Fût plastique | 180 KG | 80 |
| Olives vertes rondelles | Sliced green olives | Fût plastique | 170 KG | 80 |
| Olives noires façon grèce | Black dried Greek style | Fût plastique | 190 KG | 80 |

Photo: `vrac/bramel.jpg` (441×230, yard with hundreds of black plastic drums).

### 3.2 produit/produit oliboites.php — « OLIVES EN BOITES » / "CONDITIONNED OLIVES"
Columns: Articles · Format article · Poids net égouté · Nombre de boites par carton · Contenance par container 20''.
(EN headers: Articles · Article · net weight Drained · Number of boxs by cartons · Cartons per FCL 20")

| Article (FR / EN) | Format | Poids net égouté | Boîtes/carton | Cartons/TC 20' |
|---|---|---|---|---|
| Olives vertes confites / Green olives [→001.php] | 5/1 · A10 · 4/4 · 1/2 | 2750g (97oz) · 1900g (67oz) · 500g (18oz) · 225g (8oz) | 6 · 6 · 12 · 24 | 750 · 1008 · 1700 · 1700 |
| Olives vertes confites dénoyautées / Pitted green olives [→002.php] | 5/1 · A10 · 4/4 | 2000g (71oz) · 1445g (51oz) · 400g (14oz) | 6 · 6 · 12 | 750 · 1008 · 1700 |
| Olives vertes farcies pâte de piment / Stuffed green olives [→003.php] | 5/1 · A10 | 2000g (71oz) · 1560g (55oz) | 6 · 6 | 750 · 1008 |
| Olives noires confites / Black olives in brine [→004.php] | 5/1 · A10 · 4/4 · 1/2 | 2750g (97oz) · 1900g (67oz) · 500g (18oz) · 225g (8oz) | 6 · 6 · 12 · 24 | 750 · 1008 · 1700 · 1700 |
| Olives noires confites dénoyautées / Pitted black olives [→005.php] | 5/1 · A10 · 4/4 | 2000g (71oz) · 1445g (51oz) · 360g (14oz) | 6 · 6 · 12 | 750 · 1008 · 1700 |
| Olives noires confites en rondelles / Sliced ripe olives [→006.php] | 5/1 · A10 | 2000g (71oz) · 1560g (55oz) | 6 · 6 | 750 · 1008 |
| Olives noires façon grèce sous vide / Black dry olives in vacuum pack | 1x5 KG · 2x5 KG · 4x5 KG | Sachet de 5 Kg | 1 sac · 2 sacs · 4 sacs | 3000 · 1500 · 800 |
| Olives noires façon grèce aromatisées aux herbes de province / Black olives Greek style (with province herbs) | 5/1 | 3400g (7.5 lbs) | 6 | 750 |
| Olives noires façon grèce dénoyautées / Pitted black olives Greek style | 5/1 | 2000g (**17 lbs** sic) | 6 | 750 |

Thumbnails `oli-boites/001-006.jpg` link to detail sheets; 007.jpg (vacuum pack) & 008.jpg (KAMIL apricot can) shown unlinked.

### 3.3 Canned-olive spec sheets — produit/001-006.php (photo = produits/sous/00N.jpg)

**001 — Olives vertes confites / Whole green olives**
| boite | 5/1 | 4/4 | A10 |
|---|---|---|---|
| Poids net égoutté | 2750 g | 500 g | 1900 g |
| Acidité libre / Free sourness | 0.5%–0.6% | 0.5%–0.6% | 0.5%–0.6% |
| Ph équilibre / Ph balance | <4.20 | <4.20 | <4.20 |
| Sel (initial) | 2.5°Be | 2.5°Be | 2.5°Be |
| Pasteurisation | 95°c pdt 26mn | 95°c pdt 26mn | 95°c pdt 26mn |

**002 — Olives vertes dénoyautées / Pitted green olives**: idem 001 but Poids net égoutté 2000 g / 400 g / 1445 g.
**003 — Olives vertes farcies au piment / Stuffed green olives**: formats 5/1 (2000 g) & A10 (1560 g); acidité 0.5–0.6%, Ph <4.20, Sel 2.5°Be, Pasteurisation 95°c 26mn.
**004 — Olives noires confites / Black olives in brine**: 5/1 2750 g · 4/4 500 g · A10 1900 g; Ph équilibre 6.8–7.6; Sel 4°Be / 4°Be / 2°Be; **Stérilisation 121,1°c pdt 28mn** (FR) — ⚠ EN page says "Sterilisation 95°c during 26mn" (contradiction, FR is the credible spec).
**005 — Olives noires dénoyautées / Pitted black olives**: 2000 g / 360 g / 1445 g; Ph 6.8–7.6; Sel 4/4/2°Be; Stérilisation 121,1°c 26mn.
**006 — Olives noires en rondelles / Sliced ripe olives**: 5/1 2000 g · A10 1560 g; Ph 6.8–7.6; Sel 4°Be/2°Be; Stérilisation 121,1°c 26mn.

### 3.4 produit/produit preparer.php — « OLIVES PREPAREES » / "ASSORTED OLIVES" (8 recipes, each with KAMIL label art)

| Label image | Recipe (FR verbatim) | Poids net égoutté / Poids net |
|---|---|---|
| pimentees.jpg (orange "PIMENTÉES") | Olives vertes, citron, piment fort, huile végétable, eau, sel, aromates, poivres en grains et E330 | 10 kg / 17 Kg |
| denoyautees.jpg (green "DÉNOYAUTÉES") | Olives vertes, eau, sel, E330 | 9 kg / 16.5 Kg |
| farcies.jpg (orange "FARCIES") | Olives vertes farcies à la pâte de poivrons, eau, sel, E330 | 10 kg / 17 Kg |
| alail.jpg (yellow "À L'AIL") | Olives vertes, semoule d'ail concentré, persil en grains, eau, sel, E330 | **17 kg / 10 Kg** (sic — values visibly swapped on the page) |
| tailladees.jpg (purple "TAILLADÉES") | Olives viollettes tailladées, vinaigre, eau, sel, conservateur, Acide Citrique, Acide Acétique | 10 kg / 17 Kg |
| facongrece.jpg (dark green "FAÇON GRÈCE") | Olives noires à la grecque, feuilles de laurier, herbes de provence, huile végétale, sorbate de potassium, Acide Citrique, Acide Acétique | 11 kg / 17 Kg |
| tchermela.jpg (red "TCHERMELA") | Olives vertes, piments verts et rouges piquants, tranches de citron, cumain, ail, percil, huile végétale, eau, sel, aromates, E330 | 10 kg / 17 Kg |
| anchois.jpg (teal "SAUCE ANCHOIS") | Olives vertes confites, concentré d'anchois, eau, sel, E330 | 10 kg / 17 Kg |

EN names: hot-pepper olives, pitted, stuffed with pimento paste, garlic, purple slashed ("Purple olives"), Greek style with herbs, Tchermela (chermoula), anchovy-taste.

### 3.5 produit/produit_abricot_patis.php — « ABRICOTS PATISSERIE » / "APRICOTS PASTRY / BACKERY"
« Oreillons d'abricots au sirop leger » / "Half apricots in light syrop":

| Format | Poids net égouté | Boîtes/carton | Cartons/TC 20' | Spec sheet |
|---|---|---|---|---|
| 2.5L | 1350g | 12 | 670 Cartons | abricot_patis1.php |
| A9 | 1550g | 6 | 1175 Cartons | abricot_patis2.php |
| 5/1 | 2500g | 6 | 750 Cartons | abricot_patis3.php |
| 5Kg | 2800g | 6 | 670 Cartons | (→ abricot_restauration.php) |

**abricot_patis1.php (2.5L):** Calibre 2+ : oreillon 16–18.5 g, 74–81 fruits, Brix 14–16° · Calibre 2- : 14–15 g, 85–90 fruits, Brix 14–16°. « **100% des oreillons coupés à la main et rangés en couronne dans la boîte** » / "100% Hand cut and Crown-Packed on the tin".
**abricot_patis2.php (A9):** égoutté 1550 g; Calibre 2+ 16–18.5 g, 89–95 fruits · Calibre 2- 14–15 g, 105–110 fruits; Brix 14–16.
**abricot_patis3.php (5/1):** égoutté 2500 g; Calibre 2+ 140–145 fruits · Calibre 2- 165–175 fruits · Calibre 1 (19.5–22.0 g) 115–125 fruits; Brix 14–16. « 100% des oreillons coupés à la main ».

### 3.6 produit/abricot_restauration.php — Abricot Restauration (5 KG)
« Oreillons d'abricots au sirop leger — 5 KG » / "Half apricots in light syrup":

| Calibre | Poids Oreillons | Brix |
|---|---|---|
| Calibre 0 | 23 à 24.5 gr | 14 à 16 |
| Calibre 1 | 19.5 à 22 gr | 14 à 16 |
| Calibre 3 | 12.5 à 14 gr | 14 à 16 |
| Calibre 4 (ou petit calibre) | 10.5 à 12.5 gr | 14 à 16 |

---

## 4. Asset catalog (research/legacy-assets/, 172 files)

Quality legend: ✅ usable at small size only unless noted (everything is heavily-compressed 2000s web JPEG/GIF; nothing is print-grade); ✳ = navigation chrome, only useful as reference; ❌ junk/broken.

### Photos (the authentic-asset gold)
| Path | Size | WxH | Subject | Usable? |
|---|---|---|---|---|
| images/marche/photo-usine.jpg | 37.8K | 525×306 | Aerial view of the Sidi Ghanem factory compound, desert backdrop | ✅ best photo on site, still low-res |
| images/equipement/garantie01.jpg | 29.3K | 607×313 | Lab technician titrating + burned-in "LE SYSTEME HACCP" text panel | ✅ (text baked in) |
| images/equipement/garantie02.jpg | 8.3K | 244×164 | Horizontal autoclaves/sterilization retorts + basket trolley | ✅ small |
| images/equipement/garantie30.jpg | 7.0K | 200×130 | Canning/filling line, workers in orange | ✅ small |
| images/equipement/garantie31.jpg | 6.3K | 200×130 | Warehouse of black brine drums | ✅ small |
| images/equipement/garantie32.jpg | 6.6K | 200×130 | Stacks of empty gold cans | ✅ small |
| images/equipement/olive1.jpg | 22.3K | 474×313 | Green olives in round sorting pan with perforated scoop | ✅ |
| images/equipement/olive2.jpg | 1.4K | 133×313 | Mostly-blank teal brine-tank close-up (decorative filler) | ❌ |
| images/equipement/selection02.jpg | 10.5K | 244×164 | Sorting/grading hall, long tables | ✅ small |
| images/equipement/selection03.jpg | 0.7K | 31×164 | Teal spacer strip | ❌ |
| images/equipement/selection30.jpg | 8.5K | 200×130 | Workers (orange uniforms) hand-sorting olives | ✅ small |
| images/equipement/selection31.jpg | 5.5K | 200×130 | Outdoor fermentation-vat yard | ✅ small |
| images/equipement/selection32.jpg | 13.2K | 200×130 | Grading conveyor in hall | ✅ small |
| images/equipement2/usine1.jpg | 6.5K | 185×274 | Elevator/conveyor steel structure (vertical) | ✅ small |
| images/equipement2/usine2.jpg | 6.5K | 185×274 | Olives on vibrating grading belt (vertical) | ✅ small |
| english/images/equipements/labo1.jpg | 11.2K | 474×313 | Technician at laboratory bench (EN-only photo) | ✅ |
| english/images/equipements/labo2.jpg | 1.3K | 133×313 | Filler strip (lab) | ❌ |
| images/produits/vrac/bramel.jpg | 19.7K | 441×230 | Yard of hundreds of black export drums | ✅ |
| images/image_html/kamil.jpg | 3.7K | 128×128 | Fruit/produce platter (homepage) | ✳ tiny |
| images/image_html/olives06.jpg | 6.4K | 70×42 | Black olives close-up (tiny) | ❌ tiny |

### Product & label art (KAMIL brand)
| Path | Size | WxH | Subject | Usable? |
|---|---|---|---|---|
| images/image_html/{pimentees,denoyautees,farcies,alail,tailladees,facongrece,tchermela,anchois}.jpg | ~6-8K each | 147×151 | KAMIL label artwork per prepared-olive recipe (color-coded: orange/green/orange/yellow/purple/dark-green/red/teal) | ✅ brand reference |
| images/produits/sous/001.jpg | 12.4K | 190×168 | KAMIL can — olives vertes confites | ✅ small |
| images/produits/sous/002.jpg | 15.3K | 190×168 | KAMIL gold can — olives vertes dénoyautées | ✅ small |
| images/produits/sous/003.jpg | 14.6K | 190×168 | KAMIL red/white can — farcies au piment | ✅ small |
| images/produits/sous/004.jpg | 13.0K | 190×168 | KAMIL orange can — olives noires | ✅ small |
| images/produits/sous/005.jpg | 12.1K | 190×168 | KAMIL black/green can — noires dénoyautées | ✅ small |
| images/produits/sous/006.jpg | 11.7K | 190×168 | KAMIL cream can — noires en rondelles | ✅ small |
| images/produits/sous/007.jpg | 7.4K | 190×168 | KAMIL can — oreillons d'abricot (2.5L/A9 pages) | ✅ small |
| images/produits/sous/008.jpg | 7.4K | 190×168 | KAMIL can — "OREILLONS D'ABRICOT au sirop léger" 5/1 | ✅ small |
| images/produits/oli-boites/001-006.jpg | ~1.2K | 50×66-70 | Tiny can thumbnails for table | ❌ thumbs |
| images/produits/oli-boites/007.jpg | 0.9K | 79×48 | Vacuum-pack thumbnail (unlinked) | ❌ thumb |
| images/produits/oli-boites/008.jpg | 7.4K | 50×70 | Apricot can thumbnail | ❌ thumb |
| images/produits/abricot_patis1.jpg | 4.0K | 72×126 | KAMIL apricot tall can | ✳ tiny |
| images/produits/abricot_patis2.jpg | 3.3K | 98×100 | KAMIL apricot squat can (black) | ✳ tiny |

### Maps & identity
| Path | Size | WxH | Subject | Usable? |
|---|---|---|---|---|
| images/image_html/logo.gif | 3.3K | 143×100 | TOP AGRO oval logo (teal/orange globe-olive motif) | ✅ only logo source, low-res |
| images/image_html/titre1.gif | 4.7K | 400×60 | Banner "MARRAKECH TOP AGRO EXPORT — 35 ans d'ambitions communes" (EN version 10.4K: "…35 years of common ambitions") | ✳ |
| images/marche/world.gif | 14.3K | 525×256 | World map, orange export arrows from Marrakech, KAMIL can inset | ✅ content reference |
| images/image_html/plan00.jpg | 22.6K | 501×295 | Hand-drawn access map (Av. Abdelkrim Khattabi, rail bridge, Route de Safi, Préfecture/Annexe ERAC Sidi Ghanem) | ✅ content reference |
| images/image_html/plan11.jpg | 4.0K | 146×86 | Map thumbnail | ✳ |
| images/image_html/bg contact.gif | 6.1K | 236×67 | "TOP AGRO contact" heading gif | ✳ |

### Navigation chrome (✳ all)
FR+EN pairs, all 120×35 unless noted: bouton_outil_out/in ("Equipement"/"Equipment"), bouton_produit_out/in ("Produits"/"Products"), bouton_histoire_out/in (**"Marché"/"Market"** — note: file says histoire, art says Marché), bouton_contact_out/in ("Contact"); home.gif 66×30; spr_fr/spr_gb/spr_blanc 25×25 flags; frame_gauche1.gif 160×600 & frame_top_gauche1.gif 60×104 (teal curved corner art); ligne.gif 400×5 divider; jaune.gif 20×24 / vert.gif 17×24 swatch gifs; truc.gif 61×38 olive icon; m1/m2/m3 & m31-m34 & olive_vrac/olive_cond/olive_prepa & abricot_patiss/abricot_restau & menu/{olives,abricot,divers,left}.gif — text-label gifs (FR + translated EN versions differ in bytes); equipement/garantie00.gif & selection00.gif 607×18 (page-title strips) and la garantie1.gif/la selection1.gif 146×26 (cross-link buttons); english/images/equipements/title.gif & title2.gif 607×18, link-selection.gif 181×26 & link-guarantie.gif 146×26 (EN equivalents).

**Dedup note:** 52 of 77 english/images files are byte-identical to root; 25 differ (translated text gifs + a lighter EN titre1/bouton set). English tree also contains EN-only equipements/{labo1,labo2,olive2,title,title2,link-*} files that do not exist at root.

---

## 5. Flags & discrepancies worth carrying into the redesign brief
1. **All headline figures come from one page** (histoire.php / english/histoire.php): $13M turnover, 250 staff, 99.20% export, 12,000t olives, 3,000t apricots, 300t capers, $11M investment, 40,000 m² (20,000 covered — FR only). No date is attached to any figure; site claims "35 ans" of history (homepage + banner). Treat all as legacy-published, UNVERIFIED against current reality.
2. Phone numbers use post-2009 Moroccan format (05 24…), so the site was touched at least once after the 2009 renumbering; content otherwise reads mid-2000s.
3. Caper/variantes/citron/piment categories are advertised in every product menu (and capers appear in the 300t figure) but have **no pages** — content gap to fill in redesign.
4. FR/EN spec contradiction on 004 (sterilization 121.1°C/28mn vs "95°c 26mn"), and swapped net/drained weights on the garlic-olive recipe — data needs re-validation with the client.
5. English mirror is complete page-for-page except: missing Superficie row, broken apricot photos (sous/007-008), dead marrakech.php link; English copy has many typos but is genuine translated copy, not machine noise.
6. Brand architecture buried in the old site: **company = Marrakech Top Agro Export S.A. / Groupe "Marrakech Top Agro"; retail brand = KAMIL** (on every can/label/map).
7. No SSL-era niceties: no favicon, no meta description, dead CSS/JS (`/Html/...` 404s), form without handler, frameset layout, SEO-spam footer links — nothing to preserve technically.
