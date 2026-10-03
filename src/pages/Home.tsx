import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CompanyStory from "@/components/sections/CompanyStory";
import ContractBenefits from "@/components/sections/ContractBenefits";
import ServicesSection from "@/components/sections/HowWeWork";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <Hero />
        <StatsBar />
        <CompanyStory />
        <ContractBenefits />
        <ServicesSection />
        <TestimonialsPreview />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;