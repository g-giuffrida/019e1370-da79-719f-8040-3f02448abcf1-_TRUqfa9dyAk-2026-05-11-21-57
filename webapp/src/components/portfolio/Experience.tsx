import FadeIn from "./FadeIn";

type Role = {
  title: string;
  period: string;
  bullets: string[];
};

type Company = {
  name: string;
  logo: string;
  location: string;
  roles: Role[];
};

const experience: Company[] = [
  {
    name: "Climeworks",
    logo: "/logo-climeworks.png",
    location: "Zurich",
    roles: [
      {
        title: "Operations Data Analyst",
        period: "Jan 2025 – Present",
        bullets: [
          "Built an automated AI-assisted machine failure and downtime reporting system end-to-end (Databricks / Python / SQL → Power BI), covering failure reason, component, and duration across all production lines.",
          "Reduced mean time to root cause analysis by 67% — from days of manual log-digging to hours.",
          "Built AI tools to process sensor data, enabling automated pattern recognition across 50+ units.",
          "Automated weekly reporting pipelines using Power Automate and Power Apps, eliminating several hours of manual data work per week.",
        ],
      },
      {
        title: "Production Planner",
        period: "Feb 2024 – Jan 2025",
        bullets: [
          "Built the manufacturing planning and tracking process from scratch — from shop floor data capture to a live Power BI dashboard showing production status, WIP, delays, and bottlenecks.",
          "Enabled same-day decision-making where previously no visibility existed.",
          "Reduced planning cycle time by standardising production scheduling and materials alignment across supply chain and operations teams.",
        ],
      },
    ],
  },
  {
    name: "Toyota",
    logo: "/logo-toyota.png",
    location: "Brussels",
    roles: [
      {
        title: "Operations Development Specialist",
        period: "Apr 2023 – Feb 2024",
        bullets: [
          "Delivered 26% reduction in obsolete inventory by building an ageing inventory dashboard (Power BI) combining production, sales, and logistics hub data — first time all three sources were unified in a single view.",
          "Enabled cross-functional root cause analysis on stock ageing previously impossible to perform.",
        ],
      },
      {
        title: "Production Planner",
        period: "Oct 2021 – Apr 2023",
        bullets: [
          "Built a Python-based inventory optimisation tool calculating optimal order quantities from safety stock, lead times, and demand signals — replacing a manual, spreadsheet-driven process.",
          "Led Start of Production for Toyota Aygo X: coordinated supplier ramp-up, logistics flows, and plant readiness across 10+ stakeholder teams. Delivered on time.",
          "Improved parts availability while reducing inventory cost across two vehicle lines.",
        ],
      },
      {
        title: "Intern in EV Planning",
        period: "Apr 2021 – Oct 2021",
        bullets: [
          "Built a vehicle lifetime value and lifecycle profitability model to evaluate EV product introduction scenarios and quantify financial impact of EV bundle packages for senior leadership decision-making.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 border-t border-black">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-3">
            03 — Experience
          </p>
          <h2 className="text-3xl font-bold text-black mb-20 tracking-tight">
            Work Experience
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {experience.map((company, ci) => (
            <FadeIn key={company.name} delay={ci * 100}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 py-14 border-b border-black">

                {/* Company identity */}
                <div className="md:col-span-3 md:pr-8 mb-10 md:mb-0">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-7 object-contain object-left mb-4"
                  />
                  <p className="text-xs font-semibold text-black mb-1">{company.name}</p>
                  <p className="text-xs text-black/40 uppercase tracking-[0.12em]">{company.location}</p>
                </div>

                {/* Roles */}
                <div className="md:col-span-9 space-y-10">
                  {company.roles.map((role, ri) => (
                    <div key={ri}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-1">
                        <h3 className="text-base font-semibold text-black tracking-tight">
                          {role.title}
                        </h3>
                        <span className="text-xs uppercase tracking-[0.14em] text-black/35 flex-shrink-0">
                          {role.period}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {role.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-3">
                            <span className="mt-2 w-1 h-1 rounded-full bg-black/20 flex-shrink-0" />
                            <p className="text-sm text-black/55 leading-relaxed font-light">{b}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
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
