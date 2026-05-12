import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-3">
            05 — Let's Connect
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <FadeIn delay={100}>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 leading-tight tracking-tight">
                Open to new
                <br />
                opportunities.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-sm text-black/55 leading-relaxed mb-12 font-light max-w-md">
                Whether you're looking for an operations analyst, a data engineering collaborator,
                or want to discuss how to make your production data actually usable — I'd love to
                hear from you.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-8">
                <a
                  href="mailto:g.giuffrida.nl@gmail.com"
                  className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-black hover:text-black/50 transition-colors"
                >
                  <Mail size={13} />
                  g.giuffrida.nl@gmail.com
                  <ArrowUpRight size={11} className="opacity-35 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/in/giulio-giuffrida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-black hover:text-black/50 transition-colors"
                >
                  <Linkedin size={13} />
                  LinkedIn Profile
                  <ArrowUpRight size={11} className="opacity-35 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <FadeIn delay={400}>
              <div className="space-y-5">
                {[
                  { label: "Location", value: "Zurich, Switzerland" },
                  { label: "Availability", value: "Open to offers" },
                  { label: "Work permit", value: "Swiss B Permit" },
                  { label: "Languages", value: "EN · IT · ES · DE" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-baseline border-b border-black/[0.06] pb-4"
                  >
                    <span className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                      {item.label}
                    </span>
                    <span className="text-sm text-black/70">{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-20 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[10px] text-black/25 uppercase tracking-[0.14em]">
          Giulio Giuffrida — 2026
        </span>
        <div className="flex gap-8">
          <a
            href="mailto:g.giuffrida.nl@gmail.com"
            className="text-[10px] text-black/25 hover:text-black transition-colors uppercase tracking-[0.14em]"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/giulio-giuffrida/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-black/25 hover:text-black transition-colors uppercase tracking-[0.14em]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
