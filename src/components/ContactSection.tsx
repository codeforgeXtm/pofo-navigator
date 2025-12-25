import { useEffect, useRef, useState } from "react";
import { Send, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      className="relative py-32 md:py-40 bg-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent" />
      <div className="absolute -bottom-20 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-normal text-foreground">
            Let's create something
            <br />
            <span className="italic text-primary">beautiful</span> together
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Location", value: "Paris, France" },
                { icon: Mail, label: "Email", value: "hello@folio.com" },
                { icon: Phone, label: "Phone", value: "+33 1 23 45 67 89" },
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className="reveal group flex items-start gap-5 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-card transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="reveal mt-12 p-8 border border-border bg-card">
              <p className="text-sm text-muted-foreground mb-4">
                Prefer a quick call? Book a free consultation.
              </p>
              <Button 
                variant="outline" 
                className="group w-full justify-between border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
              >
                Schedule a Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="reveal grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <label 
                  className={`absolute left-0 transition-all duration-300 ${
                    focusedField === 'name' ? '-top-6 text-xs text-primary' : 'top-3 text-sm text-muted-foreground'
                  }`}
                >
                  Your Name
                </label>
                <Input
                  required
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground placeholder:text-transparent focus:border-primary focus-visible:ring-0"
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
              </div>
              <div className="relative">
                <label 
                  className={`absolute left-0 transition-all duration-300 ${
                    focusedField === 'email' ? '-top-6 text-xs text-primary' : 'top-3 text-sm text-muted-foreground'
                  }`}
                >
                  Email Address
                </label>
                <Input
                  required
                  type="email"
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground placeholder:text-transparent focus:border-primary focus-visible:ring-0"
                  onFocus={() => setFocusedField('email')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
              </div>
            </div>

            <div className="reveal relative">
              <label 
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === 'subject' ? '-top-6 text-xs text-primary' : 'top-3 text-sm text-muted-foreground'
                }`}
              >
                Subject
              </label>
              <Input
                required
                className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground placeholder:text-transparent focus:border-primary focus-visible:ring-0"
                onFocus={() => setFocusedField('subject')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
              />
            </div>

            <div className="reveal relative">
              <label 
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === 'message' ? '-top-6 text-xs text-primary' : 'top-3 text-sm text-muted-foreground'
                }`}
              >
                Your Message
              </label>
              <Textarea
                required
                rows={4}
                className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground placeholder:text-transparent focus:border-primary focus-visible:ring-0 resize-none"
                onFocus={() => setFocusedField('message')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
              />
            </div>

            <div className="reveal pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group magnetic-btn bg-foreground hover:bg-foreground text-background px-10 py-6 text-sm uppercase tracking-wider"
              >
                <span className="flex items-center gap-3">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
