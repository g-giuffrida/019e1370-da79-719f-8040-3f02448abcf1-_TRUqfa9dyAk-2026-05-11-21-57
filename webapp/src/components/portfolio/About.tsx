import FadeIn from "./FadeIn";
import { content } from "@/content";

export default function About() {
  const { about } = content;
  return (
    <section id="about" className="py-20 md:py-28 border-t border-line/70">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <FadeIn>
            <p className="label-caps">{about.label}</p>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="max-w-2xl space-y-6 text-[22px] md:text-[26px] leading-[1.5] text-ink font-light tracking-tight">
              {about.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
