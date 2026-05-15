export default function AygoVisual() {
  const phases = [
    { label: "Supplier Ramp-up", start: 0, end: 12 },
    { label: "Plant Readiness", start: 8, end: 16 },
    { label: "Logistics Setup", start: 10, end: 18 },
    { label: "Full Production", start: 16, end: 24 },
  ];

  const trackX = 0;
  const trackW = 360;
  const totalWeeks = 24;
  const weekW = trackW / totalWeeks;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Car image */}
      <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-cream">
        <img
          src="/aygo.jpg"
          alt="Toyota Aygo X"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Timeline */}
      <div>
        <p className="label-caps mb-5">Launch Timeline</p>
        <svg viewBox="0 0 400 220" className="w-full h-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          {/* week axis */}
          <g stroke="#D0D0D0" strokeWidth="0.6">
            {[0, 6, 12, 18, 24].map((w) => (
              <line key={w} x1={trackX + w * weekW + 20} y1="20" x2={trackX + w * weekW + 20} y2="200" />
            ))}
          </g>
          {[0, 6, 12, 18, 24].map((w) => (
            <text key={w} x={trackX + w * weekW + 20} y="215" fill="#666666" fontSize="9" textAnchor="middle">
              W{w}
            </text>
          ))}

          {phases.map((p, i) => {
            const y = 40 + i * 36;
            const x = trackX + p.start * weekW + 20;
            const w = (p.end - p.start) * weekW;
            return (
              <g key={i}>
                <rect x={x} y={y} width={w} height="18" fill="#D0D0D0" stroke="#2C2C2C" strokeWidth="0.8" />
                <text x={trackX + 20} y={y - 4} fill="#2C2C2C" fontSize="11" fontWeight="500">
                  {p.label}
                </text>
                <text x={x + w + 6} y={y + 13} fill="#666666" fontSize="9">
                  W{p.start}–{p.end}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
