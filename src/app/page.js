import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <div className="container mt-24 mx-auto px-10 py-4">
         <HeroSection/>
         <AboutSection/>
         <ProjectsSection/>
         <EmailSection />
         </div>
         <Footer/>
    </main>
  );
}