import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import resumeData from "@/data/resumeData";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-secondary section-fade"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Education</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((education, index) => (
            <div
              key={index}
              className="glassmorphic-card rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 text-primary bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">{education.degree}</h3>
                  <p className="text-primary font-medium">{education.institution}</p>
                  <p className="text-neutral-700 dark:text-neutral-400">{education.period}</p>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-400">{education.description}</p>
                </div>
              </div>
              <div className="ml-12">
                <p className="text-sm text-neutral-700 dark:text-neutral-400 font-medium mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, idx) => (
                    <Badge
                      key={idx}
                      className="glassmorphic-light text-neutral-700 dark:text-neutral-300 font-normal"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.certifications.map((certification, index) => (
              <Card
                key={index}
                className="glassmorphic-card rounded-xl p-5 hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mr-3">
                      <Award className="text-primary h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-medium dark:text-white">{certification.title}</h4>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-400 mb-2">{certification.issuer}</p>
                  <p className="text-neutral-500 dark:text-neutral-500 text-sm">{certification.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
