import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Sparkles, Landmark, ArrowRight } from "lucide-react";

const IndustriesServed = () => {
  const industries = [
    {
      icon: Building2,
      title: "Building & Infrastructure",
      description: "Residential towers, commercial complexes, and municipal civil engineering projects.",
      projects: "500+ Contracts Executed",
      specialties: ["High-rise developments", "Commercial office parks", "Infrastructure & transit"],
    },
    {
      icon: Factory,
      title: "Oil, Gas & Petrochemical",
      description: "Upstream and downstream maintenance, plant turnaround support, and industrial piping.",
      projects: "150+ Industrial Projects",
      specialties: ["Refinery maintenance", "Pipeline fabrication", "Industrial shutdowns"],
    },
    {
      icon: Sparkles,
      title: "Commercial & Retail Interiors",
      description: "Turnkey architectural fit-outs, luxury joinery, and specialized finishes for retail & hospitality.",
      projects: "300+ Completed Fit-Outs",
      specialties: ["Corporate headquarters", "Hospitality venues", "Luxury retail outlets"],
    },
    {
      icon: Landmark,
      title: "Government & Public Works",
      description: "Public sector facilities, educational campuses, and municipal infrastructure works.",
      projects: "100+ Public Contracts",
      specialties: ["Institutional buildings", "Utility substations", "Civil maintenance"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Factory className="h-3.5 w-3.5 text-accent" />
            <span>Industrial Footprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Key Industries We Serve Across UAE
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering specialized workforce, MEP engineering, and contracting solutions across the UAE’s most demanding sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="bg-white border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all rounded-xl flex flex-col justify-between"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                    {industry.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>

                  <div className="text-xs font-bold text-accent mb-4">
                    {industry.projects}
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {industry.specialties.map((specialty, i) => (
                      <div
                        key={i}
                        className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md"
                      >
                        • {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Executive Pre-Footer Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-card">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Ready to Mobilize for Your Sector?
          </h3>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with a contractor that understands your industry's specific compliance, safety, and milestone requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              className="bg-accent hover:bg-accent-hover text-white px-4 sm:px-7 py-3.5 sm:py-6 h-auto text-sm sm:text-base font-medium rounded-lg gap-2 whitespace-normal text-center"
            >
              <Link to="/contact">
                <span>Request Industry Proposal</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 sm:px-7 py-3.5 sm:py-6 h-auto text-sm sm:text-base font-medium rounded-lg whitespace-normal text-center"
            >
              <a href="tel:+971523184375">Call Our Direct Line</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;