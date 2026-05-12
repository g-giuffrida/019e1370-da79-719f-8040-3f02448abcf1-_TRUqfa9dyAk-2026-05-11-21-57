import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            06 — Contact
          </p>
        </FadeIn>

        <div className="max-w-2xl">
          <FadeIn delay={100}>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight">
              Let's connect.
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-base text-black/50 leading-relaxed mb-12 font-light">
              Whether you're looking for an operations analyst, a data engineering collaborator, or want to discuss supply chain challenges — I'd love to hear from you.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="mailto:g.giuffrida.nl@gmail.com"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white text-xs uppercase tracking-[0.15em] hover:bg-black/80 transition-colors"
              >
                <Mail size={14} />
                g.giuffrida.nl@gmail.com
                <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/giulio-giuffrida/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 border border-black/15 text-black text-xs uppercase tracking-[0.15em] hover:border-black/40 transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn Profile
                <ArrowUpRight size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-xs uppercase tracking-[0.1em] text-black/30">
              Based in Zurich, Switzerland
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-24 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-black/30 uppercase tracking-[0.1em]">
          Giulio Giuffrida — 2025
        </span>
        <div className="flex gap-6">
          <a
            href="mailto:g.giuffrida.nl@gmail.com"
            className="text-xs text-black/30 hover:text-black transition-colors uppercase tracking-[0.1em]"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/giulio-giuffrida/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-black/30 hover:text-black transition-colors uppercase tracking-[0.1em]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
