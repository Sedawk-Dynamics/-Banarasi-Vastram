"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { Button } from "@/components/ui/button";
import { WordReveal } from "@/components/ui/word-reveal";
import { stats, media } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative flex min-h-svh items-center overflow-hidden text-cream">
      {/* Background layers */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 -z-30" aria-hidden>
        <Image src={media.hero} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-maroon-900/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-900 via-maroon-900/80 to-maroon-900/25" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_12%,rgba(123,30,43,.5)_0%,rgba(74,15,27,.5)_45%,rgba(54,10,18,.72)_100%)]" />
        <div className="paper-grain absolute inset-0 opacity-40 mix-blend-overlay" />
      </motion.div>

      {/* Aurora glow */}
      <motion.div
        className="absolute -right-[10%] -top-[15%] -z-20 h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(230,201,137,.28),transparent_62%)] blur-xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(38,8,14,.4)_0%,transparent_30%,transparent_55%,rgba(38,8,14,.55)_100%)]" aria-hidden />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="container-lux pb-24 pt-40">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="kicker text-gold-300 [&>span]:bg-gold-300"
          >
            <span className="h-px w-6" /> Since the Looms of Kashi
          </motion.span>

          <WordReveal
            className="mt-6 text-cream [font-size:clamp(3rem,8.5vw,7rem)]"
            lines={[
              { text: "Woven Poetry" },
              { text: "in Pure Silk &" },
              { text: "Imperial Zari", emphasis: true },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="mt-7 max-w-xl text-lg font-light leading-relaxed text-cream/85 md:text-xl"
          >
            From the sacred ghats of Varanasi, Banarasi Vastram brings you handwoven sarees where
            centuries-old artistry meets timeless elegance — draped for every celebration of a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Magnetic>
              <Button href="/collections" variant="gold">
                Explore Collections
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href="/about" variant="ghostLight">
                Our Heritage
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom meta */}
      <div className="absolute inset-x-0 bottom-8 z-10 hidden md:block">
        <div className="container-lux flex items-end justify-between gap-4">
          <div className="flex gap-10">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <span className="block font-serif text-3xl leading-none text-gold-300">
                  {s.value}
                  {s.suffix}
                </span>
                <span className="text-[0.68rem] uppercase tracking-wide2 text-cream/60">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-[0.62rem] uppercase tracking-luxe text-cream/65">
            Scroll
            <span className="relative h-11 w-px overflow-hidden bg-gradient-to-b from-gold-300 to-transparent">
              <span className="absolute left-0 top-0 h-1/2 w-full animate-cue bg-gold-300" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
