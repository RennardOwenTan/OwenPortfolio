import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { StarBackground } from "../components/StarBackground.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutMe } from "../components/AboutMe.jsx";
import { Skill } from "../components/Skill.jsx";
import { ProjectSection } from "../components/ProjectSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutMe />
            <Skill />
            <ProjectSection />
            <ContactSection />
        </main>
        
        </div>
    );
}