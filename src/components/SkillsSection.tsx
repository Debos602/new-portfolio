import { useEffect, useRef } from "react";
import { ArrowRight, Layers, Gem, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    icon: Layers,
    title: "Backend Architecture",
    description: "Designing robust server-side logic with Node.js, GraphQL, and high-performance databases.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Gem,
    title: "Frontend Mastery",
    description: "Crafting responsive, high-fidelity user interfaces with React, Next.js, and modern CSS.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    description: "Deploying and scaling applications on AWS and Vercel for maximum availability.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4FAFF]">

     <div className="container py-24 relative overflow-hidden">
       {/* Gradient 1 — Cyan #00EEFC (8% → 0%) */}
      <div
        className="absolute top-0 right-[200px] z-0 h-[600px] w-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,238,252,0.08) 0%, rgba(0,238,252,0) 50%)",
        }}
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

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 opacity-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              The Alchemist's Forge
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Leveraging modern web technologies to create scalable, maintenance-free digital infrastructure.
            </p>
          </div>
          <Link to="/skills" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Explore all skills <ArrowRight size={18} />
          </Link>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.title} className="card-skill opacity-0">
              <div className={`w-14 h-14 rounded-2xl ${skill.bg} flex items-center justify-center mb-6`}>
                <skill.icon size={24} className={skill.color} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
     </div>
    </section>
  );
};

export default SkillsSection;