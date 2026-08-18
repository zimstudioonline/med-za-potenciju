/**
 * Homepage copy for Q4You Fortissimo.
 *
 * Everything here is traceable to the product declaration or to the shop's own
 * stated terms (see the blog post "Q4You Fortissimo – Med za potenciju i vitalnost").
 * Deliberately absent, because it is not confirmed anywhere: how fast the product
 * acts, how long any effect lasts, whether it can be used daily, storage
 * instructions, manufacturer/importer details, country of origin, a "free from"
 * list, and customer reviews. Do not fill these in without the declaration in hand.
 *
 * Rule for every line below: say what something *is*, never what it does to the
 * body. Health claims about a supplement or its individual ingredients are
 * regulated, and an unbacked one costs more than it earns.
 */

/** One-sentence definition — the answer a search engine or an LLM should lift verbatim. */
export const SHORT_ANSWER =
  "Med za potenciju (Q4You Fortissimo) je dodatak ishrani na bazi cvetnog meda i biljnih sastojaka, namenjen odraslim osobama. Dolazi u kesicama od 7 grama i koristi se prema uputstvu sa deklaracije. Nije lek i nije namenjen dijagnostikovanju, lečenju ni prevenciji bolesti.";

export type Benefit = { icon: string; title: string; text: string };

/** Practical properties of the product, not promises about what it will do for you. */
export const BENEFITS: Benefit[] = [
  {
    icon: "🍯",
    title: "Podrška svakodnevnoj energiji",
    text: "Dodatak ishrani koji odrasli uključuju u svoju svakodnevnu rutinu, uz uravnoteženu ishranu.",
  },
  {
    icon: "🌿",
    title: "Biljni sastojci",
    text: "Cvetni med kombinovan sa biljnim ekstraktima i začinima navedenim na deklaraciji.",
  },
  {
    icon: "⚡",
    title: "Jednostavna upotreba",
    text: "Kesica od 7 g — bez merenja, mešanja i pripreme. Sadržaj se uzima direktno.",
  },
  {
    icon: "🔒",
    title: "Diskretna kupovina",
    text: "Poručivanje bez registracije, neutralno pakovanje i plaćanje kuriru pri preuzimanju.",
  },
];

export type UsageStep = { step: string; title: string; text: string };

/** Straight from the declaration — no timings beyond what it states. */
export const USAGE_STEPS: UsageStep[] = [
  {
    step: "01",
    title: "Otvorite kesicu",
    text: "Jedna kesica sadrži 7 g proizvoda i predviđena je za jednu upotrebu.",
  },
  {
    step: "02",
    title: "Uzmite sadržaj prema deklaraciji",
    text: "Sadržaj kesice iscedite direktno u usta ili ga stavite na kašičicu i pojedite, na prazan stomak ili najmanje dva sata nakon obroka.",
  },
  {
    step: "03",
    title: "Pratite uputstvo proizvođača",
    text: "Preporučena upotreba je jedna kesica najmanje sat vremena pre intimnog trenutka.",
  },
];

/** Shown right under the steps — the one warning every supplement page owes the reader. */
export const USAGE_WARNING =
  "Nemojte prekoračiti preporučenu dnevnu količinu navedenu na deklaraciji. Uputstvo sa pakovanja je merodavno — pročitajte ga pre prve upotrebe.";

export type Ingredient = { icon: string; name: string; text: string };

/**
 * The declaration's ingredient list. Descriptions say what each ingredient *is*,
 * not what it does — health claims about individual ingredients are regulated.
 */
