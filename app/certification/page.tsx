"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Maximize2, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import ReflectBackground from "../demoprojects/wave";

const certificates = [
  {
    title: "Artificial Intelligence",
    issuer: "Coursera",
    description:
      "Foundations of modern AI systems, including machine learning concepts, model evaluation, and practical applications.",
    link: "/CertificationPics/AI certificate.png",
  },
  {
    title: "Full-Stack Development",
    issuer: "Simplilearn",
    description:
      "End-to-end web development covering React, Node.js, APIs, and scalable frontend architecture.",
    link: "/CertificationPics/MERN.png",
  },
  {
    title: "Data Transformation",
    issuer: "MongoDB",
    description:
      "Hands-on work with aggregation pipelines for filtering, grouping, transforming, and analyzing MongoDB data.",
    link: "/CertificationPics/MongoDB.png",
  },
  {
    title: "Prompt Engineering",
    issuer: "Amazon Web Services",
    description:
      "Practical prompting, context management, and structured LLM usage for reliable AI-powered applications.",
    link: "/CertificationPics/prompt.png",
  },
  {
    title: "Machine Learning",
    issuer: "Deeplearning.AI",
    description:
      "Applied machine learning with neural networks and TensorFlow for real-world prediction tasks.",
    link: "/CertificationPics/Screenshot 2026-07-16 133748.png",
  },
  {
    title: "Dementia Friends",
    issuer: "Alzheimer’s Pakistan",
    description:
      "Community participation in Alzheimer’s awareness sessions focused on education and public outreach.",
    link: "/CertificationPics/WhatsApp Image 2026-04-23 at 10.16.18 AM.jpeg",
  },
];

// File names contain spaces, so encode them safely
const src = (path: string) => encodeURI(path);

export default function CertificationPage() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#F7F6F2]" />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ReflectBackground />
      </div>

      <main className="relative z-10 min-h-screen pb-24">
        <div className="page-shell pt-10">
          <Link href="/" className="btn-secondary !min-h-10 !px-4 text-[13px]">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          {/* Header */}
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="section-kicker">Credentials</p>
              <h1 className="section-title">Certifications</h1>
              <p className="section-copy">
                Formal training in AI, full-stack development, data engineering, and applied machine learning, with a focus on practical implementation and real-world applications.
              </p>
            </div>
          </motion.header>

          {/* Grid */}
          <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="surface-card flex h-full flex-col overflow-hidden"
              >
                {item.link ? (
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`View ${item.title} certificate`}
                    className="group relative block aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-neutral-900/10 bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    {/* Every image fills the exact same frame, so all cards match */}
                    <img
                      src={src(item.link)}
                      alt={`${item.title} certificate`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                    <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-neutral-800 shadow">
                        <Maximize2 size={12} />
                        View full
                      </span>
                    </span>
                  </button>
                ) : (
                  <div className="flex aspect-[16/10] shrink-0 items-center justify-center border-b border-neutral-900/10 bg-neutral-100 text-sm text-neutral-500">
                    Certificate image coming soon
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-[#16884e]">
                    <ShieldCheck size={14} />
                    {item.issuer}
                  </div>
                  <h3 className="mt-3 line-clamp-1 text-lg font-semibold tracking-tight text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {active !== null && certificates[active].link && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${certificates[active].title} certificate`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={18} />
          </button>
          <img
            src={src(certificates[active].link)}
            alt={`${certificates[active].title} certificate`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg bg-white object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}