import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "ghostLight";
type Size = "md" | "sm";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[2px] font-sans font-medium uppercase tracking-wide2 transition-[color,transform] duration-500 active:translate-y-px";

const sizes: Record<Size, string> = {
  md: "px-8 py-[1.05rem] text-[0.8rem]",
  sm: "px-6 py-3 text-[0.72rem]",
};

const variants: Record<Variant, { box: string; sweep: string; text: string }> = {
  primary: {
    box: "bg-maroon text-cream border border-maroon",
    sweep: "bg-gold",
    text: "group-hover:text-maroon-900",
  },
  gold: {
    box: "bg-gold text-maroon-900 border border-gold",
    sweep: "bg-maroon",
    text: "group-hover:text-cream",
  },
  outline: {
    box: "bg-transparent text-maroon border border-maroon/35",
    sweep: "bg-maroon",
    text: "group-hover:text-cream",
  },
  ghostLight: {
    box: "bg-transparent text-cream border border-gold-100/40",
    sweep: "bg-gold",
    text: "group-hover:text-maroon-900",
  },
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
  type,
}: Props) {
  const v = variants[variant];
  const cls = cn(base, sizes[size], v.box, className);
  const inner = (
    <>
      <span
        className={cn(
          "absolute inset-0 z-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0",
          v.sweep
        )}
      />
      <span className={cn("relative z-10 inline-flex items-center gap-2 transition-colors duration-500", v.text)}>
        {children}
      </span>
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
    if (external) {
      return (
        <a href={href} target={target} rel={rel} className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={cls}>
      {inner}
    </button>
  );
}
