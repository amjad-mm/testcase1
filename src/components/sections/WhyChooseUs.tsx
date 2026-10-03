import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

import fullComplianceImg from "@/assets/full-compliance.jpg";
import fastMobilizationImg from "@/assets/fast-mobilization.jpg";
import skilledWorkforceImg from "@/assets/skilled-workforce.jpg";
import dedicatedSupportImg from "@/assets/dedicated-support.jpg";
import qualityAssuranceImg from "@/assets/quality-assurance.jpg";
import flexibleSolutionsImg from "@/assets/flexible-solutions.jpg";

const WhyChooseUs = () => {
  const advantages = [
    {
      image: fullComplianceImg,
      title: "100% Regulatory Compliance",
      description:
        "Fully licensed by UAE Ministry of Economy and Labor Ministry. We maintain all mandatory commercial permits, safety insurance, and labor legalities.",
    },
    {
      image: fastMobilizationImg,
      title: "Rapid 48–72h Mobilization",
      description:
        "Immediate workforce deployment to active project sites across Dubai, Abu Dhabi, Sharjah, and northern Emirates without operational downtime.",
    },
    {
      image: skilledWorkforceImg,
      title: "Pre-Screened & Trade-Tested",
      description:
        "Every technician and tradesperson undergoes rigorous skill assessment and safety training before deployment to client job sites.",
    },
    {
      image: dedicatedSupportImg,
      title: "24/7 Dedicated Account Oversight",
      description:
        "Direct communication with dedicated project coordinators ensuring real-time response to urgent site adjustments and labor requirements.",
    },
    {
      image: qualityAssuranceImg,
      title: "Rigorous QA/QC Inspection",
      description:
        "Continuous on-site supervision and adherence to international ISO and UAE municipality standards to prevent rework and defects.",
    },
    {
      image: flexibleSolutionsImg,
      title: "Tailored Contracting Models",
      description:
        "Customizable frameworks spanning hourly, daily, milestone, or turnkey contracting agreements structured around your budget.",
    },
  ];

  const certifications = [
    "UAE Labor Ministry (MOHRE) Licensed",
    "Dubai Municipality Approved Contractor",
    "UAE Chamber of Commerce Registered",
    "Government Infrastructure Contractor Registered",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            <span>The Shamsul Imara Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Why Leading UAE Developers & Contractors Partner With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliver the reliability, speed, and technical rigor that modern commercial, industrial, and infrastructure projects demand.
          </p>
        </div>

        {/* Advantages Grid - 3 cards per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {advantages.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-300 rounded-xl flex flex-col"
            >
              <div className="w-full h-48 sm:h-52 bg-slate-100 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Compliance Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 lg:p-12 shadow-subtle mb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Certifications List */}
            <div className="lg:col-span-7">
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                Legal & Safety Framework
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Fully Certified & Compliant Operations
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Our operations comply fully with the UAE Federal Law and Emirate-specific civil defense guidelines. We ensure all deployed personnel possess active health insurance, legal residency, and safety training credentials.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 p-6 rounded-xl bg-slate-900 text-white text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-sm font-semibold text-slate-200 mb-1">Client Satisfaction</div>
                <div className="text-xs text-slate-400">Based on multi-year contracting retention and audit surveys</div>
              </div>
              <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">48-72h</div>
                <div className="text-xs text-slate-600 font-medium">Average Mobilization</div>
              </div>
              <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-xs text-slate-600 font-medium">On-Call Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-card">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Ready to Partner With Shamsul Imara?
          </h3>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our engineering and staffing team today for a transparent assessment and competitive project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              className="bg-accent hover:bg-accent-hover text-white px-4 sm:px-7 py-3.5 sm:py-6 h-auto text-sm sm:text-base font-medium rounded-lg gap-2 whitespace-normal text-center"
            >
              <Link to="/contact">
                <span>Request Project Assessment</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 sm:px-7 py-3.5 sm:py-6 h-auto text-sm sm:text-base font-medium rounded-lg whitespace-normal text-center"
            >
              <a href="tel:+971523184375">Call Direct: +971 52 318 4375</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
