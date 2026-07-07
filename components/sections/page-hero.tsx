import Link from "next/link";
import { Kicker } from "@/components/ui/kicker";

export function PageHero({
  kicker,
  title,
  subtitle,
  crumb,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_80%_0%,#7B1E2B,#4A0F1B_55%,#380A12)] pb-16 pt-40 text-center text-cream md:pb-20 md:pt-44">
      <div className="paper-grain absolute inset-0 opacity-40 mix-blend-overlay" aria-hidden />
      <div className="container-lux relative">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-center">
            <Kicker both className="text-gold-300 [&>span]:bg-gold-300">
              {kicker}
            </Kicker>
          </div>
          <h1 className="mt-4 font-serif font-medium [font-size:clamp(2.4rem,6vw,4.4rem)]">{title}</h1>
          {subtitle && <p className="mx-auto mt-4 max-w-xl text-cream/80">{subtitle}</p>}
          <div className="mt-6 flex justify-center gap-2 text-[0.72rem] uppercase tracking-wide2 text-cream/60">
            <Link href="/" className="transition-colors hover:text-gold-300">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-300">{crumb}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
