import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import resumeData from "@/data/resumeData";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-primary section-fade"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Work Experience</h2>

        {resumeData.experience.map((job, index) => (
          <Card key={index} className="glassmorphic-card rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-400">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="glassmorphic-light text-neutral-700 dark:text-neutral-300 py-1 px-3 rounded-full text-sm">
                    {job.period}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2 ml-4">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
