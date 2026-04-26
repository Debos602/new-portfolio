import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import contactImage from "@/assets/contactImage.png"
gsap.registerPlugin(ScrollTrigger)

export const Contact = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "Full Stack Development",
    vision: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 48, skewY: 2 },
          {
            opacity: 1, y: 0, skewY: 0,
            duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 82%", once: true },
          }
        )
      }

      if (contentRef.current) {
        const children = contentRef.current.children
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.8, ease: "power3.out", stagger: 0.15,
            scrollTrigger: { trigger: contentRef.current, start: "top 82%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-[#F4FAFF] relative overflow-hidden">
      {/* ↓ Orbs shrink on mobile so they don't overflow */}
      <div className="absolute top-0 left-0 bg-[#00696D]/20 blur-[120px] sm:blur-[160px] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[608px] lg:h-[608px] opacity-50 mix-blend-multiply rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 bg-[#6750A4]/20 blur-[120px] sm:blur-[160px] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[608px] lg:h-[608px] opacity-50 mix-blend-multiply rounded-full pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-12 md:mb-20 lg:mb-24">
          {/* ↓ Title scales: 4xl → 5xl → 6xl */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 text-[#191C1E]">
            <span>Let's Build</span>
            <br />
            <span className="bg-gradient-to-r from-[#006A71] to-[#7511C3] bg-clip-text text-transparent">
              Something Elite
            </span>
          </h1>
          {/* ↓ Subtitle font scales; bottom margin tightens on mobile */}
          <p className="text-[#5A6275] text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[672px] mb-0">
            Transforming complex logic into seamless digital experiences. Currently accepting selective freelance
            partnerships for visionary MERN projects.
          </p>
        </div>

        {/* ── Content Grid ─────────────────────────────────────────── */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">

          {/* ── Left Column ──────────────────────────────────────────── */}
          <div className="space-y-6 sm:space-y-8">

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E0F2F1] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.54 13.7 12.46 13.7 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#006A71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#4D556B] uppercase tracking-[0.5px]">Email Me</p>
                <p className="text-[15px] sm:text-[16px] font-semibold text-[#141F38] mt-1">hello@alchemist.dev</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F3E5F5] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#8E33E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#4D556B] uppercase tracking-[0.5px]">Call Me</p>
                <p className="text-[15px] sm:text-[16px] font-semibold text-[#141F38] mt-1">+1 (555) 0'10-CODE</p>
              </div>
            </div>

            {/* Digital Footprint */}
            <div className="pt-2 sm:pt-4">
              <p className="text-[12px] sm:text-[13px] font-bold text-[#141F38] uppercase tracking-[0.5px] mb-4">
                Digital Footprint
              </p>
              <div className="flex gap-3">
                {/* GitHub */}
                <button className="w-10 h-10 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:border-[#006A71] hover:bg-[#E0F2F1] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.013 12.013 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </button>
                {/* Twitter/X */}
                <button className="w-10 h-10 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:border-[#006A71] hover:bg-[#E0F2F1] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                  </svg>
                </button>
                {/* LinkedIn */}
                <button className="w-10 h-10 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:border-[#006A71] hover:bg-[#E0F2F1] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Contact image — hidden on mobile, visible md+ */}
            <div className="pt-4 sm:pt-8 hidden sm:block">
              <div className="relative w-full h-[260px] sm:h-[300px] lg:h-[320px] rounded-[20px] overflow-hidden bg-gradient-to-br from-[#006A71] to-[#004D54]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#006A71]/30 to-transparent" />
                <img src={contactImage} alt="Contact" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* ── Right Column — Form ──────────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] sm:rounded-[24px] shadow-lg p-6 sm:p-8 md:p-10 relative"
          >
            <div className="absolute right-0 top-0 w-[128px] h-[128px] bg-[#00696D]/20 rounded-full blur-[64px] pointer-events-none" />

            <div className="space-y-5 sm:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-[12px] sm:text-[13px] font-semibold text-[#141F38] uppercase tracking-[0.5px] mb-2 sm:mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-[12px] border border-[#D1D5DB] focus:outline-none focus:border-[#006A71] focus:ring-1 focus:ring-[#006A71] transition-all text-[14px] text-[#141F38]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12px] sm:text-[13px] font-semibold text-[#141F38] uppercase tracking-[0.5px] mb-2 sm:mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-[12px] border border-[#D1D5DB] focus:outline-none focus:border-[#006A71] focus:ring-1 focus:ring-[#006A71] transition-all text-[14px] text-[#141F38]"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block text-[12px] sm:text-[13px] font-semibold text-[#141F38] uppercase tracking-[0.5px] mb-2 sm:mb-3">
                  Reason for Inquiry
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#D1D5DB] focus:outline-none focus:border-[#006A71] focus:ring-1 focus:ring-[#006A71] transition-all text-[14px] text-[#141F38] bg-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option>Full Stack Development</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Vision */}
              <div>
                <label className="block text-[12px] sm:text-[13px] font-semibold text-[#141F38] uppercase tracking-[0.5px] mb-2 sm:mb-3">
                  Your Vision
                </label>
                <textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleInputChange}
                  placeholder="Tell me about the problem you're solving..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#D1D5DB] focus:outline-none focus:border-[#006A71] focus:ring-1 focus:ring-[#006A71] transition-all text-[14px] text-[#141F38] resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-[#006A71] to-[#8E33E4] text-white font-bold rounded-[20px] hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2 text-[14px] sm:text-[15px]"
              >
                {/* ↓ Shorten label on very small screens */}
                <span className="sm:hidden">Transmute Vision</span>
                <span className="hidden sm:inline">Transmute Vision into Reality</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" fill="white"/>
                </svg>
              </button>

              <p className="text-center text-[12px] sm:text-[13px] text-[#5A6275]">
                Average response time: <span className="font-semibold">{'<'} 12 hours</span>
              </p>
            </div>
          </form>

          {/* ↓ Contact image shown BELOW form on mobile only */}
          <div className="sm:hidden -mt-2">
            <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden bg-gradient-to-br from-[#006A71] to-[#004D54]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#006A71]/30 to-transparent" />
              <img src={contactImage} alt="Contact" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact