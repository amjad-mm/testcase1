import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import logoImage from "@/assets/logo.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Listen to scroll position for dynamic glassmorphic depth
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Clients", path: "/clients" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-slate-950/40 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px] lg:h-20">
          {/* Logo with Framed Crisp Capsule */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <div className="bg-white/95 hover:bg-white px-2.5 sm:px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200 flex items-center border border-white/20">
              <img
                src={logoImage}
                alt="Shamsul Imara Technical Services"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-2 text-sm xl:text-[15px] font-medium rounded-lg transition-all ${
                  isActive(item.path)
                    ? "text-white font-semibold bg-white/15 shadow-sm border border-white/20"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Direct Phone Dispatcher */}
            <a
              href="tel:+971523184375"
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors py-2 px-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>+971 52 318 4375</span>
            </a>

            <Button
              asChild
              className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all gap-2"
            >
              <Link to="/contact">
                <span>Request Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="h-10 w-10 text-white hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl pb-6 pt-3 px-3 rounded-b-2xl animate-fade-in text-white mb-2">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between py-2.5 px-4 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "text-white bg-white/15 font-semibold border border-white/20"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  {isActive(item.path) && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 px-1 space-y-2.5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>UAE Licensed Technical Dispatch</span>
              </div>
              <a
                href="tel:+971523184375"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>+971 52 318 4375</span>
              </a>
              <a
                href="mailto:info@shamsulimara.com"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span>info@shamsulimara.com</span>
              </a>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg mt-2 justify-center shadow-md font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact">
                  <span>Get in Touch / Request Quote</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;

