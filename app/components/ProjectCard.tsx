import Image from "next/image";
import { FaGithub } from "react-icons/fa";

function ProjectCard() {
  type Project = {
    projectName: string;
    siteName: string;
    imgSrc: string;
    githubUrl: string;
    stack: string[];
  };

  const projects: Project[] = [
    {
      projectName: "Eazy Cyper Security",
      siteName: "eazycybersecurity.sa",
      imgSrc: "/projects/1.png",
      githubUrl: "https://github.com/abubakryosry/eazyCyperSecurity",
      stack: ["Next.js", "TypeScript", "Tailwind", "Strapi"],
    },
    {
      projectName: "Fresh Cart",
      siteName: "freshcart.ae",
      imgSrc: "/projects/2.png",
      githubUrl: "https://github.com/abubakryosry/freshCart",
      stack: ["React.js", "JavaScript", "Redux", "Tailwind"],
    },
    {
      projectName: "Movie Hub",
      siteName: "moviehub.online",
      imgSrc: "/projects/3.png",
      githubUrl: "https://github.com/abubakryosry/Movie",
      stack: ["JavaScript", "HTML", "Tailwind"],
    },
    {
      projectName: "Devfolio",
      siteName: "devfolio.com",
      imgSrc: "/projects/4.png",
      githubUrl: "https://github.com/abubakryosry/Morgan-Freeman",
      stack: ["HTML", "CSS", "Bootstrap", "Responsive"],
    },
    {
      projectName: "ERP Dashy",
      siteName: "dashyerp.com",
      imgSrc: "/projects/5.png",
      githubUrl: "https://github.com/abubakryosry/DashERP",
      stack: ["React.js", "React Router", "Tailwind"],
    },
    {
      projectName: "DBR Checker",
      siteName: "dbrchecker.com",
      imgSrc: "/projects/6.png",
      githubUrl: "https://github.com/abubakryosry/dbrchecking",
      stack: ["React.js", "TypeScript", "Mobile Friendly"],
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <div key={project.projectName} className="group max-w-sm">
          <div className="liquid-button overflow-hidden bg-neutral-primary-soft border border-default rounded-xl shadow-xs transition-all duration-300">
            {/* Browser Mockup */}
            <div className="overflow-hidden bg-neutral-900 rounded-t-xl">
              {/* Mac Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black/90 border-b border-neutral-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />

                <div className="ml-4 text-xs text-neutral-400 bg-neutral-700 px-3 py-1 rounded-md">
                  {project.siteName}
                </div>
              </div>

              {/* Website Image */}
              <div className="overflow-hidden aspect-video">
                <Image
                  width={400}
                  height={225}
                  src={project.imgSrc}
                  alt={project.projectName}
                  className="w-full h-full  transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              {/* Title + GitHub */}
              <div className="flex items-center justify-between gap-3">
                <h5 className="text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#1DB954]">
                  {project.projectName}
                </h5>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#1DB954] transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={22} />
                </a>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap justify-start gap-2">
                {project.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full border border-default text-neutral-300 bg-neutral-primary-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