export const INGREDIENTS: Ingredient[] = [
  {
    icon: "🍯",
    name: "Cvetni med",
    text: "Osnova formule — med sakupljen sa cvetnih medonosnih biljaka, koji nosi ostale sastojke.",
  },
  {
    icon: "🍇",
    name: "Sirup crnog duda",
    text: "Sirup od ploda crnog duda, naveden među sastojcima formule.",
  },
  {
    icon: "🌼",
    name: "Aroma vanile",
    text: "Aroma navedena u sastavu — doprinosi ukusu proizvoda.",
  },
  {
    icon: "🌿",
    name: "Đumbir",
    text: "Koren tropske biljke izražene arome, širom sveta poznat kao začin i sastojak napitaka.",
  },
  {
    icon: "🌿",
    name: "Galanga",
    text: "Koren iz iste botaničke familije kao đumbir, tradicionalni začin jugoistočne Azije.",
  },
  {
    icon: "🌿",
    name: "Epimedium",
    text: "Zeljasta biljka poznata iz azijske tradicionalne upotrebe, u formuli u obliku ekstrakta.",
  },
  {
    icon: "🌿",
    name: "Žen-šen",
    text: "Koren žen-šena — u formuli se navode više vrsta, uključujući američki, sibirski i azijski.",
  },
  {
    icon: "🌿",
    name: "Maka",
    text: "Koren biljke sa visoravni Anda, u Peruu se vekovima koristi u ishrani.",
  },
  {
    icon: "🌿",
    name: "Ginko",
    text: "List drveta Ginkgo biloba, jedan od najčešće korišćenih biljnih sastojaka u suplementima.",
  },
  {
    icon: "🌿",
    name: "Kopriva",
    text: "Samonikla biljka rasprostranjena i kod nas, u upotrebi kao čaj i kao sastojak preparata.",
  },
  {
    icon: "🌿",
    name: "Cimet",
    text: "Kora cimetovog drveta — klasičan začin koji doprinosi ukusu formule.",
  },
  {
    icon: "🌾",
    name: "Ovas",
    text: "Žitarica koja se svakodnevno koristi u ishrani, ovde kao deo biljne mešavine.",
  },
  {
    icon: "🌰",
    name: "Seme bundeve",
    text: "Jestivo seme bundeve, poznato kao grickalica i kao sastojak nutritivnih mešavina.",
  },
  {
    icon: "🌰",
    name: "Seme kole",
    text: "Seme afričkog drveta kole, tradicionalno korišćeno u zapadnoj Africi.",
  },
  {
    icon: "🌰",
    name: "Rogač",
    text: "Plod rogača, u prehrani poznat kao prirodno sladak sastojak.",
  },
  {
    icon: "🐝",
    name: "Polen",
    text: "Cvetni polen koji sakupljaju pčele — pčelinji proizvod, mogući alergen.",
  },
  {
    icon: "🐝",
    name: "Matični mleč",
    text: "Pčelinji proizvod, u formuli u liofiliziranom (sušenom) obliku — mogući alergen.",
  },
  {
    icon: "🍯",
    name: "Glukozni sirup",
    text: "Nosač i zaslađivač u medenoj bazi proizvoda.",
  },
];

export type TrustPoint = { icon: string; title: string; text: string };

export const TRUST_POINTS: TrustPoint[] = [
  {
    icon: "🔒",
    title: "Diskretno pakovanje",
    text: "Bez oznaka na paketu sa kojih se vidi šta je unutra.",
  },
  {
    icon: "💳",
    title: "Plaćanje pouzećem",
    text: "Platite kuriru prilikom preuzimanja pošiljke — ništa unapred i bez podataka o kartici.",
  },
  {
    icon: "☎",
    title: "Podrška kupcima",
    text: "Pozovite nas ako imate pitanje pre poručivanja, svakog dana od 10 do 20 časova.",
  },
  {
    icon: "📦",
    title: "Jednostavna porudžbina",
    text: "Poručivanje bez registracije — dovoljni su ime, adresa i broj telefona.",
  },
];

/** The four-item strip right under the hero. Short enough to scan in a second. */
export const TRUST_BAR: string[] = [
  "Diskretno pakovanje",
  "Plaćanje pouzećem",
  "Jednostavna porudžbina",
  "Podrška kupcima",
];

/** Who it is for, and — more importantly — who it is not for. */
export const AUDIENCE_FOR: string[] = [
  "Odraslim osobama koje žele da u svakodnevnu rutinu uključe dodatak ishrani na bazi meda i biljnih sastojaka",
  "Onima kojima odgovara format kesice — bez merenja, mešanja i pripreme",
  "Onima koji žele diskretnu kupovinu, sa plaćanjem prilikom preuzimanja",
];

