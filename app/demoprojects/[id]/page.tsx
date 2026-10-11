"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock } from "lucide-react";
import ReflectBackground from "../wave";
import { demoprojects } from "../data";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = demoprojects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <>
        <div className="fixed inset-0 -z-10 bg-[#06080d]" />
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ReflectBackground />
        </div>
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <p className="text-white/70">Project not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#06080d]" />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ReflectBackground />
      </div>

      <main className="relative z-10 min-h-screen pb-20">
        <div className="page-shell pt-10">
          <Link href="/#projects" className="btn-secondary !min-h-10 !px-4 text-[13px]">
            <ArrowLeft size={15} />
            Back to projects
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="section-kicker">Case study</p>
            <h1 className="section-title">{project.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="chip">{project.status}</span>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <Clock size={14} />
                {project.duration}
              </span>
            </div>
            <p className="section-copy">{project.overview}</p>
          </div>

          <section className="mt-12">
            <h2 className="mb-5 text-lg font-semibold tracking-tight text-[#f3efe6]">Screenshots</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.screenshots?.length > 0 ? (
                project.screenshots.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-[280px] w-full rounded-2xl border border-white/10 object-contain"
                  />
                ))
              ) : (
                <div className="surface-card col-span-full p-10 text-center text-sm text-white/40">
                  Screenshots coming soon
                </div>
              )}
            </div>
          </section>

          <section className="surface-card mt-10 p-6 md:p-8">
            <h2 className="mb-5 text-lg font-semibold tracking-tight text-[#f3efe6]">Key features</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {project.features?.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-white/72">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#7dd3c7]" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="surface-card mt-6 p-6 md:p-8">
            <h2 className="mb-5 text-lg font-semibold tracking-tight text-[#f3efe6]">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech) => (
                <div key={tech.name} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <p className="text-sm text-[#f3efe6]">{tech.name}</p>
                  <p className="text-xs text-white/45">{tech.purpose}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
