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
];
