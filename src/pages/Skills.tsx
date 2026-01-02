import { VerticalSidebar } from "@/components/VerticalSidebar";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="ml-10 sm:ml-12 lg:ml-20">
        <SkillsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Skills;
