export default function InventoryVisual() {
  const points = 26;
  const xStart = 70;
  const xEnd = 760;
  const yTop = 80;
  const yBottom = 320;

  const xs = Array.from({ length: points }, (_, i) => xStart + (i * (xEnd - xStart)) / (points - 1));

  const before = [0.86, 0.62, 0.95, 0.42, 0.78, 0.92, 0.48, 0.82, 0.96, 0.55, 0.88, 0.46, 0.84, 0.66, 0.94, 0.5, 0.78, 0.9, 0.55, 0.74, 0.88, 0.6, 0.82, 0.92, 0.58, 0.8];
  const after  = [0.58, 0.55, 0.6, 0.54, 0.56, 0.58, 0.52, 0.55, 0.6, 0.54, 0.57, 0.52, 0.55, 0.56, 0.58, 0.52, 0.54, 0.57, 0.52, 0.55, 0.56, 0.53, 0.55, 0.57, 0.54, 0.56];

  const toY = (v: number) => yTop + (1 - v) * (yBottom - yTop);

  const pathOf = (vals: number[]) =>
    vals.map((v, i) => `${i === 0 ? "M" : "L"} ${xs[i]} ${toY(v)}`).join(" ");

  const beforeAvg = before.reduce((a, b) => a + b, 0) / before.length;
  const afterAvg = after.reduce((a, b) => a + b, 0) / after.length;

  return (
    <svg
      viewBox="0 0 800 420"
      className="w-full h-auto"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
      role="img"
      aria-label="Inventory level — before vs after optimization"
    >
      <rect width="800" height="420" fill="#FAF8F3" />

      {/* Header */}
      <text x="40" y="38" fill="#2C2C2C" fontSize="13" fontWeight="600" letterSpacing="0.5">
        Inventory level — 26-week window
      </text>
      <text x="40" y="56" fill="#666666" fontSize="11">
        Same demand pattern, applied to a single high-volume part family.
      </text>

      {/* Grid */}
      <g stroke="#E8E4DB" strokeWidth="0.8">
        {[0.25, 0.5, 0.75].map((t) => (
          <line key={t} x1={xStart} y1={yTop + t * (yBottom - yTop)} x2={xEnd} y2={yTop + t * (yBottom - yTop)} />
        ))}
      </g>

      {/* Axis */}
      <line x1={xStart} y1={yBottom} x2={xEnd} y2={yBottom} stroke="#2C2C2C" strokeWidth="0.8" />
      <line x1={xStart} y1={yTop} x2={xStart} y2={yBottom} stroke="#2C2C2C" strokeWidth="0.8" />

      {/* Average bands */}
      <line
        x1={xStart} y1={toY(beforeAvg)} x2={xEnd} y2={toY(beforeAvg)}
        stroke="#999999" strokeWidth="0.8" strokeDasharray="2 4"
      />
      <line
        x1={xStart} y1={toY(afterAvg)} x2={xEnd} y2={toY(afterAvg)}
        stroke="#2C2C2C" strokeWidth="0.8" strokeDasharray="2 4"
      />

      {/* Before line + soft fill */}
      <path
        d={`${pathOf(before)} L ${xs[points - 1]} ${yBottom} L ${xs[0]} ${yBottom} Z`}
        fill="#999999" fillOpacity="0.08"
      />
      <path d={pathOf(before)} fill="none" stroke="#999999" strokeWidth="1.4" strokeDasharray="5 4" />

      {/* After line + fill */}
      <path
        d={`${pathOf(after)} L ${xs[points - 1]} ${yBottom} L ${xs[0]} ${yBottom} Z`}
        fill="#2C2C2C" fillOpacity="0.06"
      />
      <path d={pathOf(after)} fill="none" stroke="#2C2C2C" strokeWidth="2.2" />

      {/* Inline annotations */}
      <g>
        <circle cx={xs[10]} cy={toY(before[10])} r="3" fill="#999999" />
        <text x={xs[10] + 8} y={toY(before[10]) - 6} fill="#666666" fontSize="11">
          Stock-out risk, frequent peaks
        </text>

        <circle cx={xs[18]} cy={toY(after[18])} r="3" fill="#2C2C2C" />
        <text x={xs[18] + 8} y={toY(after[18]) + 18} fill="#2C2C2C" fontSize="11" fontWeight="600">
          Stable band, optimized
        </text>
      </g>

      {/* X labels */}
      <g fill="#666666" fontSize="10">
        <text x={xStart} y={yBottom + 18}>W1</text>
        <text x={(xStart + xEnd) / 2 - 6} y={yBottom + 18}>W13</text>
        <text x={xEnd - 18} y={yBottom + 18}>W26</text>
      </g>

      {/* Legend */}
      <g transform="translate(70, 380)">
        <line x1="0" y1="-4" x2="22" y2="-4" stroke="#999999" strokeWidth="1.4" strokeDasharray="5 4" />
        <text x="30" y="0" fill="#2C2C2C" fontSize="11">Before</text>

        <line x1="100" y1="-4" x2="122" y2="-4" stroke="#2C2C2C" strokeWidth="2.2" />
        <text x="130" y="0" fill="#2C2C2C" fontSize="11">After optimization</text>

        <text x="320" y="0" fill="#666666" fontSize="11">
          Availability  <tspan fill="#2C2C2C" fontWeight="600">99.2%</tspan>
          <tspan dx="14" fill="#666666">·  Carrying cost  </tspan>
          <tspan fill="#2C2C2C" fontWeight="600">−18%</tspan>
          <tspan dx="14" fill="#666666">·  Lead-time variance  </tspan>
          <tspan fill="#2C2C2C" fontWeight="600">−12%</tspan>
        </text>
      </g>
    </svg>
  );
}
