import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "JAN 2023 — PRESENT",
    role: "Senior MERN Architect",
    company: "Nexus Core Solutions",
    highlights: [
      {
        icon: "bolt",
        text: "Lead developer for a high-traffic fintech dashboard using React, Redux Toolkit, and Node.js, servicing over 250k daily active users with sub-second response times.",
      },
      {
        icon: "db",
        text: "Optimized MongoDB aggregation pipelines and indexing strategies, reducing data fetch latency by 45% for historical data sets exceeding 1M+ active records.",
      },
      {
        icon: "gear",
        text: "Architected a modern microservices environment using Docker, Kubernetes, and AWS Lambda to successfully decouple a legacy PHP monolith.",
      },
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Docker"],
  },
];

const BoltIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const DbIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const GearIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

const iconConfig = [
  { icon: <BoltIcon />, bg: "bg-amber-50",  border: "border-amber-200",  color: "text-amber-600"  },
  { icon: <DbIcon />,   bg: "bg-teal-50",   border: "border-teal-200",   color: "text-teal-600"   },
  { icon: <GearIcon />, bg: "bg-indigo-50", border: "border-indigo-200", color: "text-indigo-500" },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".animate-in");
    items?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 120);
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center px-6 py-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #edf6fb 0%, #f7fbff 40%, #ffffff 100%)" }}
    >
      {/* ── Decorative gradient blob — top left ── */}
      <div
        className="pointer-events-none absolute -top-32 -left-40 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "linear-gradient(135deg, #006A71 0%, #8E33E4 100%)" }}
      />
      {/* ── Decorative gradient blob — bottom right ── */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full opacity-15 blur-3xl"
        style={{ background: "linear-gradient(135deg, #8E33E4 0%, #006A71 100%)" }}
      />
      {/* ── Decorative gradient pill — center top ── */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[2px] opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #006A71, #8E33E4, transparent)" }}
      />
      {/* ── Header ── */}
      <div className="animate-in text-center max-w-xl mb-16">
        <h1
          className="text-5xl font-bold tracking-tight text-gray-900 mb-5"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Experience
        </h1>
        <p className="text-sm leading-relaxed text-gray-500">
          Ã¢ rchestrating digital architecture through code. A professional timeline of
          building scalable systems and immersive user interfaces for global enterprises.
        </p>
      </div>

      {/* ── Timeline ── */}
      <div className="w-full max-w-3xl">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="grid items-start"
            style={{ gridTemplateColumns: "1fr 2px 1fr" }}
          >
            {/* Left — date / role / company */}
            <div className="animate-in pr-12 pt-2 text-right">
              <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 mb-2">
                {exp.period}
              </p>
              <p
                className="text-lg font-bold text-gray-900 mb-1.5 leading-snug"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {exp.role}
              </p>
              <p className="text-sm font-medium text-teal-500">{exp.company}</p>
            </div>

            {/* Center — vertical line + dot */}
            <div className="flex flex-col items-center">
              <div
                className="animate-in w-3 h-3 rounded-full bg-teal-400 mt-3 z-10 shrink-0"
                style={{ border: "2.5px solid #fff", boxShadow: "0 0 0 2px #2dd4bf" }}
              />
              <div
                className="w-px flex-1 min-h-48"
                style={{
                  background: "linear-gradient(to bottom, #99e6da 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Right — card */}
            <div className="animate-in pl-12 pt-1">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                {/* Highlights */}
                <div className="flex flex-col gap-4">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border
                          ${iconConfig[i].bg} ${iconConfig[i].border} ${iconConfig[i].color}`}
                      >
                        {iconConfig[i].icon}
                      </div>
                      <p className="text-xs leading-relaxed text-slate-600">{h.text}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-3 py-0.5 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};