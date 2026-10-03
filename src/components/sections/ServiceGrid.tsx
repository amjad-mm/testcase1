import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers } from "lucide-react";

import manpowerImage from "@/assets/workforce.jpg";
import contractingImage from "@/assets/contract.jpg";
import civilImage from "@/assets/civil.jpg";
import oilGasImage from "@/assets/oil-gas.jpg";
import constructionImage from "@/assets/construction.jpg";
import finishingImage from "@/assets/decoration.jpg";

const ServiceGrid = () => {
  const services = [
    {
      image: manpowerImage,
      tag: "Workforce",
      title: "Workforce Solutions & Trade Staffing",
      description:
        "Licensed technicians, certified welders (SMAW/GTAW), pipefitters, electricians, masons, and scaffolders ready for deployment across the UAE.",
    },
    {
      image: contractingImage,
      tag: "Interiors",
      title: "Contracting & Interior Fit-Outs",
      description:
        "Architectural joinery, gypsum ceiling designs, commercial partitions, decorative finishes, and turnkey commercial interior works.",
    },
    {
      image: civilImage,
      tag: "Civil Works",
      title: "Civil & Mechanical Engineering",
      description:
        "Blockwork, high-strength plastering, structural concrete repairs, precision tiling, and industrial mechanical equipment installation.",
    },
    {
      image: oilGasImage,
      tag: "Industrial",
      title: "Oil & Gas Technical Support",
      description:
        "Specialized maintenance, pipeline support, process plant maintenance, and industrial facility shutdown assistance with strict safety protocols.",
    },
    {
      image: constructionImage,
      tag: "Management",
      title: "Construction Project Support",
      description:
        "Experienced site supervisors, QA/QC documentation specialists, HSE safety officers, and technical coordination for master developers.",
    },
    {
      image: finishingImage,
      tag: "Finishes",
      title: "Finishing & Surface Enhancement",
      description:
        "High-performance exterior coatings, commercial floorings, wallpapering, and premium decorative treatments built to withstand UAE climate.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="h-3.5 w-3.5 text-accent" />
            <span>Discipline Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Core Technical & Contracting Disciplines
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered packages tailored for UAE infrastructure, commercial developments, oil & gas operations, and luxury residential facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-300 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-48 bg-slate-100 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-sm">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-slate-300 text-slate-800 hover:bg-slate-50 gap-2 font-medium"
                >
                  <Link to="/contact">
                    <span>Inquire for Project</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;