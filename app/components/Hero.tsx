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
  className="w-full flex justify-center px-4"
  style={{
    paddingBottom: "70px",
    maxWidth: "1400px",
    margin: "0 auto",
  }}
>
  <motion.h1
    initial={{ opacity: 0, y: -20, rotate: -6 }}
    whileInView={{ opacity: 1, y: 0, rotate: -4 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    viewport={{ once: false, amount: 0.2 }}
    className="mb-4 leading-[1.1] text-center"
    style={{
      fontSize: "clamp(2.2rem, 8vw, 7.5rem)",
      fontFamily: "var(--font-windsong)",
      textShadow: "0 0 18px rgba(255,255,255,0.15)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "white",
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto",
      letterSpacing: "1px",
    }}
  >
    {heroData.name}
  </motion.h1>
</motion.div>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="text-[22px] tracking-[0.3em] text-white mb-6 uppercase font-bold" style={{marginBottom:'12px', fontFamily:"var(--font-inter)",color: '#b18cf5',}}
  >
    {heroData.title}
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.7 }}
className="max-w-[500px] md:max-w-[700px] mx-auto text-[16px] leading-relaxed whitespace-pre-line text-justify-center text-white/80 mb-10"
style={{fontFamily: "var(--font-inter)"}}>
    {heroData.description}
  </motion.p>

  <motion.a
  href={heroData.resumeUrl}
    download="Zunair-Shahid-Resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center overflow-hidden rounded-xl bg-white text-black px-5 md:px-8 py-2 md:py-2.5 text-xs md:text-sm font-bold shadow-lg transition-all duration-300 border border-white/20 cursor-pointer hover:bg-white hover:text-black" 
        style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 8px",
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 8,
                    color: "#000000",
                    fontSize: 13,
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "opacity 0.2s ease",
                    marginTop:'45px',
                  }}
      >
   
    <span className="relative z-10">Download Resume</span>
    <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
  </motion.a>

</section>
  );
}
