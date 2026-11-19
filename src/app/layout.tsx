import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { business, siteUrl } from "@/data/business";
import "./globals.css";

const serif = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Times New Roman", "serif"],
});

const sans = localFont({
  src: "./fonts/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Notes Coffee Roasters — coffee roastery, coffee house and matcha space in Mashtan, Bahrain. V60 single origins, espresso, specialty lattes and strawberry matcha.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Notes Coffee Roasters — Specialty Coffee & Matcha in Bahrain",
    template: "%s — Notes Coffee Roasters",
  },
  description,
  applicationName: business.name,
  openGraph: {
    type: "website",
    siteName: business.name,
    locale: "en_BH",
    title: "Notes Coffee Roasters",
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Notes Coffee Roasters" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notes Coffee Roasters",
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0f3c26",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  logo: `${siteUrl}/images/notes-logo-badge.png`,
  telephone: "+973 7790 0242",
  servesCuisine: ["Coffee", "Matcha"],
  priceRange: "BD 0.100 – 1.900",
  hasMenu: `${siteUrl}/menu`,
  sameAs: [business.instagram.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: business.area,
    addressCountry: "BH",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
