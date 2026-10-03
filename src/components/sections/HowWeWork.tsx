import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, CheckCircle } from "lucide-react";

import electricalWork from "@/assets/electrical-work.jpg";
import kitchenEquipment from "@/assets/kitchen-equipment.jpg";
import engineeringWorks from "@/assets/engineering-works.jpg";
import steelStructure from "@/assets/steel-structure.jpg";
import manpowerImage from "@/assets/workforce.jpg";
import contractingImage from "@/assets/contract.jpg";
import civilImage from "@/assets/civil.jpg";
import constructionImage from "@/assets/construction.jpg";
import finishingImage from "@/assets/decoration.jpg";

const services = [
  {
    id: 1,
    tag: "MEP & Technical Services",
    title: "Electrical & Plumbing Works",
    image: electricalWork,
    alt: "Professional electrical panel wiring and commercial plumbing installation in UAE",
    description:
      "Comprehensive electromechanical solutions from planning to final commissioning. Certified technicians manage complete power distribution, panel upgrades, energy-efficient lighting, high-pressure water supply networks, and drainage systems under UAE municipal regulations.",
    deliverables: ["Switchgear & distribution panel works", "Sanitary networks & drainage infrastructure", "Emergency repairs & routine maintenance"],
  },
  {
    id: 2,
    tag: "Commercial Hospitality",
    title: "Commercial Kitchen Equipment",
    image: kitchenEquipment,
    alt: "Stainless steel commercial kitchen equipment setup and ventilation in Dubai",
    description:
      "Turnkey procurement, precision installation, and preventative maintenance for commercial hospitality facilities, restaurants, and catering centers. We ensure maximum thermal efficiency, strict food safety standards, and fire-safety compliance.",
    deliverables: ["Heavy-duty cooking ranges & ovens", "Industrial refrigeration & cold rooms", "Kitchen exhaust & grease ventilation ducts"],
  },
  {
    id: 3,
    tag: "Design & Fabrication",
    title: "Specialized Engineering Works",
    image: engineeringWorks,
    alt: "Industrial mechanical and structural engineering design team in UAE",
    description:
      "Multidisciplinary engineering covering mechanical drafting, 3D CAD modeling, custom component fabrication, and on-site assembly. Our engineers ensure every structural and mechanical component aligns with international load-bearing and quality standards.",
    deliverables: ["Precision CAD drafting & structural design", "Custom equipment fabrication", "Mechanical plant maintenance & erection"],
  },
  {
    id: 4,
    tag: "Industrial Construction",
    title: "All Types of Steel Structure Works",
    image: steelStructure,
    alt: "Industrial steel structure warehouse fabrication and mezzanine erection",
    description:
      "Complete fabrication and erection of industrial steel frames, logistics warehouses, storage sheds, mezzanines, and architectural canopies. Built with premium structural steel for enduring resilience and flexibility for future expansions.",
    deliverables: ["Logistics warehouses & factory sheds", "Custom mezzanine platforms & stairways", "Surface treatment, sandblasting & painting"],
  },
  {
    id: 5,
    tag: "Certified Personnel",
    title: "Workforce & Technical Manpower Solutions",
    image: manpowerImage,
    alt: "Certified technical workforce and construction crew in UAE",
    description:
      "Rapid deployment of pre-vetted, certified trade professionals across the UAE. We provide licensed electricians, certified welders (SMAW/GTAW), pipefitters, HVAC technicians, carpenters, masons, and site coordinators for short or long-term contracts.",
    deliverables: ["48–72 hour rapid mobilization across UAE", "Pre-screened & trade-tested technicians", "Complete MOHRE & visa regulatory compliance"],
  },
  {
    id: 6,
    tag: "Architectural Fit-Outs",
    title: "General Contracting & Turnkey Interiors",
    image: contractingImage,
    alt: "Luxury commercial interior contracting and ceiling fit-out in Dubai",
    description:
      "Full-scope interior fit-outs blending functional excellence with refined architectural finish. We handle commercial office build-outs, retail environments, premium joinery, acoustic gypsum ceilings, and customized partition systems.",
    deliverables: ["Bespoke architectural joinery & millwork", "Acoustic gypsum ceilings & drywalls", "Turnkey commercial & retail space fit-outs"],
  },
  {
    id: 7,
    tag: "Structural Services",
    title: "Civil & Mechanical Works",
    image: civilImage,
    alt: "Concrete and civil construction work in UAE",
    description:
      "Robust civil engineering and mechanical support covering foundation works, blockwork, high-strength plastering, structural concrete repairs, and equipment base installations executed with strict laboratory testing standards.",
    deliverables: ["Blockwork, plastering & structural repairs", "Precision tile & natural stone installation", "Mechanical equipment foundation setting"],
  },
  {
    id: 8,
    tag: "On-Site Management",
    title: "Construction Support & Site Supervision",
    image: constructionImage,
    alt: "Construction site management and engineering supervision",
    description:
      "Integrated construction management support to safeguard project schedules and budgets. We supply experienced site engineers, safety inspectors, quality control officers, and workforce coordinators.",
    deliverables: ["On-site QA/QC and safety inspections", "Subcontractor coordination & workflow pacing", "Equipment deployment & material management"],
  },
  {
    id: 9,
    tag: "Surface Refinements",
    title: "Finishing, Tiling & Decorative Works",
    image: finishingImage,
    alt: "High-end wall painting and decorative interior finishes",
    description:
      "Flawless surface finishes that define architectural quality. Our master craftsmen deliver exterior weather-resistant coatings, luxury interior painting, wall cladding, and high-traffic epoxy flooring systems.",
    deliverables: ["Epoxy floor coatings & surface treatments", "Specialty textured coatings & wallpapering", "High-traffic commercial tiling & polish"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="h-3.5 w-3.5 text-accent" />
            <span>Comprehensive Technical Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Specialized Contracting & Engineering Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From precision electromechanical systems to turnkey interior fit-outs and certified trade staffing, our multidisciplinary teams deliver consistent, compliant results across the UAE.
          </p>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-10 sm:space-y-12">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <Card
                key={service.id}
                className="overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-300 bg-white"
              >
                <CardContent className="p-0">
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-stretch`}
                  >
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-slate-100 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-sm border border-slate-700/60 shadow-sm">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                        Service #{String(service.id).padStart(2, "0")}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-800 hover:bg-slate-50 gap-2 font-medium"
                        >
                          <Link to="/contact">
                            <span>Request Service Quote</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;