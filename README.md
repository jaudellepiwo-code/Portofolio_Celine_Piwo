#  Portfolio – Celine Jaudelle Piwo Pefienere

<div align="center">

![Banner](docs/screenshots/hero.png)

<br/>

**🇩🇪 Deutsch** · **🇬🇧 English**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 🇩🇪 Deutsch

###  Überblick

Dieses Repository enthält den vollständigen Quellcode der **persönlichen Portfolio-Website** von **Celine Jaudelle Piwo Pefienere**, Informatikstudentin im 4. Fachsemester an der Hochschule Darmstadt.

Die Website dient als digitales Aushängeschild und präsentiert auf professionelle Weise:
- **Persönliche Informationen** und akademischen Werdegang
- **Technische Kenntnisse** und Kompetenzen
- **Ausgewählte Studienprojekte** aus den Bereichen Netzwerke, Systemprogrammierung und OOP
- **Kontaktmöglichkeiten** für potenzielle Arbeitgeber und Kooperationspartner

---

### Design-Philosophie

Das visuelle Konzept basiert auf einem modernen **Glassmorphism-Design** mit einem warmen Rosa-Violett-Farbverlauf. Die Benutzeroberfläche setzt auf:

- **Subtile Transparenzeffekte** (`backdrop-blur`, `bg-white/25`) für Tiefe und Eleganz
- **Fließende Gradienten** von Pink über Purple bis Violet
- **Abgerundete Karten** (`rounded-3xl`, `rounded-[2.5rem]`) für ein weiches, modernes Erscheinungsbild
- **Hover-Animationen** mit sanftem Anheben der Elemente (`hover:-translate-y-2`)
- **Violett als Akzentfarbe** (`violet-600`, `violet-700`) für CTAs und Hervorhebungen

---

### Projektstruktur

```
Portofolio_Celine_Piwo/
│
├── app/                          # Next.js App Router
│   ├── globals.css               # Globale Stile, Scroll-Verhalten, Farben
│   ├── layout.tsx                # Root Layout mit Metadaten
│   └── page.tsx                  # Hauptseite – alle Sektionen zusammengeführt
│
├── components/                   # Wiederverwendbare React-Komponenten
│   ├── Navbar.tsx                # Fixierte Navigation mit Glassmorphism
│   ├── Hero.tsx                  # Startbereich mit Hauptüberschrift & CTA
│   ├── About.tsx                 # Über-mich-Sektion mit Karten
│   ├── Skills.tsx                # Technische Kenntnisse als Grid
│   ├── Projects.tsx              # Studienprojekte mit Tags
│   └── Contact.tsx               # Kontaktbereich mit Footer
│
├── package.json                  # Projektabhängigkeiten & Skripte
├── tailwind.config.js            # Tailwind CSS Konfiguration
├── tsconfig.json                 # TypeScript Compiler-Einstellungen
├── postcss.config.js             # PostCSS mit Autoprefixer
└── next-env.d.ts                 # Next.js TypeScript-Definitionen
```

---

###  Screenshots der Anwendung

####  Hero – Startbereich

> Impressionanter Einstieg mit dem Namen, Studienrichtung und einem glasmorphischen Haupt-Widget.

![Hero-Bereich](docs/screenshots/hero.png)

- Voller Bildschirm-Bereich (`min-h-screen`)
- Großformatiger Name in Weiß mit Schlagschatten
- Untertitel: **„Softwareentwicklung & Netzwerke"**
- Zwei CTAs: „Projekte ansehen" und „Kontakt"
- Dekoratives Kreis-Widget rechts: *Code. Network. Build.*
- Hintergrund mit animierten Blur-Kreisen in Pink und Violet

---

####  About – Über mich

> Persönliche Vorstellung mit akademischen Schwerpunkten und Zielsetzung.

![About-Bereich](docs/screenshots/about.png)

- Dreispaltiges Karten-Layout mit **Studium**, **Fokus** und **Ziel**
- **Studium**: Bachelor of Science Informatik, Hochschule Darmstadt
- **Fokus**: C/C++, Netzwerkanalyse, Systemarchitektur, hardwarenahe Programmierung
- **Ziel**: Professionelles IT-Umfeld, Verknüpfung von Theorie und Praxis

---

####  Skills – Technische Kenntnisse

> Übersicht aller technischen Werkzeuge und Sprachen in einem interaktiven Grid.

![Skills-Bereich](docs/screenshots/skills.png)

| Kategorie | Kenntnisse |
|---|---|
| Programmiersprachen | C / C++, Assembler ARM, HTML / CSS |
| Methoden & Konzepte | OOAD / UML |
| Netzwerk & Sicherheit | Wireshark, Kali Linux |
| Versionsverwaltung | GitHub / GitLab |
| Virtualisierung & Tools | Oracle VirtualBox, Qt Creator |
| Produktivität | Microsoft Office |

