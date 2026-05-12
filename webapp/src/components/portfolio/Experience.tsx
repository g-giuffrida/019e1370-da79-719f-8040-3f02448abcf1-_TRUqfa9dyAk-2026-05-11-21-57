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
    <section id="experience" className="bg-white py-24 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            03 — Experience
          </p>
          <h2 className="text-3xl font-bold text-black mb-16">
            Work Experience
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <FadeIn key={item.name} delay={index * 100}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-black/5">
                <div className="md:col-span-2 flex items-start">
                  <img src={item.logo} alt={item.name} className="h-8 object-contain" />
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-lg font-semibold text-black mb-2">{item.name}</h3>
                  <p className="text-sm text-black/60 leading-relaxed font-light">
                    {item.summary}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="text-xs uppercase tracking-[0.1em] text-black/40">
                    {item.period}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
