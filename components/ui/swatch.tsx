import Image from "next/image";
import { cn } from "@/lib/utils";

// Renders real product photography when `image` is provided, otherwise a woven-textile
// "swatch" (jewel-tone + gold jaal motif) that stands in gracefully — never a broken image.
export function Swatch({
  color,
  image,
  alt = "",
  className,
  watermark = false,
  scrim = false,
  priority = false,
  sizes = "(max-width: 768px) 50vw, 25vw",
  children,
}: {
  color: string;
  image?: string;
  alt?: string;
  className?: string;
  watermark?: boolean;
  scrim?: boolean;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} style={{ backgroundColor: color }}>
      {image ? (
        <>
          <Image src={image} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
          {scrim && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          )}
        </>
      ) : (
        <>
          <div className="swatch-motif absolute inset-0 opacity-90" />
          <div className="swatch-sheen absolute inset-0" />
          {watermark && (
            <div className="absolute inset-0 grid place-items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/emblem.svg" alt="" className="w-2/5 opacity-[0.14]" />
            </div>
          )}
        </>
      )}
      {children}
    </div>
  );
}
