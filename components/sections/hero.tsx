import Image from "next/image";
import Link from "next/link";

/**
 * Hero — the brand banner, shown as-is.
 * The headline, copy and "SHOP NOW" button are part of the artwork, so nothing is overlaid.
 * A transparent hotspot sits over the painted SHOP NOW button to make it clickable; because the
 * banner keeps its native 16:9 ratio at every width, the percentage-based hotspot stays aligned.
 */
export function Hero() {
  return (
    <section className="bg-paper pt-[114px] lg:pt-[124px]">
      <div className="relative w-full">
        <Image
          src="/images/hero-banner.jpg"
          alt="Timeless Banarasi Elegance — woven with heritage, designed for forever. Discover our exclusive Banarasi saree collection, crafted for life's most precious moments."
          width={2560}
          height={1440}
          priority
          sizes="100vw"
          className="h-auto w-full animate-in fade-in duration-1000"
        />

        <Link
          href="/collections"
          aria-label="Shop the Banarasi saree collection"
          className="absolute left-[18.4%] top-[66.4%] h-[5.9%] w-[15.8%] rounded-[2px] transition-colors duration-300 hover:bg-cream/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2"
        />
      </div>
    </section>
  );
}
