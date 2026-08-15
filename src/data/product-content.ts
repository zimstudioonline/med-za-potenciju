/**
 * Homepage copy for Q4You Fortissimo.
 *
 * Everything here is traceable to the product declaration or to the shop's own
 * stated terms (see the blog post "Q4You Fortissimo – Med za potenciju i vitalnost").
 * Deliberately absent, because it is not confirmed anywhere: how fast the product
 * acts, how long any effect lasts, whether it can be used daily, storage
 * instructions, a "free from" list, and customer reviews. Do not fill these in
 * without the declaration in hand.
 */

export type Benefit = { icon: string; title: string; text: string };

export const BENEFITS: Benefit[] = [
  {
    icon: "⚡",
    title: "Energija",
    text: "Formulisan kao podrška energiji i vitalnosti u svakodnevnom ritmu.",
  },
  {
    icon: "💪",
    title: "Samopouzdanje",
    text: "Kada se osećate dobro, drugačije pristupate intimnom odnosu.",
  },
  {
    icon: "🌿",
    title: "Biljni sastojci",
    text: "Formula zasnovana na pažljivo odabranim biljnim ekstraktima i cvetnom medu.",
  },
  {
    icon: "❤️",
    title: "Intimnost",
    text: "Za muškarce koji žele da više pažnje posvete svom intimnom životu.",
  },
];

export type UsageStep = { step: string; title: string; text: string };

/** Straight from the declaration — no timings beyond what it states. */
export const USAGE_STEPS: UsageStep[] = [
  {
    step: "01",
    title: "Pripremite se na prazan stomak",
    text: "Kesicu uzmite na prazan stomak ili najmanje dva sata nakon obroka.",
  },
  {
    step: "02",
    title: "Iscedite sadržaj kesice",
    text: "Sadržaj jedne kesice iscedite direktno u usta ili ga stavite na kašičicu i pojedite.",
  },
  {
    step: "03",
    title: "Ostavite vremena",
    text: "Preporučena upotreba je jedna kesica najmanje sat vremena pre intimnog trenutka.",
  },
];

export type Ingredient = { icon: string; name: string; text: string };

/**
 * The declaration's ingredient list. Descriptions say what each ingredient *is*,
 * not what it does — health claims about individual ingredients are regulated.
 */
export const INGREDIENTS: Ingredient[] = [
  { icon: "🍯", name: "Cvetni med", text: "Osnova formule — med sakupljen sa cvetnih medonosnih biljaka." },
  { icon: "🌿", name: "Đumbir", text: "Koren tropske biljke, dobro poznat začin izražene arome." },
  { icon: "🌿", name: "Galanga", text: "Koren iz iste familije kao đumbir, tradicionalni azijski začin." },
  { icon: "🌿", name: "Epimedium", text: "Biljka poznata iz azijske tradicionalne upotrebe." },
  { icon: "🌿", name: "Ženšen", text: "Koren ženšena, u formuli zastupljen kroz više vrsta." },
  { icon: "🌿", name: "Maka", text: "Koren biljke koja potiče sa visoravni Anda." },
  { icon: "🌿", name: "Ginko", text: "List drveta Ginkgo biloba." },
  { icon: "🌿", name: "Kopriva", text: "Samonikla biljka široko rasprostranjena i kod nas." },
  { icon: "🌿", name: "Cimet", text: "Kora cimetovog drveta, klasičan začin." },
  { icon: "🌾", name: "Ovas", text: "Žitarica koja se koristi u ishrani." },
  { icon: "🌰", name: "Seme bundeve", text: "Jestivo seme bundeve." },
  { icon: "🌰", name: "Seme kole", text: "Seme afričkog drveta kole." },
  { icon: "🌰", name: "Rogač", text: "Plod rogača, u prehrani poznat kao prirodno sladak sastojak." },
  { icon: "🐝", name: "Polen", text: "Cvetni polen koji sakupljaju pčele." },
  { icon: "🐝", name: "Matični mleč", text: "Pčelinji proizvod, u formuli u liofiliziranom (sušenom) obliku." },
  { icon: "🍯", name: "Glukozni sirup", text: "Nosač i zaslađivač u medenoj bazi." },
];

