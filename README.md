# Banarasi Vastram — Website

**Imperial Weaves of Kashi** · Handwoven Banarasi silk sarees from Varanasi.
A modern, animated, fully-responsive marketing site for **Banarasi Vastram** (JMK Hitech Networks Pvt. Ltd.).

## 🧱 Tech stack

| Layer | Tech |
|-------|------|
| Framework | **Next.js 16** (App Router, React 19, TypeScript) |
| Styling | **Tailwind CSS 3** + custom design tokens |
| Animation | **Framer Motion** (scroll reveals, hero mask, magnetic buttons, parallax) |
| Smooth scroll | **Lenis** |
| Carousel | **Embla** (testimonials) |
| Icons | **lucide-react** |

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

## 📁 Structure

```
app/
  layout.tsx            # fonts, metadata, JSON-LD, Header/Footer, smooth-scroll
  page.tsx              # Home (all sections)
  collections/page.tsx  # Shop by weave (Katan, Kadwa, Handloom, Organza, Designer)
  about/page.tsx        # Heritage, mission/vision/values, timeline, craft, founder
  contact/page.tsx      # Enquiry form, contact tiles, atelier map, team
  globals.css           # Tailwind layers + brand base + swatch/tape utilities
components/
  layout/               # Header (scroll-aware, dropdown, mobile drawer), Footer, FloatingActions, Brand
  sections/             # Hero, Heritage, Collections, Feature, Craft, USP, Wholesale, Testimonials, Gallery, Visit, PageHero, ContactForm
  ui/                   # Button, Reveal, Marquee, Magnetic, WordReveal, Counter, Swatch, Frame, Kicker, SectionHeading, ProductCard, SocialIcons
  providers/            # SmoothScroll (Lenis)
data/site.ts            # Single source of truth — business info, collections, catalog, testimonials, USPs
lib/utils.ts            # cn() class helper
public/                 # emblem.svg (recreated logo), favicon.svg, woven motif patterns
tailwind.config.ts      # brand colours, fonts, keyframes/animations
```

## 🎨 Brand system

- **Imperial Maroon** `#5A1220` · **Zari Gold** `#C6A15B` · **Kashi Cream** `#F8F0DF`
- **Display type:** Cormorant Garamond · **Interface type:** Jost (loaded via `next/font`)
- The peacock **logo was recreated as a scalable SVG** (`public/emblem.svg`) with a matching favicon and Banarasi motif patterns (jaal, buta/paisley, temple border).

## ✏️ Editing content

Almost everything lives in **`data/site.ts`** — phone, email, address, GSTIN, socials, collections,
the product catalog (names/prices/badges), testimonials, USPs and stats. Edit there; the whole site updates.

## 🖼️ Photography

The site ships with **real, license-free saree / bridal / handloom photography** (self-hosted in
`public/images/`, sourced from [Pexels](https://www.pexels.com/license/) — free for commercial use,
no attribution required). Images are wired through the `Swatch` component (`components/ui/swatch.tsx`),
which shows a photo when an `image` is set and otherwise falls back to a woven-textile placeholder —
so a page never breaks if an image is missing.

**To swap in Banarasi Vastram's own product shots** (recommended before launch), just replace the files
in `public/images/` or edit the `image:` paths in **`data/site.ts`**:

```ts
{ title: "Nilambari Zari Katan", weave: "Katan Silk", price: "₹ 22,000", image: "/images/nilambari.jpg", … }
```

Editorial images (hero, heritage/founder frames, gallery) are set in the `media` object at the bottom of
`data/site.ts`. All images render through Next.js `<Image>` (automatic optimization, lazy-loading, responsive `sizes`).

## ✉️ Making the forms send

The enquiry & newsletter forms show a friendly confirmation (front-end only). To receive submissions,
point them at a no-backend service (Web3Forms / Formspree / Getform) or your own API route — see
`components/sections/contact-form.tsx` and `components/layout/newsletter-form.tsx`.

## 🔑 Already wired in

Phone/WhatsApp `+91 70811 10055`, `info@banarasivastram.com`, exact Varanasi address + live Google Map,
GSTIN `09AADCJ9002F1ZQ`, all social links, SEO metadata + Open Graph + LocalBusiness JSON-LD schema.

## 🚀 Deploy

- **Vercel** (recommended, zero-config for Next.js): import the repo → deploy → point `banarasivastram.com` at it.
- Any Node host: `npm run build` then `npm run start`.

---
© Banarasi Vastram · JMK Hitech Networks Pvt. Ltd., Varanasi
