import { useEffect, useRef } from "react";
import {  Code2} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "@/assets/debos_image.png";
import { Icon1, Icon10, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9 } from "@/components/Icons";
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
   
    description: "Prioritizing type safety, rigorous testing, and predictable state management.",
     icon: (
      <div className="px-[14px] py-[11.8px] bg-[#0891B2]/10 rounded-[8px] w-fit">
        <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25C7.10417 24.2708 4.71354 22.6094 2.82812 20.0156C0.942708 17.4219 0 14.5417 0 11.375V3.75L10 0L20 3.75V11.375C20 14.5417 19.0573 17.4219 17.1719 20.0156C15.2865 22.6094 12.8958 24.2708 10 25ZM10 22.375C12.0208 21.75 13.7083 20.5156 15.0625 18.6719C16.4167 16.8281 17.2083 14.7708 17.4375 12.5H10V2.65625L2.5 5.46875V11.375C2.5 11.6042 2.5 11.7917 2.5 11.9375C2.5 12.0833 2.52083 12.2708 2.5625 12.5H10V22.375Z" fill="#0891B2"/>
      </svg>
      </div>
    ),
  },
  {
    title: "Ethereal Scalability",
    
    description: "Horizontal scaling and cloud-native resilience by design.",
    icon: (
      <div className="px-[14px] py-[11.8px] bg-[#7C3AED]/10 w-fit rounded-[8px]">
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20V17.5H3.40625C2.34375 16.5833 1.51042 15.4792 0.90625 14.1875C0.302083 12.8958 0 11.5 0 10C0 7.66667 0.708333 5.60938 2.125 3.82812C3.54167 2.04688 5.33333 0.875 7.5 0.3125V2.9375C6.04167 3.45833 4.84375 4.35938 3.90625 5.64062C2.96875 6.92188 2.5 8.375 2.5 10C2.5 11.125 2.72396 12.1615 3.17188 13.1094C3.61979 14.0573 4.22917 14.875 5 15.5625V12.5H7.5V20H0ZM13.75 20C12.7083 20 11.8229 19.6354 11.0938 18.9062C10.3646 18.1771 10 17.2917 10 16.25C10 15.25 10.3438 14.3906 11.0312 13.6719C11.7188 12.9531 12.5625 12.5729 13.5625 12.5312C13.9167 11.7812 14.4427 11.1719 15.1406 10.7031C15.8385 10.2344 16.625 10 17.5 10C18.6042 10 19.5573 10.3594 20.3594 11.0781C21.1615 11.7969 21.6458 12.6875 21.8125 13.75C22.6875 13.75 23.4375 14.0521 24.0625 14.6562C24.6875 15.2604 25 15.9896 25 16.8438C25 17.7188 24.6979 18.4635 24.0938 19.0781C23.4896 19.6927 22.75 20 21.875 20H13.75ZM17.375 8.75C17.2292 7.89583 16.9479 7.10417 16.5312 6.375C16.1146 5.64583 15.6042 5 15 4.4375V7.5H12.5V0H20V2.5H16.5938C17.4896 3.29167 18.224 4.21875 18.7969 5.28125C19.3698 6.34375 19.7396 7.5 19.9062 8.75H17.375ZM13.75 17.5H21.875C22.0417 17.5 22.1875 17.4375 22.3125 17.3125C22.4375 17.1875 22.5 17.0417 22.5 16.875C22.5 16.7083 22.4375 16.5625 22.3125 16.4375C22.1875 16.3125 22.0417 16.25 21.875 16.25H19.6875V14.6875C19.6875 14.0833 19.474 13.5677 19.0469 13.1406C18.6198 12.7135 18.1042 12.5 17.5 12.5C16.8958 12.5 16.3802 12.7135 15.9531 13.1406C15.526 13.5677 15.3125 14.0833 15.3125 14.6875V15H13.75C13.3958 15 13.099 15.1198 12.8594 15.3594C12.6198 15.599 12.5 15.8958 12.5 16.25C12.5 16.6042 12.6198 16.901 12.8594 17.1406C13.099 17.3802 13.3958 17.5 13.75 17.5Z" fill="#7C3AED"/>
      </svg>
      </div>
    ),
  },
  {
    title: "Aesthetic Excellence",
    
    description: "Ensuring the hidden architecture is as elegant as the visible user interface.",
     icon: (
      <div className="px-[14px] py-[11.8px] bg-[#2563EB]/10 w-fit rounded-[8px]">
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 7.5L21.3125 4.9375L18.75 3.75L21.3125 2.5625L22.5 0L23.6875 2.5625L26.25 3.75L23.6875 4.9375L22.5 7.5ZM8.125 7.5L6.9375 4.9375L4.375 3.75L6.9375 2.5625L8.125 0L9.3125 2.5625L11.875 3.75L9.3125 4.9375L8.125 7.5ZM22.5 21.875L21.3125 19.3125L18.75 18.125L21.3125 16.9375L22.5 14.375L23.6875 16.9375L26.25 18.125L23.6875 19.3125L22.5 21.875ZM3.875 25.875L0.375 22.375C0.125 22.125 0 21.8229 0 21.4688C0 21.1146 0.125 20.8125 0.375 20.5625L14.3125 6.625C14.5625 6.375 14.8646 6.25 15.2188 6.25C15.5729 6.25 15.875 6.375 16.125 6.625L19.625 10.125C19.875 10.375 20 10.6771 20 11.0312C20 11.3854 19.875 11.6875 19.625 11.9375L5.6875 25.875C5.4375 26.125 5.13542 26.25 4.78125 26.25C4.42708 26.25 4.125 26.125 3.875 25.875ZM4.8125 23.25L13.75 14.25L12 12.5L3 21.4375L4.8125 23.25Z" fill="#2563EB"/>
        </svg>

      </div>
    ),
  },
];

