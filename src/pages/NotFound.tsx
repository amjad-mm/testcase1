import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArrowLeft, Home, PhoneCall, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pt-20 sm:pt-24 lg:pt-28">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-lg w-full text-center bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-card">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mx-auto mb-6 text-amber-600">
            <HelpCircle className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
            Error 404 — Page Not Found
          </span>

          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Requested Page Unavailable
          </h1>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            The page you are looking for ({location.pathname}) might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="w-full sm:w-auto">
              <Button className="w-full bg-[#0F2847] hover:bg-[#153A65] text-white font-medium gap-2">
                <Home className="w-4 h-4" />
                Back to Homepage
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 gap-2">
                <PhoneCall className="w-4 h-4" />
                Contact Dispatch
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default NotFound;

