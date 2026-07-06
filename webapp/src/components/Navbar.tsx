"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FlowerIcon } from "./icons";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled
          ? "bg-primary-dark/90 backdrop-blur-md shadow-strong py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-6">
        <a href="#home" className="flex items-center gap-2.5 font-heading text-lg font-bold text-white">
          <FlowerIcon className="h-7 w-7 text-gold-light" />
          <span className="flex flex-col leading-none">
            {site.name}
            <em className="mt-1 text-[0.62em] font-sans font-semibold not-italic uppercase tracking-widest text-gold-light">
              Flower Event Decor
            </em>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/85 transition-colors hover:text-gold-light after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold-light after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl("Jai Shree Shyam! I'd like to enquire about flower decor.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gradient-to-br from-gold-light to-gold-dark px-6 py-2.5 text-sm font-semibold text-primary-dark shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Book Now
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="z-50 flex w-7 flex-col gap-1.5 md:hidden"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            className="block h-0.5 w-full bg-white"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="block h-0.5 w-full bg-white"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            className="block h-0.5 w-full bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 flex w-[min(320px,80vw)] flex-col justify-center gap-7 bg-primary-dark px-10 shadow-strong md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
