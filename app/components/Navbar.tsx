export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 mt-4">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        <a href="/">
          <h2 className="text-lg text-white lg:text-2xl font-bold">
            <span className="text-[#1DB954]">{`<`}</span>Abubakr
            <span className="text-[#1DB954]">{`/>`}</span>
          </h2>
        </a>
        <a
          href="https://drive.google.com/file/d/11abyT-6yIscnRFSiMRCRgeCalUWyifXD/view"
          target="_blank"
          className="border border-[#1DB954] bg-transparent hover:bg-[#1DB954] rounded-3xl px-6 py-2 duration-150 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
