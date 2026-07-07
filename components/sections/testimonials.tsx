"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = setInterval(() => embla.scrollNext(), 6000);
    const stop = () => clearInterval(timer);
    embla.on("pointerDown", stop);
    return () => {
      clearInterval(timer);
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section className="section bg-cream py-20 md:py-28 lg:py-32">
      <div className="container-lux">
        <SectionHeading center kicker="Cherished by Patrons" title="Draped in Delight" />

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <figure key={i} className="min-w-0 flex-[0_0_100%] px-2 text-center md:px-12">
                <Quote className="mx-auto h-9 w-9 text-gold/60" />
                <div className="mt-4 text-gold">★★★★★</div>
                <blockquote className="mx-auto mt-5 max-w-3xl font-serif text-2xl font-medium leading-snug text-maroon md:text-[2rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-sans text-sm font-semibold uppercase tracking-wide2 text-gold-600">
                    {t.name}
                  </span>
                  <span className="text-sm text-muted">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => embla?.scrollPrev()}
            aria-label="Previous"
            className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-maroon transition-colors hover:border-maroon hover:bg-maroon hover:text-cream"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  i === selected ? "scale-125 bg-gold-600" : "bg-gold/40"
                )}
              />
            ))}
          </div>
          <button
            onClick={() => embla?.scrollNext()}
            aria-label="Next"
            className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-maroon transition-colors hover:border-maroon hover:bg-maroon hover:text-cream"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
