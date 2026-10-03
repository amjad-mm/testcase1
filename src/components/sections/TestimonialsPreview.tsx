import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Building } from "lucide-react";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "Ahmed Al Rashid",
      company: "Emirates Construction LLC",
      role: "Senior Project Manager",
      project: "Commercial High-Rise MEP & Interior Fit-Out",
      content:
        "Shamsul Imara mobilized 45 certified technicians to our site within 48 hours. Their trade testing is rigorous, their safety protocols on-site are exemplary, and our MEP milestones were handed over two weeks ahead of schedule.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "Gulf Energy Solutions",
      role: "Operations Director",
      project: "Industrial Facility Maintenance & Piping",
      content:
        "In the industrial and oil & gas sector, safety and regulatory documentation are non-negotiable. SITS provided specialized welders and mechanical technicians who integrated seamlessly with our HSE standards.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building className="h-3.5 w-3.5 text-accent" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Trusted by UAE Contractors & Facility Operators
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover why tier-one construction firms and industrial operators rely on Shamsul Imara for on-demand workforce and contracting execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all rounded-xl"
            >
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-slate-300" />
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{item.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.role}</div>
                      <div className="text-xs font-semibold text-accent">{item.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-slate-300 text-slate-800 hover:bg-slate-100 gap-2 font-medium px-4 sm:px-6 py-3 sm:py-5 h-auto rounded-lg text-xs sm:text-sm whitespace-normal max-w-full inline-flex text-center"
          >
            <Link to="/clients">
              <span>View All Client Case Studies & Partners</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;