import { VerticalSidebar } from "@/components/VerticalSidebar";
import NewsletterSection from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Updates = () => {
  return (
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="lg:ml-20">
        <NewsletterSection />
        <Footer />
      </main>
    </div>
  );
};

export default Updates;
