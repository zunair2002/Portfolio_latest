"use client";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import ReflectBackground from "../wave";
import { demoprojects } from "../data";

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
