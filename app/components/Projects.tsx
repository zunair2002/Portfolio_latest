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
    tags: ["React", "TypeScript", "MongoDB", "Express", "Socket.IO","Leftlet","Cloudinary","NextAuth"],
    githubUrl: "https://github.com/zunair2002/SabziMart",
    demoUrl: "/demoprojects/1",
  },
  {
    id: 2,
    title: "ChatGO",
    description:
"A real-time chat application with Socket.io enables instant messaging through a live connection between users and the server. It uses secure authentication to protect user data and ensure only verified access. The system is responsive and scalable, delivering smooth performance across all devices.",
    tags: ["React", "Socket.io", "Express", "JWT", "MongoDB"],
    githubUrl: "https://github.com/zunair2002/ChatGO",
    demoUrl: "/demoprojects/2",
  },
  {
    id: 3,
    title: "WalletWave",
    description:
"A modern crypto-wallet interface that displays live cryptocurrency data and key information for popular coins in real time. It includes an interactive Bitcoin chart that helps users track market trends and price movements. The system provides a clean and responsive design for smooth user experience across devices.",
    tags: ["React", "CoinGecko API", "Chart.js", "Tailwind"],
    githubUrl: "https://github.com/zunair2002/WalletWave",
    demoUrl: "/demoprojects/3",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "An expense tracker logs all your income and spending using simple charts to show exactly where your money goes. This helps you easily understand your financial habits and make smarter plans for your budget.",
    tags: ["React", "LocalStorage", "MongoDB", "Express", "Recharts", "Tailwind"],
    githubUrl: "https://github.com/zunair2002/ExpenseApp-MERN",
    demoUrl: "/demoprojects/4",
  },
  // https://github.com/zunair2002/phishing-ML
  {
    id: 5,
    title: "Email Checker",
    description:`AI-integrated checkers evaluate message tone and intent to classify them as legitimate or suspicious. The system provides clear reasoning for its decision, flagging suspicious patterns or confirming legitimate professional language to ensure your inbox remains secure and transparent.`,
    tags: ["React", "Tailwind","AI", "Python", "Machine Learning","grokAI-SDK","Rest API"],
    githubUrl: "https://github.com/zunair2002/phishing-ML",
    demoUrl: "/demoprojects/5",
  },
  {
    id: 6,
    title: "RAG System",
    description:
      "AI Chatbot (RAG-Based) Developed an AI chatbot using Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses. Used LangChain, LangGraph, and a vector database to improve information retrieval and enhance the overall user experience.",
    tags: ["React","TailwindCSS", "Express", "Embedding Model","VectorDB","GoogleAI-SDK"],
    githubUrl: "https://github.com/zunair2002/RAG-application",
    demoUrl: "/demoprojects/6",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10px" });

  return (
   <section id="projects" ref={ref} className="w-full py-8 md:py-16">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    style={{ textAlign: "center", marginBottom: 60 }}
  >
    <h2
      className="text-3xl md:text-6xl font-black"
      style={{
        fontFamily: "var(--font-michroma)",
        color: "#b18cf5",
      }}
    >
      My Projects
    </h2>
  </motion.div>

<div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">    {demoprojects.map((project, i) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: i * 0.12 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        style={{
          border: "1px solid rgba(255, 255, 255, 0.56)",
          borderRadius: 14,
          padding: "18px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          cursor: "default",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          margin:"5px"
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-michroma)",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              fontWeight: 700,
              color: "#e2d9f3",
              marginBottom: 10,
            }}
          >
            {project.title}
          </h3>

          <p
            className="leading-relaxed whitespace-pre-line"
            style={{
              fontSize: "clamp(0.8rem, 1.2vw, 0.93rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-inter)",
            }}
          >
            {project.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: "auto",
          }}
        >
          {project.tags.map((tag, j) => (
            <span
              key={j}
              style={{
                padding: "3px 10px",
                border: "1px solid #48474a",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: 4,
                fontSize: 11,
                fontFamily: "var(--font-inter)",
                color: "rgb(255, 255, 255)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              padding: "8px 0",
              background: "rgba(255, 255, 255, 0.12)",
              borderRadius: 8,
              color: "#ffffff",
              fontSize: 12,
              textDecoration: "none",
              fontWeight: 500,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <Box size={15} /> Code
          </a>

          <Link
            href={`/demoprojects/${project.id}`}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              padding: "8px 0",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 8,
              color: "#000000",
              fontSize: 12,
              textDecoration: "none",
              fontWeight: 500,
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
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