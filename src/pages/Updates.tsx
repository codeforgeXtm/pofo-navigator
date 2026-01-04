import { VerticalSidebar } from "@/components/VerticalSidebar";
import NewsletterSection from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import SEO from "@/components/Seo";

const Updates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <><SEO
        title="Home"
        description="Welcome to Babafemi's portfolio. Building things that inspire and move people."
        keywords="babafemi, portfolio, creator, strategist, founder, home"
        ogUrl="https://www.justbabafemi.com/"
      />
    <div className="min-h-screen bg-dark">
      <VerticalSidebar />
      <main className="">
        <NewsletterSection />
        <Footer />
      </main>
    </div>
      </>
  );
};

export default Updates;
