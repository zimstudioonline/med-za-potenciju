/**
 * Tekst koji se razlikuje od pakovanja do pakovanja.
 *
 * Tri stranice proizvoda dele isti opis sastava, upotrebe i upozorenja — to su
 * činjenice o proizvodu i nema razloga da se prepričavaju na tri načina. Ono što
 * se razlikuje je razlog zbog kog neko bira baš tu količinu, pa taj deo stoji
 * ovde: uvod, sekcija „zašto baš ovo pakovanje" i nekoliko pitanja u FAQ-u.
 *
 * Bez ovoga bi tri stranice bile skoro identične, što je i za čitaoca i za
 * pretraživač slaba strana: Google takav skup stranica vidi kao jednu.
 */
type PackContent = {
  /** Stoji ispod H1, kao kratko objašnjenje ugla. */
  subtitle: string;
  /** Naslov uvodne sekcije — nosi naziv pakovanja, ne samo proizvoda. */
  introHeading: string;
  /** Prvi pasus uvodne sekcije. */
  intro: string;
  /** Naslov sekcije sa prednostima baš te količine. */
  whyHeading: string;
  why: { icon: string; title: string; text: string }[];
  /** Pitanja specifična za pakovanje — idu ispred zajedničkih. */
  faq: { question: string; answer: string }[];
};

