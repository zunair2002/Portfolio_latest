"use client";
import { motion } from "framer-motion";
import { heroData } from "./data";

export default function Hero() {
  return (
   <section className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center py-16" style={{marginTop: "20px"}}>

<motion.div
  initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false, amount: 0.2 }}
>
  <motion.h1
    initial={{ width: 0, rotate: -6, opacity: 0 }}
    whileInView={{ width: "100%", rotate: -4, opacity: 1 }}
    transition={{ duration: 3.2, ease: "easeInOut" }}
    viewport={{ once: false, amount: 0.2 }}
    className="overflow-hidden whitespace-nowrap leading-[1.1] mb-4"
    style={{
      fontFamily: "'Segoe Script', cursive",
      fontSize: "clamp(3.5rem, 9vw, 8rem)",
      fontWeight: 800,
      background: "linear-gradient(to right, #ffffff, #a855f7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      textShadow: "0 0 18px rgba(255,255,255,0.15)",
      transformOrigin: "left center",
    }}
  >
    {heroData.name}
  </motion.h1>
</motion.div>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="text-[clamp(0.9rem,2vw,1.1rem)] tracking-[0.3em] text-[#c084fc] mb-6 uppercase font-mono"
  >
    {heroData.title}
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.7 }}
    className="max-w-[540px] mx-auto text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-white/70 mb-10"
  >
    {heroData.description}
  </motion.p>

<motion.a
  href={heroData.resumeUrl}
  download="Zunair-Shahid-Resume.pdf"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.97 }}
  className="group relative inline-flex w-fit items-center justify-center overflow-hidden veiw_btn mt-5 rounded-xl bg-white text-black text-base font-bold shadow-2xl transition-all hover:bg-[#e2d9f3]"
>
  <span className="relative z-10">Download Resume</span>

  <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
</motion.a>
</section>
  );
}
 