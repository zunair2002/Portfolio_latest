"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { projectsData } from "./data";
import { Box, ExternalLink } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10px" });

  return (
    <section id="projects" ref={ref} className="w-full py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 60 }}
      >
        <h2 style={{
          fontFamily: "'Segoe Script', cursive", 
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 800,
          background: "linear-gradient(to right, #ffffff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>My Projects</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(168,85,247,0.08))",
              border: "1px solid rgba(168,85,247,0.25)",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex", flexDirection: "column", gap: 16,
              cursor: "default"
            }}
          >
            <div>
              <h3 style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                fontWeight: 700,
                color: "#e2d9f3",
                marginBottom: 12
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: "clamp(0.85rem, 1.2vw, 0.93rem)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.72)"
              }}>
                {project.description}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
              {project.tags.map((tag, j) => (
                <span key={j} style={{
                  padding: "4px 12px",
                  border: "1px solid rgba(168,85,247,0.4)",
                  borderRadius: 4,
                  fontSize: 12,
                  fontFamily: "'Courier New', monospace",
                  color: "rgba(255,255,255,0.65)"
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <a
                href={project.codeUrl}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  padding: "10px 0",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8, color: "#fff", fontSize: 13,
                  textDecoration: "none", fontWeight: 500,
                  transition: "background 0.2s"
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)" }}
              >
                <Box size={15} /> Code
              </a>
              <a
                href={project.demoUrl}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  padding: "10px 0",
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  borderRadius: 8, color: "#fff", fontSize: 13,
                  textDecoration: "none", fontWeight: 500,
                  transition: "opacity 0.2s"
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1" }}
              >
                <ExternalLink size={15} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}