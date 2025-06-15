import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Programmer, Aspiring Software Engineer, and Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              An aspiring Software Engineer with 2+ years of hands-on experience in building robust systems using Python, Java, C, and R. 
              Strong foundation in algorithms, data structures, and OOP, backed by a 3.73 GPA in Computer Science. 
              Passionate about writing clean, efficient code and solving complex problems—whether optimizing backend services, analyzing data, or developing scalable applications.
            </p>

            <p className="text-muted-foreground">
              Results-driven and adaptable, with a track record of delivering high-quality projects (from game development to data analysis) under tight deadlines. 
              Thrives in collaborative environments and enjoys bridging technical and creative needs. 
              Eager to contribute my problem-solving skills and full-stack versatility to innovative engineering teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                // href="" download link here, after making CV
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Development</h4>
                  <p className="text-muted-foreground">
                    Creating a wide variety of different software applications with an emphasis
                    on user experience and effectivity. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Versatility & Adaptability</h4>
                  <p className="text-muted-foreground">
                    Whether it be creative projects, 
                    data-focused projects,
                    or robust system designs; I'm confident that I can deliver.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from concept to deployment with agile
                    methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};