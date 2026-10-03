import { Users, Calendar, MapPin, Award } from "lucide-react";

const StatsBar = () => {
  const stats = [
    {
      icon: Users,
      number: "250+",
      label: "Specialists Mobilized",
      description: "Certified & pre-screened workforce deployed across UAE",
    },
    {
      icon: Calendar,
      number: "10+",
      label: "Years in UAE Market",
      description: "Proven track record in MEP & technical contracting",
    },
    {
      icon: MapPin,
      number: "7 Emirates",
      label: "Nationwide Coverage",
      description: "Active projects in Dubai, Abu Dhabi, Sharjah & all Emirates",
    },
    {
      icon: Award,
      number: "100%",
      label: "Safety & Compliance",
      description: "Adherence to UAE Labor Ministry & Municipality regulations",
    },
  ];

  return (
    <section className="bg-slate-900 text-white border-b border-slate-800 py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-0.5">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;