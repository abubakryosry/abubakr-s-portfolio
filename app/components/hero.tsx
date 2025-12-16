"use client";
import Image from "next/image";
import { FaHeadphonesAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./../stacks.css";


function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-20 overflow-hidden">
      
      <div
        aria-hidden="true"
        className="absolute w-[45%] h-[28rem] bg-[#1DB954]/30 rounded-full blur-3xl opacity-85"
      />

      {/* Main content */}
      <div className="z-10 flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl">
        {/* Image container */}
        <div className="relative rounded-md overflow-hidden w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-8 lg:mb-0 flex-shrink-0">
          <Image
            src="/Hero-img.png"
            alt="Portrait of Abubakr Yosry"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-10">
          <div className="flex items-center text-2xl sm:text-3xl space-x-3 sm:space-x-4 text-[#1DB954] mb-4 font-bold">
            <FaHeadphonesAlt aria-hidden="true" />
            <h2>Now Playing</h2>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-2">
            Abubakr Yosry
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Frontend Developer | React.js | Next.js
          </p>
          <p className="text-gray-400 text-base sm:text-lg mt-2">
            Crafting Clean Code with the Rhythm of Creativity
          </p>
          <p className="text-gray-200 text-base sm:text-lg mt-2 flex items-center gap-2 justify-center lg:justify-start">
            <FaMapMarkerAlt className="text-[#1DB954]" />
            Based in Abu Dhabi, UAE
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 mt-6 lg:mt-8">
            <button
              aria-label="View my portfolio work"
              className="bg-[#1DB954] border border-[#1DB954] hover:bg-transparent rounded-3xl px-5 py-3 duration-100 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            >
              View My Work
            </button>
            <button
              aria-label="Connect with me"
              className="liquid-button border border-[#1DB954] bg-transparent hover:bg-[#1DB954] rounded-3xl px-5 py-3 duration-100 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
