import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import gsap from "gsap";
import codeEditorImg from "@/assets/code-editor.jpg";

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
    <section ref={sectionRef} className="bg-[#F4FAFF]">

      {/* Gradient 1 — Cyan #00EEFC (8% → 0%) */}
      <div className="relative container flex items-center pt-5 md:pt-20 overflow-hidden">
        <div
          className="absolute top-0 right-[200px] z-0 h-[600px] w-[600px] rounded-full pointer-events-none bg-[#006874]/10 blur-[100px]"
          
        />

        {/* Gradient 2 — Purple #7E3FF2 (5% → 0%) */}
        <div
          className="absolute top-20 left-[100px] z-0 h-[600px] w-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(126,63,242,0.05) 0%, rgba(126,63,242,0) 50%)",
          }}
        />

        {/* Gradient 3 — Teal #006874 (3% → 0%) */}
        <div
          className="absolute bottom-0 right-[488px] z-0 h-[600px] w-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,104,116,0.03) 0%, rgba(0,104,116,0) 50%)",
          }}
        />

        {/* Subtle background shapes */}
        <div className="absolute top-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#006874]" />
          <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.03]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div
                ref={badgeRef}
                className="inline-flex items-center gap-[12px] px-[16px] py-[6px] rounded-full border border-[#006874]/10 bg-[#006874]/5 mb-8 opacity-0"
              >
                <span className="w-[8px] h-[8px] rounded-full bg-[#006874] animate-pulse" />
                <span className="text-[11px] font-bold leading-[1.5] tracking-[1.1px] uppercase text-[#006874] font-heading">
                  Open for Global Collaborations
                </span>
              </div>

              <h1
                ref={headingRef}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-6"
              >
                <span className="hero-line block text-foreground">Building</span>
                <span className="hero-line block text-foreground">Scalable</span>
                <span className="hero-line block text-gradient">Digital</span>
                <span className="hero-line block text-gradient">Experiences</span>
              </h1>

              <p
                ref={subtextRef}
                className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8 opacity-0"
              >
                MERN Architect crafting high-performance full-stack applications with architectural
                precision and ethereal aesthetics for modern businesses.
              </p>

              <div ref={ctaRef} className="flex flex-wrap items-center gap-4 opacity-0">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
                >
                  View Portfolio <ArrowRight size={18} />
                </Link>
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium transition-all duration-200 hover:bg-secondary">
                  Download CV <Download size={18} />
                </button>
              </div>
            </div>

            {/* Right — Code editor image */}
            <div className="relative">
              <div ref={imageRef} className="opacity-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
                  <img
                    src={codeEditorImg}
                    alt="Code editor showing a React component"
                    width={800}
                    height={640}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating code snippet */}
              <div
                ref={snippetRef}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg border border-border/50 px-5 py-4 opacity-0"
              >
                <pre className="text-xs font-mono text-primary leading-relaxed">
                  <span className="text-accent">const</span> alchemist = {"{"}{"\n"}
                  {"  "}skill: <span className="text-accent">"Master"</span>,{"\n"}
                  {"  "}focus: <span className="text-accent">"Clean Code"</span>{"\n"}
                  {"}"};
                </pre>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-16 mt-20 pt-10 border-t border-border/50">
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Done</div>
            </div>
            <div>
              <div className="stat-number">12</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div>
              <div className="stat-number">6y+</div>
              <div className="stat-label">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;