export const AUDIENCE_NOT_FOR: string[] = [
  "Osobama mlađim od 18 godina",
  "Trudnicama i dojiljama",
  "Osobama alergičnim na neki od sastojaka, uključujući pčelinje proizvode",
  "Kao zamena za propisanu terapiju ili lekarski pregled",
  "Za lečenje, prevenciju ili dijagnostikovanje zdravstvenih problema",
];

export type ProductFact = { label: string; value: string };

/**
 * The declarative facts table. Every row here is confirmed; rows that would need
 * the physical declaration — proizvođač, zemlja porekla, uvoznik, uslovi čuvanja,
 * rok trajanja — are left out rather than guessed at.
 */
export const PRODUCT_FACTS: ProductFact[] = [
  { label: "Naziv proizvoda", value: "Q4You Fortissimo — med za potenciju" },
  { label: "Brend", value: "Q4You" },
  { label: "Kategorija", value: "Dodatak ishrani" },
  { label: "Oblik", value: "Kesica sa medenom pastom" },
  { label: "Neto količina po kesici", value: "7 g" },
  { label: "Dostupna pakovanja", value: "1 kesica · 3 kesice (21 g) · 7 kesica (49 g)" },
  { label: "Namenjeno", value: "Odraslim osobama starijim od 18 godina" },
  { label: "Način upotrebe", value: "Jedna kesica, prema uputstvu sa deklaracije" },
  { label: "Mogući alergeni", value: "Pčelinji proizvodi (polen, matični mleč) — proverite deklaraciju" },
  { label: "Plaćanje", value: "Isključivo pouzećem, kuriru pri preuzimanju" },
  { label: "Rok isporuke", value: "24 časa, brzom poštom na teritoriji Srbije" },
];

/**
 * Shop-page content below. The shop repeats the product's *facts* (same source of
 * truth as the homepage — INGREDIENTS, USAGE_STEPS, PRODUCT_FACTS, AUDIENCE_*) but
 * carries its own commercial framing: which pack to pick, what delivery costs, and
 * a FAQ built around price and packaging rather than around what the product is.
 */

/** The scannable spec block right under the shop hero. */
export const QUICK_FACTS: ProductFact[] = [
  { label: "Proizvod", value: "Q4You Fortissimo" },
  { label: "Vrsta", value: "Dodatak ishrani" },
  { label: "Oblik", value: "Praktična kesica" },
  { label: "Količina", value: "7 g po kesici" },
  { label: "Dostupna pakovanja", value: "1, 3 i 7 kesica" },
  { label: "Način kupovine", value: "Online porudžbina ili telefonom" },
  { label: "Plaćanje", value: "Pouzećem, prema aktuelnim uslovima kupovine" },
];

/** Which pack suits whom — the question every visitor with three prices actually has. */
export const PACK_ADVICE: { when: string; then: string }[] = [
  { when: "Ako prvi put kupujete proizvod", then: "izaberite 1 kesicu." },
  { when: "Ako želite nekoliko kesica", then: "izaberite pakovanje od 3." },
  {
    when: "Ako želite najnižu cenu po kesici",
    then: "pakovanje od 7 kesica je najpovoljniji izbor.",
  },
];

export type ShopPoint = { icon: string; title: string; text: string };

export const DELIVERY_POINTS: ShopPoint[] = [
  {
    icon: "🔒",
    title: "Diskretno pakovanje",
    text: "Pošiljka se priprema tako da sadržaj nije nepotrebno izložen prilikom dostave.",
  },
  {
    icon: "💳",
    title: "Plaćanje pouzećem",
    text: "Porudžbinu plaćate prilikom preuzimanja pošiljke, prema aktuelnim uslovima kupovine.",
  },
  {
    icon: "🚚",
    title: "Dostava",
    text: "Cena dostave iznosi 535 din, prema trenutno navedenim uslovima prodaje. Isporuka je u roku od 24 časa.",
  },
  {
    icon: "🛒",
    title: "Jednostavna porudžbina",
    text: "Izaberite željeno pakovanje, dodajte ga u korpu i završite porudžbinu — bez registracije.",
  },
];

