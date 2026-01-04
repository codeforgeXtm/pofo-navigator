import { VerticalSidebar } from "@/components/VerticalSidebar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import SEO from "@/components/Seo";

const Contact = () => {
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
        <ContactSection />
        <Footer />
      </main>
    </div>
    </>
  );
};

export default Contact;
