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
      <main className="">
        <SkillsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Skills;
