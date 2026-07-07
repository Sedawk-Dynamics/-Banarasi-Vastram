import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Heritage } from "@/components/sections/heritage";
import { Collections } from "@/components/sections/collections";
import { Feature } from "@/components/sections/feature";
import { Craft } from "@/components/sections/craft";
import { USP } from "@/components/sections/usp";
import { Wholesale } from "@/components/sections/wholesale";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Visit } from "@/components/sections/visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Heritage />
      <Collections />
      <Feature />
      <Craft />
      <USP />
      <Wholesale />
      <Testimonials />
      <Gallery />
      <Visit />
    </>
  );
}
