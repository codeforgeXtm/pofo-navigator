import { useEffect, useRef } from "react";
import bfLogoIcon from "@/assets/bf-logo-icon.png";

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
      className="relative py-32 md:py-40 bg-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent" />
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container max-w-4xl px-6 relative">
        {/* My Creative Journey */}
        <div className="mb-20">
          <h2 className="reveal font-display text-3xl md:text-4xl font-normal mb-8 text-foreground">
            My Creative Journey
          </h2>
          
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p className="reveal">
              From Lagos to the world, I've always felt driven by a relentless urge to invent, 
              connect, and make each idea count. My journey has spanned the lines of creator, 
              strategist, and founder, fueled by a belief in the power of storytelling and originality.
            </p>
            <p className="reveal">
              Every project, from film to consulting, is a chapter in my pursuit of innovation—
              where creativity hits hard, stays personal, and resonates deeply. Bold choices, 
              honest direction, and a cinematic eye guide how I build, launch, and lead.
            </p>
            <p className="reveal">
              This isn't just work. It's a lifestyle—one where simplicity breeds clarity, 
              and community powers the vision. My brand is human at its core: 
              alive, modern, and determined to create impact that moves people.
            </p>
          </div>

          {/* Signature */}
          <div className="reveal mt-8">
            <img src={bfLogoIcon} alt="BF" className="h-10 w-10 opacity-60" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20 pt-12 border-t border-border">
          <h3 className="reveal font-display text-2xl md:text-3xl font-normal mb-8 text-foreground">
            Values That Power Everything
          </h3>
          
          <p className="reveal text-foreground/70 leading-relaxed">
            Innovation means daring to see things differently. Honesty grounds every 
            story and project in integrity. Simplicity cuts through the noise and sharpens 
            focus. Community is how I thrive—real people, real connections, real progress.
          </p>
        </div>

        {/* Living Boldly */}
        <div className="pt-12 border-t border-border">
          <h3 className="reveal font-display text-2xl md:text-3xl font-normal mb-8 text-foreground">
            Living Boldly, Creatively, Human
          </h3>
          
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p className="reveal">
              Between reinventing new ventures and creative breaks, I find inspiration in film, music, 
              conversation, and movement. My lifestyle is grounded in late-night brainstorms, 
              sun-lit meetings, and city walks that spark wild ideas and unexpected connections.
            </p>
            <p className="reveal">
              Home is where laughter lives, dreams breathe, and ambition finds space 
              to run. I bring the same energy to life as I do to every partnership—
              minimal, bold, cinematic, with just the right accents to make it unforgettable.
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
