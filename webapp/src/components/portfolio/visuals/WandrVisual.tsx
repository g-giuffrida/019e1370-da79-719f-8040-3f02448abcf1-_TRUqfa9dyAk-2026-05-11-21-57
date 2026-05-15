export default function WandrVisual() {
  return (
    <svg
      viewBox="0 0 800 460"
      className="w-full h-auto"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
      role="img"
      aria-label="Wandr.ch hiking map preview"
    >
      <rect width="800" height="460" fill="#FAF8F3" />

      {/* Map area */}
      <rect x="40" y="40" width="500" height="380" fill="#E8E4DB" stroke="#D0D0D0" strokeWidth="1" />

      {/* Contour lines */}
      <g stroke="#D6D1C2" strokeWidth="0.8" fill="none" opacity="0.7">
        <path d="M 60 120 Q 180 100 260 140 T 480 130" />
        <path d="M 60 170 Q 200 150 280 190 T 500 180" />
        <path d="M 60 230 Q 220 210 300 240 T 520 230" />
        <path d="M 60 290 Q 240 270 320 290 T 530 290" />
        <path d="M 60 350 Q 260 330 340 350 T 530 350" />
      </g>

      {/* Subtle forests */}
      <g fill="#D8DBC9" opacity="0.6">
        <circle cx="120" cy="110" r="22" />
        <circle cx="155" cy="100" r="16" />
        <circle cx="420" cy="350" r="26" />
        <circle cx="460" cy="370" r="18" />
        <circle cx="380" cy="100" r="14" />
      </g>

      {/* Trails */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 80 380 Q 150 320 200 280 T 320 200 Q 380 170 460 140"
              stroke="#8B9E77" strokeWidth="2.5" />
        <path d="M 100 200 Q 180 220 260 260 T 460 320"
              stroke="#A8B294" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 240 80 Q 280 160 320 220 T 420 380"
              stroke="#6F8060" strokeWidth="2.5" />
      </g>

      {/* Trail head markers */}
      <g>
        <circle cx="80" cy="380" r="4" fill="#2C2C2C" />
        <circle cx="460" cy="140" r="4" fill="#2C2C2C" />
        <circle cx="100" cy="200" r="4" fill="#2C2C2C" />
        <circle cx="460" cy="320" r="4" fill="#2C2C2C" />
        <circle cx="240" cy="80" r="4" fill="#2C2C2C" />
        <circle cx="420" cy="380" r="4" fill="#2C2C2C" />
      </g>

      {/* Map label */}
      <text x="56" y="64" fill="#2C2C2C" fontSize="10" letterSpacing="2" fontWeight="500">
        WANDR.CH · SWISS TRAILS
      </text>
      <text x="56" y="408" fill="#666666" fontSize="10">
        OpenStreetMap · SBB transit data
      </text>

      {/* Elevation profile card (top right) */}
      <g>
        <rect x="565" y="40" width="200" height="100" fill="#FAF8F3" stroke="#D0D0D0" />
        <text x="578" y="62" fill="#666666" fontSize="9" letterSpacing="1.5">ELEVATION</text>
        <text x="578" y="78" fill="#2C2C2C" fontSize="13" fontWeight="600">+842 m</text>
        <path d="M 578 122 L 600 112 L 622 100 L 644 88 L 666 82 L 688 92 L 710 102 L 732 96 L 754 108"
              fill="none" stroke="#2C2C2C" strokeWidth="1.5" />
        <path d="M 578 122 L 600 112 L 622 100 L 644 88 L 666 82 L 688 92 L 710 102 L 732 96 L 754 108 L 754 130 L 578 130 Z"
              fill="#2C2C2C" opacity="0.06" />
      </g>

      {/* Filter card (bottom right) */}
      <g>
        <rect x="565" y="160" width="200" height="260" fill="#FAF8F3" stroke="#D0D0D0" />
        <text x="578" y="184" fill="#666666" fontSize="9" letterSpacing="1.5">FIND A HIKE</text>

        <text x="578" y="212" fill="#666666" fontSize="9">DIFFICULTY</text>
        <rect x="578" y="220" width="174" height="26" fill="none" stroke="#D0D0D0" />
        <text x="588" y="238" fill="#2C2C2C" fontSize="11">Moderate</text>

        <text x="578" y="266" fill="#666666" fontSize="9">DISTANCE</text>
        <rect x="578" y="274" width="174" height="26" fill="none" stroke="#D0D0D0" />
        <text x="588" y="292" fill="#2C2C2C" fontSize="11">8 – 14 km</text>

        <text x="578" y="320" fill="#666666" fontSize="9">DURATION</text>
        <rect x="578" y="328" width="174" height="26" fill="none" stroke="#D0D0D0" />
        <text x="588" y="346" fill="#2C2C2C" fontSize="11">Half day</text>

        <rect x="578" y="376" width="174" height="30" fill="#2C2C2C" />
        <text x="665" y="396" fill="#FAF8F3" fontSize="11" textAnchor="middle" letterSpacing="1.2">SEARCH</text>
      </g>
    </svg>
  );
}
