import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const languages = [
  { name: "JavaScript (ES6+)", sub: "Advanced Core", pct: 95, color: "from-teal-500 to-emerald-400" },
  { name: "TypeScript", sub: "Production Ready", pct: 90, color: "from-teal-500 to-emerald-400" },
  { name: "Python", sub: "Scripting & ML", pct: 75, color: "from-cyan-600 to-cyan-400" },
];

const frameworks = [
  { name: "React.js", color: "bg-blue-500", bars: 4 },
  { name: "Node.js", color: "bg-emerald-500", bars: 3 },
  { name: "Express.js", color: "bg-red-500", bars: 4 },
  { name: "Next.js", color: "bg-amber-500", bars: 2 },
];

const persistence = [
  { name: "MongoDB", icon: "🍃", level: "Expert", filled: 5, badgeColor: "bg-emerald-100 text-emerald-700", barColor: "bg-emerald-500" },
  { name: "PostgreSQL", icon: "🐘", level: "Proficient", filled: 4, badgeColor: "bg-violet-100 text-violet-700", barColor: "bg-violet-500" },
  { name: "Redis", icon: "🔴", level: "Mid-Level", filled: 3, badgeColor: "bg-blue-100 text-blue-700", barColor: "bg-blue-500" },
];

const devOps = [
  { label: "Docker", dot: "bg-emerald-500" },
  { label: "Kubernetes", dot: "bg-blue-500" },
  { label: "AWS (EC2/S3/Lambda)", dot: "bg-amber-500" },
  { label: "GitHub Actions", dot: "bg-violet-500" },
  { label: "Jest / Cypress", dot: "bg-red-500" },
  { label: "Vercel", dot: "bg-slate-900" },
  { label: "Postman", dot: "bg-slate-400" },
];

const stats = [
  { label: "Code Quality", val: "A+" },
  { label: "Commits/Year", val: "2.4k" },
  { label: "Projects", val: "42" },
  { label: "Uptime", val: "99.9%" },
];

