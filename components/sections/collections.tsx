import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Swatch } from "@/components/ui/swatch";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { collections } from "@/data/site";

export function Collections() {
  const featured = collections.find((c) => c.featured)!;
  const rest = collections.filter((c) => !c.featured);

  return (
    <section id="collections" className="section bg-cream py-20 md:py-28 lg:py-32">
      <div className="container-lux">
        <SectionHeading
          center
          divider
          kicker="Shop by Weave"
          title="The Signature Collections"
          lead="Curated across the great weaving traditions of Banaras — each drape a testament to patience, precision and pure silk."
        />

        {/* Featured banner */}
        <Reveal direction="scale" className="mt-14">
          <Link
            href={`/collections#${featured.slug}`}
            className="group relative block h-[360px] overflow-hidden rounded-2xl md:h-[440px]"
          >
            <div className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-105">
              <Swatch color={featured.swatch} image={featured.image} alt={`${featured.title} saree`} scrim priority sizes="(max-width: 1024px) 100vw, 1200px" />
            </div>
            <span className="absolute right-5 top-5 rounded-full border border-white/25 px-3.5 py-1.5 text-[0.66rem] uppercase tracking-wide2 text-cream/80 backdrop-blur-sm">
              Bridal Edit
            </span>
            <div className="absolute inset-x-0 bottom-0 max-w-xl p-8 text-cream md:p-12">
              <span className="text-[0.68rem] uppercase tracking-luxe text-gold-300">{featured.kicker}</span>
              <h3 className="mt-2 font-serif text-4xl font-medium md:text-5xl">{featured.title}</h3>
              <p className="mt-3 max-w-md text-cream/80">{featured.blurb}</p>
              <span className="link-underline mt-5 text-gold-300">
                Explore the collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Card grid */}
        <RevealGroup className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {rest.map((c) => (
            <RevealItem key={c.slug}>
              <Link
                href={`/collections#${c.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-xl shadow-soft"
              >
                <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.07]">
                  <Swatch color={c.swatch} image={c.image} alt={`${c.title} saree`} scrim sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
                <span className="absolute right-3 top-3 grid h-9 w-9 -translate-y-2 place-items-center rounded-full bg-white/15 text-cream opacity-0 backdrop-blur-sm transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <span className="block text-[0.62rem] uppercase tracking-luxe text-gold-300">{c.kicker}</span>
                  <h3 className="mt-1.5 font-serif text-2xl font-medium">{c.title}</h3>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 text-center">
          <Reveal>
            <Button href="/collections" variant="outline">
              View All Collections
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
