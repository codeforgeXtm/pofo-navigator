import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const floatingImages = [
  { src: portfolio1, position: "left-[5%] top-[15%]", size: "w-32 h-40 md:w-40 md:h-52", delay: "0s", rotate: "-12deg" },
  { src: portfolio2, position: "right-[8%] top-[20%]", size: "w-36 h-28 md:w-48 md:h-36", delay: "0.5s", rotate: "8deg" },
  { src: portfolio3, position: "left-[10%] bottom-[15%]", size: "w-28 h-28 md:w-36 md:h-36", delay: "1s", rotate: "15deg" },
];

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Cursor follow glow */}
      <div 
        className="cursor-glow hidden md:block"
        style={{ 
          left: `calc(50% + ${mousePosition.x * 20}px)`,
          top: `calc(50% + ${mousePosition.y * 20}px)`,
        }}
      />

      {/* Floating Images */}
      {floatingImages.map((img, index) => (
        <div
          key={index}
          className={`absolute ${img.position} ${img.size} float opacity-0 animate-fade-in hidden lg:block`}
          style={{ 
            animationDelay: img.delay,
            transform: `rotate(${img.rotate}) translate(${mousePosition.x * (index + 1)}px, ${mousePosition.y * (index + 1)}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="card-3d h-full w-full overflow-hidden border border-dark-foreground/10 shadow-2xl">
            <img
              src={img.src}
              alt="Portfolio preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Decorative circles */}
      <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full border border-dark-foreground/5 animate-rotate-slow" />
      <div className="absolute bottom-32 left-[15%] w-96 h-96 rounded-full border border-primary/10 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6">
          <span className="block opacity-0 animate-fade-in animation-delay-100 text-dark-foreground">
            Building Things That Inspire,
          </span>
          <span className="block opacity-0 animate-fade-in animation-delay-200 text-dark-foreground">
            and <span className="italic text-gradient">Move People.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-dark-foreground/60 text-lg md:text-xl mb-12 opacity-0 animate-fade-in animation-delay-300">
          Babafemi Fagbemi — creator, strategist, founder.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-500">
          <Button
            onClick={scrollToPortfolio}
            className="group magnetic-btn bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-sm uppercase tracking-wider border-0"
          >
            <span className="flex items-center gap-2">
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="group px-8 py-6 text-sm uppercase tracking-wider border-dark-foreground/20 text-dark-foreground hover:bg-dark-foreground/5 hover:border-dark-foreground/40"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-foreground/30">
        <div className="w-px h-16 bg-gradient-to-b from-dark-foreground/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
