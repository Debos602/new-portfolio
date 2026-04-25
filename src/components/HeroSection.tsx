import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import gsap from "gsap";
import codeEditorImg from "@/assets/code-editor.jpg";
import SkillsSection from "./SkillsSection";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const snippetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(
          headingRef.current?.querySelectorAll(".hero-line") || [],
          { opacity: 0, y: 60, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.8, stagger: 0.15 },
          "-=0.3"
        )
        .fromTo(subtextRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(
          imageRef.current,
          { opacity: 0, x: 60, rotateY: -10 },
          { opacity: 1, x: 0, rotateY: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          snippetRef.current,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4FAFF] overflow-x-hidden">

      {/* ── Ambient gradients ── */}
      {/* Gradient 1 — Cyan, scales with viewport */}
      <div className="absolute top-0 right-0 md:right-[200px] z-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px] rounded-full pointer-events-none bg-[#006874]/10 blur-[60px] sm:blur-[80px] md:blur-[100px]" />

      {/* Gradient 2 — Purple */}
      <div
        className="absolute top-16 left-0 md:left-[100px] z-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(126,63,242,0.05) 0%, rgba(126,63,242,0) 50%)" }}
      />

      {/* Gradient 3 — Teal */}
      <div
        className="absolute bottom-0 right-0 md:right-[488px] z-0 h-[200px] w-[200px] md:h-[600px] md:w-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,104,116,0.03) 0%, rgba(0,104,116,0) 50%)" }}
      />

      {/* Decorative circles — desktop only to prevent mobile overflow */}
      <div className="hidden lg:block absolute top-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#006874]" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.03]" />
      </div>

      {/* ── Main content wrapper ── */}
      <div className="relative container mx-auto z-10  px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-18 lg:pt-20 pb-10 sm:pb-14">
        {/* Two-column grid:
            • Mobile  (< 768px)  : 1 col, text → image stacked
            • Tablet  (768-1023) : 2 col, 55/45 split, tighter gap
            • Desktop (1024px+)  : 2 col, 50/50, original gap          */}
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] lg:grid-cols-2 gap-8 md:gap-6 lg:gap-12 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-[6px] rounded-full border border-[#006874]/10 bg-[#006874]/5 mb-5 sm:mb-6 md:mb-7 lg:mb-8 opacity-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#006874] animate-pulse flex-shrink-0" />
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold leading-[1.5] tracking-[1px] sm:tracking-[1.1px] uppercase text-[#006874] font-heading whitespace-nowrap">
                Open for Global Collaborations
              </span>
            </div>

            {/* Heading
                Mobile  : 2.5rem  (40px)
                sm      : 3.25rem (52px)
                Tablet  : 3.75rem (60px) — readable in narrow 2-col
                Desktop : 4.5rem  (72px) */}
            <h1
              ref={headingRef}
              className="font-bold text-5xl md:text-6xl leading-tight mb-4 text-[#191C1E]"
            >
              <span className="hero-line block">Building</span>
              <span className="hero-line block">Scalable</span>
              <span className="hero-line block bg-gradient-to-r from-[#006A71] to-[#7511C3] bg-clip-text text-transparent">Digital</span>
              <span className="hero-line block bg-gradient-to-r from-[#006A71] to-[#7511C3] bg-clip-text text-transparent">Experiences</span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtextRef}
              className="text-[#5A6275] text-[18px] leading-relaxed max-w-[672px] mb-16 opacity-0"
            >
              MERN Architect crafting high-performance full-stack applications with architectural
              precision and ethereal aesthetics for modern businesses.
            </p>

            {/* CTAs
                Mobile  : full-width, stacked
                sm+     : side-by-side, auto width                     */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto opacity-0">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm lg:text-base transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                View Portfolio <ArrowRight size={16} />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 rounded-full border border-border text-foreground font-medium text-sm lg:text-base transition-all duration-200 hover:bg-secondary">
                Download CV <Download size={16} />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Code editor image ──
              The floating snippet is absolutely positioned INSIDE the image
              container so it can never overflow the screen. On desktop we
              push it slightly outside with negative offsets (classic look). */}
          <div className="relative w-full">

            {/* Image card */}
            <div ref={imageRef} className="opacity-0 w-full">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-primary/10 border border-border/50">
                <img
                  src={codeEditorImg}
                  alt="Code editor showing a React component"
                  width={800}
                  height={640}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Floating snippet
                Mobile/Tablet : sits inside the image boundary (bottom-3 left-3)
                Desktop       : slight overhang (-bottom-6 -left-6) for flair  */}
            <div
              ref={snippetRef}
              className="absolute bottom-3 left-3 lg:-bottom-6 lg:-left-6 bg-card rounded-lg sm:rounded-xl shadow-lg border border-border/50 px-3 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-4 opacity-0"
            >
              <pre className="text-[9px] sm:text-[10px] lg:text-xs font-mono text-primary leading-relaxed">
                <span className="text-accent">const</span> alchemist = {"{"}{"\n"}
                {"  "}skill: <span className="text-accent">"Master"</span>,{"\n"}
                {"  "}focus: <span className="text-accent">"Clean Code"</span>{"\n"}
                {"}"};
              </pre>
            </div>
          </div>
        </div>

        {/* ── Stats bar ──
            Mobile  : 3 columns, centred, smaller type
            Tablet+ : row with increasing gap
            A divider line runs full width on all sizes                  */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 md:flex md:flex-row md:items-start gap-y-4 md:gap-x-10 lg:gap-x-16 mt-10 sm:mt-14 lg:mt-20 pt-8 sm:pt-10 border-t border-border/50"
        >
          <div className="text-center md:text-left">
            <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold">50+</div>
            <div className="stat-label text-[8px] sm:text-sm text-muted-foreground mt-0.5">Projects Done</div>
          </div>
          <div className="text-center md:text-left">
            <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold">12</div>
            <div className="stat-label text-[8px] sm:text-sm text-muted-foreground mt-0.5">Countries Served</div>
          </div>
          <div className="text-center md:text-left">
            <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold">6y+</div>
            <div className="stat-label text-[8px] sm:text-sm text-muted-foreground mt-0.5">Experience</div>
          </div>
        </div>

       <SkillsSection />
      </div>
    </section>
  );
};

export default HeroSection;