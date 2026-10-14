"use client";
import { skillsRow1, skillsRow2, skillsRow3 } from "./data";

type Tool = { name: string; icon: string };

const rows: { items: Tool[]; direction: "ltr" | "rtl"; duration: number }[] = [
  { items: skillsRow1, direction: "ltr", duration: 45 }, // left -> right
  { items: skillsRow2, direction: "rtl", duration: 50 }, // right -> left
  { items: skillsRow3, direction: "ltr", duration: 55 }, // left -> right
];

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: Tool[];
  direction: "ltr" | "rtl";
  duration: number;
}) {
  // Base set repeated twice so the row is always wider than the screen,
  // then rendered twice more for the seamless -50% loop.
  const base = [...items, ...items];
  const loop = [...base, ...base];

  return (
    <div className="marquee-mask overflow-hidden">
      <ul
        className={`marquee-row ${direction === "ltr" ? "marquee-ltr" : "marquee-rtl"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((tool, i) => (
          <li
            key={`${tool.name}-${i}`}
            aria-hidden={i >= items.length}
            className="mx-3 flex w-16 shrink-0 flex-col items-center gap-1.5 md:mx-4 md:w-20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.icon}
              alt={i < items.length ? tool.name : ""}
              width={32}
              height={32}
              className="h-7 w-7 object-contain md:h-8 md:w-8"
            />
            <span className="w-full truncate text-center text-[10px] font-medium text-[#101051]/60">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="relative py-8 md:py-10">
      <div className="page-shell">
        <p className="mb-5 text-center font-mono text-[11.5px] uppercase tracking-[0.2em] text-[#101051]/50">
          Tools &amp; technologies I ship with
        </p>
      </div>

      <div className="flex flex-col gap-5 py-6">
        <div className="page-shell flex flex-col gap-5">
          {rows.map((row, idx) => (
            <MarqueeRow key={idx} {...row} />
          ))}
        </div>
      </div>
    </section>
  );
}