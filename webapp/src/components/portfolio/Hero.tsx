import FadeIn from "./FadeIn";
import Typewriter from "./Typewriter";
import { content } from "@/content";

export default function Hero() {
  const { hero } = content;

  return (
    <section id="top" className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Big typed name, centered */}
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <h1
              className="font-semibold text-ink tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(44px, 9vw, 110px)" }}
            >
              <Typewriter text={hero.name} speed={70} />
            </h1>
            <p className="mt-6 text-[13px] md:text-[14px] text-ink-soft tracking-[0.22em] uppercase">
              {hero.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Photo + experience grid — aligned on a clean baseline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <FadeIn delay={300} className="md:col-span-5 lg:col-span-4">
            <div className="aspect-[4/5] w-full max-w-[420px] overflow-hidden">
              <img
                src={hero.photo}
                alt={hero.photoAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </FadeIn>

          <FadeIn delay={400} className="md:col-span-7 lg:col-span-8">
            <div className="md:pt-2">
              <p className="label-caps mb-8">{hero.experienceLabel}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {hero.logos.map((l) => (
                  <div key={l.alt} className="flex flex-col gap-4">
                    <div className="h-12 flex items-center">
                      <img
                        src={l.src}
                        alt={l.alt}
                        className="max-h-12 max-w-[170px] object-contain object-left"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[13px] leading-[1.65] text-ink-soft">{l.descriptor}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
