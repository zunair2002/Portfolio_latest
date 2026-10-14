"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Clock, Maximize2, X } from "lucide-react";
import ReflectBackground from "../wave";
import { demoprojects } from "../data";

export default function ProjectDetail() {
  const { id } = useParams();
  const index = demoprojects.findIndex((p) => p.id === Number(id));
  const project = demoprojects[index];

  const [active, setActive] = useState<number | null>(null);

  // Lightbox: Esc to close + lock body scroll
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

  const Background = () => (
    <>
      <div className="fixed inset-0 -z-10 bg-[#F7F6F2]" />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ReflectBackground />
      </div>
    </>
  );

  if (!project) {
    return (
      <>
        <Background />
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-4">
          <p className="text-neutral-600">Project not found.</p>
          <Link href="/#projects" className="btn-secondary !min-h-10 !px-4 text-[13px]">
            <ArrowLeft size={15} />
            Back to projects
          </Link>
        </div>
      </>
    );
  }

  const screenshots = project.screenshots ?? [];

  return (
    <>
      <Background />

      <main className="relative z-10 min-h-screen pb-24">
        <div className="page-shell pt-10">
          <Link href="/#projects" className="btn-secondary !min-h-10 !px-4 text-[13px]">
            <ArrowLeft size={15} />
            Back to projects
          </Link>

          {/* Project overview and tech stack */}
          <header className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="section-kicker">Case study</p>
              <h1 className="section-title">{project.title}</h1>
              <div className="mt-4 flex items-center gap-4 whitespace-nowrap text-sm text-neutral-600">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#32de84]" />
                  {project.status}
                </span>
                <span aria-hidden="true" className="h-4 w-px bg-neutral-900/15" />
                <span className="inline-flex items-center gap-2">
                  <Clock size={14} className="text-neutral-500" />
                  {project.duration}
                </span>
              </div>
              <p className="section-copy">{project.overview}</p>
            </div>

            <section className="p-4 md:p-5">
              <h2 className="mb-4 text-base font-semibold tracking-tight text-neutral-900">Tech stack</h2>
              <ul className="divide-y divide-neutral-900/10">
                {project.techStack?.map((tech) => (
                  <li key={tech.name} className="flex items-baseline justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                    <span className="text-[13px] font-medium text-neutral-900">{tech.name}</span>
                    <span className="text-right text-[11px] text-neutral-500">{tech.purpose}</span>
                  </li>
                ))}
              </ul>
            </section>
          </header>

          {/* Screenshots */}
          <section className="mt-14">
            <div className="mb-5 flex items-baseline justify-between">
              <h2 className="text-lg font-semibold tracking-tight text-neutral-900">Screenshots</h2>
              {screenshots.length > 0 && (
                <span className="text-xs text-neutral-500">Click an image to enlarge</span>
              )}
            </div>

            {screenshots.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {screenshots.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Enlarge screenshot ${i + 1}`}
                    className="group block w-full overflow-hidden rounded-2xl border border-neutral-900/10 bg-white text-left shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_20px_44px_-14px_rgba(0,0,0,0.26)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    {/* Window bar */}
                    <div className="flex items-center gap-1.5 border-b border-neutral-900/10 bg-neutral-100/80 px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="ml-auto text-[11px] text-neutral-400">
                        {i + 1} / {screenshots.length}
                      </span>
                    </div>

                    {/* Fixed ratio frame, image fills it completely */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-50">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-fill"
                      />
                      <span className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-800 opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Maximize2 size={14} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="surface-card p-12 text-center text-sm text-neutral-500">
                Screenshots coming soon
              </div>
            )}
          </section>

          {/* Key features timeline */}
         <section className="mt-14">
  <h2 className="mb-6 text-lg font-semibold tracking-tight text-neutral-900">
    Key features
  </h2>

  <ul className="flex flex-col gap-4">
    {project.features?.map((feature) => (
      <li
        key={feature}
        className="relative border-b border-[#101051]/10 pb-3 pl-9"
      >
        <span
          aria-hidden="true"
          className="absolute left-0 top-1 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#32de84]/20 text-[#16884e]"
        >
          <Check size={11} strokeWidth={3} />
        </span>

        <div className="bg-transparent py-1 text-sm leading-6 text-neutral-700">
          {feature}
        </div>
      </li>
    ))}
  </ul>
</section>

        </div>
      </main>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
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
            src={screenshots[active]}
            alt={`${project.title} screenshot ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}