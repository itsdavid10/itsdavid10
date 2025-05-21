import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Github, FileText } from "lucide-react";
import resumeData from "@/data/resumeData";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-secondary section-fade"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Projects</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          A selection of my key projects and initiatives that showcase my leadership and process improvement skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, i) => (
            <Card
              key={i}
              className="glassmorphic-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-r from-primary/30 to-primary/10 flex items-center justify-center">
                <FileText className="w-16 h-16 text-primary/60" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      <Globe className="mr-1 h-4 w-4" /> View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      <Github className="mr-1 h-4 w-4" /> View Repository
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
