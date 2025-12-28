import { VerticalSidebar } from "@/components/VerticalSidebar";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="lg:ml-20">
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
};

export default About;
