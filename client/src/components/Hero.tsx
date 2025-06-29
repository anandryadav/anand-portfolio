import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-primary text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fadeInUp">
          {/* Profile image */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
              alt="Alex Johnson - Creative Designer"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20 shadow-xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creative <span className="text-secondary-custom">Designer</span> & Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Crafting beautiful digital experiences that blend creativity with functionality.
            Specializing in UI/UX design and modern web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("portfolio")}
              className="bg-secondary-custom hover:bg-secondary-custom/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-custom px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
