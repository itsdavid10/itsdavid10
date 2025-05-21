import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import resumeData from "@/data/resumeData";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<HTMLDivElement[]>([]);
  
  useScrollAnimation(sectionRef);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector(".skill-progress") as HTMLElement;
            const width = entry.target.querySelector(".skill-width")?.textContent || "0%";
            
            if (progressBar) {
              progressBar.style.width = width;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    skillBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      skillBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-primary section-fade"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="glassmorphic-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>

            <div className="space-y-5">
              {resumeData.skills.technical.map((skill, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) skillBarsRef.current[index] = el;
                  }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{skill.name}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 skill-width">{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "0%" }}></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6 mt-10 text-primary">Frameworks & Methodologies</h3>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.frameworks.map((framework, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="glassmorphic-light py-2 px-4 rounded-full text-neutral-700 dark:text-neutral-300"
                >
                  {framework}
                </Badge>
              ))}
            </div>
          </div>

          <div className="glassmorphic-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-primary">Soft Skills</h3>

            <div className="space-y-5">
              {resumeData.skills.soft.map((skill, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) skillBarsRef.current[resumeData.skills.technical.length + index] = el;
                  }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{skill.name}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 skill-width">{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "0%" }}></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6 mt-10 text-primary">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="glassmorphic-light py-2 px-4 rounded-full text-neutral-700 dark:text-neutral-300"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
