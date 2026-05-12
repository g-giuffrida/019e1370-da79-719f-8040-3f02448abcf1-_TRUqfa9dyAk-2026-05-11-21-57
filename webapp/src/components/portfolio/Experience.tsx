import FadeIn from "./FadeIn";

const experience = [
  {
    name: "Climeworks",
    logo: "/logo-climeworks.png",
    period: "2024–2025",
    summary:
      "Operations Data Analyst engineering data pipelines and custom AI systems to scale clean energy operations.",
  },
  {
    name: "Toyota",
    logo: "/logo-toyota.png",
    period: "2021–2024",
    summary:
      "Operations Development Specialist & Planner who built Python-based inventory tools and coordinated model launches.",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Experience Overview
          </h2>
          <p className="max-w-2xl text-sm text-black/50 leading-relaxed font-light mb-16">
            Climeworks (2024–2025): Operations Data Analyst engineering data pipelines and custom AI systems to scale clean energy operations.
            Toyota (2021–2024): Operations Development Specialist & Planner who built Python-based inventory tools and coordinated model launches.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {experience.map((item, index) => (
            <FadeIn key={item.name} delay={index * 100}>
              <div className="rounded-[32px] border border-black/10 bg-slate-950/5 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <img src={item.logo} alt={item.name} className="h-8 object-contain" />
                  <div className="h-px flex-1 bg-black/10" />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40 mb-2">
                  {item.period}
                </p>
                <h3 className="text-xl font-semibold text-black mb-3">{item.name}</h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  {item.summary}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
