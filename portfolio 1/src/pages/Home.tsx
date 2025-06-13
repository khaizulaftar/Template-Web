import AboutSection from "../components/home/AboutSection";
import Contact from "../components/home/Contact";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import StackSection from "../components/home/StackSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <StackSection/>
            <Contact/>
        </>
    )
}