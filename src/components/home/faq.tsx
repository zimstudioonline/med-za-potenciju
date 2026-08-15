import { FAQ_ITEMS } from "@/data/product-content";

/**
 * Native <details> accordion — no client JS, and the answers stay in the HTML
 * where search engines can read them.
 */
export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">
        Česta pitanja o Medu za potenciju
      </h2>
      <p className="mt-4 text-muted-foreground">
        Ako nešto nije razjašnjeno, pozovite nas na{" "}
        <a href="tel:+381633423800" className="font-medium text-primary hover:underline">
          +381 63 342 3800
        </a>{" "}
        svakog dana od 10 do 20 časova.
      </p>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden
                className="shrink-0 text-xl text-primary transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
