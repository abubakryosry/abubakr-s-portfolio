"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative p-8 bg-[#121212] text-white flex flex-col justify-center lg:justify-start items-center lg:items-start">
      <div className="mx-auto max-w-[90%]">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 mt-8">About Me</h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Background */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg text-left hover:scale-103 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-3 text-[#1DB954] ">
              Background
            </h3>
            <p className="text-[#B3B3B3]">
              I’m a frontend developer with a passion for clean design and
              smooth user experiences. My journey began with creative projects,
              blending aesthetics and tech.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg text-left hover:scale-103 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-3 text-[#1DB954]">
              Experience
            </h3>
            <p className="text-[#B3B3B3]">
              Frontend Developer with +3 years of experience creating fast,
              responsive web apps using React.js, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Currently */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg text-left hover:scale-103 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-3 text-[#1DB954]">
              Currently
            </h3>
            <p className="text-[#B3B3B3]">
              Developing modern web projects with Next.js, Redux, and Strapi,
              while open to freelance collaborations and full-time
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
