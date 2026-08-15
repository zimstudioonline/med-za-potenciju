import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
