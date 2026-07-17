import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { latestProducts } from "@/data/site";

const inr = (n: number) => `₹ ${n.toLocaleString("en-IN")}`;

export function Latest() {
  return (
    <section id="latest" className="section scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-lux">
        <SectionHeading
          center
          divider
          kicker="Fresh Off the Loom"
          title="Latest Banarasi Saree Collection"
          lead="New weaves arriving from our Varanasi looms — each one handpicked, one of a kind."
        />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4" stagger={0.06}>
          {latestProducts.map((p) => {
            const off = Math.round((1 - p.price / p.mrp) * 100);
            return (
              <RevealItem key={p.title}>
                <Link href="/contact" className="group flex h-full flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-soft">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.07]"
                    />
                    {p.badge && (
                      <span className="absolute left-3 top-3 rounded-[3px] bg-gold px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wide2 text-maroon-900">
                        {p.badge}
                      </span>
                    )}
                    {off > 0 && (
                      <span className="absolute right-3 top-3 rounded-[3px] bg-maroon/90 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wide2 text-cream backdrop-blur-sm">
                        {off}% Off
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 line-clamp-2 font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-maroon">
                    {p.title}
                  </h3>

                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-sans text-[0.95rem] font-medium text-maroon">{inr(p.price)}</span>
                    <s className="font-sans text-[0.82rem] font-light text-muted">{inr(p.mrp)}</s>
                  </div>

                  <div className="mt-auto pt-4">
                    <span className="flex items-center justify-center gap-2 rounded-[2px] border border-maroon/35 px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-wide2 text-maroon transition-colors duration-[400ms] group-hover:border-maroon group-hover:bg-maroon group-hover:text-cream">
                      Shop Now
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-14 text-center">
          <Reveal>
            <Button href="/collections" variant="outline">
              View All Sarees
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
