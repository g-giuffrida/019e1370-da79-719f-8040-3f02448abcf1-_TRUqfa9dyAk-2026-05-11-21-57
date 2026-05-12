import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "Swiss Hiking App",
      description: "Mobile app for Swiss hiking trails with real-time weather integration and route optimization.",
      technologies: ["React Native", "Node.js", "MongoDB"],
    },
    {
      title: "Multi-Agentic AI at Climeworks",
      description: "Built a multi-agent AI system for optimizing clean energy operations and predictive maintenance.",
      technologies: ["Python", "Azure OpenAI", "LangChain"],
    },
    {
      title: "Led Start of Production of Aygo X",
      description: "Coordinated the launch of Toyota Aygo X model across planning, logistics, and manufacturing teams.",
      technologies: ["SAP", "Excel", "Project Management"],
    },
    {
      title: "Automatic Downtime Reporting System",
      description: "Engineered an automated system for real-time downtime tracking and reporting in clean energy facilities.",
      technologies: ["Python", "Power BI", "SQL"],
    },
    {
      title: "Inventory Optimization in Python",
      description: "Created Python-based tools to optimize inventory management, tracking $1.2M in aged stock.",
      technologies: ["Python", "pandas", "scikit-learn"],
    },
  ];

  return (
    <section id="projects" className="bg-white py-24 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            02 — Projects
          </p>
          <h2 className="text-3xl font-bold text-black mb-16">
            Examples of My Work
          </h2>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <div className="pb-8 border-b border-black/5">
                <h3 className="text-lg font-semibold text-black mb-3">{project.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed font-light mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-black/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
