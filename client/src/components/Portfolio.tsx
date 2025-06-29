import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern, responsive e-commerce solution with advanced filtering and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "web",
      tags: ["Web Design"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Intuitive mobile app design for tracking workouts, nutrition, and health metrics with beautiful data visualization.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "mobile",
      tags: ["Mobile App"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 3,
      title: "Sustainable Brand Identity",
      description: "Complete brand identity system for eco-friendly startup including logo, typography, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "branding",
      tags: ["Branding"],
      links: { demo: "#", behance: "#" }
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data-driven dashboard design with interactive charts, real-time updates, and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "web",
      tags: ["Web Design"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "User-friendly food delivery app with seamless ordering process and real-time tracking features.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "mobile",
      tags: ["Mobile App"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 6,
      title: "Tech Startup Branding",
      description: "Modern brand identity for innovative tech company including visual system and marketing materials.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "branding",
      tags: ["Branding"],
      links: { demo: "#", behance: "#" }
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Design" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "branding", label: "Branding" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-custom mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-custom max-w-2xl mx-auto">
            A selection of my recent work across various disciplines and industries.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-secondary-custom text-white hover:bg-secondary-custom/90"
                  : "text-gray-custom hover:text-secondary-custom border-gray-300"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === "web"
                        ? "bg-secondary-custom/10 text-secondary-custom"
                        : project.category === "mobile"
                        ? "bg-accent-custom/10 text-accent-custom"
                        : "bg-primary-custom/10 text-primary-custom"
                    }`}
                  >
                    {project.tags[0]}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-custom hover:text-secondary-custom transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </Button>
                    {project.links.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-custom hover:text-secondary-custom transition-colors duration-300"
                      >
                        <Github size={16} />
                      </Button>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-custom mb-2">{project.title}</h3>
                <p className="text-gray-custom">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
