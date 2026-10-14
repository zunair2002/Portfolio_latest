"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Mail, MapPin } from "lucide-react";
import { contactData, heroData } from "./data";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";


const buildingWords = [
  "multi-agent AI systems",
  "RAG pipelines",
  "full-stack MERN apps",
  "open-source UI libraries",
];

function useTypewriter(words: string[], enabled: boolean) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!enabled) return;
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1700);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, 280);
          return;
        }
        timer = setTimeout(tick, 26);
      }
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [words, enabled]);

  return text;
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [, target, suffix] = value.match(/^(\d+)(.*)$/) ?? [null, null, value];
  const [display, setDisplay] = useState(target ? "0" : value);

  useEffect(() => {
    if (!inView || !target) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, Number(target), {
      duration: 1.6,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {target ? suffix : null}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(buildingWords, !reduce);

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32de84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]";

  const socials = [
    { href: contactData.linkedin, label: "LinkedIn", icon: <LinkedinIcon size={17} />, ext: true },
    { href: contactData.github, label: "GitHub", icon: <GithubIcon size={17} />, ext: true },
    { href: `mailto:${contactData.email}`, label: "Email", icon: <Mail size={17} />, ext: false },
  ];

  return (
    <section
      id="top"
      className="relative flex overflow-hidden text-[#0A0A0A] lg:min-h-[calc(100svh-6rem)] lg:items-center"
    >
      {/* Faint navy grid + soft glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
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
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-[#32de84]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#101051]/10 blur-[120px]"
      />

      <div className="page-shell relative w-full">
        <div className="grid items-center gap-14 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-6">
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
              Available for new opportunities
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="mt-5 text-balance text-[clamp(2.75rem,min(6vw,9.5vh),4.75rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#101051]"
            >
              {heroData.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="mt-3 text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold tracking-[-0.02em] text-[#0A0A0A]"
            >
              Full-Stack <span className="serif-accent text-[1.12em]">Engineer</span>
            </motion.p>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-3 flex min-h-[1.6em] items-center whitespace-nowrap font-mono text-[13.5px] text-[#101051]/70 sm:text-[14.5px]"
              aria-label={`Currently building ${buildingWords.join(", ")}`}
            >
              <span aria-hidden="true" className="mr-2 text-[#16884e]">
                ~/building
              </span>
              <span aria-hidden="true" className="caret font-medium text-[#101051]">
                {reduce ? buildingWords[0] : typed}
              </span>
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-5 max-w-[36rem] text-base leading-[1.7] text-neutral-600 lg:text-[17px]"
            >
              {heroData.description}
            </motion.p>

            {/* CTAs + socials */}
            <motion.div {...fadeUp(0.26)} className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={`group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#101051] pl-6 pr-1.5 text-[14.5px] font-semibold text-white shadow-[0_12px_28px_-10px_rgba(16,16,81,0.65)] transition hover:-translate-y-0.5 hover:bg-[#16166b] active:scale-[0.98] ${focusRing}`}
              >
                View my work
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#32de84] text-[#101051] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-rotate-45">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </a>
              <a
                href={heroData.resumeUrl}
                download="Zunair-Shahid-Resume.pdf"
                className={`inline-flex h-12 items-center gap-2 rounded-full border border-[#101051]/15 bg-white px-5 text-[14.5px] font-semibold text-[#101051] transition hover:-translate-y-0.5 hover:border-[#101051]/40 active:scale-[0.98] ${focusRing}`}
              >
                <FileText size={16} />
                Resume
              </a>

              <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-[#101051]/15 sm:block" />

              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    {...(s.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#101051]/12 bg-white/70 text-[#101051]/80 transition hover:-translate-y-0.5 hover:border-[#32de84] hover:bg-[#32de84]/15 hover:text-[#101051] ${focusRing}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.dl
              {...fadeUp(0.32)}
              className="mt-9 grid max-w-[34rem] grid-cols-3 divide-x divide-[#101051]/10 border-t border-[#101051]/10 pt-6"
            >
              {heroData.stats.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold leading-none tracking-[-0.03em] text-[#101051]">
                    <CountUp value={stat.value} />
                  </dd>
                  <dd aria-hidden="true" className="mt-2 text-[12.5px] leading-snug text-neutral-500">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ───────── Right: portrait ───────── */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-[min(72vw,300px)] lg:ml-auto lg:mr-3 lg:w-[clamp(240px,46vh,390px)]"
          >
            {/* Offset navy block with a green corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full overflow-hidden rounded-[26px] bg-[#101051]"
            >
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#32de84]/40 blur-2xl" />
            </div>

            {/* Photo: fixed 4:5 */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[26px] border-[5px] border-white bg-white shadow-[0_30px_60px_-24px_rgba(16,16,81,0.5)]">
              <Image
                src={heroData.portrait}
                alt={`Portrait of ${heroData.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 390px, 300px"
                className="object-cover object-[50%_18%] grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
              />

              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-[#101051] backdrop-blur">
                <MapPin size={13} />
                {heroData.location}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
