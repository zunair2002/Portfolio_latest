"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Mail, MapPin } from "lucide-react";
import { contactData, heroData } from "./data";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

/**
 * Palette
 *  navy   #101051  -> headings, primary button, decorative block
 *  green  #32de84  -> accent only (dots, chips, underlines, focus ring)
 *  paper  #F7F6F2  -> page background
 *  black  #0A0A0A  -> body-strong text
 *
 * One-screen layout (desktop):
 *  - Section height = 100svh minus navbar, content vertically centred.
 *  - H1 and photo scale with viewport HEIGHT (vh) so everything
 *    (badge, name, copy, buttons, socials, photo) always fits without scrolling.
 *  - Photo is a fixed 4:5 ratio: width = 0.8 x height.
 */

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32de84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]";

  const socials = [
    { href: contactData.linkedin, label: "LinkedIn", icon: <LinkedinIcon />, ext: true },
    { href: contactData.github, label: "GitHub", icon: <GithubIcon />, ext: true },
    { href: `mailto:${contactData.email}`, label: "Email", icon: <Mail size={18} />, ext: false },
  ];

  return (
    <section
      id="top"
      className="relative flex overflow-hidden bg-[#F7F6F2] text-[#0A0A0A] lg:min-h-[calc(100svh-6rem)] lg:items-center"
    >
      {/* Faint navy grid + green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#101051 1px, transparent 1px), linear-gradient(90deg, #101051 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-[380px] w-[380px] rounded-full bg-[#32de84]/20 blur-[110px]"
      />

      <div className="page-shell relative w-full">
        <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-6">
          {/* ───────── Left: copy ───────── */}
          <div>
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-[#32de84]/40 bg-[#32de84]/15 px-3.5 py-1.5 text-[13px] font-semibold text-[#101051]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#32de84] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#32de84]" />
              </span>
              Full-Stack AI Engineer
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="mt-5 text-balance text-[clamp(2.5rem,min(5.6vw,9vh),4.25rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#101051]"
            >
              {heroData.name}
            </motion.h1>

            <motion.div {...fadeUp(0.12)} className="mt-3">
              <p className="text-[clamp(1.25rem,2.1vw,1.625rem)] font-semibold tracking-[-0.02em] text-[#0A0A0A]">
                Full-Stack AI Engineer
              </p>
              <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-[#32de84]" />
            </motion.div>

            <motion.p
              {...fadeUp(0.18)}
              className="mt-5 max-w-[36rem] text-base leading-[1.7] text-neutral-600 lg:text-[17px]"
            >
              {heroData.description} I specialise in the MERN stack, Next.js, and LLM-powered
              systems built with RAG and multi-agent orchestration.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.24)} className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={`group inline-flex h-11 items-center gap-2.5 rounded-full bg-[#101051] pl-5 pr-1.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,16,81,0.6)] transition hover:bg-[#16166b] active:scale-[0.98] ${focusRing}`}
              >
                View my work
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#32de84] text-[#101051] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </a>
              <a
                href={heroData.resumeUrl}
                download="Zunair-Shahid-Resume.pdf"
                className={`inline-flex h-11 items-center gap-2 rounded-full border border-[#101051]/15 bg-white px-5 text-[14px] font-semibold text-[#101051] transition hover:border-[#101051]/40 active:scale-[0.98] ${focusRing}`}
              >
                <FileText size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#101051]/75"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group relative inline-flex items-center gap-2 rounded-sm transition-colors hover:text-[#101051] ${focusRing}`}
                >
                  {s.icon}
                  {s.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#32de84] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ───────── Right: portrait ───────── */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-[min(72vw,300px)] lg:ml-auto lg:mr-3 lg:w-[clamp(240px,44.8vh,380px)]"
          >
            {/* Offset navy block */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-[24px] bg-[#101051]"
            />

            {/* Photo: fixed 4:5 */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border-[5px] border-white bg-white shadow-[0_20px_50px_-20px_rgba(16,16,81,0.45)]">
              <Image
                src={heroData.portrait}
                alt={`Portrait of ${heroData.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 300px"
                className="object-cover object-[50%_18%] grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-[#101051] backdrop-blur">
                <MapPin size={13} />
                {heroData.location}
              </div>
            </div>

            {/* Availability chip */}
            <div className="absolute -left-3 top-7 flex items-center gap-2 rounded-full border border-[#101051]/10 bg-white px-3.5 py-2 text-[12px] font-semibold text-[#101051] shadow-[0_10px_30px_-10px_rgba(16,16,81,0.35)] sm:-left-6">
              <span className="h-2 w-2 rounded-full bg-[#32de84]" />
              Open to work
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}