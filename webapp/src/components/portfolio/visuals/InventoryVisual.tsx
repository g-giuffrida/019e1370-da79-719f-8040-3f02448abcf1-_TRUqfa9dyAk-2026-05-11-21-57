export default function InventoryVisual() {
  // Before: spiky, higher  /  After: smoother, lower
  const points = 24;
  const xStart = 60;
  const xEnd = 760;
  const yTop = 70;
  const yBottom = 270;

  const xs = Array.from({ length: points }, (_, i) => xStart + (i * (xEnd - xStart)) / (points - 1));

  // pseudo random-looking but deterministic
  const before = [0.9, 0.7, 1.0, 0.45, 0.85, 0.95, 0.55, 0.8, 1.0, 0.6, 0.92, 0.5, 0.88, 0.7, 0.98, 0.55, 0.82, 0.95, 0.6, 0.78, 0.92, 0.65, 0.85, 0.95];
  const after  = [0.55, 0.52, 0.6, 0.5, 0.55, 0.58, 0.5, 0.54, 0.6, 0.52, 0.56, 0.5, 0.54, 0.55, 0.58, 0.5, 0.52, 0.56, 0.5, 0.53, 0.55, 0.52, 0.54, 0.55];

  const toY = (v: number) => yTop + (1 - v) * (yBottom - yTop);

  const pathOf = (vals: number[]) =>
    vals.map((v, i) => `${i === 0 ? "M" : "L"} ${xs[i]} ${toY(v)}`).join(" ");

  return (
    <svg
      viewBox="0 0 800 460"
      className="w-full h-auto"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
      role="img"
      aria-label="Inventory optimization chart"
    >
      <rect width="800" height="460" fill="#FAF8F3" />

      <text x="40" y="40" fill="#666666" fontSize="10" letterSpacing="2">
        INVENTORY LEVEL · BEFORE VS AFTER
      </text>

      {/* horizontal guides */}
      <g stroke="#E8E4DB" strokeWidth="0.8">
        {[0.25, 0.5, 0.75].map((t) => (
          <line key={t} x1={xStart} y1={yTop + t * (yBottom - yTop)} x2={xEnd} y2={yTop + t * (yBottom - yTop)} />
        ))}
      </g>

      {/* axes */}
      <line x1={xStart} y1={yBottom} x2={xEnd} y2={yBottom} stroke="#D0D0D0" />
      <line x1={xStart} y1={yTop} x2={xStart} y2={yBottom} stroke="#D0D0D0" />

      {/* Before (dashed gray) */}
      <path d={pathOf(before)} fill="none" stroke="#999999" strokeWidth="1.6" strokeDasharray="5 4" />
      {/* After (solid dark) */}
      <path d={pathOf(after)} fill="none" stroke="#2C2C2C" strokeWidth="2" />

      {/* axis labels */}
      <text x={xStart} y={yBottom + 22} fill="#666666" fontSize="11">Time (weeks)</text>
      <text x={xStart - 8} y={yTop - 8} fill="#666666" fontSize="11">Inventory level</text>

      {/* legend */}
      <g>
        <line x1="540" y1="60" x2="568" y2="60" stroke="#999999" strokeWidth="1.6" strokeDasharray="5 4" />
        <text x="576" y="64" fill="#2C2C2C" fontSize="11">Before optimization</text>

        <line x1="540" y1="80" x2="568" y2="80" stroke="#2C2C2C" strokeWidth="2" />
        <text x="576" y="84" fill="#2C2C2C" fontSize="11">After optimization</text>
      </g>

      {/* metric cards */}
      <g>
        {[
          { label: "AVAILABILITY", value: "99.2%" },
          { label: "CARRYING COST", value: "−18%" },
          { label: "LEAD TIME VARIANCE", value: "−12%" },
        ].map((m, i) => {
          const cardX = 60 + i * 240;
          return (
            <g key={i}>
              <rect x={cardX} y="320" width="220" height="90" fill="none" stroke="#D0D0D0" />
              <text x={cardX + 110} y="350" fill="#666666" fontSize="10" textAnchor="middle" letterSpacing="2">
                {m.label}
              </text>
              <text x={cardX + 110} y="385" fill="#2C2C2C" fontSize="26" fontWeight="600" textAnchor="middle">
                {m.value}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
