import { useState, useEffect, useRef } from "react";
import { X, Instagram, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import bfLogoIcon from "@/assets/bf-logo-icon.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const VerticalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mouseY, setMouseY] = useState(0);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect();
        setMouseY(e.clientY - rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isOpen ? "w-80" : "w-20"
        )}
      >
        {/* Hover glow effect */}
        <div 
          className="absolute left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none transition-all duration-300 opacity-50"
          style={{ top: `${mouseY - 64}px` }}
        />

        <div className="relative flex h-full flex-col justify-between py-8">
          {/* Toggle Button - Using bF Logo */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative flex h-14 w-14 items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-dark-foreground transition-transform duration-500 hover:rotate-90" />
              ) : (
                <img 
                  src={bfLogoIcon} 
                  alt="BF Logo" 
                  className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </button>

            {/* Brand Name - Expanded */}
            <div className={cn(
              "mt-8 transition-all duration-700",
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
            )}>
              <span className="font-sans text-xl font-medium tracking-[0.15em] text-dark-foreground">
                Babafemi<sup className="text-primary text-xs">®</sup>
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={cn(
            "flex-1 flex flex-col justify-center transition-all duration-700",
            isOpen ? "px-10 opacity-100 translate-x-0" : "px-4 opacity-0 -translate-x-4 pointer-events-none"
          )}>
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li 
                  key={item.label}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={cn(
                    "transition-all duration-500",
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "group relative text-base font-normal tracking-wide transition-colors",
                      activeSection === item.href.replace("#", "")
                        ? "text-dark-foreground"
                        : "text-sidebar-foreground hover:text-dark-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <div className={cn(
              "mt-8 transition-all duration-700",
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
            )}>
              <Button
                onClick={scrollToContact}
                className="bg-foreground hover:bg-foreground/90 text-background px-6 py-5 text-sm uppercase tracking-wider"
              >
                Contact
              </Button>
            </div>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            {isOpen ? (
              <div className="flex gap-6 animate-fade-in">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative text-sidebar-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-sidebar-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-dark/80 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};
