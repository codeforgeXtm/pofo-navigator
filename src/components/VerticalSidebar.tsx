import { useState, useEffect, useRef } from "react";
import { X, Instagram, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import bfLogoIcon from "@/assets/bf-logo-icon.png";
import bfLogoText from "@/assets/bf-logo-text.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Work", href: "/work" },
  { label: "Updates", href: "/updates" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/justbabafemi", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/justbabafemi", label: "Twitter" },
];

export const VerticalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect();
        setMouseY(e.clientY - rect.top);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 1024;
      
      if (isMobile && !isOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
    setIsHidden(false);
  }, [location.pathname]);

  return (
    <>
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isOpen ? "w-80" : "w-10 sm:w-12 lg:w-20",
          isHidden && !isOpen ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
        )}
      >
        {/* Hover glow effect */}
        <div 
          className="absolute left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none transition-all duration-300 opacity-50"
          style={{ top: `${mouseY - 64}px` }}
        />

        <div className="relative flex h-full flex-col justify-between py-5 lg:py-8">
          {/* Header - Logo/Close Button */}
          <div className="flex flex-col items-center">
            {isOpen ? (
              /* Expanded state: X on right, logo centered */
              <div className="w-full flex items-center justify-between px-6">
                <div className="w-6" /> {/* Spacer for centering */}
                <img 
                  src={bfLogoText} 
                  alt="Babafemi Logo" 
                  className="h-20 object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-dark-foreground transition-transform duration-500 hover:rotate-90" />
                </button>
              </div>
            ) : (
              /* Collapsed state: just the icon logo */
              <button
                onClick={() => setIsOpen(true)}
                className="group relative flex h-8 w-8 lg:h-14 lg:w-14 items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Open menu"
              >
                <img 
                  src={bfLogoIcon} 
                  alt="BF Logo" 
                  className="h-6 w-6 lg:h-12 lg:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            )}
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
                  <Link
                    to={item.href}
                    className={cn(
                      "group relative text-base font-normal tracking-wide transition-colors",
                      location.pathname === item.href
                        ? "text-dark-foreground"
                        : "text-sidebar-foreground hover:text-dark-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <div className={cn(
              "mt-8 transition-all duration-700",
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
            )}>
              <Button
                asChild
                className="bg-foreground hover:bg-foreground/90 text-background px-6 py-5 text-sm uppercase tracking-wider"
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4 lg:gap-6">
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
              <div className="flex flex-col gap-3 lg:gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-sidebar-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
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
