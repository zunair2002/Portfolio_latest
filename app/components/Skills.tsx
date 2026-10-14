"use client";
import { motion, type Variants } from "framer-motion";
import { Code2, Lightbulb, Layers, Wrench } from "lucide-react";
import { skillsRow1, skillsRow2, skillsRow3, skillsRow4 } from "./data";

type Skill = { name: string; icon?: string };

const LINE = "rgba(16,16,81,0.22)";

// centre vertical line: upper half (top-right card) and lower half (bottom-right card)
const vFadeTop = `linear-gradient(to bottom, transparent, ${LINE} 30%, ${LINE})`;
const vFadeBottom = `linear-gradient(to bottom, ${LINE}, ${LINE} 70%, transparent)`;

// centre horizontal line: left half (bottom-left card) and right half (bottom-right card)
const hFadeLeft = `linear-gradient(to right, transparent, ${LINE} 30%, ${LINE})`;
const hFadeRight = `linear-gradient(to right, ${LINE}, ${LINE} 70%, transparent)`;

const groups: {
  title: string;
  subtitle: string;
  items: Skill[];
  Icon: typeof Code2;
  vLine?: string;
  hLine?: string;
}[] = [
  {
    title: "Languages & Databases",
    subtitle: "The foundation I build everything on",
    items: skillsRow1,
    Icon: Code2,
  },
  {
    title: "Frontend & Backend",
    subtitle: "Interfaces, APIs and services",
    items: skillsRow2,
    Icon: Layers,
    vLine: vFadeTop,
  },
  {
    title: "Tools & Platforms",
    subtitle: "Workflow, delivery and deployment",
    items: skillsRow3,
    Icon: Wrench,
    hLine: hFadeLeft,
  },
  {
    title: "Practices",
    subtitle: "How I keep quality high",
    items: skillsRow4,
    Icon: Lightbulb,
    vLine: vFadeBottom,
    hLine: hFadeRight,
  },
];

const total = groups.reduce((sum, g) => sum + g.items.length, 0);

const chipsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <p className="section-kicker">03 — Skills</p>
            <h2 className="section-title">
              My <span className="serif-accent">toolkit</span>
            </h2>
            <p className="section-copy">
              The tools I use to design, build, and ship reliable web products and AI features.
            </p>
          </div>

          <div className="flex shrink-0 items-center">
  <div className="text-right">
  <p className="text-md font-semibold tracking-tight text-[#32de84]">
    {total}
    <span className="ml-1.5 text-xs font-medium text-[#101051]/55">
      Technologies
    </span>
  </p>
</div>
</div>
        </motion.div>

        {/* Plus-crossing grid */}
        <div className="mt-12 grid md:grid-cols-2">
          {groups.map(({ title, subtitle, items, Icon, vLine, hLine }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative px-6 py-8 md:px-9 md:py-10"
            >
              {/* centre vertical line (right column cards only, desktop) */}
              {vLine && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-px md:block"
                  style={{ background: vLine }}
                />
              )}

              {/* centre horizontal line (bottom row only, desktop) */}
              {hLine && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 hidden h-px md:block"
                  style={{ background: hLine }}
                />
              )}

              {/* header */}
              <div className="relative mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-transparent text-[#32de84] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
  <Icon size={20} />
</span>
                  <div className="leading-tight">
                    <h3 className="text-[16px] font-semibold tracking-tight text-[#101051]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[13px] text-neutral-500">{subtitle}</p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full border border-[#101051]/10 bg-[#101051]/[0.03] px-2.5 py-1 font-mono text-[11px] tracking-wider text-[#16884e]">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              {/* skills */}
              <motion.div
                variants={chipsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="relative flex flex-wrap gap-2.5"
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={chip}
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#101051]/10 bg-white py-1.5 pl-1.5 pr-3.5 text-[13.5px] font-medium text-[#101051]/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#32de84] hover:shadow-[0_10px_24px_-12px_rgba(22,136,78,0.55)]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-l">
                      {skill.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.icon}
                          alt=""
                          width={16}
                          height={16}
                          className="h-4 w-4 object-contain"
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#32de84]" />
                      )}
                    </span>
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}