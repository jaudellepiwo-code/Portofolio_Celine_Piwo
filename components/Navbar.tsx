'use client'

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-full border border-white/40 bg-white/30 px-6 py-4 shadow-lg backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <a href="#home" className="font-black tracking-widest text-violet-900">
          JAUDELLE
        </a>

        <div className="hidden gap-8 text-sm font-semibold text-slate-800 md:flex">
          <a href="#home" className="hover:text-violet-700">Home</a>
          <a href="#about" className="hover:text-violet-700">About</a>
          <a href="#skills" className="hover:text-violet-700">Skills</a>
          <a href="#projects" className="hover:text-violet-700">Projects</a>
          <a href="#contact" className="hover:text-violet-700">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-violet-600 px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-violet-700"
        >
          Let’s Talk
        </a>
      </div>
    </nav>
  );
}