import { createFileRoute } from '@tanstack/react-router'
import profileImage from '../../image/assets (1)/portrait-2026.jpg'
import maquettePreview from "../../image/assets (1)/Capture d'écran 2024-06-25 184703.png"

const projects = [
  {
    number: '01',
    type: 'Alternance · Dataream',
    title: 'CRM & automatisations metier',
    description:
      'Dans le cadre de mon alternance, je construis des applications CRM et des API pour fiabiliser les flux commerciaux. J’automatise aussi les synchronisations entre bases et outils metier avec n8n et Make.',
    tags: ['React', 'FastAPI', 'Supabase', 'n8n', 'Make'],
    tone: 'project-cocoa',
  },
  {
    number: '02',
    type: 'IA & cloud · HETIC',
    title: 'ImageDeePy',
    description:
      'Une API d’analyse environnementale qui classe les dechets et propose une orientation adaptee. J’ai travaille la pipeline de machine learning, l’inference et le deploiement cloud.',
    tags: ['Python', 'Azure Functions', 'Docker', 'Vision Transformer'],
    tone: 'project-green',
    href: 'https://github.com/WBoogey/imageDeePy',
  },
  {
    number: '03',
    type: 'Robotique de service',
    title: 'Health Robot',
    description:
      'Une application pour organiser les livraisons de fournitures en milieu hospitalier. J’interviens surtout sur le backend, la logique de mission et les fonctions d’IA qui aident le robot a interagir avec son environnement.',
    tags: ['TanStack Start', 'FastAPI', 'MQTT', 'Docker Compose', 'MySQL'],
    tone: 'project-indigo',
    href: 'https://github.com/Amineo21/Health_Robot',
  },
  {
    number: '04',
    type: 'Mes debuts · 2024',
    title: 'Maquette e-commerce',
    description:
      'Une de mes premieres integrations front-end. Je la conserve ici pour montrer le chemin parcouru, du maquettage et de l’interface vers des produits full-stack complets.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tone: 'project-sand',
    href: 'https://github.com/WBoogey/Maquette-1',
    preview: maquettePreview,
  },
]

const skills = [
  {
    label: 'Interface',
    values: [
      { name: 'React', icon: 'react' },
      { name: 'TanStack Start', icon: 'tanstack' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Vue', icon: 'vuedotjs' },
      { name: 'Nuxt', icon: 'nuxt' },
    ],
  },
  {
    label: 'Serveur',
    values: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Adonis.js', icon: 'adonisjs' },
      { name: 'PHP', icon: 'php' },
    ],
  },
  {
    label: 'Donnees',
    values: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Airtable', icon: 'airtable' },
    ],
  },
  {
    label: 'Livraison',
    values: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Azure', icon: 'azure' },
      { name: 'n8n', icon: 'n8n' },
      { name: 'Make', icon: 'make' },
      { name: 'REST APIs', icon: null },
    ],
  },
]

const experiences = [
  {
    date: '02.2025 - aujourd’hui',
    role: 'Developpeur full-stack & IA',
    company: 'Dataream',
    description:
      'CRM, API REST et synchronisation de donnees pour des equipes et courtiers. Je relie produits React, backends FastAPI et automatisations metier.',
  },
  {
    date: '05.2025 - 06.2025',
    role: 'Developpeur backend Python, IA & cloud',
    company: 'HETIC',
    description:
      'API REST, ML et inference serverless pour suivre l’impact environnemental et classifier les dechets en temps reel.',
  },
  {
    date: '03.2025 - 05.2025',
    role: 'Developpeur full-stack',
    company: 'Hackathon Publicis x Institut Jean Monnet',
    description:
      'PWA de mini-jeux educatifs, temps reel Laravel et WebSockets, dans une equipe franco-allemande.',
  },
]

export const Route = createFileRoute('/')({ component: Portfolio })

