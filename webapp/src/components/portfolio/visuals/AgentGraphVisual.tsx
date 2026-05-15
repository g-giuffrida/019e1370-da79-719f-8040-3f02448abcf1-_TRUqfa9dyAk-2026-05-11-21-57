export default function AgentGraphVisual() {
  const agents = [
    { name: "Downtime", status: "active", task: "Investigating XY-04 thermal anomaly" },
    { name: "Run Hours", status: "idle", task: "Last sync 4 min ago" },
    { name: "Performance", status: "active", task: "Computing OEE for Plant 3" },
    { name: "Availability", status: "active", task: "Streaming uptime across 142 units" },
  ];

  const alerts = [
    { time: "09:42", severity: "Critical", body: "XY-04 · Thermal sensor failure · 2.3 hrs downtime" },
    { time: "08:15", severity: "Warning", body: "AB-12 · Run hours exceeded service interval" },
    { time: "07:01", severity: "Info", body: "Plant 2 · Availability up 3.1% week over week" },
  ];

  return (
    <div className="w-full bg-cream border border-line/60 font-sans"
         style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5 bg-cream-hover/60">
        <div className="flex items-center gap-2">
          <span className="block w-2.5 h-2.5 rounded-full bg-line" />
          <span className="block w-2.5 h-2.5 rounded-full bg-line" />
          <span className="block w-2.5 h-2.5 rounded-full bg-line" />
        </div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-ink-soft">
          Operations Console · Climeworks
        </p>
        <span className="text-[10px] text-ink-soft">v 0.4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
        {/* Left: orchestrator + agents */}
        <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-line">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] tracking-[0.18em] uppercase text-ink-soft">Orchestrator</p>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-ink opacity-40 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
              </span>
              <span className="text-[11px] text-ink">Live</span>
            </div>
          </div>

          {/* Big console node */}
          <div className="border border-ink p-4 mb-5">
            <p className="text-[11px] text-ink-soft mb-1">Active routing</p>
            <p className="text-[15px] text-ink font-semibold leading-tight mb-2">
              4 agents · 18 messages/min
            </p>
            <div className="h-1 bg-cream-hover overflow-hidden">
              <div className="h-full bg-ink" style={{ width: "62%" }} />
            </div>
          </div>

          <p className="text-[10px] tracking-[0.18em] uppercase text-ink-soft mb-3">Agents</p>
          <ul className="space-y-2">
            {agents.map((a) => (
              <li key={a.name} className="flex items-start gap-3 py-2 border-t border-line/70">
                <span
                  className={`mt-1.5 block w-1.5 h-1.5 rounded-full ${
                    a.status === "active" ? "bg-ink" : "bg-line"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-ink font-medium">{a.name} Agent</p>
                  <p className="text-[11px] text-ink-soft truncate">{a.task}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: alert feed */}
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] tracking-[0.18em] uppercase text-ink-soft">Alert Feed</p>
            <p className="text-[10px] text-ink-soft">Today · 14:08 CET</p>
          </div>

          <ul className="space-y-3">
            {alerts.map((al, i) => (
              <li key={i} className="border border-line p-3.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-ink-soft">
                    {al.severity}
                  </span>
                  <span className="text-[10px] text-ink-soft">{al.time}</span>
                </div>
                <p className="text-[13px] text-ink leading-snug">{al.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-line/70 grid grid-cols-3 gap-3">
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-ink-soft">Resolved</p>
              <p className="text-[18px] font-semibold text-ink">42</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-ink-soft">Open</p>
              <p className="text-[18px] font-semibold text-ink">3</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-ink-soft">Avg latency</p>
              <p className="text-[18px] font-semibold text-ink">11s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
