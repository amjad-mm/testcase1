const WhatsAppIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.268 2 2 8.268 2 16c0 2.658.74 5.147 2.023 7.27L2.24 29.28a1 1 0 001.218 1.218l6.01-1.782A13.926 13.926 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
      fill="#25D366"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.167 19.824c-.334-.167-1.977-.975-2.283-1.087-.306-.111-.529-.167-.752.167-.223.334-.863 1.087-1.058 1.31-.195.223-.39.25-.724.084-.334-.167-1.41-.52-2.686-1.658-.993-.886-1.664-1.98-1.859-2.314-.195-.334-.02-.515.146-.681.151-.15.334-.39.502-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.084-.167-.752-1.812-1.03-2.48-.272-.65-.548-.562-.752-.573-.195-.01-.418-.012-.641-.012s-.585.084-.891.418c-.306.334-1.17 1.143-1.17 2.788s1.198 3.234 1.365 3.457c.167.223 2.357 3.6 5.71 5.048.798.345 1.42.551 1.905.705.802.255 1.532.219 2.11.133.644-.096 1.977-.808 2.256-1.589.278-.78.278-1.45.195-1.589-.084-.14-.306-.223-.64-.39z"
      fill="#FFFFFF"
    />
  </svg>
);

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Shamsul Imara! I'm interested in your technical and contracting services. Could you provide more details?"
    );
    window.open(`https://wa.me/971523184375?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-3 bg-white text-slate-800 rounded-full pl-2 pr-4 sm:pr-5 py-2 shadow-lg hover:shadow-xl border border-slate-200 hover:border-emerald-400 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Crisp Official WhatsApp SVG Icon with Online Status */}
        <div className="relative flex-shrink-0">
          <WhatsAppIcon className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm group-hover:scale-105 transition-transform duration-200" />
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
        </div>

        {/* Action Copy: Highly Legible & Friendly */}
        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors whitespace-nowrap">
            Chat with us
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-emerald-600 flex items-center gap-1.5 leading-tight mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            Online now
          </span>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;



