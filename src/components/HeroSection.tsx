export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen hero-bg">
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col pt-[25%] sm:pt-[20%] md:pt-[16%] lg:pt-[1%] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-light tracking-wide text-black leading-tight">
          Building Things That 
          <br />
          Inspire And Move People
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2">Babafemi - Creator, Strategist and Founder</p>
        <button className="bg-black px-12 py-2 text-white w-fit mx-auto mt-5 border-0 rounded">Explore</button>
      </div>
    </section>
  );
};
