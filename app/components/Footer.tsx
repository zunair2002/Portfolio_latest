"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Copy, Download, Mail } from "lucide-react";
import { contactData, heroData } from "./data";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const socials = [
  { href: contactData.github, label: "GitHub", Icon: GithubIcon },
  { href: contactData.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contactData.email}`;
    }
  };

  return (
    <footer id="contact" className="pt-8">
      <div className="page-shell pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative isolate overflow-hidden rounded-[28px] bg-[#101051] px-7 py-12 text-white shadow-[0_40px_80px_-40px_rgba(16,16,81,0.8)] md:px-14 md:py-16"
        >
          {/* Grid + glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse 70% 80% at 100% 0%, #000 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 100% 0%, #000 20%, transparent 70%)",
            }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#32de84]/35 blur-[100px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-[#4b4bd1]/40 blur-[100px]" />

          <p className="section-kicker !text-[#32de84]">05 — Contact</p>
          <h2 className="max-w-3xl text-balance text-[clamp(2.2rem,5vw,3.9rem)] font-bold leading-[1.04] tracking-[-0.04em]">
            Have a role or project in mind?{" "}
            <span className="font-[family-name:var(--font-serif)] font-normal italic tracking-[-0.01em] text-[#32de84]">
              Let&apos;s talk.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-[16.5px] leading-7 text-white/70">
            I&apos;m open to full-stack, AI, and product engineering roles, as well as freelance
            work. I usually reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${contactData.email}`} className="btn-primary group h-12 max-w-full !px-5 text-[14px] sm:!px-6 sm:text-[14.5px]">
              <Mail size={16} className="shrink-0" />
              <span className="truncate">{contactData.email}</span>
              <ArrowUpRight size={15} className="hidden shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              {copied ? <Check size={16} className="text-[#32de84]" /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy email"}
            </button>
            <a
              href={heroData.resumeUrl}
              download="Zunair-Shahid-Resume.pdf"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-[#32de84]/60 hover:text-white"
                >
                  <Icon size={16} />
                  {label}
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
            <p className="inline-flex items-center gap-2 text-sm text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#32de84] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#32de84]" />
              </span>
              Available for new opportunities
            </p>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col gap-3 text-[13px] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Zunair Shahid. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <p>Full-Stack AI Engineer · {heroData.location}</p>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 font-medium text-[#101051] transition-colors hover:text-[#16884e]"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#101051]/15 transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowUp size={13} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
