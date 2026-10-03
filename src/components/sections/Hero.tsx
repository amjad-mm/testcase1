import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";

import heroImage1 from "@/assets/banner2.webp";
import heroImage2 from "@/assets/banner1.webp";
import heroImage3 from "@/assets/banner3.webp";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: heroImage3, alt: "Engineering and industrial infrastructure in UAE" },
    { src: heroImage2, alt: "Skilled technical workforce on UAE construction site" },
    { src: heroImage1, alt: "Commercial interior fit-out and architectural project" },
  ];

  // Auto change slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I would like to request a proposal for technical contracting / workforce solutions."
    );
    window.open(`https://wa.me/971523184375?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Subtle, rich corporate dark gradient overlay for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/60 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>UAE Licensed Technical Contracting & Workforce Partner</span>
          </div>

          {/* Main H1 */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Premier Technical Contracting &{" "}
            <span className="text-accent underline decoration-accent/30 decoration-wavy underline-offset-4">
              Skilled Workforce
            </span>{" "}
            Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Delivering high-precision electromechanical (MEP) installations, commercial interior fit-outs, and certified technical teams for UAE’s leading construction, oil & gas, and industrial projects.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            <Button
              asChild
              className="bg-accent hover:bg-accent-hover text-white text-sm sm:text-base font-medium px-4 sm:px-7 py-3 sm:py-6 h-auto rounded-lg shadow-md transition-all gap-2 justify-center"
            >
              <Link to="/contact">
                <span>Request Project Proposal</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </Button>

            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-sm sm:text-base font-medium px-4 sm:px-7 py-3 sm:py-6 h-auto rounded-lg backdrop-blur-sm transition-all gap-2 justify-center"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#25D366] flex-shrink-0" />
              <span>WhatsApp Consultation</span>
            </Button>
          </div>

          {/* Credibility micro-highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Fast 48–72h Mobilization</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-accent flex-shrink-0" />
              <span>100% Legal & Safety Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Full Service Across All 7 Emirates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentImage === idx
                ? "w-8 h-2 bg-accent"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
