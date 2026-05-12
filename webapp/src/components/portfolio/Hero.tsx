import { useEffect, useState } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-24 pt-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
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
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-black leading-[0.95] tracking-tight mb-6">
                Giulio
                <br />
                Giuffrida
              </h1>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-xl sm:text-2xl font-semibold text-black mb-6">
                Operations, Data & AI Professional
              </p>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="max-w-xl text-base text-black/50 leading-relaxed mb-6 font-light">
                I build high-end operations, data, and AI systems for growth-stage tech teams. My work spans clean energy and automotive operations, with a strong focus on pipelines, tooling, and decision support that drive measurable business impact.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-black/10 rounded-full">
                  <span className="text-xs font-medium text-black">Microsoft AI Certificate</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-black/10 rounded-full">
                  <span className="text-xs font-medium text-black">Supply Chain MSc</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-black/10 rounded-full">
                  <span className="text-xs font-medium text-black">Business BSc</span>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-[400ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:g.giuffrida.nl@gmail.com"
                  className="group inline-flex items-center gap-2 px-5 py-3 bg-black text-white text-xs uppercase tracking-[0.15em] hover:bg-black/80 transition-colors"
                >
                  <Mail size={14} />
                  Get in touch
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/in/giulio-giuffrida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 border border-black/15 text-black text-xs uppercase tracking-[0.15em] hover:border-black/40 transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                  <ArrowUpRight size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
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
                className="w-56 h-56 lg:w-64 lg:h-64 object-cover object-top rounded-[32px] shadow-[0_40px_120px_-60px_rgba(14,165,233,0.45)]"
              />
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-[600ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="mt-20 pt-8 border-t border-black/10 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: "5+", label: "Years Ops, Data & AI" },
              { value: "2", label: "Industry Specialties" },
              { value: "4", label: "Fluent Languages" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-black mb-1">
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