function Portfolio() {
  return (
    <main id="contenu">
      <div className="site-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Retour en haut">
            <span className="wordmark-mark">CY</span>
            <span className="wordmark-copy">
              <span>Christ-Yvann Ehoura</span>
              <span className="wordmark-role">Developpeur full-stack</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#projets">Projets</a>
            <a href="#parcours">Parcours</a>
            <a href="#stack">Stack</a>
          </nav>

          <a className="header-contact" href="#contact">
            Me contacter <ArrowIcon />
          </a>

          <details className="mobile-nav">
            <summary aria-label="Ouvrir le menu">
              <span>Menu</span>
              <span className="menu-mark" aria-hidden="true" />
            </summary>
            <nav aria-label="Navigation mobile">
              <a href="#projets">Projets</a>
              <a href="#parcours">Parcours</a>
              <a href="#stack">Stack</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </header>

        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Developpeur full-stack & automatisation IA</p>
            <h1 id="hero-title">
              Construire le <em>solide</em> derriere les idees ambitieuses.
            </h1>
            <p className="hero-lede">
              Je suis Christ-Yvann Ehoura, developpeur full-stack oriente backend. Je transforme des besoins metier en produits fiables, de la base de donnees jusqu’a l’interface.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projets">
                Explorer mon travail <ArrowIcon />
              </a>
              <a className="text-link" href="mailto:ehourayvannakora@gmail.com">
                ehourayvannakora@gmail.com <span aria-hidden="true">/</span>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait de Christ-Yvann Ehoura">
            <div className="sun-disc" aria-hidden="true" />
            <div className="woven-panel panel-one" aria-hidden="true" />
            <div className="woven-panel panel-two" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={profileImage} alt="Christ-Yvann Ehoura" />
            </div>
            <div className="availability-stamp">
              <span>Disponible</span>
              <strong>Oct. 2026</strong>
              <small>3 sem. entreprise<br />1 sem. ecole</small>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Domaines de specialite">
          <div><span>01</span> Architectures API</div>
          <div><span>02</span> Donnees utiles</div>
          <div><span>03</span> Automatisation IA</div>
          <div className="signal-location">Cergy, France <i aria-hidden="true" /> Abidjan, Cote d’Ivoire</div>
        </section>

        <section className="statement-section" aria-labelledby="statement-title">
          <p className="section-label">Une pratique full-stack</p>
          <div className="statement-grid">
            <h2 id="statement-title">Penser l’experience dans son ensemble, pas seulement l’ecran.</h2>
            <div>
              <p>
                Mon terrain de jeu se situe a la jonction du produit, de la donnee et de l’automatisation. J’aime les interfaces calmes, soutenues par des fondations techniques exigeantes.
              </p>
              <a className="inline-link" href="#parcours">Lire mon parcours <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="work-section" id="projets" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Travaux selectionnes</p>
              <h2 id="work-title">Des outils qui font avancer les equipes.</h2>
            </div>
            <p>Trois contextes, un meme objectif : rendre la technologie concrete, claire et actionnable.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                {project.href ? (
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Voir le projet <ExternalIcon />
                  </a>
                ) : (
                  <p className="project-confidential">Projet realise en alternance</p>
                )}
                <ul className="tech-list" aria-label={`Technologies de ${project.title}`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                {project.preview ? (
                  <div className="project-preview" aria-hidden="true">
                    <img src={project.preview} alt="" />
                  </div>
                ) : (
                  <div className="project-geometry" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="parcours" aria-labelledby="experience-title">
          <div className="experience-intro">
            <p className="section-label">Parcours</p>
            <h2 id="experience-title">Apprendre vite.<br />Livrer proprement.</h2>
            <p>Actuellement en Bachelor Concepteur de Solutions Numeriques a HETIC, puis Mastère CTO & Tech Lead a partir de novembre 2026.</p>
          </div>
          <ol className="timeline">
            {experiences.map((experience) => (
              <li key={experience.date}>
                <p className="timeline-date">{experience.date}</p>
                <div className="timeline-content">
                  <h3>{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                  <p>{experience.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading stack-heading">
            <div>
              <p className="section-label">Stack & savoir-faire</p>
              <h2 id="stack-title">Du schema a la livraison.</h2>
            </div>
            <p>Une stack choisie pour faire circuler l’information sans fragiliser le produit.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article className="skill-group" key={skill.label}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill.label}</h3>
                <ul>
                  {skill.values.map((value) => (
                    <li key={value.name}>
                      <TechIcon icon={value.icon} />
                      {value.name}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid-pattern" aria-hidden="true" />
          <p className="section-label">Une idee, un besoin, une alternance ?</p>
          <h2 id="contact-title">Faisons de la place aux projets qui comptent.</h2>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:ehourayvannakora@gmail.com">
              Ecrire un message <ArrowIcon />
            </a>
            <a className="contact-social" href="https://www.linkedin.com/in/yvann-ehoura/" target="_blank" rel="noreferrer">
              LinkedIn <ExternalIcon />
            </a>
            <a className="contact-social" href="https://github.com/WBoogey" target="_blank" rel="noreferrer">
              GitHub <ExternalIcon />
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <p>(c) 2026 Christ-Yvann Ehoura</p>
          <p>Full-stack developer - APIs, data & automation</p>
          <a href="#top">Retour en haut <span aria-hidden="true">↑</span></a>
        </footer>
      </div>
    </main>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M3 9h11M10 4l5 5-5 5" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M5 13 13 5M7 5h6v6" />
    </svg>
  )
}

function TechIcon({ icon }: { icon: string | null }) {
  if (!icon) {
    return <span className="tech-icon tech-icon-fallback" aria-hidden="true">&lt;/&gt;</span>
  }

  if (icon === 'azure') {
    return (
      <span className="tech-icon" aria-hidden="true">
        <svg className="azure-icon" viewBox="0 0 24 24">
          <path d="M0 20.5 7.56 7.4h8.48L8.48 20.5H0Z" />
          <path d="M9.15 20.5 17.3 6.4 24 20.5H9.15Z" />
        </svg>
      </span>
    )
  }

  return (
    <span className="tech-icon" aria-hidden="true">
      <img src={`https://cdn.simpleicons.org/${icon}/3a241c`} alt="" loading="lazy" />
    </span>
  )
}
