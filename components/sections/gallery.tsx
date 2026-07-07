import { Instagram } from "lucide-react";
import { Swatch } from "@/components/ui/swatch";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site, media } from "@/data/site";

const swatches = ["#6E1023", "#123A5E", "#14532D", "#6D2350", "#4A2A6B", "#8A5A16"];

export function Gallery() {
  return (
    <section className="section py-20 md:py-28">
      <div className="container-lux">
        <SectionHeading
          center
          kicker="@banarasi_vastram"
          title="From Our Loom to Your Feed"
          lead="Follow the weave — behind-the-scenes, new drops & styling inspiration."
        />
        <Reveal className="mt-12 grid grid-cols-3 gap-2 sm:grid-cols-6 md:gap-3">
          {media.gallery.map((src, i) => (
            <a
              key={i}
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram post"
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Swatch color={swatches[i]} image={src} alt="Banarasi Vastram saree" sizes="(max-width: 640px) 33vw, 16vw" />
              </div>
              <span className="absolute inset-0 grid place-items-center bg-maroon-900/0 text-cream opacity-0 transition-all duration-[400ms] group-hover:bg-maroon-900/40 group-hover:opacity-100">
                <Instagram className="h-6 w-6" />
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
