import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

// Seamless marquee — single track holding two copies, translated -50%.
// Children should carry their own trailing spacing so the seam is invisible.
export function Marquee({
  children,
  className,
  reverse,
  pauseOnHover = true,
  duration = "34s",
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
}) {
  return (
    <div
      className={cn("group w-full overflow-hidden mask-fade-x", className)}
      style={{ ["--marquee-duration" as string]: duration }}
    >
      <div
        className={cn(
          "flex w-max animate-marquee items-center",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
