import heroImage from "@/assets/hero-desert.jpg";

export const HeroSection = () => {
  return (
    <section className="relative w-full">
      <img
        src={heroImage}
        alt="Desert landscape hero"
        className="w-full h-auto min-h-screen"
      />
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col pt-[25%] sm:pt-[20%] md:pt-[18%] pl-6 sm:pl-12 md:pl-24 lg:pl-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight">
          PHOTOGRAPHER
          <br />
          <span className="italic font-normal">&</span> FILMMAKER
        </h1>
      </div>
    </section>
  );
};
