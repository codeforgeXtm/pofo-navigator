import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import bfLogoIcon from "@/assets/bf-logo-icon.png";

const footerLinks = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#portfolio" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
  ],
  film: [
    { label: "One Chance", href: "#" },
    { label: "Your Village People", href: "#" },
    { label: "Consulting", href: "#" },
  ],
  contact: [
    { label: "Email", href: "mailto:hello@babafemi.com" },
    { label: "Newsletter", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark border-t border-dark-foreground/10 py-16">
      <div className="container px-6">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <img src={bfLogoIcon} alt="BABAFEMI" className="h-10 w-10 object-contain" />
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-medium text-dark-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-dark-foreground/50 hover:text-dark-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-dark-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-foreground/50 hover:text-dark-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Film */}
          <div>
            <h4 className="text-sm font-medium text-dark-foreground mb-4">Film</h4>
            <ul className="space-y-2">
              {footerLinks.film.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-foreground/50 hover:text-dark-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-dark-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-foreground/50 hover:text-dark-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-foreground/10">
          <p className="text-sm text-dark-foreground/40">
            © {new Date().getFullYear()} Babafemi Fagbemi. All rights reserved.
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center border border-dark-foreground/20 text-dark-foreground/50 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
