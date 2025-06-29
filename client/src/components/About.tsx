import { Progress } from "@/components/ui/progress";

export default function About() {
  const skills = [
    { name: "Java & Spring Boot", percentage: 95 },
    { name: "Python & FastAPI", percentage: 92 },
    { name: "Cloud Architecture (AWS/GCP)", percentage: 88 },
    { name: "Microservices & Docker", percentage: 90 },
    { name: "Database Design (MySQL/MongoDB)", percentage: 85 },
    { name: "Team Leadership", percentage: 88 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-custom mb-4">About Me</h2>
          <p className="text-lg text-gray-custom max-w-2xl mx-auto">
            Dynamic Principal Software Engineer with expertise in AI-driven solutions and scalable architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Modern software development workspace"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary-custom mb-6">Hello, I'm Anand Yadav</h3>
            <p className="text-gray-custom mb-6 leading-relaxed">
              With over 12 years of experience in software engineering, I specialize in designing and
              implementing AI-driven software solutions. I lead development teams and enhance operational
              efficiency, resulting in a 75% reduction in costs and a 55% increase in system performance.
            </p>
            <p className="text-gray-custom mb-8 leading-relaxed">
              Currently serving as Principal Software Engineer at Firmway, I architect FinTech platforms
              and drive innovation through microservices architecture, cloud technologies, and mentoring
              engineers to adopt best practices.
            </p>

            {/* Skills Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary-custom mb-4">Core Skills</h4>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-custom">{skill.name}</span>
                      <span className="text-sm text-gray-custom">{skill.percentage}%</span>
                    </div>
                    <Progress value={skill.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
