export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  rating: number;
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
  date: string;
  readTime: string;
  author: string;
  content: string[];
};

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "VitaBoost Energy",
    slug: "vitaboost-energy",
    category: "Energy",
    price: 39,
    rating: 4.9,
    badge: "Najprodavanije",
    description: "Formula za prirodnu energiju bez padova i nervoze.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    name: "PureBalance Pro",
    slug: "purebalance-pro",
    category: "Wellness",
    price: 52,
    rating: 4.8,
    badge: "Nova linija",
    description: "Podrška za balans, imunitet i svakodnevnu vitalnost.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    id: 3,
    name: "SleepRestore",
    slug: "sleeprestore",
    category: "Sleep",
    price: 46,
    rating: 5,
    badge: "Top ocena",
    description: "Noćni režim za dublji san i brže oporavljenje.",
    accent: "from-violet-400 to-indigo-500",
  },
  {
    id: 4,
    name: "FluxFocus",
    slug: "fluxfocus",
    category: "Focus",
    price: 44,
    rating: 4.7,
    badge: "Za radni dan",
    description: "Pomaže koncentraciji, memoriji i produktivnosti bez jittera.",
    accent: "from-sky-400 to-cyan-500",
  },
  {
    id: 5,
    name: "Q4You Fortissimo",
    slug: "q4you-fortissimo",
    category: "Potencija",
    price: 1960,
    rating: 4.9,
    badge: "Med za potenciju",
    description: "Prirodni med sa biljnim ekstraktima za podršku vitalnosti i energije.",
    accent: "from-green-400 to-emerald-600",
    image: "/med-za-potenciju-fortissimo.webp",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "koliko-sna-ima-uticaj-na-libido",
    title: "Koliko san ima uticaj na libido i potenciju",
    excerpt:
      "Veza između kvaliteta sna, hormona i seksualne energije je jača nego što mnogi pretpostavljaju.",
    category: "Zdravlje",
    date: "12. avgust 2026.",
    readTime: "4 min čitanja",
    author: "Dr. Maja Petrović",
    content: [
      "Kvalitetan san utiva na hormonalnu ravnotežu, nivo stresa i opštu energiju. U praksi, ljudi koji spavaju nedovoljno često imaju niži libido i veću umor, što dodatno utiče na seksualnu funkciju.",
      "Tokom noći telo reguliše kortizol, testosteron i leptin. Ako je san fragmentiran, ometa se balans koji podržava energiju, raspoloženje i seksualnu želju.",
      "Najbolji pristup je jednostavan: redovan ritam spavanja, ograničenje ekrana pre spavanja i adekvatna dnevna aktivnost. U kombinaciji sa uravnoteženom ishranom, to daje vidljive rezultate.",
    ],
  },
  {
    slug: "5-najcescih-gresaka-u-dnevnoj-rutini",
    title: "5 najčešćih grešaka u dnevnoj rutini koje smanjuju energiju",
    excerpt:
      "Mali navike mogu imati veliki uticaj na nivo energije, stres i seksualni wellness.",
    category: "Rutina",
    date: "4. avgust 2026.",
    readTime: "6 min čitanja",
    author: "Ana Kovačević",
    content: [
      "Jedna od najčešćih grešaka je preskakanje doručka. Bez stabilne energije ujutru, telo kasnije pređe u status stresa i umora.",
      "Druga je previše kofeina kasnije tokom dana, što poremeti san i dovodi do ciklusa umora i iscrpljenosti.",
      "Nedovoljno tečnosti, premalo pokreta i previše stresa odražavaju se i na libido. Zbog toga je važno uspostaviti jednostavan, dosledan plan.",
    ],
  },
  {
    slug: "vitamini-za-podrsku-muzkoj-energiji",
    title: "Vitamini i minerali za podršku muškoj energiji",
    excerpt:
      "Ponekad je nedostatak magnezijuma, cinka ili vitamina D značajniji faktor od same preopterećenosti.",
    category: "Nutricionizam",
    date: "21. jul 2026.",
    readTime: "5 min čitanja",
    author: "Marko Ilić",
    content: [
      "U svakodnevnom životu mnogi pojedinci zanemaruju da odabir prehrane utiče direktno na hormonale i seksualnu energiju.",
      "Magnezijum podržava mišićnu relaksaciju i regulaciju stresa, cink pomaže u održavanju normalne funkcije reproduktivnog sistema, a vitamin D doprinosi kako opštem, tako i metaboličkom wellnessu.",
      "Najbolji efekat dobija se kada se ove nutrijente koristi kao deo celokupnog pristupa: kvalitetan san, pravilna ishrana i kontrolisan stres.",
    ],
  },
  {
    slug: "q4you-fortissimo-med-za-potenciju",
    title: "Q4You Fortissimo – Med za potenciju i vitalnost",
    excerpt:
      "Prirodna kombinacija meda i biljnih ekstrakata u praktičnim kesicama za podršku energiji i intimnom wellness-u.",
    category: "Proizvodi",
    date: "15. august 2026.",
    readTime: "8 min čitanja",
    author: "Zdravstveni savetnik",
    content: [
      "Q4You Fortissimo je dodatak ishrani na bazi meda i biljnih sastojaka, namenjen odraslim osobama koje žele da podrže svoju energiju, vitalnost i seksualnu želju. Proizvod dolazi u praktičnim kesicama od po 7 grama, što omogućava jednostavno doziranje i lako nošenje.",
      "Formula sadrži kombinaciju različitih biljnih ekstrakata i začina: đumbir, galanga, epimedium, kopriva, ginko, različite vrste ženšena, cimet, maka, seme bundeve, seme kole, pol polen, rogač, ovas, kao i liofilizirano matično mleč. Svi ti elementi se kombinuju sa cvetnim medom i glukoznim sirupom.",
      "Praktična upotreba je jedan od ključnih razlika Q4You Fortissimo-a. Sadržaj jedne kesice može se iscediti direktno u usta ili staviti na kašičicu i pojesti. Preporučena upotreba je jedna kesica najmanje sat vremena pre seksualne aktivnosti, na praznom stomaku ili najmanje dva sata nakon obroka.",
      "Standardno pakovanje sadrži 7 kesica po 7 grama, što čini sveuku masu od 49 grama. Cena pakovanja je 1.960 dinara, ali dostupne su i druge opcije: pojedinačna kesica (500 din) ili pakovanje od 3 kesice (990 din). Posebna cena od 450 dinara za jednu kesicu je takođe dostupna.",
      "Q4You Fortissimo je namenjen odraslim muškarcima i ženama. Proizvod nije preporučljiv za osobe mlađe od 18 godina, trudnice i dojilje. Osobe sa alergijom na neki od sastojaka ili sa postojećim zdravstvenim problemima trebaju da provere sastav i po potrebi da se posavetuju sa lekarom ili farmaceutom.",
      "Glavne praktične prednosti su jednostavan način korišćenja, diskretna upotreba, lako čuvanje i transport. Dostupna je i diskretna isporuka u roku od 24 časa, dok se porudžbine telefonom primaju svakog dana od 10 do 20 časova.",
      "Ako tražite prirodan dodatak za podršku energiji i intimnom wellness-u, Q4You Fortissimo može biti odličan izbor. Međutim, važno je imati realna očekivanja: dodaci ishrani nisu zamena za pregled ili lečenje zdravstvenog problema. Ako su problemi sa erekcijom ili libidom učestali ili traju duže vreme, razgovor sa lekarom može pomoći da se utvrdi njihov uzrok.",
      "Pre poručivanja proverite aktuelnu cenu, dostupnost, način dostave i detaljno kompletnu listu sastojaka, posebno ako imate alergije ili koristite terapiju. Q4You Fortissimo je dostupan za poručivanje uz dostavu na adresu u Srbiji.",
    ],
  },
];
