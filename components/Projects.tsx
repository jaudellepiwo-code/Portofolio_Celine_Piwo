'use client'

const projects = [
  {
    title: "Portfolio-Webseite",
    description:
      "Bei diesem Projekt habe ich eine moderne Portfolio-Webseite mit Next.js, React und Tailwind CSS entwickelt. Die Anwendung ist als Single-Page-Website aufgebaut und besteht aus wiederverwendbaren Komponenten wie Hero, About, Skills, Projects und Contact. Ziel war es, eine moderne, responsive und leicht wartbare Wedoberfläche zu erstellen.",
    tags: ["Next.js", "React", "Tailwind CSS", "GitHub"],
    link: "https://github.com/jaudellepiwo-code/Portofolio_Celine_Piwo",
    image: "/images/portfolio.svg",
  },
  {
    title: "Netzwerkanalyse & TCP-Entwicklung",
    description:
      "Analyse von DNS-, TCP- und ICMP-Paketen mit Wireshark sowie Entwicklung eines TCP-Clients in C++.",
    tags: ["C++", "Wireshark", "TCP", "Linux"],
    image: "/images/network.svg",
  },
  {
    title: "Landkartenanwendung",
    description:
      "C++ Anwendung zur Verwaltung von Points of Interest mit Templates, Vererbung, Smart Pointern und Qt GUI.",
    tags: ["C++", "Qt", "JSON", "OOP"],
    image: "/images/landkarte.svg",
  },
  {
    title: "Assembler & Hardware",
    description:
      "Low-Level Programmierung in ARM Assembler und Analyse digitaler Schaltungen mit Logikgattern.",
    tags: ["ARM", "Assembler", "Hardware", "Logik"],
    image: "/images/hardware.svg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-[2.5rem] border border-white/50 bg-white/25 p-8 shadow-xl backdrop-blur-xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-violet-700">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Projekte (Studium & Persönlich)
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2"
            >
              <div className="mb-6 flex h-40 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-pink-300/70 to-violet-500/70 text-6xl shadow-inner overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  "✦"
                )}
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-700">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-600 px-3 py-1 text-sm font-bold text-white shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-bold text-violet-700 hover:underline"
                >
                  Projekt ansehen →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}