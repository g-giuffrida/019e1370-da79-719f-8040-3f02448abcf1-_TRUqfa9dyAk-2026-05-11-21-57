export default function PipelineVisual() {
  const stages = [
    { label: "Raw Data", sub: "Sensors · Event logs" },
    { label: "Databricks", sub: "Ingest · Transform" },
    { label: "Classification", sub: "AI model" },
    { label: "Power BI", sub: "Dashboard" },
  ];

  const startX = 80;
  const gap = 170;
  const y = 140;

  return (
    <svg
      viewBox="0 0 800 420"
      className="w-full h-auto"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
      role="img"
      aria-label="Failure classification pipeline"
    >
      <rect width="800" height="420" fill="#FAF8F3" />
      <text x="40" y="40" fill="#666666" fontSize="10" letterSpacing="2">
        FAILURE CLASSIFICATION PIPELINE
      </text>

      {/* Stages */}
      {stages.map((s, i) => {
        const x = startX + i * gap;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="34" fill="#FAF8F3" stroke="#2C2C2C" strokeWidth="1.2" />
            {/* Icon glyphs */}
            {i === 0 && (
              <g stroke="#2C2C2C" strokeWidth="1.4" fill="none">
                <circle cx={x} cy={y} r="6" />
                <line x1={x - 12} y1={y} x2={x - 8} y2={y} />
                <line x1={x + 8} y1={y} x2={x + 12} y2={y} />
                <line x1={x} y1={y - 12} x2={x} y2={y - 8} />
                <line x1={x} y1={y + 8} x2={x} y2={y + 12} />
              </g>
            )}
            {i === 1 && (
              <g stroke="#2C2C2C" strokeWidth="1.4" fill="none">
                <rect x={x - 10} y={y - 10} width="20" height="20" />
                <line x1={x - 10} y1={y} x2={x + 10} y2={y} />
                <line x1={x} y1={y - 10} x2={x} y2={y + 10} />
              </g>
            )}
            {i === 2 && (
              <g stroke="#2C2C2C" strokeWidth="1.4" fill="none">
                <path d="M -9 -4 Q -9 -12 0 -12 Q 9 -12 9 -4 Q 9 4 4 6 L 4 10 L -4 10 L -4 6 Q -9 4 -9 -4 Z"
                      transform={`translate(${x}, ${y})`} />
                <line x1={x - 3} y1={y + 12} x2={x + 3} y2={y + 12} />
              </g>
            )}
            {i === 3 && (
              <g stroke="#2C2C2C" strokeWidth="1.4" fill="none">
                <rect x={x - 12} y={y - 9} width="24" height="18" />
                <line x1={x - 8} y1={y + 4} x2={x - 8} y2={y - 2} />
                <line x1={x - 2} y1={y + 4} x2={x - 2} y2={y - 5} />
                <line x1={x + 4} y1={y + 4} x2={x + 4} y2={y - 3} />
              </g>
            )}

            <text x={x} y={y + 60} fill="#2C2C2C" fontSize="13" fontWeight="600" textAnchor="middle">
              {s.label}
            </text>
            <text x={x} y={y + 78} fill="#666666" fontSize="11" textAnchor="middle">
              {s.sub}
            </text>

            {i < stages.length - 1 && (
              <g stroke="#D0D0D0" strokeWidth="1.5">
                <line x1={x + 40} y1={y} x2={x + gap - 40} y2={y} />
                <polyline points={`${x + gap - 46},${y - 4} ${x + gap - 40},${y} ${x + gap - 46},${y + 4}`} fill="none" />
              </g>
            )}
          </g>
        );
      })}

      {/* Output card */}
      <g>
        <rect x="80" y="270" width="640" height="100" fill="#FAF8F3" stroke="#D0D0D0" />
        <text x="100" y="296" fill="#666666" fontSize="9" letterSpacing="2">
          CLASSIFIED FAILURE
        </text>
        <g fill="#2C2C2C" fontSize="12">
          <text x="100" y="328" fill="#666666" fontSize="10">FAILURE TYPE</text>
          <text x="100" y="350" fontWeight="600">Thermal</text>

          <text x="260" y="328" fill="#666666" fontSize="10">COMPONENT</text>
          <text x="260" y="350" fontWeight="600">Coolant Pump</text>

          <text x="430" y="328" fill="#666666" fontSize="10">DURATION</text>
          <text x="430" y="350" fontWeight="600">2.3 hrs</text>

          <text x="560" y="328" fill="#666666" fontSize="10">ROOT CAUSE</text>
          <text x="560" y="350" fontWeight="600">Pressure threshold</text>
        </g>
      </g>
    </svg>
  );
}
