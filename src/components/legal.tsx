import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

/**
 * Zajednički okvir i tipografija za pravne stranice (politika privatnosti,
 * odricanje od odgovornosti). Tekst tih stranica stoji u komponentama, a ne u
 * CMS-u: menja se retko, a kada se menja, promena treba da ostane zapisana u
 * istoriji koda.
 */

export const LEGAL_EMAIL = "medzapotencijuonline@gmail.com";

export function LegalMail() {
  return (
    <a
      href={`mailto:${LEGAL_EMAIL}`}
      className="font-medium text-blue-700 underline underline-offset-2 hover:no-underline dark:text-blue-400"
    >
      {LEGAL_EMAIL}
    </a>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-black tracking-tight md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function LegalSubtitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-lg font-bold tracking-tight">{children}</h3>;
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="leading-7">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-16 text-lg leading-8 [&_p]:text-muted-foreground">
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Poslednje ažuriranje: {updated}
        </p>

        <div className="mt-10 space-y-4">{intro}</div>

        <div className="mt-12 space-y-12">{children}</div>

        <p className="mt-14 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Datum poslednjeg ažuriranja: {updated}
        </p>
      </article>

      <Footer />
    </main>
  );
}
