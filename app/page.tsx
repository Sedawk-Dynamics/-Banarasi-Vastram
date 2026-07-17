import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Collections } from "@/components/sections/collections";
import { Latest } from "@/components/sections/latest";
import { Craft } from "@/components/sections/craft";
import { USP } from "@/components/sections/usp";
import { Wholesale } from "@/components/sections/wholesale";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Visit } from "@/components/sections/visit";

// Temporarily hidden at the client's request (kept in the codebase, ready to restore):
//   import { Heritage } from "@/components/sections/heritage";  -> "Our Legacy" section
//   import { Feature } from "@/components/sections/feature";    -> "The Pure Zari Promise" section

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      {/* <Heritage /> — hidden for now */}
      <Collections />
      <Latest />
      {/* <Feature /> — hidden for now */}
      <Craft />
      <USP />
      <Wholesale />
      <Testimonials />
      <Gallery />
      <Visit />
    </>
  );
}
