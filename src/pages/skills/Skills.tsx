import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const languages = [
  { name: "JavaScript (ES6+)", sub: "Advanced Core", pct: 95, color: "from-[#006A71] to-[#8FF5FF]" },
  { name: "TypeScript", sub: "Production Ready", pct: 90, color: "from-[#006A71] to-[#8FF5FF]" },
  { name: "Python", sub: "Scripting & ML", pct: 75, color: "from-[#006A71] to-[#8FF5FF]" },
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

const icons = [
  // Icon 1 - Layers (green)
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19.05L0 12.05L1.65 10.8L9 16.5L16.35 10.8L18 12.05L9 19.05V19.05M9 14L0 7L9 0L18 7L9 14V14M9 7V7V7V7V7V7M9 11.45L14.75 7L9 2.55L3.25 7L9 11.45V11.45" fill="#006A71"/>
  </svg>,
  // Icon 2 - Server (purple)
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 3C4.08333 3 3.72917 3.14583 3.4375 3.4375C3.14583 3.72917 3 4.08333 3 4.5C3 4.91667 3.14583 5.27083 3.4375 5.5625C3.72917 5.85417 4.08333 6 4.5 6C4.91667 6 5.27083 5.85417 5.5625 5.5625C5.85417 5.27083 6 4.91667 6 4.5C6 4.08333 5.85417 3.72917 5.5625 3.4375C5.27083 3.14583 4.91667 3 4.5 3ZM4.5 13C4.08333 13 3.72917 13.1458 3.4375 13.4375C3.14583 13.7292 3 14.0833 3 14.5C3 14.9167 3.14583 15.2708 3.4375 15.5625C3.72917 15.8542 4.08333 16 4.5 16C4.91667 16 5.27083 15.8542 5.5625 15.5625C5.85417 15.2708 6 14.9167 6 14.5C6 14.0833 5.85417 13.7292 5.5625 13.4375C5.27083 13.1458 4.91667 13 4.5 13ZM1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V8C18 8.28333 17.9042 8.52083 17.7125 8.7125C17.5208 8.90417 17.2833 9 17 9H1C0.716667 9 0.479167 8.90417 0.2875 8.7125C0.0958333 8.52083 0 8.28333 0 8V1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0ZM2 2V7H16V2H2ZM1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11V18C18 18.2833 17.9042 18.5208 17.7125 18.7125C17.5208 18.9042 17.2833 19 17 19H1C0.716667 19 0.479167 18.9042 0.2875 18.7125C0.0958333 18.5208 0 18.2833 0 18V11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10ZM2 12V17H16V12H2ZM2 2V7V2ZM2 12V17V12Z" fill="#7511C3"/>
  </svg>,
  // Icon 3 - Diamond (blue)
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 13L9 11L11 9L13 11L11 13ZM8.875 7.125L6.375 4.625L11 0L15.625 4.625L13.125 7.125L11 5L8.875 7.125ZM4.625 15.625L0 11L4.625 6.375L7.125 8.875L5 11L7.125 13.125L4.625 15.625ZM17.375 15.625L14.875 13.125L17 11L14.875 8.875L17.375 6.375L22 11L17.375 15.625ZM11 22L6.375 17.375L8.875 14.875L11 17L13.125 14.875L15.625 17.375L11 22Z" fill="#005DB7"/>
  </svg>,
  // Icon 4 - Grid (green)
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V12C18 12.55 17.8042 13.0208 17.4125 13.4125C17.0208 13.8042 16.55 14 16 14H2C1.45 14 0.979167 13.8042 0.5875 13.4125C0.195833 13.0208 0 12.55 0 12ZM7.325 6H16V2H7.325V6ZM12.675 12H16V8H12.675V12ZM7.325 12H10.675V8H7.325V12ZM2 12H5.325V2H2V12Z" fill="#006A71"/>
  </svg>,
];

const barColors = ["bg-[#006A71]", "bg-[#7511C3]", "bg-[#005DB7]"];

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
      className="bg-[#F4FAFF] pt-[59px]"
    >
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div ref={headerLineRef} className="h-[2px] w-12 bg-[#006A71]" />
          <span
            ref={headerBadgeRef}
            className="text-[12px] font-bold leading-[1.3] tracking-[1.2px] uppercase text-[#006A71] font-heading"
          >
            Expertise &amp; Masteries
          </span>
        </div>

        <h1
          ref={titleRef}
          className="font-bold text-5xl md:text-6xl leading-tight mb-4 text-[#191C1E]"
        >
          Technical <span className="bg-gradient-to-r from-[#006A71] to-[#7511C3] bg-clip-text text-transparent">Arcana.</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-[#5A6275] text-[18px] leading-relaxed max-w-[672px] mb-16"
        >
          Crafting scalable, high-performance digital solutions across the full
          stack. Orchestrating logic into seamless user experiences with modern
          architectures.
        </p>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Languages */}
          <div ref={card1Ref} className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-[32px]">
              <div className="flex items-center gap-[12px] text-[20px] font-bold text-[#191C1E] leading-[1.4] font-heading">
                <span className="text-lg font-mono"><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L0 6L6 0L7.425 1.425L2.825 6.025L7.4 10.6L6 12ZM14 12L12.575 10.575L17.175 5.975L12.6 1.4L14 0L20 6L14 12Z" fill="#006A71" />
                </svg>
                </span>
                Languages
              </div>
              <span className="text-[10px] font-normal text-[#70797B] font-liberation bg-[#EEF4F6] px-[8px] py-[4px] rounded-[8px]">01</span>
            </div>

            {languages.map((lang, i) => (
              <div key={lang.name} className="mb-5 last:mb-0">
                <div className="flex justify-between items-end mb-1">
                  <div className="mb-[8px]">
                    <p className="text-[13px] font-bold text-[#191C1E] leading-[1.4] font-heading">{lang.name}</p>
                    <p className="text-[10px] font-medium uppercase text-[#3F484A]">{lang.sub}</p>
                  </div>
                  <span className="text-[14px] font-bold leading-[1.4] text-[#006A71] font-liberation">{lang.pct}%</span>
                </div>
                <div className="h-[5px] bg-slate-100 rounded-full overflow-hidden">
                  <div
                    ref={(el) => (progressBarsRef.current[i] = el)}
                    data-pct={lang.pct}
                    className={`h-[8px] rounded-full bg-gradient-to-r ${lang.color}`}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Frameworks */}
          <div ref={card2Ref} className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 leading-[1.4] text-[20px] font-bold text-[#191C1E] font-heading">
                <span><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 23C5.16667 23 4.45833 22.7083 3.875 22.125C3.29167 21.5417 3 20.8333 3 20C3 19.1667 3.29167 18.4583 3.875 17.875C4.45833 17.2917 5.16667 17 6 17C6.23333 17 6.45 17.025 6.65 17.075C6.85 17.125 7.04167 17.1917 7.225 17.275L8.65 15.5C8.18333 14.9833 7.85833 14.4 7.675 13.75C7.49167 13.1 7.45 12.45 7.55 11.8L5.525 11.125C5.24167 11.5417 4.88333 11.875 4.45 12.125C4.01667 12.375 3.53333 12.5 3 12.5C2.16667 12.5 1.45833 12.2083 0.875 11.625C0.291667 11.0417 0 10.3333 0 9.5C0 8.66667 0.291667 7.95833 0.875 7.375C1.45833 6.79167 2.16667 6.5 3 6.5C3.83333 6.5 4.54167 6.79167 5.125 7.375C5.70833 7.95833 6 8.66667 6 9.5C6 9.53333 6 9.56667 6 9.6C6 9.63333 6 9.66667 6 9.7L8.025 10.4C8.35833 9.8 8.80417 9.29167 9.3625 8.875C9.92083 8.45833 10.55 8.19167 11.25 8.075V5.9C10.6 5.71667 10.0625 5.3625 9.6375 4.8375C9.2125 4.3125 9 3.7 9 3C9 2.16667 9.29167 1.45833 9.875 0.875C10.4583 0.291667 11.1667 0 12 0C12.8333 0 13.5417 0.291667 14.125 0.875C14.7083 1.45833 15 2.16667 15 3C15 3.7 14.7833 4.3125 14.35 4.8375C13.9167 5.3625 13.3833 5.71667 12.75 5.9V8.075C13.45 8.19167 14.0792 8.45833 14.6375 8.875C15.1958 9.29167 15.6417 9.8 15.975 10.4L18 9.7C18 9.66667 18 9.63333 18 9.6C18 9.56667 18 9.53333 18 9.5C18 8.66667 18.2917 7.95833 18.875 7.375C19.4583 6.79167 20.1667 6.5 21 6.5C21.8333 6.5 22.5417 6.79167 23.125 7.375C23.7083 7.95833 24 8.66667 24 9.5C24 10.3333 23.7083 11.0417 23.125 11.625C22.5417 12.2083 21.8333 12.5 21 12.5C20.4667 12.5 19.9792 12.375 19.5375 12.125C19.0958 11.875 18.7417 11.5417 18.475 11.125L16.45 11.8C16.55 12.45 16.5083 13.0958 16.325 13.7375C16.1417 14.3792 15.8167 14.9667 15.35 15.5L16.775 17.25C16.9583 17.1667 17.15 17.1042 17.35 17.0625C17.55 17.0208 17.7667 17 18 17C18.8333 17 19.5417 17.2917 20.125 17.875C20.7083 18.4583 21 19.1667 21 20C21 20.8333 20.7083 21.5417 20.125 22.125C19.5417 22.7083 18.8333 23 18 23C17.1667 23 16.4583 22.7083 15.875 22.125C15.2917 21.5417 15 20.8333 15 20C15 19.6667 15.0542 19.3458 15.1625 19.0375C15.2708 18.7292 15.4167 18.45 15.6 18.2L14.175 16.425C13.4917 16.8083 12.7625 17 11.9875 17C11.2125 17 10.4833 16.8083 9.8 16.425L8.4 18.2C8.58333 18.45 8.72917 18.7292 8.8375 19.0375C8.94583 19.3458 9 19.6667 9 20C9 20.8333 8.70833 21.5417 8.125 22.125C7.54167 22.7083 6.83333 23 6 23ZM3 10.5C3.28333 10.5 3.52083 10.4042 3.7125 10.2125C3.90417 10.0208 4 9.78333 4 9.5C4 9.21667 3.90417 8.97917 3.7125 8.7875C3.52083 8.59583 3.28333 8.5 3 8.5C2.71667 8.5 2.47917 8.59583 2.2875 8.7875C2.09583 8.97917 2 9.21667 2 9.5C2 9.78333 2.09583 10.0208 2.2875 10.2125C2.47917 10.4042 2.71667 10.5 3 10.5ZM6 21C6.28333 21 6.52083 20.9042 6.7125 20.7125C6.90417 20.5208 7 20.2833 7 20C7 19.7167 6.90417 19.4792 6.7125 19.2875C6.52083 19.0958 6.28333 19 6 19C5.71667 19 5.47917 19.0958 5.2875 19.2875C5.09583 19.4792 5 19.7167 5 20C5 20.2833 5.09583 20.5208 5.2875 20.7125C5.47917 20.9042 5.71667 21 6 21ZM12 4C12.2833 4 12.5208 3.90417 12.7125 3.7125C12.9042 3.52083 13 3.28333 13 3C13 2.71667 12.9042 2.47917 12.7125 2.2875C12.5208 2.09583 12.2833 2 12 2C11.7167 2 11.4792 2.09583 11.2875 2.2875C11.0958 2.47917 11 2.71667 11 3C11 3.28333 11.0958 3.52083 11.2875 3.7125C11.4792 3.90417 11.7167 4 12 4ZM12 15C12.7 15 13.2917 14.7583 13.775 14.275C14.2583 13.7917 14.5 13.2 14.5 12.5C14.5 11.8 14.2583 11.2083 13.775 10.725C13.2917 10.2417 12.7 10 12 10C11.3 10 10.7083 10.2417 10.225 10.725C9.74167 11.2083 9.5 11.8 9.5 12.5C9.5 13.2 9.74167 13.7917 10.225 14.275C10.7083 14.7583 11.3 15 12 15ZM18 21C18.2833 21 18.5208 20.9042 18.7125 20.7125C18.9042 20.5208 19 20.2833 19 20C19 19.7167 18.9042 19.4792 18.7125 19.2875C18.5208 19.0958 18.2833 19 18 19C17.7167 19 17.4792 19.0958 17.2875 19.2875C17.0958 19.4792 17 19.7167 17 20C17 20.2833 17.0958 20.5208 17.2875 20.7125C17.4792 20.9042 17.7167 21 18 21ZM21 10.5C21.2833 10.5 21.5208 10.4042 21.7125 10.2125C21.9042 10.0208 22 9.78333 22 9.5C22 9.21667 21.9042 8.97917 21.7125 8.7875C21.5208 8.59583 21.2833 8.5 21 8.5C20.7167 8.5 20.4792 8.59583 20.2875 8.7875C20.0958 8.97917 20 9.21667 20 9.5C20 9.78333 20.0958 10.0208 20.2875 10.2125C20.4792 10.4042 20.7167 10.5 21 10.5Z" fill="#7511C3"/>
              </svg>
              </span> Frameworks
              </div>
              <span className="text-[10px] font-normal text-[#70797B] font-liberation leading-[1.5] tracking-[1] bg-[#EEF4F6] px-[8px] py-[4px] rounded-[8px]">02</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
            {frameworks.map((fw, index) => (
          <div key={fw.name} className="border border-slate-200 rounded-[16px] p-4 flex flex-col gap-2 transition-shadow duration-200 hover:shadow-md">
            <div className="flex gap-2">
              {icons[index % icons.length]}  {/* ← cycles through all 4 icons */}
            </div>
            <p className="text-[14px] font-bold text-[#191C1E] leading-[1.4] mb-2">{fw.name}</p>
           <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-[3px] rounded-full ${
                    i <= fw.bars ? barColors[index % barColors.length] : "bg-slate-200"
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
              <span className="text-[10px] font-normal text-[#70797B] font-liberation leading-[1.5] tracking-[1] bg-[#EEF4F6] px-[8px] py-[4px] rounded-[8px]">03</span>
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
                        className={`w-5 h-1 rounded-full ${i <= db.filled ? db.barColor : "bg-slate-200"
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
      </div>
    </section>
  );
};