Alle Skill-Badges besitzen einen **Hover-Effekt**: Beim Überfahren mit der Maus wechseln sie zu einem violetten Hintergrund mit weißem Text.

---

####  Projects – Studienprojekte

> Drei ausgewählte Projekte aus dem Studium mit technischen Tags.

![Projekte-Bereich](docs/screenshots/projects.png)

**1. Netzwerkanalyse & TCP-Entwicklung**
- Analyse von DNS-, TCP- und ICMP-Paketen mit **Wireshark**
- Entwicklung eines **TCP-Clients in C++**
- Tags: `C++` · `Wireshark` · `TCP` · `Linux`

**2. Landkartenanwendung**
- C++ Anwendung zur Verwaltung von **Points of Interest**
- Einsatz von Templates, Vererbung, **Smart Pointern** und **Qt GUI**
- Tags: `C++` · `Qt` · `JSON` · `OOP`

**3. Assembler & Hardware**
- **Low-Level-Programmierung** in ARM Assembler
- Analyse digitaler Schaltungen mit Logikgattern
- Tags: `ARM` · `Assembler` · `Hardware` · `Logik`

---

####  Contact – Kontakt

> Einfacher und direkter Kontaktbereich für Bewerbungen und Anfragen.

![Kontakt-Bereich](docs/screenshots/contact.png)

- Offen für **Werkstudentenstellen**, **Praktika** und **duales Studium** im IT-Bereich
- **E-Mail**: jaudellepiwo@gmail.com
- **Telefon**: +49 176 85981265
- Footer: © 2026 Celine Jaudelle Piwo Pefienere

---

###  Technischer Stack

| Technologie | Version | Verwendungszweck |
|---|---|---|
| **Next.js** | 14.2.5 | React-Framework mit App Router |
| **React** | ^18 | UI-Bibliothek |
| **TypeScript** | ^5 | Typisierung & Entwicklersicherheit |
| **Tailwind CSS** | ^3.4.10 | Utility-First-Styling |
| **PostCSS** | ^8.4.41 | CSS-Transformationen |
| **Autoprefixer** | ^10.4.20 | Browser-Kompatibilität |

---

### Architektur-Details

#### Next.js App Router

Das Projekt nutzt den modernen **App Router** von Next.js 14 (Ordner `app/`), der folgende Vorteile bietet:
- Server- und Client-Komponenten (`'use client'` Direktive)
- Eingebautes Layout-System
- Optimiertes Rendering

#### Komponentenstruktur

Jede Sektion ist eine eigenständige **Client-Komponente**:

```tsx
// Beispiel: app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-violet-300 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
```

#### Pfad-Aliase

TypeScript ist mit `@/*` konfiguriert, was absolute Importe ab Projektstamm ermöglicht:
```json
"paths": { "@/*": ["./*"] }
```

---

### Installation & Lokale Entwicklung

#### Voraussetzungen

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (oder `yarn` / `pnpm`)

#### 1. Repository klonen

```bash
git clone https://github.com/[username]/Portofolio_Celine_Piwo.git
cd Portofolio_Celine_Piwo
```

#### 2. Abhängigkeiten installieren

```bash
npm install
```

#### 3. Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung ist anschließend unter **http://localhost:3000** erreichbar.

#### 4. Produktions-Build erstellen

```bash
npm run build
npm run start
```

---

###  Verfügbare Skripte

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Entwicklungsserver mit Hot-Reloading |
| `npm run build` | Erstellt den optimierten Produktions-Build |
| `npm run start` | Startet den Produktionsserver |

---

###  Design-System

#### Farbpalette

| Farbe | Hex / Klasse | Verwendung |
|---|---|---|
| Violett (Primär) | `violet-600` / `#7c3aed` | CTAs, Akzente, Hover-Effekte |
| Violett (Dark) | `violet-700` / `#6d28d9` | Hover-Zustand der Buttons |
| Violett (Text) | `violet-900` / `#4c1d95` | Überschriften, Logo |
| Pink (Hintergrund) | `pink-200` / `#fbcfe8` | Gradient-Startpunkt |
| Purple (Hintergrund) | `purple-200` / `#e9d5ff` | Gradient-Mitte |
| Slate (Text) | `slate-700` / `#334155` | Fließtext |
| Weiß (Glassmorphism) | `white/25` – `white/50` | Karten-Hintergründe |

#### Typografie

```css
font-family: system-ui, -apple-system, sans-serif;
```

- **`font-black`** (900) für Überschriften und Highlights
- **`font-bold`** (700) für Buttons und Navigationslinks
- **`font-semibold`** (600) für sekundäre Textelemente
- **`tracking-[0.3em]`** für Label-Text in Großbuchstaben

