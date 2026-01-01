import { useSidebar } from "@/contexts/SidebarContext";
import { useEffect, useRef, useState } from "react";
import bgMusic from "/soft-life.mp3"

export const HeroSection = () => {
  const { setIsOpen, isOpen } = useSidebar();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log("Autoplay prevented:", error);
        }
      }
    };

    playAudio();
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }

  return (
    <section className="relative w-full h-screen hero-bg flex justify-center items-start hero-section">

      <audio
        ref={audioRef}
        src={bgMusic}
        loop
        preload="auto"
        autoPlay={true}
        muted={false}
      />

      <button
        onClick={toggleAudio}
        className="fixed top-8 right-8 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-50"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
      
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
