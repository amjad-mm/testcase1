import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle2 } from "lucide-react";

const ClientLogos = () => {
  const clients = [
    { name: "Emirates Construction LLC", sector: "General Contracting", logo: "EC", status: "Ongoing MEP Partner" },
    { name: "Gulf Energy Solutions", sector: "Oil & Gas Industrial", logo: "GES", status: "Turnkey Maintenance" },
    { name: "Dubai Infrastructure Corp", sector: "Civil & Infrastructure", logo: "DIC", status: "Workforce Deployment" },
    { name: "National Oil & Gas Services", sector: "Petrochemical & Process", logo: "NOG", status: "Shutdown Crew" },
    { name: "Al Rashid Contracting", sector: "Commercial Towers", logo: "ARC", status: "Interior Fit-Out" },
    { name: "UAE Government Works", sector: "Public Infrastructure", logo: "UGW", status: "Approved Vendor" },
    { name: "Sharjah Development Group", sector: "Urban Development", logo: "SDG", status: "Civil & Plastering" },
    { name: "Abu Dhabi Industrial Works", sector: "Steel Structures", logo: "ADI", status: "Structural Erection" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="h-3.5 w-3.5 text-accent" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Trusted by Leading Organizations Across the UAE
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We take pride in our multi-year partnerships with tier-one construction contractors, industrial conglomerates, and governmental developers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all rounded-xl"
            >
              <CardContent className="p-6 text-center flex flex-col items-center justify-between h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
                  {client.logo}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
                    {client.name}
                  </h3>
                  <div className="text-xs text-slate-500 mb-3">{client.sector}</div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700">
                  <CheckCircle2 className="h-3 w-3 text-accent" />
                  <span>{client.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 bg-slate-100 rounded-full border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Active on over 35+ major project sites across UAE today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;