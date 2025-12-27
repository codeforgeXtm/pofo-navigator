import { useRef } from "react";
import heroDesertBg from "@/assets/hero-desert.jpg";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[120vh] flex items-start justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDesertBg})` }}
      />

      {/* Content - positioned at top */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 sm:pt-32 lg:pt-40">
        {/* Main Heading */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-4 text-dark opacity-0 animate-fade-in animation-delay-100">
          Building Things That Inspire and Move People.
        </h1>

        {/* Subtitle */}
        <p className="text-dark/70 text-base sm:text-lg md:text-xl opacity-0 animate-fade-in animation-delay-300">
          Babafemi — creator, strategist, and founder.
        </p>
      </div>
    </section>
  );
};
