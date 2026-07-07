import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Frame } from "@/components/ui/frame";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { media } from "@/data/site";

const points = [
  "Certified pure silk with genuine gold & silver zari.",
  "Handwoven by master weavers of Varanasi — GI-authentic Banarasi.",
  "Traditional motifs — jangla, shikargah, meenakari & more.",
];

export function Feature() {
  return (
    <section className="section py-20 md:py-28 lg:py-32">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <Frame color="#7B1E2B" image={media.frameFeature} alt="Gold zari and jewellery detail on a Banarasi silk saree" ratio="5 / 6" tag="✦ Signature Weave" />
        </Reveal>

        <Reveal direction="right" className="max-w-xl">
          <Kicker>The Pure Zari Promise</Kicker>
          <h2 className="heading-display mt-4 [font-size:clamp(2rem,4.6vw,3.4rem)]">
            Where every motif is woven, never printed.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            Our Kadwa artisans weave each buti individually into the silk — a laborious technique that
            turns a single saree into weeks of devotion. The result is unmatched depth, texture and a
            reverse as beautiful as the front.
          </p>
          <ul className="mt-8 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink-2">
                <Check className="mt-1 h-[18px] w-[18px] shrink-0 text-gold-600" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Button href="/about#craft" variant="outline" className="mt-9">
            See How It&apos;s Woven
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
