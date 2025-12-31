import { useSidebar } from "@/contexts/SidebarContext";

export const HeroSection = () => {
  const { setIsOpen, isOpen } = useSidebar();

  return (
    <section className="relative w-full h-screen hero-bg flex justify-center items-start hero-section">
      
      {/* Text overlay */}
      <div className="flex flex-col gap-y-5 md:gap-y-3 lg:gap-y-10 pt-[18%] sm:pt-[16%] md:pt-[31%] lg:pt-[1%] xl:pt-[18%] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-8xl font-extrabold tracking-wide text-[#0A0A0C] leading-tight">
          Building Things That 
          <br />
          Inspire And Move People
        </h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-6xl tracking-wide font-medium text-[#F7F3E8]">Babafemi - Creator, Strategist and Founder</p>
        <button onClick={() => setIsOpen(!isOpen)} className="bg-black px-12 py-3 md:py-2 md:px-10 text-white w-fit mx-auto border-0 rounded-xl text-sm md:text-lg lg:text-4xl font-light">Explore</button>
      </div>
    </section>
  );
};
