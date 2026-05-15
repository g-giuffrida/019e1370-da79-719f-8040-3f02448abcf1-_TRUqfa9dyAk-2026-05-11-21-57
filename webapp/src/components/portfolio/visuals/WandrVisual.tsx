export default function WandrVisual() {
  return (
    <a
      href="https://www.wandr.ch"
      target="_blank"
      rel="noreferrer"
      className="block w-full group"
      aria-label="Visit Wandr.ch"
    >
      <img
        src="/wandr-screenshot.png"
        alt="Wandr.ch — Swiss hiking discovery app"
        className="w-full h-auto transition-opacity group-hover:opacity-90"
        style={{ mixBlendMode: "multiply" }}
        loading="lazy"
      />
    </a>
  );
}
