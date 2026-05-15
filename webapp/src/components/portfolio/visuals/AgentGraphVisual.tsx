export default function AgentGraphVisual() {
  const cx = 400;
  const cy = 180;
  const r = 110;

  const agents = [
    { label: "Downtime Agent", angle: -90 },
    { label: "Run Hours Agent", angle: 0 },
    { label: "Performance Agent", angle: 90 },
    { label: "Availability Agent", angle: 180 },
  ].map((a) => ({
    ...a,
    x: cx + r * Math.cos((a.angle * Math.PI) / 180),
    y: cy + r * Math.sin((a.angle * Math.PI) / 180),
  }));

  return (
    <svg
      viewBox="0 0 800 460"
      className="w-full h-auto"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
      role="img"
      aria-label="Multi-agent AI system diagram"
    >
      <rect width="800" height="460" fill="#FAF8F3" />

      <text x="40" y="40" fill="#666666" fontSize="10" letterSpacing="2">
        MULTI-AGENT SYSTEM · CLIMEWORKS
      </text>

      {/* connecting lines */}
      <g stroke="#D0D0D0" strokeWidth="1">
        {agents.map((a, i) => (
          <line key={i} x1={cx} y1={cy} x2={a.x} y2={a.y} />
        ))}
      </g>

      {/* agent nodes */}
      {agents.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r="22" fill="#FAF8F3" stroke="#2C2C2C" strokeWidth="1" />
          <text
            x={a.x}
            y={
              a.angle === -90
                ? a.y - 36
                : a.angle === 90
                ? a.y + 42
                : a.y + 4
            }
            fill="#2C2C2C"
            fontSize="12"
            textAnchor={a.angle === 0 ? "start" : a.angle === 180 ? "end" : "middle"}
            dx={a.angle === 0 ? 30 : a.angle === 180 ? -30 : 0}
            dy={a.angle === 0 || a.angle === 180 ? 0 : 0}
          >
            {a.label}
          </text>
        </g>
      ))}

      {/* orchestrator */}
      <circle cx={cx} cy={cy} r="34" fill="#2C2C2C" />
      <circle cx={cx} cy={cy} r="44" fill="none" stroke="#2C2C2C" strokeWidth="1" opacity="0.25">
        <animate attributeName="r" values="44;52;44" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <text x={cx} y={cy + 4} fill="#FAF8F3" fontSize="11" textAnchor="middle" letterSpacing="1">
        ORCHESTRATOR
      </text>

      {/* alert card */}
      <g>
        <rect x="120" y="340" width="560" height="92" fill="#FAF8F3" stroke="#D0D0D0" />
        <rect x="120" y="340" width="4" height="92" fill="#2C2C2C" />
        <text x="140" y="364" fill="#666666" fontSize="9" letterSpacing="2">
          ALERT · CRITICAL
        </text>
        <text x="140" y="388" fill="#2C2C2C" fontSize="14" fontWeight="600">
          Equipment XY-04 — Thermal Sensor Failure
        </text>
        <text x="140" y="412" fill="#666666" fontSize="12">
          Downtime: 2.3 hrs   ·   Root cause: thermal sensor failure   ·   Confidence: 94%
        </text>
      </g>
    </svg>
  );
}
