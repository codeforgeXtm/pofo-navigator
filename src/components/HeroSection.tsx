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
     <div className="relative z-10 text-center px-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto pt-16 sm:pt-20 lg:pt-24">
  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-dark opacity-0 animate-fade-in animation-delay-100">
    Building Things That Inspire and Move People.
  </h1>
  <p className="font-display text-white/80 text-sm sm:text-base md:text-lg font-medium opacity-0 animate-fade-in animation-delay-300">
    Babafemi — creator, strategist, and founder.
  </p>
</div>
    </section>
  );
};
