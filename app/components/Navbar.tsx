"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Award, Menu, X } from "lucide-react";

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

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

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

    const clearAtTop = () => window.scrollY < 200 && setActive("");
    window.addEventListener("scroll", clearAtTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", clearAtTop);
    };
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#101051] via-[#16884e] to-[#32de84]"
      />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50"
      >
        <div className="page-shell">
          <nav
            className={`mt-4 flex items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-300 md:pl-3 md:pr-2 ${
              scrolled
                ? "border-[#101051]/10 bg-white/85 shadow-[0_12px_40px_-12px_rgba(16,16,81,0.25)]"
                : "border-[#101051]/[0.08] bg-white/70 shadow-sm"
            }`}
            aria-label="Main navigation"
          >
            <a href="#top" className="group flex items-center gap-3 no-underline">
              <span className="relative">
                <Image
                  src="/Myself/portrait.jpeg"
                  alt="Zunair Shahid"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover object-[50%_18%] ring-2 ring-[#32de84] ring-offset-2 ring-offset-white transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#32de84]" />
              </span>
              <span className="hidden flex-col leading-tight sm:flex">
                <span className="text-sm font-semibold tracking-tight text-[#101051]">Zunair Shahid</span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#16884e]">
                  AI Engineer
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-0.5 md:flex">
              {links.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative isolate rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-[#101051]" : "text-neutral-500 hover:text-[#101051]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-full bg-[#101051]/[0.07]"
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}

              <Link href="/certification" className="btn-navy group ml-3 !min-h-10 !pl-4 !pr-1.5 text-[13px]">
                Certifications
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#32de84] text-[#101051] transition-transform duration-300 group-hover:rotate-12">
                  <Award size={14} strokeWidth={2.5} />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#101051] text-white md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-2 origin-top rounded-3xl border border-[#101051]/10 bg-white/95 p-3 shadow-[0_24px_60px_-20px_rgba(16,16,81,0.35)] backdrop-blur-xl md:hidden"
              >
                <div className="flex flex-col gap-1">
                  {links.map((link, i) => {
                    const isActive = active === link.href;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors ${
                          isActive
                            ? "bg-[#101051]/[0.06] text-[#101051]"
                            : "text-neutral-600 hover:bg-[#101051]/[0.04] hover:text-[#101051]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-[11px] text-[#16884e]">0{i + 1}</span>
                          {link.label}
                        </span>
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#32de84]" />}
                      </a>
                    );
                  })}
                  <Link
                    href="/certification"
                    onClick={() => setOpen(false)}
                    className="btn-navy mt-2 h-12 w-full text-sm"
                  >
                    <Award size={16} />
                    Certifications
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
