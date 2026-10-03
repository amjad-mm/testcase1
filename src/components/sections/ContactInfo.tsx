import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ShieldCheck, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    urgency: "Standard (24-48 hours)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Workforce Solutions & Trade Staffing",
    "Contracting & Interior Fit-Outs",
    "Civil & Mechanical Works",
    "Oil & Gas Technical Support",
    "Construction Project Supervision",
    "Finishing, Painting & Tiling",
    "Commercial Kitchen Equipment",
    "General Contracting Inquiry",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const to = "info@shamsulimara.com";
    const subject = encodeURIComponent(`Project Inquiry - ${formData.service || "Contracting & Technical Services"}`);
    const body = encodeURIComponent(
      `Dear Shamsul Imara Team,

I am requesting a project assessment and proposal.

Client Details:
- Full Name: ${formData.fullName}
- Company: ${formData.company || "Individual / Private Client"}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Required:
- Service: ${formData.service}
- Urgency: ${formData.urgency}

Project Scope & Requirements:
${formData.message}

Please contact me with availability and estimated cost breakdown.

Best regards,
${formData.fullName}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");

    toast({
      title: "Inquiry Prepared",
      description: "Email client launched with your project details. We will respond promptly.",
    });

    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Shamsul Imara! I'm ${formData.fullName || "a client"} from ${formData.company || "UAE"}.
      
Interested in: ${formData.service || "Technical Contracting"}
Phone: ${formData.phone || "N/A"}
Email: ${formData.email || "N/A"}

Project Details:
${formData.message || "I would like to inquire about your services."}

Please advise on next steps.`
    );
    window.open(`https://wa.me/971523184375?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Comprehensive Proposal Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="bg-white border border-slate-200 shadow-card rounded-2xl overflow-hidden">
              <CardHeader className="p-4 sm:p-8 pb-4 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-1">
                  <Building2 className="h-4 w-4" />
                  <span>Request Project Proposal</span>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Discuss Your Contracting or Workforce Requirements
                </CardTitle>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                  Submit project parameters below. For urgent mobilization, reach us via WhatsApp or hotline for real-time dispatch.
                </p>
              </CardHeader>

              <CardContent className="p-4 sm:p-8 pt-4 sm:pt-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="fullName" className="text-xs font-medium text-slate-700">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs font-medium text-slate-700">
                        Company / Organization
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization or project name"
                        className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-medium text-slate-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@company.ae"
                        className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs font-medium text-slate-700">
                        Phone / WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+971 5X XXX XXXX"
                        className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="service" className="text-xs font-medium text-slate-700">
                        Service Scope Required *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(val) => setFormData({ ...formData, service: val })}
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 text-sm">
                          <SelectValue placeholder="Select service category" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((svc) => (
                            <SelectItem key={svc} value={svc}>
                              {svc}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="urgency" className="text-xs font-medium text-slate-700">
                        Project Urgency
                      </Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(val) => setFormData({ ...formData, urgency: val })}
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Standard (24-48 hours)">Standard (24-48 hours)</SelectItem>
                          <SelectItem value="High Priority (Within 24 hours)">High Priority (Within 24 hours)</SelectItem>
                          <SelectItem value="Urgent Site Mobilization (Immediate)">Urgent Site Mobilization (Immediate)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-medium text-slate-700">
                      Project Details & Requirements *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please specify location (e.g. Dubai, Abu Dhabi), estimated number of personnel needed, scope of work, and project timeline..."
                      className="min-h-[110px] bg-slate-50 border-slate-200 focus:bg-white text-sm leading-relaxed"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary-hover text-white py-3.5 sm:py-6 px-4 rounded-lg gap-2 text-xs sm:text-sm font-medium shadow-sm whitespace-normal text-center h-auto leading-normal"
                    >
                      <Send className="h-4 w-4 flex-shrink-0" />
                      <span>{isSubmitting ? "Generating Email..." : "Send Formal Proposal Request"}</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleWhatsApp}
                      className="border-slate-300 text-slate-800 hover:bg-slate-50 py-3.5 sm:py-6 px-4 rounded-lg gap-2 text-xs sm:text-sm font-medium whitespace-normal h-auto leading-normal"
                    >
                      <MessageCircle className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Office Directory & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <Card className="bg-white border border-slate-200 shadow-card rounded-2xl p-4 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                <Building2 className="h-5 w-5 text-accent" />
                <span>Head Office & Operations</span>
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Physical Address
                    </div>
                    <div className="text-sm font-medium text-slate-900 mt-0.5">
                      Dubai, United Arab Emirates
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Operational coverage across all 7 Emirates
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Telephone & WhatsApp
                    </div>
                    <div className="flex flex-col gap-1 mt-0.5">
                      <a
                        href="tel:+971523184375"
                        className="text-sm font-medium text-slate-900 hover:text-primary transition-colors"
                      >
                        +971 52 318 4375 (Primary Hotline)
                      </a>
                      <a
                        href="tel:+971523084372"
                        className="text-sm font-medium text-slate-900 hover:text-primary transition-colors"
                      >
                        +971 52 308 4372 (Operations)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Official Inquiries
                    </div>
                    <a
                      href="mailto:info@shamsulimara.com"
                      className="text-sm font-medium text-slate-900 hover:text-primary transition-colors mt-0.5 block"
                    >
                      info@shamsulimara.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Operating Hours
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      Sunday – Thursday: 8:00 AM – 6:00 PM
                    </div>
                    <div className="text-xs text-slate-500">
                      Friday: 9:00 AM – 1:00 PM (24/7 on-call for site emergencies)
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance reassurance */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
                <span>MOHRE Licensed & Municipality Registered Contractor</span>
              </div>
            </Card>

            {/* Embedded Location Map */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6829851535!2d54.947244!3d25.197269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shamsul Imara Technical Services Dubai UAE Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

