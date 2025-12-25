import { useEffect, useRef } from "react";
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
    category: "Portrait Photography",
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
    category: "Product Photography",
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
    category: "Interior Design",
    image: portfolio5,
    size: "tall",
  },
  {
    id: 6,
    title: "Coffee Art",
    category: "Food & Lifestyle",
    image: portfolio6,
    size: "normal",
  },
];

export const PortfolioSection = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getGridClass = (size: string, index: number) => {
    const baseClass = "portfolio-item group cursor-pointer";
    switch (size) {
      case "tall":
        return `${baseClass} row-span-2`;
      case "wide":
        return `${baseClass} col-span-1 md:col-span-2`;
      default:
        return baseClass;
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Selected Works
          </p>
          <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl font-normal">
            Portfolio
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <article
              key={item.id}
              className={`${getGridClass(item.size, index)} reveal`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/50" />
                
                {/* Content */}
                <div className="portfolio-overlay absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <h3 className="font-display text-xl md:text-2xl text-background mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-background/80">
                    {item.category}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
