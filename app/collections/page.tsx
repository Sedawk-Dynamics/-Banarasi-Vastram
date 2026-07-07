import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ProductCard } from "@/components/ui/product-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { catalog } from "@/data/site";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Banarasi Vastram's handwoven saree collections — Pure Katan Silk, Kadwa Bridal, Handloom Weaves, Organza & Georgette and Designer sarees, all crafted in Varanasi with authentic zari.",
};

const order = ["kadwa", "katan", "handloom", "organza", "designer"] as const;
const chips = [
  { label: "Bridal Kadwa", slug: "kadwa" },
  { label: "Katan Silk", slug: "katan" },
  { label: "Handloom", slug: "handloom" },
  { label: "Organza & Georgette", slug: "organza" },
  { label: "Designer & Fancy", slug: "designer" },
];

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        kicker="The Collections"
        title="Weaves of Kashi, for Every Occasion"
        subtitle="From regal bridal Kadwa to featherlight organza — discover handwoven Banarasi sarees, each a work of quiet devotion."
        crumb="Collections"
      />

      {/* Filter chips */}
      <div className="bg-ivory py-8">
        <div className="container-lux flex flex-wrap justify-center gap-2.5">
          {chips.map((c) => (
            <Link
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-gold/40 bg-white/60 px-5 py-2.5 text-[0.74rem] uppercase tracking-wide2 text-ink-2 transition-colors hover:border-maroon hover:bg-maroon hover:text-cream"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="section py-16 md:py-20">
        <div className="container-lux space-y-20 md:space-y-28">
          {order.map((slug, idx) => {
            const block = catalog[slug];
            return (
              <div key={slug} id={slug} className="scroll-mt-28">
                <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-gold/15 pb-6">
                  <div>
                    <span className="font-serif text-base tracking-wide text-gold-600">
                      {String(idx + 1).padStart(2, "0")} — {block.meta.kicker}
                    </span>
                    <h2 className="mt-1 font-serif text-3xl font-medium md:text-4xl">{block.meta.title}</h2>
                    <p className="mt-2 max-w-lg text-muted">{block.meta.blurb}</p>
                  </div>
                  <Link href="/contact" className="link-underline text-maroon">
                    Enquire <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>

                <RevealGroup className="grid grid-cols-2 gap-5 lg:grid-cols-4" stagger={0.07}>
                  {block.items.map((p) => (
                    <RevealItem key={p.title}>
                      <ProductCard product={p} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            );
          })}

          {/* Custom / wholesale note */}
          <Reveal className="relative overflow-hidden rounded-2xl bg-maroon-900 p-8 text-cream md:p-12">
            <div className="paper-grain absolute inset-0 opacity-30" aria-hidden />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-serif text-3xl text-cream">Don&apos;t see your dream saree?</h3>
                <p className="mt-2 text-cream/80">
                  We craft bespoke commissions and supply wholesale to retailers &amp; boutiques. Tell us your
                  colour, motif and occasion — we&apos;ll weave it for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" variant="gold">
                  Request a Custom Weave
                </Button>
                <Button href="/#wholesale" variant="ghostLight">
                  Wholesale
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
