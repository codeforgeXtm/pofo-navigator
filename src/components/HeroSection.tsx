import heroDesertBg from "@/assets/hero-bg-new.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full"
    >
      {/* Background Image - constrained height for reasonable scroll */}
      <img 
        src={heroDesertBg}
        alt="Desert landscape"
        className="w-full h-[110vh] object-contain object-center bg-background"
      />
      
      {/* Content - positioned absolutely over the image */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-[15%] sm:pt-[12%] md:pt-[10%]">
        <div className="text-center px-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          {/* Main Heading */}
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.1] mb-2 sm:mb-4 text-dark opacity-0 animate-fade-in animation-delay-100">
            Building Things That<br />
            Inspire and Move People.
          </h1>
          
          {/* Subtitle */}
          <p className="font-display text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold opacity-0 animate-fade-in animation-delay-300">
            Babafemi — creator, strategist, and founder.
          </p>
        </div>
      </div>
    </section>
  );
};
