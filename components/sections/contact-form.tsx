"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const enquiryTypes = [
  { value: "general", label: "General Enquiry" },
  { value: "bridal", label: "Bridal / Bespoke" },
  { value: "retail", label: "Buy a Saree" },
  { value: "wholesale", label: "Wholesale & Bulk" },
  { value: "appointment", label: "Book Appointment" },
];

const field =
  "w-full rounded border border-gold/20 bg-paper px-4 py-3 text-[0.98rem] text-ink transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";
const label = "mb-2 block text-[0.72rem] font-medium uppercase tracking-wide2 text-muted";

export function ContactForm() {
  const [enquiry, setEnquiry] = useState("general");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("enquiry");
    if (q && enquiryTypes.some((t) => t.value === q)) setEnquiry(q);
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-xl border border-gold/40 bg-ivory p-6 shadow-soft md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full Name</label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required placeholder="+91 …" className={field} />
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="enquiry">Enquiry Type</label>
          <select
            id="enquiry"
            name="enquiry"
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
            className={field}
          >
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about the weave, colour or occasion you have in mind…"
          className={`${field} resize-y`}
        />
      </div>

      <Button type="submit" variant="gold" className="mt-6 w-full">
        Send Enquiry
      </Button>

      {sent ? (
        <p className="mt-4 text-sm text-gold-600">
          Dhanyavaad! Your enquiry has been received — our team will connect with you shortly.
        </p>
      ) : (
        <p className="mt-4 text-sm text-muted">
          Prefer to talk? Call or WhatsApp us at{" "}
          <a href={`tel:${site.phoneRaw}`} className="text-gold-600">
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
