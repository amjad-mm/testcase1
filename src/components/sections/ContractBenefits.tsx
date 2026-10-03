import { ShieldCheck, PiggyBank, Award, Scale, Headphones, Handshake, Check } from "lucide-react";
import professionalPerson1 from "@/assets/professional-service-person1.jpg";

const ContractBenefits = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Professional & Reliable Service",
      details: [
        "Guaranteed skilled workforce with proven technical expertise.",
        "On-time delivery of projects and maintenance milestones.",
        "Transparent contracting terms that build long-term trust.",
      ],
    },
    {
      icon: PiggyBank,
      title: "Cost Predictability & Efficiency",
      details: [
        "Fixed contract rates prevent budget spikes and hidden costs.",
        "Long-term savings through systematic preventive maintenance.",
        "Customizable workforce packages tailored to project stages.",
      ],
    },
    {
      icon: Award,
      title: "Rigorous Quality Assurance",
      details: [
        "Adherence to international engineering codes and safety norms.",
        "Utilization of verified, certified tools and premium materials.",
        "Continuous quality control audits by senior site supervisors.",
      ],
    },
    {
      icon: Scale,
      title: "Accountability & Legal Protection",
      details: [
        "Clear contractual SLAs safeguarding client rights and timelines.",
        "Fully licensed operations under UAE labor and trade regulations.",
        "Service warranties and workmanship guarantees included.",
      ],
    },
    {
      icon: Headphones,
      title: "Single Point of Contact & Peace of Mind",
      details: [
        "One-stop solution covering MEP, civil, interiors, and staffing.",
        "Dedicated account managers available 24/7 for urgent site needs.",
        "Hassle-free project management minimizing client overhead.",
      ],
    },
    {
      icon: Handshake,
      title: "Long-Term Strategic Support",
      details: [
        "Priority workforce mobilization for contracted enterprise clients.",
        "Proactive scheduled inspections and lifecycle maintenance.",
        "Scalable workforce deployment that expands with your portfolio.",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Partnership Value</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Strategic Benefits of Contracting With Shamsul Imara
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate project delays, labor shortages, and regulatory hurdles with structured service agreements backed by certified technical oversight.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Framed Image (4 cols on lg) */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-white sticky top-28">
              <img
                src={professionalPerson1}
                alt="Shamsul Imara certified engineering technician"
                className="w-full h-[320px] sm:h-[400px] lg:h-[500px] object-cover object-top"
              />
              <div className="p-6 bg-slate-900 text-white">
                <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                  Guaranteed Standards
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  Complete Regulatory Safeguards
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every contract includes full insurance coverage, MOHRE compliance, and professional indemnity protection.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Grid (8 cols on lg) */}
          <div className="lg:col-span-8 order-1 lg:order-2 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-subtle hover:border-slate-300 hover:shadow-card transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractBenefits;