import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column - appears on right on desktop, top on mobile */}
          <div className="order-2 md:order-1 w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              {/* Replace with your actual image path */}
              <img 
                src="/projects/OwenFaceHandsome.jpg" 
                alt="Rennard Owen Tan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Column - appears on left on desktop, bottom on mobile */}
          <div className="order-1 md:order-2 w-full md:w-2/3 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi! I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Rennard Owen
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              A 3rd year Computer Science student at Binus University.
              Fast learner, and enthusiastic about learning new stuff. 
              Whether it be new languages, new tools, new technologies, etc. I'm always eager to learn and apply!
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};