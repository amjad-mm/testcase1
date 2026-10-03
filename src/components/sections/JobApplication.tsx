import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MessageCircle, Mail, Phone, Briefcase, FileCheck2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    nationality: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const positions = [
    "Civil Engineer",
    "Mechanical Engineer",
    "Electrical Technician",
    "Welder (SMAW / GTAW)",
    "Mason",
    "Carpenter",
    "Scaffolder",
    "Rigger",
    "Painter",
    "Plumber",
    "HVAC Technician",
    "Site Supervisor",
    "Safety Officer (HSE)",
    "Project Coordinator",
    "Interior Joiner",
    "Gypsum & Ceiling Installer",
    "Tile & Flooring Specialist",
    "Steel Fabricator",
    "Other Trade Position",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const to = "info@shamsulimara.com";
    const subject = encodeURIComponent(`Job Application - ${formData.position || "Technical Candidate"}`);
    const body = encodeURIComponent(
      `Dear HR & Recruitment Team,

I am writing to submit my application for the ${formData.position || "Technical"} position at Shamsul Imara Technical Services.

Candidate Profile:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Nationality: ${formData.nationality}
- Current Location: ${formData.location}

Professional Background:
- Position Applied: ${formData.position}
- Years of Experience: ${formData.experience}

Cover Note / Qualifications:
${formData.message}

Please find my CV/Resume attached or I will forward it upon receipt of this email.

Best regards,
${formData.fullName}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");

    toast({
      title: "Application Prepared",
      description: "Email client opened with your application details. Please attach your CV/photo.",
    });

    setIsSubmitting(false);
  };

  const handleWhatsAppApply = () => {
    const message = encodeURIComponent(
      `Hello HR Team! My name is ${formData.fullName || "Candidate"} and I would like to apply for the position of ${formData.position || "Technical Specialist"}.
      
Experience: ${formData.experience || "N/A"}
Nationality: ${formData.nationality || "N/A"}
Location: ${formData.location || "UAE"}

Please let me know how I can send my CV.`
    );
    window.open(`https://wa.me/971523184375?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Urgent Openings & Quick Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Urgent Openings Card */}
            <Card className="bg-slate-900 text-white border-slate-800 shadow-card rounded-xl overflow-hidden">
              <CardHeader className="pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider">
                  <Briefcase className="h-4 w-4" />
                  <span>Immediate Requirements</span>
                </div>
                <CardTitle className="text-lg font-bold text-white mt-1">
                  Current Urgent Openings
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-200">Certified Welders (SMAW / GTAW)</span>
                    <span className="bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded text-xs">
                      5+ Open
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-200">Structural Steel Fabricators</span>
                    <span className="bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded text-xs">
                      3+ Open
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-200">Electrical & MEP Technicians</span>
                    <span className="bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded text-xs">
                      4+ Open
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-200">Commercial Plumbers</span>
                    <span className="bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded text-xs">
                      3+ Open
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-200">Site Supervisors & HSE Officers</span>
                    <span className="bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded text-xs">
                      2+ Open
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Apply via WhatsApp */}
            <Card className="bg-white border border-slate-200/90 shadow-subtle rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Fast-Track WhatsApp</h3>
                  <p className="text-xs text-slate-500">Immediate response from recruiters</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Connect directly with our recruitment coordinators for ongoing site deployments.
              </p>
              <Button
                type="button"
                onClick={handleWhatsAppApply}
                className="w-full bg-[#25D366] hover:bg-[#1fb355] text-white gap-2 font-medium text-xs sm:text-sm py-2.5 rounded-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat with Recruitment Desk</span>
              </Button>
            </Card>

            {/* Direct HR Helpline */}
            <Card className="bg-white border border-slate-200/90 shadow-subtle rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Recruitment Hotline</h3>
                  <p className="text-xs text-slate-500">Sunday - Friday (8 AM - 6 PM)</p>
                </div>
              </div>
              <a
                href="tel:+971523184375"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                <span>+971 52 318 4375</span>
              </a>
            </Card>
          </div>

          {/* Right Column: Formal Application Form (8 cols) */}
          <div className="lg:col-span-8">
            <Card className="bg-white border border-slate-200 shadow-card rounded-2xl">
              <CardHeader className="p-6 sm:p-8 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-1">
                  <FileCheck2 className="h-4 w-4" />
                  <span>Candidate Registration</span>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Submit Your Professional Application
                </CardTitle>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                  Complete the credentials below. Please ensure your contact details are accurate so our HR evaluation team can reach you promptly.
                </p>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="fullName" className="text-xs font-medium text-slate-700">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        placeholder="e.g. Mohammed Salem"
                        className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="nationality" className="text-xs font-medium text-slate-700">
                        Nationality *
                      </Label>
                      <Input
                        id="nationality"
                        value={formData.nationality}
                        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                        required
                        placeholder="e.g. Indian, Pakistani, Filipino, Egyptian"
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="youremail@example.com"
                        className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs font-medium text-slate-700">
                        Phone / WhatsApp Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="+971 5X XXX XXXX"
                        className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="position" className="text-xs font-medium text-slate-700">
                        Position Applying For *
                      </Label>
                      <Select
                        value={formData.position}
                        onValueChange={(val) => setFormData({ ...formData, position: val })}
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 text-sm">
                          <SelectValue placeholder="Select technical trade" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((pos) => (
                            <SelectItem key={pos} value={pos}>
                              {pos}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="experience" className="text-xs font-medium text-slate-700">
                        Total Industry Experience *
                      </Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(val) => setFormData({ ...formData, experience: val })}
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 text-sm">
                          <SelectValue placeholder="Select years" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2 years">1 - 2 Years</SelectItem>
                          <SelectItem value="3-5 years">3 - 5 Years</SelectItem>
                          <SelectItem value="6-8 years">6 - 8 Years</SelectItem>
                          <SelectItem value="10+ years">10+ Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="location" className="text-xs font-medium text-slate-700">
                      Current Location in UAE *
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Dubai (Al Quoz / Deira), Sharjah, Abu Dhabi"
                      required
                      className="bg-slate-50 border-slate-200 focus:bg-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-medium text-slate-700">
                      Brief Summary / Qualifications & Certifications
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Highlight your previous contracting projects, trade test certificates, or visa status..."
                      className="min-h-[100px] bg-slate-50 border-slate-200 focus:bg-white text-sm leading-relaxed"
                    />
                  </div>

                  <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                    <span className="font-semibold">📎 CV & Photo Submission:</span> Upon clicking "Submit Application", your email client will generate a pre-formatted message. Please attach your updated CV and passport-size photo to complete your file.
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary-hover text-white py-6 rounded-lg gap-2 text-sm font-medium shadow-sm"
                    >
                      <Send className="h-4 w-4" />
                      <span>{isSubmitting ? "Preparing Submission..." : "Submit Application via Email"}</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleWhatsAppApply}
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 py-6 rounded-lg gap-2 text-sm font-medium"
                    >
                      <MessageCircle className="h-4 w-4 text-[#25D366]" />
                      <span>Quick Apply on WhatsApp</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobApplication;
