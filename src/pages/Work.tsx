import { VerticalSidebar } from "@/components/VerticalSidebar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="ml-10 sm:ml-12 lg:ml-20">
        <PortfolioSection />
        <Footer />
      </main>
    </div>
  );
};

export default Work;
