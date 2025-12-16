import "./../stacks.css";
import { FaStar } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
function projects() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black via-black to-[#1DB954] px-6 py-16 text-white">
      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <header className="mb-12 text-center lg:text-left">
          <h2 className="flex items-center gap-3 text-4xl font-bold">
            <span className="p-2 rounded-full bg-[#1DB954]/20 text-[#1DB954]">
              <FaStar size={22} />
            </span>
            Featured Work
          </h2>
        </header>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Example */}
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default projects;
