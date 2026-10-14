"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download, Mail } from "lucide-react";
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
    <footer id="contact">
      <div className="page-shell pb-10 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="surface-card relative overflow-hidden p-8 md:p-14"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#32de84]/15 blur-3xl" />

          <p className="section-kicker">Contact</p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 md:text-5xl">
            Have a role or project in mind? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-7 text-neutral-600">
            I&apos;m open to full-stack, AI, and product engineering roles, as well as freelance
            work. I usually reply within a day.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`mailto:${contactData.email}`} className="btn-primary">
              <Mail size={16} />
              {contactData.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn-secondary" aria-live="polite">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a href={heroData.resumeUrl} download="Zunair-Shahid-Resume.pdf" className="btn-secondary">
              <Download size={16} />
              Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-neutral-900/10 pt-6">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-[#16884e]"
              >
                <Icon size={16} />
                {label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col gap-2 text-[13px] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Zunair Shahid. All rights reserved.</p>
          <p>Full-Stack AI Engineer · {heroData.location}</p>
        </div>
      </div>
    </footer>
  );
}
