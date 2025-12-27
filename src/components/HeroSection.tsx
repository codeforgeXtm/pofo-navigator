import heroDesertBg from "@/assets/hero-desert.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[140vh] flex items-start justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroDesertBg})`,
          backgroundPosition: 'center 70%' 
        }}
      />
      
      {/* Content - positioned to align with the image */}
      <div className="relative z-10 text-center px-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto pt-[8vh] sm:pt-[10vh] lg:pt-[12vh]">
        {/* Main Heading */}
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4 text-dark opacity-0 animate-fade-in animation-delay-100">
          Building Things That<br />
          Inspire and Move People.
        </h1>
        
        {/* Subtitle */}
        <p className="font-display text-white text-sm sm:text-base md:text-lg font-bold opacity-0 animate-fade-in animation-delay-300">
          Babafemi — creator, strategist, and founder.
        </p>
      </div>
    </section>
  );
};
