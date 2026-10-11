"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { demoprojects as caseStudies } from "../demoprojects/data";
import { GithubIcon } from "./SocialIcons";

const demoprojects = [
  {
    id: 1,
    title: "Ruler.ui",
    description:
      "An open-source React and TypeScript component library with 25+ reusable UI components, dark and light themes, and optimized ESM/CJS builds.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "CVA", "Design System"],
    liveUrl: "https://ruler-ui.vercel.app/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "OrchestrAI",
    description:
      "A multi-agent AI platform using LangGraph, Gemini, and Grok to route tasks intelligently, with a RAG pipeline and Redis caching.",
    tags: ["LangGraph", "RAG", "Gemini", "Grok", "Redis", "Node.js"],
    liveUrl: "https://orchestrationai.netlify.app/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "RAG System",
    description:
      "An AI chatbot that gives accurate, context-aware answers using RAG, semantic search, and a Pinecone vector database.",
    tags: ["LangChain", "Pinecone", "FastAPI", "RAG", "React"],
    githubUrl: "https://github.com/zunair2002/RAG-application",
  },
  {
    id: 4,
    title: "SabziMart",
    description:
      "A full-stack grocery delivery platform for customers, riders, and admins, with real-time tracking and role-based access.",
    tags: ["Next.js", "MongoDB", "Socket.IO", "NextAuth", "RBAC"],
    githubUrl: "https://github.com/zunair2002/SabziMart",
  },
  {
    id: 5,
    title: "WalletWave",
    description:
      "A real-time cryptocurrency dashboard with live market data and interactive Bitcoin price charts.",
    tags: ["React", "Chart.js", "CoinGecko API", "Tailwind CSS"],
    githubUrl: "https://github.com/zunair2002/WalletWave",
  },
  {
    id: 6,
    title: "ChatGO",
    description:
      "A real-time chat application using Socket.IO and JWT authentication, with persistent MongoDB message storage.",
    tags: ["React", "Socket.IO", "JWT", "MongoDB", "Express"],
    githubUrl: "https://github.com/zunair2002/ChatGO",
  },
  {
    id: 7,
    title: "Email Checker",
    description:
      "An AI-powered phishing detector that uses machine learning and NLP to explain why a message looks safe or suspicious.",
    tags: ["Python", "NLP", "Machine Learning", "React"],
    githubUrl: "https://github.com/zunair2002/phishing-ML",
  },
  {
    id: 8,
    title: "Expense Tracker",
    description:
      "A MERN finance dashboard that tracks income and expenses and visualizes spending habits.",
    tags: ["MERN", "Recharts", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/zunair2002/ExpenseApp-MERN",
  },
  {
    id: 9,
    title: "AI Voice Assistant",
    description:
      "A Python desktop voice assistant that recognizes spoken commands and responds with text-to-speech.",
    tags: ["Python", "Speech Recognition", "Tkinter", "pyttsx3"],
    githubUrl: "",
  },
];

const coverFor = (id: number) => caseStudies.find((p) => p.id === id)?.screenshots?.[0];

type Project = (typeof demoprojects)[number] & { liveUrl?: string };

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cover = coverFor(project.id);
  const externalUrl = project.liveUrl || project.githubUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      className="surface-card group flex h-full flex-col overflow-hidden"
    >
      <Link
        href={`/demoprojects/${project.id}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-white/8 bg-white/[0.03]"
      >
        {cover ? (
          <img
            src={cover}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-white/30">{project.title}</div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-[#f3efe6]">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-[14.5px] leading-7 text-white/65">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/8 pt-5">
          <Link
            href={`/demoprojects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#f3efe6] transition-colors hover:text-[#7dd3c7]"
          >
            View case study
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          {externalUrl ? (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-[#7dd3c7]"
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
  return (
    <section id="projects" className="section-block">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-copy">
            AI systems, full-stack products, and interface libraries, each with a short case
            study covering features and architecture.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {(demoprojects as Project[]).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
