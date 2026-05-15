import FadeIn from "./FadeIn";
import { content } from "@/content";

export default function Contact() {
  const { contact } = content;
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-line/70">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="label-caps mb-4">{contact.label}</p>
            <h2 className="text-[32px] md:text-[44px] font-semibold text-ink leading-[1.2] tracking-tight mb-8">
              {contact.heading}
            </h2>
            <p className="text-[16px] leading-[1.8] text-ink-soft max-w-xl mb-12">{contact.body}</p>

            <div className="space-y-2">
              {contact.links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`group flex items-center justify-between py-5 border-t border-line transition-colors hover:bg-cream-hover px-2 -mx-2 ${
                    i === contact.links.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div>
                    <p className="label-caps mb-1">{l.label}</p>
                    <p className="text-[18px] text-ink">{l.value}</p>
                  </div>
                  <span className="text-ink-soft group-hover:text-ink transition-colors text-[20px]">
                    {l.arrow}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-24 pt-8 border-t border-line/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-ink-soft">
            <p>{contact.footerLeft.replace("{year}", String(year))}</p>
            <p>{contact.footerRight}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
