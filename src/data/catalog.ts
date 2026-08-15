import { DEFAULT_CURRENCY } from "@/lib/money";

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  /** Unit price in `currency`. */
  price: number;
  currency: string;
  /** Reference price for the discount pill — the cost of the same quantity bought as single sachets. */
  compareAt?: number;
  /** What the customer actually receives. */
  packSize: string;
  /** Number of sachets — drives the "cheapest per sachet" comparison. */
  sachets: number;
  badge: string;
  description: string;
  accent: string;
  image?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
  content: string[];
};

const SINGLE_SACHET_PRICE = 500;

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Q4You Fortissimo — 7 kesica",
    slug: "q4you-fortissimo-7-kesica",
    category: "Potencija",
    price: 1960,
    currency: DEFAULT_CURRENCY,
    compareAt: SINGLE_SACHET_PRICE * 7,
    packSize: "7 kesica × 7 g (49 g)",
    sachets: 7,
    badge: "Najveća ušteda",
    description:
      "Standardno pakovanje meda sa biljnim ekstraktima — dovoljno za sedam upotreba, uz najnižu cenu po kesici.",
    accent: "from-amber-400 to-orange-600",
    image: "/med-za-potenciju-fortissimo.webp",
  },
  {
    id: 2,
    name: "Q4You Fortissimo — 3 kesice",
    slug: "q4you-fortissimo-3-kesice",
    category: "Potencija",
    price: 990,
    currency: DEFAULT_CURRENCY,
    compareAt: SINGLE_SACHET_PRICE * 3,
    packSize: "3 kesice × 7 g (21 g)",
    sachets: 3,
    badge: "Srednje pakovanje",
    description:
      "Srednje pakovanje za one koji žele da isprobaju proizvod kroz nekoliko upotreba pre većeg pakovanja.",
    accent: "from-amber-300 to-orange-500",
    image: "/med-za-potenciju-fortissimo.webp",
  },
  {
    id: 3,
    name: "Q4You Fortissimo — 1 kesica",
    slug: "q4you-fortissimo-1-kesica",
    category: "Potencija",
    price: SINGLE_SACHET_PRICE,
    currency: DEFAULT_CURRENCY,
    packSize: "1 kesica × 7 g",
    sachets: 1,
    badge: "Za prvo isprobavanje",
    description:
      "Pojedinačna kesica — najjednostavniji način da isprobate proizvod bez obavezivanja na celo pakovanje.",
    accent: "from-yellow-300 to-amber-500",
    image: "/med-za-potenciju-fortissimo.webp",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "koliko-sna-ima-uticaj-na-libido",
    title: "Koliko san ima uticaj na libido i potenciju",
    excerpt:
      "Veza između kvaliteta sna, hormona i seksualne energije jača je nego što mnogi pretpostavljaju.",
    category: "Zdravlje",
    categoryColor: "bg-emerald-500",
    date: "12. avgust 2026.",
    readTime: "4 min čitanja",
    author: "Dr. Maja Petrović",
    image:
      "https://images.unsplash.com/photo-1513722032602-daca6f5e4a7d?q=80&w=800&auto=format&fit=crop",
    content: [
      "Kvalitetan san utiče na hormonsku ravnotežu, nivo stresa i opštu energiju. U praksi, ljudi koji spavaju nedovoljno često imaju niži libido i veći umor, što dodatno utiče na seksualnu funkciju.",
      "Tokom noći telo reguliše kortizol, testosteron i leptin. Ako je san isprekidan, remeti se balans koji podržava energiju, raspoloženje i seksualnu želju.",
      "Najbolji pristup je jednostavan: redovan ritam spavanja, ograničenje ekrana pre spavanja i dovoljno dnevne aktivnosti. U kombinaciji sa uravnoteženom ishranom, to daje vidljive rezultate.",
    ],
  },
  {
    slug: "5-najcescih-gresaka-u-dnevnoj-rutini",
    title: "5 najčešćih grešaka u dnevnoj rutini koje smanjuju energiju",
    excerpt:
      "Male navike mogu imati veliki uticaj na nivo energije, stres i seksualno zdravlje.",
    category: "Rutina",
    categoryColor: "bg-amber-500",
    date: "4. avgust 2026.",
    readTime: "6 min čitanja",
    author: "Ana Kovačević",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    content: [
      "Jedna od najčešćih grešaka je preskakanje doručka. Bez stabilne energije ujutru, telo kasnije tokom dana ulazi u stanje stresa i umora.",
      "Druga je previše kofeina u drugoj polovini dana, što remeti san i pokreće ciklus umora i iscrpljenosti.",
      "Nedovoljno tečnosti, premalo pokreta i previše stresa odražavaju se i na libido. Zbog toga je važno uspostaviti jednostavan i dosledan plan.",
    ],
  },
  {
    slug: "vitamini-za-podrsku-muzkoj-energiji",
    title: "Vitamini i minerali za podršku muškoj energiji",
    excerpt:
      "Ponekad je nedostatak magnezijuma, cinka ili vitamina D značajniji faktor od same preopterećenosti.",
    category: "Nutricionizam",
    categoryColor: "bg-lime-500",
    date: "21. jul 2026.",
    readTime: "5 min čitanja",
    author: "Marko Ilić",
    image:
      "https://images.unsplash.com/photo-1631217266806-68d27e03a26f?q=80&w=800&auto=format&fit=crop",
    content: [
      "U svakodnevnom životu mnogi zanemaruju da izbor hrane direktno utiče na hormone i na nivo energije.",
      "Magnezijum podržava relaksaciju mišića i regulaciju stresa, cink pomaže u održavanju normalne funkcije reproduktivnog sistema, a vitamin D doprinosi opštem i metaboličkom zdravlju.",
      "Najbolji efekat postiže se kada se ovi nutrijenti koriste kao deo celokupnog pristupa: kvalitetan san, pravilna ishrana i kontrolisan stres.",
    ],
  },
  {
    slug: "q4you-fortissimo-med-za-potenciju",
    title: "Q4You Fortissimo – Med za potenciju i vitalnost",
    excerpt:
      "Prirodna kombinacija meda i biljnih ekstrakata u praktičnim kesicama, za podršku energiji i intimnom zdravlju.",
    category: "Proizvodi",
    categoryColor: "bg-orange-500",
    date: "15. avgust 2026.",
    readTime: "8 min čitanja",
    author: "Zdravstveni savetnik",
    image: "/med-za-potenciju-fortissimo.webp",
    content: [
      "Q4You Fortissimo je dodatak ishrani na bazi meda i biljnih sastojaka, namenjen odraslim osobama koje žele da podrže svoju energiju, vitalnost i seksualnu želju. Proizvod dolazi u praktičnim kesicama od 7 grama, što omogućava jednostavno doziranje i lako nošenje.",
      "Formula sadrži kombinaciju biljnih ekstrakata i začina: đumbir, galangu, epimedium, koprivu, ginko, različite vrste ženšena, cimet, maku, seme bundeve, seme kole, polen, rogač i ovas, kao i liofilizirani matični mleč. Svi ti sastojci kombinovani su sa cvetnim medom i glukoznim sirupom.",
      "Praktična upotreba je jedna od ključnih odlika Q4You Fortissima. Sadržaj jedne kesice može se iscediti direktno u usta ili staviti na kašičicu i pojesti. Preporučena upotreba je jedna kesica najmanje sat vremena pre seksualne aktivnosti, na prazan stomak ili najmanje dva sata nakon obroka.",
      "Standardno pakovanje sadrži 7 kesica po 7 grama, odnosno ukupno 49 grama, i košta 1.960 dinara. Dostupne su i manje opcije: pojedinačna kesica za 500 dinara ili pakovanje od 3 kesice za 990 dinara.",
      "Q4You Fortissimo je namenjen odraslim muškarcima i ženama. Proizvod se ne preporučuje osobama mlađim od 18 godina, trudnicama i dojiljama. Osobe sa alergijom na neki od sastojaka ili sa postojećim zdravstvenim problemima treba da provere sastav i, po potrebi, da se posavetuju sa lekarom ili farmaceutom.",
      "Glavne praktične prednosti su jednostavno korišćenje, diskretna upotreba i lako čuvanje i transport. Dostupna je i diskretna isporuka u roku od 24 časa, dok se porudžbine telefonom primaju svakog dana od 10 do 20 časova.",
      "Ako tražite prirodan dodatak za podršku energiji i intimnom zdravlju, Q4You Fortissimo može biti dobar izbor. Važno je, međutim, imati realna očekivanja: dodaci ishrani nisu zamena za pregled ili lečenje zdravstvenog problema. Ako su problemi sa erekcijom ili libidom česti ili traju duže vreme, razgovor sa lekarom može pomoći da se utvrdi njihov uzrok.",
      "Pre poručivanja proverite aktuelnu cenu, dostupnost, način dostave i kompletnu listu sastojaka, posebno ako imate alergije ili koristite terapiju. Q4You Fortissimo je dostupan za poručivanje uz dostavu na adresu u Srbiji.",
    ],
  },
];

export function findProduct(slug: string): Product | undefined {
  return featuredProducts.find((product) => product.slug === slug);
}

export function findPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
