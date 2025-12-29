import { VerticalSidebar } from "@/components/VerticalSidebar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Transparent Sidebar overlaid on image */}
      <VerticalSidebar />
      
      {/* Scrollable Hero */}
      <HeroSection />
      
      {/* Footer at bottom of image */}
      <Footer isTransparent />
    </div>
  );
};

export default Index;
