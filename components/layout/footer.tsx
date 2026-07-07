import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Brand } from "./brand";
import { SocialIcons } from "@/components/ui/social-icons";
import { NewsletterForm } from "./newsletter-form";
import { site, collections } from "@/data/site";

const explore = [
  { label: "Our Heritage", href: "/about" },
  { label: "The Craft", href: "/about#craft" },
  { label: "Wholesale", href: "/#wholesale" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book Appointment", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-maroon-900 text-cream/80">
      <div className="tape" />
      <div className="container-lux grid gap-x-8 gap-y-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:py-20">
        <div>
          <Brand full light className="h-24" />
          <p className="my-6 max-w-xs text-sm text-cream/70">
            Handwoven Banarasi silk sarees from the sacred looms of Varanasi — where every thread carries the soul of Kashi.
          </p>
          <SocialIcons />
        </div>

        <div>
          <h5 className="mb-5 font-sans text-[0.74rem] font-semibold uppercase tracking-wide2 text-gold-300">
            Collections
          </h5>
          <ul>
            {collections.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/collections#${c.slug}`}
                  className="block py-1.5 text-sm transition-all hover:pl-1.5 hover:text-gold-300"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-5 font-sans text-[0.74rem] font-semibold uppercase tracking-wide2 text-gold-300">
            Explore
          </h5>
          <ul>
            {explore.map((e) => (
              <li key={e.label}>
                <Link href={e.href} className="block py-1.5 text-sm transition-all hover:pl-1.5 hover:text-gold-300">
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-5 font-sans text-[0.74rem] font-semibold uppercase tracking-wide2 text-gold-300">
            Get in Touch
          </h5>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.addressShort}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                {site.email}
              </a>
            </li>
          </ul>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-gold-100/10">
        <div className="container-lux flex flex-wrap items-center justify-between gap-3 py-6 text-center text-xs text-cream/55">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.legalName}
          </span>
          <span className="tracking-wide">GSTIN: {site.gstin}</span>
          <span>Crafted with reverence in Kashi 🪷</span>
        </div>
      </div>
    </footer>
  );
}
