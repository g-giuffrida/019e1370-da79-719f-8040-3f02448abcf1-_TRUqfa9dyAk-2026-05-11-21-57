import FadeIn from "./FadeIn";

const logos = [
  { src: "/logo-climeworks.png", alt: "Climeworks", descriptor: "AI-powered operations and downtime analytics" },
  { src: "/logo-toyota.png", alt: "Toyota", descriptor: "Production planning and supply chain optimization" },
  { src: "/logo-rug.png", alt: "University of Groningen", descriptor: "MSc Supply Chain · BSc International Business" },
  { src: "/logo-microsoft.png", alt: "Microsoft", descriptor: "Certificate · Generative AI for Data Analysis" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-12 md:gap-20 items-start">
          {/* Left: photo */}
          <FadeIn>
            <div className="w-full max-w-[320px]">
              <div className="aspect-square overflow-hidden rounded-full border border-line">
                <img
                  src="/giulio.jpg"
                  alt="Giulio Giuffrida"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-1">
                <p className="text-[15px] font-semibold text-ink">Giulio Giuffrida</p>
                <p className="text-[14px] text-ink-soft">Operations Data Analyst</p>
                <p className="text-[13px] text-ink-soft">Zurich, Switzerland</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: intro + logos */}
          <div className="space-y-12 md:space-y-16">
            <FadeIn delay={100}>
              <div className="space-y-6 max-w-[520px]">
                <p className="label-caps">About</p>
                <p className="text-[20px] md:text-[22px] leading-[1.55] text-ink font-light">
                  Operations analyst with 5 years of experience building data systems in
                  automotive and clean tech. Now focused on AI and analytics.
                </p>
                <p className="text-[16px] leading-[1.8] text-ink-soft">
                  Currently at Climeworks designing AI-powered operational insights.
                  Previously led production planning launches at Toyota.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div>
                <p className="label-caps mb-6">Experience &amp; Education</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  {logos.map((l) => (
                    <div key={l.alt} className="flex flex-col gap-3">
                      <div className="h-10 flex items-center">
                        <img
                          src={l.src}
                          alt={l.alt}
                          className="max-h-9 max-w-[140px] object-contain object-left grayscale opacity-80"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[13px] leading-[1.6] text-ink-soft">{l.descriptor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
