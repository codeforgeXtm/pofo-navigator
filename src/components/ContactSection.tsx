import { useEffect, useRef, useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-dark text-dark-foreground py-24 md:py-32"
    >
      <div className="container max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.3em] text-dark-foreground/60">
              Get In Touch
            </p>
            <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl font-normal mb-8">
              Let&apos;s work together
            </h2>
            <p className="reveal text-dark-foreground/70 mb-12 max-w-md">
              Have a project in mind? Let&apos;s create something beautiful together.
              I&apos;m always open to discussing new projects and creative ideas.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="reveal flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-dark-foreground/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-foreground/50 mb-1">
                    Location
                  </p>
                  <p className="text-dark-foreground">Paris, France</p>
                </div>
              </div>

              <div className="reveal flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-dark-foreground/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-foreground/50 mb-1">
                    Email
                  </p>
                  <p className="text-dark-foreground">hello@folio.com</p>
                </div>
              </div>

              <div className="reveal flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-dark-foreground/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-foreground/50 mb-1">
                    Phone
                  </p>
                  <p className="text-dark-foreground">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="reveal grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-dark-foreground/50 mb-2">
                  Name
                </label>
                <Input
                  required
                  placeholder="Your name"
                  className="bg-transparent border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/40 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-dark-foreground/50 mb-2">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/40 focus:border-primary"
                />
              </div>
            </div>

            <div className="reveal">
              <label className="block text-xs uppercase tracking-wider text-dark-foreground/50 mb-2">
                Subject
              </label>
              <Input
                required
                placeholder="Project inquiry"
                className="bg-transparent border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/40 focus:border-primary"
              />
            </div>

            <div className="reveal">
              <label className="block text-xs uppercase tracking-wider text-dark-foreground/50 mb-2">
                Message
              </label>
              <Textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="bg-transparent border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/40 focus:border-primary resize-none"
              />
            </div>

            <div className="reveal">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm uppercase tracking-wider"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
