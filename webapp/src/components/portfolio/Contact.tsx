import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-line/70">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="label-caps mb-4">Contact</p>
            <h2 className="text-[32px] md:text-[44px] font-semibold text-ink leading-[1.2] tracking-tight mb-8">
              Open to conversations on operations, data, and AI.
            </h2>
            <p className="text-[16px] leading-[1.8] text-ink-soft max-w-xl mb-12">
              Based in Zurich. Swiss B permit valid until January 2029. Reach out by email or LinkedIn.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:g.giuffrida.nl@gmail.com"
                className="group flex items-center justify-between py-5 border-t border-line transition-colors hover:bg-cream-hover px-2 -mx-2"
              >
                <div>
                  <p className="label-caps mb-1">Email</p>
                  <p className="text-[18px] text-ink">g.giuffrida.nl@gmail.com</p>
                </div>
                <span className="text-ink-soft group-hover:text-ink transition-colors text-[20px]">→</span>
              </a>

              <a
                href="tel:+41762705362"
                className="group flex items-center justify-between py-5 border-t border-line transition-colors hover:bg-cream-hover px-2 -mx-2"
              >
                <div>
                  <p className="label-caps mb-1">Phone</p>
                  <p className="text-[18px] text-ink">+41 76 270 53 62</p>
                </div>
                <span className="text-ink-soft group-hover:text-ink transition-colors text-[20px]">→</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-5 border-t border-b border-line transition-colors hover:bg-cream-hover px-2 -mx-2"
              >
                <div>
                  <p className="label-caps mb-1">LinkedIn</p>
                  <p className="text-[18px] text-ink">in/giulio-giuffrida</p>
                </div>
                <span className="text-ink-soft group-hover:text-ink transition-colors text-[20px]">↗</span>
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-24 pt-8 border-t border-line/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-ink-soft">
            <p>© {new Date().getFullYear()} Giulio Giuffrida</p>
            <p>Zurich, Switzerland</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
