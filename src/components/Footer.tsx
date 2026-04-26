import { Link } from "react-router-dom";
import { Share2, AtSign } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const navRef = useRef(null);
  const resourcesRef = useRef(null);
  const officeRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [brandRef.current, navRef.current, resourcesRef.current, officeRef.current];

      // Animate each footer section
      sections.forEach((section, idx) => {
        if (!section) return;

        gsap.fromTo(
          section,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: idx * 0.1,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        // Animate list items with stagger
        const listItems = section.querySelectorAll("li");
        if (listItems.length) {
          gsap.fromTo(
            listItems,
            { opacity: 0, x: -10 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              ease: "power2.out",
              stagger: 0.05,
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });

      // Animate social buttons
      const socialButtons = brandRef.current?.querySelectorAll("button");
      if (socialButtons?.length) {
        gsap.fromTo(
          socialButtons,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(2)",
            stagger: 0.08,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate bottom bar
      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);
  return (
    <footer ref={footerRef} className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div ref={brandRef} className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">&gt;_</span>
              </div>
              <span className="font-heading font-bold text-base md:text-lg tracking-tight text-foreground">
                ALCHEMIST.DEV
              </span>
            </Link>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6">
              A boutique development studio specializing in digital transformation through high-fidelity full-stack development.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <Share2 size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <AtSign size={16} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div ref={navRef}>
            <h4 className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Works", "Philosophy", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-xs md:text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div ref={resourcesRef}>
            <h4 className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Blog", "Tools", "Snippets"].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-xs md:text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div ref={officeRef}>
            <h4 className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Office</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Remote First", "Global", "GMT +0"].map((item) => (
                <li key={item} className="text-xs md:text-sm text-foreground/80">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div ref={bottomRef} className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[10px] md:text-xs text-muted-foreground tracking-wide text-center md:text-left">
            © 2024 DIGITAL ALCHEMIST. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link to="/" className="text-[10px] md:text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">PRIVACY</Link>
            <Link to="/" className="text-[10px] md:text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">LEGAL</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
