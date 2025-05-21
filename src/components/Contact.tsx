import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import resumeData from "@/data/resumeData";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useScrollAnimation(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-primary section-fade"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Contact Me</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me for job opportunities, collaborations, or just to connect.
        </p>

        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          <div className="md:w-1/2">
            <Card className="glassmorphic-card rounded-xl shadow-lg mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-400">Email</p>
                      <p className="text-neutral-900 dark:text-neutral-100">{resumeData.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-400">Phone</p>
                      <p className="text-neutral-900 dark:text-neutral-100">{resumeData.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-400">Location</p>
                      <p className="text-neutral-900 dark:text-neutral-100">{resumeData.contact.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4 dark:text-white">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href={resumeData.socialLinks.find(link => link.name === "LinkedIn")?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glassmorphic-light hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={resumeData.socialLinks.find(link => link.name === "GitHub")?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glassmorphic-light hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>

                    <a
                      href="mailto:davidgeyer10@gmail.com"
                      className="w-10 h-10 rounded-full glassmorphic-light hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors"
                      aria-label="Email Me"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-1/2">
            <Card className="glassmorphic-card rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Availability</h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                  I am currently open to new opportunities in program and project management. My typical response time is within 24 hours.
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-green-600 dark:text-green-400 font-medium">Available for new opportunities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
