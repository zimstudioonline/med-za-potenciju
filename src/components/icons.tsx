/**
 * Inline SVG icons. Emoji were rendering differently on every platform (red cart on
 * iPhone, green on Android), so anything that sits inside a button is drawn here
 * instead: same shape everywhere, inherits the button's colour and font size.
 */

type IconProps = { className?: string };

export function CartIcon({ className = "size-[1.15em]" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.2a1 1 0 0 1 .98.8L5.6 6m0 0 1.9 9.2a1 1 0 0 0 .98.8h9.2a1 1 0 0 0 .98-.78L21 8.4a.7.7 0 0 0-.68-.85H5.6Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MailIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

/** Oblačić sa slušalicom — prepoznatljiv za WhatsApp, a crta se istim potezom kao ostale ikone. */
export function WhatsAppIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8A9 9 0 1 1 7.8 20.3L3 21Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2L9 9.5Z" />
    </svg>
  );
}

export function ViberIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2c5 0 9 2.5 9 8.5S17 19 12 19h-1l-3 3v-3.4C4.5 17.4 3 14.6 3 10.5 3 4.5 7 2 12 2Z" />
      <path d="M9.5 7.5c0 3.5 2 5.5 5 5.5l.8-1.3-1.6-.9-.8.6a3.4 3.4 0 0 1-1.5-1.5l.6-.8-.9-1.6-1.6 0Z" />
      <path d="M13 6.5a3 3 0 0 1 2.5 2.5" />
    </svg>
  );
}
