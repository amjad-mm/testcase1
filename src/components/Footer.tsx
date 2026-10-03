import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Linkedin, Facebook, Instagram, ShieldCheck, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadProfile = () => {
    // In a production environment, this links to the official PDF profile
    window.open("mailto:info@shamsulimara.com?subject=Request%20Company%20Profile%20PDF&body=Hello,%20please%20send%20the%20official%20Shamsul%20Imara%20Technical%20Services%20corporate%20profile.", "_blank");
  };

  return (
    <footer className="bg-[#0A1E34] text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-white text-base shadow-sm">
                SI
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                  Shamsul Imara
                </span>
                <span className="text-xs text-slate-400 tracking-wider uppercase mt-1">
                  Technical Services LLC
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Premier UAE engineering contractor delivering certified skilled workforce supply, commercial interior fit-outs, MEP services, and civil-industrial technical contracting across Dubai and the Northern Emirates.
            </p>

            <div className="pt-1">
              <Button
                onClick={handleDownloadProfile}
                variant="outline"
                className="inline-flex items-center gap-2 border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-100 hover:text-white transition-all text-xs font-semibold py-2 px-4 rounded-lg"
              >
                <Download className="h-4 w-4 text-amber-400" />
                <span>Download Corporate Profile (PDF)</span>
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>UAE DED Licensed & MOHRE Compliant Contractor</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  About SITS
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  Client Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  Careers & Hiring
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  Request Proposal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contracting Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Skilled Workforce Mobilization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Turnkey Contracting & Interiors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>MEP & Electrical Installations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Civil & Structural Works</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Oil, Gas & Marine Technical Support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Annual Maintenance Contracts (AMC)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact & Dispatch
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 leading-snug">
                  Dubai, United Arab Emirates<br />
                  <span className="text-xs text-slate-400">Operations across all 7 Emirates</span>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+971523084372"
                    className="block text-slate-200 hover:text-white font-medium transition-colors"
                  >
                    +971 52 308 4372
                  </a>
                  <a
                    href="tel:+971523184375"
                    className="block text-slate-200 hover:text-white font-medium transition-colors"
                  >
                    +971 52 318 4375
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@shamsulimara.com"
                  className="text-slate-200 hover:text-white font-medium transition-colors"
                >
                  info@shamsulimara.com
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-400">
                  Mon – Sat: 8:00 AM – 6:00 PM<br />
                  Emergency MEP: 24/7 on call
                </span>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Location Map with Corporate Frame */}
        <div className="mt-12 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-sm">
          <div className="px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>Head Office & Operational Depot — Dubai, UAE</span>
            </div>
            <a
              href="https://maps.google.com/?q=Dubai,+United+Arab+Emirates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6829851535!2d54.947244!3d25.197269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shamsul Imara Technical Services Dubai Location Map"
            className="filter grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Shamsul Imara Technical Services LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">United Arab Emirates</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

