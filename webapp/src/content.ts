/* ============================================================
   SITE CONTENT — Edit text here. No code changes needed.
   Every piece of text on the site lives in this file.
   ============================================================ */

export const content = {
  // -----------------------------
  // META (browser tab + share preview)
  // -----------------------------
  meta: {
    title: "Giulio Giuffrida — Operations Data Analyst",
    description:
      "Portfolio of Giulio Giuffrida — Operations Data Analyst building AI and analytics systems in automotive and clean tech.",
  },

  // -----------------------------
  // NAV (top bar)
  // -----------------------------
  nav: {
    brand: "Giulio Giuffrida",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },

  // -----------------------------
  // HERO (top of page)
  // -----------------------------
  hero: {
    name: "Giulio Giuffrida",
    subtitle: "Operations Data Analyst · Zurich",
    photo: "/giulio.png",
    photoAlt: "Giulio Giuffrida",
    experienceLabel: "Experience & Education",
    logos: [
      {
        src: "/logo-climeworks.png",
        alt: "Climeworks",
        descriptor: "Operations and Plant Process analytics with Agentic AI, Databricks, Power BI",
      },
      {
        src: "/logo-toyota.png",
        alt: "Toyota",
        descriptor: "Production planning and supply chain optimization",
      },
      {
        src: "/logo-rug.svg",
        alt: "University of Groningen",
        descriptor: "MSc Supply Chain · BSc International Business",
      },
      {
        src: "/logo-microsoft.png",
        alt: "Microsoft",
        descriptor: "Professional Certificate · Generative AI for Data Analysis",
      },
    ],
  },

  // -----------------------------
  // ABOUT (band below hero)
  // -----------------------------
  about: {
    label: "About",
    body: "I'm an Operations Data Analyst with 5 years of experience in Operations and Analytics within the automotive and clean energy sectors. Originally from Siracusa, Italy, I've lived across Luxembourg, the Netherlands, Mexico, Belgium, and Switzerland, with a Bachelor in Business (semester abroad in Mexico) and a Master in Supply Chain Management. I combine hands-on operations ownership, having managed production planning for Toyota Yaris, Aygo X, and Climeworks DAC systems, with strong data engineering and GenAI skills. Outside of work, I'm drawn to AI implementations, hiking, sports, and finance, and I tend to approach problems with a focus on organization, clarity, and the big picture.",
  },

  // -----------------------------
  // PROJECTS (selected work)
  // -----------------------------
  projects: {
    label: "Selected Work",
    heading: "Five samples of my work across AI, data, and operations.",
    note: "Note: numbers, names, and screenshots shown are illustrative, exact figures and identifying details are omitted due to confidentiality.",
    items: [
      {
        num: "01",
        title: "Wandr.ch",
        link: "https://www.wandr.ch",
        description:
          "A Swiss hiking discovery app built from scratch. Interactive maps, elevation profiles, real-time public-transport planning to trailheads, and AI-assisted hike search.",
        stack: "React · Tailwind · MapLibre · Recharts · Bun/Hono · SQLite · OSM · SBB",
      },
      {
        num: "02",
        title: "Multi-Agent AI System for Operational Monitoring",
        description:
          "Designing a multi-agent system that orchestrates specialized agents covering downtime, run hours, availability, and performance. Agents communicate through a central orchestrator and generate automated alerts and insights across the equipment fleet.",
        stack: "Python · Copilot Studio · Databricks",
      },
      {
        num: "03",
        title: "AI-Assisted Failure Detection & Root Cause Analysis",
        description:
          "End-to-end pipeline combining sensor data, event logs, and AI classification to detect and categorize machine failures. What used to take engineers days of manual log review now surfaces structured, searchable results within hours.",
        stack: "Databricks · Python · Azure OpenAI · Power BI",
      },
      {
        num: "04",
        title: "Vehicle Launch Coordination — Toyota Aygo X",
        description:
          "Led the full Start of Production for the Toyota Aygo X, coordinating 10+ teams across suppliers, logistics, and manufacturing. Managed supplier ramp-up, cross-functional milestones, and production constraints to deliver an on-time launch.",
        stack: "Production planning · Supply chain · Cross-functional coordination",
      },
      {
        num: "05",
        title: "Demand-Driven Inventory Optimization",
        description:
          "A Python tool that computes optimal parts order quantities from safety stock, lead times, and demand forecasts. Improved parts availability while reducing excess inventory across multiple production lines.",
        stack: "Python · Inventory Management · Demand forecasting",
      },
    ],
  },

  // -----------------------------
  // SKILLS
  // -----------------------------
  skills: {
    label: "Skills",
    heading: "Skills across AI, data, and operations.",
    columns: [
      {
        title: "AI & Machine Learning",
        items: [
          "Azure OpenAI",
          "LangChain",
          "AI Agents",
          "Claude Code",
          "Prompt Engineering",
          "Databricks AI Functions",
          "LLM Integration",
          "Sensor Data AI Processing",
          "Copilot Studio",
          "Generative AI for Data Analysis",
        ],
      },
      {
        title: "Technical Stack",
        items: [
          "Databricks",
          "Python",
          "SQL",
          "Power BI",
          "DAX",
          "Microsoft Fabric",
          "Power Automate",
          "Power Apps",
          "SAP",
          "Appsmith",
          "Excel",
        ],
      },
      {
        title: "Operations & Supply Chain",
        items: [
          "Production Planning",
          "Inventory Optimization",
          "Demand Forecasting",
          "Capacity Planning",
          "S&OP",
          "Lean Manufacturing",
          "Root Cause Analysis",
          "KPI Reporting",
          "Kaizen",
          "JIT",
          "ERP / MRP",
          "Process Improvement",
          "Financial Reporting",
        ],
      },
    ],
    languagesLabel: "Languages",
    languages: [
      { lang: "English", level: "C2" },
      { lang: "Italian", level: "C2" },
      { lang: "Spanish", level: "C1" },
      { lang: "German", level: "A2" },
    ],
  },

  // -----------------------------
  // CONTACT
  // -----------------------------
  contact: {
    label: "Contact",
    heading: "Open to conversations on operations, data, and AI.",
    body: "Based in Zurich with a Swiss B permit. Reach out by email or LinkedIn.",
    links: [
      { label: "Email", value: "g.giuffrida.nl@gmail.com", href: "mailto:g.giuffrida.nl@gmail.com", arrow: "→" },
      { label: "Phone", value: "+41 76 270 53 62", href: "tel:+41762705362", arrow: "→" },
      { label: "LinkedIn", value: "in/giulio-giuffrida", href: "https://www.linkedin.com/", arrow: "↗" },
    ],
    footerLeft: "© {year} Giulio Giuffrida",
    footerRight: "Zurich, Switzerland",
  },
};
