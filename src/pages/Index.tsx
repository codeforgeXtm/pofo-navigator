import { VerticalSidebar } from "@/components/VerticalSidebar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Vertical Sidebar Navigation */}
      <VerticalSidebar />

      {/* Main Content */}
      <main className="lg:ml-20">
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