const tools = [
  { name: "MongoDB", icon: Icon1},
  { name: "Express", icon: Icon2 },
  { name: "React", icon: Icon3 },
  { name: "Node.js", icon: Icon4 },
  { name: "TypeScript", icon: Icon5 },
  { name: "Git VCS", icon: Icon6 },
  { name: "Tailwind", icon: Icon7 },
  { name: "AWS", icon: Icon8 },
  { name: "Next.js", icon: Icon9 },
  { name: "Docker", icon: Icon10 },
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
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Evolutionary Path
        </h2>
       <div className=" h-[3px] w-16 rounded-full" style={{ background: 'linear-gradient(to right, #0891B2ff, #0891B200)' }} />
        

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[84px] mt-16">
                {timeline.map((item, index) => (
                    <div key={item.role} className="relative">
                        {/* Card */}
                        <div className="p-[32px] bg-[#FFFFFF]/70 border border-[#E2E8F0] rounded-[12px] shadow-lg h-full">
                            <div className="text-[#0891B2] mb-[8.6px] font-mono">{item.period}</div>
                            <h3 className="text-[24px] leading-[1.3] font-heading font-bold text-[#0F172A] mb-[6.8px]">{item.role}</h3>
                            <p className="text-[#475569] text-sm leading-relaxed">{item.description}</p>
                        </div>

                        {/* Arrow in the gap — hidden on last card */}
                        {index < timeline.length - 1 && (
                            <div className="hidden lg:flex absolute top-1/2 -right-[45px] -translate-y-1/2 translate-x-1/2 z-10 items-center justify-center">
                              <svg width="20" height="14" viewBox="0 0 20 14" fill="#CBD5E1" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z" fill="#CBD5E1"/>
            </svg>

                        </div>
                                  )}
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
                 {v.icon}
                <h3 className="text-xl font-heading font-bold text-[#0F172A] my-6">{v.title}</h3>
                <p className="text-[#475569] text-[16px] font-medium leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          TOOLS
      ══════════════════════════════════════ */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading mb-4 font-bold bg-gradient-to-r from-[#0891B2] to-[#7C3AED] bg-clip-text text-transparent text-center">
        The Alchemist's Tools
        </h2>

        <h3 className="text-center font-normal text-[#94A3B8] font-mono leading-[1.3] tracking-[2.4px] mb-16">MODERN FULL STACK MASTERY</h3>
        <div ref={toolsRef} className="flex flex-wrap gap-4">
          {tools.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="inline-flex items-center gap-2 p-4 pr-[99px] rounded-[6px] border border-border/50 bg-[#FFFFFF] text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/[0.05] transition-all duration-200 opacity-0"
            >
              <Icon  className="text-primary" />
             <div className="text-[14px] font-bold leading-[1.4]">
               {name}
             </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;