'use client'

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/50 bg-white/25 p-8 shadow-xl backdrop-blur-xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-violet-700">
          About me
        </p>

        <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
          Ich verbinde Theorie mit praktischer IT-Erfahrung.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
          Ich bin Informatikstudentin im 4. Fachsemester an der Hochschule
          Darmstadt. Meine Schwerpunkte liegen in Software Engineering,
          objektorientierter Programmierung, Rechnernetzen, Betriebssystemen
          und IT-Sicherheit.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-white/35 p-6 shadow-md">
            <h3 className="text-xl font-black text-violet-900">Studium</h3>
            <p className="mt-2 text-slate-700">
              Bachelor of Science Informatik an der Hochschule Darmstadt.
            </p>
          </div>

          <div className="rounded-3xl bg-white/35 p-6 shadow-md">
            <h3 className="text-xl font-black text-violet-900">Fokus</h3>
            <p className="mt-2 text-slate-700">
              C/C++, Netzwerkanalyse, Systemarchitektur und hardwarenahe
              Programmierung.
            </p>
          </div>

          <div className="rounded-3xl bg-white/35 p-6 shadow-md">
            <h3 className="text-xl font-black text-violet-900">Ziel</h3>
            <p className="mt-2 text-slate-700">
              Ein professionelles IT-Umfeld, in dem ich Theorie und Praxis
              verbinden kann.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}