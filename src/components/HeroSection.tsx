import { useRef } from "react";
import heroDesertBg from "@/assets/hero-desert.jpg";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[140vh] flex items-start justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDesertBg})` }}
      />

      {/* Content - positioned at top */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-16 sm:pt-20 lg:pt-24">
  <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] mb-4 text-dark opacity-0 animate-fade-in animation-delay-100 whitespace-nowrap">
    Building Things That Inspire and Move People.
  </h1>

        {/* Subtitle */}
        <p className="font-display text-white text-base sm:text-lg md:text-xl font-bold opacity-0 animate-fade-in animation-delay-300">
          Babafemi — creator, strategist, and founder.
        </p>
      </div>
    </section>
  );
};
