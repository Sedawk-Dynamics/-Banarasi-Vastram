"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      aria-label="Newsletter signup"
      className="mt-2"
    >
      <div className="flex overflow-hidden rounded border border-gold-100/25">
        <input
          type="email"
          required
          placeholder="Email for new arrivals"
          aria-label="Email address"
          className="flex-1 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gold px-5 text-[0.72rem] font-semibold uppercase tracking-wide2 text-maroon-900 transition-colors hover:bg-gold-300"
        >
          Join
        </button>
      </div>
      {done && <p className="mt-2 text-xs text-gold-300">Dhanyavaad — you're on the list.</p>}
    </form>
  );
}
