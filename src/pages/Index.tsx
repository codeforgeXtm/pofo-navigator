import { VerticalSidebar } from "@/components/VerticalSidebar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import SEO from "@/components/Seo";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <SEO
        title="Home"
        description="Welcome to Babafemi's portfolio. Building things that inspire and move people."
        keywords="babafemi, portfolio, creator, strategist, founder, home"
        ogUrl="https://www.justbabafemi.com/"
      />
    <div className="relative min-h-screen w-full">
      {/* Transparent Sidebar overlaid on image */}
      <VerticalSidebar isWhite />
      
      {/* Scrollable Hero */}
      <HeroSection />
      
      {/* Footer at bottom of image */}
      <Footer isTransparent />
    </div>
    </>
  );
};

export default Index;
