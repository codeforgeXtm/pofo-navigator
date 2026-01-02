import { VerticalSidebar } from "@/components/VerticalSidebar";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="">
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
};

export default About;
