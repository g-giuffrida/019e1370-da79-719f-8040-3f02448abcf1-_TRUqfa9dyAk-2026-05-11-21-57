import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-line/70">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <FadeIn>
            <p className="label-caps">About</p>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="max-w-2xl space-y-6">
              <p className="text-[22px] md:text-[26px] leading-[1.5] text-ink font-light tracking-tight">
                Operations analyst with 5 years of experience building data systems in
                automotive and clean tech. Now focused on AI and analytics.
              </p>
              <p className="text-[16px] leading-[1.85] text-ink-soft">
                Currently at Climeworks designing AI-powered operational insights.
                Previously led production planning launches at Toyota.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
