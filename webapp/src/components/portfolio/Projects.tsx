import FadeIn from "./FadeIn";
import WandrVisual from "./visuals/WandrVisual";
import AgentGraphVisual from "./visuals/AgentGraphVisual";
import PipelineVisual from "./visuals/PipelineVisual";
import AygoVisual from "./visuals/AygoVisual";
import InventoryVisual from "./visuals/InventoryVisual";
import { content } from "@/content";
import { ReactNode } from "react";

const visuals: Record<string, ReactNode> = {
  "01": <WandrVisual />,
  "02": <AgentGraphVisual />,
  "03": <PipelineVisual />,
  "04": <AygoVisual />,
  "05": <InventoryVisual />,
};

export default function Projects() {
  const { projects } = content;
  return (
    <section id="work" className="py-20 md:py-32 border-t border-line/70">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 md:mb-24 max-w-2xl">
            <p className="label-caps mb-4">{projects.label}</p>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-ink leading-[1.2] tracking-tight">
              {projects.heading}
            </h2>
            {"note" in projects && projects.note ? (
              <p className="mt-6 text-[12px] leading-[1.7] text-ink-soft italic border-l-2 border-line pl-4">
                {projects.note as string}
              </p>
            ) : null}
          </div>
        </FadeIn>

        <div className="space-y-24 md:space-y-36">
          {projects.items.map((p) => (
            <FadeIn key={p.num}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28 space-y-5">
                    <p className="label-caps">Project · {p.num}</p>
                    <h3 className="text-[26px] md:text-[28px] font-semibold text-ink leading-[1.25] tracking-tight">
                      {"link" in p && p.link ? (
                        <a
                          href={p.link as string}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline underline-offset-4 decoration-2 inline-flex items-center gap-2"
                        >
                          {p.title}
                          <span className="text-ink-soft text-[18px] font-normal">↗</span>
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-ink-soft">{p.description}</p>
                    {p.stack ? (
                      <p className="text-[12px] text-ink-soft pt-2 border-t border-line/70 leading-relaxed">
                        {p.stack}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="lg:col-span-8">{visuals[p.num]}</div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
