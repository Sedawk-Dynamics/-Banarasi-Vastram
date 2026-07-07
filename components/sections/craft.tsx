import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";
import { craftSteps } from "@/data/site";

const craftStats = [
  { value: 45, suffix: "+", label: "Days per Bridal Saree" },
  { value: 100, suffix: "%", label: "Handwoven" },
  { value: 6, suffix: "", label: "Weave Traditions" },
  { value: 30, suffix: "+", label: "Countries Shipped" },
];

export function Craft() {
  return (
    <section id="craft" className="relative scroll-mt-24 overflow-hidden bg-maroon-900 text-cream">
      <div className="tape" />
      <div className="paper-grain absolute inset-0 opacity-30 mix-blend-overlay" aria-hidden />
      <div className="container-lux relative py-20 md:py-24 lg:py-28">
        <SectionHeading
          center
          kicker="The Making"
          title="From Silk Thread to Heirloom"
          lead="Four hands, one loom, endless patience — the journey of a Banarasi saree."
          className="[&_.kicker]:text-gold-300 [&_h2]:text-cream [&_p]:text-cream/80"
        />

        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {craftSteps.map((s, i) => (
            <RevealItem key={s.title} className="relative pt-10">
              <span className="absolute left-0 top-0 font-serif text-lg tracking-wide text-gold-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < craftSteps.length - 1 && (
                <span className="absolute left-11 top-2 hidden h-px w-[calc(100%-2rem)] bg-gold/25 lg:block" />
              )}
              <h4 className="font-serif text-2xl text-cream">{s.title}</h4>
              <p className="mt-2 text-sm text-cream/70">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-16 grid grid-cols-2 gap-6 border-t border-gold/15 pt-12 text-center lg:grid-cols-4">
          {craftStats.map((s) => (
            <div key={s.label}>
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="block font-serif text-5xl font-medium leading-none text-gold-300"
              />
              <span className="mt-2 block text-[0.72rem] uppercase tracking-wide2 text-cream/72">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
      <div className="tape rotate-180" />
    </section>
  );
}
