import { VerticalSidebar } from "@/components/VerticalSidebar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

const Work = () => {
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="lg:ml-20">
        <PortfolioSection />
        <Footer />
      </main>
    </div>
  );
};

export default Work;
