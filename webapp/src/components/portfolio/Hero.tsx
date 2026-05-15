import FadeIn from "./FadeIn";
import Typewriter from "./Typewriter";

const logos = [
  { src: "/logo-climeworks.png", alt: "Climeworks", descriptor: "AI-powered operations and downtime analytics" },
  { src: "/logo-toyota.png", alt: "Toyota", descriptor: "Production planning and supply chain optimization" },
  { src: "/logo-rug.svg", alt: "University of Groningen", descriptor: "MSc Supply Chain · BSc International Business" },
  { src: "/logo-microsoft.png", alt: "Microsoft", descriptor: "Certificate · Generative AI for Data Analysis" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Big typed name */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <h1 className="font-semibold text-ink tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(44px, 9vw, 110px)" }}>
              <Typewriter text="Giulio Giuffrida" speed={70} />
            </h1>
            <p className="mt-6 text-[14px] md:text-[15px] text-ink-soft tracking-[0.2em] uppercase">
              Operations Data Analyst · Zurich
            </p>
          </div>
        </FadeIn>

        {/* Photo + experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] gap-12 md:gap-20 items-start">
          <FadeIn delay={300}>
            <div className="w-full max-w-[340px]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/giulio.jpg"
                  alt="Giulio Giuffrida"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <p className="label-caps mb-6">Experience &amp; Education</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {logos.map((l) => (
                  <div key={l.alt} className="flex flex-col gap-4">
                    <div className="h-12 flex items-center">
                      <img
                        src={l.src}
                        alt={l.alt}
                        className="max-h-11 max-w-[160px] object-contain object-left"
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
