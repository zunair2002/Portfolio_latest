"use client";
import { motion } from "framer-motion";
import { aboutData } from "./data";

const highlights = [
  { label: "Focus", value: "Full-Stack + AI" },
  { label: "Stack", value: "MERN, Next.js, RAG" },
  { label: "Based in", value: aboutData.location },
];

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Introduction</p>
          <h2 className="section-title">About me</h2>
          <p className="section-copy">
            I design and ship end-to-end products — from clean interfaces to reliable APIs
            and intelligent AI features that actually help users.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="surface-card p-6 md:p-8"
          >
            <div className="space-y-5 text-[15.5px] leading-7 text-white/72 whitespace-pre-line">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="grid gap-4"
          >
            {highlights.map((item) => (
              <div key={item.label} className="surface-card p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7dd3c7]">{item.label}</p>
                <p className="mt-2 text-lg font-medium text-[#f3efe6]">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
