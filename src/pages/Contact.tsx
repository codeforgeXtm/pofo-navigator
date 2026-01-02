import { VerticalSidebar } from "@/components/VerticalSidebar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="">
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
