import FadeIn from "./FadeIn";
import DowntimeDashboard from "./visuals/DowntimeDashboard";
import InventoryChart from "./visuals/InventoryChart";
import AIAgentGraph from "./visuals/AIAgentGraph";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ProjectBase = {
  id: string;
  company: string;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
};

type ImageProject = ProjectBase & {
  visual: "image";
  imageUrl: string;
  imageAlt: string;
};

type ComponentProject = ProjectBase & {
  visual: "downtime" | "inventory" | "ai-graph";
};

type Project = ImageProject | ComponentProject;

const projects: Project[] = [
  {
    id: "01",
    company: "Personal Project",
    title: "Swiss Hiking App",
    problem:
      "Planning a hike in Switzerland means juggling multiple disconnected sources — SAC trail maps, weather forecasts, elevation data — none of which talk to each other.",
    solution:
      "Built a mobile app that combines SAC trail data, MeteoSwiss live forecasts, and GPX routing into a single interface. Includes offline map support and real-time alerts for trail closures and conditions.",
    tech: ["React Native", "Node.js", "MeteoSwiss API", "GPX", "SQLite"],
    visual: "image",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    imageAlt: "Swiss Alps hiking trail",
  },
  {
    id: "02",
    company: "Climeworks",
    title: "Multi-Agentic AI System",
    problem:
      "Engineers spent hours digging through sensor logs after failures — a slow, inconsistent process that delayed root cause resolution and impacted uptime.",
    solution:
      "Designed an orchestrated multi-agent pipeline: specialized AI agents process sensor data, classify failure types, generate structured reports, and fire alerts. Reduced analysis from days to hours.",
    tech: ["Python", "Azure OpenAI", "LangChain", "Databricks", "Power BI"],
    visual: "image",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGOXn85Pt0cmQ/article-cover_image-shrink_720_1280/B4DZZjsb1ZG8AI-/0/1745429326633?e=2147483647&v=beta&t=w-2Oewj5G-SebGMeVJWAq-J2ZPGAQ6QGFFyGrsmSF3Q",
    imageAlt: "Multi-agent AI orchestration illustration",
  },
  {
    id: "03",
    company: "Climeworks",
    title: "AI-Assisted Downtime Reporting",
    problem:
      "Machine failures across 50+ production units were logged inconsistently, making it impossible to spot patterns or report reliably on downtime causes and duration.",
    solution:
      "Built an end-to-end pipeline: sensor data + event logs → Databricks → AI model classifies failure by type, component, and root cause → live Power BI dashboard. Mean time to repair dropped 67%.",
    tech: ["Databricks", "Python", "SQL", "Power BI", "Power Automate"],
    visual: "downtime",
  },
  {
    id: "04",
    company: "Toyota",
    title: "Inventory Optimisation Tool",
    problem:
      "Aged inventory at Toyota Belgium logistics hubs was managed via manual spreadsheets, leaving €1.2M in tied-up stock with no systematic reorder logic or lead time visibility.",
    solution:
      "Built a Python tool that calculates optimal order quantities from safety stock parameters, supplier lead times, and real demand signals — replacing spreadsheets. Delivered 26% average reduction in aged stock.",
    tech: ["Python", "pandas", "Power BI", "SAP", "Excel"],
    visual: "image",
    imageUrl:
      "https://images.unsplash.com/photo-1434959299919-ab60908e4e47?w=800&q=80",
    imageAlt: "Warehouse inventory optimization",
  },
  {
    id: "05",
    company: "Toyota",
    title: "Aygo X Start of Production",
    problem:
      "Launching a new vehicle model requires aligning 10+ teams across suppliers, logistics hubs, and the plant under tight timelines and constantly shifting capacity constraints.",
    solution:
      "Led end-to-end SOP planning for Toyota Aygo X — coordinating supplier ramp-up, parts flow, and plant readiness from zero to first-unit-off-line. Delivered on time without production disruption.",
    tech: ["SAP", "S&OP", "Capacity Planning", "Cross-functional Coordination"],
    visual: "image",
    imageUrl:
      "https://data-cdn.euroncap.com/media/assessment-media/f60f165c-a59f-418b-a05c-bfa413115173/Toyota_Aygo-X_2022__2b50b6d5da202424_xl.webp",
    imageAlt: "Toyota Aygo X production launch",
  },
];

function ProjectVisual({ project, containerRef }: { project: Project; containerRef?: React.RefObject<HTMLDivElement> }) {
  if (project.visual === "image") {
    return (
      <img
        src={project.imageUrl}
        alt={project.imageAlt}
        className="w-full h-full object-cover rounded-[14px]"
        loading="lazy"
      />
    );
  }
  if (project.visual === "downtime") return <DowntimeDashboard />;
  if (project.visual === "inventory") return <InventoryChart />;
  return <AIAgentGraph />;
}

export default function Projects() {

  return (
    <section id="projects" className="bg-white py-24 border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-3">
            02 — Projects
          </p>
          <h2 className="text-3xl font-bold text-black mb-20 tracking-tight">
            Examples of My Work
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {projects.map((project, index) => {
            const { ref: visualRef, isVisible } = useScrollReveal();
            return (
            <FadeIn key={project.id} delay={index * 80}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 py-16 border-b border-black items-start">

                {/* Text side */}
                <div className="md:col-span-5 md:pr-12 mb-10 md:mb-0">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-black/30">
                      {project.id}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-black/30">·</span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-black/30">
                      {project.company}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-6 tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-black/30 mb-2">
                        Problem
                      </p>
                      <p className="text-sm text-black/60 leading-relaxed font-light">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-black/30 mb-2">
                        What I built
                      </p>
                      <p className="text-sm text-black/60 leading-relaxed font-light">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-[0.12em] text-black/40 border border-black/10 px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div
                  ref={visualRef}
                  className="md:col-span-7 bg-[#f5f5f5] rounded-[14px] overflow-hidden transition-all duration-1000 ease-out"
                  style={{
                    minHeight: "300px",
                    opacity: isVisible ? 1 : 0.5,
                    transform: isVisible ? "scale(1) translateY(0)" : "scale(0.92) translateY(30px)",
                  }}
                >
                  <div className="w-full h-full" style={{ aspectRatio: "16/10" }}>
                    <ProjectVisual project={project} />
                  </div>
                </div>

              </div>
            </FadeIn>
          );
          })}
        </div>
      </div>
    </section>
  );
}
