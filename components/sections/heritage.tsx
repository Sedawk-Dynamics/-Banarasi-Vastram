import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Frame } from "@/components/ui/frame";
import { Kicker } from "@/components/ui/kicker";
import { Counter } from "@/components/ui/counter";
import { media } from "@/data/site";

const heritageStats = [
  { value: 10000, suffix: "+", label: "Sarees Woven" },
  { value: 500, suffix: "+", label: "Weaver Families" },
  { value: 24, suffix: "k+", label: "Happy Patrons" },
];

export function Heritage() {
  return (
    <section id="legacy" className="section py-20 md:py-28 lg:py-32">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <Frame color="#6E1023" image={media.frameHeritage} alt="Bride draped in a red and gold Banarasi silk saree" badgeTop={"Est.\nKashi"} badgeSub="Handloom Heritage" />
        </Reveal>

        <Reveal direction="right" className="max-w-xl">
          <Kicker>Our Legacy</Kicker>
          <h2 className="heading-display mt-4 [font-size:clamp(2rem,4.6vw,3.4rem)]">
            The soul of Banaras, woven into every thread.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            For generations, the weavers of Varanasi have transformed silk and gold into heirlooms. At
            Banarasi Vastram, we carry that unbroken lineage forward — partnering directly with master
            artisans whose families have sat at the pit-loom for over a century.
          </p>
          <p className="mt-4 text-muted">
            Every saree is a quiet act of devotion: warp and weft chosen by hand, motifs of paisley,
            florals and peacocks brought to life in pure zari, and finished only when it is worthy of the
            name <span className="font-serif italic text-gold-600">Kashi</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 border-t border-gold/15 pt-7">
            {heritageStats.map((s) => (
              <div key={s.label}>
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="block font-serif text-4xl leading-none text-maroon"
                />
                <span className="mt-1 block text-[0.72rem] uppercase tracking-wide2 text-muted">{s.label}</span>
              </div>
            ))}
          </div>

          <Link href="/about" className="link-underline mt-8 text-maroon">
            Discover our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
