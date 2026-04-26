import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import logo from "../assets/Container.png";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "PROJECTS", path: "/projects" },
  { label: "EXPERIENCE", path: "/experience" },
  { label: "SKILLS", path: "/skills" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Refs for GSAP targets
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileItemsRef = useRef<HTMLElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ── Mount: navbar slides in from top ─────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Navbar bar itself drops in
      tl.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        // Logo slides in from left
        .fromTo(
          logoRef.current,
          { x: -24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.35"
        )
        // Desktop links stagger in from top
        .fromTo(
          desktopLinksRef.current
            ? Array.from(desktopLinksRef.current.children)
            : [],
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 },
          "-=0.3"
        )
        // CTA slides in from right
        .fromTo(
          ctaRef.current,
          { x: 24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.5"
        )
        // Hamburger icon fades in
        .fromTo(
          toggleRef.current,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.7)" },
          "-=0.3"
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // ── Mobile menu open/close animation ─────────────────────────
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const items = mobileItemsRef.current.filter(Boolean);
    if (!menu) return;

    if (mobileOpen) {
      // Reveal menu panel
      gsap.fromTo(
        menu,
        { y: -20, opacity: 0, scaleY: 0.92, transformOrigin: "top center" },
        { y: 0, opacity: 1, scaleY: 1, duration: 0.35, ease: "power3.out" }
      );
      // Stagger items in
      gsap.fromTo(
        items,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.055,
          delay: 0.1,
        }
      );
      // Animate overlay in
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        );
      }
    } else {
      // Collapse menu
      gsap.to(menu, {
        y: -12,
        opacity: 0,
        scaleY: 0.95,
        transformOrigin: "top center",
        duration: 0.25,
        ease: "power2.in",
      });
      if (overlayRef.current) {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
      }
    }
  }, [mobileOpen]);

  // ── Scroll detection ──────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close menu on route change ────────────────────────────────
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 sm:py-[20px] ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link
            ref={logoRef}
            to="/"
            className="flex items-center gap-2 min-w-0 flex-shrink-0"
          >
            <span className="text-primary-foreground font-heading font-bold text-sm flex-shrink-0">
              <img src={logo} alt="Logo" className="h-7 w-auto" />
            </span>
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight bg-gradient-to-r from-[#006874] to-[#7E3FF2] bg-clip-text text-transparent whitespace-nowrap">
              DEBOS.DAS
            </span>
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────────── */}
          <div
            ref={desktopLinksRef}
            className="hidden lg:flex items-center gap-8 xl:gap-[40px]"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link leading-[1.4] text-[13px] xl:text-sm tracking-wide transition-all duration-200 ${
                  location.pathname === item.path ? "nav-link-active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <Link
            ref={ctaRef}
            to="/contact"
            className="hidden lg:inline-flex items-center px-6 xl:px-8 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg flex-shrink-0"
          >
            Hire Me
          </Link>

          {/* ── Mobile / Tablet Toggle ────────────────────────────── */}
          <button
            ref={toggleRef}
            className="lg:hidden text-foreground p-1.5 rounded-md hover:bg-foreground/5 transition-colors duration-200 flex-shrink-0"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile / Tablet Menu Panel ────────────────────────── */}
        {mobileOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border/60 shadow-xl"
          >
            {/* Nav links */}
            <div className="px-4 sm:px-6 pt-3 pb-2 space-y-0.5">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  ref={(el) => {
                    if (el) mobileItemsRef.current[i] = el;
                  }}
                  className={`flex items-center justify-between py-3 px-3 rounded-xl text-[13px] sm:text-sm font-semibold tracking-widest transition-all duration-200 hover:bg-foreground/5 ${
                    location.pathname === item.path
                      ? "text-[#006874] bg-[#006874]/8"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#006874] to-[#7E3FF2]" />
                  )}
                </Link>
              ))}
            </div>

            {/* Divider + CTA */}
            <div className="px-4 sm:px-6 pt-2 pb-5">
              <div className="h-px bg-border/50 mb-4" />
              <Link
                to="/contact"
                ref={(el) => {
                  if (el) mobileItemsRef.current[navItems.length] = el;
                }}
                className="flex items-center justify-center w-full px-8 py-3 rounded-full bg-gradient-to-r from-[#006874] to-[#7E3FF2] text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ── Backdrop overlay (closes menu on tap outside) ─────── */}
      {mobileOpen && (
        <div
          ref={overlayRef}
          className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;