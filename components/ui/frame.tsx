import { Swatch } from "./swatch";
import { cn } from "@/lib/utils";

export function Frame({
  color,
  image,
  alt = "",
  ratio = "4 / 5",
  watermark = false,
  tag,
  badgeTop,
  badgeSub,
  className,
}: {
  color: string;
  image?: string;
  alt?: string;
  ratio?: string;
  watermark?: boolean;
  tag?: string;
  badgeTop?: string;
  badgeSub?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-xl border border-gold/40" />
      <div className="relative overflow-hidden rounded-xl shadow-deep" style={{ aspectRatio: ratio }}>
        <Swatch color={color} image={image} alt={alt} watermark={watermark} sizes="(max-width: 1024px) 100vw, 560px" />
        {tag && (
          <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-maroon-900/50 px-3.5 py-1.5 text-[0.66rem] uppercase tracking-wide2 text-gold-300 backdrop-blur-sm">
            {tag}
          </span>
        )}
      </div>
      {badgeTop && (
        <div className="absolute -bottom-6 -left-6 rounded-md border border-gold/40 bg-ivory px-6 py-4 text-center shadow-lux max-md:-left-2">
          <b className="block whitespace-pre-line font-serif text-2xl leading-none text-maroon">{badgeTop}</b>
          {badgeSub && (
            <span className="mt-1 block text-[0.62rem] uppercase tracking-wide2 text-muted">{badgeSub}</span>
          )}
        </div>
      )}
    </div>
  );
}
