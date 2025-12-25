import { VerticalSidebar } from "@/components/VerticalSidebar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Vertical Sidebar Navigation */}
      <VerticalSidebar />

      {/* Main Content - offset for sidebar */}
      <main className="ml-20">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
