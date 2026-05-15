import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 75, startDelay = 250, className = "" }: TypewriterProps) {
  const [shown, setShown] = useState<string>("");
  const [started, setStarted] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (shown.length >= text.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setShown(text.slice(0, shown.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [started, shown, text, speed]);

  return (
    <span className={className} aria-label={text}>
      {shown}
      <span
        aria-hidden="true"
        className="inline-block align-baseline"
        style={{
          width: "0.06em",
          height: "0.9em",
          marginLeft: "0.05em",
          background: "currentColor",
          transform: "translateY(0.08em)",
          animation: done ? "none" : "blink 1s steps(1) infinite",
          opacity: done ? 0 : 1,
          transition: "opacity 400ms ease 200ms",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
