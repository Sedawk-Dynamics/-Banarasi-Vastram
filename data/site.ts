// ============================================================
// Central content model for Banarasi Vastram
// ============================================================

export const site = {
  name: "Banarasi Vastram",
  legalName: "JMK Hitech Networks Pvt. Ltd.",
  tagline: "Imperial Weaves of Kashi",
  domain: "www.banarasivastram.com",
  url: "https://www.banarasivastram.com",
  gstin: "09AADCJ9002F1ZQ",
  phone: "+91 70811 10055",
  phoneRaw: "+917081110055",
  whatsapp: "917081110055",
  email: "info@banarasivastram.com",
  hours: "Mon – Sun · 09:00 AM – 09:30 PM",
  address:
    "Maurya Bhawan, B36 / 4-2, near Sankat Mochan Police Chowki, opp. Sulabh Complex, Saket Nagar Colony, Lanka, Varanasi, Uttar Pradesh 221005",
  addressShort: "Saket Nagar Colony, Lanka, Varanasi, UP 221005",
  geo: { lat: 25.283453985916122, lng: 83.00049459477819 },
  mapEmbed:
    "https://www.google.com/maps?q=25.283453985916122,83.00049459477819&z=16&output=embed",
  mapLink: "https://maps.app.goo.gl/GHZbFPMr8orFJKST8",
  socials: {
    instagram: "https://www.instagram.com/banarasi_vastram/",
    facebook: "https://www.facebook.com/profile.php?id=61573400697963",
    pinterest: "https://in.pinterest.com/banarasivastram/",
    youtube: "https://www.youtube.com/@BANARASIVASTRAM",
    x: "https://x.com/Banarasivastram",
    linkedin: "https://www.linkedin.com/company/113464041/",
  },
  team: {
    name: "Upendra Kumar",
    role: "Sr. Associate — Business Development",
    email: "uk@banarasivastram.com",
    phone: "+91 99199 15767",
    phoneRaw: "+919919915767",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Heritage", href: "/about" },
  { label: "Craft", href: "/about#craft" },
  { label: "Wholesale", href: "/#wholesale" },
  { label: "Contact", href: "/contact" },
];

const img = (id: string) => `/images/${id}.jpg`;

export type Collection = {
  slug: string;
  title: string;
  kicker: string;
  blurb: string;
  swatch: string;
  image: string;
  featured?: boolean;
};

export const collections: Collection[] = [
  {
    slug: "kadwa",
    title: "Bridal Banarasi",
    kicker: "Kadwa · Handwoven Motifs",
    blurb:
      "Each motif individually handwoven into pure silk — the pinnacle of Banarasi bridal artistry.",
    swatch: "#6E1023",
    image: img("30169493"),
    featured: true,
  },
  {
    slug: "katan",
    title: "Katan Silk",
    kicker: "Pure Silk",
    blurb: "Twisted pure-silk warps woven with lustrous zari — the timeless classic of Banaras.",
    swatch: "#123A5E",
    image: img("37054322"),
  },
  {
    slug: "handloom",
    title: "Handloom Weaves",
    kicker: "Artisan Pit-Loom",
    blurb: "Crafted entirely by hand on traditional pit-looms — unique, durable and rich in culture.",
    swatch: "#14532D",
    image: img("33729216"),
  },
  {
    slug: "organza",
    title: "Organza & Georgette",
    kicker: "Featherlight",
    blurb: "Sheer, fluid and effortlessly elegant — Banarasi zari on the lightest of drapes.",
    swatch: "#6D2350",
    image: img("38318411"),
  },
  {
    slug: "designer",
    title: "Designer & Fancy",
    kicker: "Contemporary",
    blurb: "Modern silhouettes, embroidery and playful patterns for parties and festive celebrations.",
    swatch: "#4A2A6B",
    image: img("37439025"),
  },
];

export type Product = {
  title: string;
  weave: string;
  price: string;
  strike?: string;
  swatch: string;
  image: string;
  badge?: string;
};

export const catalog: Record<string, { meta: Collection; items: Product[] }> = {
  katan: {
    meta: collections.find((c) => c.slug === "katan")!,
    items: [
      { title: "Nilambari Zari Katan", weave: "Katan Silk", price: "₹ 22,000", swatch: "#123A5E", image: img("37054322"), badge: "Bestseller" },
      { title: "Rajwadi Butidar", weave: "Katan Silk", price: "₹ 19,750", swatch: "#7B1E2B", image: img("30193764") },
      { title: "Ivory Kalash Katan", weave: "Katan Silk", price: "₹ 16,900", swatch: "#8A5A16", image: img("9333036"), badge: "New" },
      { title: "Feroza Jangla", weave: "Katan Silk", price: "₹ 24,500", swatch: "#14424A", image: img("34058551") },
    ],
  },
  kadwa: {
    meta: collections.find((c) => c.slug === "kadwa")!,
    items: [
      { title: "Sindoori Kadwa", weave: "Kadwa Bridal", price: "₹ 45,000", swatch: "#6E1023", image: img("30169493"), badge: "Bridal" },
      { title: "Rani Aabha", weave: "Kadwa Bridal", price: "₹ 38,500", swatch: "#8E1B4E", image: img("19376431") },
      { title: "Meenakari Suhaag", weave: "Kadwa Bridal", price: "₹ 41,900", swatch: "#5A1220", image: img("35820384"), badge: "Meenakari" },
      { title: "Laal Rajmahal", weave: "Kadwa Bridal", price: "₹ 52,000", swatch: "#7A1420", image: img("32794733"), badge: "Signature" },
    ],
  },
  handloom: {
    meta: collections.find((c) => c.slug === "handloom")!,
    items: [
      { title: "Kashi Green Jaal", weave: "Handloom", price: "₹ 14,500", swatch: "#14532D", image: img("33729216"), badge: "Handmade" },
      { title: "Morpankhi Teal", weave: "Handloom", price: "₹ 15,900", swatch: "#1B4D5A", image: img("36041239") },
      { title: "Mehendi Butidar", weave: "Handloom", price: "₹ 12,750", swatch: "#3A5A1B", image: img("31699150") },
      { title: "Neel Kamal", weave: "Handloom", price: "₹ 13,900", swatch: "#2A4A6B", image: img("29819597"), badge: "New" },
    ],
  },
  organza: {
    meta: collections.find((c) => c.slug === "organza")!,
    items: [
      { title: "Gulaabi Tissue Organza", weave: "Organza", price: "₹ 11,500", swatch: "#6D2350", image: img("38318411"), badge: "Trending" },
      { title: "Baingani Khaddi", weave: "Georgette", price: "₹ 13,200", swatch: "#4A2A6B", image: img("28943474") },
      { title: "Sona Champa", weave: "Organza", price: "₹ 12,900", swatch: "#8A5A16", image: img("19764064") },
      { title: "Neelam Bel", weave: "Georgette", price: "₹ 9,900", strike: "₹ 12,500", swatch: "#123A5E", image: img("29743627"), badge: "Sale" },
    ],
  },
  designer: {
    meta: collections.find((c) => c.slug === "designer")!,
    items: [
      { title: "Raatrani Sequins", weave: "Designer", price: "₹ 17,500", swatch: "#4A2A6B", image: img("37439025"), badge: "New" },
      { title: "Gulnaar Embroidered", weave: "Designer", price: "₹ 15,900", swatch: "#8E1B4E", image: img("34058551") },
      { title: "Zumar Festive", weave: "Designer", price: "₹ 14,200", swatch: "#14532D", image: img("9333036") },
      { title: "Indigo Bageecha", weave: "Designer", price: "₹ 16,800", swatch: "#123A5E", image: img("28517477"), badge: "Bestseller" },
    ],
  },
};

// ---- Latest arrivals (home page) ----
export type LatestProduct = {
  title: string;
  image: string;
  price: number;
  mrp: number;
  badge?: string;
};

export const latestProducts: LatestProduct[] = [
  {
    title: "Wine Maroon Banarasi Silk Saree | Gold Zari Border",
    image: img("30193764"),
    price: 17500,
    mrp: 29999,
    badge: "Bestseller",
  },
  {
    title: "Rust Red Mashru Silk Banarasi Saree | Limited Edition",
    image: img("19764064"),
    price: 4800,
    mrp: 9800,
    badge: "Limited",
  },
  {
    title: "Nude Pink Rangkat Mashru Silk Saree | Mughal Arch Motif | Zari Border & Pallu",
    image: img("34058551"),
    price: 4800,
    mrp: 8999,
  },
  {
    title: "Haldi Gold Tissue Organza Saree | Choti Butti Weaving | Brocade Zari Pallu",
    image: img("29743627"),
    price: 11500,
    mrp: 19500,
    badge: "New",
  },
  {
    title: "Sindoori Red Kadwa Bridal Banarasi Saree | Handwoven Motifs",
    image: img("19376431"),
    price: 7200,
    mrp: 13999,
    badge: "Bridal",
  },
  {
    title: "Emerald Green Banarasi Brocade Silk Saree | Gold Zari Butti",
    image: img("36041239"),
    price: 8500,
    mrp: 13500,
  },
  {
    title: "Royal Blue Jangla Banarasi Katan Silk Saree | Silver Zari Jaal",
    image: img("28517477"),
    price: 15900,
    mrp: 26500,
  },
  {
    title: "Peach Coral Banarasi Silk Saree | Gold Zari Border & Butti",
    image: img("28943474"),
    price: 6500,
    mrp: 11999,
    badge: "New",
  },
];

// Editorial imagery
export const media = {
  hero: "/images/hero.jpg",
  frameHeritage: img("32794733"),
  frameFeature: img("16239658"),
  frameAbout: img("18340831"),
  frameFounder: img("5174199"),
  gallery: [
    img("9333036"), img("35820384"), img("33729216"),
    img("38318411"), img("37439025"), img("30169493"),
  ],
};

export const testimonials = [
  {
    quote:
      "My bridal Banarasi from Vastram was beyond a dream — the zari work caught every light. Guests could not stop asking where it was from.",
    name: "Ananya Sharma",
    role: "Bride · New Delhi",
  },
  {
    quote:
      "As a boutique owner, their wholesale quality and consistency is unmatched. My customers trust the weave the moment they touch it.",
    name: "Rekha Agarwal",
    role: "Boutique Owner · Jaipur",
  },
  {
    quote:
      "Living abroad, I feared buying a Banarasi online. It arrived pure, exquisite and exactly as shown. A true piece of Kashi at my doorstep.",
    name: "Meera Iyer",
    role: "Patron · London, UK",
  },
  {
    quote:
      "The customisation was seamless — they matched my mother's old saree colour perfectly. An heirloom reborn.",
    name: "Kavya Reddy",
    role: "Patron · Hyderabad",
  },
];

export const weaveWords = [
  "Katan Silk", "Kadwa Weave", "Meenakari Zari", "Tanchoi", "Jangla",
  "Handloom", "Organza", "Bridal Banarasi", "Shikargah", "Butidar",
];

export const craftSteps = [
  { title: "Design & Naksha", text: "Motifs are hand-drawn and translated onto the loom's jacquard — the graph that guides every thread." },
  { title: "Dyeing the Silk", text: "Pure mulberry silk is dyed in rich, colour-fast jewel tones by seasoned master dyers." },
  { title: "The Weaving", text: "Warp meets weft and zari on the pit-loom — a bridal saree can take 15 to 45 days of handwork." },
  { title: "Finish & Blessing", text: "Each saree is inspected, finished and lovingly packed before its journey to you." },
];

export const usps = [
  { icon: "Sparkles", title: "Authentic Pure Zari", text: "Genuine gold & silver zari and pure mulberry silk — never synthetic substitutes." },
  { icon: "Hand", title: "Master Weavers of Kashi", text: "Woven directly by artisan families of Varanasi, sustaining the living handloom tradition." },
  { icon: "ShieldCheck", title: "GI-Authentic Banarasi", text: "True Geographical-Indication Banarasi weaves, backed by our authenticity assurance." },
  { icon: "Scissors", title: "Bespoke Customisation", text: "Personalise colour, motif & blouse. Custom bridal commissions crafted to your vision." },
  { icon: "Truck", title: "Wholesale & Bulk", text: "Competitive pricing and reliable supply for retailers, resellers & boutiques nationwide." },
  { icon: "Gift", title: "Signature Packaging", text: "Every saree arrives in premium, gift-ready packaging worthy of the occasion." },
];

export const stats = [
  { value: 150, suffix: "+", label: "Years of Craft" },
  { value: 500, suffix: "+", label: "Master Weavers" },
  { value: 24, suffix: "k+", label: "Happy Patrons" },
  { value: 30, suffix: "+", label: "Countries Shipped" },
];
