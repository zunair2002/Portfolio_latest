"use client";

import { motion } from "framer-motion";
import { heroData } from "./data";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-6 z-50 navv mx-auto flex w-full max-w-6xl items-center justify-between rounded-xl border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50"
    >
      <div className="flex items-center gap-4">
        <span
          className="text-xl text-white/90"
          style={{ fontFamily: "'Segoe Script', cursive" }}
        >
          My logo
        </span>
      </div>

      <Link href="/certification">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center btnn justify-center overflow-hidden rounded-xl bg-white text-black px-8 py-2.5 text-sm font-bold shadow-lg transition-all duration-300 border border-white/20 cursor-pointer hover:bg-white-500 hover:text-black"
        >
          <span className="relative z-10 ">
            Certification
          </span>
        </motion.div>
      </Link>
    </motion.nav>
  );
}