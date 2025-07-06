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
      title: "Firmway FinTech Platform",
      description: "End-to-end development of secure, scalable FinTech platform for financial data automation and reconciliation with microservices architecture.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "fintech",
      tags: ["FinTech"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 2,
      title: "ETL Data Pipeline System",
      description: "Designed and orchestrated ETL pipelines using Python and Apache Airflow to automate ingestion and transformation of large financial datasets.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
      category: "backend",
      tags: ["Data Engineering"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 3,
      title: "Microservices Architecture",
      description: "Implemented scalable microservices using Python FastAPI, Django, and Java Spring Boot for modular, maintainable financial services.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
      category: "backend",
      tags: ["Backend"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 4,
      title: "Cloud Infrastructure (AWS/GCP)",
      description: "Architected and deployed high-performance cloud systems improving reliability and throughput by 55% using Kubernetes, Docker, and CI/CD.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
      category: "cloud",
      tags: ["Cloud"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 5,
      title: "Multi-Platform Web Portal",
      description: "Developed comprehensive web portal using PHP, Java, Node.js, and AWS services for enterprise clients with real-time data processing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "web",
      tags: ["Web Development"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 6,
      title: "Mobile Application Suite",
      description: "Led development of 10+ web and mobile applications with REST APIs, coordinating cross-functional teams to deliver client solutions.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "mobile",
      tags: ["Mobile Apps"],
      links: { demo: "#", github: "#" }
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "fintech", label: "FinTech" },
    { id: "backend", label: "Backend" },
    { id: "cloud", label: "Cloud" },
    { id: "web", label: "Web Dev" },
    { id: "mobile", label: "Mobile" }
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
                      project.category === "fintech"
                        ? "bg-secondary-custom/10 text-secondary-custom"
                        : project.category === "backend"
                        ? "bg-accent-custom/10 text-accent-custom"
                        : project.category === "cloud"
                        ? "bg-primary-custom/10 text-primary-custom"
                        : project.category === "web"
                        ? "bg-secondary-custom/10 text-secondary-custom"
                        : "bg-accent-custom/10 text-accent-custom"
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
