import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Brand lockup.
 * - default: real peacock emblem (from the brand logo) + wordmark — for the slim header.
 * - full:    the complete logo lockup image — for the footer & mobile drawer.
 * `light` picks the cream artwork (on dark backgrounds) vs the maroon artwork (on light).
 */
export function Brand({
  light = false,
  full = false,
  className,
}: {
  light?: boolean;
  full?: boolean;
  className?: string;
}) {
  if (full) {
    return (
      <Link href="/" aria-label="Banarasi Vastram — Imperial Weaves of Kashi" className={cn("inline-block", className)}>
        <Image
          src={light ? "/logo-cream.png" : "/logo-maroon.png"}
          alt="Banarasi Vastram — Imperial Weaves of Kashi"
          width={668}
          height={702}
          priority
          className="h-full w-auto"
        />
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="Banarasi Vastram home" className={cn("group inline-flex items-center gap-3", className)}>
      <Image
        src={light ? "/emblem-cream.png" : "/emblem-maroon.png"}
        alt=""
        width={317}
        height={435}
        priority
        className="h-12 w-auto transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105"
      />
      <span className="leading-none">
        <span
          className={cn(
            "block font-serif text-[1.3rem] font-semibold uppercase tracking-[0.18em]",
            light ? "text-cream" : "text-ink"
          )}
        >
          Banarasi Vastram
        </span>
        <span className="mt-1 block font-sans text-[0.52rem] font-medium uppercase tracking-[0.32em] text-gold-600">
          Imperial Weaves of Kashi
        </span>
      </span>
    </Link>
  );
}
