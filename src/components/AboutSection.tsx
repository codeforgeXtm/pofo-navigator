import { useEffect, useRef } from "react";

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-dark text-dark-foreground py-24 md:py-32 lg:py-40"
    >
      <div className="container max-w-4xl text-center px-6">
        {/* Label */}
        <p className="reveal mb-6 text-xs font-medium uppercase tracking-[0.3em] text-dark-foreground/60">
          About Photographer
        </p>

        {/* Main Text */}
        <h2 className="reveal font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed italic">
          Who loves to click, cook &amp; travel. I&apos;m here to capture the beauty of the moment.
        </h2>

        {/* Decorative Line */}
        <div className="reveal mt-12 flex justify-center">
          <div className="h-px w-16 bg-primary origin-left animate-line-grow" />
        </div>
      </div>
    </section>
  );
};
