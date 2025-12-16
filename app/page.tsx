import Hero from "./components/hero";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">

     

      {/* ===== Page Content ===== */}
      <div className="relative z-10">
        <Hero />
        <Stacks />
        <Projects />
        <About />
        <Contact />
      </div>

    </main>
  );
}
