"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Check, Layers, MapPin } from "lucide-react";
import { aboutData, heroData } from "./data";

const highlights = [
  {
    label: "Focus",
    value: "Full-Stack Engineering & AI Systems",
    points: [
      "Building secure, scalable web apps across healthcare SaaS and freelance projects.",
    ],
    tags: ["Full-Stack", "RAG", "Multi-Agent"],
  },
  {
    label: "Core Stack",
    value: "React, Next.js, Node.js, TypeScript",
    points: [
      "Responsive frontends with Next.js, TypeScript and Tailwind CSS.",
    ],
    tags: ["React.js", "Next.js", "Node.js", "TypeScript"],
  },
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
            I build end-to-end software solutions, combining intuitive interfaces, secure backend systems, and practical AI capabilities to solve real-world problems.
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
                <p className="mt-0.5 text-[13px] text-neutral-500">Full-Stack Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline highlights */}
          <div className="relative">
            {/* Timeline line and markers match the experience section. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 left-[7px] top-3 w-px bg-gradient-to-b from-[#32de84] via-[#101051]/20 to-transparent"
            />

            <div className="flex flex-col gap-5">
              {highlights.map(({ label, value, points, tags }, i) => (
                <motion.div
                  key={label}
                  {...reveal(0.15 + i * 0.1)}
                  className="relative pl-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[7px] z-10 flex h-[15px] w-[15px] items-center justify-center"
                  >
                    <span className="h-[15px] w-[15px] rounded-full border-[3px] border-[#32de84] bg-[#F7F6F2]" />
                  </span>

                  {/* card */}
                  <div className="rounded-[22px] border border-[#101051]/10 bg-white/70 p-5 shadow-[0_2px_10px_-6px_rgba(16,16,81,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] md:p-6">
                    <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-[#16884e]">
                      {label}
                    </p>

                    <h3 className="mt-1.5 flex items-start gap-2 text-[17px] font-semibold leading-snug tracking-tight text-[#101051]">
                      <span>{value}</span>
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[14px] leading-6 text-neutral-600">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#32de84]/20 text-[#16884e]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#101051]/10 bg-white px-3 py-1 text-[12px] text-[#101051]/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}