import { Link } from "react-router-dom";
import { Share2, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">&gt;_</span>
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-foreground">
                ALCHEMIST.DEV
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
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
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Works", "Philosophy", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Blog", "Tools", "Snippets"].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">Office</h4>
            <ul className="space-y-3">
              {["Remote First", "Global", "GMT +0"].map((item) => (
                <li key={item} className="text-sm text-foreground/80">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2024 DIGITAL ALCHEMIST. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">PRIVACY</Link>
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">LEGAL</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
