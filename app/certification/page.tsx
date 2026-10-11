"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
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

export default function CertificationPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#06080d]" />

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ReflectBackground />
      </div>

      <main className="relative z-10 min-h-screen pb-16">
        <div className="page-shell pt-10">
          <Link href="/" className="btn-secondary !min-h-10 !px-4 text-[13px]">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mt-10 max-w-3xl"
          >
            <p className="section-kicker">Credentials</p>
            <h1 className="section-title">Certifications</h1>
            <p className="section-copy">
              Formal training across AI, full-stack engineering, data, and applied machine learning.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="surface-card flex flex-col overflow-hidden"
              >
                {item.link ? (
                  <img
                    src={item.link}
                    alt={item.title}
                    className="h-48 w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-48 items-center justify-center text-sm text-white/40">
                    Certificate image coming soon
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-[#f3efe6]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">
                    <ShieldCheck size={13} className="text-[#7dd3c7]" />
                    {item.issuer}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
