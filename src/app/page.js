import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { AchievementsSection } from "../components/AchievementsSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { EmailSection } from "../components/EmailSection";
import { Footer } from "../components/Footer";
import {Footer2} from '../components/Footer2'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container mt-36 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <Footer2 />
        {/* <EmailSection /> */}
      </div>

        <Footer />
    </main>
  );
}
