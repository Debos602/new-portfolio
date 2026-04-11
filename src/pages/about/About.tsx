import { useEffect, useRef } from "react";
import { Terminal, Code2, Database, Cloud, Box, GitBranch } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "@/assets/debos_image.png";
gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    period: "2021 — PRESENT",
    role: "Senior Lead",
    description: "Orchestrating microservices and high-scale React environments for enterprise-grade fintech solutions.",
  },
  {
    period: "2018 — 2021",
    role: "Specialist",
    description: "Deep-diving into Node.js performance optimization and complex MongoDB data modeling patterns.",
  },
  {
    period: "2015 — 2018",
    role: "Genesis Phase",
    description: "Foundational exploration of JavaScript ecosystem and the emergence of modern web standards.",
  },
];

const values = [
  {
    title: "Immutable Integrity",
    subtitle: "Code that stands the test of entropy.",
    description: "Prioritizing type safety, rigorous testing, and predictable state management.",
  },
  {
    title: "Ethereal Scalability",
    subtitle: "Architecting systems that breathe with the traffic.",
    description: "Horizontal scaling and cloud-native resilience by design.",
  },
  {
    title: "Aesthetic Excellence",
    subtitle: "Logic meets beauty.",
    description: "Ensuring the hidden architecture is as elegant as the visible user interface.",
  },
];

const tools = [
  { name: "MongoDB", icon: Database },
  { name: "Express", icon: Terminal },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Terminal },
  { name: "TypeScript", icon: Code2 },
  { name: "Git", icon: GitBranch },
  { name: "Tailwind", icon: Box },
  { name: "AWS", icon: Cloud },
  { name: "Next.js", icon: Code2 },
  { name: "Docker", icon: Box },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero block animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(headingRef.current?.querySelectorAll(".about-line") || [],
          { opacity: 0, y: 50, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.8, stagger: 0.15 },
          "-=0.3"
        )
        .fromTo(subtextRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo(statsRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(imageRef.current,
          { opacity: 0, x: 60, rotateY: -10 },
          { opacity: 1, x: 0, rotateY: 0, duration: 1 },
          "-=0.9"
        );

      // Timeline scroll animation
      gsap.fromTo(
        timelineRef.current?.children || [],
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.2,
          scrollTrigger: { trigger: timelineRef.current, start: "top 85%" },
        }
      );

      // Values scroll animation
      gsap.fromTo(
        valuesRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
          scrollTrigger: { trigger: valuesRef.current, start: "top 85%" },
        }
      );

      // Tools scroll animation
      gsap.fromTo(
        toolsRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.4, stagger: 0.05,
          scrollTrigger: { trigger: toolsRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">

      {/* ── Gradients ── */}
      <div
        className="absolute top-0 right-[200px] z-0 h-[600px] w-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,238,252,0.08) 0%, rgba(0,238,252,0) 50%)" }}
      />
      <div
        className="absolute top-20 left-[100px] z-0 h-[600px] w-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(126,63,242,0.05) 0%, rgba(126,63,242,0) 50%)" }}
      />
      <div
        className="absolute bottom-0 right-[488px] z-0 h-[600px] w-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,104,116,0.03) 0%, rgba(0,104,116,0) 50%)" }}
      />

      {/* ══════════════════════════════════════
          HERO BLOCK
      ══════════════════════════════════════ */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/[0.05] mb-8 opacity-0"
            >
              <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary">
                MERN Architect
              </span>
            </div>

            <h1
              ref={headingRef}
              className="text-5xl md:text-6xl font-heading font-bold leading-[1.05] mb-6"
            >
              <span className="about-line block text-foreground opacity-0">Architecting</span>
              <span className="about-line block text-gradient opacity-0">Digital Logic.</span>
            </h1>

            <p
              ref={subtextRef}
              className="text-lg text-muted-foreground max-w-md leading-relaxed mb-10 opacity-0"
            >
              I translate complex human needs into ethereal, high-velocity digital structures. As a
              Full Stack Alchemist, I fuse the precision of MongoDB with the fluidity of React to
              create immutable user experiences.
            </p>

            <div ref={statsRef} className="flex gap-12">
              <div className="opacity-0">
                <div className="stat-number">08+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="opacity-0">
                <div className="stat-number">142</div>
                <div className="stat-label">Deployments</div>
              </div>
            </div>
          </div>

          {/* Right — Portrait */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 max-w-md ml-auto">
              <img
                src={profileImage}
                alt="Portrait"
                className="w-full h-auto grayscale"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 right-4 bg-card rounded-xl border border-border/50 p-3 shadow-lg">
                <Code2 size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════ */}
      <div className="container mx-auto px-6 pb-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Evolutionary Path
        </h2>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-[84px]">
            {timeline.map((item) => (
                <div key={item.role} className="p-[32px] bg-[#FFFFFF]/70 border border-[#E2E8F0] rounded-[12px] shadow-lg ">
                    <div className="text-[#0891B2] hover:text-[#7C3AED] mb-[8.6px] font-mono ">{item.period}</div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.role}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
      </div>    
            
       
      {/* ══════════════════════════════════════
          VALUES
      ══════════════════════════════════════ */}
      <div className="section-bg py-24 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Core Values
          </h2>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-skill opacity-0">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{v.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TOOLS
      ══════════════════════════════════════ */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Tools of the Trade
        </h2>
        <div ref={toolsRef} className="flex flex-wrap gap-4">
          {tools.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border/50 bg-card text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/[0.05] transition-all duration-200 opacity-0"
            >
              <Icon size={16} className="text-primary" />
              {name}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;