#### Glassmorphism-Effekte

```css
/* Glasskarten-Muster */
border border-white/50
bg-white/25
backdrop-blur-xl
shadow-xl
rounded-[2.5rem]
```

---

###  Navigation

Die Navbar ist **fixiert** (`fixed`) und schwebt am oberen Rand des Bildschirms. Sie besitzt einen Glassmorphism-Effekt und enthält:

| Link | Ziel-Anker |
|---|---|
| Home | `#home` |
| About | `#about` |
| Skills | `#skills` |
| Projects | `#projects` |
| Contact | `#contact` |
| Let's Talk (CTA) | `#contact` |

Smooth Scrolling ist global aktiviert:
```css
html { scroll-behavior: smooth; }
```

---

###  Mögliche Erweiterungen

- [ ] Sprachunterstützung (i18n) für Deutsch/Englisch/Französisch
- [ ] Dunkelmodus (Dark Mode Toggle)
- [ ] Animationen mit **Framer Motion**
- [ ] Dynamisches Kontaktformular (z. B. mit **Resend** oder **EmailJS**)
- [ ] CV/Lebenslauf als PDF-Download
- [ ] Lighthouse-SEO-Optimierung (Meta-Tags, OG-Images)
- [ ] Deployment auf **Vercel**

---

---

## 🇬🇧 English

###  Overview

This repository contains the complete source code of the **personal portfolio website** of **Celine Jaudelle Piwo Pefienere**, a Computer Science student in her 4th semester at Hochschule Darmstadt (Darmstadt University of Applied Sciences).

The website acts as a professional digital business card, showcasing:
- **Personal information** and academic background
- **Technical skills** and competencies
- **Selected university projects** in the areas of networking, systems programming, and OOP
- **Contact options** for potential employers and collaborators

---

### Design Philosophy

The visual concept is based on a modern **Glassmorphism design** with a warm pink-violet gradient. The UI leverages:

- **Subtle transparency effects** (`backdrop-blur`, `bg-white/25`) for depth and elegance
- **Flowing gradients** from pink through purple to violet
- **Rounded cards** (`rounded-3xl`, `rounded-[2.5rem]`) for a soft, modern appearance
- **Hover animations** with a gentle lift of elements (`hover:-translate-y-2`)
- **Violet as accent color** (`violet-600`, `violet-700`) for CTAs and highlights

---

###  Project Structure

```
Portofolio_Celine_Piwo/
│
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles, scroll behavior, colors
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page – all sections assembled
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx                # Fixed navigation with glassmorphism
│   ├── Hero.tsx                  # Landing area with headline & CTA
│   ├── About.tsx                 # About section with cards
│   ├── Skills.tsx                # Technical skills in a grid layout
│   ├── Projects.tsx              # University projects with tags
│   └── Contact.tsx               # Contact area with footer
│
├── package.json                  # Project dependencies & scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript compiler settings
├── postcss.config.js             # PostCSS with Autoprefixer
└── next-env.d.ts                 # Next.js TypeScript definitions
```

---

###  Application Screenshots

####  Hero – Landing Section

> Impressive entry with name, field of study, and a glassmorphic main widget.

![Hero Section](docs/screenshots/hero.png)

- Full-screen section (`min-h-screen`)
- Large name in white with drop shadow
- Subtitle: **"Software Development & Networks"**
- Two CTAs: "View Projects" and "Contact"
- Decorative circle widget on the right: *Code. Network. Build.*
- Background with animated blur circles in pink and violet

---

####  About – About Me

> Personal introduction with academic focus areas and career objective.

![About Section](docs/screenshots/about.png)

- Three-column card layout with **Study**, **Focus**, and **Goal**
- **Study**: Bachelor of Science Computer Science, Hochschule Darmstadt
- **Focus**: C/C++, network analysis, system architecture, low-level programming
- **Goal**: A professional IT environment connecting theory and practice

---

####  Skills – Technical Knowledge

> Overview of all technical tools and languages in an interactive grid.

![Skills Section](docs/screenshots/skills.png)

| Category | Skills |
|---|---|
| Programming Languages | C / C++, ARM Assembler, HTML / CSS |
| Methods & Concepts | OOAD / UML |
| Networking & Security | Wireshark, Kali Linux |
| Version Control | GitHub / GitLab |
| Virtualization & Tools | Oracle VirtualBox, Qt Creator |
| Productivity | Microsoft Office |

All skill badges feature a **hover effect**: hovering switches the card to a violet background with white text.

---

####  Projects – University Projects

> Three selected academic projects with technical tags.

![Projects Section](docs/screenshots/projects.png)

