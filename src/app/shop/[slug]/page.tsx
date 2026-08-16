import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCart } from "@/components/add-to-cart";
import { FaqAccordion } from "@/components/faq-accordion";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CartIcon, PhoneIcon } from "@/components/icons";
import { MotionProvider } from "@/components/motion-provider";
import { Reveal } from "@/components/reveal";
import { Product01 } from "@/components/sections/product-01";
import { findProductBySlug, getProducts, getProductSlugs } from "@/lib/content";
import {
  INGREDIENTS,
  LANDING_BENEFITS,
  LANDING_FACTS,
  LANDING_TRUST_BAR,
  PACK_ADVICE,
  PRE_USE_WARNINGS,
  PRODUCT_FAQ_ITEMS,
} from "@/data/product-content";
import { PHONE_DISPLAY, PHONE_HOURS, PHONE_HREF } from "@/lib/contact";
import { formatMoney } from "@/lib/money";
import { SHIPPING_FEE } from "@/lib/shipping";

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getProductSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await findProductBySlug(slug);

  if (!product) {
    return { title: "Proizvod nije pronađen" };
  }

  return {
    title: `${product.name} — ${formatMoney(product.price, product.currency)}`,
    description: product.description,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  /** Cheapest pack first — the comparison table reads upward from a single sachet. */
  const packsByPrice = (await getProducts()).sort((a, b) => a.sachets - b.sachets);

  const images = product.image
    ? [{ src: product.image, alt: product.imageAlt ?? `${product.name} — pakovanje` }]
    : undefined;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <MotionProvider>
        <Product01
          brand="Q4You"
          title={product.name}
          price={product.price}
          compareAt={product.compareAt}
          currency={product.currency}
          reviewCount={0}
          description={product.description}
          badge={product.badge}
          addToCartLabel="Dodaj u korpu"
          buyNowLabel="Kupi odmah"
          as="h1"
          images={images}
          colors={[]}
          sizes={[]}
          labels={{
            reviews: "recenzija",
            inStock: "Na stanju, šaljemo u roku od 24 časa",
            save: "Ušteda {percent}%",
            freeShipping: "Diskretna dostava",
            returns: "Podrška 10–20h svakog dana",
            secureCheckout: "Sigurno plaćanje",
            decreaseQuantity: "Umanji količinu",
            increaseQuantity: "Uvećaj količinu",
            addToWishlist: "Dodaj na listu želja",
          }}
        />

        {/* Intro */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Med za potenciju – Q4You Fortissimo
              </h2>

              <p className="mt-6 text-lg font-semibold leading-8">
                Q4You Fortissimo je dodatak ishrani na bazi meda i kombinacije biljnih sastojaka,
                dostupan u praktičnim kesicama od 7 g.
              </p>

              <div className="mt-4 space-y-4 leading-8 text-muted-foreground">
                <p>
                  Proizvod je namenjen odrasloj populaciji i predstavlja praktičan način da u
                  svakodnevnu rutinu uključite proizvod na bazi meda, biljnih ekstrakata, začina i
                  drugih sastojaka navedenih na deklaraciji.
                </p>
                <p>
                  Dostupan je u pakovanjima od{" "}
                  <strong className="font-bold text-foreground">1, 3 i 7 kesica</strong>, pa možete
                  izabrati količinu koja vam odgovara.
                </p>
              </div>

              <AddToCart
                slug={product.slug}
                label="Naruči Med za potenciju"
                goToCart
                className="mt-8 px-8 py-4 text-base font-bold uppercase tracking-wide shadow-lg shadow-primary/25"
              />

              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {LANDING_TRUST_BAR.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium">
                    <span aria-hidden className="text-primary">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* What it is */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Šta je Med za potenciju Q4You Fortissimo?
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
              <p>
                <strong className="font-bold text-foreground">
                  Q4You Fortissimo Med za potenciju
                </strong>{" "}
                je dodatak ishrani u obliku praktične kesice od 7 g.
              </p>
              <p>
                Formula kombinuje med, biljne sastojke, začine, polen i liofilizirani matični mleč,
                uz druge sastojke navedene na deklaraciji proizvoda.
              </p>
              <p>
                Proizvod nije lek i ne treba ga posmatrati kao zamenu za medicinsku terapiju,
                dijagnozu ili savet zdravstvenog radnika.
              </p>
              <p>
                Kompletan sastav i količine pojedinačnih sastojaka potrebno je proveriti na
                aktuelnoj deklaraciji proizvoda.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Spec table */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Q4You Fortissimo – najvažnije informacije
              </h2>

              <div className="mt-8 overflow-x-auto rounded-[28px] border border-border bg-card shadow-sm">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-border">
                    {LANDING_FACTS.map((fact) => (
                      <tr key={fact.label}>
                        <th
                          scope="row"
                          className="w-2/5 px-6 py-4 align-top font-semibold whitespace-nowrap"
                        >
                          {fact.label}
                        </th>
                        <td className="px-6 py-4 leading-6 text-muted-foreground">{fact.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Ingredients */}
        <section id="sastav" className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Sastav Q4You Fortissimo Meda za potenciju
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
              Formula proizvoda sadrži kombinaciju meda, biljnih sastojaka, začina i drugih
              komponenti. Opisi govore šta je koji sastojak, ne šta radi.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {INGREDIENTS.map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md"
                >
                  <span aria-hidden className="text-2xl">
                    {ingredient.icon}
                  </span>
                  <h3 className="mt-3 font-bold">{ingredient.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{ingredient.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
              <strong className="font-bold text-foreground">Važna napomena:</strong> Sastav,
              redosled sastojaka i količine proverite na aktuelnoj deklaraciji proizvoda — ona je
              merodavna.
            </p>
          </Reveal>
        </section>

        {/* How to use */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Kako se koristi Med za potenciju?
              </h2>
              <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
                <p>
                  Preporučuje se{" "}
                  <strong className="font-bold text-foreground">
                    jedna kesica približno sat vremena pre seksualne aktivnosti
                  </strong>
                  .
                </p>
                <p>Sadržaj kesice može se istisnuti direktno u usta ili na kašičicu.</p>
                <p>Proizvod se ne dodaje u napitke ni u hranu.</p>
              </div>

              <p className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm leading-6">
                <strong className="font-bold">Važno:</strong> Nemojte prekoračivati preporučenu
                količinu navedenu na deklaraciji. Uputstvo proizvođača sa pakovanja je merodavno —
                pročitajte ga pre prve upotrebe.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Why practical */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Zašto je Q4You Fortissimo praktičan izbor?
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {LANDING_BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md"
                >
                  <span aria-hidden className="text-3xl">
                    {benefit.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Audience */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Kome je namenjen Med za potenciju?
              </h2>
              <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
                <p>
                  Q4You Fortissimo je proizvod namenjen{" "}
                  <strong className="font-bold text-foreground">odrasloj populaciji</strong>, uz
                  poštovanje upozorenja i uslova navedenih na deklaraciji.
                </p>
                <p>
                  S obzirom na to da proizvod sadrži više različitih sastojaka, osobe koje imaju
                  alergiju ili preosetljivost na neki od sastojaka treba da provere deklaraciju pre
                  upotrebe.
                </p>
                <p>
                  Ako koristite lekove, imate zdravstveno stanje ili imate nedoumice u vezi sa
                  korišćenjem dodatka ishrani, preporučuje se razgovor sa lekarom ili farmaceutom
                  pre upotrebe.
                </p>
                <p>
                  Proizvod nije namenjen osobama mlađim od 18 godina, trudnicama i dojiljama.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Is it a medicine */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Da li je Med za potenciju lek?
            </h2>
            <p className="mt-6 rounded-[28px] border border-primary/30 bg-primary/5 p-6 text-lg leading-8 md:p-8">
              <strong className="font-bold">Ne. Q4You Fortissimo je dodatak ishrani, a ne lek.</strong>{" "}
              Dodatak ishrani ne treba koristiti kao zamenu za propisanu terapiju ili medicinski
              savet.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              Ako imate dugotrajan ili novonastali problem sa seksualnom funkcijom, razgovarajte sa
              lekarom kako bi se utvrdio mogući uzrok.
            </p>
          </Reveal>
        </section>

        {/* Packs and prices */}
        <section id="pakovanja" className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Med za potenciju – pakovanja i cena
              </h2>
              <p className="mt-4 text-muted-foreground">
                Q4You Fortissimo je trenutno dostupan u tri pakovanja:
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {packsByPrice.map((pack) => {
                  const isCurrent = pack.slug === product.slug;

                  return (
                    <article
                      key={pack.id}
                      className={`rounded-[28px] border bg-card p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                        isCurrent ? "border-primary ring-1 ring-primary/30" : "border-border"
                      }`}
                    >
                      <h3 className="text-xl font-bold">
                        {pack.sachets} {pack.sachets === 1 ? "kesica" : "kesice"} × 7 g
                      </h3>
                      <p className="mt-3 text-2xl font-black tabular-nums">
                        {formatMoney(pack.price, pack.currency)}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {pack.description}
                      </p>

                      {isCurrent ? (
                        <AddToCart
                          slug={pack.slug}
                          label={`Naruči ${pack.sachets === 1 ? "1 kesicu" : `${pack.sachets} kesice`}`}
                          className="mt-5 w-full"
                        />
                      ) : (
                        <Link
                          href={`/shop/${pack.slug}`}
                          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold transition duration-200 hover:border-primary hover:text-primary"
                        >
                          <CartIcon />
                          Naruči {pack.sachets === 1 ? "1 kesicu" : `${pack.sachets} kesice`}
                        </Link>
                      )}
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Which pack */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Koje pakovanje izabrati?
            </h2>

            <div className="mt-8 overflow-x-auto rounded-[28px] border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold">
                      Pakovanje
                    </th>
                    <th scope="col" className="px-6 py-4 text-right font-bold whitespace-nowrap">
                      Ukupna količina
                    </th>
                    <th scope="col" className="px-6 py-4 text-right font-bold">
                      Cena
                    </th>
                    <th scope="col" className="px-6 py-4 text-right font-bold whitespace-nowrap">
                      Cena po kesici
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {packsByPrice.map((pack) => (
                    <tr key={pack.id}>
                      <th scope="row" className="px-6 py-4 font-semibold whitespace-nowrap">
                        {pack.sachets === 1 ? "1 kesica" : `${pack.sachets} kesice`}
                      </th>
                      <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                        {pack.sachets * 7} g
                      </td>
                      <td className="px-6 py-4 text-right font-semibold tabular-nums">
                        {formatMoney(pack.price, pack.currency)}
                      </td>
                      <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                        {formatMoney(Math.round(pack.price / pack.sachets), pack.currency)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="mt-8 space-y-3">
              {PACK_ADVICE.map((advice) => (
                <li key={advice.when} className="leading-7">
                  <strong className="font-bold">{advice.when}:</strong>{" "}
                  <span className="text-muted-foreground">{advice.then}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Expectations — no invented reviews */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Med za potenciju – iskustva i očekivanja
              </h2>
              <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
                <p>Iskustvo sa dodatkom ishrani može se razlikovati od osobe do osobe.</p>
                <p>
                  Zbog toga na ovoj stranici nećete naći tvrdnje o garantovanom efektu, vremenu
                  delovanja ili rezultatima koji bi mogli da stvore pogrešno očekivanje.
                </p>
                <p>
                  Nemamo objavljene recenzije kupaca. Kada ih bude, biće prikazane kao iskustva
                  pojedinačnih korisnika — ne kao garancija rezultata.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Warnings */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Važne informacije pre upotrebe
            </h2>
            <ul className="mt-8 space-y-4">
              {PRE_USE_WARNINGS.map((warning) => (
                <li key={warning} className="flex gap-3 leading-7 text-muted-foreground">
                  <span aria-hidden className="mt-1 shrink-0 font-bold text-primary">
                    •
                  </span>
                  {warning}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Delivery */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Dostava i diskretna kupovina
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md">
                  <h3 className="text-lg font-bold">Diskretna isporuka</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Vaša privatnost nam je važna. Proizvod se šalje u diskretnom pakovanju.
                  </p>
                </div>
                <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md">
                  <h3 className="text-lg font-bold">Plaćanje pouzećem</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Porudžbinu plaćate prilikom preuzimanja. Dostava se plaća{" "}
                    {formatMoney(SHIPPING_FEE)}, uz cenu proizvoda.
                  </p>
                </div>
                <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md">
                  <h3 className="text-lg font-bold">Jednostavna porudžbina</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Izaberite željeno pakovanje, dodajte proizvod u korpu i završite porudžbinu.
                  </p>
                </div>
              </div>

              <p className="mt-8 leading-7 text-muted-foreground">
                Za pitanja o proizvodu, dostavi ili poručivanju možete nas kontaktirati telefonom na{" "}
                <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
                . Radno vreme za telefonske porudžbine: {PHONE_HOURS}.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Česta pitanja o Medu za potenciju
            </h2>
            <div className="mt-8">
              <FaqAccordion items={PRODUCT_FAQ_ITEMS} />
            </div>
          </Reveal>
        </section>

        {/* Closing CTA */}
        <section className="border-y border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight">
                Imate pitanje o Medu za potenciju?
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Ako želite da proverite sastav, pakovanje, način poručivanja ili dostavu,
                kontaktirajte nas.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <AddToCart
                  slug={product.slug}
                  label="Naručite Med za potenciju"
                  goToCart
                  className="px-8 py-4 text-base font-bold uppercase tracking-wide shadow-lg shadow-primary/25"
                />
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-semibold transition duration-200 hover:border-primary hover:text-primary"
                >
                  <PhoneIcon className="size-[1.15em]" />
                  Pozovite nas
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </MotionProvider>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-6 text-muted-foreground">
          <strong className="font-bold text-foreground">Važna napomena:</strong> Q4You Fortissimo je
          dodatak ishrani. Informacije na ovoj stranici služe za informisanje o proizvodu i ne
          predstavljaju medicinski savet niti zamenu za konsultaciju sa lekarom ili farmaceutom.
        </p>

        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 text-muted-foreground transition duration-200 hover:text-foreground"
        >
          ← Nazad na shop
        </Link>
      </section>

      <Footer />
    </main>
  );
}
