import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Get in touch with Banarasi Vastram in Varanasi. Call, WhatsApp or email us for bridal consultations, bespoke weaves and wholesale enquiries. Visit our atelier in Lanka, Varanasi.",
};

const tiles = [
  { icon: Phone, title: "Call Us", body: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: Mail, title: "Email", body: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, title: "WhatsApp", body: "Chat with our team", href: `https://wa.me/${site.whatsapp}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in Touch"
        title="We'd Love to Weave With You"
        subtitle="From bridal consultations to wholesale partnerships — our team in Varanasi is here to help."
        crumb="Contact"
      />

      {/* Quick tiles */}
      <div className="bg-ivory py-12">
        <div className="container-lux grid gap-4 md:grid-cols-3">
          {tiles.map((t) => (
            <a
              key={t.title}
              href={t.href}
              className="group rounded-xl border border-gold/15 bg-white/60 p-7 text-center transition-all duration-[400ms] hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lux"
            >
              <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-cream text-maroon">
                <t.icon className="h-5 w-5" />
              </span>
              <h4 className="font-sans text-[0.72rem] font-semibold uppercase tracking-wide2 text-gold-600">
                {t.title}
              </h4>
              <p className="mt-1 text-ink-2">{t.body}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Form + info */}
      <section className="section py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <Kicker>Send an Enquiry</Kicker>
            <h2 className="heading-display mt-4 [font-size:clamp(1.9rem,4vw,3rem)]">
              Tell us what you&apos;re looking for
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal direction="right" className="flex flex-col">
            <Kicker>Visit the Atelier</Kicker>
            <h2 className="heading-display mt-4 [font-size:clamp(1.9rem,4vw,3rem)]">Meet Us in Varanasi</h2>

            <div className="mt-8 space-y-6">
              <InfoRow icon={MapPin} title="Showroom" body={site.address} />
              <InfoRow icon={Clock} title="Working Hours" body={site.hours} />
              <InfoRow icon={Phone} title="Call / WhatsApp" body={site.phone} />
              <InfoRow icon={Mail} title="Email" body={site.email} />
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-gold/40 shadow-lux">
              <iframe
                title="Banarasi Vastram location"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full [filter:sepia(.15)_saturate(1.05)]"
              />
            </div>
            <Button href={site.mapLink} variant="outline" target="_blank" rel="noopener" className="mt-6 self-start">
              Open in Google Maps
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof MapPin;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-gold/15 pb-6">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-cream text-maroon">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h4 className="font-sans text-[0.74rem] font-semibold uppercase tracking-wide2 text-gold-600">{title}</h4>
        <p className="text-ink-2">{body}</p>
      </div>
    </div>
  );
}
