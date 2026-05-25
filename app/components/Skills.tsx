"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { skillsRow1, skillsRow2, skillsRow3, skillsRow4 } from "./data";

function SkillItem({ name, icon }: { name: string; icon?: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "10px 20px", marginRight: 40,
      whiteSpace: "nowrap"
    }}>
      {icon ? (
        <img src={icon} alt={name} style={{ width: 24, height: 24, objectFit: "contain" }} onError={e => { (e.target as HTMLImageElement).style.display = "none" }} />
      ) : (
        <div style={{ width: 22, height: 22, borderRadius: 4, background: "rgba(168,85,247,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>⚡</div>
      )}
      <span style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: { name: string; icon?: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", width: "100%", marginBottom: 12 }}>
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {doubled.map((skill, i) => (
          <SkillItem key={i} name={skill.name} icon={(skill as { icon?: string }).icon} />
        ))}
      </div>
    </div>
  );
}
export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="w-full py-12 md:py-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: 48,
          fontFamily: "var(--font-michroma)", 
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 800,
          background: "linear-gradient(to right, #ffffff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Skills 
      </motion.h2>

      <div className="flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full py-12 rounded-3xl backdrop-blur-sm"
        >
          <MarqueeRow items={skillsRow1} />
          <MarqueeRow items={skillsRow2} reverse />
          <MarqueeRow items={skillsRow3} />
          <MarqueeRow items={skillsRow4} reverse />
        </motion.div>
      </div>
    </section>
  );
}