**1. Network Analysis & TCP Development**
- Analysis of DNS, TCP, and ICMP packets using **Wireshark**
- Development of a **TCP client in C++**
- Tags: `C++` · `Wireshark` · `TCP` · `Linux`

**2. Map Application**
- C++ application to manage **Points of Interest**
- Use of templates, inheritance, **smart pointers**, and **Qt GUI**
- Tags: `C++` · `Qt` · `JSON` · `OOP`

**3. Assembler & Hardware**
- **Low-level programming** in ARM Assembler
- Analysis of digital circuits with logic gates
- Tags: `ARM` · `Assembler` · `Hardware` · `Logic`

---

####  Contact – Get in Touch

> Simple and direct contact section for job applications and inquiries.

![Contact Section](docs/screenshots/contact.png)

- Open to **working student positions**, **internships**, and **dual study programs** in IT
- **Email**: jaudellepiwo@gmail.com
- **Phone**: +49 176 85981265
- Footer: © 2026 Celine Jaudelle Piwo Pefienere

---

###  Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14.2.5 | React framework with App Router |
| **React** | ^18 | UI library |
| **TypeScript** | ^5 | Type safety & developer experience |
| **Tailwind CSS** | ^3.4.10 | Utility-first styling |
| **PostCSS** | ^8.4.41 | CSS transformations |
| **Autoprefixer** | ^10.4.20 | Browser compatibility |

---

###  Architecture Details

#### Next.js App Router

The project uses the modern **App Router** from Next.js 14 (`app/` directory), offering:
- Server and client components (`'use client'` directive)
- Built-in layout system
- Optimized rendering

#### Component Architecture

Each section is a standalone **Client Component**:

```tsx
// Example: app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-violet-300 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
```

#### Path Aliases

TypeScript is configured with `@/*` for absolute imports from the project root:
```json
"paths": { "@/*": ["./*"] }
```

---

###  Installation & Local Development

#### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or `yarn` / `pnpm`)

#### 1. Clone the Repository

```bash
git clone https://github.com/[username]/Portofolio_Celine_Piwo.git
cd Portofolio_Celine_Piwo
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**.

#### 4. Create a Production Build

```bash
npm run build
npm run start
```

---

###  Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the dev server with hot-reloading |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |

---

###  Design System

#### Color Palette

| Color | Hex / Class | Usage |
|---|---|---|
| Violet (Primary) | `violet-600` / `#7c3aed` | CTAs, accents, hover effects |
| Violet (Dark) | `violet-700` / `#6d28d9` | Button hover state |
| Violet (Text) | `violet-900` / `#4c1d95` | Headings, logo |
| Pink (Background) | `pink-200` / `#fbcfe8` | Gradient start |
| Purple (Background) | `purple-200` / `#e9d5ff` | Gradient middle |
| Slate (Text) | `slate-700` / `#334155` | Body text |
| White (Glassmorphism) | `white/25` – `white/50` | Card backgrounds |

#### Typography

```css
font-family: system-ui, -apple-system, sans-serif;
```

- **`font-black`** (900) for headings and highlights
- **`font-bold`** (700) for buttons and nav links
- **`font-semibold`** (600) for secondary text elements
- **`tracking-[0.3em]`** for uppercase label text

#### Glassmorphism Pattern

```css
/* Glass card pattern */
border border-white/50
bg-white/25
backdrop-blur-xl
shadow-xl
rounded-[2.5rem]
```

---

###  Navigation

The Navbar is **fixed** and floats at the top of the screen. It features a glassmorphism effect and contains:

| Link | Anchor Target |
|---|---|
| Home | `#home` |
| About | `#about` |
| Skills | `#skills` |
| Projects | `#projects` |
| Contact | `#contact` |
| Let's Talk (CTA) | `#contact` |

Smooth scrolling is globally enabled:
```css
html { scroll-behavior: smooth; }
```

---

###  Possible Future Enhancements

- [ ] Multi-language support (i18n) for German/English/French
- [ ] Dark Mode Toggle
- [ ] Animations with **Framer Motion**
- [ ] Dynamic contact form (e.g., with **Resend** or **EmailJS**)
- [ ] CV / Resume PDF download
- [ ] Lighthouse SEO optimization (meta tags, OG images)
- [ ] Deployment on **Vercel**

---

##  Author

**Celine Jaudelle Piwo Pefienere**
-  jaudellepiwo@gmail.com
-  +49 176 85981265
-  B.Sc. Informatik – Hochschule Darmstadt (4. Fachsemester / 4th Semester)

---

<div align="center">

© 2026 Celine Jaudelle Piwo Pefienere · All rights reserved

*Made with 💜 using Next.js & Tailwind CSS*

</div>
