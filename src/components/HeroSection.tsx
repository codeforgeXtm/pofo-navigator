import { useRef } from "react";
import heroDesertBg from "@/assets/hero-desert.jpg";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-contain md:bg-[length:auto_100%] lg:bg-[length:auto_100%]"
        style={{ backgroundImage: `url(${heroDesertBg})` }}
      />
      
      {/* Content - positioned at top */}
      <div className="relative z-10 text-center px-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto pt-16 sm:pt-20 lg:pt-24">
        {/* Main Heading */}
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4 text-dark opacity-0 animate-fade-in animation-delay-100">
          Building Things That<br />
          Inspire and Move People.
        </h1>
        
        {/* Subtitle */}
        <p className="font-display text-white/80 text-sm sm:text-base md:text-lg font-medium opacity-0 animate-fade-in animation-delay-300">
          Babafemi — creator, strategist, and founder.
        </p>
      </div>
    </section>
  );
};
