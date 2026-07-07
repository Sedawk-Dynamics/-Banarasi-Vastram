import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Craft } from "@/components/sections/craft";
import { Frame } from "@/components/ui/frame";
import { Kicker } from "@/components/ui/kicker";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site, media } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Heritage & Craft",
  description:
    "The story of Banarasi Vastram — our heritage, mission, values and the centuries-old craft of handwoven Banarasi silk. Meet the master weavers of Varanasi behind every drape.",
};

const values = [
  { n: "01", title: "Our Mission", text: "To make authentic, handwoven Banarasi textiles accessible worldwide while sustaining the livelihoods of the artisans who create them." },
  { n: "02", title: "Our Vision", text: "To be the most trusted name in Banarasi weaves — a bridge between the timeless heritage of Kashi and the modern, discerning wardrobe." },
  { n: "03", title: "Our Values", text: "Authenticity, craftsmanship, fairness to our weavers, and delivering elegance, quality and value in every single drape." },
];

const timeline = [
  { yr: "Origins", title: "The Looms of Kashi", text: "Banaras emerges as the heart of India's silk brocade weaving, favoured by royalty and revered across the subcontinent." },
  { yr: "Legacy", title: "Generations of Mastery", text: "Weaving knowledge passes from father to son through the pit-loom families of Varanasi — a living, breathing craft." },
  { yr: "GI Tag", title: "Banarasi, Protected", text: "The Banarasi saree earns its Geographical Indication — a mark of true origin and authenticity we uphold." },
  { yr: "Today", title: "Banarasi Vastram", text: "We carry the craft forward — connecting master weavers directly to patrons and boutiques the world over." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Our Story"
        title="The Soul of Kashi, Woven for the World"
        subtitle="Banarasi Vastram is a tribute to the weavers of Varanasi — carrying an ancient craft to modern wardrobes, one thread at a time."
        crumb="Heritage"
      />

      {/* About intro */}
      <section className="section py-20 md:py-28">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <Frame color="#5A1220" image={media.frameAbout} alt="Traditional Banarasi handloom in a Varanasi weaving workshop" badgeTop="Kashi" badgeSub="Est. Heritage" />
          </Reveal>
          <Reveal direction="right" className="max-w-xl">
            <Kicker>About Banarasi Vastram</Kicker>
            <h2 className="heading-display mt-4 [font-size:clamp(2rem,4.6vw,3.4rem)]">
              A house devoted to the art of Banaras.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              Banarasi Vastram — a venture of {site.legalName} — was born from a simple belief: that the
              extraordinary craft of Banaras deserves a home that honours it.
            </p>
            <p className="mt-4 text-muted">
              We work hand-in-hand with the master weavers of Varanasi to bring you sarees of
              uncompromising authenticity — pure silk, genuine zari and motifs passed down through
              generations. From traditional bridal Kadwa to contemporary designer drapes, every piece is
              chosen to deliver elegance, quality and enduring value.
            </p>
            <Button href="/collections" variant="outline" className="mt-8">
              Explore Our Weaves
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section bg-cream py-20 md:py-28">
        <div className="container-lux">
          <SectionHeading center kicker="What Guides Us" title="Mission, Vision & Values" />
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.1}>
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-xl border border-gold/15 bg-white/60 p-8">
                  <span className="font-serif text-5xl text-gold">{v.n}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-muted">{v.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <Kicker>The Unbroken Thread</Kicker>
            <h2 className="heading-display mt-4 [font-size:clamp(2rem,4.6vw,3.4rem)]">
              A Craft Older than Memory
            </h2>
            <p className="mt-5 text-muted">
              The story of Banaras and its looms is the story of India&apos;s finest textile tradition —
              and Banarasi Vastram is proud to be its latest custodian.
            </p>
          </Reveal>
          <RevealGroup className="relative" stagger={0.12}>
            {timeline.map((t, i) => (
              <RevealItem key={t.yr} direction="up">
                <div className="relative grid grid-cols-[90px_1fr] gap-6 pb-9 md:grid-cols-[120px_1fr]">
                  {i < timeline.length - 1 && (
                    <span className="absolute bottom-0 left-[90px] top-3 w-px bg-gold/30 md:left-[120px]" />
                  )}
                  <div className="relative text-right font-serif text-xl text-maroon md:text-2xl">
                    {t.yr}
                    <span className="absolute -right-[7px] top-2.5 h-3 w-3 translate-x-1/2 rotate-45 border-2 border-paper bg-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-ink">{t.title}</h4>
                    <p className="mt-1 text-muted">{t.text}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Craft />

      {/* Founder */}
      <section className="section bg-cream py-20 md:py-28">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal direction="left" className="mx-auto w-full max-w-sm">
            <Frame color="#6E1023" image={media.frameFounder} alt="Artisan hands weaving zari on a Banarasi loom" ratio="1 / 1" />
          </Reveal>
          <Reveal direction="right">
            <Kicker>Message from the Founder</Kicker>
            <p className="mt-5 font-serif text-2xl font-medium leading-relaxed text-maroon md:text-[2rem]">
              “Every Banarasi saree we make carries the fingerprints of an artisan and the spirit of a
              city. When you drape one, you wear the heritage of Kashi itself — and that is a promise we
              weave into every thread.”
            </p>
            <p className="mt-5 font-serif text-2xl italic text-gold-600">— The Founder, Banarasi Vastram</p>
            <p className="mt-1 text-muted">{site.legalName}, Varanasi</p>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-maroon-900 text-cream">
        <div className="paper-grain absolute inset-0 opacity-30" aria-hidden />
        <div className="container-lux relative grid items-center gap-8 py-16 md:grid-cols-[1.4fr_0.6fr] md:py-24">
          <Reveal direction="left">
            <Kicker className="text-gold-300 [&>span]:bg-gold-300">Begin Your Journey</Kicker>
            <h2 className="heading-display mt-4 text-cream [font-size:clamp(2rem,4.6vw,3.4rem)]">
              Find the weave that tells your story.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-cream/80">
              Whether it is a bridal masterpiece or a wholesale partnership, our team would be honoured to
              guide you.
            </p>
          </Reveal>
          <Reveal direction="right" className="flex flex-wrap gap-3 md:justify-self-end">
            <Button href="/collections" variant="gold">
              View Collections
            </Button>
            <Button href="/contact" variant="ghostLight">
              Contact Us
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
