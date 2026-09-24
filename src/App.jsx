import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Menu, X } from 'lucide-react';

const profile = { name: 'Tomas Coronel', role: 'Estudiante de desarrollo web', location: 'Tucumán, Argentina' };
const skills = ['HTML & CSS', 'JavaScript', 'React', 'Vite', 'Git & GitHub', 'Diseño responsive'];
const projects = [
  { number: '01', name: 'Casa Nativa', type: 'Proyecto de práctica', description: 'Una tienda online conceptual para descubrir objetos de artistas y emprendimientos locales.', tags: ['React', 'CSS'], color: 'peach', mark: 'cn.' },
  { number: '02', name: 'Ritmo', type: 'Proyecto de práctica', description: 'Una aplicación sencilla para organizar hábitos, registrar avances y sostener nuevas rutinas.', tags: ['JavaScript', 'UI'], color: 'blue', mark: '↗' },
];

function Header({ name, role }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="header"><a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark">t.</span><span>{name}<small>{role}</small></span></a>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
    <nav className={menuOpen ? 'nav nav-open' : 'nav'}>{[['Sobre mí','#sobre-mi'],['Proyectos','#proyectos'],['Contacto','#contacto']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contacto">Hablemos <ArrowUpRight size={15}/></a></nav>
  </header>;
}

function Hero({ name, location }) {
  return <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> ESTUDIANTE DE DESARROLLO WEB <span className="eyebrow-line"/></p><h1>Ideas claras.<br/><span className="serif">Experiencias</span><br/>que conectan<span className="period">.</span></h1><p className="hero-intro">Hola, soy <strong>{name}</strong>. Estoy aprendiendo a convertir ideas en experiencias digitales simples, útiles y bien pensadas.</p><div className="hero-actions"><a className="button button-light" href="#proyectos">Ver proyectos <ArrowDownRight size={17}/></a><a className="text-link" href="#sobre-mi">Conoceme un poco más <ArrowDown size={15}/></a></div></div><div className="hero-art" aria-label="Composición gráfica decorativa"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sun"/><span className="art-star star-one">✳</span><span className="art-star star-two">✳</span><span className="art-label">DISEÑO + CÓDIGO<br/>DESDE {location.toUpperCase()}</span><span className="art-coord">26°49' S — 65°13' O</span></div><div className="hero-meta"><span>01 — 04</span><span>SCROLL PARA EXPLORAR ↓</span><span>© 2026</span></div></section>;
}

function About({ expanded, onToggle }) {
  return <section className="about section-wrap" id="sobre-mi"><div className="section-index">01 <span>— SOBRE MÍ</span></div><div className="about-grid"><h2>Curiosidad<br/>con <span className="serif">intención.</span></h2><div className="about-copy"><p>Soy Tomas Coronel, estudiante de desarrollo web en Tucumán. Me interesa cómo la tecnología puede resolver necesidades cotidianas y estoy construyendo mis primeros proyectos mientras aprendo React, JavaScript y diseño responsive.</p>{expanded && <p className="extra-copy">Disfruto aprender haciendo: probar una idea, entender qué funciona y mejorarla paso a paso. Mi objetivo es seguir creciendo como desarrollador y participar en proyectos digitales útiles, claros y accesibles.</p>}<button className="expand-button" onClick={onToggle}>{expanded ? 'Leer menos' : 'Un poco más sobre mí'} <span>{expanded ? '−' : '+'}</span></button></div></div></section>;
}

function Skills({ items }) {
  return <section className="skills section-wrap"><div className="section-index">02 <span>— LO QUE ESTOY APRENDIENDO</span></div><div className="skills-content"><h2>Herramientas<br/><span className="serif">en construcción.</span></h2><div className="skill-list">{items.map((item, index) => <div className="skill" key={item}><span className="skill-number">0{index + 1}</span><span>{item}</span><ArrowUpRight size={16}/></div>)}</div></div></section>;
}

function ProjectCard({ project }) {
  return <article className="project-card"><div className={`project-art ${project.color}`}><span className="project-mark">{project.mark}</span><span className="project-art-label">PROYECTO DE PRÁCTICA</span><span className="project-art-index">{project.number}</span></div><div className="project-details"><div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div><a className="project-arrow" href="#contacto" aria-label={`Consultar sobre ${project.name}`}><ArrowUpRight size={19}/></a></div><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>;
}

function Projects({ items }) {
  return <section className="projects section-wrap" id="proyectos"><div className="section-index">03 <span>— PROYECTOS DE PRÁCTICA</span></div><div className="projects-heading"><h2>Pequeñas ideas,<br/><span className="serif">hechas realidad.</span></h2><p>Ejercicios para aprender,<br/>probar y seguir creciendo.</p></div><div className="project-grid">{items.map(project => <ProjectCard key={project.number} project={project}/>)}</div></section>;
}

function Footer({ name, location }) {
  return <footer className="footer" id="contacto"><div className="section-index">04 <span>— SIGUIENTE PASO</span></div><div className="footer-main"><h2>¿Hacemos<br/><span className="serif">algo juntos?</span></h2><a className="contact-link" href="https://github.com/tomicor979-lgtm" target="_blank" rel="noreferrer"><span>Conectemos en GitHub</span><ArrowUpRight size={23}/></a></div><div className="footer-bottom"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">t.</span><span>{name}<small>{location}</small></span></a><div className="socials"><a href="https://github.com/tomicor979-lgtm" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a></div><span className="copyright">DISEÑO Y DESARROLLO WEB · 2026</span></div></footer>;
}

export default function App() {
  const [showMore, setShowMore] = useState(false);
  return <div className="page-shell"><Header name={profile.name} role={profile.role}/><main><Hero name={profile.name} location={profile.location}/><About expanded={showMore} onToggle={() => setShowMore(!showMore)}/><Skills items={skills}/><Projects items={projects}/></main><Footer name={profile.name} location={profile.location}/></div>;
}
