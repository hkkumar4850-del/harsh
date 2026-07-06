"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { nav } from "@/lib/content";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <nav
      className={`sticky top-0 z-50 bg-red-deep border-b transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-[rgba(251,243,228,.15)] shadow-[0_4px_20px_rgba(92,14,9,.25)]"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-[14px]">
        <a
          href="#top"
          aria-label="Hisaab home"
          className="flex items-center gap-[10px] text-paper no-underline"
        >
          <span className="grid h-[38px] w-[38px] place-items-center rounded-[8px_8px_8px_2px] bg-paper font-display font-normal text-[22px] text-red shadow-[inset_0_0_0_2px_#A8231B,inset_0_0_0_4px_#FBF3E4]">
            {"₹"}
          </span>
          <span className="font-display font-normal text-[24px] tracking-[.5px]">
            {"Hisaab"}
          </span>
        </a>

        <ul className="hidden items-center gap-[26px] md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-paper opacity-85 transition-opacity duration-200 hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href={nav.cta.href}
          whileHover={{ y: -2, boxShadow: "0 6px 18px rgba(0,0,0,.25)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block rounded-full bg-gold px-6 py-[11px] text-[15.5px] font-bold text-ink no-underline"
        >
          {nav.cta.label}
        </motion.a>
      </div>
    </nav>
  );
}
