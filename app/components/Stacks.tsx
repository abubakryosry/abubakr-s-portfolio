import type { ReactNode } from "react";
import "./../stacks.css";

type Skill = {
  name: string;
  icon: ReactNode;
};

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFigma,
} from "react-icons/si";

type Category = {
  title: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Languages & Styling",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-3xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-3xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-3xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-3xl" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-3xl" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-3xl" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact className="text-3xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-3xl" /> },
      { name: "Redux", icon: <SiRedux className="text-3xl" /> },
    ],
  },
  {
    title: "Tools & Ecosystem",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-3xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-3xl" /> },
      { name: "Figma", icon: <SiFigma className="text-3xl" /> },
    ],
  },
];

export default function FrontendTechnologies() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black via-black to-[#1DB954] px-6 py-16 text-white">
      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <header className="mb-12 text-center lg:text-left">
          
          <h2 className="flex items-center gap-3 text-xl lg:text-4xl font-bold">
            <span className="p-2 rounded-full bg-[#1DB954]/20 text-[#1DB954]">
              <FaCode size={22} />
            </span>
            Frontend Technologies
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Top skills I use in real projects
          </p>
        </header>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <section key={category.title}>
              <h3 className="mb-4 text-md lg:text-xl font-semibold">{category.title}</h3>

              <div className="gap-4 grid grid-cols-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    tabIndex={0}
                    role="button"
                    className="liquid-card relative w-32 h-32 rounded-2xl flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                  >
                    {skill.icon}

                    <span className="mt-3 text-sm font-medium">
                      {skill.name}
                    </span>

                    {/* Glass highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-30" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
