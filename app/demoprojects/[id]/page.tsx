"use client";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import ReflectBackground from "../wave";

export const demoprojects = [
  {
    id: 1,
    title: "Ruler.ui",
    status: "Completed",
    duration: "3 months",
    overview:
      "Ruler.ui is an open-source React and TypeScript component library with 25+ reusable, fully typed UI components, built as a scalable design system. It uses Tailwind CSS and Class Variance Authority for consistent styling, and ships dark and light themes with tree-shakable ESM and CJS bundles. Developers get a clean, predictable API that speeds up modern frontend development.",
    features: [
      "25+ production-ready, fully typed React components with strict TypeScript definitions",
      "Variant-driven styling architecture powered by Class Variance Authority (CVA)",
      "Built-in dark and light theming with consistent Tailwind CSS design tokens",
      "Optimized tree-shakable ESM and CJS bundles generated with tsup",
      "Composable, reusable component API designed for fast integration into Next.js and React apps",
      "Open-source, developer-friendly architecture with a scalable design system foundation",
    ],
    techStack: [
      { name: "React", purpose: "Component architecture" },
      { name: "TypeScript", purpose: "Type-safe component APIs" },
      { name: "Next.js", purpose: "Documentation and live demo site" },
      { name: "Tailwind CSS", purpose: "Utility-first styling and theming" },
      { name: "CVA", purpose: "Variant-based component styling" },
      { name: "tsup", purpose: "ESM/CJS bundling and tree-shaking" },
    ],
    screenshots: ["/ruler/r1.png", "/ruler/r2.png"],
  },
  {
    id: 2,
    title: "OrchestrAI",
    status: "Completed",
    duration: "1 month",
    overview:
      "OrchestrAI is a multi-agent AI platform built on LangGraph, Google Gemini, and xAI Grok, with intelligent agent orchestration and dynamic task routing. A Retrieval-Augmented Generation (RAG) pipeline with vector embeddings and Redis caching delivers low-latency, context-aware answers through a scalable Node.js and Express backend.",
    features: [
      "Graph-based multi-agent orchestration with LangGraph for stateful, controllable workflows",
      "Dynamic task routing that sends each request to the best-suited agent and LLM",
      "Multi-model intelligence combining Google Gemini and xAI Grok",
      "RAG document pipeline with vector embeddings for grounded, context-aware responses",
      "Redis caching layer for low-latency responses and reduced redundant LLM calls",
      "Scalable Node.js and Express REST backend with MongoDB persistence and Redux-powered UI state",
    ],
    techStack: [
      { name: "React", purpose: "Interactive frontend UI" },
      { name: "Redux", purpose: "Global state management" },
      { name: "Node.js", purpose: "Backend runtime" },
      { name: "Express", purpose: "REST API framework" },
      { name: "LangChain", purpose: "LLM integration and tooling" },
      { name: "LangGraph", purpose: "Multi-agent orchestration" },
      { name: "Gemini / Grok", purpose: "Large language models" },
      { name: "Embeddings", purpose: "Semantic document representation" },
      { name: "MongoDB", purpose: "Persistent data storage" },
      { name: "Redis", purpose: "High-speed response caching" },
    ],
    screenshots: ["/orchestrai/o1.png", "/orchestrai/o2.png"],
  },
  {
    id: 3,
    title: "RAG System",
    status: "Completed",
    duration: "1 week",
    overview:
      "RAG System is an AI-powered conversational assistant that gives accurate, context-aware answers using Retrieval-Augmented Generation, semantic search, and vector similarity retrieval. Built with LangChain, LangGraph, and Pinecone, with a FastAPI and Express service layer, it improves response relevance and reduces hallucinations.",
    features: [
      "End-to-end RAG pipeline that retrieves relevant context before generating each answer",
      "Semantic search over document embeddings using vector similarity in Pinecone",
      "LangGraph-driven workflow for structured retrieval, reasoning, and response generation",
      "Grounded LLM responses that significantly reduce hallucinations and incorrect answers",
      "Hybrid service architecture with a FastAPI AI service and an Express API layer",
      "Responsive React and Tailwind CSS chat interface for document-based Q&A",
    ],
    techStack: [
      { name: "React", purpose: "Chat interface" },
      { name: "Tailwind CSS", purpose: "Responsive styling" },
      { name: "Node.js / Express", purpose: "API gateway layer" },
      { name: "FastAPI", purpose: "Python AI service" },
      { name: "LangChain", purpose: "LLM and retrieval tooling" },
      { name: "LangGraph", purpose: "Workflow orchestration" },
      { name: "Pinecone", purpose: "Vector database" },
      { name: "LLM", purpose: "Response generation" },
    ],
    screenshots: ["/Rag/RAGpic.png", "/Rag/RAGpic2.png"],
  },
  {
    id: 4,
    title: "SabziMart",
    status: "Working",
    duration: "2 months",
    overview:
      "SabziMart is a full-stack grocery delivery platform that unifies customers, riders, and administrators in one system. It provides end-to-end order management, real-time tracking with Socket.IO and Leaflet maps, role-based access control, secure NextAuth authentication, and cloud media handling through Cloudinary.",
    features: [
      "Role-based access control (RBAC) with dedicated Customer, Rider, and Admin dashboards",
      "Real-time order tracking and live status updates over Socket.IO WebSockets",
      "Interactive Leaflet maps for live rider location and delivery route visibility",
      "Secure NextAuth authentication and protected routes for every user type",
      "Complete order lifecycle management with history, invoices, and rider assignment",
      "Searchable product catalog with category filters and Cloudinary-optimized images",
    ],
    techStack: [
      { name: "React / Next.js", purpose: "Frontend and server-side rendering" },
      { name: "TypeScript", purpose: "End-to-end type safety" },
      { name: "Tailwind CSS", purpose: "Responsive styling" },
      { name: "Node.js / Express", purpose: "REST API backend" },
      { name: "MongoDB", purpose: "Database" },
      { name: "NextAuth", purpose: "Authentication and sessions" },
      { name: "Socket.IO", purpose: "Real-time bidirectional updates" },
      { name: "Leaflet", purpose: "Live map tracking" },
      { name: "Cloudinary", purpose: "Cloud image storage and delivery" },
    ],
    screenshots: [
      "/sabzimart/Screenshot 2026-04-23 102633.png",
      "/sabzimart/Screenshot 2026-04-23 102714.png",
      "/sabzimart/Screenshot 2026-04-23 103001.png",
      "/sabzimart/Screenshot 2026-04-23 102748.png",
      "/sabzimart/Screenshot 2026-04-23 102841.png",
      "/sabzimart/Screenshot 2026-04-23 103038.png",
    ],
  },
  {
    id: 5,
    title: "WalletWave",
    status: "Completed",
    duration: "1 week",
    overview:
      "WalletWave is a real-time cryptocurrency dashboard that streams live market data from the CoinGecko REST API. It visualizes Bitcoin price movements with interactive Chart.js charts and presents market trends in a clean, responsive Tailwind CSS interface that works across devices.",
    features: [
      "Live price feeds for the top 20 cryptocurrencies via the CoinGecko REST API",
      "Interactive Chart.js Bitcoin price charts with 7-day and 30-day views",
      "Market cap, trading volume, and percentage change indicators at a glance",
      "Instant coin search and filtering for quick market scanning",
      "Automatic data refresh every 60 seconds for always up-to-date prices",
      "Fully responsive, mobile-first layout built with Tailwind CSS",
    ],
    techStack: [
      { name: "React", purpose: "Component-based frontend" },
      { name: "JavaScript", purpose: "Application logic" },
      { name: "CoinGecko API", purpose: "Live cryptocurrency data" },
      { name: "Axios", purpose: "Asynchronous REST API requests" },
      { name: "Chart.js", purpose: "Interactive data visualization" },
      { name: "Tailwind CSS", purpose: "Responsive styling" },
    ],
    screenshots: [
      "/walletwave/a1.png",
      "/walletwave/a2.png",
      "/walletwave/a3.png",
      "/walletwave/a4.png",
    ],
  },
  {
    id: 6,
    title: "ChatGO",
    status: "Completed",
    duration: "2 weeks",
    overview:
      "ChatGO is a real-time messaging application that delivers instant, bidirectional communication through WebSockets with Socket.IO. It implements JWT-based authentication and authorization, secure session handling, and persistent message storage in MongoDB, wrapped in a responsive React interface.",
    features: [
      "Instant one-to-one and group messaging over Socket.IO WebSockets",
      "Secure registration, login, and protected routes using JWT authentication",
      "Live online and offline presence indicators for every user",
      "Message timestamps and read receipts for clear conversation status",
      "Persistent chat history stored and retrieved from MongoDB",
      "Responsive React interface optimized for mobile and desktop",
    ],
    techStack: [
      { name: "React", purpose: "Responsive frontend UI" },
      { name: "Node.js / Express", purpose: "REST API backend" },
      { name: "Socket.IO", purpose: "Real-time WebSocket messaging" },
      { name: "JWT", purpose: "Authentication and authorization" },
      { name: "MongoDB", purpose: "Persistent message storage" },
    ],
    screenshots: [
      "/chatgo/chat2.png",
      "/chatgo/ch3.png",
      "/chatgo/chat1.png",
      "/chatgo/ch1.png",
    ],
  },
  {
    id: 7,
    title: "Email Checker",
    status: "Completed",
    duration: "1 week",
    overview:
      "Email Checker is an AI-powered phishing detection tool that analyzes email content, tone, and suspicious patterns using machine learning and NLP techniques. It provides explainable predictions through the Grok AI SDK and a Python REST API, helping users identify threats and make safer decisions.",
    features: [
      "Machine learning classifier that labels emails as Spam or Ham with a confidence score",
      "NLP preprocessing pipeline with tokenization, text cleaning, and feature extraction",
      "Detection of phishing signals through keywords, tone, and suspicious language patterns",
      "Explainable AI output powered by the Grok AI SDK that shows why an email was flagged",
      "Real-time predictions served through a Python REST API",
      "Clean React interface for testing and comparing multiple email samples",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "Tailwind CSS", purpose: "Responsive styling" },
      { name: "Python", purpose: "ML backend logic" },
      { name: "Scikit-learn", purpose: "Model training and prediction" },
      { name: "Pandas", purpose: "Data processing" },
      { name: "NLTK", purpose: "NLP text preprocessing" },
      { name: "Grok AI SDK", purpose: "Explainable predictions" },
      { name: "REST API", purpose: "Frontend-backend communication" },
    ],
    screenshots: [
      "/emailchecker/emailchcher2.png",
      "/emailchecker/emailchecker.png",
    ],
  },
  {
    id: 8,
    title: "Expense Tracker",
    status: "Completed",
    duration: "1 week",
    overview:
      "Expense Tracker is a MERN stack personal finance dashboard for tracking income, expenses, and spending patterns through interactive Recharts visualizations. It helps users monitor budgets and understand financial habits, with a clean Tailwind CSS interface and RESTful APIs backed by MongoDB.",
    features: [
      "Full CRUD workflow to add, edit, and delete income and expense transactions",
      "Interactive Recharts pie and bar charts for category-wise spending analysis",
      "Monthly summary showing total income, total expenses, and net balance",
      "Advanced filtering by date range and category",
      "RESTful APIs with MongoDB persistence and LocalStorage for fast client-side state",
      "One-click CSV export for external reporting and analysis",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "Node.js / Express", purpose: "RESTful API backend" },
      { name: "MongoDB", purpose: "Database" },
      { name: "Recharts", purpose: "Data visualization" },
      { name: "LocalStorage", purpose: "Client-side state caching" },
      { name: "Tailwind CSS", purpose: "Responsive styling" },
    ],
    screenshots: [
      "/expensetracker/e1.png",
      "/expensetracker/e2.png",
      "/expensetracker/e3.png",
      "/expensetracker/e4.png",
    ],
  },
  {
  id: 9,
  title: "AI Voice Assistant",
  status: "Completed",
  duration: "2 weeks",
  overview:
    "AI Voice Assistant is a cross-platform desktop application for Windows, macOS, and Linux that listens to English voice commands, transcribes them with Google's Speech Recognition service, and answers aloud using the local pyttsx3 text-to-speech engine. A Tkinter interface shows the live listening state and an in-memory conversation transcript, and no conversation history is saved after the app closes.",
  features: [
    "Hands-free voice control with live microphone input and English speech recognition",
    "Command recognition powered by Google Speech Recognition for accurate speech-to-text",
    "Offline text-to-speech replies through the local pyttsx3 engine",
    "Instant spoken answers for the current time, today's date, and built-in conversational phrases",
    "Voice-triggered Google searches and YouTube launch in the default browser",
    "Random MP3 playback from a user-selected local music folder",
    "Tkinter GUI with start/stop listening controls and a real-time Recent Activity log",
    "Privacy-first design with a session-only transcript that is never written to disk",
    "Built-in error reporting for microphone, recognition, and runtime issues",
  ],
  techStack: [
    { name: "Python 3.10+", purpose: "Core application logic" },
    { name: "Tkinter", purpose: "Desktop GUI and activity log" },
    { name: "SpeechRecognition", purpose: "Voice command transcription" },
    { name: "Google Speech API", purpose: "Online speech-to-text engine" },
    { name: "pyttsx3", purpose: "Local text-to-speech replies" },
    { name: "PyAudio", purpose: "Microphone audio capture" },
    { name: "webbrowser", purpose: "Search and YouTube launching" },
  ],
  screenshots: [
    "/voiceassistant/v1.png",
    "/voiceassistant/v2.png",
  ],
},
];

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = demoprojects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ReflectBackground />
        </div>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#fff", fontFamily: "var(--font-inter)" }}>Project not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Background fixed behind everything */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ReflectBackground />
      </div>

      {/* Scrollable content on top */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          width: "100%",
          padding: "clamp(16px, 4vw, 40px)",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>

          <button
            onClick={() => router.back()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              marginBottom: 24,
              fontFamily: "var(--font-inter)",
            }}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>

          {/* CENTER TITLE */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center", textAlign: "center", marginBottom: 20 }}>
            <h1
              style={{
                fontSize: "clamp(2.3rem, 5vw, 3.2rem)",
                fontWeight: 800,
                color: "#b18cf5",
                fontFamily: "var(--font-michroma)",
                letterSpacing: "1px",
                maxWidth: "900px",
              }}
            >
              {project.title}
            </h1>
          </div>

          {/* HEADER */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
            <span
              style={{
                padding: "4px 12px",
                background: "rgba(39, 197, 11, 0.4)",
                border: "1px solid rgba(0, 165, 14, 0.5)",
                borderRadius: 20,
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                color: "#fff",
              }}
            >
              {project.status}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#fff" }}>
              <Clock size={14} />
              {project.duration}
            </span>
          </div>

          {/* OVERVIEW */}
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              fontFamily: "var(--font-inter)",
              color: "#fff",
              marginBottom: 24,
            }}
          >
            {project.overview}
          </p>

          {/* SCREENSHOTS */}
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 14 }}>Screenshots</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {project.screenshots?.length > 0 ? (
                project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    style={{
                      width: "100%",
                      borderRadius: 12,
                      border: "1px solid rgba(168,85,247,0.2)",
                      objectFit: "cover",
                    }}
                  />
                ))
              ) : (
                <div
                  style={{
                    padding: "30px",
                    border: "1px dashed rgba(168,85,247,0.2)",
                    borderRadius: 10,
                    textAlign: "center",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: 12,
                    gridColumn: "span 2",
                  }}
                >
                  Screenshots coming soon
                </div>
              )}
            </div>
          </div>

          {/* FEATURES */}
          <div
            style={{
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: 14,
              padding: "20px",
              marginBottom: 24,
            }}
          >
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 14 }}>Key Features</h2>
            <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
              {project.features?.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "#fff", lineHeight: 1.6 }}>
                  <CheckCircle size={14} style={{ color: "#b18cf5", marginTop: 3 }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* TECH STACK */}
          <div
            style={{
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: 14,
              padding: "20px",
              marginBottom: 40,
            }}
          >
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 14 }}>Tech Stack</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
  {project.techStack?.map((tech, i) => (
    <div
      key={i}
      style={{
        padding: "2px 9px",
        border: "1px solid rgba(168,85,247,0.4)",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: 4,
        // CSS resolves this in the browser, while keeping the server render deterministic.
        fontSize: "clamp(10px, 1.5vw, 12px)",
        fontFamily: "var(--font-inter)",
        color: "rgb(255, 255, 255)",
      }}
    >
      <p style={{ margin: 0 }}>{tech.name}</p>
      <p style={{ margin: 0, fontSize: "clamp(8px, 1.2vw, 10px)", color: "rgba(255,255,255,0.6)" }}>
        {tech.purpose}
      </p>
    </div>
  ))}
</div>
          </div>

        </div>
      </div>
    </>
  );
}
