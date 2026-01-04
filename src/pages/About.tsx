import { VerticalSidebar } from "@/components/VerticalSidebar";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import SEO from "@/components/Seo";

const About = () => {
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
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="">
        <AboutSection />
        <Footer />
      </main>
    </div>
    </>
  );
};

export default About;