export const SHOP_WHY_US: ShopPoint[] = [
  {
    icon: "🔒",
    title: "Diskretna isporuka",
    text: "Vaša privatnost nam je važna — paket ne otkriva šta je unutra.",
  },
  {
    icon: "📋",
    title: "Jasne informacije",
    text: "Pre kupovine možete pregledati sastav, pakovanja, cenu i informacije o proizvodu.",
  },
  {
    icon: "💳",
    title: "Plaćanje pouzećem",
    text: "Platite prilikom preuzimanja pošiljke, prema aktuelnim uslovima.",
  },
  {
    icon: "☎",
    title: "Podrška kupcima",
    text: "Ako imate pitanje o proizvodu, poručivanju ili dostavi, obratite nam se telefonom ili mejlom.",
  },
];

/**
 * Product-page landing content. Two things from the supplied draft are deliberately
 * NOT reproduced here, because they were notes to the site owner rather than copy
 * for a visitor to read: "za konačnu verziju prepisati sa deklaracije" and "ako
 * postoje stvarne recenzije, prikazati ih uz napomenu". The second one is honoured
 * by simply not inventing reviews; the first stays as a code comment.
 */

export const LANDING_BENEFITS: ShopPoint[] = [
  {
    icon: "📦",
    title: "Praktične kesice",
    text: "Jedna kesica sadrži 7 g proizvoda i omogućava jednostavno pakovanje i korišćenje.",
  },
  {
    icon: "🍯",
    title: "Med i biljni sastojci",
    text: "Formula kombinuje med sa različitim biljnim sastojcima, začinima i drugim komponentama navedenim na deklaraciji.",
  },
  {
    icon: "⚡",
    title: "Jednostavno korišćenje",
    text: "Proizvod je upakovan u pojedinačne kesice koje su praktične za čuvanje i nošenje.",
  },
  {
    icon: "🔒",
    title: "Diskretna isporuka",
    text: "Porudžbina se šalje u diskretnom pakovanju, prema uslovima prodavca.",
  },
];

/** The compact spec table at the top of the product landing page. */
export const LANDING_FACTS: ProductFact[] = [
  { label: "Naziv proizvoda", value: "Q4You Fortissimo" },
  { label: "Kategorija", value: "Dodatak ishrani" },
  { label: "Oblik", value: "Kesica" },
  { label: "Količina jedne kesice", value: "7 g" },
  { label: "Dostupna pakovanja", value: "1, 3 i 7 kesica" },
  { label: "Osnova formule", value: "Med i biljni sastojci" },
  { label: "Namenjeno", value: "Odrasloj populaciji" },
  { label: "Način upotrebe", value: "Prema deklaraciji proizvoda" },
  { label: "Plaćanje", value: "Pouzećem, prema uslovima prodaje" },
  { label: "Dostava", value: "Diskretna isporuka" },
];

export const LANDING_TRUST_BAR: string[] = [
  "Praktične kesice od 7 g",
  "Diskretna isporuka",
  "Plaćanje pouzećem",
  "Jednostavna porudžbina",
];

/** Warnings block — every line traceable to the declaration or the shop's terms. */
export const PRE_USE_WARNINGS: string[] = [
  "Proizvod ne treba da koriste osobe koje su preosetljive ili alergične na neki od njegovih sastojaka.",
  "Pre upotrebe pažljivo pročitajte deklaraciju proizvoda.",
  "Proizvod nije namenjen osobama mlađim od 18 godina, trudnicama i dojiljama.",
  "Ako koristite lekove ili imate zdravstvene tegobe, pre upotrebe dodatka ishrani konsultujte lekara ili farmaceuta.",
  "Čuvati proizvod u skladu sa uslovima navedenim na deklaraciji.",
];

export type FaqGroup = "proizvod" | "bezbednost" | "porucivanje";

export type FaqItem = { question: string; answer: string; group: FaqGroup };

export const FAQ_GROUP_LABELS: Record<FaqGroup, string> = {
  proizvod: "O proizvodu",
  bezbednost: "Bezbednost i odgovorna upotreba",
  porucivanje: "Poručivanje i dostava",
};

