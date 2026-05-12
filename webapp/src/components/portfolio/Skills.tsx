import FadeIn from "./FadeIn";

type SkillGroup = {
  title: string;
  skills: string[];
};

const groups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Azure OpenAI",
      "LangChain",
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "Vector Databases",
      "LLM Integration",
      "Sensor Data AI Processing",
      "Microsoft Azure AI Studio",
      "Generative AI for Data Analysis",
    ],
  },
  {
    title: "Technical Stack",
    skills: [
      "Databricks",
      "Python",
      "SQL",
      "Power BI",
      "DAX",
      "Microsoft Fabric",
      "Power Automate",
      "Power Apps",
      "SAP",
      "Appsmith",
      "Excel",
    ],
  },
  {
    title: "Operations & Supply Chain",
    skills: [
      "Production Planning",
      "Inventory Optimisation",
      "Demand Forecasting",
      "Capacity Planning",
      "S&OP",
      "Lean Manufacturing",
      "Root Cause Analysis",
      "ERP / MRP",
      "JIT",
      "Kaizen",
      "KPI Reporting",
      "Process Improvement",
      "Financial Reporting",
    ],
  },
];

const languages = [
  { name: "English", level: "C2" },
  { name: "Italian", level: "C2" },
  { name: "Spanish", level: "C1" },
  { name: "German", level: "A2" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-3">
            04 — Skills
          </p>
          <h2 className="text-3xl font-bold text-black mb-20 tracking-tight">
            Capabilities
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {groups.map((g, i) => (
            <FadeIn key={g.title} delay={i * 100}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-black/30 mb-6">
                  {g.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-black/60 border border-black/[0.1] px-2.5 py-1 leading-none"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="pt-12 border-t border-black/[0.06]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/30 mb-6">
              Languages
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg">
              {languages.map((l) => (
                <div key={l.name} className="flex items-baseline justify-between border-b border-black/[0.08] pb-2">
                  <span className="text-sm text-black font-medium">{l.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-black/35 ml-2">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
