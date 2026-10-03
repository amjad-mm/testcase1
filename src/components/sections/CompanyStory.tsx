import { CheckCircle2, Shield, Building2, Check } from "lucide-react";
import officeImage from "@/assets/professional-service-person.jpg";

const CompanyStory = () => {
  const specializedServices = [
    "Workforce Solutions & Certified Manpower",
    "Plumbing & Sanitary Network Installations",
    "Commercial & Industrial Painting Contracting",
    "False Ceilings & Light Partition Systems",
    "Carpentry & Architectural Wood Flooring",
    "HVAC, Ventilation & Air Filtration Systems",
    "Electrical Fittings, Panels & Fixture Repairs",
    "Electromechanical (MEP) Maintenance",
    "Structural Plaster & Masonry Works",
    "Precision Floor & Wall Tiling Works",
    "Electromechanical Equipment Installation",
    "Turnkey Interior Finishing & Fit-Outs",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Story Narrative & Services Grid (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Building2 className="h-3.5 w-3.5 text-accent" />
                <span>Our Corporate Background</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                A Decade of Engineering Precision & Workforce Excellence in UAE
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                With over a decade of hands-on industry experience,{" "}
                <strong className="text-slate-900 font-semibold">
                  Shamsul Imara Technical Services (SITS)
                </strong>{" "}
                has evolved into one of the UAE’s most dependable technical contracting and workforce solutions partners. Founded on uncompromising principles of safety, craftsmanship, and accountability, we bridge the gap between complex engineering challenges and certified execution.
              </p>
              <p>
                Today, we operate across all seven Emirates, powering residential, commercial, industrial, and infrastructure developments. Whether mobilizing turnkey electromechanical crews or executing specialized interior architectural works, our focus remains absolute: delivering on-schedule, fully compliant, and cost-effective solutions.
              </p>
            </div>

            {/* Specialized Capabilities Grid */}
            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>Specialized Capabilities & Technical Scope:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specializedServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footnote reassurance */}
            <p className="text-xs sm:text-sm text-slate-500 pt-1">
              All services are delivered in strict compliance with UAE municipality codes, civil defense regulations, and Ministry of Human Resources & Emiratisation (MOHRE) standards.
            </p>
          </div>

          {/* Framed Image Column (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-slate-100">
              <img
                src={officeImage}
                alt="Shamsul Imara Technical Services Engineer on site"
                className="w-full h-[360px] sm:h-[460px] lg:h-[540px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Certified Project Execution
                    </div>
                    <div className="text-xs text-slate-500">
                      Trusted by top contractors & developers in UAE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;