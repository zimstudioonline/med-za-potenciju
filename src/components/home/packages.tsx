import { AddToCart } from "@/components/add-to-cart";
import { getProducts } from "@/lib/content";
import { formatMoney } from "@/lib/money";
import { SHIPPING_FEE } from "@/lib/shipping";

export async function Packages() {
  /** Cheapest pack first is confusing here — customers compare upward from a single sachet. */
  const packs = (await getProducts()).sort((a, b) => a.sachets - b.sachets);

  return (
    <section id="pakovanja" className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <img
              src="/med-za-potenciju-fortissimo.webp"
              alt="Med za potenciju Q4You Fortissimo — pakovanje od 7 kesica po 7 g (49 g)"
              className="w-full rounded-[32px] border border-border bg-card object-contain shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Med za potenciju</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Ista formula u svakoj kesici — razlika je samo u količini i ceni po kesici. Izaberite
              pakovanje i poručite bez registracije, uz plaćanje pouzećem.
            </p>

            <div className="mt-8 space-y-4">
              {packs.map((pack) => {
                const perSachet = Math.round(pack.price / pack.sachets);
                const isBest = pack.sachets === 7;

                return (
                  <article
                    key={pack.id}
                    className={`flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-card p-5 shadow-sm transition ${
                      isBest ? "border-primary ring-1 ring-primary/30" : "border-border"
                    }`}
                  >
                    {pack.image && (
                      <img
                        src={pack.image}
                        alt={pack.imageAlt ?? pack.name}
                        className="size-16 shrink-0 rounded-xl border border-border object-cover"
                      />
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold">{pack.packSize}</h3>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] ${
                            isBest
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {pack.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground tabular-nums">
                        {formatMoney(perSachet, pack.currency)} po kesici
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="text-xl font-black tabular-nums">
                        {formatMoney(pack.price, pack.currency)}
                      </p>
                      <AddToCart slug={pack.slug} label="Izaberi" goToCart />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Defaults to the standard 7-sachet pack — the one most people want. */}
            <AddToCart
              slug={packs[packs.length - 1]!.slug}
              label="Naruči med za potenciju"
              goToCart
              className="mt-8 inline-flex px-8 py-4 text-base font-bold uppercase tracking-wide shadow-lg shadow-primary/25"
            />

            <p className="mt-4 text-sm text-muted-foreground tabular-nums">
              Dostava {formatMoney(SHIPPING_FEE)} · plaćanje pouzećem kuriru brze pošte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
