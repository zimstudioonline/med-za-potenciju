"use client";

import { usePathname } from "next/navigation";

import { PhoneIcon, ViberIcon, WhatsAppIcon } from "@/components/icons";
import { PHONE_HREF, VIBER_HREF, WHATSAPP_HREF } from "@/lib/contact";

/** Admin panel nije za kupce. */
const HIDDEN_ON = ["/keystatic"];

const BUTTONS = [
  {
    label: "Pozovite nas",
    href: PHONE_HREF,
    className: "flex size-14 bg-primary text-primary-foreground shadow-primary/40",
    Icon: PhoneIcon,
  },
  {
    label: "Pišite nam na Viber",
    href: VIBER_HREF,
    className: "flex size-14 bg-[#7360F2] text-white shadow-[#7360F2]/40",
    Icon: ViberIcon,
  },
  {
    label: "Pišite nam na WhatsApp",
    href: WHATSAPP_HREF,
    className: "hidden size-16 bg-[#25D366] md:flex text-white shadow-[#25D366]/50",
    Icon: WhatsAppIcon,
    iconClassName: "size-8",
    external: true,
  },
];

/**
 * Plutajuća dugmad za poziv, Viber i WhatsApp u donjem desnom uglu. Na telefonu
 * stoje iznad trake za poručivanje (StickyCta), na računaru u samom uglu.
 * WhatsApp je na telefonu u samoj traci, pa se ovde prikazuje tek od md naviše.
 */
export function FloatingContact() {
  const pathname = usePathname();
  if (HIDDEN_ON.some((path) => pathname.startsWith(path))) return null;

  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col items-center gap-3 md:right-6 md:bottom-6">
      {BUTTONS.map(({ label, href, className, Icon, iconClassName, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`items-center justify-center rounded-full shadow-lg transition duration-200 hover:scale-110 active:scale-95 ${className}`}
        >
          <Icon className={iconClassName ?? "size-6"} />
        </a>
      ))}
    </div>
  );
}
