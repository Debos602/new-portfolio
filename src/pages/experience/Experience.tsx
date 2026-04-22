import { BoltIcon, DbIcon, GearIcon } from "@/components/Icons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgShape from "@/assets/Background Wave Shape.png"

gsap.registerPlugin(ScrollTrigger);

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

const iconMap = {
  bolt: <BoltIcon />,
  db: <DbIcon />,
  gear: <GearIcon />,
};

const iconStyles = [
  { bg: "bg-amber-50",  border: "border-amber-200",  color: "text-amber-600"  },
  { bg: "bg-teal-50",   border: "border-teal-200",   color: "text-teal-600"   },
  { bg: "bg-indigo-50", border: "border-indigo-200", color: "text-indigo-500" },
];

export const Experience = () => {
  const sectionRef    = useRef(null);
  const headerRef     = useRef(null);
  // Per-row refs: metaRef, dotRef, cardRef, lineRef
  const rowRefs = useRef([]);   // rowRefs.current[idx] = { meta, dot, card, line }

  const setRowRef = (idx, key) => (el) => {
    if (!rowRefs.current[idx]) rowRefs.current[idx] = {};
    rowRefs.current[idx][key] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Header ─────────────────────────────────────────────────────
      const [hTitle, hPara] = headerRef.current.children;

      gsap.fromTo(
        hTitle,
        { opacity: 0, y: 48, skewY: 2 },
        {
          opacity: 1, y: 0, skewY: 0,
          duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        hPara,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.65, ease: "power2.out", delay: 0.18,
          scrollTrigger: { trigger: headerRef.current, start: "top 82%", once: true },
        }
      );

      // ── Timeline rows ──────────────────────────────────────────────
      rowRefs.current.forEach((refs, idx) => {
        if (!refs) return;
        const { meta, dot, card, line } = refs;
        const isEven = idx % 2 === 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: dot,
            start: "top 82%",
            once: true,
          },
        });

        // dot scales in first
        tl.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }
        );

        // line grows downward
        if (line) {
          tl.fromTo(
            line,
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, duration: 0.55, ease: "power2.out" },
            "-=0.15"
          );
        }

        // meta slides in from its side
        tl.fromTo(
          meta,
          { opacity: 0, x: isEven ? 28 : -28 },
          { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" },
          "-=0.4"
        );

        // card slides in from opposite side
        tl.fromTo(
          card,
          { opacity: 0, x: isEven ? -32 : 32, y: 10 },
          { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.45"
        );

        // tags stagger inside the card
        const tags = card?.querySelectorAll(".tag-item");
        if (tags?.length) {
          tl.fromTo(
            tags,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)", stagger: 0.05 },
            "-=0.25"
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center px-6 pt-[83px] pb-[120px] overflow-hidden bg-[#F4FAFF]"
      style={{ backgroundImage: `url('${bgShape}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-80px] top-[440px] w-[520px] h-[520px] rounded-full bg-[#006A71] opacity-[0.05] blur-[90px]" />
      <div className="pointer-events-none absolute right-[-60px] top-[820px] w-[420px] h-[420px] rounded-full bg-[#8E33E4] opacity-[0.05] blur-[90px]" />

      {/* Header */}
      <div ref={headerRef} className="text-center mb-[96px] max-w-[768px]">
        <h1
          className="text-[72px] font-bold leading-[1] tracking-[-3.6px] text-[#191C20] mb-[32px] font-heading"
        >
          Experience
        </h1>
        <p className="text-[20px] leading-[1.65] text-[#5A6275]">
          Orchestrating digital architecture through code. A professional timeline of
          building scalable systems and immersive user interfaces for global enterprises.
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full container mx-auto relative">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;

          const metaBlock = (align) => (
            <div
              ref={setRowRef(idx, "meta")}
              className={`pt-2.5 ${
                align === "right" ? "pr-9 text-right" : "pl-9 text-left"
              }`}
            >
              <p className="font-mono text-[#006A71] font-medium text-[14px] leading-[1.4] tracking-[1.4px]">
                {exp.period}
              </p>
              <p className="text-[24px] font-bold text-[#191C20] leading-[1.3] font-heading">
                {exp.role}
              </p>
              <p className="text-[18px] font-semibold text-[#8E33E4] leading-[1.5]">{exp.company}</p>
            </div>
          );

          const centerDot = (
            <div className="flex flex-col items-center">
              <div
                ref={setRowRef(idx, "dot")}
                className="w-3 h-3 rounded-full bg-teal-400 mt-3.5 z-10 shrink-0"
                style={{ border: "2.5px solid #fff", boxShadow: "0 0 0 2px #2dd4bf" }}
              />
              <div
                ref={setRowRef(idx, "line")}
                className="w-px flex-1 min-h-[160px]"
                style={{ background: "linear-gradient(to bottom, #99e6da 0%, transparent 100%)" }}
              />
            </div>
          );

          const cardBlock = (side) => (
            <div
              ref={setRowRef(idx, "card")}
              className={`pt-1 ${side === "right" ? "pl-9" : "pr-9"}`}
            >
              <div className="bg-white rounded-2xl border border-slate-100 p-[32px] shadow-sm">
                <div className="flex flex-col gap-[16px]">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex gap-[10px] items-start">
                      <div
                        className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 border
                          ${iconStyles[i].bg} ${iconStyles[i].border} ${iconStyles[i].color}`}
                      >
                        {iconMap[h.icon]}
                      </div>
                      <p className="text-[16px] leading-[1.6] font-normal text-slate-600">{h.text}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-[18px] pt-3.5 border-t border-slate-100">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-item text-[12px] leading-[1.3] font-mono font-normal text-[#5A6275] bg-[#E6ECF4] border border-slate-200 rounded-full px-[16px] py-[6px]"
                    > 
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          return (
            <div
              key={idx}
              className="grid items-center"
              style={{ gridTemplateColumns: "1fr 40px 1fr", }}
            >
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