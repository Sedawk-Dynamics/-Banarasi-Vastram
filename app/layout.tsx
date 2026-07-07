import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Banarasi Vastram — Imperial Weaves of Kashi | Handwoven Banarasi Sarees",
    template: "%s — Banarasi Vastram",
  },
  description:
    "Banarasi Vastram crafts pure handwoven Banarasi silk sarees from the sacred looms of Kashi (Varanasi). Katan silk, Kadwa, handloom, organza, designer & bridal weaves with authentic zari, master artisans, wholesale supply and worldwide shipping.",
  keywords: [
    "Banarasi saree", "Banarasi silk saree", "Katan silk", "Kadwa Banarasi",
    "handloom saree Varanasi", "bridal Banarasi", "pure zari saree", "Kashi weaves",
  ],
  openGraph: {
    type: "website",
    title: "Banarasi Vastram — Imperial Weaves of Kashi",
    description: "Pure handwoven Banarasi silk sarees from the looms of Varanasi.",
    url: site.url,
    siteName: site.name,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#5A1220",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  legalName: site.legalName,
  description: "Handwoven Banarasi silk sarees from the looms of Kashi (Varanasi).",
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  slogan: site.tagline,
  vatID: site.gstin,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Maurya Bhawan, B36/4-2, near Sankat Mochan Police Chowki, Saket Nagar Colony, Lanka",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221005",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHours: "Mo-Su 09:00-21:30",
  priceRange: "₹₹₹",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
