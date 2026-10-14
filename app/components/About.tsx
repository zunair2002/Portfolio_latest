"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Layers, MapPin } from "lucide-react";
import { aboutData, heroData } from "./data";

const highlights = [
  { label: "Focus", value: "Full-Stack + AI", Icon: Brain },
  { label: "Stack", value: "MERN, Next.js, RAG", Icon: Layers },
  { label: "Based in", value: aboutData.location, Icon: MapPin },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function About() {
  const [lead, ...rest] = aboutData.paragraphs;

  return (
    <section id="about" className="section-block">
      <div className="page-shell">
        <motion.div {...reveal()} className="max-w-3xl">
          <p className="section-kicker">01 — About</p>
          <h2 className="section-title">
            A little <span className="serif-accent">about me</span>
          </h2>
          <p className="section-copy">
            I design and ship end-to-end products — from clean interfaces to reliable APIs
            and intelligent AI features that actually help users.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_0.8fr]">
          <motion.div {...reveal(0.1)} className="surface-card relative flex flex-col overflow-hidden p-7 md:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-10 select-none font-[family-name:var(--font-serif)] text-[180px] leading-none text-[#32de84]/20"
            >
              &rdquo;
            </span>

            <p className="relative text-[clamp(1.15rem,1.8vw,1.4rem)] font-medium leading-[1.55] tracking-[-0.01em] text-[#101051]">
              {lead}
            </p>

            <div className="mt-6 space-y-5 text-[15.5px] leading-7 text-neutral-600">
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-[#101051]/10 pt-6">
              <Image
                src={heroData.portrait}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover object-[50%_18%]"
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-[#101051]">{heroData.name}</p>
                <p className="mt-0.5 text-[13px] text-neutral-500">Full-Stack AI Engineer</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {highlights.map(({ label, value, Icon }, i) => {
              const featured = i === 0;
              return (
                <motion.div
                  key={label}
                  {...reveal(0.15 + i * 0.08)}
                  className={`group relative flex items-center gap-5 overflow-hidden rounded-[20px] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    featured
                      ? "border-[#101051] bg-[#101051] text-white shadow-[0_24px_48px_-24px_rgba(16,16,81,0.7)]"
                      : "surface-card hover:shadow-[var(--shadow-lift)]"
                  }`}
                >
                  {featured && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#32de84]/30 blur-2xl"
                    />
                  )}
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                      featured ? "bg-[#32de84] text-[#101051]" : "bg-[#101051]/[0.06] text-[#101051]"
                    }`}
                  >
                    <Icon size={21} />
                  </span>
                  <div className="relative">
                    <p
                      className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                        featured ? "text-[#32de84]" : "text-[#16884e]"
                      }`}
                    >
                      {label}
                    </p>
                    <p className={`mt-1.5 text-lg font-semibold tracking-tight ${featured ? "text-white" : "text-[#101051]"}`}>
                      {value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
