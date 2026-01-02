import { VerticalSidebar } from "@/components/VerticalSidebar";
import NewsletterSection from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Updates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="">
        <NewsletterSection />
        <Footer />
      </main>
    </div>
  );
};

export default Updates;
