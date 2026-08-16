import { FaqAccordion } from "@/components/faq-accordion";
import { FAQ_GROUP_LABELS, FAQ_ITEMS, type FaqGroup } from "@/data/product-content";
import { PHONE_DISPLAY, PHONE_HOURS, PHONE_HREF } from "@/lib/contact";

/** Group order is the reading order: what it is → is it safe → how to buy it. */
const GROUP_ORDER: FaqGroup[] = ["proizvod", "bezbednost", "porucivanje"];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">
        Česta pitanja o Medu za potenciju i načinu upotrebe
      </h2>
      <p className="mt-4 text-muted-foreground">
        Ako nešto nije razjašnjeno, pozovite nas na{" "}
        <a href={PHONE_HREF} className="font-medium text-primary hover:underline">
          {PHONE_DISPLAY}
        </a>{" "}
        {PHONE_HOURS}.
      </p>

      {GROUP_ORDER.map((group) => (
        <div key={group} className="mt-12 first:mt-10">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            {FAQ_GROUP_LABELS[group]}
          </h3>
          <div className="mt-4">
            <FaqAccordion items={FAQ_ITEMS.filter((item) => item.group === group)} />
          </div>
        </div>
      ))}
    </section>
  );
}
