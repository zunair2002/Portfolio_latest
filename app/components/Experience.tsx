"use client";
import { motion } from "framer-motion";
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
          <p className="section-kicker">Career</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-copy">
            Product engineering, client delivery, and applied research, most recent first.
          </p>
        </motion.div>

        <div className="relative mt-14 space-y-5 pl-2 md:pl-0">
          <div className="absolute bottom-6 left-[11px] top-6 hidden w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

          {experienceData.map((exp, i) => (
            <motion.article
              key={`${exp.role}-${exp.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative md:pl-10"
            >
              <div className="absolute left-[5px] top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-[#7dd3c7] bg-[#06080d] md:block" />
              <div className="surface-card p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#f3efe6]">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-[#7dd3c7]">{exp.company}</p>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-7 text-white/72">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7dd3c7]" />
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
