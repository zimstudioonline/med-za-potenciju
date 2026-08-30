import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { CookieConsent } from "@/components/cookie-consent";
import { StickyCta } from "@/components/sticky-cta";
import { CartProvider } from "@/lib/cart-context";
import { getProducts } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medzapotenciju.com"),
  title: {
    default: "Med za potenciju | Q4You Fortissimo",
    template: "%s | Med za potenciju",
  },
  description:
    "Q4You Fortissimo — prirodni med sa biljnim ekstraktima za podršku energiji, vitalnosti i intimnom zdravlju. Diskretna dostava u roku od 24 časa.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Med za potenciju",
    images: ["/med-za-potenciju-fortissimo.webp"],
  },
  // Potvrda vlasništva za Google Search Console. Next iz ovoga ispisuje
  // <meta name="google-site-verification">, pa oznaka stoji na svakoj stranici.
  verification: {
    google: "lColmvIV-kqLHNnGA53Qr-IywwFGdj5I0GBg5NWlP4c",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Katalog se čita jednom, na serveru, i prosleđuje korpi koja radi na klijentu.
  const products = await getProducts();

  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSSS7WZ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <CartProvider products={products}>
          {children}
          <StickyCta />
          <CookieConsent />
        </CartProvider>
      </body>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSSS7WZ5');`,
        }}
      />
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-08F0P2C7N9"
        strategy="afterInteractive"
      />
      <Script
        id="ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-08F0P2C7N9');`,
        }}
      />
    </html>
  );
}
