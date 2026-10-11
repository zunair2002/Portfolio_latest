"use client";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, MapPin } from "lucide-react";
import { contactData, heroData } from "./data";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 h-[720px]" />

      <div className="page-shell relative">
        <div className="grid items-center gap-14 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#7dd3c7]/25 bg-[#7dd3c7]/[0.07] px-3.5 py-1.5 text-[13px] text-[#cfeee9]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7dd3c7] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7dd3c7]" />
              </span>
              Available for full-time roles &amp; freelance
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-7 text-balance text-[clamp(2.6rem,6.2vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#f3efe6]"
            >
              {heroData.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              className="mt-4 text-xl font-medium tracking-tight text-[#7dd3c7] md:text-2xl"
            >
              Full-Stack AI Engineer
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-[17px] leading-8 text-white/68 md:text-lg"
            >
              {heroData.description} I specialise in the MERN stack, Next.js, and LLM-powered
              systems built with RAG and multi-agent orchestration.
            </motion.p>

            <motion.div {...fadeUp(0.28)} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View my work
                <ArrowDownRight size={16} />
              </a>
              <a
                href={heroData.resumeUrl}
                download="Zunair-Shahid-Resume.pdf"
                className="btn-secondary"
              >
                <Download size={16} />
                Resume
              </a>
              <div className="ml-1 flex items-center gap-2">
                <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href={`mailto:${contactData.email}`} className="icon-btn" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            <motion.dl
              {...fadeUp(0.36)}
              className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
            >
              {heroData.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-[#f3efe6] md:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1.5 text-[13px] leading-5 text-white/50">{stat.label}</p>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[360px] lg:max-w-none"
          >
            <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(closest-side,rgba(125,211,199,0.16),transparent)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 p-2">
              <img
                src={heroData.portrait}
                alt={`Portrait of ${heroData.name}`}
                className="aspect-[4/5] w-full rounded-[22px] object-cover object-[50%_18%] grayscale"
              />
              <div className="absolute inset-x-2 bottom-2 rounded-b-[22px] bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-5 pt-16">
                <p className="text-[15px] font-medium text-white">{heroData.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[13px] text-white/65">
                  <MapPin size={13} />
                  {heroData.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
