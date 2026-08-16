import { collection, config, fields } from "@keystatic/core";

/**
 * Admin za sadržaj — otvara se na /keystatic.
 *
 * Lokalno (`npm run dev`) piše direktno u fajlove u `content/`, bez ikakvog
 * naloga. Na produkciji piše u GitHub repo preko GitHub App-a, pa svaka izmena
 * postaje commit i pokreće novi deploy. Zato produkcijski režim traži
 * KEYSTATIC_GITHUB_* promenljive — bez njih ostaje lokalni režim, koji na
 * Vercelu ne bi mogao ništa da sačuva (datoteke tamo nisu upisive).
 */
const isGithubStorage =
  process.env.NODE_ENV === "production" && !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;

/** Iste četiri kategorije koje koristi i sajt. */
const CATEGORY_OPTIONS = [
  { label: "Potencija i erekcija", value: "Potencija i erekcija" },
  { label: "Muško seksualno zdravlje", value: "Muško seksualno zdravlje" },
  { label: "Med za potenciju i dodaci ishrani", value: "Med za potenciju i dodaci ishrani" },
  { label: "Sastojci i biljni ekstrakti", value: "Sastojci i biljni ekstrakti" },
];

export default config({
  storage: isGithubStorage
    ? { kind: "github", repo: { owner: "zimstudioonline", name: "med-za-potenciju" } }
    : { kind: "local" },

  ui: {
    brand: { name: "Med za potenciju" },
    navigation: {
      Sadržaj: ["posts", "products"],
    },
  },

  collections: {
    posts: collection({
      label: "Blog tekstovi",
      slugField: "title",
      path: "content/blog/*/",
      // Tekst se čuva kao .mdoc pored ostalih polja, čitljiv i van CMS-a.
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "date"],
      schema: {
        title: fields.slug({
          name: {
            label: "Naslov",
            validation: { length: { min: 1 } },
          },
          slug: {
            label: "Adresa teksta (URL)",
            description: "Deo adrese posle /blog/. Ne menjajte ga posle objave.",
          },
        }),
        excerpt: fields.text({
          label: "Kratak uvod",
          description: "Prikazuje se na kartici u listi tekstova i u opisu za pretraživače.",
          multiline: true,
          validation: { length: { min: 1, max: 300 } },
        }),
        category: fields.select({
          label: "Kategorija",
          options: CATEGORY_OPTIONS,
          defaultValue: "Potencija i erekcija",
        }),
        date: fields.date({
          label: "Datum objave",
          description: "Prikazuje se na kartici.",
          validation: { isRequired: true },
        }),
        readTime: fields.text({
          label: "Vreme čitanja",
          description: 'Na primer: "4 min čitanja".',
          defaultValue: "5 min čitanja",
        }),
        author: fields.text({
          label: "Autor",
          defaultValue: "Med za potenciju",
        }),
        image: fields.image({
          label: "Naslovna slika",
          description: "Preporučeno 1200 × 750 px.",
          directory: "public/blog",
          publicPath: "/blog/",
        }),
        imageAlt: fields.text({
          label: "Opis slike (alt)",
          description: "Šta se vidi na slici — za čitače ekrana i pretraživače.",
          validation: { isRequired: false },
        }),
        content: fields.document({
          label: "Tekst",
          formatting: {
            headingLevels: [2, 3],
            inlineMarks: { bold: true, italic: true },
            listTypes: true,
          },
          links: true,
        }),
      },
    }),

    products: collection({
      label: "Proizvodi",
      slugField: "name",
      path: "content/proizvodi/*/",
      format: { data: "yaml" },
      columns: ["name", "price"],
      schema: {
        name: fields.slug({
          name: {
            label: "Naziv",
            validation: { length: { min: 1 } },
          },
          slug: {
            label: "Adresa proizvoda (URL)",
            description: "Deo adrese posle /shop/. Ne menjajte ga posle objave.",
          },
        }),
        price: fields.integer({
          label: "Cena (din)",
          validation: { isRequired: true, min: 1 },
        }),
        compareAt: fields.integer({
          label: "Precrtana cena (din)",
          description: "Cena iste količine kupljene kao pojedinačne kesice. Ostavite prazno ako je nema.",
          validation: { isRequired: false },
        }),
        packSize: fields.text({
          label: "Pakovanje",
          description: 'Na primer: "7 kesica × 7 g (49 g)".',
          validation: { length: { min: 1 } },
        }),
        sachets: fields.integer({
          label: "Broj kesica",
          description: "Koristi se za sortiranje i za računanje cene po kesici.",
          validation: { isRequired: true, min: 1 },
        }),
        badge: fields.text({
          label: "Oznaka na kartici",
          description: 'Na primer: "Najisplativije".',
        }),
        description: fields.text({
          label: "Opis",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        image: fields.image({
          label: "Fotografija pakovanja",
          description: "Kvadratna, najmanje 1080 × 1080 px.",
          directory: "public/proizvodi",
          publicPath: "/proizvodi/",
        }),
        imageAlt: fields.text({
          label: "Opis slike (alt)",
          validation: { isRequired: false },
        }),
        sortOrder: fields.integer({
          label: "Redosled prikaza",
          description: "Manji broj ide prvi u katalogu.",
          defaultValue: 1,
        }),
      },
    }),
  },
});
