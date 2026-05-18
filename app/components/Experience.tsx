"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { experienceData } from "./data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
   <section id="experience" ref={ref} className="w-full py-12 md:py-16">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    style={{ textAlign: "center", marginBottom: 80 }}
  >
    <h2
      style={{ 
          fontFamily: "'Segoe Script', cursive", 
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 800,
          background: "linear-gradient(to right, #ffffff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
      Experience
    </h2>
  </motion.div>

  <div className="max-w-6xl mx-auto" style={{ position: "relative" }}>
    <div
      style={{
        position: "absolute",
        left: "39px",
        top: "48px",
        bottom: "48px",
        width: "1px",
        background:
          "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 8%, rgba(255,255,255,0.25) 92%, transparent)",
        zIndex: 0,
      }}
    />

    {experienceData.map((exp, i) => (
      <div
        key={i}
        style={{
          position: "relative",
          paddingLeft: "100px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "30px",
            top: "48px",
            width: "20px",
            height: "20px",
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
            borderRadius: "24px",
            padding: "40px",
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
              background:
                "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: -1,
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
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
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {exp.period}
            </span>
          </div>

          <p
            style={{
              color: "#b18cf5",
              fontSize: "1.2rem",
              marginBottom: "32px",
              fontWeight: "500",
            }}
          >
            {exp.company}
          </p>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "5.5px",
                top: "10px",
                bottom: "31px",
                width: "1px",
                background: "rgba(177, 140, 245, 0.4)",
                zIndex: 1,
              }}
            />

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                marginBottom: "40px",
              }}
            >
              {exp.points.map((pt, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "18px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      marginTop: "9px",
                      flexShrink: 0,
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#b18cf5",
                      border: "2px solid #000",
                      boxShadow: "0 0 0 1px #b18cf5",
                      zIndex: 2,
                    }}
                  />

                  <span
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {exp.tags.map((tag, j) => (
              <span
                key={j}
                style={{
                  padding: "8px 20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
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