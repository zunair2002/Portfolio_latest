"use client";
import { motion } from "framer-motion";
import { skillsRow1, skillsRow2, skillsRow3, skillsRow4 } from "./data";

const groups = [
  { title: "Languages & Databases", items: skillsRow1 },
  { title: "Frontend & Backend", items: skillsRow2 },
  { title: "Tools & Platforms", items: skillsRow3 },
  { title: "Practices", items: skillsRow4 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-copy">
            The tools I use to design, build, and ship reliable web products and AI features.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card p-6"
            >
              <h3 className="mb-4 text-sm uppercase tracking-[0.16em] text-[#16884e]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-900/10 bg-white/70 px-3 py-1.5 text-sm text-neutral-700"
                  >
                    {"icon" in skill && typeof skill.icon === "string" ? (
                      <img
                        src={skill.icon}
                        alt=""
                        className={`h-4 w-4 object-contain ${
                          ["GitHub", "Next.js", "Express.js", "Vercel"].includes(skill.name)
                            ? ""
                            : ""
                        }`}
                      />
                    ) : null}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
