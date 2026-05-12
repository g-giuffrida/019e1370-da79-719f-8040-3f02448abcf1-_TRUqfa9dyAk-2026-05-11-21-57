import { useEffect, useState } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const companies = [
  {
    logo: "/logo-climeworks.png",
    alt: "Climeworks",
    description:
      "Operations Data Analyst — AI-powered failure classification and reporting pipelines for direct air capture systems.",
  },
  {
    logo: "/logo-toyota.png",
    alt: "Toyota",
    description:
      "Production Planner & Operations Specialist — Python inventory tools, live plant dashboards, and model launch leadership.",
  },
];

const education = [
  {
    logo: "/logo-microsoft.png",
    alt: "Microsoft",
    description: "Professional Certificate in Generative AI for Data Analysis, 2026.",
  },
  {
    logo: "https://www.rug.nl/about-ug/practical-matters/huisstijl/logobank-new/corporatelogo/corporatelogorood/rugr_logoen_rood_rgb.gif",
    alt: "University of Groningen",
    description: "MSc Global Supply Chain Management · BSc International Business.",
  },
];


export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const photoRef = useParallax(0.3);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fade = (delay: number) =>
    `transition-all duration-700 ease-out ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-28 pb-24 w-full">

        {/* Name + bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <div className={`${fade(0)} transition-delay-[0ms]`} style={{ transitionDelay: "0ms" }}>
              <p className="text-xs uppercase tracking-[0.22em] text-black mb-8">
                Zurich, Switzerland · EN · IT · ES · DE
              </p>
            </div>

            <div style={{ transitionDelay: "100ms" }} className={fade(100)}>
              <h1 className="text-[56px] sm:text-7xl font-bold text-black leading-[1.05] tracking-tight mb-6">
                Giulio
                <br />
                Giuffrida
              </h1>
            </div>

            <div style={{ transitionDelay: "200ms" }} className={fade(200)}>
              <p className="text-base font-medium text-black mb-8 tracking-wide">
                Operations, Data & AI Professional
              </p>
              <div className="max-w-2xl space-y-2.5 mb-12">
                {[
                  "Operations & Data Analyst with 5+ years turning ambiguous production problems into systems that work.",
                  "Background in clean energy manufacturing (Climeworks) and automotive production (Toyota).",
                  "I build what doesn't exist yet: tracking pipelines, AI failure classifiers, and live decision tools.",
                  "Based in Zurich, Swiss B Permit — open to operations, data, and AI-adjacent roles.",
                ].map((line, i) => (
                  <p key={i} className="text-sm text-black leading-relaxed font-light">
                    {line}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-8">
                <a
                  href="mailto:g.giuffrida.nl@gmail.com"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-black hover:text-black/50 transition-colors"
                >
                  <Mail size={13} />
                  Get in touch
                  <ArrowUpRight size={11} className="opacity-35 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/in/giulio-giuffrida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-black hover:text-black/50 transition-colors"
                >
                  <Linkedin size={13} />
                  LinkedIn
                  <ArrowUpRight size={11} className="opacity-35 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="hidden md:flex md:col-span-4 justify-end items-start pt-2">
            <div style={{ transitionDelay: "500ms" }} className={`${fade(500)} overflow-hidden rounded-[14px]`}>
              <div ref={photoRef}>
                <img
                  src="/giulio.jpg"
                  alt="Giulio Giuffrida"
                  className="w-56 h-56 lg:w-64 lg:h-64 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience + Education logos */}
        <div style={{ transitionDelay: "400ms" }} className={`${fade(400)} mt-24 pt-12 border-t border-black`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-9">Experience</p>
              <div className="space-y-9">
                {companies.map((item) => (
                  <div key={item.alt} className="flex items-start gap-5">
                    <div className="w-[88px] flex-shrink-0 pt-0.5">
                      <img src={item.logo} alt={item.alt} className="h-9 object-contain object-left" />
                    </div>
                    <p className="text-sm text-black/50 leading-relaxed font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-9">Education & Certification</p>
              <div className="space-y-9">
                {education.map((item) => (
                  <div key={item.alt} className="flex items-start gap-5">
                    <div className="w-[88px] flex-shrink-0 pt-0.5">
                      <img src={item.logo} alt={item.alt} className="h-9 object-contain object-left" />
                    </div>
                    <p className="text-sm text-black/50 leading-relaxed font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
