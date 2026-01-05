import { useSidebar } from "@/contexts/SidebarContext";
import Cloud from "@/components/doodles/Cloud";
import Cloud2 from "@/components/doodles/Cloud2";
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
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden w-full">
        {/* Sun - top left area with face */}
        {/* <Sun className="absolute top-[3%] left-[16%] md:top-[22%] md:left-[10%] lg:top-[9%] lg:left-[20%] w-12 h-12 md:w-20 md:h-20 animate-float animation-delay-1000" /> */}

        {/* Eyes - top center-left, looking around */}
        {/* <Eyes className="absolute top-[3%] left-[46%] md:top-[33%] md:left-[9%] lg:top-[19%] lg:left-[12%] w-10 h-7 md:w-12 md:h-11 animate-float-slow animation-delay-2000" /> */}

        {/* Cloud 1 - left side, larger */}
        {/* <Cloud className="absolute top-[8%] left-[20%] md:top-[40%] md:left-[2%] lg:top-[32%] lg:left-[4%] w-24 h-14 md:w-32 md:h-18 animate-float-slow" /> */}

        {/* Paper Plane - flies across the headline with trailing curved line */}
        <PaperPlane className="absolute top-[1%] left-[0%] md:top-[1%] md:left-[30%] lg:top-[-7%] lg:left-[30%] w-64 h-32 md:w-96 md:h-48 animate-fly" />

        {/* Shooting Star - top right corner */}
        <ShootingStar className="absolute top-[2%] left-[86%] md:top-[5%] md:left-[60%] lg:top-[2%] lg:left-[80%] w-32 h-16 md:w-48 md:h-24 animate-shoot" />

        {/* Cloud 2 - right side, large */}
        {/* <Cloud2 className="absolute top-[8%] right-[-6%] md:top-[25%] md:right-[2%] lg:top-[14%] lg:right-[2%] w-28 h-16 md:w-36 md:h-20 animate-float-slow animation-delay-4000" /> */}

        {/* Music Note with sparkle lines - right side */}
        <MusicNote className="absolute top-[72%] right-[14%] md:top-[80%] md:right-[10%] lg:top-[73%] lg:right-[17%] w-8 h-11 md:w-10 md:h-13 animate-sway" />

        {/* Plus/Cross - center left area */}
        {/* <Plus className="absolute top-[20%] left-[40%] md:top-[49%] md:left-[29%] lg:top-[33%] lg:left-[34%] w-8 h-8 md:w-12 md:h-16 animate-float animation-delay-2000" /> */}

        {/* Crown - positioned to the right side, slanted */}
        <Crown className="absolute top-[34%] left-[50%] md:top-[47%] md:left-[50%] lg:top-[38%] lg:left-[50%] w-12 h-10 md:w-14 md:h-12 animate-crown" style={{ transform: 'rotate(15deg)' }} />

        {/* Smiley - middle area on mobile, sky area on desktop */}
        {/* <Smiley className="absolute top-[4%] left-[12%] md:top-[40%] md:left-[21%] lg:top-[30%] lg:left-[21%] w-12 h-12 md:w-15 md:h-15 animate-float animation-delay-1000" /> */}

        {/* Lightning bolts - left side, scattered */}
        <Lightning className="absolute top-[55%] left-[75%] md:top-[68%] md:left-[80%] lg:top-[65%] lg:left-[70%] w-10 h-20 md:w-12 md:h-24 animate-lightning animation-delay-3000" />

        {/* Clapperboard - left area in the sky, animates open/close */}
        <Clapperboard className="absolute top-[41%] left-[10%] md:top-[66%] md:left-[13%] lg:top-[56%] lg:left-[20%] w-20 h-20 md:w-16 md:h-16" />

        {/* Speech Bubble with HEY! - center right near person */}
        {/* <SpeechBubble className="absolute top-[34%] right-[16%] md:top-[54%] md:right-[20%] lg:top-[38%] lg:right-[34%] w-32 h-32 md:w-44 md:h-30 animate-bounce-subtle" /> */}

        {/* Hashtag - right side */}
        <Hashtag className="absolute top-[77%] left-[14%] md:top-[40%] md:left-[10%] lg:top-[29%] lg:left-[10%] w-8 h-10 md:w-10 md:h-12 animate-float animation-delay-3000" />

        {/* Bus - on the horizon line, drives across from left to right */}
        <Bus className="absolute top-[91%] md:top-[93%] lg:top-[88%] left-0 w-28 h-18 md:w-36 md:h-24 animate-drive" />

        {/* Decorative curved line - under button area */}
        {/* <CurvedLine className="absolute top-[24%] left-[35%] w-32 h-8 md:w-40 md:h-10" /> */}

        {/* Lightbulb - right side in the sky */}
        <Lightbulb className="absolute top-[35%] right-[12%] md:top-[44%] md:right-[18%] lg:top-[34%] lg:right-[22%] w-10 h-13 md:w-12 md:h-15 animate-glow animate-float-slow animation-delay-2000" />

        {/* Cloud 3 - center right area
        <Cloud2 className="absolute top-[22%] right-[24%] w-20 h-11 md:w-24 md:h-13 animate-float animation-delay-3000" /> */}

        {/* Star/sparkle decorations scattered */}
        {/* <Sparkle className="absolute top-[5%] right-[28%] md:top-[61%] md:right-[3%] lg:top-[51%] lg:right-[3%] w-4 h-4 md:w-5 md:h-5 border border-red-600 animate-twinkle animation-delay-1000" />
        <Sparkle className="absolute top-[18%] right-[8%] md:top-[61%] md:right-[5%] lg:top-[51%] lg:right-[4%] w-3 h-3 md:w-8 md:h-10 animate-twinkle animation-delay-2000" />
        <Sparkle className="absolute top-[5%] left-[28%] md:top-[61%] md:left-[7%] lg:top-[51%] lg:left-[5%] w-4 h-4 md:w-5 md:h-5animate-twinkle animation-delay-3000" />
        <Sparkle className="absolute top-[18%] left-[8%] md:top-[61%] md:left-[3%] lg:top-[51%] lg:left-[3%] w-3 h-3 md:w-8 md:h-10animate-twinkle animation-delay-4000" />
        <Sparkle className="absolute top-[18%] left-[8%] md:top-[42%] md:left-[40%] lg:top-[27%] lg:left-[40%] w-3 h-3 md:w-12 md:h-20 animate-twinkle animation-delay-4000" /> */}
        <Star className="absolute top-[30%] right-[18%] md:top-[23%] md:right-[20%] lg:top-[5%] lg:left-[20%] w-3 h-3 md:w-6 md:h-8 animate-twinkle animation-delay-3000" filled />
      </div>

      {/* Text overlay */}
      <div className="relative z-20 flex flex-col gap-y-5 md:gap-y-3 lg:gap-y-10 pt-[18%] sm:pt-[16%] md:pt-[31%] lg:pt-[1%] xl:pt-[18%] text-center">
        <p className="text-base sm:text-lg md:text-2xl lg:text-6xl tracking-wide font-light text-[#0A0A0C]">Babafemi - Creator, Strategist and Founder</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-8xl font-extrabold font-bigShoulders tracking-wide  text-[#F7F3E8]leading-tight uppercase">
          Building Things That
          <br />
          Inspire And Move People
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="bg-black px-12 py-3 md:py-2 md:px-10 text-white w-fit mx-auto border-0 text-sm md:text-lg lg:text-4xl font-light font-bigShoulders uppercase">Explore</button>
      </div>
    </section>
  );
};
