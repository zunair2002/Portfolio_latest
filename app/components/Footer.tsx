"use client";

import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // pb-12 se bottom par ek professional gap aa jayega
    <footer className="w-full pt-12 pb-10 font-sans border-t border-white/10" style={{marginBottom: "60px"}}>
      <div className="w-full flex flex-col gap-10">

        {/* BACK TO TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-end"
        >
          
        </motion.div>

        {/* LET'S CONNECT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-start"
        >
          <motion.h1
            initial={{ width: 0, rotate: -6, opacity: 0 }}
            whileInView={{ width: "100%", rotate: -4, opacity: 1 }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="overflow-hidden whitespace-nowrap leading-none"
            style={{
              fontFamily: "'Segoe Script', cursive",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 700,
              color: "#ffffff",
              width: "fit-content",
              textShadow: "0 0 18px rgba(255,255,255,0.15)",
              transformOrigin: "left center",
              marginTop: "20px",
            }}
          >
            Let&apos;s Connect
          </motion.h1>
        </motion.div>

        {/* SOCIAL + CREDITS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mt-6"
        >
          <div className="flex flex-wrap gap-4">
            {["Github", "Linkedin", "Twitter"].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-8 py-3 rounded-full text-[10px] btnn font-semibold uppercase tracking-[0.25em] border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
              >
                {link}
              </motion.a>
            ))}
          </div>
          <div className="text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold text-white/40 text-left md:text-right">
            <p className="mt-1">
              Development by{" "}
              <span className="text-white underline-offset-4">Zunair Shahid</span>
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;