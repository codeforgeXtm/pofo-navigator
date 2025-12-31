import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUpRight, Gamepad2, Briefcase, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/Lightbox";
import oneChanceGame from "@/assets/ONE-CHANCE-GAME.jpg";
import yvpGame from "@/assets/Your-village-people.png";
import bfLogoFull from "@/assets/bf-logo-full.png";

const ventures = [
  {
    id: 1,
    title: "Your Village People",
    category: "Card Game",
    description:
      "A wickedly fun card game for wicked people, being adapted into a full immersive world featuring comics, short films and feature length movies.",
    image: yvpGame,
    icon: Gamepad2,
    link: "https://www.kickstarter.com/projects/yvpgame/your-village-people-card-game",
  },
  {
    id: 2,
    title: "One Chance",
    category: "Board Game",
    description:
      "The most Lagosian board game ever. A fun immersive and chaotic experience that dove tails on life in Lagos, Nigeria and shows you just how fun it can be. Currently being adapted for mobile after selling 10,000 copies globally.",
    image: oneChanceGame,
    icon: Gamepad2,
    link: "https://instagram.com/onechancegame",
  },
];

const services = [
  {
    id: 1,
    title: "Consulting & Creative Work",
    description:
      "Helping brands and creators shape their businesses and products, develop powerful identities, and connect with audiences through honest, innovative consulting partnerships.",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Businesses & Investments",
    description:
      "Setting up innovative businesses using first principles and investing in early stage startups while providing guidance and support through innovative thinking.",
    icon: TrendingUp,
    companies: [
      "Straight Edge Synergy Est 2014",
      "Divisions Africa Est 2019",
      "Blank Space Est 2025",
    ],
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

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-scale"
    );
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
    setLightboxIndex((prev) => (prev + 1) % ventures.length);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + ventures.length) % ventures.length);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="portfolio"
        ref={sectionRef}
        className="py-32 md:py-40 bg-dark"
      >
        <div className="container px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-dark-foreground/50 mb-4 block">
              Works
            </span>
            <h2 className="reveal font-urbanist text-4xl sm:text-5xl md:text-6xl font-normal text-dark-foreground mb-4">
              Ventures that Define Creativity.
            </h2>
            <p className="reveal text-xl text-dark-foreground/50">
              Bold ideas. Immersive Experiences. Real impact.
            </p>

            {/* CTA Button */}
            <div className="reveal flex flex-wrap justify-center gap-4 mt-8">
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="px-6 py-5 text-sm uppercase tracking-wider border-primary/50 text-dark-foreground bg-transparent hover:bg-primary/10 hover:border-primary"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Ventures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {ventures.map((item, index) => (
              <div key={item.id} className="flex flex-col gap-y-4">
                <article
                  className="reveal-scale group cursor-pointer h-full"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank", "noopener,noreferrer");
                    } else {
                      openLightbox(index);
                    }
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-dark-foreground/10 bg-dark-foreground/5 h-full w-full">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        hoveredItem === item.id ? "scale-110" : "scale-100"
                      }`}
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent transition-opacity duration-500 ${
                        hoveredItem === item.id ? "opacity-100" : "opacity-60"
                      }`}
                    />

                    {/* Arrow */}
                    <div
                      className={`absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center border border-dark-foreground/20 bg-dark/50 backdrop-blur-sm transition-all duration-300 ${
                        hoveredItem === item.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4 text-dark-foreground" />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs uppercase tracking-wider text-dark-foreground/60 mb-2">
                        {item.category}
                      </p>
                      <h3 className="font-urbanist text-2xl text-dark-foreground mb-3">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
                <p className="text-dark-foreground/70 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="reveal pt-12 border-t border-dark-foreground/10 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="reveal p-8 rounded-2xl border border-dark-foreground/10 bg-dark-foreground/5"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <service.icon
                    className="w-8 h-8 text-primary/60 mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-urbanist text-xl text-dark-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-foreground/60 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.companies && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-foreground/10">
                      {service.companies.map((company) => (
                        <span
                          key={company}
                          className="text-xs text-dark-foreground/40 bg-dark-foreground/5 px-3 py-1 rounded-full"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Story Statement */}
          <div className="reveal text-center max-w-3xl mx-auto pt-12 border-t border-dark-foreground/10">
            <p className="font-urbanist text-2xl md:text-3xl text-dark-foreground leading-relaxed mb-4">
              <span className="font-semibold">
                Story-driven, cinematic, human.
              </span>
              <br />
              <span className="font-semibold">
                Every project tells a bold narrative.
              </span>
            </p>
            <p className="text-dark-foreground/50 text-lg">
              From award-winning films to empowering strategies, I build what
              moves people.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={ventures}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
};
