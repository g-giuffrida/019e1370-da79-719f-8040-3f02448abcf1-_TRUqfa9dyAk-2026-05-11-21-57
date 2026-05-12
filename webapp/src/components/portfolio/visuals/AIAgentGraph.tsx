export default function AIAgentGraph() {
  const cx = 240;
  const cy = 162;
  const radius = 108;

  const agents = [
    { label: ["Sensor", "Processor"], angle: -90, color: "#3b82f6" },
    { label: ["Failure", "Classifier"], angle: -30, color: "#6366f1" },
    { label: ["Report", "Generator"], angle: 30, color: "#8b5cf6" },
    { label: ["Alert", "System"], angle: 90, color: "#ec4899" },
    { label: ["Data", "Pipeline"], angle: 150, color: "#f59e0b" },
    { label: ["Pattern", "Detection"], angle: 210, color: "#10b981" },
  ].map((a) => ({
    ...a,
    x: cx + radius * Math.cos((a.angle * Math.PI) / 180),
    y: cy + radius * Math.sin((a.angle * Math.PI) / 180),
  }));

  return (
    <svg
      viewBox="0 0 480 310"
      className="w-full h-full"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      {/* Background */}
      <rect width="480" height="310" fill="#f8fafc" />

      {/* Title */}
      <text x="24" y="24" fill="#111111" fontSize="9.5" letterSpacing="1.2" fontWeight="500">
        MULTI-AGENTIC AI PIPELINE — CLIMEWORKS
      </text>
      <text x="24" y="38" fill="#999" fontSize="8">
        Orchestrated agents · Python · Azure OpenAI · Databricks
      </text>

      {/* Connection lines */}
      {agents.map((a, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={a.x}
          y2={a.y}
          stroke="#cbd5e1"
          strokeWidth="1.25"
          strokeDasharray="4 3"
        />
      ))}

      {/* Mid-point flow dots */}
      {agents.map((a, i) => (
        <circle
          key={i}
          cx={(cx + a.x) / 2}
          cy={(cy + a.y) / 2}
          r="3"
          fill={a.color}
          opacity="0.7"
        />
      ))}

      {/* Agent nodes */}
      {agents.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r="30" fill={a.color} opacity="0.08" />
          <circle cx={a.x} cy={a.y} r="20" fill={a.color} opacity="0.15" />
          <circle cx={a.x} cy={a.y} r="13" fill={a.color} />
          {a.label.map((line, j) => (
            <text
              key={j}
              x={a.x}
              y={a.y + 28 + j * 11 - (a.label.length - 1) * 5.5}
              fill="#374151"
              fontSize="7.5"
              fontWeight="500"
              textAnchor="middle"
            >
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* Central orchestrator node */}
      <circle cx={cx} cy={cy} r="44" fill="#1e40af" opacity="0.07" />
      <circle cx={cx} cy={cy} r="33" fill="#1e40af" opacity="0.12" />
      <circle cx={cx} cy={cy} r="23" fill="#1e293b" />
      <text x={cx} y={cy - 6} fill="#ffffff" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.5">
        ORCHES-
      </text>
      <text x={cx} y={cy + 6} fill="#ffffff" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.5">
        TRATOR
      </text>
      <text x={cx} y={cy + 17} fill="#60a5fa" fontSize="6.5" textAnchor="middle">
        AI
      </text>
    </svg>
  );
}
