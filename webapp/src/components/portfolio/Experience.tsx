import FadeIn from "./FadeIn";

interface Achievement {
  text: string;
  metric?: string;
}

interface Role {
  title: string;
  period: string;
  location: string;
  achievements: Achievement[];
}

interface Company {
  name: string;
  logo: string;
  roles: Role[];
}

const companies: Company[] = [
  {
    name: "Climeworks",
    logo: "/logo-climeworks.png",
    roles: [
      {
        title: "Operations Data Analyst",
        period: "2025",
        location: "Zurich, CH",
        achievements: [
          {
            text: "Built end-to-end automated AI-assisted machine failure and downtime reporting system (Databricks / Python / SQL → Power BI) covering failure reason, component, and downtime duration across all production lines.",
            metric: "Reduced mean time to root cause",
          },
          {
            text: "Built AI tools to process sensor data for pattern recognition and anomaly detection.",
          },
          {
            text: "Automated weekly reporting pipelines (Power Automate / Power Apps), eliminating several hours of manual data work per week.",
            metric: "Hours saved weekly",
          },
        ],
      },
      {
        title: "Production Planner",
        period: "2024 – 2025",
        location: "Zurich, CH",
        achievements: [
          {
            text: "Built manufacturing planning and tracking process from scratch — shop floor data capture to a live Power BI dashboard (production status, WIP, delays, bottlenecks).",
            metric: "Same-day decision-making enabled",
          },
          {
            text: "Reduced planning cycle time by standardising production scheduling processes.",
          },
        ],
      },
    ],
  },
  {
    name: "Toyota",
    logo: "/logo-toyota.png",
    roles: [
      {
        title: "Operations Development Specialist",
        period: "2023 – 2024",
        location: "Brussels, BE",
        achievements: [
          {
            text: "Delivered a 26% reduction in obsolete inventory by building an ageing inventory dashboard (Power BI) combining production, sales, and logistics hub data — first time all three sources were unified.",
            metric: "26% inventory reduction",
          },
        ],
      },
      {
        title: "Production Planner",
        period: "2021 – 2023",
        location: "Brussels, BE",
        achievements: [
          {
            text: "Built a Python-based inventory optimisation tool (safety stock, lead times, demand forecasting) replacing a manual spreadsheet process.",
          },
          {
            text: "Led Start of Production for the Toyota Aygo X: coordinated 10+ stakeholder teams including suppliers, logistics, and plant.",
            metric: "10+ teams coordinated",
          },
        ],
      },
      {
        title: "Intern — EV Planning",
        period: "2021",
        location: "Brussels, BE",
        achievements: [
          {
            text: "Built a vehicle lifetime value and lifecycle profitability model for EV product introduction scenarios.",
          },
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            02 — Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-16">
            Work History
          </h2>
        </FadeIn>

        <div className="space-y-20">
          {companies.map((company, ci) => (
            <FadeIn key={company.name} delay={ci * 100}>
              <div className="flex items-center gap-4 mb-10">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-5 object-contain"
                />
                <div className="flex-1 h-px bg-black/10" />
              </div>

              <div className="space-y-12">
                {company.roles.map((role, ri) => (
                  <div key={ri} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                    <div className="md:col-span-3">
                      <p className="text-xs uppercase tracking-[0.1em] text-black/40">
                        {role.period}
                      </p>
                      <p className="text-xs text-black/30 mt-1">
                        {role.location}
                      </p>
                    </div>

                    <div className="md:col-span-9">
                      <h3 className="text-base font-medium text-black mb-4">
                        {role.title}
                      </h3>
                      <ul className="space-y-3">
                        {role.achievements.map((ach, ai) => (
                          <li key={ai} className="flex items-start gap-3">
                            <span className="mt-2 w-1 h-1 rounded-full bg-black/20 shrink-0" />
                            <div>
                              <p className="text-sm text-black/50 leading-relaxed font-light">
                                {ach.text}
                              </p>
                              {ach.metric !== undefined ? (
                                <span className="inline-block mt-2 text-xs uppercase tracking-[0.1em] text-black/40 border-b border-black/15 pb-0.5">
                                  {ach.metric}
                                </span>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
