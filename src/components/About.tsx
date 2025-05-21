import { useEffect, useRef } from "react";
import resumeData from "@/data/resumeData";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import profilePhoto from "../assets/profile-photo.png";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-secondary section-fade"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:w-1/3">
            <div className="glassmorphic-card p-4 rounded-xl">
              <img
                src={profilePhoto}
                alt="David Geyer - Program & Project Management Leader"
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:w-2/3 glassmorphic-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{resumeData.about.title}</h3>
            {resumeData.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {resumeData.about.stats.map((stat, index) => (
                <div key={index} className="glassmorphic-light p-4 rounded-lg">
                  <p className="font-bold text-2xl text-primary">{stat.value}</p>
                  <p className="text-neutral-700 dark:text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
