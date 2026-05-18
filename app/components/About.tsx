"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "./data";
import { MapPin } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
  id="about"
  ref={ref}
  className="w-full py-12 md:py-20 px-4"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7 }}
      className="flex justify-center"
    >
      <div className="relative group w-full max-w-[320px] md:max-w-[420px] aspect-[4/5]">

        {/* BORDER EFFECT */}
        <div className="absolute -inset-3 rounded-2xl border border-purple-500/20 rotate-2 group-hover:rotate-0 transition-transform duration-500" />

        {/* IMAGE BOX */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/5">

          {aboutData.photoUrl ? (
            <img
              src={aboutData.photoUrl}
              alt="profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/30">
              <span className="text-6xl">👤</span>
            </div>
          )}

        </div>
      </div>
    </motion.div>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="flex flex-col gap-5 text-center md:text-left"
    >
      <h2
        className="text-3xl md:text-5xl font-bold"
        style={{
          fontFamily: "'Segoe Script', cursive",
          background: "linear-gradient(to right, #fff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        About Me
      </h2>

      <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
        {aboutData.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
<div className="flex justify-center md:justify-start">
  <div className="inline-flex items-center gap-2 border btnn border-white/20 text-white/80 px-3 py-1.5 rounded-full w-fit">
    <MapPin size={18} />
    <span className="text-sm">{aboutData.location}</span>
  </div>
</div>
    </motion.div>
  </div>
</section>
  );
}
