import { useEffect, useRef } from "react";
import bfLogoIcon from "@/assets/bf-logo-icon.png";
import aboutPhoto from "@/assets/about-bg.jpg";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-dark overflow-hidden"
    >
      {/* Background decoration */}
      {/* <div className="absolute -top-20 right-0 w-[500px] h-[500px] border border-red-500 rounded-full bg-primary/5 blur-3xl" /> */}

      <div className="container relative">
        {/* Profile Photo */}
        <div className="w-full reveal mb-16 flex justify-center about-bg">
          <img 
            src={aboutPhoto} 
            alt="Profile" 
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
        {/* My Creative Journey */}
        <div className="mb-20">
          <h2 className="reveal font-urbanist text-3xl md:text-4xl font-normal mb-8 text-dark-foreground">
            My Creative Journey
          </h2>
          
          <div className="space-y-6 text-dark-foreground/70 leading-relaxed">
            <p className="reveal">
              From a young age, I was captivated by storytelling and the power of ideas and what they could become. My creative journey began exploring games, storytelling, music, art, and business, always striving to fuse emotion and innovation in everything I build.
            </p>
            <p className="reveal">
              Through founding businesses, collaborating with diverse creators and exploring my many ideas, I've learned to value honesty, persistence, and the courage to experiment. Each project has deepened my craft and my curiosity, teaching me the art of meaningful impact.
            </p>
            <p className="reveal">
              From creating original games, short stories, fonts, businesses and consulting, I have learnt to pour my entire being and drive for quality into everything I do.
            </p>
            <p className="reveal">
              Today, I channel bold ideas into work that inspires, moves, and connects people. Whether I'm launching new ventures, creative consulting, or building a vibrant creative community or game, my mission remains the same.
            </p>
            <p className="reveal font-urbanist text-dark-foreground text-xl">
              To Build things that Inspire.
            </p>
          </div>

          {/* Signature */}
          <div className="reveal mt-8">
            <img src={bfLogoIcon} alt="BF" className="h-10 w-10 opacity-60" />
          </div>
        </div>

        {/* A Life Designed Bold */}
        <div className="mb-20 pt-12 border-t border-dark-foreground/10">
          <h3 className="reveal font-urbanist text-2xl md:text-3xl font-normal mb-8 text-dark-foreground">
            A Life Designed Bold
          </h3>
          
          <div className="space-y-6 text-dark-foreground/70 leading-relaxed">
            <p className="reveal">
              Living between Lagos and London, I balance creative pursuits with family, adventure, and the search for beauty in the everyday. Cinematic moments, deep conversation, and shared ideas fuel my work and lifestyle.
            </p>
            <p className="reveal">
              Obsessed with honest design and daring concepts, you'll find me sketching, reading about culture, or running cityscapes for new inspiration. My life is a canvas for bold expression. Inspiration for innovation lives all around me.
            </p>
          </div>
        </div>

        {/* Living Boldly */}
        <div className="pt-12 border-t border-dark-foreground/10">
          <h3 className="reveal font-urbanist text-2xl md:text-3xl font-normal mb-8 text-dark-foreground">
            Living Boldly, Creatively, Human
          </h3>
          
          <div className="space-y-6 text-dark-foreground/70 leading-relaxed">
            <p className="reveal">
              I live in the space between building things and stepping away from them. When I'm not inventing new ventures, I'm recharging through film, music, long conversations, and movement, anything that helps ideas breathe.
            </p>
            <p className="reveal">
              My days are a mix of late-night brainstorms, mid day meetings, and long walks where the best ideas usually show up uninvited. I believe inspiration lives in motion, in people, and in paying attention.
            </p>
            <p className="reveal">
              Home matters to me. It's where laughter is loud, dreams feel possible, and ambition has room to stretch. I carry that same energy into my work and my partnerships, intentional, bold, cinematic, and human. Clean at first glance, but always layered with details that stay with you.
            </p>
          </div>

          {/* Signature */}
          <div className="reveal mt-8">
            <img src={bfLogoIcon} alt="BF" className="h-10 w-10 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};
