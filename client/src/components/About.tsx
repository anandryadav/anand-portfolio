import { Progress } from "@/components/ui/progress";

export default function About() {
  const skills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Frontend Development", percentage: 90 },
    { name: "Brand Identity", percentage: 85 },
    { name: "Motion Design", percentage: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-custom mb-4">About Me</h2>
          <p className="text-lg text-gray-custom max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through thoughtful design and clean code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Creative workspace with design tools"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary-custom mb-6">Hello, I'm Alex Johnson</h3>
            <p className="text-gray-custom mb-6 leading-relaxed">
              With over 5 years of experience in digital design and development, I specialize in creating
              user-centered solutions that drive engagement and deliver results. My approach combines
              aesthetic excellence with technical precision.
            </p>
            <p className="text-gray-custom mb-8 leading-relaxed">
              When I'm not designing or coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the design community.
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
