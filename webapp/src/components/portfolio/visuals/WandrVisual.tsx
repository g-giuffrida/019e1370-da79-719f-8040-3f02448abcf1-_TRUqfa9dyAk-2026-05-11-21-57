export default function WandrVisual() {
  return (
    <div className="w-full space-y-6">
      <a
        href="https://www.wandr.ch"
        target="_blank"
        rel="noreferrer"
        className="inline-block group"
        aria-label="Visit Wandr.ch"
      >
        <img
          src="/wandr-logo.png"
          alt="Wandr.ch logo"
          className="h-16 md:h-20 w-auto transition-opacity group-hover:opacity-80"
          style={{ mixBlendMode: "multiply" }}
          loading="lazy"
        />
      </a>
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
    </div>
  );
}
