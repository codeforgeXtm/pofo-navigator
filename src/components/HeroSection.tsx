export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen hero-bg flex justify-center items-start">
      
      {/* Text overlay */}
      <div className="flex flex-col gap-y-5 md:gap-y-7 lg:gap-y-10 pt-[18%] sm:pt-[16%] md:pt-[31%] lg:pt-[1%] xl:pt-[18%] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide text-black leading-tight">
          Building Things That 
          <br />
          Inspire And Move People
        </h1>
        <p className="text-base sm:text-lg md:text-3xl lg:text-6xl tracking-wide font-medium">Babafemi - Creator, Strategist and Founder</p>
        <button className="bg-black px-12 py-3 text-white w-fit mx-auto border-0 rounded-xl text-sm md:text-2xl lg:text-4xl font-light">Explore</button>
      </div>
    </section>
  );
};
