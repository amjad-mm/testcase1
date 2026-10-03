import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CompanyStory from "@/components/sections/CompanyStory";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { ChevronRight, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Executive Page Header Banner */}
        <section className="bg-slate-900 text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 border-b border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-4">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
                <span className="text-accent font-medium">About Us</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium mb-4">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>Over 10 Years of Engineering Integrity</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                About Shamsul Imara Technical Services
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                A premier UAE-based contracting firm delivering certified manpower solutions, MEP contracting, and turnkey interior fit-outs across Dubai, Abu Dhabi, and the Northern Emirates.
              </p>
            </div>
          </div>
        </section>

        <CompanyStory />
        <WhyChooseUs />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;