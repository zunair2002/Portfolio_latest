"use client";
import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { experienceData } from "./data";

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">02 — Experience</p>
          <h2 className="section-title">
            My <span className="serif-accent">journey</span> so far
          </h2>
          <p className="section-copy">
            Product engineering, client delivery, and applied research.
          </p>
        </motion.div>

        <div className="relative mt-14 space-y-8 md:space-y-10">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[7px] top-3 w-px bg-gradient-to-b from-[#32de84] via-[#101051]/20 to-transparent md:left-[224px]"
          />

          {experienceData.map((exp, i) => {
            const current = /present/i.test(exp.period);
            return (
              <motion.article
                key={`${exp.role}-${exp.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-4 pl-9 md:grid-cols-[200px_1fr] md:gap-0 md:pl-0"
              >
                {/* Timeline node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center md:left-[217px] md:top-9"
                >
                  {current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#32de84] opacity-60" />
                  )}
                  <span
                    className={`relative h-[15px] w-[15px] rounded-full border-[3px] ${
                      current ? "border-[#32de84] bg-[#101051]" : "border-[#32de84] bg-[#F7F6F2]"
                    }`}
                  />
                </span>

                {/* Meta */}
                <div className="md:pr-10 md:pt-7 md:text-right">
                  <p className="font-mono text-[12.5px] font-medium text-[#101051]">{exp.period}</p>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-[#16884e] md:justify-end">
                    {exp.company}
                  </p>
                  {current && (
                    <p className="mt-3 md:flex md:justify-end">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#32de84]/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#16884e]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#32de84]" />
                        Current
                      </span>
                    </p>
                  )}
                </div>

                {/* Card */}
                <div className="md:pl-12">
                  <div className="surface-card card-lift p-6 md:p-8">
                    <h3 className="text-xl font-semibold tracking-tight text-[#101051] md:text-[1.35rem]">
                      {exp.role}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-[15px] leading-7 text-neutral-600">
                          <span className="mt-[5px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#32de84]/20 text-[#16884e]">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tags.slice(0, 8).map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
