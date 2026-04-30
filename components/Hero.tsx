'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28"
    >
      <div className="absolute left-8 top-28 h-72 w-72 rounded-full bg-pink-400/40 blur-3xl" />
      <div className="absolute right-8 bottom-16 h-96 w-96 rounded-full bg-violet-500/40 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40" />

      <div className="relative grid w-full max-w-6xl items-center gap-10 rounded-[3rem] border border-white/50 bg-white/25 p-8 shadow-2xl backdrop-blur-2xl md:grid-cols-2 md:p-14">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-violet-700">
            Informatikstudentin
          </p>

          <h1 className="text-6xl font-black leading-none text-white drop-shadow-lg md:text-8xl">
            Celine <br />
            Jaudelle
          </h1>

          <h2 className="mt-5 text-3xl font-black text-slate-800 md:text-5xl">
            Softwareentwicklung & Netzwerke
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-700">
            Ich studiere Informatik an der Hochschule Darmstadt und interessiere
            mich besonders für C/C++, Rechnernetze, Systemarchitektur und
            moderne Web-Technologien.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-7 py-3 font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-1 hover:bg-violet-700"
            >
              Projekte ansehen
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/60 bg-white/30 px-7 py-3 font-bold text-slate-800 backdrop-blur-lg transition hover:bg-white/50"
            >
              Kontakt
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-gradient-to-br from-pink-300 to-violet-500 opacity-70 blur-xl" />

          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-white/60 bg-white/30 p-8 shadow-2xl backdrop-blur-xl">
            <div className="text-center">
              <div className="text-7xl">💻</div>
              <p className="mt-6 text-xl font-black text-violet-900">
                Code. Network. Build.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-700">
                Portfolio Website
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}