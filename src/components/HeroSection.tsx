import heroDesertBg from "@/assets/hero-desert.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] overflow-hidden"
    >
      {/* Background image fills the hero consistently across breakpoints */}
      <img
        src={heroDesertBg}
        alt="Desert landscape background"
        className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        loading="eager"
        fetchPriority="high"
      />

      {/* Content locked to the hero frame */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-start pt-[10vh]">
        <div className="text-center px-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.1] mb-2 sm:mb-4 text-dark opacity-0 animate-fade-in animation-delay-100">
            Building Things That<br />
            Inspire and Move People.
          </h1>

          <p className="font-display text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold opacity-0 animate-fade-in animation-delay-300">
            Babafemi — creator, strategist, and founder.
          </p>
        </div>
      </div>
    </section>
  );
};
