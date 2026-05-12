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
                I partner with tech-forward operations teams to deliver AI-enabled decision support, inventory tooling, and scalable data platforms. My focus is on clean energy and automotive environments where real-time decisions matter.
              </p>
              <p className="text-base text-black/50 leading-relaxed font-light">
                At Toyota I built Python-based inventory optimization tools to track and manage $1.2M in aged stock, and coordinated model launches across planning, logistics, and manufacturing. At Climeworks I engineer data pipelines and custom AI systems that scale clean energy operations.
              </p>
              <p className="text-base text-black/50 leading-relaxed font-light">
                I combine operational domain expertise with modern analytics and AI systems design, so teams can move faster without losing control.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                Highlights
              </p>

              <div className="flex items-start gap-6 pb-8 border-b border-black/10">
                <img src="/logo-climeworks.png" alt="Climeworks" className="h-6 mt-1 object-contain" />
                <div>
                  <p className="text-sm font-medium text-black mb-1">Climeworks</p>
                  <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Clean Energy · 2024–2025</p>
                  <p className="text-sm text-black/50 leading-relaxed font-light">
                    Data pipelines, AI systems, and operations analytics for clean energy scale-up.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <img src="/logo-toyota.png" alt="Toyota" className="h-6 mt-1 object-contain" />
                <div>
                  <p className="text-sm font-medium text-black mb-1">Toyota</p>
                  <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Automotive · 2021–2024</p>
                  <p className="text-sm text-black/50 leading-relaxed font-light">
                    Python inventory tooling, Power BI analytics, and cross-functional production planning.
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
              { label: "Available", value: "Open to senior roles" },
              { label: "Languages", value: "EN · IT · ES · DE" },
              { label: "Specialty", value: "Ops · Data · AI" },
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
