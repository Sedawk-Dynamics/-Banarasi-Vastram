"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Brand } from "./brand";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/social-icons";
import { nav, collections, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    // Section links on the home page (e.g. "/#wholesale") should never mark active on other routes.
    if (path === "/") return href === "/" && pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement */}
      <div
        className={cn(
          "overflow-hidden bg-maroon-900 transition-all duration-500",
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        )}
      >
        <div className="container-lux flex h-10 items-center justify-center gap-3 text-center text-[0.72rem] uppercase tracking-wide2 text-gold-100">
          <span>Silk Mark Certified Pure Silk</span>
          <span className="text-gold">✦</span>
          <span className="hidden sm:inline">
            Handwoven in <b className="font-semibold text-gold-300">Varanasi</b>
          </span>
          <span className="hidden text-gold sm:inline">✦</span>
          <span className="hidden md:inline">Complimentary Shipping Worldwide</span>
        </div>
      </div>

      {/* Nav */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-gold/10 bg-paper/90 shadow-[0_8px_30px_-18px_rgba(58,11,20,.4)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-lux flex h-[74px] items-center justify-between gap-4 lg:h-[84px]">
          <Brand light={!scrolled} />

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {nav.map((item) =>
              item.label === "Collections" ? (
                <div key={item.href} className="group/dd relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 text-[0.82rem] uppercase tracking-wide2 transition-colors",
                      scrolled ? "text-ink" : "text-cream",
                      isActive(item.href) && "text-gold-600"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/dd:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full min-w-[260px] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100">
                    <div className="rounded-md border border-gold/15 bg-ivory p-2 shadow-lux">
                      {collections.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/collections#${c.slug}`}
                          className="flex flex-col rounded px-3.5 py-2.5 transition-colors hover:bg-cream"
                        >
                          <span className="font-serif text-[1.08rem] font-semibold text-ink">{c.title}</span>
                          <span className="text-[0.72rem] text-muted">{c.kicker}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[0.82rem] uppercase tracking-wide2 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100",
                    scrolled ? "text-ink" : "text-cream",
                    isActive(item.href) && "text-gold-600 after:scale-x-100"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="/contact" variant="gold" size="sm">
                Enquire Now
              </Button>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                scrolled ? "text-maroon" : "text-cream"
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-maroon-900 px-6 pb-8 pt-6 text-cream lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Brand light />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-gold-100/10 py-4 font-serif text-3xl"
                  >
                    {item.label}
                    <span className="font-sans text-xs tracking-wide2 text-gold-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5 pt-8">
              <Button href={`https://wa.me/${site.whatsapp}`} variant="gold">
                Chat on WhatsApp
              </Button>
              <SocialIcons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
