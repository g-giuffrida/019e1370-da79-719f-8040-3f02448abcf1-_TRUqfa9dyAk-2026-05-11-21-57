import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            01 — About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-16">
            Background
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn delay={100}>
            <div className="space-y-5">
              <p className="text-base text-black/50 leading-relaxed font-light">
                I'm an operations and data analyst with 5 years of experience
                bridging the gap between shop floors and data infrastructure.
                My work spans production planning, supply chain analytics, and
                building the tools that make both possible.
              </p>
              <p className="text-base text-black/50 leading-relaxed font-light">
                At Toyota I built Python-based inventory optimisation tools and
                led cross-functional teams for new model launches. At Climeworks
                I designed end-to-end data pipelines — from sensor ingestion to
                Power BI dashboards — and introduced AI-assisted failure
                analysis that cut root cause investigation time significantly.
              </p>
              <p className="text-base text-black/50 leading-relaxed font-light">
                My edge is the combination: I understand how manufacturing
                actually works, and I can build the data systems to make it
                visible and actionable.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                Industries
              </p>

              <div className="flex items-start gap-6 pb-8 border-b border-black/10">
                <img src="/logo-climeworks.png" alt="Climeworks" className="h-6 mt-1 object-contain" />
                <div>
                  <p className="text-sm font-medium text-black mb-1">Climeworks</p>
                  <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Clean Energy / DAC · 2024–2025</p>
                  <p className="text-sm text-black/50 leading-relaxed font-light">
                    Operations data analytics, AI-assisted failure reporting, and manufacturing planning for direct air capture technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <img src="/logo-toyota.png" alt="Toyota" className="h-6 mt-1 object-contain" />
                <div>
                  <p className="text-sm font-medium text-black mb-1">Toyota</p>
                  <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Automotive · 2021–2024</p>
                  <p className="text-sm text-black/50 leading-relaxed font-light">
                    Production planning, inventory optimisation, and EV lifecycle analysis across Brussels operations.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="mt-16 pt-8 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Based in", value: "Zurich, CH" },
              { label: "Available", value: "Open to offers" },
              { label: "Languages", value: "EN · IT · ES · DE" },
              { label: "Focus", value: "Ops + Data" },
            ].map((fact) => (
              <div key={fact.label}>
                <div className="text-xs uppercase tracking-[0.1em] text-black/30 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-medium text-black">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
