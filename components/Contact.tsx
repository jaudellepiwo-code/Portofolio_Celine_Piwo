'use client'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/50 bg-white/30 p-10 text-center shadow-xl backdrop-blur-xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-violet-700">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
          Let’s connect
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
          Ich bin offen für Werkstudentenstellen, Praktika oder ein duales
          Studium im IT-Bereich.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jaudellepiwo@gmail.com"
            className="rounded-full bg-violet-600 px-8 py-3 font-black text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-1 hover:bg-violet-700"
          >
            E-Mail schreiben
          </a>

          <a
            href="tel:+4917685981265"
            className="rounded-full border border-white/60 bg-white/35 px-8 py-3 font-black text-slate-800 backdrop-blur-lg transition hover:bg-white/50"
          >
            Anrufen
          </a>
        </div>
      </div>

      <footer className="py-8 text-center text-sm font-semibold text-slate-700">
        © 2026 Celine Jaudelle Piwo Pefienere
      </footer>
    </section>
  );
}