"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReflectBackground from "../demoprojects/wave";

export default function CertificationPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const certificates = [
    {
      title: "Artificial Intelligence",
      issuer: "Coursera",
      description:
        "Advanced study of modern frontend technologies, responsive layouts, accessibility, and UI performance optimization.",
      link: "/CertificationPics/AI certificate.png",
    },
    {
      title: "Full-Stack Development",
      issuer: "Simplilearn",
      description:
        "Deep dive into React hooks, Redux state management, component architecture, and scalable frontend systems.",
      link: "/CertificationPics/MERN.png",
    },
    {
      title: "UI/UX Design",
      issuer: "Udemy",
      description:
        "User experience research, wireframing, prototyping, and designing user-centered interfaces using Figma.",
      link: "/CertificationPics/Figmaa.png",
    },
    {
      title: "Alzheimer’s Pakistan",
      issuer: "Alzheimer’s",
      description:
        "Advanced design systems, usability testing, and creating production-ready UI/UX workflows.",
      link: "/CertificationPics/WhatsApp Image 2026-04-23 at 10.16.18 AM.jpeg",
    },
  ];

  return (
    <>
      <div className="fixed inset-0 -z-10" />

      {mounted && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ReflectBackground />
        </div>
      )}

      <main
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 16px",
        }}
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-wide text-center"
          style={{
            fontFamily: "var(--font-michroma)",
            color: "#b18cf5",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          My Certificates
        </motion.h1>

        <div style={{ width: "100%", maxWidth: "1000px" }}>
          {/* BACK BUTTON */}
          <button
            onClick={() => router.back()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              marginBottom: 20,
              fontFamily: "var(--font-inter)",
            }}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>

          {/* GRID */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
              paddingBottom: "40px",
            }}
          >
            {certificates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "18px",
                  padding: "16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    background: "rgba(124,58,237,0.15)",
                    borderRadius: "50%",
                    filter: "blur(50px)",
                  }}
                />

                {/* TITLE (TOP) */}
                <h3
                  style={{
                    fontFamily: "var(--font-michroma)",
                    fontSize: "1rem",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>

                {/* IMAGE */}
               <img
  src={item.link}
  alt={item.title}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "fill",   
    borderRadius: "12px",
    marginBottom: "12px",
    border: "1px solid rgba(255,255,255,0.12)",
  }}
/>

                {/* DESCRIPTION */}
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.5,
                    marginBottom: "14px",
                  }}
                >
                  {item.description}
                </p>

                {/* FOOTER */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "auto",
                  }}
                >
                  {/* issuer */}
                  <div
                    style={{
                      flex: 1.2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      padding: "8px",
                      borderRadius: "10px",
                      background: "white",
                      fontSize: "11px",
                      color: "black",
                    }}
                  >
                    <ShieldCheck size={12} />
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}