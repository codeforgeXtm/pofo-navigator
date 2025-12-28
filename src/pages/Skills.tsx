import { VerticalSidebar } from "@/components/VerticalSidebar";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="lg:ml-20">
        <SkillsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Skills;
