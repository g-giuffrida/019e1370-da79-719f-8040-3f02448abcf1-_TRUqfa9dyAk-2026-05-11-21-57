export default function InventoryChart() {
  const maxValue = 312;
  const barMaxW = 240;

  const models = [
    { name: "GR Yaris", before: 312, after: 193, reduction: 38 },
    { name: "Corolla", before: 278, after: 206, reduction: 26 },
    { name: "Aygo X", before: 245, after: 167, reduction: 32 },
    { name: "RAV4", before: 198, after: 158, reduction: 20 },
    { name: "C-HR", before: 156, after: 128, reduction: 18 },
  ];

  return (
    <svg
      viewBox="0 0 480 295"
      className="w-full h-full"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      {/* Background */}
      <rect width="480" height="295" fill="#fafafa" />

      {/* Title */}
      <text x="24" y="26" fill="#111111" fontSize="9.5" letterSpacing="1.2" fontWeight="500">
        AGED INVENTORY REDUCTION — TOYOTA BELGIUM
      </text>
      <text x="24" y="40" fill="#999" fontSize="8">
        Before vs. after Python optimisation tool · Values in days of stock on hand
      </text>

      {/* Legend */}
      <rect x="24" y="52" width="10" height="8" rx="1.5" fill="#d1d5db" />
      <text x="38" y="60" fill="#888" fontSize="8">Before</text>
      <rect x="82" y="52" width="10" height="8" rx="1.5" fill="#16a34a" />
      <text x="96" y="60" fill="#888" fontSize="8">After optimisation</text>

      {/* Axis line */}
      <line x1="112" y1="68" x2="112" y2="268" stroke="#e5e7eb" strokeWidth="1" />

      {/* Bars */}
      {models.map((m, i) => {
        const y = 74 + i * 38;
        const bw = (m.before / maxValue) * barMaxW;
        const aw = (m.after / maxValue) * barMaxW;
        return (
          <g key={i}>
            <text x="108" y={y + 9} fill="#374151" fontSize="8.5" fontWeight="500" textAnchor="end">
              {m.name}
            </text>

            {/* Before bar */}
            <rect x="112" y={y} width={bw} height="11" rx="2" fill="#d1d5db" />
            <text x={112 + bw + 5} y={y + 9} fill="#aaa" fontSize="7.5">
              {m.before}d
            </text>

            {/* After bar */}
            <rect x="112" y={y + 14} width={aw} height="11" rx="2" fill="#16a34a" opacity="0.8" />
            <text x={112 + aw + 5} y={y + 23} fill="#16a34a" fontSize="7.5">
              {m.after}d
            </text>

            {/* Reduction badge */}
            <text x="454" y={y + 14} fill="#111" fontSize="12" fontWeight="700" textAnchor="end">
              -{m.reduction}%
            </text>
          </g>
        );
      })}

      {/* Summary bar */}
      <rect x="12" y="272" width="456" height="16" rx="2" fill="#f0fdf4" />
      <text x="20" y="283" fill="#16a34a" fontSize="8" fontWeight="500">
        Average -26% reduction · €1.2M freed · Replaced manual spreadsheet process across 5 vehicle lines
      </text>
    </svg>
  );
}
