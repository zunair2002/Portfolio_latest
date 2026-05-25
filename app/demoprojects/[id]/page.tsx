"use client";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

const demoprojects = [
  {
    id: 1,
    title: "SabziMart",
    status: "Completed",
    duration: "3 months",
    overview:
      "SabziMart is a full-stack grocery delivery platform that connects customers, delivery riders, and admins through a single unified system. Built with scalability in mind, it handles real-time order tracking, role-based access, and a smooth end-to-end delivery workflow.",
    features: [
      "Customer, Rider, and Admin dashboards with role-based access",
      "Real-time order tracking with live status updates",
      "Secure JWT-based authentication for all user types",
      "Product catalog with category filters and search",
      "Order management system with history and invoices",
      "Rider assignment and delivery route management",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "Node.js", purpose: "Backend runtime" },
      { name: "Express", purpose: "REST API framework" },
      { name: "MongoDB", purpose: "Database" },
      { name: "JWT", purpose: "Authentication" },
      { name: "Socket.io", purpose: "Real-time updates" },
    ],
    screenshots: [
      "/images/sabzimart-1.png",
      "/images/sabzimart-2.png",
      "/images/sabzimart-1.png",
      "/images/sabzimart-2.png"
    ],
  },
  {
    id: 2,
    title: "ChatGO",
    status: "Completed",
    duration: "6 weeks",
    overview:
      "ChatGO is a real-time messaging platform that allows users to communicate instantly through private and group chats. Built on Socket.io, it delivers messages with zero delay and ensures secure sessions via JWT authentication.",
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
      "/images/chatgo-1.png",
      "/images/chatgo-2.png",
      "/images/chatgo-2.png",
      "/images/chatgo-2.png"
    ],
  },
  {
    id: 3,
    title: "WalletWave",
    status: "Completed",
    duration: "4 weeks",
    overview:
      "WalletWave is a sleek crypto dashboard that aggregates live market data for top cryptocurrencies. Users can monitor prices, market caps, and volume changes at a glance, with an interactive Bitcoin price chart powered by Chart.js.",
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
      "/images/walletwave-1.png",
      "/images/walletwave-2.png",
      "/images/walletwave-2.png",
      "/images/walletwave-2.png"
    ],
  },
  {
    id: 4,
    title: "Expense Tracker",
    status: "Completed",
    duration: "2 weeks",
    overview:
      "Expense Tracker is a personal finance tool that helps users log income and expenses, categorize transactions, and visualize spending patterns through clean charts. All data is persisted locally so nothing is lost on refresh.",
    features: [
      "Add, edit, and delete income and expense transactions",
      "Category-wise breakdown with pie and bar charts via Recharts",
      "Monthly summary with total income, expenses, and net balance",
      "Filter transactions by date range or category",
      "LocalStorage persistence — no backend needed",
      "Export transactions as CSV for external use",
    ],
    techStack: [
      { name: "React", purpose: "Frontend UI" },
      { name: "Recharts", purpose: "Data visualization" },
      { name: "LocalStorage", purpose: "Client-side persistence" },
      { name: "Tailwind CSS", purpose: "Styling" },
    ],
    screenshots: [
      "/images/expense-1.png",
      "/images/expense-2.png",
      "/images/expense-2.png",
      "/images/expense-2.png"
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = demoprojects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "rgb(255, 255, 255)", fontFamily: "var(--font-inter)" }}>Project not found.</p>
      </div>
    );
  }

  return (
    <div
  style={{
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(135deg, #240051 0%, #290046b3 25%, #220443 50%, #1c0648 75%, #300031a2 100%)",
    padding: "40px 60px",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >
    {/* BACK BUTTON */}
    <button
      onClick={() => router.back()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "rgb(255, 255, 255)",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 14,
        marginBottom: 30,
        padding: 0,
        fontFamily: "var(--font-inter)",
        transition: "opacity 0.2s ease",
      }}
    >
      <ArrowLeft size={16} style={{marginBottom:'2px'}} /> Back to Projects
    </button>

    {/* HEADER */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 12,
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          padding: "4px 14px",
          background: "rgba(39, 197, 11, 0.52)",
          border: "1px solid rgba(0, 165, 14, 0.58)",
          borderRadius: 20,
          fontFamily: "var(--font-inter)",
          fontSize: 12,
          color: "#ffffff",
        }}
      >
        {project.status}
      </span>

      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          color: "rgb(255, 255, 255)",
          marginBottom: '4px',
        }}
      >
        <Clock size={14} style={{marginTop:'2px'}} /> {project.duration}
      </span>
    </div>

    {/* TITLE */}
    <h1
      style={{
        fontSize: "clamp(2rem, 5vw, 3.2rem)",
        fontWeight: 800,
        color: "#e2d9f3",
        marginBottom: 20,
        fontFamily: "var(--font-michroma)",
      }}
    >
      {project.title}
    </h1>

    {/* OVERVIEW */}
    <p
      style={{
        fontSize: 15,
        lineHeight: 1.8,
        fontFamily: "var(--font-inter)",
        color: "rgb(255, 255, 255)",
        marginBottom: 30,
      }}
    >
      {project.overview}
    </p>

    {/* SCREENSHOTS */}
    <div style={{ marginBottom: 28 }}>
      <h2
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: 20,
          fontFamily: "var(--font-inter)",
        }}
      >
        Screenshots
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {project.screenshots && project.screenshots.length > 0 ? (
          project.screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              style={{
                width: "100%",
                borderRadius: 10,
                border: "1px solid rgba(168,85,247,0.2)",
                objectFit: "cover",
              }}
            />
          ))
        ) : (
          <div
            style={{
              padding: "40px",
              border: "1px dashed rgba(168,85,247,0.2)",
              borderRadius: 10,
              textAlign: "center",
              color: "rgba(255,255,255,0.2)",
              fontSize: 13,
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
        padding: "24px",
        marginBottom: 28,
        fontFamily: "var(--font-inter)",
      }}
    >
      <h2
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: 20,
        }}
      >
        Key Features
      </h2>
<ul
  style={{
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 12,
    fontFamily: "var(--font-inter)",
  }}
>
  {project.features.map((f, i) => (
    <li
      key={i}
      style={{
        display: "flex",
        gap: 10,
        fontSize: 14,
        color: "rgb(255, 255, 255)",
        lineHeight: 1.6,
        fontFamily: "var(--font-inter)",
      }}
    >
      <CheckCircle
        size={15}
        style={{ color: "#a855f7", marginTop: 3 }}
      />
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
        padding: "24px",
      }}
    >
      <h2
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: 20,
          fontFamily: "var(--font-inter)",
        }}
      >
        Tech Stack
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {project.techStack.map((tech, i) => (
          <div
            key={i}
            style={{
              padding: "10px 18px",
              border: "1px solid rgba(168,85,247,0.3)",
              background: "rgba(168,85,247,0.07)",
              borderRadius: 8,
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "var(--font-inter)",
              }}
            >
              {tech.name}
            </p>
            <p
              style={{
                fontSize: 11,
                color: "rgba(255, 255, 255, 0.65)",
              }}
            >
              {tech.purpose}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}