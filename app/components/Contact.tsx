import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="w-full py-20 bg-black flex flex-col items-center justify-center gap-6 text-white">

      {/* Icons */}
      <div className="flex gap-4">
        {/* GitHub */}
        <div
          tabIndex={0}
          role="button"
          className="liquid-button relative w-14 h-14 rounded-2xl
                     flex items-center justify-center
                     transition-transform duration-200
                     hover:scale-105 focus:scale-105
                     focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
        >
          <a
            href="https://github.com/abubakryosry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="z-10"
          >
            <FaGithub size={22} />
          </a>

          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-30" />
        </div>

        {/* LinkedIn */}
        <div
          tabIndex={0}
          role="button"
          className="liquid-button relative w-14 h-14 rounded-2xl
                     flex items-center justify-center
                     transition-transform duration-200
                     hover:scale-105 focus:scale-105
                     focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
        >
          <a
            href="https://www.linkedin.com/in/abubakr-yosry-abubakr-03ba21202/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="z-10"
          >
            <FaLinkedin size={22} />
          </a>

          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-30" />
        </div>
      </div>

      {/* Email button */}
      <div
        tabIndex={0}
        role="button"
        className="liquid-button relative px-6 py-2.5 rounded-full
                   flex items-center gap-2
                   transition-transform duration-200
                   hover:scale-105 focus:scale-105
                   focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
      >
        <a
          href="mailto:abubakryosryabubakr@gmail.com?subject=Let’s Talk"
          className="z-10 flex items-center gap-2 text-[#1DB954] font-medium text-sm"
        >
          <MdEmail size={18} />
          Let’s talk
        </a>

        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-30" />
      </div>
      <p className="text-[#1DB954] text-center">© 2025 Abubakr Yosry.</p>
    </section>
  );
}
