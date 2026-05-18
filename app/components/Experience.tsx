"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { experienceData } from "./data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
<section id="experience" ref={ref} className="w-full py-6 md:py-10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    style={{ textAlign: "center", marginBottom: "clamp(20px, 4vw, 50px)" }}
  >
    <h2
      style={{ 
        fontFamily: "'Segoe Script', cursive", 
        fontSize: "clamp(2rem, 5vw, 4rem)",
        fontWeight: 800,
        background: "linear-gradient(to right, #ffffff, #a855f7)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Experience
    </h2>
  </motion.div>
  <div className="w-full relative" style={{ paddingRight: "5px" }}>
    <div
      style={{
        position: "absolute",
        left: "19px",
        top: "48px",
        bottom: "48px",
        width: "1px",
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 8%, rgba(255,255,255,0.25) 92%, transparent)",
        zIndex: 0,
      }}
    />

    {experienceData.map((exp, i) => (
      <div
        key={i}
        style={{
          position: "relative",
          paddingLeft: "clamp(42px, 5vw, 58px)",
          marginBottom: "clamp(12px, 2vw, 24px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "10px",
            top: "30px",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "#b18cf5",
            border: "4px solid #000",
            boxShadow: "0 0 0 2px #b18cf5",
            zIndex: 2,
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "18px",
            padding: "clamp(10px, 2.5vw, 28px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: -1,
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "4px",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
                fontWeight: "700",
                color: "#ffffff",
                letterSpacing: "-0.01em",
                fontFamily: "'Courier New', monospace",
              }}
            >
              {exp.role}
            </h3>

            <span
              style={{
                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                color: "rgba(255,255,255,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              {exp.period}
            </span>
          </div>

          <p
            style={{
              color: "#b18cf5",
              fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
              marginBottom: "clamp(10px, 2vw, 20px)",
              fontWeight: "500",
            }}
          >
            {exp.company}
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "clamp(12px, 2vw, 24px)" }}>
            {exp.points.map((pt, j) => (
              <li key={j} style={{ display: "flex", gap: "10px", marginBottom: "clamp(6px, 1vw, 12px)", alignItems: "flex-start" }}>
                <div
                  style={{
                    marginTop: "6px",
                    flexShrink: 0,
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#b18cf5",
                    border: "2px solid #000",
                    boxShadow: "0 0 0 1px #b18cf5",
                  }}
                />
                <span style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
                  {pt}
                </span>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(5px, 1vw, 10px)" }}>
            {exp.tags.map((tag, j) => (
              <span
                key={j}
                style={{
                  padding: "3px 9px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
                  fontFamily: "monospace",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</section>
  );
}