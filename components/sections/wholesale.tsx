import { Reveal } from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";

export function Wholesale() {
  return (
    <section id="wholesale" className="relative scroll-mt-24 overflow-hidden bg-maroon-900 text-cream">
      <div className="paper-grain absolute inset-0 opacity-30" aria-hidden />
      <div className="container-lux relative grid items-center gap-8 py-16 md:grid-cols-[1.4fr_0.6fr] md:py-24">
        <Reveal direction="left">
          <Kicker className="text-gold-300 [&>span]:bg-gold-300">For Retailers &amp; Boutiques</Kicker>
          <h2 className="heading-display mt-4 text-cream [font-size:clamp(2rem,4.6vw,3.4rem)]">
            Wholesale &amp; Bulk Supply,
            <br />
            Direct from the Looms.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
            Partner with Banarasi Vastram for consistent quality, authentic weaves and pricing that lets
            your business flourish. From boutique orders to large-volume consignments — we weave to your
            scale.
          </p>
        </Reveal>
        <Reveal direction="right" className="md:justify-self-end">
          <Button href="/contact?enquiry=wholesale" variant="gold">
            Request Wholesale Rates
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
