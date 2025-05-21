import { useLocation } from "wouter";
import { ArrowUp } from "lucide-react";
import resumeData from "@/data/resumeData";

const Footer = () => {
  const [location, setLocation] = useLocation();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setLocation(`/#${sectionId}`, { replace: true });
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="glassmorphic text-neutral-800 dark:text-white py-10 no-print">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold mb-2 text-primary">{resumeData.name}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{resumeData.title}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">
              © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
            </p>
            <button
              onClick={() => handleNavClick("hero")}
              className="glassmorphic-light px-4 py-2 rounded-full text-primary hover:text-white hover:bg-primary transition-colors flex items-center"
              aria-label="Back to top"
            >
              <ArrowUp className="mr-2 h-4 w-4" /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
