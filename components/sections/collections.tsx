import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { collections } from "@/data/site";

export function Collections() {
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

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {collections.map((c) => (
            <RevealItem key={c.slug}>
              <Link
                href={`/collections#${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-ivory shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lux"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.title} saree`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/75 via-maroon-900/10 to-transparent" />
                  <span className="absolute bottom-4 left-5 right-5 text-[0.62rem] uppercase tracking-luxe text-gold-300">
                    {c.kicker}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl font-medium text-ink">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.blurb}</p>
                  <span className="mt-6 inline-flex items-center justify-center gap-2 rounded-[2px] border border-maroon/35 px-5 py-3 text-[0.72rem] font-medium uppercase tracking-wide2 text-maroon transition-colors duration-[400ms] group-hover:border-maroon group-hover:bg-maroon group-hover:text-cream">
                    View Collection
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
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
