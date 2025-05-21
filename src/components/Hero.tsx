import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import resumeData from "@/data/resumeData";
import profilePhoto from "../assets/profile-photo.png";
import { createResumePDF } from "../utils/createResumePDF";

const Hero = () => {
  const [location, setLocation] = useLocation();
  
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setLocation(`/#${sectionId}`, { replace: true });
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-primary py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 glassmorphic-light p-8 rounded-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">{resumeData.name}</span>
              <span className="block text-neutral-900 dark:text-white">{resumeData.title}</span>
            </h1>
            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8">
              {resumeData.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-lg"
                onClick={() => handleNavClick("contact")}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/50 dark:bg-transparent hover:bg-white/70 dark:hover:bg-neutral-800/50 text-primary border border-primary/50 py-3 px-6 rounded-lg"
                onClick={() => {
                  // Generate a PDF on-the-fly that will trigger the browser's download prompt
                  createResumePDF();
                }}
              >
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex mt-8 space-x-4">
              {resumeData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors bg-white/30 dark:bg-black/30 p-2 rounded-full"
                  aria-label={link.name}
                >
                  {link.name === "LinkedIn" && <Linkedin className="h-6 w-6" />}
                  {link.name === "GitHub" && <Github className="h-6 w-6" />}
                  {link.name === "Email" && <Mail className="h-6 w-6" />}
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="glassmorphic-light p-2 rounded-full">
              <img
                src={profilePhoto}
                alt={`${resumeData.name} - ${resumeData.title}`}
                className="rounded-full w-64 h-64 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