/**
 * Only questions that can be answered from the declaration or the shop's terms.
 * Left out on purpose: how fast it acts, how long it lasts, how long a course
 * should be, daily use, more than one sachet, and storage — none of that is confirmed.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    group: "proizvod",
    question: "Šta je Med za potenciju?",
    answer:
      "Q4You Fortissimo je dodatak ishrani na bazi cvetnog meda i biljnih ekstrakata, namenjen odraslim osobama. Pakovan je u kesicama od 7 grama, za jednostavno doziranje i diskretno nošenje.",
  },
  {
    group: "proizvod",
    question: "Šta sadrži Med za potenciju?",
    answer:
      "Osnovu čini cvetni med, a u sastavu su i glukozni sirup, sirup crnog duda, đumbir, galanga, epimedium, kopriva, ginko, više vrsta žen-šena, cimet, maka, seme bundeve, seme kole, cvetni polen, rogač, ovas, aroma vanile i liofilizirani matični mleč. Kompletnu listu sa količinama proverite na deklaraciji proizvoda.",
  },
  {
    group: "proizvod",
    question: "Koliko kesica ima u pakovanju?",
    answer:
      "Standardno pakovanje sadrži 7 kesica po 7 grama, odnosno ukupno 49 grama. Dostupna su i manja pakovanja od 3 kesice i pojedinačna kesica.",
  },
  {
    group: "proizvod",
    question: "Kako se koristi?",
    answer:
      "Sadržaj jedne kesice iscedite direktno u usta ili ga stavite na kašičicu i pojedite. Preporučena upotreba je jedna kesica najmanje sat vremena pre intimnog trenutka, na prazan stomak ili najmanje dva sata nakon obroka. Nemojte prekoračiti količinu navedenu na deklaraciji.",
  },
  {
    group: "bezbednost",
    question: "Da li je Med za potenciju lek?",
    answer:
      "Nije. Med za potenciju je dodatak ishrani i ne treba ga posmatrati kao zamenu za lek, medicinsku terapiju ili savet lekara. Nije namenjen dijagnostikovanju, lečenju ni prevenciji bolesti. Ako imate zdravstveni problem ili koristite terapiju, pre upotrebe konsultujte lekara ili farmaceuta.",
  },
  {
    group: "bezbednost",
    question: "Ko ne treba da koristi proizvod?",
    answer:
      "Proizvod nije namenjen osobama mlađim od 18 godina, trudnicama i dojiljama. Ako imate alergiju na neki od sastojaka, ako koristite terapiju ili imate postojeći zdravstveni problem, proverite sastav i posavetujte se sa lekarom ili farmaceutom.",
  },
  {
    group: "bezbednost",
    question: "Mogu li da ga koriste osobe koje uzimaju terapiju?",
    answer:
      "Na to pitanje odgovor može dati samo lekar ili farmaceut koji zna vašu terapiju. Ako uzimate bilo koje lekove, pokažite im sastav sa deklaracije pre nego što počnete da koristite proizvod.",
  },
  {
    group: "bezbednost",
    question: "Mogu li ga koristiti osobe mlađe od 18 godina?",
    answer:
      "Ne. Proizvod je namenjen isključivo odraslim osobama starijim od 18 godina.",
  },
  {
    group: "bezbednost",
    question: "Da li proizvod sadrži alergene?",
    answer:
      "Formula sadrži pčelinje proizvode — cvetni polen i matični mleč — koji su kod nekih osoba poznati alergeni, kao i biljne ekstrakte i žitarice. Kompletnu listu sastojaka i oznake alergena proverite na deklaraciji pre upotrebe.",
  },
  {
    group: "porucivanje",
    question: "Kako mogu da poručim?",
    answer:
      "Poručivanje ide preko sajta, bez registracije, ili telefonom na +381 63 342 3800 svakog dana od 10 do 20 časova.",
  },
  {
    group: "porucivanje",
    question: "Da li mogu da platim pouzećem?",
    answer:
      "Da — plaćanje je isključivo pouzećem. Paket plaćate kuriru brze pošte u trenutku preuzimanja, ne plaćate ništa unapred i ne unosite podatke o kartici.",
  },
  {
    group: "porucivanje",
    question: "Koliko traje dostava i koliko košta?",
    answer:
      "Isporuka je u roku od 24 časa. Dostava se plaća 535 dinara, uz cenu proizvoda, i naplaćuje se pouzećem zajedno sa porudžbinom.",
  },
  {
    group: "porucivanje",
    question: "Da li je isporuka diskretna?",
    answer:
      "Jeste. Proizvod se šalje u neutralnom pakovanju na kojem se ne vidi šta je unutra.",
  },
];

/**
 * The shop's own FAQ. Overlap with the homepage is intentional only where a buyer
 * standing in front of three prices would ask the same thing; the emphasis here is
 * on grams, packs, price and delivery, which the homepage FAQ does not carry.
 */
