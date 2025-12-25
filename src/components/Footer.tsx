import { Instagram, Twitter, Dribbble, Linkedin, ArrowUp } from "lucide-react";
import bfLogoIcon from "@/assets/bf-logo-icon.png";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark border-t border-dark-foreground/10 py-16">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <img src={bfLogoIcon} alt="BABAFEMI" className="h-10 w-10 object-contain" />
            <span className="font-sans text-xl font-medium tracking-[0.2em] text-dark-foreground">
              BABAFEMI
            </span>
            <span className="hidden md:block h-6 w-px bg-dark-foreground/20" />
            <p className="hidden md:block text-sm text-dark-foreground/50">
              Creative photographer based in Paris
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group relative text-dark-foreground/50 transition-all duration-300 hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            
            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="ml-4 flex h-12 w-12 items-center justify-center border border-dark-foreground/20 text-dark-foreground/50 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-foreground/40">
            © {new Date().getFullYear()} BABAFEMI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-dark-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