export const PACK_CONTENT: Record<string, PackContent> = {
  "q4you-fortissimo-1-kesica": {
    subtitle: "Isprobajte pre nego što odlučite",
    introHeading: "Med za potenciju – Q4You Fortissimo, 1 kesica",
    intro:
      "Ako se prvi put susrećete sa Q4You Fortissimo dodatkom ishrani, pojedinačna kesica od 7 g je najlogičniji način da počnete. Isprobajte proizvod jednom i sami procenite da li vam kombinacija meda i biljnih sastojaka odgovara, pre nego što se odlučite za veće pakovanje.",
    whyHeading: "Zašto baš 1 kesica?",
    why: [
      {
        icon: "🧪",
        title: "Bez rizika velike kupovine",
        text: "Isprobavate proizvod uz minimalno ulaganje.",
      },
      {
        icon: "🎯",
        title: "Jasna prilika za procenu",
        text: "Jedna kesica je dovoljna da testirate kako proizvod funkcioniše u vašoj rutini.",
      },
      {
        icon: "📦",
        title: "Ista formula, manje pakovanje",
        text: "Sastav je identičan kao kod pakovanja od 3 i 7 kesica.",
      },
      {
        icon: "🔒",
        title: "Diskretna isporuka",
        text: "Paket stiže u neutralnom pakovanju.",
      },
    ],
    faq: [
      {
        question: "Da li se pojedinačna kesica razlikuje po sastavu od većih pakovanja?",
        answer:
          "Ne. Sastav je isti u sva tri pakovanja — razlikuje se samo broj kesica u kutiji. Aktuelna deklaracija proizvoda je merodavna.",
      },
      {
        question: "Koliko košta jedna kesica u odnosu na veća pakovanja?",
        answer:
          "Pojedinačna kesica košta 500 din. U pakovanju od 3 kesice cena po kesici je 330 din, a u pakovanju od 7 kesica 280 din.",
      },
      {
        question: "Da li mogu kasnije da naručim veće pakovanje?",
        answer:
          "Da. Pakovanja od 3 i 7 kesica dostupna su u svakom trenutku i naručuju se na isti način.",
      },
      {
        question: "Za koliko upotreba je dovoljna jedna kesica?",
        answer:
          "Preporučena količina je jedna kesica približno sat vremena pre seksualne aktivnosti, pa je pojedinačno pakovanje namenjeno jednoj upotrebi.",
      },
    ],
  },

  "q4you-fortissimo-3-kesice": {
    subtitle: "Najbolji balans cene i količine",
    introHeading: "Med za potenciju – Q4You Fortissimo, 3 kesice",
    intro:
      "Pakovanje od 3 kesice je najčešći izbor onih koji su već upoznati sa proizvodom ili žele više od jedne kesice na raspolaganju, bez kupovine najveće količine. Cena po kesici je niža nego kod pojedinačnog pakovanja, a količina ostaje umerena.",
    whyHeading: "Zašto baš 3 kesice?",
    why: [
      {
        icon: "⚖️",
        title: "Razuman odnos cene i količine",
        text: "330 din po kesici, umesto 500 din kod pojedinačnog pakovanja.",
      },
      {
        icon: "🔁",
        title: "Dovoljno za više prilika",
        text: "Ne morate naručivati ponovo posle svake upotrebe.",
      },
      {
        icon: "🎯",
        title: "Srednje pakovanje",
        text: "Izbor onih koji već znaju da im proizvod odgovara, ali ne žele najveću količinu.",
      },
      {
        icon: "🔒",
        title: "Diskretna isporuka",
        text: "Paket stiže u neutralnom pakovanju.",
      },
    ],
    faq: [
      {
        question: "Koliko iznosi cena po kesici u pakovanju od 3 kesice?",
        answer:
          "Pakovanje od 3 kesice košta 990 din, što je 330 din po kesici — 170 din manje nego kod pojedinačne kesice.",
      },
      {
        question: "Kolika je ukupna količina proizvoda u ovom pakovanju?",
        answer: "Tri kesice po 7 g, odnosno ukupno 21 g proizvoda.",
      },
      {
        question: "Da li se isplati više uzeti pakovanje od 7 kesica?",
        answer:
          "Cena po kesici je najniža kod pakovanja od 7 kesica i iznosi 280 din. Pakovanje od 3 kesice je sredina — niža cena po kesici nego kod pojedinačne, uz manju ukupnu porudžbinu.",
      },
      {
        question: "Da li kesice imaju isti rok trajanja kao u većim pakovanjima?",
        answer:
          "Rok trajanja je odštampan na pakovanju i deklaraciji proizvoda i ne zavisi od broja kesica u kutiji.",
      },
    ],
  },

  "q4you-fortissimo-7-kesica": {
    subtitle: "Najisplativije pakovanje za redovnu upotrebu",
    introHeading: "Med za potenciju – Q4You Fortissimo, 7 kesica",
    intro:
      "Pakovanje od 7 kesica namenjeno je onima koji su već odlučili da im proizvod odgovara, ili žele zalihu za duži period bez čestog naručivanja. Cena po kesici je najniža u ponudi — 280 din, u odnosu na 500 din kod pojedinačnog pakovanja.",
    whyHeading: "Zašto baš 7 kesica?",
    why: [
      {
        icon: "💰",
        title: "Najniža cena po kesici",
        text: "280 din po kesici, najpovoljnije u ponudi.",
      },
      {
        icon: "📦",
        title: "Zaliha za duži period",
        text: "Nema potrebe za ponovnom porudžbinom posle svake upotrebe.",
      },
      {
        icon: "🔁",
        title: "Manje čestog naručivanja",
        text: "Pogodno ako ne želite da razmišljate o porudžbini svaki put.",
      },
      {
        icon: "🔒",
        title: "Diskretna isporuka",
        text: "Paket stiže u neutralnom pakovanju.",
      },
    ],
    faq: [
      {
        question: "Koliko se ušteđuje kupovinom pakovanja od 7 kesica?",
        answer:
          "Cena po kesici je 280 din umesto 500 din koliko košta pojedinačna kesica. Na sedam kesica to je 1.540 din manje nego da se kupuje jedna po jedna.",
      },
      {
        question: "Kolika je ukupna količina proizvoda u ovom pakovanju?",
        answer: "Sedam kesica po 7 g, odnosno ukupno 49 g proizvoda.",
      },
      {
        question: "Kako se čuva otvoreno pakovanje?",
        answer:
          "Kesice su pojedinačno zatvorene, pa se otvara samo ona koja se koristi. Uslove čuvanja proverite na deklaraciji proizvoda.",
      },
      {
        question: "Da li je ovo pakovanje namenjeno svakodnevnoj upotrebi?",
        answer:
          "Ne. Preporuka proizvođača je jedna kesica približno sat vremena pre seksualne aktivnosti, a ne svakodnevno uzimanje. Veće pakovanje znači zalihu za više prilika, ne veću dnevnu količinu.",
      },
    ],
  },
};
