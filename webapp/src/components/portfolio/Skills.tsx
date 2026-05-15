import FadeIn from "./FadeIn";

const columns: { title: string; items: string[] }[] = [
  {
    title: "AI & Machine Learning",
    items: [
      "Azure OpenAI",
      "LangChain",
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "Vector Databases",
      "LLM Integration",
      "Sensor Data AI Processing",
      "Azure AI Studio",
      "Generative AI for Data Analysis",
    ],
  },
  {
    title: "Technical Stack",
    items: [
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
    items: [
      "Production Planning",
      "Inventory Optimization",
      "Demand Forecasting",
      "Capacity Planning",
      "S&OP",
      "Lean Manufacturing",
      "Root Cause Analysis",
      "KPI Reporting",
      "Kaizen",
      "JIT",
      "ERP / MRP",
      "Process Improvement",
      "Financial Reporting",
    ],
  },
];

const languages = [
  { lang: "English", level: "C2" },
  { lang: "Italian", level: "C2" },
  { lang: "Spanish", level: "C1" },
  { lang: "German", level: "A2" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 border-t border-line/70">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 md:mb-20 max-w-2xl">
            <p className="label-caps mb-4">Skills</p>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-ink leading-[1.2] tracking-tight">
              Toolkit across AI, data, and operations.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 80}>
              <div>
                <h3 className="text-[13px] uppercase tracking-[0.18em] text-ink-soft mb-6 pb-3 border-b border-line/80">
                  {col.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {col.items.map((s) => (
                    <li
                      key={s}
                      className="text-[13px] text-ink border border-line px-3 py-1.5 leading-none"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <div className="mt-20 md:mt-24 pt-10 border-t border-line/70">
            <h3 className="text-[13px] uppercase tracking-[0.18em] text-ink-soft mb-6">Languages</h3>
            <div className="flex flex-wrap gap-x-12 gap-y-3">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-baseline gap-3">
                  <span className="text-[16px] text-ink">{l.lang}</span>
                  <span className="text-[12px] text-ink-soft uppercase tracking-wider">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
