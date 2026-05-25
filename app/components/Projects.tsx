"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Box, ExternalLink } from "lucide-react";
import Link from "next/link";

const demoprojects = [
  {
    id: 1,
    title: "SabziMart",
    description:
      "SabziMart is a grocery delivery platform built for customers riders and admins on a secure and unified system. It provides a reliable end to end workflow from order to delivery. The platform is designed for scalability performance and a smooth user experience.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  },
  {
    id: 2,
    title: "ChatGO",
    description:
      "A real-time chat application with Socket.io messaging and secure authentication, featuring a responsive interface and a scalable backend for smooth, reliable communication.",
    tags: ["React", "Socket.io", "Express", "JWT", "MongoDB"],
  },
  {
    id: 3,
    title: "WalletWave",
    description:
      "A modern crypto-wallet interface that shows live cryptocurrency data and key info for popular coins. It also features an interactive Bitcoin chart to track market trends in real time.",
    tags: ["React", "CoinGecko API", "Chart.js", "Tailwind"],
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "An expense tracker logs all your income and spending using simple charts to show exactly where your money goes. This helps you easily understand your financial habits and make smarter plans for your budget.",
    tags: ["React", "LocalStorage", "Recharts", "Tailwind"],
  },
];

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
        <h2
          style={{
            fontFamily: "var(--font-michroma)", 
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            background: "linear-gradient(to right, #ffffff, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Projects
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoprojects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.56)",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              cursor: "default",
            }}
          >
            <div>
              <h3
                style={{
                                      fontFamily: "var(--font-michroma)",

                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  fontWeight: 700,
                  color: "#e2d9f3",
                  marginBottom: 12,
                }}
              >
                {project.title}
              </h3>
              <p
                className="leading-relaxed whitespace-pre-line"
                style={{
                  fontSize: "clamp(0.85rem, 1.2vw, 0.93rem)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.72)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {project.description}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{
                    padding: "4px 12px",
                    border: "1px solid rgba(168,85,247,0.4)",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 4,
                    fontSize: 12,
                    fontFamily: "var(--font-inter)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <Link
                href={`/codeprojects/${project.id}`}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  padding: "10px 0",
                  background: "rgba(255, 255, 255, 0.12)",
                  borderRadius: 8,
                  color: "#ffffff",
                  fontSize: 13,
                  textDecoration: "none",
                  fontWeight: 500,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)"; }}
              >
                <Box size={15} /> Code
              </Link>
              <Link
                href={`/demoprojects/${project.id}`}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  padding: "10px 0",
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 8,
                  color: "#000000",
                  fontSize: 13,
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                <ExternalLink size={15} /> Demo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}