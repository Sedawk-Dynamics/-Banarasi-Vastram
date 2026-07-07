import { Marquee } from "@/components/ui/marquee";
import { weaveWords } from "@/data/site";

export function MarqueeStrip() {
  return (
    <div className="border-y border-gold/20 bg-maroon py-4 text-cream">
      <Marquee duration="38s">
        {weaveWords.map((w) => (
          <span key={w} className="flex items-center gap-10 whitespace-nowrap px-5 font-serif text-xl italic text-gold-100">
            {w}
            <span className="text-xs not-italic text-gold">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
