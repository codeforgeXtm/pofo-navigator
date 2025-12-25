import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const VerticalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-500 ease-out",
          isOpen ? "w-72" : "w-20"
        )}
      >
        <div className="flex h-full flex-col justify-between py-8">
          {/* Logo & Toggle */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex h-12 w-12 items-center justify-center transition-colors hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </button>

            {/* Logo */}
            <div className={cn(
              "mt-8 transition-all duration-500",
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}>
              <span className="font-display text-2xl font-bold tracking-tight">
                FOLIO<span className="text-primary">*</span>
              </span>
            </div>

            {/* Vertical Logo when collapsed */}
            <div className={cn(
              "mt-8 transition-all duration-500",
              !isOpen ? "opacity-100" : "opacity-0 pointer-events-none absolute"
            )}>
              <span className="vertical-text font-display text-lg font-bold tracking-widest">
                FOLIO<span className="text-primary">*</span>
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={cn(
            "flex-1 flex flex-col justify-center transition-all duration-500",
            isOpen ? "px-8 opacity-100" : "px-4 opacity-0 pointer-events-none"
          )}>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "group relative text-sm font-medium uppercase tracking-[0.2em] transition-colors",
                      activeSection === item.href.replace("#", "")
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
                        activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            {isOpen && (
              <div className="flex gap-4 animate-fade-in">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
            {!isOpen && (
              <div className="flex flex-col gap-4">
                {socialLinks.slice(0, 2).map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
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
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
