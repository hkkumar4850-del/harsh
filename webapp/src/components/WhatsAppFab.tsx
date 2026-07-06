"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappUrl("Jai Shree Shyam! I'd like to enquire about flower decor.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-strong"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25d366]"
        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
