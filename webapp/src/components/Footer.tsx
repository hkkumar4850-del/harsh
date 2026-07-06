"use client";

import { motion, type Variants } from "framer-motion";
import { FlowerIcon } from "./icons";
import { navLinks, site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const col: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const connectLinks = [
  { href: `tel:+${site.phoneE164}`, label: site.phoneDisplay, external: false },
  { href: `https://wa.me/${site.phoneE164}`, label: "WhatsApp", external: true },
  { href: site.instagramUrl, label: "Instagram", external: true },
];

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ x: 6, color: "#e8c873" }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="inline-block"
    >
      {label}
    </motion.a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark px-6 pt-16 text-white/75">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-container gap-10 border-b border-white/10 pb-12 sm:grid-cols-3"
      >
        <motion.div variants={col}>
          <a href="#home" className="flex items-center gap-2.5 font-heading text-lg font-bold text-white">
            <FlowerIcon className="h-7 w-7 text-gold-light" />
            <span>{site.name}</span>
          </a>
          <p className="mt-3.5 font-script text-2xl text-gold-light">{site.tagline}</p>
          <p className="mt-2 text-sm">{site.address}</p>
        </motion.div>

        <motion.div variants={col}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            {navLinks
              .filter((l) => l.href !== "#home")
              .map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href} label={l.label} />
                </li>
              ))}
          </ul>
        </motion.div>

        <motion.div variants={col}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Connect
          </h4>
          <ul className="space-y-3 text-sm">
            {connectLinks.map((l) => (
              <li key={l.label}>
                <FooterLink href={l.href} label={l.label} external={l.external} />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      <p className="mx-auto max-w-container py-6 text-center text-xs">
        &copy; {year} {site.fullName}. All rights reserved.
      </p>
    </footer>
  );
}
