import { Mail, Linkedin } from "lucide-react";
import { toast } from "sonner";
import FadeIn from "./FadeIn";
import Typewriter from "./Typewriter";
import { content } from "@/content";

export default function Hero() {
  const { hero, contact } = content;
  const emailLink = contact.links.find((l) => l.label === "Email");
  const linkedinLink = contact.links.find((l) => l.label === "LinkedIn");

  const copyAndContinue = (text: string, label: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(
        () => toast.success(`${label} copied`, { description: text }),
        () => toast.error(`Couldn't copy ${label.toLowerCase()}`),
      );
    }
  };

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
            <div className="mt-5 flex items-center justify-center gap-5">
              {emailLink ? (
                <a
                  href={emailLink.href}
                  aria-label="Email"
                  onClick={() => copyAndContinue(emailLink.value, "Email")}
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ) : null}
              {linkedinLink ? (
                <a
                  href={linkedinLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ) : null}
            </div>
          </div>
        </FadeIn>

        {/* Photo + experience grid — photo bottom aligns with last logo descriptor */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
          <FadeIn delay={300} className="md:col-span-5 lg:col-span-4">
            <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden">
              <img
                src={hero.photo}
                alt={hero.photoAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </FadeIn>

          <FadeIn delay={400} className="md:col-span-7 lg:col-span-8">
            <p className="label-caps mb-10">{hero.experienceLabel}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
