import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="font-display text-xl font-bold tracking-tight">
              FOLIO<span className="text-primary">*</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground order-3 md:order-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 order-2 md:order-3">
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
        </div>
      </div>
    </footer>
  );
};
