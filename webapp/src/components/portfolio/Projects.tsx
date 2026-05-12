import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import FadeIn from "./FadeIn";

const downtimeByReason = [
  { reason: "Mechanical", hours: 34 },
  { reason: "Electrical", hours: 21 },
  { reason: "Software", hours: 15 },
  { reason: "Maintenance", hours: 28 },
  { reason: "External", hours: 9 },
];

const failureComponents = [
  { name: "Valve", value: 32 },
  { name: "Sensor", value: 24 },
  { name: "Motor", value: 19 },
  { name: "Controller", value: 14 },
  { name: "Other", value: 11 },
];

const PIE_COLORS = ["#000000", "#555555", "#888888", "#AAAAAA", "#CCCCCC"];

const downtimeKPIs = [
  { label: "Availability", value: "87.3%" },
  { label: "MTTR", value: "2.4h" },
  { label: "Incidents / Month", value: "14" },
];

const inventoryByAge = [
  { bucket: "<30d", LineA: 320, LineB: 280, LineC: 410 },
  { bucket: "30–60d", LineA: 180, LineB: 130, LineC: 220 },
  { bucket: "61–90d", LineA: 95, LineB: 75, LineC: 110 },
  { bucket: ">90d", LineA: 40, LineB: 30, LineC: 55 },
];

const agedTrend = [
  { month: "Oct", pct: 38 },
  { month: "Nov", pct: 35 },
  { month: "Dec", pct: 32 },
  { month: "Jan", pct: 29 },
  { month: "Feb", pct: 26 },
  { month: "Mar", pct: 22 },
  { month: "Apr", pct: 18 },
  { month: "May", pct: 14 },
];

const inventoryKPIs = [
  { label: "Total Stock Units", value: "6,240" },
  { label: "Aged >60d", value: "22.5%" },
  { label: "Cost of Ageing", value: "$1.2M" },
];

const productionVsPlan = [
  { week: "W1", Actual: 88, Plan: 90 },
  { week: "W2", Actual: 92, Plan: 90 },
  { week: "W3", Actual: 85, Plan: 90 },
  { week: "W4", Actual: 94, Plan: 92 },
  { week: "W5", Actual: 89, Plan: 92 },
  { week: "W6", Actual: 96, Plan: 92 },
  { week: "W7", Actual: 91, Plan: 94 },
  { week: "W8", Actual: 97, Plan: 94 },
];

const wipStages = [
  { stage: "Design", pct: 15, color: "#000000" },
  { stage: "Assembly", pct: 35, color: "#444444" },
  { stage: "Testing", pct: 28, color: "#888888" },
  { stage: "Done", pct: 22, color: "#CCCCCC" },
];

const productionKPIs = [
  { label: "On-Time Delivery", value: "94.1%" },
  { label: "WIP Units", value: "312" },
  { label: "Avg Cycle Time", value: "3.8d" },
];

const tooltipStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e5e5",
  borderRadius: "0px",
  color: "#000000",
  fontSize: "11px",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const axisStyle = { fill: "#999999", fontSize: 10, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" };

function KPIRow({ kpis }: { kpis: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {kpis.map((k) => (
        <div key={k.label} className="py-3 border-b border-black/10">
          <div className="text-lg font-bold text-black">{k.value}</div>
          <div className="text-xs text-black/40 mt-0.5 uppercase tracking-[0.1em]">{k.label}</div>
        </div>
      ))}
    </div>
  );
}

function ProblemSolution({ problem, solution }: { problem: string; solution: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm">
      <div className="py-3 border-l-2 border-black/20 pl-4">
        <div className="text-xs uppercase tracking-[0.15em] text-black/40 mb-2">The Problem</div>
        <p className="text-black/50 leading-relaxed font-light">{problem}</p>
      </div>
      <div className="py-3 border-l-2 border-black pl-4">
        <div className="text-xs uppercase tracking-[0.15em] text-black/40 mb-2">The Solution</div>
        <p className="text-black/50 leading-relaxed font-light">{solution}</p>
      </div>
    </div>
  );
}

function DowntimeDashboard() {
  return (
    <div className="py-10 border-b border-black/10">
      <div className="flex items-start justify-between gap-2 mb-6">
        <div>
          <h3 className="text-base font-medium text-black mb-1">Machine Downtime Analysis</h3>
          <p className="text-xs text-black/40">Downtime by failure reason & component breakdown</p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.15em] text-black/30 border border-black/10 px-2 py-1">
          Illustrative data
        </span>
      </div>

      <ProblemSolution
        problem="Operations teams had no structured way to track machine failures — root cause identification relied on manual notes and tribal knowledge."
        solution="Built an end-to-end automated reporting system (Databricks → Python/SQL → Power BI) that captures failure reason, component, and duration in real time across all production lines."
      />

      <KPIRow kpis={downtimeKPIs} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="sm:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-3">Hours by Failure Reason</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={downtimeByReason} margin={{ top: 0, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="reason" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
              <Bar dataKey="hours" fill="#000000" radius={[1, 1, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-3">Top Components</p>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={failureComponents} cx="50%" cy="50%" innerRadius={35} outerRadius={60} paddingAngle={2} dataKey="value">
                {failureComponents.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
            {failureComponents.map((c, i) => (
              <span key={c.name} className="flex items-center gap-1.5 text-[10px] text-black/40">
                <span className="w-2 h-2 inline-block" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InventoryDashboard() {
  return (
    <div className="py-10 border-b border-black/10">
      <div className="flex items-start justify-between gap-2 mb-6">
        <div>
          <h3 className="text-base font-medium text-black mb-1">Inventory Ageing Dashboard</h3>
          <p className="text-xs text-black/40">Stock by age bucket across product lines + ageing trend</p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.15em] text-black/30 border border-black/10 px-2 py-1">
          Illustrative data
        </span>
      </div>

      <ProblemSolution
        problem="Obsolete inventory was growing undetected because production, sales, and logistics data lived in separate systems with no unified view."
        solution="Built a cross-functional Power BI dashboard combining all three data sources for the first time — resulting in a 26% reduction in obsolete inventory."
      />

      <KPIRow kpis={inventoryKPIs} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-3">Units by Age Bucket (3 Lines)</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={inventoryByAge} margin={{ top: 0, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="bucket" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
              <Bar dataKey="LineA" fill="#000000" radius={[1, 1, 0, 0]} name="Line A" />
              <Bar dataKey="LineB" fill="#888888" radius={[1, 1, 0, 0]} name="Line B" />
              <Bar dataKey="LineC" fill="#CCCCCC" radius={[1, 1, 0, 0]} name="Line C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-3">Aged &gt;60d % — 8 Month Trend</p>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={agedTrend} margin={{ top: 0, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} unit="%" />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="pct" stroke="#000000" strokeWidth={2} dot={false} name="Aged %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function ProductionDashboard() {
  return (
    <div className="py-10 border-b border-black/10">
      <div className="flex items-start justify-between gap-2 mb-6">
        <div>
          <h3 className="text-base font-medium text-black mb-1">Production Planning & WIP</h3>
          <p className="text-xs text-black/40">Weekly output vs plan + WIP stage breakdown</p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.15em] text-black/30 border border-black/10 px-2 py-1">
          Illustrative data
        </span>
      </div>

      <ProblemSolution
        problem="No visibility into live production status: planners had to manually chase updates from the shopfloor, leading to reactive decisions."
        solution="Designed a manufacturing tracking process from scratch — from shopfloor data capture to a live dashboard showing production status, WIP, delays and bottlenecks."
      />

      <KPIRow kpis={productionKPIs} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-3">Production vs Plan (8 Weeks)</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={productionVsPlan} margin={{ top: 0, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="week" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
              <Legend wrapperStyle={{ fontSize: 10, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#999" }} />
              <Bar dataKey="Actual" fill="#000000" radius={[1, 1, 0, 0]} />
              <Bar dataKey="Plan" fill="#CCCCCC" radius={[1, 1, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-3">WIP Stage Breakdown</p>
          <div className="flex h-6 overflow-hidden mt-4">
            {wipStages.map((s) => (
              <div
                key={s.stage}
                className="flex items-center justify-center text-[9px] font-medium"
                style={{
                  width: `${s.pct}%`,
                  background: s.color,
                  color: s.pct > 20 ? (s.color === "#000000" || s.color === "#444444" ? "#fff" : "#000") : "transparent",
                }}
                title={`${s.stage}: ${s.pct}%`}
              >
                {s.pct > 12 ? s.stage : ""}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
            {wipStages.map((s) => (
              <span key={s.stage} className="flex items-center gap-1.5 text-[10px] text-black/40">
                <span className="w-2 h-2 inline-block" style={{ background: s.color }} />
                {s.stage} ({s.pct}%)
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ title, tag, problem, solution, highlights }: {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  highlights: string[];
}) {
  return (
    <div className="py-10 border-b border-black/10">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-black/40 mb-2">{tag}</p>
          <h3 className="text-lg font-medium text-black">{title}</h3>
        </div>
        <span className="text-[10px] uppercase tracking-[0.15em] text-black/30 border border-black/10 px-2 py-1 shrink-0 ml-4">
          Case Study
        </span>
      </div>
      <ProblemSolution problem={problem} solution={solution} />
      <div className="flex flex-wrap gap-2 mt-4">
        {highlights.map((h) => (
          <span key={h} className="text-xs px-3 py-1.5 border border-black/10 text-black/50">
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            03 — Work Samples
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Interactive Dashboards
          </h2>
          <p className="text-sm text-black/40 max-w-xl mb-4 font-light">
            Representative samples of the analytics tools I build. All data is anonymised and fictional — for illustration only.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <DowntimeDashboard />
        </FadeIn>
        <FadeIn delay={150}>
          <InventoryDashboard />
        </FadeIn>
        <FadeIn delay={200}>
          <ProductionDashboard />
        </FadeIn>

        <FadeIn delay={250}>
          <CaseStudyCard
            title="Start of Production Planning — Toyota Aygo X"
            tag="Operations · Cross-functional"
            problem="Launching a new vehicle model requires coordinating suppliers, logistics providers, manufacturing plants and commercial teams simultaneously — any misalignment causes production delays."
            solution="Led the full SOP planning process for Aygo X across 10+ stakeholder teams: built the launch timeline, coordinated supplier ramp-up, aligned logistics flows and plant readiness."
            highlights={["10+ stakeholder teams", "Supplier ramp-up", "Logistics flow design", "Plant readiness"]}
          />
        </FadeIn>

        <FadeIn delay={300}>
          <CaseStudyCard
            title="EV Bundle Lifecycle Financial Model"
            tag="Financial Modelling · Strategy"
            problem="The EV planning team needed to evaluate the financial impact of introducing different EV bundle packages — but had no structured way to compare scenarios."
            solution="Built a vehicle lifetime value and lifecycle profitability model in Python/Excel that evaluated product introduction scenarios. Used directly by senior leadership for decision-making."
            highlights={["Lifetime value modelling", "Scenario analysis", "Python + Excel", "Senior leadership input"]}
          />
        </FadeIn>
      </div>
    </section>
  );
}
