import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquare } from "lucide-react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Al Rashid",
      company: "Emirates Construction LLC",
      role: "Senior Project Manager",
      content:
        "Shamsul Imara delivered exactly what we needed: certified technicians who arrived fully prepared, trade-tested, and ready to contribute from day one. Their professionalism and schedule discipline exceeded our expectations on the high-rise fit-out.",
      rating: 5,
      project: "Commercial Interior Fit-out & MEP",
    },
    {
      name: "Sarah Johnson",
      company: "Gulf Energy Solutions",
      role: "Operations Director",
      content:
        "Outstanding performance on our industrial shutdown project. The team's strict adherence to international safety protocols and hot-work permits was exemplary. They provided exactly the specialized trade crew we needed for our tight deadline.",
      rating: 5,
      project: "Industrial Facility Maintenance",
    },
    {
      name: "Mohammed Hassan",
      company: "Dubai Infrastructure Corp",
      role: "Construction Director",
      content:
        "Reliable, responsive, and fully compliant manpower services. Shamsul Imara has been our partner across three consecutive infrastructure packages. Their rapid mobilization capability has preserved our milestones repeatedly.",
      rating: 5,
      project: "Infrastructure Development",
    },
    {
      name: "Lisa Rodriguez",
      company: "Al Rashid Contracting",
      role: "Procurement & HR Director",
      content:
        "Exceptional recruitment and technical deployment services. They understand UAE labor legalities thoroughly and consistently supply qualified professionals who integrate seamlessly with our resident engineers.",
      rating: 5,
      project: "Technical Staffing Solutions",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentSlide];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="h-3.5 w-3.5 text-accent" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Client Success Stories & Project Reviews
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Read firsthand accounts from project managers and operations directors who depend on Shamsul Imara Technical Services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-slate-200 shadow-card rounded-2xl overflow-hidden">
            <CardContent className="p-6 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between mb-6">
                <Quote className="h-10 w-10 text-accent/30 flex-shrink-0" />
                <div className="flex space-x-1">
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <blockquote className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed mb-8 italic">
                "{activeTestimonial.content}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-base shadow-sm">
                    {activeTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-bold text-base text-slate-900">
                      {activeTestimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500">
                      {activeTestimonial.role}
                    </div>
                    <div className="text-xs sm:text-sm text-accent font-semibold">
                      {activeTestimonial.company}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-lg">
                  <div className="text-xs text-slate-500 font-medium">Delivered Scope:</div>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold">
                    {activeTestimonial.project}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-slate-300 hover:bg-slate-100 text-slate-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`transition-all duration-200 rounded-full ${
                    currentSlide === index ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-slate-300 hover:bg-slate-100 text-slate-700"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;