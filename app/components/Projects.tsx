"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Box, ExternalLink } from "lucide-react";
import Link from "next/link";

const demoprojects = [
  {
    id: 1,
    title: "Ruler.ui",
    description:
      "An open-source React and TypeScript component library with 25+ reusable UI components, dark and light themes, and optimized ESM/CJS builds. Helps developers ship consistent, accessible interfaces faster.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "CVA", "tsup", "Design System", "Component Library", "ESM/CJS"],
    githubUrl: "YOUR_RULER_UI_GITHUB_URL",
  },
  {
    id: 2,
    title: "OrchestrAI",
    description:
      "A multi-agent AI platform using LangGraph, Gemini, and Grok to route tasks intelligently, with a RAG pipeline and Redis caching for fast answers. Lets teams automate complex workflows with context-aware AI.",
    tags: ["React", "Redux", "Node.js", "Express", "LangChain", "LangGraph", "RAG", "Embeddings", "MongoDB", "Redis", "Gemini", "Grok", "Multi-Agent Systems"],
    githubUrl: "YOUR_ORCHESTRAI_GITHUB_URL",
  },
  {
    id: 3,
    title: "RAG System",
    description:
      "An AI chatbot that gives accurate, context-aware answers using RAG, semantic search, and a Pinecone vector database, built with LangChain and FastAPI. Improves answer relevance and reduces made-up responses.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "FastAPI", "Python", "LangChain", "LangGraph", "Pinecone", "Vector Database", "Semantic Search", "RAG", "LLM"],
    githubUrl: "https://github.com/zunair2002/RAG-application",
  },
  {
    id: 4,
    title: "SabziMart",
    description:
      "A full-stack grocery delivery platform for customers, riders, and admins, with real-time order tracking, role-based access, and secure login. Connects the whole delivery process in one reliable system.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "Leaflet", "Cloudinary", "NextAuth", "RBAC", "Full-Stack", "Real-Time"],
    githubUrl: "https://github.com/zunair2002/SabziMart",
  },
  {
    id: 5,
    title: "WalletWave",
    description:
      "A real-time cryptocurrency dashboard that shows live market data and interactive Bitcoin price charts using the CoinGecko API and Chart.js. Makes market trends easy to follow on any device.",
    tags: ["React", "JavaScript", "CoinGecko API", "REST API", "Chart.js", "Tailwind CSS", "Data Visualization", "Responsive Design"],
    githubUrl: "https://github.com/zunair2002/WalletWave",
  },
  {
    id: 6,
    title: "ChatGO",
    description:
      "A real-time chat application using Socket.IO and WebSockets for instant messaging, with JWT authentication and MongoDB message storage. Delivers a fast, secure, and responsive conversation experience.",
    tags: ["React", "Node.js", "Express", "Socket.IO", "WebSockets", "JWT", "Authentication", "MongoDB", "Real-Time", "REST API"],
    githubUrl: "https://github.com/zunair2002/ChatGO",
  },
  {
    id: 7,
    title: "Email Checker",
    description:
      "An AI-powered phishing detector that uses machine learning and NLP to analyze emails and explain why a message looks safe or suspicious. Helps users spot threats and make safer decisions.",
    tags: ["React", "Tailwind CSS", "Python", "Machine Learning", "NLP", "Grok AI SDK", "REST API", "Phishing Detection", "Cybersecurity", "Explainable AI"],
    githubUrl: "https://github.com/zunair2002/phishing-ML",
  },
  {
    id: 8,
    title: "Expense Tracker",
    description:
      "A MERN stack finance dashboard that tracks income and expenses and shows spending habits through interactive Recharts visualizations. Helps users manage budgets and build smarter money habits.",
    tags: ["React", "MongoDB", "Express", "Node.js", "MERN Stack", "Recharts", "Tailwind CSS", "LocalStorage", "REST API", "Data Visualization", "CRUD"],
    githubUrl: "https://github.com/zunair2002/ExpenseApp-MERN",
  },
  {
  id: 9,
  title: "AI Voice Assistant",
  description:
    "A Python desktop voice assistant that recognizes spoken commands and responds with text-to-speech, enabling hands-free web searches, music playback, time queries, and everyday task automation.",
  tags: ["Python", "Tkinter", "Speech Recognition", "Google Speech API", "pyttsx3", "Text-to-Speech", "PyAudio", "Desktop App", "Voice Commands"],
  githubUrl: "YOUR_VOICE_ASSISTANT_GITHUB_URL",
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
          margin:"5px",
          minHeight: "430px",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-michroma)",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              fontWeight: 700,
              color: "#e2d9f3",
              marginTop: 0,
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
              // Keep every card's description and tag sections visually aligned.
              height: "10.2em",
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 6,
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
            minHeight: "116px",
            alignContent: "flex-start",
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

        <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
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
