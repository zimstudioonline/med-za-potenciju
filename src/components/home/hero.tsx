import Link from "next/link";

const HERO_POINTS = ["Diskretno pakovanje", "Brza isporuka", "Sigurna kupovina"];

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-2 lg:gap-16 lg:pb-24">
      {/* LEFT — copy and CTA */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Q4You Fortissimo
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-balance md:text-6xl">
          Med za potenciju
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          Prirodni izbor za muškarce koji žele više samopouzdanja, energije i uživanja u intimnim
          trenucima.
        </p>

        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          Dodatak ishrani na bazi cvetnog meda, biljnih ekstrakata i začina, u praktičnim kesicama
          od 7 grama. Bez pripreme, bez merenja — jedna kesica kada vam je važno da budete spremni.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#pakovanja"
            className="rounded-full bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90"
          >
            Naruči sada
          </Link>
          <Link
            href="#sta-je"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Saznajte više o proizvodu →
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {HERO_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium">
              <span aria-hidden className="text-primary">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — the actual box */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-6 -z-10 rounded-full bg-primary/15 blur-3xl"
        />
        <img
          src="/med-za-potenciju-fortissimo.webp"
          alt="Originalno pakovanje Q4You Fortissimo — med za potenciju, 7 kesica po 7 g"
          className="mx-auto w-full max-w-lg rounded-[32px] border border-border bg-card object-contain shadow-xl"
        />
      </div>
    </section>
  );
}
