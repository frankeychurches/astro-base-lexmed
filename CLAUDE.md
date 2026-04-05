# CLAUDE.md — Peritaje Médico Almería · Website Project

This file is the single source of truth for Claude Code when working on this project.
Read it entirely before making any change.

---

## 🎯 Project Purpose

Rebuild the online presence of **Dr. Francisco José Llave Gamero**, a Spanish medical expert
(*perito médico*) based in Almería, Spain. His current website is
[peritajemedicoalmeria.com](https://peritajemedicoalmeria.com/) — functional but outdated.

The goal is a **modern, elegant, minimalist, and lead-generating website** that:
- Conveys authority and professional trust immediately
- Makes it effortless for potential clients (injured people, lawyers, insurance companies) to understand the services and contact the doctor
- Loads fast, looks beautiful on mobile, and ranks well organically
- Replaces the old WordPress site entirely

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 (static site generation) |
| UI Components | React (for interactive islands only) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (scroll reveal, subtle transitions) |
| Icons | Astro Icon + Tabler icon set |
| Content | Astro `.astro` pages + MDX where needed |
| Deployment | GitHub Pages via GitHub Actions |

**Do not introduce new dependencies** unless explicitly requested. Keep the stack lean.

---

## 🎨 Design Principles

### Non-negotiable aesthetic rules
- **Minimalist and elegant** — white space is a feature, not a bug
- **Black, white, and one accent color** — proposed: deep navy `#1a2e4a` or warm slate; confirm before applying broadly
- **No clutter** — one clear CTA per section, never two competing actions
- **Typography-first** — large, confident headings; clean body text; no decorative fonts
- **Subtle motion only** — scroll reveals, no bouncing or flashy animations
- **Mobile-first** — every section must work perfectly on a 375px screen

### Tone of voice (Spanish copy)
- Professional, warm, and reassuring — not cold or bureaucratic
- Speak directly to the patient or lawyer reading the page
- Avoid jargon unless explaining a service (then define it simply)
- The doctor's name is **Dr. Francisco José Llave Gamero** — always use full title on first mention

---

## 👤 The Client — Dr. Francisco José Llave Gamero

- **Specialty:** Médico perito — valoración del daño corporal, informes periciales médico-legales
- **Active since:** 2009
- **Location:** Calle El Alcázar, 4.2 - Oficina. Espacio Alfa. 04006 Almería
- **Contact:** WhatsApp only: 650 403 966
- **Email:** info@peritajemedicoalmeria.com
- **Doctoralia profile:** https://www.doctoralia.es/francisco-jose-llave-gamero/medico-de-familia-medico-general/almeria
- **Target audience:** Injured individuals, lawyers (*letrados*), insurance companies, HR departments

---

## 📄 Site Structure

### Pages
```
/                   → Home (hero + services overview + about snippet + CTA + contact)
/servicios          → All services (detailed cards)
/sobre-mi           → About the doctor
/contacto           → Contact page with WhatsApp CTA + map
/servicios/[slug]   → Individual service detail pages (6 total)
```

### Navigation
```
Inicio | Servicios | Sobre mí | Contacto
```
Plus a sticky **"Contactar por WhatsApp"** button visible on all pages (mobile bottom bar or
top-right corner on desktop).

---

## 🩺 Services — Full Content Reference

All 6 services scraped from the original website. Use this as the authoritative content source.

---

### 1. Valoración del Daño Corporal
**Slug:** `valoracion-dano-corporal`

La Valoración del Daño Corporal define la actuación pericial médica dirigida a conocer con la máxima exactitud y objetividad las consecuencias que un suceso traumático ha tenido sobre la integridad psicofísica y la salud de una persona, permitiendo al juzgador establecer las consecuencias penales, laborales, económicas, familiares y morales del mismo.

Se lleva a cabo por un perito médico que, tras establecer el nexo de causalidad, argumenta de forma científica en un **informe pericial** los días necesarios para la curación o estabilización lesional y las secuelas del lesionado.

**Casos tratados:**
- **Accidentes de tráfico** — análisis de lesiones, biomecánica lesional, baremo aplicable, días de baja y secuelas reclamables, daño personal y patrimonial
- **Accidentes en transporte público** — valoración por baremo del seguro de viajeros (SOVI)
- **Responsabilidad civil por caídas** — en comercios, comunidades de vecinos o el hogar
- **Responsabilidad patrimonial** — daños causados por una Administración Pública
- **Lesiones por agresión o maltrato** — evaluación para procedimientos penales
- **Accidentes laborales por falta de medidas de seguridad** — reclamación a la empresa o aseguradora además de la cobertura de la mutua

---

### 2. Informes Periciales
**Slug:** `informes-periciales`

Un informe médico de Valoración del Daño Corporal debe incluir como mínimo:
- Relación de documentos manejados (clínicos y no clínicos)
- Estudio del Estado Anterior (antecedentes médicos relevantes)
- Descripción del hecho traumático
- Exploración clínica rigurosa (física y psíquica si procede)
- Consideraciones Médico-Legales (influencia del Estado Anterior como concausa)
- Nexo de Causalidad con criterios de causalidad para la imputación médico-legal
- Días necesarios para la estabilización lesional
- Secuelas actuales (y futuras si procede)
- Incapacidad para actividades laborales y habituales
- **Conclusiones Médico-Legales**

---

### 3. Negligencias Médicas
**Slug:** `negligencias-medicas`

Reclamaciones por daños derivados de defectuosa asistencia sanitaria, en cuatro órdenes:
- **Penal** — privación de libertad e inhabilitación profesional del médico
- **Civil** — ejercicio privado de la medicina
- **Contencioso-administrativo** — reclamaciones a la sanidad pública
- **Social** — reintegro de gastos por asistencia en centro privado por urgencia vital, error diagnóstico o denegación de asistencia

**Proceso:** Primero se emite un preinforme de viabilidad para determinar si se infringió la *Lex Artis* y si existe relación causa-efecto con los daños. Después se realiza una pericial de valoración exhaustiva de los daños.

---

### 4. Accidentes de Circulación
**Slug:** `accidentes-circulacion`

Los accidentes de circulación son un problema de salud pública por su alta morbilidad y mortalidad. Las lesiones se valoran conforme al RD 08/2004 y, para siniestros desde el 1 de enero de 2016, por la Ley 35/2015 de 22 de septiembre.

**Sistemática de trabajo:**
1. Evaluación del Estado Anterior
2. Descripción de la evolución clínica del lesionado
3. Anamnesis dirigida
4. Exploración física y psíquica rigurosa
5. Pruebas diagnósticas avanzadas (o recomendación de las adecuadas)
6. Consideraciones Médico-Legales basadas en criterios de causalidad
7. Días necesarios para la estabilización lesional (argumentados)
8. Secuelas actuales y futuras (argumentadas)
9. Incapacidad para actividades habituales (argumentada)
10. Gastos médicos y paramédicos actuales y futuros
11. Otros apartados según el caso

---

### 5. Incapacidades
**Slug:** `incapacidades`

La incapacidad laboral es una especialidad crítica: la situación del paciente al que no se le reconoce su condición es grave, pero el reconocimiento indebido tiene un alto coste para el sistema.

Se realiza una **valoración funcional completa** con criterios biomecánicos para definir las dificultades del paciente en distintas actividades, con defensa posterior en los **Juzgados de lo Social**.

**Tipos de procesos cubiertos:**
- Incapacidad Temporal (IT): enfermedad común (EC), enfermedad profesional (EP), accidente no laboral (ANL), accidente de trabajo (AT)
- Impugnaciones de alta laboral y cambios de contingencias
- Incapacidad Permanente: Parcial, Total, Absoluta y Gran Invalidez
- Informes periciales para reclamaciones previas y demandas por denegación, disconformidad con el grado concedido, o revisiones de grado
- Consultoría a letrados y asistencia a juicio para ratificación

---

### 6. Consultoría Médico-Legal
**Slug:** `consultoria-medico-legal`

Asesoramiento e información documentada a clientes particulares y profesionales del Derecho en materia de:
- Accidentes de circulación
- Accidentes laborales
- Incapacidades
- *Malpraxis* médica
- Otros asuntos médico-legales relacionados

---

## 🧩 Component Guidelines

### ScrollReveal
Use the existing `ScrollReveal.tsx` component for all section entrances.
- Hero content: no delay
- Section headings: `delay={0.1}`
- Cards/grid items: stagger with `delay={0.1 * index}`
- Never animate elements that are already visible above the fold

### Header
- Sticky, transparent on scroll-top, white with shadow on scroll
- Logo: "Dr. Llave Gamero" in a refined serif or semi-bold sans
- Desktop: nav links centered or right-aligned + WhatsApp CTA button
- Mobile: hamburger menu, full-screen overlay or slide-in drawer

### Hero
- Full viewport height on desktop, auto height on mobile
- Headline: one powerful line (e.g. *"Su perito médico de confianza en Almería"*)
- Subheadline: one sentence explaining what he does and for whom
- Two CTAs: primary "Contactar por WhatsApp" + secondary "Ver servicios"
- Background: clean white or very light gray — no stock medical photos unless high quality

### Services Section (Homepage)
- 6-card grid (3×2 desktop, 2×3 tablet, 1×6 mobile)
- Each card: icon + title + one-line description + "Saber más" link
- Cards are clean, bordered, no heavy shadows

### About Section (Homepage snippet)
- Photo of the doctor (placeholder if not provided) + short bio
- Years of experience since 2009 as a trust signal
- Link to full `/sobre-mi` page

### Contact Section / Page
- WhatsApp number prominently displayed: **650 403 966**
- Email: info@peritajemedicoalmeria.com
- Address: Calle El Alcázar, 4.2 - Oficina. Espacio Alfa. 04006 Almería
- Note: *"Solo se atiende por WhatsApp"*
- Embedded Google Map or link to map
- Simple contact form (name, email, message) as a secondary option

### Footer
- Minimal: copyright, legal links (Aviso Legal, Política de Privacidad), email
- No social media icons unless explicitly requested

---

## ✍️ Copy Rules

- All copy is in **Spanish**
- Use `usted` for formal address unless context calls for `tú`
- CTA buttons: action verbs — "Contactar", "Ver servicios", "Solicitar informe", "Escribir por WhatsApp"
- Never use placeholder text like "Lorem ipsum" — always use real or realistic Spanish copy
- Headings: sentence case, not ALL CAPS

---

## ⚙️ Development Rules

1. **Never break existing working pages** — always check `npm run dev` before considering a task done
2. **One concern per component** — keep components small and focused
3. **No inline styles** — use Tailwind classes only
4. **All images go in `src/assets/`** — use Astro's `<Image />` component for optimization
5. **File naming:** kebab-case for files, PascalCase for component names
6. **No hardcoded colors** outside of Tailwind config — define custom colors in `tailwind.config.mjs` if needed
7. **Accessibility:** all interactive elements must have proper `aria-label`; images need `alt` text
8. **When in doubt, ask** — do not invent content, contact info, or credentials

---

## 🚀 Deployment

- Branch: `main`
- GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`
- Always run `npm run build` locally to verify there are no build errors before pushing

---

## 📌 Immediate Next Steps (in order)

1. Update `src/pages/index.astro` — replace template hero copy with Dr. Llave Gamero's content
2. Update `src/components/Header.astro` — correct nav links and branding
3. Update `src/components/Hero.astro` — Spanish headline, subheadline, two CTAs
4. Update `src/components/Features.astro` → rename to `Services.astro` — 6 service cards with real content
5. Add `src/components/About.astro` — doctor bio snippet
6. Update `src/components/CTA.astro` — WhatsApp-focused CTA banner
7. Update `src/components/Footer.astro` — real contact info and legal links
8. Create `/servicios` page and 6 individual service detail pages
9. Create `/sobre-mi` page
10. Create `/contacto` page

---

*Last updated: April 2026. Source content scraped from peritajemedicoalmeria.com.*
