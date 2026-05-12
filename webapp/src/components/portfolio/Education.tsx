import FadeIn from "./FadeIn";

interface EducationItem {
  type: "degree" | "cert";
  institution: string;
  credential: string;
  date: string;
  location?: string;
  note?: string;
  logo: string;
}

const items: EducationItem[] = [
  {
    type: "degree",
    institution: "[Insert your specific degree and university here]",
    credential: "[Degree] in [Field] — [University Name]",
    date: "[Year]",
    location: "Zurich, CH",
    note: "Update this entry with your exact degree and university.",
    logo: "/placeholder.svg",
  },
  {
    type: "cert",
    institution: "Microsoft",
    credential: "Professional Certificate in Generative AI for Data Analysis",
    date: "Mar 2026",
    logo: "/logo-microsoft.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
            05 — Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-16">
            Academic & Certifications
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-black/10">
                <div className="md:col-span-2 flex items-start">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="h-8 object-contain"
                  />
                </div>

                <div className="md:col-span-7">
                  <h3 className="text-base font-medium text-black mb-1">
                    {item.credential}
                  </h3>
                  <p className="text-sm text-black/50 font-light">
                    {item.institution}
                  </p>
                  {item.location !== undefined ? (
                    <p className="text-xs text-black/30 mt-1">
                      {item.location}
                    </p>
                  ) : null}
                  {item.note !== undefined ? (
                    <p className="text-xs text-black/40 mt-2 italic">
                      {item.note}
                    </p>
                  ) : null}
                </div>

                <div className="md:col-span-3 md:text-right">
                  <p className="text-xs uppercase tracking-[0.1em] text-black/40">
                    {item.date}
                  </p>
                  <p className="text-xs uppercase tracking-[0.1em] text-black/25 mt-1">
                    {item.type === "cert" ? "Certificate" : "Degree"}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
