import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image1 from "../../assets/project1.png"
import Image2 from "../../assets/project2.png"
import Image3 from "../../assets/project3.png"

gsap.registerPlugin(ScrollTrigger)

export const Projects = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const filtersRef = useRef(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const filters = ["All", "Full Stack", "Frontend", "Backend"];

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, isHovering: boolean) => {
    gsap.to(e.currentTarget, {
      y: isHovering ? -8 : 0,
      boxShadow: isHovering
        ? "0 20px 40px rgba(0, 106, 113, 0.15)"
        : "0 4px 12px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
      ease: "power2.out",
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const [hTitle, hPara] = headerRef.current?.children || []

      if (hTitle) {
        gsap.fromTo(
          hTitle,
          { opacity: 0, y: 48, skewY: 2 },
          {
            opacity: 1, y: 0, skewY: 0,
            duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 82%", once: true },
          }
        )
      }

      if (hPara) {
        gsap.fromTo(
          hPara,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0,
            duration: 0.65, ease: "power2.out", delay: 0.18,
            scrollTrigger: { trigger: headerRef.current, start: "top 82%", once: true },
          }
        )
      }

      if (filtersRef.current) {
        const filterButtons = filtersRef.current.querySelectorAll("button")
        gsap.fromTo(
          filterButtons,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.6, ease: "power3.out", stagger: 0.08,
            scrollTrigger: { trigger: filtersRef.current, start: "top 82%", once: true },
          }
        )
      }

      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.8, ease: "power3.out", stagger: 0.12,
            scrollTrigger: { trigger: cardsRef.current[0], start: "top 82%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      title: "CRYPTO-FLUX V2",
      tags: ["REACT", "NODE"],
      description: "A real-time cryptocurrency analytics engine with WebSocket integration and counter-predictive modeling.",
      image: Image1,
      liveDemo: "https://crypto-flux.vercel.app",
      frontend: "https://github.com/username/crypto-flux-frontend",
      backend: "https://github.com/username/crypto-flux-backend",
    },
    {
      title: "NEO-COMMERCE",
      tags: ["NEXT.JS", "TAILWIND", "POSTGRESQL", "STRIPE"],
      description: "Next-generation headless commerce solution utilizing Stripe integration and serverless architecture.",
      image: Image2,
      liveDemo: "https://neo-commerce.vercel.app",
      frontend: "https://github.com/username/neo-commerce-frontend",
      backend: "https://github.com/username/neo-commerce-backend",
    },
    {
      title: "SYNAPSE API",
      tags: ["EXPRESS", "MONGO"],
      description: "A robust, high-throughput microservices gateway for AI-driven content-generation pipelines.",
      image: Image3,
      liveDemo: "https://synapse-api.vercel.app",
      frontend: "https://github.com/username/synapse-frontend",
      backend: "https://github.com/username/synapse-backend",
    },
  ];

  return (
    <div ref={sectionRef} className="bg-[#F4F7FF]">
      {/* Added horizontal padding on mobile via px-4 sm:px-6 */}
      <div className="container mx-auto px-4 sm:px-6 pb-14 md:pb-[128px]">

        {/* Header */}
        {/* Reduced top/bottom padding on mobile, kept desktop values at md: */}
        <div ref={headerRef} className="text-center max-w-[672px] pt-8 pb-8 md:pt-[91px] md:py-[64px] mx-auto relative">
          <div className="absolute top-0 right-0 bg-[#006A71]/5 w-[600px] h-[300px] rounded-full blur-[100px]"></div>
          {/* Mobile: text-4xl → desktop: text-5xl md:text-6xl (unchanged) */}
          <h1 className="font-bold text-xl md:text-5xl lg:text-6xl leading-tight mb-2 md:mb-4 bg-gradient-to-r from-[#006A71] to-[#7511C3] bg-clip-text text-transparent">
            SELECTED WORKS
          </h1>
          {/* Mobile: text-base → desktop: text-[18px] (unchanged) */}
          <p className="text-[#5A6275] text-sm md:text-[18px] leading-relaxed max-w-[672px] mb-8 md:mb-16">
            High-performance MERN applications engineered for the modern web.
            Exploring the intersection of design and data.
          </p>
        </div>

        {/* Filter Tabs */}
        {/* Added flex-wrap and reduced gap/padding on mobile */}
        <div ref={filtersRef} className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-16 px-2">
          {filters.map((f) => (
            <button
              key={f}
              className="font-heading text-base md:text-[20px] font-bold leading-[1.4] border border-[#D1D5DB] hover:bg-[#006A71] hover:text-white px-5 py-2 md:px-[32px] md:py-[11px] rounded-full duration-300"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        {/* Already responsive with grid-cols-1 md:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
              className="rounded-[16px] border bg-[#FFFFFF]"
            >

              {/* Card Image */}
              <div className="relative">
                {/* Mobile: slightly shorter image height */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[180px] md:h-[200px] object-cover rounded-t-[16px] relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#006A71]/50 to-transparent rounded-t-[16px]"></div>
              </div>

              {/* Card Body */}
              {/* Reduced padding on mobile */}
              <div className="p-5 md:p-8">
                {/* Mobile: text-xl → desktop: text-[24px] (unchanged) */}
                <h3 className="font-heading font-bold text-xl md:text-[24px] leading-[1.3] tracking-[0.6px] mb-[10px] md:mb-[10.8px]">
                  {project.title}
                </h3>
                {/* Mobile: text-sm → desktop: inherits base (unchanged) */}
                <p className="text-[#4D556B] text-sm md:text-base leading-[1.6] font-normal">
                  {project.description}
                </p>

                {/* Tags — flex-wrap prevents overflow on mobile */}
                <div className="flex flex-wrap gap-2 mt-3 md:mt-[14px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#D1D5DB] text-[#006A71] font-liberation text-[10px] font-bold leading-[1.5] px-[12px] py-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="flex flex-col gap-3 mt-4 md:mt-[21.2px]">

                  {/* Live Demo */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-[8px] text-[#FFFFFF] font-heading font-bold text-[14px] leading-[1.4] py-[12px] px-[24px] bg-gradient-to-r from-[#00DEEC] to-[#C180FF] rounded-[20px]"
                  >
                    <span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.7 5.99667L4.1625 6.61542C4.3375 6.26542 4.51875 5.92792 4.70625 5.60292C4.89375 5.27792 5.1 4.95292 5.325 4.62792L4.275 4.42167L2.7 5.99667ZM5.3625 7.55292L7.5 9.67167C8.025 9.47167 8.5875 9.16542 9.1875 8.75292C9.7875 8.34042 10.35 7.87167 10.875 7.34667C11.75 6.47167 12.4344 5.4998 12.9281 4.43105C13.4219 3.3623 13.6375 2.37792 13.575 1.47792C12.675 1.41542 11.6875 1.63105 10.6125 2.1248C9.5375 2.61855 8.5625 3.30292 7.6875 4.17792C7.1625 4.70292 6.69375 5.26542 6.28125 5.86542C5.86875 6.46542 5.5625 7.02792 5.3625 7.55292ZM8.7 6.33417C8.4125 6.04667 8.26875 5.69355 8.26875 5.2748C8.26875 4.85605 8.4125 4.50292 8.7 4.21542C8.9875 3.92792 9.34375 3.78417 9.76875 3.78417C10.1938 3.78417 10.55 3.92792 10.8375 4.21542C11.125 4.50292 11.2688 4.85605 11.2688 5.2748C11.2688 5.69355 11.125 6.04667 10.8375 6.33417C10.55 6.62167 10.1938 6.76542 9.76875 6.76542C9.34375 6.76542 8.9875 6.62167 8.7 6.33417ZM9.05625 12.3529L10.6313 10.7779L10.425 9.72792C10.1 9.95292 9.775 10.156 9.45 10.3373C9.125 10.5185 8.7875 10.6967 8.4375 10.8717L9.05625 12.3529ZM14.925 0.109173C15.1625 1.62167 15.0156 3.09355 14.4844 4.5248C13.9531 5.95605 13.0375 7.32167 11.7375 8.62167L12.1125 10.4779C12.1625 10.7279 12.15 10.9717 12.075 11.2092C12 11.4467 11.875 11.6529 11.7 11.8279L8.55 14.9779L6.975 11.2842L3.76875 8.07792L0.075 6.50292L3.20625 3.35292C3.38125 3.17792 3.59062 3.05292 3.83437 2.97792C4.07812 2.90292 4.325 2.89042 4.575 2.94042L6.43125 3.31542C7.73125 2.01542 9.09375 1.09667 10.5188 0.559173C11.9438 0.0216734 13.4125 -0.128327 14.925 0.109173ZM1.40625 10.4592C1.84375 10.0217 2.37813 9.7998 3.00938 9.79355C3.64062 9.7873 4.175 10.0029 4.6125 10.4404C5.05 10.8779 5.26562 11.4123 5.25938 12.0435C5.25313 12.6748 5.03125 13.2092 4.59375 13.6467C4.28125 13.9592 3.75938 14.2279 3.02813 14.4529C2.29688 14.6779 1.2875 14.8779 0 15.0529C0.175 13.7654 0.375 12.756 0.6 12.0248C0.825 11.2935 1.09375 10.7717 1.40625 10.4592ZM2.475 11.5092C2.35 11.6342 2.225 11.8623 2.1 12.1935C1.975 12.5248 1.8875 12.8592 1.8375 13.1967C2.175 13.1467 2.50938 13.0623 2.84063 12.9435C3.17188 12.8248 3.4 12.7029 3.525 12.5779C3.675 12.4279 3.75625 12.2467 3.76875 12.0342C3.78125 11.8217 3.7125 11.6404 3.5625 11.4904C3.4125 11.3404 3.23125 11.2685 3.01875 11.2748C2.80625 11.281 2.625 11.3592 2.475 11.5092Z" fill="white"/>
                      </svg>
                    </span>
                    Live Demo
                  </a>

                  {/* GitHub Links Row */}
                  <div className="flex items-center gap-3">

                    {/* Frontend GitHub */}
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-[8px] font-heading font-bold text-[14px] leading-[1.4] py-[12px] px-[16px] border border-[#D1D5DB] rounded-[20px] text-[#141F38] hover:border-[#006A71] hover:text-[#006A71] duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/>
                      </svg>
                      Frontend
                    </a>

                    {/* Backend GitHub */}
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-[8px] font-heading font-bold text-[14px] leading-[1.4] py-[12px] px-[16px] border border-[#D1D5DB] rounded-[20px] text-[#141F38] hover:border-[#006A71] hover:text-[#006A71] duration-300"
                    >
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L0 6L6 0L7.425 1.425L2.825 6.025L7.4 10.6L6 12V12M14 12L12.575 10.575L17.175 5.975L12.6 1.4L14 0L20 6L14 12V12"/>
                      </svg>
                      Backend
                    </a>

                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;