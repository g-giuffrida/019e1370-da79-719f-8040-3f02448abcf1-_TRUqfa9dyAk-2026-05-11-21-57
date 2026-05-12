import { useEffect, useState } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experience = [
    { logo: "/logo-climeworks.png", alt: "Climeworks", summary: "Operations Data Analyst engineering data pipelines for clean energy." },
    { logo: "/logo-toyota.png", alt: "Toyota", summary: "Operations Specialist who built inventory tools and led model launches." },
  ];

  const education = [
    { logo: "/logo-microsoft.png", alt: "Microsoft", summary: "Professional Certificate in Generative AI for Data Analysis." },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-24 pt-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <div
              className={`transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-8">
                Zurich, Switzerland · EN · IT · ES · DE
              </p>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-6">
                Giulio
                <br />
                Giuffrida
              </h1>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-lg text-black mb-12">
                Operations, Data & AI Professional
              </p>
              <p className="max-w-xl text-sm text-black/60 leading-relaxed mb-12 font-light">
                I build high-end operations, data, and AI systems for growth-stage tech teams. My work spans clean energy and automotive operations, with a strong focus on pipelines, tooling, and decision support that drive measurable business impact.
              </p>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:g.giuffrida.nl@gmail.com"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-black hover:text-black/60 transition-colors"
                >
                  <Mail size={14} />
                  Get in touch
                  <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/in/giulio-giuffrida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-black hover:text-black/60 transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                  <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-4 justify-end">
            <div
              className={`transition-all duration-700 ease-out delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src="/giulio.jpg"
                alt="Giulio Giuffrida"
                className="w-56 h-56 lg:w-64 lg:h-64 object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-[400ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="mt-24 pt-12 border-t border-black/5">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-12">
              Experience & Education
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.1em] text-black/30 mb-8">Experience</h3>
                <div className="space-y-8">
                  {experience.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <img src={item.logo} alt={item.alt} className="h-6 object-contain flex-shrink-0" />
                      <p className="text-sm text-black/60 font-light leading-relaxed">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.1em] text-black/30 mb-8">Education</h3>
                <div className="space-y-8">
                  {education.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <img src={item.logo} alt={item.alt} className="h-6 object-contain flex-shrink-0" />
                      <p className="text-sm text-black/60 font-light leading-relaxed">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-[600ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="mt-24 pt-12 border-t border-black/5 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: "5+", label: "Years Ops, Data & AI" },
              { value: "2", label: "Industry Specialties" },
              { value: "4", label: "Fluent Languages" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.1em] text-black/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
