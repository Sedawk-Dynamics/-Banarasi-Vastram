import { Sparkles, Hand, ShieldCheck, Scissors, Truck, Gift, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { usps } from "@/data/site";

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Hand, ShieldCheck, Scissors, Truck, Gift,
};

export function USP() {
  return (
    <section className="section bg-ivory py-20 md:py-28 lg:py-32">
      <div className="container-lux">
        <SectionHeading center kicker="Why Banarasi Vastram" title="The Difference in Every Drape" />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {usps.map((u) => {
            const Icon = iconMap[u.icon];
            return (
              <RevealItem key={u.title}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-gold/15 bg-white/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lux">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-cream text-maroon">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-ink">{u.title}</h3>
                  <p className="mt-2.5 text-[0.96rem] text-muted">{u.text}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
