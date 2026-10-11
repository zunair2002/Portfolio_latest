"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50"
    >
      <div className="page-shell">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-[#06080d]/70 px-4 py-2.5 backdrop-blur-xl md:px-5">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[13px] font-semibold tracking-[0.12em] text-[#f3efe6]">
              ZS
            </span>
            <span className="hidden text-sm font-medium text-[#f3efe6] sm:inline">
              Zunair Shahid
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/65 transition-colors hover:text-[#7dd3c7]"
              >
                {link.label}
              </a>
            ))}
            <Link href="/certification" className="btn-secondary !min-h-10 !px-4 text-[13px]">
              Certifications
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#06080d]/90 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/certification"
                onClick={() => setOpen(false)}
                className="btn-secondary mt-1"
              >
                Certifications
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
