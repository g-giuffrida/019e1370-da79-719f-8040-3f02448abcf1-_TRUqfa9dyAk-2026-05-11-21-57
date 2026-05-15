import { useEffect, useState } from "react";
import { content } from "@/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-sm border-b border-line/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="text-ink font-semibold tracking-tight text-[15px]">
          {content.nav.brand}
        </a>
        <nav className="flex items-center gap-7 md:gap-9">
          {content.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
