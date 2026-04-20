import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "Jan 2023 — Present",
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
  {
    period: "Mar 2021 — Dec 2022",
    role: "Full Stack Developer",
    company: "Ether Media Group",
    highlights: [
      {
        icon: "bolt",
        text: "Built and maintained 15+ pixel-perfect landing pages and client-facing React applications, focusing on performance and SEO optimization.",
      },
      {
        icon: "db",
        text: "Implemented robust Auth0 and JWT-based authentication flows for enterprise-level security across the company's internal portal.",
      },
      {
        icon: "gear",
        text: "Integrated third-party REST APIs for multi-gateway payment processing and automated lifecycle email marketing systems.",
      },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    period: "Jun 2019 — Feb 2021",
    role: "Junior Web Developer",
    company: "Static Studio Co.",
    highlights: [
      {
        icon: "bolt",
        text: "Collaborated closely with designers to translate complex Figma design systems into scalable and reusable component libraries using Styled Components.",
      },
      {
        icon: "db",
        text: "Improved Google Lighthouse performance scores from an average of 65 to 98 across the company's client portfolio through lazy loading and asset optimization.",
      },
    ],
    tags: ["HTML/CSS", "JavaScript", "Figma", "GSAP"],
  },
];

const BoltIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const DbIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const GearIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

const iconMap = {
  bolt: <BoltIcon />,
  db: <DbIcon />,
  gear: <GearIcon />,
};

const iconStyles = [
  { bg: "bg-amber-50", border: "border-amber-200", color: "text-amber-600" },
  { bg: "bg-teal-50",  border: "border-teal-200",  color: "text-teal-600"  },
  { bg: "bg-indigo-50",border: "border-indigo-200",color: "text-indigo-500"},
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".animate-in");
    items?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 130);
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center px-6 pt-[80px] pb-[120px] overflow-hidden bg-[#f8fbfc]"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-80px] top-[440px] w-[520px] h-[520px] rounded-full bg-[#006A71] opacity-[0.05] blur-[90px]" />
      <div className="pointer-events-none absolute right-[-60px] top-[820px] w-[420px] h-[420px] rounded-full bg-[#8E33E4] opacity-[0.05] blur-[90px]" />

      {/* Header */}
      <div className="animate-in text-center max-width-[520px] max-w-xl mb-[88px]">
        <h1
          className="text-[72px] font-bold leading-[1] tracking-[-3px] text-[#191C20] mb-[28px]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Experience
        </h1>
        <p className="text-[17px] leading-[1.65] text-[#5A6275]">
          Orchestrating digital architecture through code. A professional timeline of
          building scalable systems and immersive user interfaces for global enterprises.
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-[840px]">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;

          const metaBlock = (align: "left" | "right") => (
            <div
              className={`animate-in pt-2.5 ${
                align === "right" ? "pr-9 text-right" : "pl-9 text-left"
              }`}
            >
              <p className="font-mono text-[#006A71] font-medium text-[14px] leading-[1.4] tracking-[1.4px]">
                {exp.period}
              </p>
              <p
                className="text-[24px] font-bold text-[#191C20] leading-[1.3]"   
              >
                {exp.role}
              </p>
              <p className="text-[18px] font-semibold text-[#8E33E4] leading-[1.5]">{exp.company}</p>
            </div>
          );

          const centerDot = (
            <div className="flex flex-col items-center">
              <div
                className="animate-in w-3 h-3 rounded-full bg-teal-400 mt-3.5 z-10 shrink-0"
                style={{ border: "2.5px solid #fff", boxShadow: "0 0 0 2px #2dd4bf" }}
              />
              <div
                className="w-px flex-1 min-h-[160px]"
                style={{ background: "linear-gradient(to bottom, #99e6da 0%, transparent 100%)" }}
              />
            </div>
          );

          const cardBlock = (side: "left" | "right") => (
            <div className={`animate-in pt-1 ${side === "right" ? "pl-9" : "pr-9"}`}>
              <div className="bg-white rounded-2xl border border-slate-100 p-[22px] shadow-sm">
                <div className="flex flex-col gap-[14px]">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex gap-[10px] items-start">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border
                          ${iconStyles[i].bg} ${iconStyles[i].border} ${iconStyles[i].color}`}
                      >
                        {iconMap[h.icon as keyof typeof iconMap]}
                      </div>
                      <p className="text-[11.5px] leading-relaxed text-slate-600">{h.text}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-[18px] pt-3.5 border-t border-slate-100">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-0.5 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          return (
            <div key={idx} className="grid items-center" style={{ gridTemplateColumns: "1fr 40px 1fr" }}>
              {isEven ? (
                <>
                  {metaBlock("right")}
                  {centerDot}
                  {cardBlock("right")}
                </>
              ) : (
                <>
                  {cardBlock("left")}
                  {centerDot}
                  {metaBlock("left")}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};