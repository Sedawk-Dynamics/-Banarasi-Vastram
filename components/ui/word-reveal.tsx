"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Hero heading — reveals line-by-line with a mask, word emphasis supported.
export function WordReveal({
  lines,
  className,
  delay = 0.15,
}: {
  lines: { text: string; emphasis?: boolean }[];
  className?: string;
  delay?: number;
}) {
  return (
    <h1 className={cn("heading-display", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block", line.emphasis && "italic text-gold-300")}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: delay + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
