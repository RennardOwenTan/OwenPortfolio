import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
  If you think that I'm a good fit for your project, 
  feel free to reach out! 
</p>

<div className="grid grid-cols-1 gap-12">
  <div className="space-y-8">
    <h3 className="text-2xl font-semibold mb-6 text-center">
      Contact Information
    </h3>

    {/* Equal-width contact boxes container */}
    <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
      {/* Email Box */}
      <div className="flex-1 max-w-xs flex flex-col items-center p-6 rounded-lg border border-border bg-card">
        <div className="p-3 rounded-full bg-primary/10 mb-4">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-medium text-lg mb-1">Email</h4>
        <a className="text-muted-foreground hover:text-primary transition-colors text-center">
          rennardowenhd@gmail.com
        </a>
      </div>

      {/* Phone Box */}
      <div className="flex-1 max-w-xs flex flex-col items-center p-6 rounded-lg border border-border bg-card">
        <div className="p-3 rounded-full bg-primary/10 mb-4">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-medium text-lg mb-1">Phone</h4>
        <a className="text-muted-foreground hover:text-primary transition-colors text-center">
          +62 812-8230-4242
        </a>
      </div>

      {/* Location Box */}
      <div className="flex-1 max-w-xs flex flex-col items-center p-6 rounded-lg border border-border bg-card">
        <div className="p-3 rounded-full bg-primary/10 mb-4">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-medium text-lg mb-1">Location</h4>
        <a className="text-muted-foreground hover:text-primary transition-colors text-center">
          Jakarta, Indonesia
        </a>
      </div>
    </div>

    {/* Connect With Me - centered below */}
    <div className="pt-8 text-center">
      <h4 className="font-medium mb-4 text-lg">Connect With Me</h4>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/rennard-owen-tan-b0a339322/" target="_blank" className="hover:scale-110 transition-transform">
          <Linkedin className="h-7 w-7" />
        </a>
        <a href="https://www.instagram.com/renn_owen/" target="_blank" className="hover:scale-110 transition-transform">
          <Instagram className="h-7 w-7" />
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};