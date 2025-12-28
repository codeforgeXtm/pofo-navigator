import { VerticalSidebar } from "@/components/VerticalSidebar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="ml-10 sm:ml-12 lg:ml-20">
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
