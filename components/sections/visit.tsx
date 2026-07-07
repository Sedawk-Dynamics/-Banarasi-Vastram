import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const rows = [
  { icon: MapPin, title: "Showroom", body: site.address },
  { icon: Phone, title: "Call / WhatsApp", body: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: Mail, title: "Email", body: site.email, href: `mailto:${site.email}` },
  { icon: Clock, title: "Open Daily", body: "09:00 AM – 09:30 PM" },
];

export function Visit() {
  return (
    <section id="visit" className="section bg-cream py-20 md:py-28 lg:py-32">
      <div className="container-lux grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="flex flex-col">
          <Kicker>Visit the Atelier</Kicker>
          <h2 className="heading-display mt-4 [font-size:clamp(2rem,4.6vw,3.4rem)]">
            Experience the Weave in Person
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {rows.map((r) => (
              <div key={r.title} className="flex items-start gap-4 border-b border-gold/15 pb-6 last:border-0">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-cream text-maroon">
                  <r.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-sans text-[0.74rem] font-semibold uppercase tracking-wide2 text-gold-600">
                    {r.title}
                  </h4>
                  {r.href ? (
                    <a href={r.href} className="text-ink-2 transition-colors hover:text-maroon">
                      {r.body}
                    </a>
                  ) : (
                    <p className="text-ink-2">{r.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button href="/contact" variant="gold" className="mt-8 self-start">
            Book an Appointment
          </Button>
        </Reveal>

        <Reveal direction="right" className="min-h-[360px] overflow-hidden rounded-xl border border-gold/40 shadow-lux">
          <iframe
            title="Banarasi Vastram location"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full [filter:sepia(.15)_saturate(1.05)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
