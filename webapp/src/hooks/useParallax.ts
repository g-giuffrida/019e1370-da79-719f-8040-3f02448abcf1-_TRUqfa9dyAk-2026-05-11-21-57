import { useEffect, useRef } from "react";

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const container = containerRef.current?.parentElement;
    if (!element || !container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const scrollY = window.scrollY;
      const containerTop = containerRect.top + scrollY;

      // Only apply parallax when element is in viewport
      const elementInView = containerRect.top < window.innerHeight && containerRect.bottom > 0;

      if (elementInView) {
        const distance = scrollY - containerTop;
        const parallaxOffset = distance * speed;
        element.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
