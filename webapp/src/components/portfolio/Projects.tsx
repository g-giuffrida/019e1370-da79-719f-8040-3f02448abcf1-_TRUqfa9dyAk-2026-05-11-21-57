import FadeIn from "./FadeIn";
import WandrVisual from "./visuals/WandrVisual";
import AgentGraphVisual from "./visuals/AgentGraphVisual";
import PipelineVisual from "./visuals/PipelineVisual";
import AygoVisual from "./visuals/AygoVisual";
import InventoryVisual from "./visuals/InventoryVisual";
import { ReactNode } from "react";

interface Project {
  num: string;
  title: string;
  description: string;
  stack?: string;
  visual: ReactNode;
}

const projects: Project[] = [
  {
    num: "01",
    title: "Wandr.ch",
    description:
      "A Swiss hiking discovery app built from scratch. Interactive maps, elevation profiles, real-time public-transport planning to trailheads, and AI-assisted hike search.",
    stack: "React · Tailwind · MapLibre · Recharts · Bun/Hono · SQLite · OSM · SBB",
    visual: <WandrVisual />,
  },
  {
    num: "02",
    title: "Multi-Agent AI System for Operational Monitoring",
    description:
      "A multi-agent system that orchestrates specialized agents covering downtime, run hours, availability, and performance. Agents communicate through a central orchestrator and generate automated alerts across the equipment fleet.",
    stack: "Python · Azure OpenAI · Databricks",
    visual: <AgentGraphVisual />,
  },
  {
    num: "03",
    title: "AI-Assisted Failure Detection &amp; Root Cause Analysis",
    description:
      "End-to-end pipeline combining sensor data, event logs, and AI classification to detect and categorize machine failures. What used to take engineers days of manual log review now surfaces structured, searchable results within hours.",
    stack: "Databricks · Python · Azure OpenAI · Power BI",
    visual: <PipelineVisual />,
  },
  {
    num: "04",
    title: "Vehicle Launch Coordination — Toyota Aygo X",
    description:
      "Led the full Start of Production for the Toyota Aygo X, coordinating 10+ teams across suppliers, logistics, and manufacturing. Managed supplier ramp-up, cross-functional milestones, and production constraints to deliver an on-time launch.",
    stack: "Production planning · Supply chain · Cross-functional coordination",
    visual: <AygoVisual />,
  },
  {
    num: "05",
    title: "Demand-Driven Inventory Optimization",
    description:
      "A Python tool that computes optimal parts order quantities from safety stock, lead times, and demand forecasts. Improved parts availability while reducing excess inventory across multiple production lines.",
    stack: "Python · SAP · Demand forecasting",
    visual: <InventoryVisual />,
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 md:mb-24 max-w-2xl">
            <p className="label-caps mb-4">Selected Work</p>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-ink leading-[1.2] tracking-tight">
              Five projects across operations, data, and AI.
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p) => (
            <FadeIn key={p.num}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28 space-y-5">
                    <p className="label-caps">Project · {p.num}</p>
                    <h3
                      className="text-[26px] md:text-[28px] font-semibold text-ink leading-[1.25] tracking-tight"
                      dangerouslySetInnerHTML={{ __html: p.title }}
                    />
                    <p className="text-[15px] leading-[1.8] text-ink-soft">{p.description}</p>
                    {p.stack ? (
                      <p className="text-[12px] text-ink-soft pt-2 border-t border-line/70 leading-relaxed">
                        {p.stack}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="border border-line bg-cream p-4 md:p-6">
                    {p.visual}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
