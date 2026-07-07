import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { Swatch } from "./swatch";
import type { Product } from "@/data/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href="/contact" className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-soft">
        <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.07]">
          <Swatch color={product.swatch} image={product.image} alt={`${product.title} — ${product.weave} saree`} sizes="(max-width: 640px) 50vw, 22vw" />
        </div>

        {product.badge && (
          <span className="absolute left-3.5 top-3.5 rounded-[3px] bg-gold px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wide2 text-maroon-900">
            {product.badge}
          </span>
        )}

        <span className="absolute right-3 top-3 grid h-9 w-9 -translate-y-1.5 place-items-center rounded-full bg-white/90 text-maroon opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Heart className="h-4 w-4" />
        </span>

        <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center gap-2 bg-gradient-to-t from-maroon-900/85 to-transparent pb-3.5 pt-9 text-[0.72rem] uppercase tracking-wide2 text-cream opacity-0 transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
          Enquire <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="pt-4">
        <span className="text-[0.64rem] uppercase tracking-wide2 text-gold-600">{product.weave}</span>
        <h3 className="mt-1 font-serif text-xl font-semibold leading-tight text-ink">{product.title}</h3>
        <span className="mt-1 block text-sm font-medium text-ink-2">
          {product.price}
          {product.strike && <s className="ml-2 font-light text-muted">{product.strike}</s>}
        </span>
      </div>
    </Link>
  );
}
