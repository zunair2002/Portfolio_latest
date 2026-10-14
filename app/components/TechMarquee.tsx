"use client";
import { skillsRow1, skillsRow2, skillsRow3 } from "./data";

const tools = [...skillsRow2, ...skillsRow1, ...skillsRow3];

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="relative py-8 md:py-10">
      <div className="page-shell">
        <p className="mb-5 text-center font-mono text-[11.5px] uppercase tracking-[0.2em] text-[#101051]/50">
          Tools &amp; technologies I ship with
        </p>
      </div>

      <div className="marquee-mask overflow-hidden border-y border-[#101051]/[0.08] bg-white/50 py-5 backdrop-blur-sm">
        <ul className="marquee-track">
          {[...tools, ...tools].map((tool, i) => (
            <li
              key={`${tool.name}-${i}`}
              aria-hidden={i >= tools.length}
              className="mx-3 flex shrink-0 items-center gap-2.5 rounded-full border border-[#101051]/[0.08] bg-white px-4 py-2 text-[14px] font-medium text-[#101051]/85 shadow-[0_4px_14px_-8px_rgba(16,16,81,0.25)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tool.icon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
