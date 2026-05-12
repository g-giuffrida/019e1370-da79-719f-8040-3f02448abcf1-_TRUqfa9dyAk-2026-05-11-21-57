import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";

export default function Index() {
  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