export type TrustPoint = { icon: string; title: string; text: string };

export const TRUST_POINTS: TrustPoint[] = [
  {
    icon: "🔒",
    title: "Diskretna isporuka",
    text: "Niko ne mora da zna šta ste naručili.",
  },
  {
    icon: "📦",
    title: "Pažljivo pakovanje",
    text: "Proizvod se šalje u neutralnom, diskretnom pakovanju.",
  },
  {
    icon: "☎",
    title: "Podrška kupcima",
    text: "Imate pitanje? Zovite nas svakog dana od 10 do 20 časova.",
  },
  {
    icon: "💳",
    title: "Jednostavna narudžbina",
    text: "Bez registracije i bez plaćanja unapred — plaćate kuriru.",
  },
];

export type FaqItem = { question: string; answer: string };

/**
 * Only questions that can be answered from the declaration or the shop's terms.
 * Left out on purpose: how fast it acts, how long it lasts, daily use, more than
 * one sachet, and storage — none of that is confirmed.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Šta je Med za potenciju?",
    answer:
      "Q4You Fortissimo je dodatak ishrani na bazi cvetnog meda i biljnih ekstrakata, namenjen odraslim osobama. Pakovan je u kesicama od 7 grama, za jednostavno doziranje i diskretno nošenje.",
  },
  {
    question: "Kako se koristi?",
    answer:
      "Sadržaj jedne kesice iscedite direktno u usta ili ga stavite na kašičicu i pojedite. Preporučena upotreba je jedna kesica najmanje sat vremena pre intimnog trenutka, na prazan stomak ili najmanje dva sata nakon obroka.",
  },
  {
    question: "Koliko kesica ima u pakovanju?",
    answer:
      "Standardno pakovanje sadrži 7 kesica po 7 grama, odnosno ukupno 49 grama. Dostupna su i manja pakovanja od 3 kesice i pojedinačna kesica.",
  },
  {
    question: "Ko ne treba da koristi proizvod?",
    answer:
      "Proizvod nije namenjen osobama mlađim od 18 godina, trudnicama i dojiljama. Ako imate alergiju na neki od sastojaka, ako koristite terapiju ili imate postojeći zdravstveni problem, proverite sastav i posavetujte se sa lekarom ili farmaceutom.",
  },
  {
    question: "Da li je ovo lek?",
    answer:
      "Nije. Q4You Fortissimo je dodatak ishrani i nije zamena za uravnoteženu ishranu, lekarski pregled ili lečenje. Ako su problemi sa erekcijom ili libidom česti ili traju duže vreme, razgovor sa lekarom može pomoći da se utvrdi uzrok.",
  },
  {
    question: "Da li mogu da platim pouzećem?",
    answer:
      "Da — plaćanje je isključivo pouzećem. Paket plaćate kuriru brze pošte u trenutku preuzimanja, ne plaćate ništa unapred i ne unosite podatke o kartici.",
  },
  {
    question: "Koliko traje dostava i koliko košta?",
    answer:
      "Isporuka je u roku od 24 časa. Dostava se plaća 535 dinara, uz cenu proizvoda, i naplaćuje se pouzećem zajedno sa porudžbinom.",
  },
  {
    question: "Da li je isporuka diskretna?",
    answer:
      "Jeste. Proizvod se šalje u neutralnom pakovanju na kojem se ne vidi šta je unutra.",
  },
  {
    question: "Kako mogu da poručim?",
    answer:
      "Poručivanje ide preko sajta, bez registracije, ili telefonom na +381 63 342 3800 svakog dana od 10 do 20 časova.",
  },
];
