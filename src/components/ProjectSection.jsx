import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RoninTale",
    description: "A 2D action-platformer pixel game with fun and challenging gameplay and beautiful animations",
    image: "/projects/RoninTale.png",
    tags: ["GML", "GameMaker Studio 2",],
    demoUrl: "https://stryfu.itch.io/ronintale",
    githubUrl: "",
  },
  {
    id: 2,
    title: "JetFlix",
    description:"A Netflix-inspired streaming website prototype I built solo for a school project. ",
    image: "/projects/JetFlix.png",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    demoUrl: "https://drive.google.com/drive/folders/1lghM_Vo0JixwJV1rkDSj0Mn5uq5oc-9b?usp=sharing",
    githubUrl: "",
  },
  {
    id: 3,
    title: "GoldCoin",
    description:"A prototype mobile app designed for money management. Made using Figma.",
    image: "/projects/GoldCoin.png",
    tags: ["Figma",],
    demoUrl: "",
    githubUrl: "https://github.com/RennardOwenTan/GoldCoin",
  },
  {
    id: 4,
    title: "I'm the Strongest Assassin...",
    description:"A visual novel game that features a 2-3 hour long story, auto-play, music, sound effects, sprite movement, etc.",
    image: "/projects/StrongAssasin.png",
    tags: ["Ren'Py",],
    demoUrl: "https://drive.google.com/file/d/1_NiaVCIT9w0bblNHFoY94gyLpCAXixje/view?usp=sharing",
    githubUrl: "https://drive.google.com/file/d/1Q50uXdRR9LM-4Tmg2DPqjpIQ6hHK6UCW/view?usp=sharing",
  },
  {
    id: 5,
    title: "Company Profile website",
    description:"This was made a long time ago so it's very outdated, but its a website I made for my dad's store",
    image: "/projects/MilionicMakmur.png",
    tags: ["HTML","CSS"],
    demoUrl: "https://rennardowentan.github.io/mitramilionicmakmur/",
    githubUrl: "https://github.com/RennardOwenTan/mitramilionicmakmur",
  },
  {
    id: 6,
    title: "NLP Sentiment Analysis",
    description:"A simple sentiment analysis program that breaks down a tweet and then show whether it is positive or negative",
    image: "/projects/NLPSentiment.png",
    tags: ["Python", "Natural Language Processing"],
    demoUrl: "",
    githubUrl: "https://github.com/RennardOwenTan/NLP-Sentiment-Analysis",
  },
  {
    id: 7,
    title: "ML Prediction",
    description:"A simple implementation of Machine Learning into a huge dataset in order to create predictions",
    image: "/projects/MLproject.png",
    tags: ["Python", "Machine Learning", "Pandas"],
    demoUrl: "",
    githubUrl: "https://github.com/RennardOwenTan/ML-Prediction-Simple",
  },
  {
    id: 8,
    title: "CV Text Detection",
    description:"A text detection program run using PaddleOCR",
    image: "/projects/PaddleOCRText.png",
    tags: ["Python", "Computer Vision", "OCR"],
    demoUrl: "",
    githubUrl: "https://github.com/RennardOwenTan/TextDetection_PaddleOCR",
  },
  {
    id: 9,
    title: "Fortune Cookie App",
    description:"A simple mobile app that lets you open up fortune cookies with randomized fortunes",
    image: "/projects/FortuneCookie.png",
    tags: ["Kotlin", "Android Studio"],
    demoUrl: "",
    githubUrl: "https://github.com/RennardOwenTan/egci428a11324",
  },

];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Every single one was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/RennardOwenTan"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};