import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav } from "@/lib/content";
import { EASE, staggerParent, staggerChild } from "@/lib/motion";

const pillEntrance = (delay: number) => ({
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

function LogoMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-white"
    >
      <rect x="1" y="1" width="9" height="9" rx="2.5" fill="currentColor" />
      <rect x="14" y="1" width="9" height="9" rx="2.5" fill="currentColor" />
      <rect x="1" y="14" width="9" height="9" rx="2.5" fill="currentColor" />
      <rect
        x="14"
        y="14"
        width="9"
        height="9"
        rx="2.5"
        fill="currentColor"
        className="text-accent"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-20">
      {/* mobile full-screen menu — sits beneath the pills so the toggle stays reachable */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="glass fixed inset-0 z-0 flex flex-col md:hidden"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <motion.nav
              aria-label="mobile"
              className="flex flex-1 flex-col justify-center gap-2 px-8"
              variants={staggerParent(0.07, 0.1)}
              initial="hidden"
              animate="show"
            >
              {nav.links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={staggerChild}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl py-3 text-3xl text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={nav.cta.href}
                variants={staggerChild}
                onClick={() => setOpen(false)}
                className="mt-4 self-start rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
              >
                {nav.cta.label}
              </motion.a>
            </motion.nav>
            <p className="px-8 pb-10 text-sm text-white/40">{brand.tagline}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-10">
        {/* left pill — logo + brand */}
        <motion.div
          {...pillEntrance(0)}
          className="glass flex items-center gap-3 rounded-full py-3 pl-4 pr-6"
        >
          <LogoMark />
          <span className="text-sm font-normal tracking-tight text-white">
            {brand.name}
          </span>
        </motion.div>

        {/* center pill — links */}
        <motion.nav
          {...pillEntrance(0.1)}
          aria-label="primary"
          className="glass hidden items-center gap-1 rounded-full px-3 py-2 md:flex"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* right — cta + mobile toggle */}
        <motion.div {...pillEntrance(0.2)} className="flex items-center gap-3">
          <a
            href={nav.cta.href}
            className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
          >
            {nav.cta.label}
          </a>
          <button
            type="button"
            aria-label={open ? "close menu" : "open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="glass rounded-full p-3 text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>
      </div>
    </header>
  );
}
