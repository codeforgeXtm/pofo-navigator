import { useEffect, useRef } from "react";
import { Camera, Palette, Heart } from "lucide-react";

const skills = [
  { icon: Camera, label: "Photography", description: "Product, lifestyle & portrait photography" },
  { icon: Palette, label: "Art Direction", description: "Creative concepts & visual storytelling" },
  { icon: Heart, label: "Passion", description: "Every shot crafted with love & precision" },
];

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
      { threshold: 0.2 }
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

      <div className="container max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            About Me
          </p>
          <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-foreground">
            Who loves to click, cook & travel.
            <br />
            <span className="italic text-primary">I capture beauty</span> in every moment.
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="reveal-scale group text-center p-8 border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex h-16 w-16 items-center justify-center border border-border mb-6 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5">
                <skill.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {[
            { number: "150+", label: "Projects" },
            { number: "8", label: "Years Experience" },
            { number: "50+", label: "Happy Clients" },
            { number: "12", label: "Awards" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-foreground mb-2">{stat.number}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
