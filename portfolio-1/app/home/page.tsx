import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import StackSection from "./StackSection";


export default function Home() {
    return (
        <>
            <div className="px-4 mx-auto max-w-4xl">
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <StackSection />
            </div>
        </>
    )
}