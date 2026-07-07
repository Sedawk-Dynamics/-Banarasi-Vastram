import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Banarasi Vastram home" className={cn("group inline-flex items-center gap-3", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/emblem.svg"
        alt=""
        width={40}
        height={46}
        className="h-[46px] w-[40px] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105"
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
