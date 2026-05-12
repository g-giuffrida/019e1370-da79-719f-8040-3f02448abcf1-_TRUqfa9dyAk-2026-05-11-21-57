import { useState } from "react";

export default function DowntimeDashboard() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const linePoints: [number, number][] = [
    [30, 210], [56, 205], [82, 213], [108, 200], [134, 195],
    [160, 198], [186, 187], [212, 182], [238, 177], [264, 171],
    [290, 165], [316, 158], [338, 155],
  ];

  const events = [
    { time: "09:14", unit: "Unit 3A", component: "Compressor", cause: "Overtemperature — coolant level low", status: "WARNING", statusColor: "#f59e0b", dt: "2.1h" },
    { time: "07:32", unit: "Unit 1B", component: "Fan Unit", cause: "Motor winding failure — end of life", status: "CRITICAL", statusColor: "#ef4444", dt: "4.7h" },
    { time: "Yest.", unit: "Unit 2C", component: "Sensor", cause: "Calibration drift — scheduled maint.", status: "RESOLVED", statusColor: "#22c55e", dt: "0.5h" },
  ];

  const components = [
    { label: "Compressor", width: 100, color: "#3b82f6", count: 32 },
    { label: "Fan Unit", width: 69, color: "#6366f1", count: 22 },
    { label: "Sensor", width: 47, color: "#8b5cf6", count: 15 },
    { label: "Controller", width: 25, color: "#a78bfa", count: 8 },
  ];

  const areaPoints =
    linePoints.map(([x, y]) => `${x},${y}`).join(" ") + " 338,220 30,220";

  return (
    <svg
      viewBox="0 0 480 320"
      className="w-full h-full"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <defs>
        <linearGradient id="dtArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="480" height="320" fill="#0d1117" />

      {/* Header bar */}
      <rect width="480" height="32" fill="#161b22" />
      <text x="14" y="21" fill="#c9d1d9" fontSize="9" letterSpacing="1.4" fontWeight="500">
        OPERATIONS MONITORING — CLIMEWORKS
      </text>
      <circle cx="461" cy="16" r="4" fill="#22c55e" />
      <text x="455" y="20" fill="#22c55e" fontSize="7" textAnchor="end" letterSpacing="0.5">
        LIVE
      </text>

      {/* KPI: Uptime */}
      <rect x="12" y="42" width="143" height="64" rx="2" fill="#161b22" stroke="#21262d" strokeWidth="0.75" />
      <text x="22" y="58" fill="#6e7681" fontSize="7.5" letterSpacing="1">UPTIME</text>
      <text x="22" y="84" fill="#22c55e" fontSize="24" fontWeight="700">94.2%</text>
      <text x="22" y="98" fill="#6e7681" fontSize="7">↑ 3.1pp vs last quarter</text>

      {/* KPI: MTTR */}
      <rect x="163" y="42" width="143" height="64" rx="2" fill="#161b22" stroke="#21262d" strokeWidth="0.75" />
      <text x="173" y="58" fill="#6e7681" fontSize="7.5" letterSpacing="1">MEAN TIME TO REPAIR</text>
      <text x="173" y="84" fill="#e6edf3" fontSize="24" fontWeight="700">2.3h</text>
      <text x="173" y="98" fill="#22c55e" fontSize="7">↓ 67% from baseline</text>

      {/* KPI: Failures */}
      <rect x="314" y="42" width="154" height="64" rx="2" fill="#161b22" stroke="#21262d" strokeWidth="0.75" />
      <text x="324" y="58" fill="#6e7681" fontSize="7.5" letterSpacing="1">FAILURES · 30 DAYS</text>
      <text x="324" y="84" fill="#e6edf3" fontSize="24" fontWeight="700">14</text>
      <text x="324" y="98" fill="#6e7681" fontSize="7">3 critical · 6 warning · 5 info</text>

      {/* Line chart */}
      <rect x="12" y="116" width="292" height="104" rx="2" fill="#161b22" stroke="#21262d" strokeWidth="0.75" />
      <text x="22" y="132" fill="#6e7681" fontSize="7.5" letterSpacing="1">DAILY DOWNTIME HOURS — 30D</text>

      {[148, 162, 176, 190, 204, 220].map((y, i) => (
        <line key={i} x1="22" y1={y} x2="290" y2={y} stroke="#21262d" strokeWidth="0.6" />
      ))}
      {[["8h", 151], ["6h", 165], ["4h", 179], ["2h", 193], ["0", 207]].map(([lbl, y], i) => (
        <text key={i} x="20" y={Number(y)} fill="#484f58" fontSize="6.5" textAnchor="end">{lbl}</text>
      ))}

      <polygon points={areaPoints} fill="url(#dtArea)" />
      <polyline
        points={linePoints.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {linePoints.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={hoveredPoint === i ? 4.5 : 2.5}
          fill={hoveredPoint === i ? "#ffffff" : "#3b82f6"}
          stroke="#0d1117"
          strokeWidth="1.5"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setHoveredPoint(i)}
          onMouseLeave={() => setHoveredPoint(null)}
        >
          <title>Downtime point {i + 1}</title>
        </circle>
      ))}

      {hoveredPoint !== null ? (
        <g>
          <rect x={linePoints[hoveredPoint][0] + 12} y={linePoints[hoveredPoint][1] - 22} width="88" height="18" rx="3" fill="#0f172a" opacity="0.95" />
          <text x={linePoints[hoveredPoint][0] + 56} y={linePoints[hoveredPoint][1] - 8} fill="#fff" fontSize="6.5" textAnchor="middle">
            Point {hoveredPoint + 1}
          </text>
        </g>
      ) : null}

      {/* Bar chart */}
      <rect x="314" y="116" width="154" height="104" rx="2" fill="#161b22" stroke="#21262d" strokeWidth="0.75" />
      <text x="324" y="132" fill="#6e7681" fontSize="7.5" letterSpacing="1">BY COMPONENT</text>

      {components.map((c, i) => (
        <g key={i}>
          <text x="324" y={150 + i * 21} fill="#c9d1d9" fontSize="7.5">{c.label}</text>
          <rect x="324" y={153 + i * 21} width={c.width} height="9" rx="1.5" fill={c.color} />
          <text x={324 + c.width + 4} y={161 + i * 21} fill="#6e7681" fontSize="7">{c.count}</text>
        </g>
      ))}

      {/* Events table */}
      <rect x="12" y="230" width="456" height="78" rx="2" fill="#161b22" stroke="#21262d" strokeWidth="0.75" />
      <text x="22" y="245" fill="#6e7681" fontSize="7.5" letterSpacing="1">RECENT EVENTS — AI CLASSIFIED</text>
      <line x1="12" y1="250" x2="468" y2="250" stroke="#21262d" strokeWidth="0.75" />

      {events.map((e, i) => (
        <g
          key={i}
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setHoveredEvent(i)}
          onMouseLeave={() => setHoveredEvent(null)}
        >
          <rect
            x="12"
            y={257 + i * 18}
            width="456"
            height="18"
            rx="2"
            fill={hoveredEvent === i ? "rgba(255,255,255,0.08)" : "transparent"}
          />
          <text x="22" y={265 + i * 18} fill="#8b949e" fontSize="7.5">{e.time}</text>
          <text x="66" y={265 + i * 18} fill="#c9d1d9" fontSize="7.5">{e.unit}</text>
          <text x="116" y={265 + i * 18} fill="#c9d1d9" fontSize="7.5">{e.component}</text>
          <text x="186" y={265 + i * 18} fill="#8b949e" fontSize="7.5">{e.cause}</text>
          <rect x="368" y={257 + i * 18} width="54" height="11" rx="2" fill={e.statusColor} opacity="0.15" />
          <text x="395" y={266 + i * 18} fill={e.statusColor} fontSize="6.5" textAnchor="middle">{e.status}</text>
          <text x="434" y={265 + i * 18} fill="#6e7681" fontSize="7.5">{e.dt}</text>
        </g>
      ))}
    </svg>
  );
}
