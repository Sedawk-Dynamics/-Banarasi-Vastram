import { cn } from "@/lib/utils";

export function Kicker({
  children,
  both = false,
  className,
}: {
  children: React.ReactNode;
  both?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("kicker", className)}>
      <span className="h-px w-6 bg-gold/80" />
      {children}
      {both && <span className="h-px w-6 bg-gold/80" />}
    </span>
  );
}
