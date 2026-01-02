import { VerticalSidebar } from "@/components/VerticalSidebar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen w-full">
      {/* Transparent Sidebar overlaid on image */}
      <VerticalSidebar isWhite />
      
      {/* Scrollable Hero */}
      <HeroSection />
      
      {/* Footer at bottom of image */}
      <Footer isTransparent />
    </div>
  );
};

export default Index;
