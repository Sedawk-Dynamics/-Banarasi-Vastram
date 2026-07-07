import { Reveal } from "./reveal";
import { Kicker } from "./kicker";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  lead,
  center = false,
  divider = false,
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
  divider?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn(center ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <Kicker both={center}>{kicker}</Kicker>
      <h2 className="heading-display mt-4">{title}</h2>
      {divider && (
        <div className={cn("mt-5 flex items-center gap-3", center && "justify-center")}>
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="h-[7px] w-[7px] rotate-45 border border-gold" />
          <span className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
        </div>
      )}
      {lead && <p className="mt-5 text-lg leading-relaxed text-ink-2">{lead}</p>}
    </Reveal>
  );
}
