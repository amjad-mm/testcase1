import React, { useEffect, useState } from "react";

interface BrandedLoaderProps {
  onComplete?: () => void;
  minDurationMs?: number;
}

const BrandedLoader: React.FC<BrandedLoaderProps> = ({
  onComplete,
  minDurationMs = 1600,
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scrolling during the initial loading experience
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Progress bar fills smoothly across minDurationMs
    const progressStartTimer = setTimeout(() => {
      setProgress(100);
    }, 40);

    // Trigger graceful curtain exit at minDurationMs
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, minDurationMs);

    // Unmount completely from DOM after fade-out transition finishes
    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = originalOverflow;
      if (onComplete) onComplete();
    }, minDurationMs + 450);

    return () => {
      clearTimeout(progressStartTimer);
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [minDurationMs, onComplete]);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-label="Loading Shamsul Imara Technical Services"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none bg-[#05111F] transition-all duration-500 ease-out ${
        isExiting ? "opacity-0 pointer-events-none scale-[1.015]" : "opacity-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #0F2847 0%, #071728 55%, #030B14 100%)",
      }}
    >
      <style>{`
        @keyframes siDrawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes siSunRise {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes siAuraPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.05);
          }
        }
        @keyframes siBrandFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .si-dune-primary {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          animation: siDrawLine 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
        }
        .si-dune-secondary {
          stroke-dasharray: 280;
          stroke-dashoffset: 280;
          animation: siDrawLine 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }
        .si-arch {
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: siDrawLine 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
        }
        .si-sun {
          animation: siSunRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          transform-origin: 140px 60px;
        }
        .si-sun-aura {
          animation: siSunRise 0.8s ease-out 0.1s both, siAuraPulse 3s ease-in-out infinite;
          transform-origin: 140px 60px;
        }
        .si-brand-reveal {
          animation: siBrandFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
        }
      `}</style>

      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Visual Metaphor: Shams (Sun) rising over the Arabian Dune & Architectural Vault (Imara) */}
        <div className="relative w-64 h-32 sm:w-72 sm:h-36 flex items-center justify-center">
          <svg
            viewBox="0 0 280 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
            aria-hidden="true"
          >
            <defs>
              {/* Soft Golden Dawn Aura */}
              <radialGradient id="siDawnGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#D97706" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
              </radialGradient>

              {/* Architectural Gold Stroke */}
              <linearGradient id="siGoldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.25" />
                <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#FBBF24" stopOpacity="1" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.35" />
              </linearGradient>

              {/* Desert Dune Soft Contour */}
              <linearGradient id="siDuneSoft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Glowing Sun Aura */}
            <circle
              cx="140"
              cy="58"
              r="40"
              fill="url(#siDawnGlow)"
              className="si-sun-aura"
            />

            {/* The Sun ("Shams") — Minimal Geometric Crest & Celestial Rays */}
            <g className="si-sun">
              {/* Semicircular Sun Crest */}
              <path
                d="M 122 64 A 18 18 0 0 1 158 64"
                stroke="#FBBF24"
                strokeWidth="1.75"
                strokeLinecap="round"
                fill="none"
              />

              {/* Minimal Geometric Sun Rays (Arabian Celestial Geometry) */}
              <line x1="140" y1="36" x2="140" y2="44" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="126" y1="41" x2="131" y2="47" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="154" y1="41" x2="149" y2="47" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="116" y1="52" x2="123" y2="55" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="164" y1="52" x2="157" y2="55" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Subtle Arabian Architectural Vault / Arch ("Imara") */}
            <path
              d="M 118 96 C 118 78, 132 68, 140 56 C 148 68, 162 78, 162 96"
              stroke="#F59E0B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeOpacity="0.8"
              fill="none"
              className="si-arch"
            />

            {/* Primary Desert Dune Ridge into Modern Structural Horizon */}
            <path
              d="M 15 98 C 65 98, 95 64, 140 64 C 185 64, 215 90, 265 90"
              stroke="url(#siGoldStroke)"
              strokeWidth="1.75"
              strokeLinecap="round"
              fill="none"
              className="si-dune-primary"
            />

            {/* Secondary Soft Foreground Dune Contour */}
            <path
              d="M 35 106 C 85 106, 125 80, 168 80 C 215 80, 245 102, 265 102"
              stroke="url(#siDuneSoft)"
              strokeWidth="1.25"
              strokeLinecap="round"
              fill="none"
              className="si-dune-secondary"
            />

            {/* Center Origin Dot */}
            <circle
              cx="140"
              cy="64"
              r="2"
              fill="#FBBF24"
              className="si-sun"
            />
          </svg>
        </div>

        {/* Brand Reveal: Monogram Emblem & Authoritative Corporate Typography */}
        <div className="flex flex-col items-center mt-2 si-brand-reveal">
          {/* SI Corporate Monogram */}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-white text-sm shadow-md border border-amber-400/30 mb-2.5">
            SI
          </div>

          {/* Primary Name */}
          <h2 className="text-base sm:text-lg font-bold text-white tracking-[0.24em] uppercase leading-tight font-sans">
            Shamsul Imara
          </h2>

          {/* Specialty Subtitle */}
          <p className="text-[10px] sm:text-xs font-semibold text-amber-400/90 tracking-[0.3em] uppercase mt-1">
            Technical Services LLC
          </p>

          {/* Region Tag */}
          <p className="text-[9px] font-medium text-slate-400 tracking-[0.25em] uppercase mt-1">
            Dubai • United Arab Emirates
          </p>
        </div>

        {/* Elegant Minimal Hairline Progress Bar */}
        <div className="w-36 sm:w-44 h-[2px] bg-slate-800/90 rounded-full overflow-hidden mt-6">
          <div
            className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 rounded-full transition-all ease-out"
            style={{
              width: `${progress}%`,
              transitionDuration: `${minDurationMs}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandedLoader;

