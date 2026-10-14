"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const ACCENT = "#32de84";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Add a stronger shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50"
    >
      <div className="page-shell">
        <nav
          className={`mt-4 flex items-center justify-between rounded-full border border-neutral-200 bg-white/80 px-4 py-2.5 backdrop-blur-xl transition-shadow duration-300 md:px-5 ${
            scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" : "shadow-sm"
          }`}
          aria-label="Main navigation"
        >
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 no-underline">
            <Image
              src="/Myself/portrait.jpeg"
              alt="Zunair Shahid"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover object-[50%_18%] ring-2 ring-offset-2 ring-offset-white"
              style={{ ["--tw-ring-color" as string]: ACCENT }}
            />
            <span className="hidden text-sm font-semibold tracking-tight text-neutral-900 sm:inline">
              Zunair Shahid
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  )}
                </a>
              );
            })}

            <Link
              href="/certification"
              className="btn-primary ml-3 !min-h-10 !px-5 text-[13px] font-semibold active:scale-[0.98]"
            >
              Certifications
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-white text-neutral-900 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const isActive = active === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-neutral-100 text-neutral-900"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                      )}
                    </a>
                  );
                })}
                <Link
                  href="/certification"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 h-11 w-full text-sm font-semibold"
                >
                  Certifications
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}