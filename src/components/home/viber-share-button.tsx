"use client";

import { useState, type MouseEvent, type ReactNode } from "react";

/**
 * `viber://forward` otvara izbor kontakta sa porukom samo u aplikaciji na telefonu.
 * Viber na računaru isti link samo otvori, bez poruke — zato tamo prvo kopiramo
 * tekst i kažemo posetiocu da ga nalepi u razgovor.
 */
export function ViberShareButton({
  text,
  className,
  children,
}: {
  text: string;
  className: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    event.preventDefault();
    const href = event.currentTarget.href;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 8000);
    } catch {
      // Bez dozvole za clipboard Viber se i dalje otvara; poruku će otkucati sam.
    }
    window.location.href = href;
  }

  return (
    <>
      <a
        href={`viber://forward?text=${encodeURIComponent(text)}`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
      {copied && (
        <p
          role="status"
          className="fixed bottom-28 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl bg-[#7360F2] px-5 py-4 text-center text-sm font-semibold text-white shadow-xl md:bottom-8"
        >
          Poruka je kopirana. U Viber-u izaberite kontakt i nalepite je (Ctrl+V).
        </p>
      )}
    </>
  );
}
