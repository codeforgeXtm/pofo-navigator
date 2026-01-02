import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
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
      className="relative py-14 bg-dark overflow-hidden"
    >
      <div className="container max-w-2xl px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal font-urbanist text-4xl sm:text-5xl font-normal text-dark-foreground mb-4">
            Let's Create Something Bold.
          </h2>
          <p className="reveal text-dark-foreground/60">
            Ready to collaborate or launch a venture together?
            <br />
            Reach out.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="reveal space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-dark-foreground/50 mb-2">
                Name
              </label>
              <Input
                required
                placeholder="Jane Smith"
                className="bg-dark-foreground/5 border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/30 focus:border-dark-foreground"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-dark-foreground/50 mb-2">
                Email
              </label>
              <Input
                required
                type="email"
                placeholder="janesmith@gmail.com"
                className="bg-dark-foreground/5 border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/30 focus:border-dark-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-dark-foreground/50 mb-2">
              Message
            </label>
            <Textarea
              required
              rows={5}
              placeholder="Your message..."
              className="bg-dark-foreground/5 border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/30 focus:border-dark-foreground resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full group bg-dark-foreground hover:bg-dark-foreground/90 text-dark py-6 text-sm uppercase tracking-wider"
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting
                ? "Sending..."
                : "Drop me a message and let's create something unforgettable"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </form>
      </div>
    </section>
  );
};
