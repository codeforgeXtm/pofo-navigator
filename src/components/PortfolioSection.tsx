import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUpRight, ArrowRight, Play, Briefcase, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/Lightbox";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "One Chance",
    category: "Film",
    image: portfolio1,
    icon: Film,
    size: "normal",
  },
  {
    id: 2,
    title: "Your Village People",
    category: "Film",
    image: portfolio2,
    icon: Play,
    size: "normal",
  },
  {
    id: 3,
    title: "Consulting",
    category: "Consult",
    image: portfolio3,
    icon: Briefcase,
    size: "normal",
  },
];

export const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % portfolioItems.length);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="py-32 md:py-40 bg-dark">
        <div className="container px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-normal text-dark-foreground mb-4">
              Ventures & Work.
            </h2>
            <p className="reveal text-xl text-dark-foreground/50">
              Bold projects shaping stories.
            </p>

            {/* CTA Buttons */}
            <div className="reveal flex flex-wrap justify-center gap-4 mt-8">
              <Button
                className="group bg-foreground hover:bg-foreground text-background px-6 py-5 text-sm uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  Explore Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="px-6 py-5 text-sm uppercase tracking-wider border-dark-foreground/20 text-dark-foreground hover:bg-dark-foreground/5"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {portfolioItems.map((item, index) => (
              <article
                key={item.id}
                className="reveal-scale group cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-dark-foreground/5 border border-dark-foreground/10">
                  {/* Placeholder Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <item.icon className={`h-16 w-16 text-dark-foreground/20 transition-all duration-500 ${
                      hoveredItem === item.id ? "scale-110 text-primary/40" : ""
                    }`} />
                  </div>
                  
                  {/* Image on hover */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      hoveredItem === item.id ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`} />
                  
                  {/* Arrow */}
                  <div className={`absolute top-4 right-4 h-10 w-10 flex items-center justify-center border border-dark-foreground/20 bg-dark/50 backdrop-blur-sm transition-all duration-300 ${
                    hoveredItem === item.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                  }`}>
                    <ArrowUpRight className="h-4 w-4 text-dark-foreground" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-dark-foreground/40 mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-display text-xl text-dark-foreground">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Story Statement */}
          <div className="reveal text-center max-w-3xl mx-auto pt-12 border-t border-dark-foreground/10">
            <p className="font-display text-2xl md:text-3xl text-dark-foreground leading-relaxed mb-4">
              <span className="font-semibold">Story-driven, cinematic, human.</span>
              <br />
              <span className="font-semibold">Every project tells a bold narrative.</span>
            </p>
            <p className="text-dark-foreground/50 text-lg">
              From award-winning films to empowering strategies, I build what moves people.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={portfolioItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
};
