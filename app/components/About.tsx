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
    <section id="about" ref={ref} className="w-full py-12 md:py-16">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group flex justify-center"
        >
          <div className="absolute -inset-4 border border-purple-500/20 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500" />

          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
            {aboutData.photoUrl ? (
              <img
                src={aboutData.photoUrl}
                alt="profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-purple-400/30">
                <div className="text-7xl mb-4">👤</div>
                <p className="text-[10px] tracking-[0.5em] uppercase font-light">
                  Identity
                </p>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <h2
              className="text-white leading-none"
              style={{
                fontFamily: "'Segoe Script', cursive",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                background: "linear-gradient(to right, #ffffff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: "-100px",
              }}
            >
              About Me
            </h2>
          </div>

          <div className="space-y-4">
            {aboutData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-white/70 leading-relaxed text-[clamp(1rem,1.1vw,1.1rem)] font-light tracking-wide"
              >
                {p}
              </p>
            ))}
          </div>
          <motion.div
            className="inline-flex items-center gap-2 w-fit mt-[20px]"
            style={{
              padding: "12px 20px",
              marginTop: "15px",
              borderRadius: "16px",
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              transition: "all 0.3s ease",
            }}
          >
            <div className="p-2 rounded-lg">
              <MapPin size={20} className="text-white/80" />
            </div>
            <span className="text-white/80 font-medium text-sm tracking-wide">
              {aboutData.location}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
