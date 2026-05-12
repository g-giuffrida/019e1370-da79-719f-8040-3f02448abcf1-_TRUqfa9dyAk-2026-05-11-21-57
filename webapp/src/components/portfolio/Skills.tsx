import FadeIn from "./FadeIn";

const aiSkills = [
  "Prompt Engineering",
  "RAG (Retrieval-Augmented Generation)",
  "LLM Integration",
  "Azure OpenAI",
  "AI Workflow Automation",
  "Sensor Data AI Processing",
  "LLM Evaluation & Testing",
  "Vector Databases",
  "AI Agents",
  "Python (pandas, scikit-learn)",
  "Generative AI for Data Analysis",
  "Microsoft Azure AI Studio",
];

const itSkills = [
  "Power BI",
  "SQL",
  "Python",
  "Databricks",
  "DAX",
  "Excel",
  "Gen AI",
  "SAP",
  "Microsoft Fabric",
  "Appsmith",
  "Power Automate",
  "Power Apps",
];

const opsSkills = [
  "Production Planning",
  "Inventory Optimization",
  "Demand Forecasting",
  "Process Improvement",
  "Lean Manufacturing",
  "Root Cause Analysis",
  "KPI Reporting",
  "Kaizen",
  "S&OP",
  "Capacity Planning",
  "ERP / MRP",
  "JIT",
  "Financial Reporting",
];

const languages = [
  { name: "English", level: "C2" },
  { name: "Italian", level: "C2" },
  { name: "Spanish", level: "C1" },
  { name: "German", level: "A2" },
];

function SkillGroup({ title, skills, delay = 0 }: { title: string; skills: string[]; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-5">
          {title}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm text-black/70 border border-black/10 hover:border-black/30 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            05 — Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-16">
            Capabilities
          </h2>
        </FadeIn>

        <SkillGroup title="AI & Machine Learning" skills={aiSkills} delay={100} />
        <SkillGroup title="Technical Stack" skills={itSkills} delay={200} />

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={300}>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-5">
                Operations & Supply Chain
              </p>
              <div className="flex flex-wrap gap-2">
                {opsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-black/70 border border-black/10 hover:border-black/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-5">
                Languages
              </p>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between py-2 border-b border-black/5"
                  >
                    <span className="text-sm text-black">{lang.name}</span>
                    <span className="text-xs uppercase tracking-[0.1em] text-black/40">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
