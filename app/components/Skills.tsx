"use client";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Layers, Wrench } from "lucide-react";
import { skillsRow1, skillsRow2, skillsRow3, skillsRow4 } from "./data";

type Skill = { name: string; icon?: string };

const groups: { title: string; items: Skill[]; Icon: typeof Code2 }[] = [
  { title: "Languages & Databases", items: skillsRow1, Icon: Code2 },
  { title: "Frontend & Backend", items: skillsRow2, Icon: Layers },
  { title: "Tools & Platforms", items: skillsRow3, Icon: Wrench },
  { title: "Practices", items: skillsRow4, Icon: Lightbulb },
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
          <p className="section-kicker">03 — Skills</p>
          <h2 className="section-title">
            My <span className="serif-accent">toolkit</span>
          </h2>
          <p className="section-copy">
            The tools I use to design, build, and ship reliable web products and AI features.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map(({ title, items, Icon }, i) => {
            const dark = i === groups.length - 1;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden p-6 md:p-7 ${
                  dark
                    ? "rounded-[20px] border border-[#101051] bg-[#101051] text-white shadow-[0_24px_48px_-24px_rgba(16,16,81,0.7)]"
                    : "surface-card"
                }`}
              >
                {dark && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#32de84]/25 blur-3xl"
                  />
                )}

                <div className="relative mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        dark ? "bg-[#32de84] text-[#101051]" : "bg-[#101051] text-[#32de84]"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <h3 className={`text-[15px] font-semibold tracking-tight ${dark ? "text-white" : "text-[#101051]"}`}>
                      {title}
                    </h3>
                  </div>
                  <span className={`font-mono text-xs ${dark ? "text-white/50" : "text-[#101051]/40"}`}>
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                        dark
                          ? "border-white/15 bg-white/[0.06] text-white/90 hover:border-[#32de84]/70 hover:bg-white/10"
                          : "border-[#101051]/10 bg-white text-[#101051]/85 hover:border-[#32de84] hover:shadow-[0_8px_20px_-10px_rgba(22,136,78,0.6)]"
                      }`}
                    >
                      {skill.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={skill.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#32de84]" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
