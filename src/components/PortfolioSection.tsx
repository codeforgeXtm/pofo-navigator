import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Elegance Portrait",
    category: "Portrait",
    image: portfolio1,
    size: "tall",
  },
  {
    id: 2,
    title: "Modern Architecture",
    category: "Architecture",
    image: portfolio2,
    size: "wide",
  },
  {
    id: 3,
    title: "Luxury Product",
    category: "Product",
    image: portfolio3,
    size: "normal",
  },
  {
    id: 4,
    title: "Morning Mist",
    category: "Landscape",
    image: portfolio4,
    size: "wide",
  },
  {
    id: 5,
    title: "Interior Space",
    category: "Interior",
    image: portfolio5,
    size: "tall",
  },
  {
    id: 6,
    title: "Coffee Culture",
    category: "Lifestyle",
    image: portfolio6,
    size: "normal",
  },
];

const categories = ["All", "Portrait", "Architecture", "Product", "Landscape", "Interior", "Lifestyle"];

export const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const getGridClass = (size: string) => {
    switch (size) {
      case "tall":
        return "row-span-2";
      case "wide":
        return "col-span-1 md:col-span-2";
      default:
        return "";
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="py-32 md:py-40 bg-dark">
        <div className="container px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.3em] text-dark-foreground/50">
              Selected Works
            </p>
            <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-normal text-dark-foreground">
              Featured <span className="italic text-primary">Portfolio</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="reveal flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-dark-foreground/60 border-dark-foreground/20 hover:border-dark-foreground/40 hover:text-dark-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[280px] md:auto-rows-[320px]">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className={`reveal-scale group cursor-pointer ${getGridClass(item.size)}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      hoveredItem === item.id ? "scale-110" : "scale-100"
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent transition-opacity duration-500 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`} />
                  
                  {/* Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                    hoveredItem === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary mb-2">
                          {item.category}
                        </p>
                        <h3 className="font-display text-2xl text-dark-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <div className="h-12 w-12 flex items-center justify-center border border-dark-foreground/30 bg-dark-foreground/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                        <ArrowUpRight className="h-5 w-5 text-dark-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
};