/**
 * FAQ na /shop odgovara samo na pitanja oko IZBORA pakovanja. Sve ostalo —
 * sastav, upotreba, upozorenja, dostava — stoji na stranicama proizvoda, pa se
 * isti tekst ne pojavljuje na četiri mesta.
 */
export const SHOP_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Koja je razlika između pakovanja?",
    answer:
      "Sastav i količina po kesici (7 g) isti su u sva tri pakovanja — razlikuje se samo broj kesica i cena po kesici. Veće pakovanje ima nižu cenu po kesici.",
  },
  {
    question: "Koje pakovanje da izaberem ako prvi put naručujem?",
    answer:
      "Za prvo isprobavanje je dovoljna jedna kesica. Veće pakovanje, sa nižom cenom po kesici, možete naručiti kasnije.",
  },
  {
    question: "Da li mogu da kombinujem pakovanja u jednoj porudžbini?",
    answer:
      "Da. U korpu možete dodati više različitih pakovanja i poručiti ih zajedno, uz jednu dostavu.",
  },
  {
    question: "Koliko traje isporuka i kako se plaća?",
    answer:
      "Isporuka je u roku od 24 časa, a plaćanje isključivo pouzećem — kuriru prilikom preuzimanja paketa.",
  },
];

export const PRODUCT_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Šta je Med za potenciju Q4You Fortissimo?",
    answer:
      "Q4You Fortissimo je dodatak ishrani na bazi meda i kombinacije biljnih sastojaka, dostupan u praktičnim kesicama od 7 g.",
  },
  {
    question: "Koliko grama ima jedna kesica?",
    answer: "Jedna kesica sadrži 7 g proizvoda.",
  },
  {
    question: "Koja pakovanja postoje?",
    answer: "Dostupna su pakovanja od 1, 3 i 7 kesica.",
  },
  {
    question: "Koliko košta Med za potenciju?",
    answer:
      "Cena zavisi od pakovanja. Jedna kesica košta 500 din, tri kesice 990 din, a sedam kesica 1.960 din.",
  },
  {
    question: "Kako se koristi?",
    answer:
      "Preporučuje se jedna kesica približno sat vremena pre seksualne aktivnosti. Sadržaj kesice istisnite direktno u usta ili na kašičicu; proizvod se ne dodaje u napitke ni hranu. Pre upotrebe proverite aktuelnu deklaraciju i uputstvo proizvoda.",
  },
  {
    question: "Da li je Med za potenciju lek?",
    answer:
      "Ne. Q4You Fortissimo je dodatak ishrani i nije zamena za lek ili medicinsku terapiju.",
  },
  {
    question: "Ko ne treba da koristi proizvod?",
    answer:
      "Proizvod nije namenjen osobama mlađim od 18 godina, trudnicama i dojiljama. Osobe sa alergijama ili preosetljivošću na sastojke treba da provere deklaraciju pre upotrebe.",
  },
  {
    question: "Da li mogu da platim pouzećem?",
    answer:
      "Da. Plaćanje je isključivo pouzećem — paket plaćate kuriru prilikom preuzimanja.",
  },
  {
    question: "Da li je dostava diskretna?",
    answer: "Da. Proizvod se šalje u diskretnom, neutralnom pakovanju.",
  },
  {
    question: "Koliko košta dostava?",
    answer:
      "Dostava se plaća 535 dinara i naplaćuje se pouzećem zajedno sa porudžbinom. Isporuka je u roku od 24 časa.",
  },
  {
    question: "Kako mogu da poručim?",
    answer:
      "Izaberite željeno pakovanje, kliknite na „Dodaj u korpu“ i završite porudžbinu. Za dodatna pitanja možete pozvati +381 63 342 3800, svakog dana od 10 do 20 časova.",
  },
];
