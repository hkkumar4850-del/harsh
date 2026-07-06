"use client";

import { motion } from "framer-motion";
import { InstaIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: `${site.phoneDisplay} (${site.owner})`,
    href: `tel:+${site.phoneE164}`,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: `https://wa.me/${site.phoneE164}`,
  },
  {
    icon: InstaIcon,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagramUrl,
  },
  {
    icon: PinIcon,
    label: "Visit Our Shop",
    value: site.address,
    href: `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-primary-dark to-primary px-6 py-24 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Ready to Decorate Your Special Day?
        </h2>
        <p className="mt-3 text-white/80">
          From an intimate mandir decor to a full wedding celebration — let&rsquo;s make it blossom.
        </p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-container gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur-sm"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-gold-light">
              <it.icon className="h-5 w-5" />
            </span>
            <span className="w-full text-center">
              <span className="block text-sm font-semibold">{it.label}</span>
              <span className="mt-1 block text-xs text-white/70">{it.value}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
