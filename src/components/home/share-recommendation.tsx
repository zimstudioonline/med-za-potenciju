import { SITE_URL } from "@/lib/schema";
import { MailIcon, ViberIcon, WhatsAppIcon } from "@/components/icons";
import { ViberShareButton } from "@/components/home/viber-share-button";

/**
 * Preporuka prijatelju. Svaki taster otvara aplikaciju posetioca sa već napisanom
 * porukom, pa nema forme, servera ni prikupljanja tuđih adresa. Tekst je namerno
 * neutralan — primalac vidi samo link i šta na sajtu može da pročita.
 */
const SHARE_SUBJECT = "Preporuka: Med za potenciju";
const SHARE_TEXT = `Pogledaj ovaj sajt — sastav, način upotrebe i cene Meda za potenciju na jednom mestu. Dostava je diskretna, plaćanje pouzećem: ${SITE_URL}`;

const encoded = encodeURIComponent(SHARE_TEXT);

const BUTTON =
  "inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg active:translate-y-0";

const CHANNELS = [
  {
    label: "Pošalji mejlom",
    href: `mailto:?subject=${encodeURIComponent(SHARE_SUBJECT)}&body=${encoded}`,
    className: "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
    Icon: MailIcon,
  },
  {
    label: "Pošalji na WhatsApp",
    href: `https://wa.me/?text=${encoded}`,
    className: "bg-[#25D366] text-white",
    Icon: WhatsAppIcon,
    external: true,
  },
];

export function ShareRecommendation() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card px-6 py-14 text-center shadow-sm md:px-12">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/40"
        />

        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-card text-primary shadow-lg shadow-primary/20">
          <SendIcon />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Prosledite preporuku
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
          Znate nekoga kome bi ovo moglo da zatreba?
          <span className="mt-1 block text-primary">Pošaljite mu link, diskretno.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Prosledite prijatelju naš sajt, gde na jednom mestu može da pročita sastav, način
          upotrebe i cene Meda za potenciju. Ne morate ništa da objašnjavate, dovoljna je jedna
          poruka.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          {CHANNELS.map(({ label, href, className, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`${BUTTON} ${className}`}
            >
              <Icon />
              {label}
            </a>
          ))}
          <ViberShareButton text={SHARE_TEXT} className={`${BUTTON} bg-[#7360F2] text-white`}>
            <ViberIcon />
            Pošalji na Viber
          </ViberShareButton>
        </div>

        <p className="mx-auto mt-8 max-w-md text-sm leading-6 text-muted-foreground">
          Otvoriće se vaš mejl, WhatsApp ili Viber sa već pripremljenom porukom. Samo izaberite
          kome je šaljete.
        </p>
      </div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-9">
      <path d="M21.4 2.6a1 1 0 0 0-1.05-.23l-17.5 6.5a1 1 0 0 0-.06 1.85l7.06 3.13 3.13 7.06a1 1 0 0 0 1.85-.06l6.5-17.5a1 1 0 0 0-.23-1.05Zm-9.4 9.74-4.86-2.15L17.6 6.3l-5.6 6.04Z" />
    </svg>
  );
}