export const Skills = () => {
  const sectionRef = useRef(null);
  const headerLineRef = useRef(null);
  const headerBadgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const statsCardRef = useRef(null);
  const devopsCardRef = useRef(null);
  const progressBarsRef = useRef([]);
  const devopsTagsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header reveal ──────────────────────────────────────────────
      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      headerTL
        .fromTo(
          headerLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(
          headerBadgeRef.current,
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.7, ease: "power3.out" },
          "-=0.1"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

      // ── Cards stagger (top row) ─────────────────────────────────────
      const topCards = [card1Ref.current, card2Ref.current, card3Ref.current];
      gsap.fromTo(
        topCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // ── Language progress bars ──────────────────────────────────────
      progressBarsRef.current.forEach((bar) => {
        if (!bar) return;
        const targetW = bar.dataset.pct + "%";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetW,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      // ── Bottom row cards ────────────────────────────────────────────
      gsap.fromTo(
        [statsCardRef.current, devopsCardRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsCardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // ── Stats counter pop ───────────────────────────────────────────
      statsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.6 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: statsCardRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // ── DevOps tags stagger ─────────────────────────────────────────
      gsap.fromTo(
        devopsTagsRef.current.filter(Boolean),
        { opacity: 0, scale: 0.8, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.5)",
          stagger: 0.06,
          scrollTrigger: {
            trigger: devopsCardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container bg-slate-50"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div ref={headerLineRef} className="h-px w-10 bg-slate-400" />
        <span
          ref={headerBadgeRef}
          className="text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-500"
        >
          Expertise &amp; Masteries
        </span>
      </div>

      <h1
        ref={titleRef}
        className="font-extrabold text-5xl md:text-6xl leading-tight mb-5 text-slate-900"
      >
        Technical <span className="text-teal-600">Arcana.</span>
      </h1>

      <p
        ref={subtitleRef}
        className="text-slate-500 text-[15px] leading-relaxed max-w-md mb-12"
      >
        Crafting scalable, high-performance digital solutions across the full
        stack. Orchestrating logic into seamless user experiences with modern
        architectures.
      </p>

      {/* Top row — 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Languages */}
        <div ref={card1Ref} className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[15px] font-semibold text-slate-900">
              <span className="text-lg font-mono">{"</>"}</span>
              Languages
            </div>
            <span className="text-[11px] font-semibold text-slate-400">01</span>
          </div>

          {languages.map((lang, i) => (
            <div key={lang.name} className="mb-5 last:mb-0">
              <div className="flex justify-between items-end mb-1">
                <div>
                  <p className="text-[13px] font-semibold text-slate-900">{lang.name}</p>
                  <p className="text-[10px] tracking-widest uppercase text-slate-400">{lang.sub}</p>
                </div>
                <span className="text-[12px] font-semibold text-slate-500">{lang.pct}%</span>
              </div>
              <div className="h-[5px] bg-slate-100 rounded-full overflow-hidden">
                <div
                  ref={(el) => (progressBarsRef.current[i] = el)}
                  data-pct={lang.pct}
                  className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks */}
        <div ref={card2Ref} className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[15px] font-semibold text-slate-900">
              <span>✦</span> Frameworks
            </div>
            <span className="text-[11px] font-semibold text-slate-400">02</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {frameworks.map((fw) => (
              <div
                key={fw.name}
                className="border border-slate-200 rounded-xl p-3.5 flex flex-col gap-2 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-[3px] ${fw.color}`}
                      style={{ opacity: i === 0 ? 1 : i === 1 ? 0.5 : 0.25 }}
                    />
                  ))}
                </div>
                <p className="text-[13px] font-semibold text-slate-900">{fw.name}</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`flex-1 h-[3px] rounded-full ${
                        i <= fw.bars ? fw.color : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Persistence */}
        <div ref={card3Ref} className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[15px] font-semibold text-slate-900">
              <span>🗄</span> Persistence
            </div>
            <span className="text-[11px] font-semibold text-slate-400">03</span>
          </div>

          {persistence.map((db) => (
            <div key={db.name} className="flex items-center gap-3 mb-4 last:mb-0">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm flex-shrink-0">
                {db.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[13px] font-semibold text-slate-900">{db.name}</span>
                  <span
                    className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded ${db.badgeColor}`}
                  >
                    {db.level}
                  </span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-5 h-1 rounded-full ${
                        i <= db.filled ? db.barColor : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stats dark card */}
        <div ref={statsCardRef} className="bg-[#0f1e2e] rounded-2xl p-6 relative overflow-hidden">
          <svg
            className="absolute right-0 bottom-0 w-28 h-24 opacity-10"
            viewBox="0 0 100 80"
            fill="none"
          >
            <polyline
              points="0,70 20,50 40,55 60,25 80,30 100,10"
              stroke="#22d3a0"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="grid grid-cols-2 gap-6 relative z-10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                ref={(el) => (statsRef.current[i] = el)}
              >
                <p className="text-[9px] tracking-[0.12em] uppercase text-slate-400 mb-1">
                  {s.label}
                </p>
                <p className="text-3xl font-extrabold text-white leading-none">{s.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div ref={devopsCardRef} className="bg-white rounded-2xl border border-slate-200 p-6 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[15px] font-semibold text-slate-900">
              <span>🔧</span> DevOps &amp; Workflow
            </div>
            <span className="text-[11px] font-semibold text-slate-400">04</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {devOps.map((t, i) => (
              <div
                key={t.label}
                ref={(el) => (devopsTagsRef.current[i] = el)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-slate-700 border border-slate-200 rounded-full px-3.5 py-1.5 bg-slate-50 hover:border-slate-400 hover:bg-white transition-all duration-200 cursor-default"
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${t.dot}`} />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};