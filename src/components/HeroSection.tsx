import { useSidebar } from "@/contexts/SidebarContext";
import Cloud from "@/components/doodles/Cloud";
import Sun from "@/components/doodles/Sun";
import Bus from "@/components/doodles/Bus";
import PaperPlane from "@/components/doodles/PaperPlane";
import Crown from "@/components/doodles/Crown";
import Eyes from "@/components/doodles/Eyes";
import Smiley from "@/components/doodles/Smiley";
import Lightning from "@/components/doodles/Lightning";
import Star from "@/components/doodles/Star";
import ShootingStar from "@/components/doodles/ShootingStar";
import Lightbulb from "@/components/doodles/Lightbulb";
import Hashtag from "@/components/doodles/Hashtag";
import SpeechBubble from "@/components/doodles/SpeechBubble";
import MusicNote from "@/components/doodles/MusicNote";
import Plus from "@/components/doodles/Plus";
import Clapperboard from "@/components/doodles/Clapperboard";
import Sparkle from "@/components/doodles/Sparkle";
import CurvedLine from "@/components/doodles/CurvedLine";

export const HeroSection = () => {
  const { setIsOpen, isOpen } = useSidebar();
  return (
    <section className="relative w-full h-screen hero-bg flex justify-center items-start hero-section">

      {/* Animated Doodles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Sun - top left area with face */}
        <Sun className="absolute top-[3%] left-[5%] w-12 h-12 md:w-14 md:h-14 animate-float animation-delay-1000" />

        {/* Eyes - top center-left, looking around */}
        <Eyes className="absolute top-[3%] left-[22%] w-10 h-7 md:w-12 md:h-8 animate-float-slow animation-delay-2000" />

        {/* Cloud 1 - left side, larger */}
        <Cloud className="absolute top-[12%] left-[1%] w-24 h-14 md:w-32 md:h-18 animate-float-slow" />

        {/* Paper Plane - flies across the headline with trailing curved line */}
        <PaperPlane className="absolute top-[12%] left-[30%] w-28 h-14 md:w-36 md:h-18 animate-fly" />

        {/* Shooting Star - top right corner */}
        <ShootingStar className="absolute top-[4%] right-[4%] w-20 h-10 md:w-24 md:h-12 animate-shoot" />

        {/* Cloud 2 - right side, large */}
        <Cloud className="absolute top-[8%] right-[2%] w-28 h-16 md:w-36 md:h-20 animate-float-slow animation-delay-4000" />

        {/* Music Note with sparkle lines - right side */}
        <MusicNote className="absolute top-[10%] right-[14%] w-8 h-11 md:w-10 md:h-13 animate-sway" />

        {/* Plus/Cross - center left area */}
        <Plus className="absolute top-[20%] left-[28%] w-8 h-8 md:w-10 md:h-10 animate-float animation-delay-2000" />

        {/* Crown - positioned to the right of the person's head, slanted */}
        <Crown className="absolute top-[36%] left-[48%] md:left-[49%] w-12 h-10 md:w-14 md:h-12 animate-crown" style={{ transform: 'rotate(15deg)' }} />

        {/* Smiley - middle area on mobile, sky area on desktop */}
        <Smiley className="absolute top-[48%] md:top-[18%] left-[20%] md:left-[12%] w-10 h-10 md:w-12 md:h-12 animate-float animation-delay-1000" />

        {/* Lightning bolts - left side, scattered */}
        <Lightning className="absolute top-[48%] left-[8%] w-5 h-10 md:w-6 md:h-12 animate-float-fast animation-delay-3000" />

        {/* Shooting star/comet - left side going diagonal */}
        <Star className="absolute top-[32%] left-[5%] w-4 h-4 animate-twinkle" filled />

        {/* Clapperboard - left area in the sky, animates open/close */}
        <Clapperboard className="absolute top-[55%] left-[18%] w-11 h-11 md:w-13 md:h-13 animate-clap" />

        {/* More Lightning bolts near clapperboard */}
        <Lightning className="absolute top-[55%] left-[38%] w-4 h-8 md:w-5 md:h-10 animate-float animation-delay-4000" />
        <Lightning className="absolute top-[55%] left-[39%] w-3 h-6 md:w-4 md:h-8 animate-float-fast animation-delay-1000" />

        {/* Speech Bubble with HEY! - center right near person */}
        <SpeechBubble className="absolute top-[48%] right-[30%] w-20 h-15 md:w-24 md:h-18 animate-bounce-subtle" />

        {/* Hashtag - right side */}
        <Hashtag className="absolute top-[32%] right-[22%] w-8 h-10 md:w-10 md:h-12 animate-float animation-delay-3000" />

        {/* Bus - on the horizon line, drives across from left to right */}
        <Bus className="absolute top-[60%] md:top-[60%] left-0 w-16 h-10 md:w-20 md:h-12 animate-drive" />

        {/* Decorative curved line - under button area */}
        <CurvedLine className="absolute top-[24%] left-[35%] w-32 h-8 md:w-40 md:h-10 opacity-60" />

        {/* Lightbulb - right side in the sky */}
        <Lightbulb className="absolute top-[50%] md:top-[22%] right-[4%] w-10 h-13 md:w-12 md:h-15 animate-glow animate-float-slow animation-delay-2000" />

        {/* Cloud 3 - center right area */}
        <Cloud className="absolute top-[22%] right-[24%] w-20 h-11 md:w-24 md:h-13 animate-float animation-delay-3000" />

        {/* Star/sparkle decorations scattered */}
        <Sparkle className="absolute top-[5%] right-[28%] w-4 h-4 md:w-5 md:h-5 animate-twinkle animation-delay-1000" />
        <Sparkle className="absolute top-[18%] right-[8%] w-3 h-3 md:w-4 md:h-4 animate-twinkle animation-delay-2000" />
        <Sparkle className="absolute top-[8%] left-[48%] w-3 h-3 animate-twinkle animation-delay-3000" />
        <Sparkle className="absolute top-[24%] right-[36%] w-3 h-3 md:w-4 md:h-4 animate-twinkle animation-delay-4000" />
        <Star className="absolute top-[14%] left-[3%] w-3 h-3 animate-twinkle animation-delay-2000" />
        <Star className="absolute top-[30%] right-[18%] w-3 h-3 md:w-4 md:h-4 animate-twinkle animation-delay-3000" filled />
        <Sparkle className="absolute top-[38%] left-[12%] w-3 h-3 animate-twinkle animation-delay-1000" />
      </div>

      {/* Text overlay */}
      <div className="relative z-20 flex flex-col gap-y-5 md:gap-y-3 lg:gap-y-10 pt-[18%] sm:pt-[16%] md:pt-[31%] lg:pt-[1%] xl:pt-[18%] text-center">
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
