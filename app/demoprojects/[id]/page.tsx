"use client";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import ReflectBackground from "../wave";

const demoprojects = [
  {
    id: 1,
    title: "SabziMart",
    status: "Working",
    duration: "2 months",
    overview:

"SabziMart is a full-stack grocery delivery platform that connects customers, delivery riders, and admins through a single unified system. Built with scalability in mind, it ensures smooth performance across all operations. It handles real-time order tracking, role-based access, and secure authentication. Providing a seamless end-to-end grocery delivery workflow experience.",   
features: [
      "Customer, Rider, and Admin dashboards with role-based access",
      "Real-time order tracking with live status updates",
      "Secure NextAuth-based authentication for all user types",
      "Product catalog with category filters and search",
      "Order management system with history and invoices",
      "Rider assignment and delivery route management",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "Styling", purpose: "Tailwind CSS" },
      { name: "TypeScript.js", purpose: "Backend runtime" },
      { name: "Express", purpose: "REST API framework" },
      { name: "MongoDB", purpose: "Database" },
      { name: "JWT", purpose: "Authentication" },
      { name: "Socket.io", purpose: "Real-time updates" },
      { name: "Leaflet", purpose: "Real-time tracking" },
      { name: "Cloudinary", purpose: "Image hosting" },
    ],
    screenshots: [
      "/sabzimart/Screenshot 2026-04-23 102633.png",
      "/sabzimart/Screenshot 2026-04-23 102714.png",
      "/sabzimart/Screenshot 2026-04-23 103001.png",
      "/sabzimart/Screenshot 2026-04-23 102748.png",
      "/sabzimart/Screenshot 2026-04-23 102841.png",
      "/sabzimart/Screenshot 2026-04-23 103038.png"
      
    ],
  },
  {
    id: 2,
    title: "ChatGO",
    status: "Completed",
    duration: "2 weeks",
    overview:
"ChatGO is a real-time messaging platform that allows users to communicate instantly through private and group chats. Built on Socket.io, it delivers messages with zero delay and ensures real-time communication between users. It uses JWT authentication to provide secure and protected user sessions. The platform is designed for fast, reliable, and scalable messaging experience.",
    features: [
      "Real-time one-to-one and group messaging via Socket.io",
      "Secure user registration and login with JWT",
      "Online/offline presence indicators",
      "Message read receipts and timestamps",
      "Responsive UI for mobile and desktop",
      "Persistent chat history stored in MongoDB",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "Socket.io", purpose: "Real-time messaging" },
      { name: "Express", purpose: "Backend API" },
      { name: "MongoDB", purpose: "Message storage" },
      { name: "JWT", purpose: "Secure authentication" },
    ],
    screenshots: [
      "/chatgo/chat2.png",
      "/chatgo/ch3.png",
      "/chatgo/chat1.png",
      "/chatgo/ch1.png"
    ],
  },
  {
    id: 3,
    title: "WalletWave",
    status: "Completed",
    duration: "1 weeks",
    overview:
"WalletWave is a sleek crypto dashboard that aggregates live market data for top cryptocurrencies. It allows users to monitor prices, market caps, and volume changes in real time. The platform provides an interactive Bitcoin price chart powered by Chart.js. It is designed for a smooth and intuitive crypto tracking experience.",
    features: [
      "Live price feeds for top 20 cryptocurrencies via CoinGecko API",
      "Interactive Bitcoin price chart with 7-day and 30-day views",
      "Market cap, volume, and percentage change indicators",
      "Coin search and filter functionality",
      "Clean responsive layout optimized for quick scanning",
      "Auto-refresh every 60 seconds for up-to-date data",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "CoinGecko API", purpose: "Live crypto data" },
      { name: "Chart.js", purpose: "Interactive charts" },
      { name: "Tailwind CSS", purpose: "Styling" },
      { name: "Axios", purpose: "API requests" },
    ],
    screenshots: [
      "/walletwave/a1.png",
      "/walletwave/a2.png",
      "/walletwave/a3.png",
      "/walletwave/a4.png"
    ],
  },
  {
    id: 4,
    title: "Expense Tracker",
    status: "Completed",
    duration: "1 weeks",
    overview:
      "Expense Tracker is a personal finance tool that helps users log income and expenses, categorize transactions, and visualize spending patterns through clean charts. All data is persisted locally so nothing is lost on refresh.",
    features: [
      "Add, edit, and delete income and expense transactions",
      "Category-wise breakdown with pie and bar charts via Recharts",
      "Monthly summary with total income, expenses, and net balance",
      "Filter transactions by date range or category",
      "LocalStorage persistence no backend needed",
      "Export transactions as CSV for external use",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "Recharts", purpose: "Data visualization" },
      { name: "LocalStorage", purpose: "Client-side persistence" },
      { name: "Tailwind CSS", purpose: "Styling" },
    ],
    screenshots: [
      "/expensetracker/e1.png",
      "/expensetracker/e2.png",
      "/expensetracker/e3.png",
      "/expensetracker/e4.png"
    ],
  },
  {
    id: 5,
    title: "Email Checker",
    status: "Completed",
    duration: "1 weeks",
   overview:
  "Email Spam/Ham Detector is a machine learning based classification tool that helps users identify whether an email is spam or legitimate (ham). It analyzes email content, patterns, and keywords to provide accurate predictions. The system can be extended with visualization of prediction results and stores no sensitive data permanently.",

features: [
  "Classify emails as Spam or Ham using trained model",
  "Text preprocessing including tokenization and cleaning",
  "Keyword and pattern-based feature extraction",
  "Real-time prediction of email input",
  "Display confidence score for predictions",
  "Simple UI for testing multiple email samples",
],

techStack: [
  { name: "React", purpose: "Frontend UI" },
  { name: "Python", purpose: "ML backend logic" },
  { name: "Scikit-learn", purpose: "Model training & prediction" },
  { name: "Pandas", purpose: "Data processing" },
  { name: "NLTK", purpose: "Text preprocessing" },
  { name: "NLTK", purpose: "Text preprocessing" },
  { name: "REST api", purpose: "Communication" },
],
    screenshots: [
      "/emailchecker/emailchcher2.png",
      "/emailchecker/emailchecker.png",
    ],
  },
  {
    id: 6,
    title: "RAG Chatbot",
    status: "Completed",
    duration: "1 weeks",
    overview:
"RAG (Retrieval-Augmented Generation) is an AI technique that combines information retrieval with text generation to produce more accurate and context-aware responses. It works by first retrieving relevant data from external sources such as databases, documents, or knowledge bases. This retrieved information is then provided to a generative model, which uses it to create a final response. By grounding outputs in real data, RAG improves accuracy and reduces hallucinations or incorrect answers.",
    features: [
      "Retrieves relevant information from external sources (documents, database, etc.)",
      "Uses retrieved data to generate accurate responses",
"Combines search + AI generation in one system",
"Reduces wrong or hallucinated answers",
"Works well for chatbots and document-based Q&A systems",
"Provides context-aware and up-to-date responses"
    ],
    techStack: [
      { name: "React", purpose: "UI" },
  { name: "Node.js", purpose: "Server" },
  { name: "Express", purpose: "API" },
  { name: "Vector DB", purpose: "Retrieval" },
  { name: "OpenAI / LLM", purpose: "Generation" },

    ],
    screenshots: [
      "/Rag/RAGpic.png",
      "/Rag/RAGpic2.png",
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
        fontSize: window.innerWidth < 768 ? 10 : 12,
        fontFamily: "var(--font-inter)",
        color: "rgb(255, 255, 255)",
      }}
    >
      <p style={{ margin: 0 }}>{tech.name}</p>
      <p style={{ margin: 0, fontSize: window.innerWidth < 768 ? 8 : 10, color: "rgba(255,255,255,0.6)" }}>
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