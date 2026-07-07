import { motion, useMotionValueEvent } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLook } from '../LookContext';
import { NAV_SOLID_AFTER } from '../scenes';

const NAV_LINKS = ['Shop', 'Collections', 'Lookbook', 'Fabric', 'Journal'];

/** Monoline "F" mark — a stitched-frame logo drawn in currentColor. */
function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
      <rect
        x="4.5"
        y="4.5"
        width="23"
        height="23"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="3 2.4"
      />
      <path
        d="M12 23V9h9M12 16h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const { scrollYProgress, look } = useLook();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setScrolled(v > NAV_SOLID_AFTER);
  });

  // On the cream "Bone" look the solid pill stays dark (it has its own
  // backdrop), but the transparent state flips to near-black text.
  const textTone = !scrolled && look.lightSurface ? 'text-neutral-900' : 'text-white';

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-colors duration-500 ${textTone} ${
          scrolled ? 'md:px-6' : ''
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-full transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          } bg-black/40 backdrop-blur-md`}
          aria-hidden="true"
        />

        <a href="#top" className="relative flex items-center gap-2.5 font-bold tracking-tight">
          <LogoMark />
          <span className="text-lg">FRAME</span>
        </a>

        <nav className="relative hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
              className="text-sm font-medium opacity-75 transition-opacity hover:opacity-100"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="group relative flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-[1.03]"
        >
          Shop the Drop
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </motion.header>
  );
}
