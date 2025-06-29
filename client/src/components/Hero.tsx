import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Anand_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-primary text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fadeInUp">
          {/* Profile image */}
          <div className="mb-8">
            <img
              src="/profile-image.jpg"
              alt="Anand Yadav - Principal Software Engineer"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20 shadow-xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Principal <span className="text-secondary-custom">Software</span> Engineer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Architecting AI-driven software solutions with 12+ years of experience.
            Specializing in FinTech platforms, microservices, and team leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
            <Button
              onClick={() => scrollToSection("portfolio")}
              className="bg-secondary-custom hover:bg-secondary-custom/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-custom px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-custom px-8 py-3 rounded-full font-medium transition-all duration-300 w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
