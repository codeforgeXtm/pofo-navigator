import { VerticalSidebar } from "@/components/VerticalSidebar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen Hero Background */}
      <HeroSection />
      
      {/* Transparent Sidebar overlaid on image */}
      <VerticalSidebar />
      
      {/* Footer overlaid at bottom */}
      <Footer isTransparent />
    </div>
  );
};

export default Index;
