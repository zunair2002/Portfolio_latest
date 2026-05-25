"use client";

import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
  <footer className="w-full py-5 font-sans border-t border-white/10">
  <div className="w-full flex flex-col gap-5" style={{marginTop: '15px'}}>

    <div className="flex flex-row items-center justify-between w-full">
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center gap-2"
      >
        <span
          className="text-white/80 text-lg font-semibold"
          style={{ fontFamily: "var(--font-windsong)",paddingLeft:'3px'}}
        >
          Zunair Shahid
        </span>
      </motion.div>

   <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.2 }}
  className="flex items-center gap-2"
>
  {[
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      href: "#",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      href: "#",
    },
    {
      icon: "https://cdn.simpleicons.org/x",
      href: "#",
    },
    {
      icon: "https://cdn.simpleicons.org/gmail",
      href: "#",
    },
  ].map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      whileHover={{ y: -2, scale: 1.1 }}
      className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
    >
      <img src={item.icon} alt="" className="w-3.5 h-3.5" />
    </motion.a>
  ))}
</motion.div>
    </div>

   <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: false, amount: 0.2 }}
  className="w-full text-left text-[10px] md:text-[11px] font-semibold text-white/40"
  style={{ fontFamily: "var(--font-iner)" }}
>
  <p className="flex flex-wrap items-center gap-2">
    <span>Made with</span>
    <span className="text-purple-400 animate-pulse">♥</span>
    <span>by</span>
    <span className="text-white/70 font-medium">Zunair Shahid</span>
  </p>
</motion.div>

  </div>
</footer>
  );
}

export default Footer;