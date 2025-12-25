import { useEffect, useRef, useState } from "react";

const skills = [
  {
    number: "01",
    title: "Strategic Brand Development",
    description: "Crafting cohesive brand identities that resonate deeply and stand the test of time.",
  },
  {
    number: "02",
    title: "Film & Visual Storytelling",
    description: "Directing narratives that captivate, inspire, and leave lasting impressions.",
  },
  {
    number: "03",
    title: "Creative Direction",
    description: "Leading projects with vision, aligning teams around bold ideas and flawless execution.",
  },
  {
    number: "04",
    title: "Business & Venture Building",
    description: "Turning concepts into thriving ventures through innovation, strategy, and hustle.",
  },
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".skill-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-dark overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-transparent" />

      <div className="container max-w-6xl px-6 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="skill-reveal font-display text-4xl md:text-5xl lg:text-6xl font-normal text-dark-foreground mb-6">
            What I'm Great At
          </h2>
          <p className="skill-reveal skill-delay-1 text-dark-foreground/60 text-lg max-w-2xl mx-auto">
            I specialize in turning complex challenges into elegant, meaningful experiences—blending strategic thinking with bold creativity.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.number}
              className={`skill-reveal skill-delay-${index + 1}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`group relative p-8 lg:p-10 rounded-2xl border transition-all duration-500 cursor-default
                  ${hoveredIndex === index 
                    ? "bg-dark-foreground/10 border-primary/30 scale-[1.02]" 
                    : "bg-dark-foreground/5 border-dark-foreground/10 hover:border-dark-foreground/20"
                  }`}
              >
                {/* Number */}
                <span 
                  className={`absolute top-6 right-6 font-display text-6xl lg:text-7xl font-light transition-all duration-500
                    ${hoveredIndex === index ? "text-primary/40" : "text-dark-foreground/10"}`}
                >
                  {skill.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl lg:text-2xl font-normal text-dark-foreground mb-4 pr-16">
                    {skill.title}
                  </h3>
                  <p className="text-dark-foreground/60 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none
                    ${hoveredIndex === index ? "opacity-100" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
