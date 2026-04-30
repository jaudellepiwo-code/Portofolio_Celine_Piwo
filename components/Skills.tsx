'use client'

const skills = [
  "C / C++",
  "Assembler ARM",
  "HTML / CSS",
  "OOAD / UML",
  "Wireshark",
  "GitHub / GitLab",
  "Kali Linux",
  "Oracle VirtualBox",
  "Qt Creator",
  "Microsoft Office",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/50 bg-white/25 p-8 shadow-xl backdrop-blur-xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-violet-700">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
          Technische Kenntnisse
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-3xl border border-white/50 bg-white/35 p-5 text-center font-black shadow-md transition hover:-translate-y-1 hover:bg-violet-600 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}