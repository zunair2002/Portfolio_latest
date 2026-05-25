"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CertificationPage() {
  const router = useRouter();

  const certificates = [
    {
      title: "Frontend Development",
      issuer: "Coursera",
      description:
        "Advanced study of modern frontend technologies. Focused on creating responsive layouts, optimized user interfaces, and implementing industry-standard web accessibility.",
      link: "#",
    },
    {
      title: "React Mastery",
      issuer: "Udemy",
      description:
        "In-depth specialization in React hooks, state management with Redux, and performance optimization. Built complex applications with real-time data integration.",
      link: "#",
    },
    {
      title: "UI/UX Design",
      issuer: "Google",
      description:
        "Professional training in user experience research, wireframing, and high-fidelity prototyping using Figma. Emphasis on user-centric design and usability testing.",
      link: "#",
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #240051 0%, #290046b3 25%, #220443 50%, #1c0648 75%, #300031a2 100%)",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "var(--font-michroma)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          paddingTop: "40px",
          marginBottom: "30px",
          textAlign: "center",
          background: "linear-gradient(to right, #ffffff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Certificates
      </motion.h1>

      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgb(255, 255, 255)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            marginBottom: 24,
            padding: 0,
            fontFamily: "var(--font-inter)",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          <ArrowLeft size={16} style={{marginBottom:'2px'}} />
          Back to Projects
        </button>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            paddingBottom: "40px",
          }}
        >
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "20px",
                padding: "24px",
                minHeight: "340px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
              whileHover={{
                borderColor: "rgba(168,85,247,0.4)",
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  background: "rgba(124,58,237,0.12)",
                  borderRadius: "50%",
                  filter: "blur(50px)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ flexGrow: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-michroma)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "rgb(255, 255, 255)",
                    lineHeight: 1.5,
                    fontSize: "14px",
                    marginBottom: "20px",
                    fontWeight: 300,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                <div
                  style={{
                    flex: "1.2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px 6px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  <ShieldCheck
                    size={14}
                    style={{ color: "#b18cf5", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.issuer}
                  </span>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px 6px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #7c3aed, #a855f7)",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.85";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <ExternalLink size={14} />
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}