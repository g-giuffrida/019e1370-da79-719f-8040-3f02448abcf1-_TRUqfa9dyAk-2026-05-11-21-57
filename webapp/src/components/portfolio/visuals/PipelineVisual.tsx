export default function PipelineVisual() {
  const rawLog = [
    "2024-09-12 09:41:32  WARN  pump.coolant.p3   pressure=4.82bar (threshold 4.50)",
    "2024-09-12 09:41:48  INFO  sensor.therm.04   reading=92.4°C drift=+8.1%",
    "2024-09-12 09:42:10  ERROR pump.coolant.p3   flow_rate=0.0 L/min (expected 12)",
    "2024-09-12 09:42:11  ALERT system.cluster.7  unit_xy04 entering SAFE_STOP",
    "2024-09-12 09:42:14  INFO  ops.shift          notified engineer_id=e_2241",
    "2024-09-12 09:44:02  INFO  diag.run           cycle 442 aborted reason=THERMAL",
  ];

  const classified = [
    { type: "Thermal", component: "Coolant Pump", duration: "2.3 hrs", root: "Pressure threshold exceeded" },
    { type: "Mechanical", component: "Conveyor Belt", duration: "1.1 hrs", root: "Tension drift" },
    { type: "Electrical", component: "Drive Motor", duration: "0.4 hrs", root: "Voltage sag" },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
      {/* Raw log */}
      <div className="border border-line bg-cream flex flex-col">
        <div className="px-4 py-2.5 border-b border-line flex items-center justify-between">
          <p className="text-[10px] tracking-[0.18em] uppercase text-ink-soft">Raw event log</p>
          <p className="text-[10px] text-ink-soft">~14 GB / day</p>
        </div>
        <div className="p-3 flex-1" style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
          {rawLog.map((line, i) => (
            <p key={i} className="text-[10.5px] leading-[1.65] text-ink-soft truncate">
              {line}
            </p>
          ))}
          <p className="text-[10.5px] leading-[1.65] text-ink-soft/60">… 4,812 more lines</p>
        </div>
      </div>

      {/* Arrow with AI label */}
      <div className="flex md:flex-col items-center justify-center gap-3 py-3 md:py-0 md:px-2">
        <div className="text-[10px] tracking-[0.18em] uppercase text-ink-soft whitespace-nowrap order-2 md:order-1 md:[writing-mode:vertical-rl] md:rotate-180">
          AI classifier
        </div>
        <svg width="36" height="36" viewBox="0 0 36 36" className="order-1 md:order-2 rotate-90 md:rotate-0">
          <line x1="6" y1="18" x2="28" y2="18" stroke="#2C2C2C" strokeWidth="1.4" />
          <polyline points="22,12 28,18 22,24" fill="none" stroke="#2C2C2C" strokeWidth="1.4" />
        </svg>
      </div>

      {/* Classified table */}
      <div className="border border-line bg-cream flex flex-col">
        <div className="px-4 py-2.5 border-b border-line flex items-center justify-between">
          <p className="text-[10px] tracking-[0.18em] uppercase text-ink-soft">Classified failures</p>
          <p className="text-[10px] text-ink-soft">Searchable</p>
        </div>
        <div className="overflow-hidden">
          <div className="grid grid-cols-[1fr_1.2fr_0.7fr] text-[9.5px] tracking-[0.12em] uppercase text-ink-soft px-3 py-2 border-b border-line/70">
            <span>Type</span>
            <span>Component</span>
            <span className="text-right">Duration</span>
          </div>
          {classified.map((c, i) => (
            <div key={i} className="px-3 py-2.5 border-b border-line/50 last:border-b-0">
              <div className="grid grid-cols-[1fr_1.2fr_0.7fr] items-center">
                <span className="text-[12px] text-ink font-semibold">{c.type}</span>
                <span className="text-[12px] text-ink">{c.component}</span>
                <span className="text-[12px] text-ink text-right tabular-nums">{c.duration}</span>
              </div>
              <p className="text-[11px] text-ink-soft mt-1">{c.root}</p>
            </div>
          ))}
        </div>
        <div className="px-3 py-2 border-t border-line/70 mt-auto">
          <p className="text-[10px] text-ink-soft">
            <span className="text-ink font-semibold">Days → hours</span>  ·  Root-cause time reduced ~85%
          </p>
        </div>
      </div>
    </div>
  );
}
