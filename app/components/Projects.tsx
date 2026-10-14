"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { demoprojects as caseStudies } from "../demoprojects/data";
import { GithubIcon } from "./SocialIcons";

type Category = "AI & LLM" | "Full-Stack" | "Frontend";

const demoprojects: {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: Category;
  liveUrl?: string;
  githubUrl: string;
}[] = [
  {
    id: 1,
    title: "Ruler.ui",
    description:
      "An open-source React and TypeScript component library with 25+ reusable UI components, dark and light themes, and optimized ESM/CJS builds.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "CVA", "Design System"],
    category: "Frontend",
    liveUrl: "https://ruler-ui.vercel.app/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "OrchestrAI",
    description:
      "A multi-agent AI platform using LangGraph, Gemini, and Grok to route tasks intelligently, with a RAG pipeline and Redis caching.",
    tags: ["LangGraph", "RAG", "Gemini", "Grok", "Redis", "Node.js"],
    category: "AI & LLM",
    liveUrl: "https://orchestrationai.netlify.app/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "RAG System",
    description:
      "An AI chatbot that gives accurate, context-aware answers using RAG, semantic search, and a Pinecone vector database.",
    tags: ["LangChain", "Pinecone", "FastAPI", "RAG", "React"],
    category: "AI & LLM",
    githubUrl: "https://github.com/zunair2002/RAG-application",
  },
  {
    id: 4,
    title: "SabziMart",
    description:
      "A full-stack grocery delivery platform for customers, riders, and admins, with real-time tracking and role-based access.",
    tags: ["Next.js", "MongoDB", "Socket.IO", "NextAuth", "RBAC"],
    category: "Full-Stack",
    githubUrl: "https://github.com/zunair2002/SabziMart",
  },
  {
    id: 5,
    title: "WalletWave",
    description:
      "A real-time cryptocurrency dashboard with live market data and interactive Bitcoin price charts.",
    tags: ["React", "Chart.js", "CoinGecko API", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com/zunair2002/WalletWave",
  },
  {
    id: 6,
    title: "ChatGO",
    description:
      "A real-time chat application using Socket.IO and JWT authentication, with persistent MongoDB message storage.",
    tags: ["React", "Socket.IO", "JWT", "MongoDB", "Express"],
    category: "Full-Stack",
    githubUrl: "https://github.com/zunair2002/ChatGO",
  },
  {
    id: 7,
    title: "Email Checker",
    description:
      "An AI-powered phishing detector that uses machine learning and NLP to explain why a message looks safe or suspicious.",
    tags: ["Python", "NLP", "Machine Learning", "React"],
    category: "AI & LLM",
    githubUrl: "https://github.com/zunair2002/phishing-ML",
  },
  {
    id: 8,
    title: "Expense Tracker",
    description:
      "A MERN finance dashboard that tracks income and expenses and visualizes spending habits.",
    tags: ["MERN", "Recharts", "MongoDB", "Tailwind CSS"],
    category: "Full-Stack",
    githubUrl: "https://github.com/zunair2002/ExpenseApp-MERN",
  },
  {
    id: 9,
    title: "AI Voice Assistant",
    description:
      "A Python desktop voice assistant that recognizes spoken commands and responds with text-to-speech.",
    tags: ["Python", "Speech Recognition", "Tkinter", "pyttsx3"],
    category: "AI & LLM",
    githubUrl: "",
  },
];

type Project = (typeof demoprojects)[number];

const filters: ("All" | Category)[] = ["All", "AI & LLM", "Full-Stack", "Frontend"];

const coverFor = (id: number) => caseStudies.find((p) => p.id === id)?.coverImage;

function ProjectCard({ project }: { project: Project }) {
  const cover = coverFor(project.id);
  const externalUrl = project.liveUrl || project.githubUrl;
  const number = String(project.id).padStart(2, "0");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="surface-card card-lift group flex h-full flex-col overflow-hidden"
    >
      <Link href={`/demoprojects/${project.id}`} className="block p-2.5 pb-0" aria-label={`${project.title} case study`}>
        <div className="overflow-hidden rounded-[14px] border border-[#101051]/10 bg-[#101051]/[0.04]">
          {/* Browser chrome */}
          <div className="flex h-7 items-center gap-1.5 border-b border-[#101051]/[0.08] bg-white/80 px-3">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            {project.liveUrl && (
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#32de84]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#16884e]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#32de84] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#32de84]" />
                </span>
                Live
              </span>
            )}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden">
            {cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cover}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-full w-full object-fill"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-neutral-500">
                {project.title}
              </div>
            )}
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#101051]/70 via-[#101051]/10 to-transparent pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#101051] shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                View case study
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#16884e]">
          {number} · {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#101051]">
          <Link href={`/demoprojects/${project.id}`} className="transition-colors hover:text-[#16884e]">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-[14.5px] leading-7 text-neutral-600">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#101051]/10 pt-5">
          <Link
            href={`/demoprojects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#101051] transition-colors hover:text-[#16884e]"
          >
            Case study
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          {externalUrl ? (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                project.liveUrl
                  ? "bg-[#32de84] text-[#101051] hover:bg-[#28cf78]"
                  : "border border-[#101051]/12 text-[#101051]/75 hover:border-[#101051]/30 hover:text-[#101051]"
              }`}
            >
              {project.liveUrl ? (
                <>
                  Live demo <ArrowUpRight size={14} />
                </>
              ) : (
                <>
                  <GithubIcon size={14} /> Source
                </>
              )}
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? demoprojects : demoprojects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-block">
      <div className="page-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="section-kicker">04 — Projects</p>
            <h2 className="section-title">
              Selected <span className="serif-accent">work</span>
            </h2>
            <p className="section-copy">
              AI systems, full-stack products, and interface libraries, each with a short case
              study covering features and architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            role="group"
            aria-label="Filter projects"
            className="-mx-1 flex w-fit max-w-full flex-wrap gap-1 rounded-full border border-[#101051]/10 bg-white/70 p-1 backdrop-blur"
          >
            {filters.map((f) => {
              const isActive = filter === f;
              const count = f === "All" ? demoprojects.length : demoprojects.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(f)}
                  className={`relative isolate inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors sm:px-4 ${
                    isActive ? "text-white" : "text-[#101051]/65 hover:text-[#101051]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-[#101051]"
                    />
                  )}
                  {f}
                  <span className={`font-mono text-[10.5px] ${isActive ? "text-[#32de84]" : "text-[#101051]/40"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
